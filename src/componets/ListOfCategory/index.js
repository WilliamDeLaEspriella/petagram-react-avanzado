import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
// import { categories as mockCategories }  from '../../../api/db.json'

export const ListOfCategory = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  function useCategoriesData () {
    const [categories, setCategories] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
      setloading(true)
      window.fetch('https://petgram-api-example.now.sh/categories')
        .then(res => res.json())
        .then(response => {
          setCategories(response)
          setloading(false)
        })
    }, [])
    return { categories, loading }
  }
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category => (<Item key={category.id}> <Category {...category} path={`/pet/${category.id}`} /></Item>))
      }
    </List>
  )
  if (loading) {
    return <div>cargando ...</div>
  }
  return (

    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>

  )
}
