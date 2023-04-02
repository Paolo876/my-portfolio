import { useState } from 'react'
import { db } from "../firebase/config";

import { doc, getDoc } from "firebase/firestore";

const useFirestoreActions = () => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  const getDocumentFromCollection = async (collection, id) => {
    setIsLoading(true)
    setError(null)
    try {
      const docSnap = await getDoc(doc(db, collection, id));
      setIsLoading(false)
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log(`Nothing found from collection: ${collection}, document: ${id}`);
      }  
    } catch (err) {
      setIsLoading(false)
      setError(`Failed to retrieve data from collection: ${collection}, document: ${id}`)
    }
  }


  return {
    isLoading,
    error,
    getDocumentFromCollection
  }
}

export default useFirestoreActions