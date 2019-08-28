import { useState } from 'react'
export const useLocalStorage = (key, intialValue) => {
  const [storedValue, setstoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item != null ? JSON.parse(item) : intialValue
    } catch (e) {
      return intialValue
    }
  })
  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setstoredValue(value)
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setLocalStorage]
}
