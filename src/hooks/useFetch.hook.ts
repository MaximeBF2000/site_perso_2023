import { useState, useEffect } from 'react'

export const useFetch = <T = any, E = any>(
  url: string,
  options: RequestInit = {}
) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(url, options)
      .then(res => res.json())
      .then(res => {
        setError(null)
        setData(res)
      })
      .catch(err => {
        setData(null)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [url, options])

  return { data, loading, error }
}
