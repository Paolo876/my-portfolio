import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

/**
 *  retrieves a specific document from a collection.
 */
export const useDocument = (collection, id) => {
  const [ document, setDocument ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    setError(null)
    setIsLoading(true)
    const unsub = onSnapshot(doc(db, collection, id), (doc) => {
        if(doc.data()){
            setDocument({...doc.data(), id: doc.id})
            setIsLoading(false)
            setError(null)
        } else {
            setError("No data found.")
            setIsLoading(false)

        }
    }, (err) =>{
        console.log(err.message);
        setError('failed to retrieve data.')
        setIsLoading(false)
 
    })

    return () => unsub();
  }, [collection, id]);
  return { document, error, isLoading }
}