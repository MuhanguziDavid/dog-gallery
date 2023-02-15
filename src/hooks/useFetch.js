import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController()

    fetch(url, { signal: abortController.signal })
    .then(res => {
      if(!res.ok) {
        throw Error('data fetch failed')
      }
      return res.json();
    })
    .then(data => {
      setIsLoading(false)
      setData(data.message)
      setError(null)
    })
    .catch(error => {
      if(error.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        setIsLoading(false)
        setError(error.message)
      }
    })

    return () => abortController.abort()
  }, [url])

  return { data, isLoading, error };
}

export default useFetch
