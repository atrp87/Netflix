import { useState, useEffect } from 'react'
import { db } from '../firebase/firebase'
import { collection, onSnapshot } from 'firebase/firestore'

// onSnapshot: 
// unSubscribe: stop listening when they component unmounts

export const useCollection = (coll) => {
  const [isPending, setIsPending] = useState(false)
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    let ref = collection(db, coll)

    setIsPending(true)

    // unSubscribe: stop listening when they component unmounts
    const unSub = onSnapshot(ref, (snapshot) => {
      // Snapshot fires once initially but anytime after
      // if there there is  a change in the collection ( add / edit / delete) data
      // we get a new snapshot

      let results = []

      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })

      setDocuments(results)
      setIsPending(false)
    })


    return () => unSub()
  }, [coll, setDocuments])

  return { documents, isPending }

}