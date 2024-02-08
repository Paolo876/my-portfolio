import { useReducer, useEffect, useState } from "react"
import { db, timestamp } from "../firebase/config"
import { setDoc, doc, collection, updateDoc, arrayUnion } from "firebase/firestore"
let initialState = {
  document: null,
  isLoading: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return { isLoading: true, document: null, success: false, error: null }
    case 'ADDED_DOCUMENT':
      return { isLoading: false, document: action.payload, success: true, error: null }
    case 'DELETED_DOCUMENT':
      return { isLoading: false, document: null, success: true, error: null }
    case 'UPDATED_DOCUMENT':
      return { isLoading: false, document: action.payload, success: true, error: null }
    case 'ERROR':
      return { isLoading: false, document: null, success: false, error: action.payload }
    default:
      return state
  }
}
/**
 *  add, delete, & update a document from a firestore collection 
 */
export const useFirestore = (_collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  let ref = collection(db, _collection);

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  // add a document
  const addDocument = async (_doc, docName = null, docRef = null) => {
    dispatch({ type: 'IS_LOADING' });
    try {
      const createdAt = timestamp.fromDate(new Date())
      let addedDocument;
      if(docName === null && docRef === null) {
        addedDocument = await setDoc(doc(db, _collection), {..._doc, createdAt})
      } else if(docName !== null && docRef === null) {
        addedDocument = await setDoc(doc(db, _collection, docName), {..._doc, createdAt})
      } else {
        addedDocument = await setDoc(docRef, {..._doc, createdAt})
      }
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });
      return addedDocument;
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
    }
  }

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_LOADING' })

    try {
      await ref.doc(id).delete()
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' })
    }
  }

  // update document
  const updateDocument = async (updates, id=null, ref=null) => {
    dispatch({ type: 'IS_LOADING' })
    try{
      if(id !== null && ref === null){
        const updatedDocument = await updateDoc(doc(db, _collection, id), updates);
        dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: updatedDocument })
        return updatedDocument; 
      }
      if(id === null && ref !== null){
        const updatedDocument = await updateDoc(ref, updates);
        dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: updatedDocument })
        return updatedDocument; 
      }
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
    }
  }

  const updateArrayDocument = async (id, docItem, updates) => {
    const docRef = doc(db, _collection, id);
    await updateDoc(docRef, {
      [docItem]: arrayUnion(updates)
    });
  }
  

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, updateDocument, updateArrayDocument, response }

}
