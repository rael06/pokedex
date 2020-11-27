import React from 'react'

export default function useLocaleStorage(localStorageKey, initialValue) {
  const storedValue = localStorage.getItem(localStorageKey)
  const [value, setValue] = React.useState(storedValue ? storedValue : initialValue)

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value)
  }, [localStorageKey, value])

  return [value, setValue]
}
