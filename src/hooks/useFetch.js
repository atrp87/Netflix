import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)

      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error(res.status.text)
        }
        const resJson = await res.json()

        setIsPending(false)
        setData(resJson)
        setError(null)

      } catch (err) {
        setError('Could not fetch media list')
        console.log(err.message);
        setIsPending(false)
      }
    }

    fetchData()
  }, [url])

  return { data, isPending, error }

}