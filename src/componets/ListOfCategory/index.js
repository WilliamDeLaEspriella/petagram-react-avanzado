import React, { useState, useEffect, Fragment } from 'react'
import {Category} from '../Category'
import {  List, Item } from "./styles";
// import { categories as mockCategories }  from '../../../api/db.json'

export const ListOfCategory = ()=>{
    const [categories, setCategories] = useState([])
    const [showFixed, setShowFixed] = useState(false)

   useEffect(()=>{
       window.fetch('https://petgram-api-example.now.sh/categories')
       .then(res => res.json())
       .then(response => {
           setCategories(response)
       })
   },[])

   useEffect(()=>{
       
       const onScroll= e =>{
           const newShowFixed = window.scrollY > 200 
           showFixed != newShowFixed && setShowFixed(newShowFixed)
       }
       document.addEventListener('scroll', onScroll)
       return ()=> document.removeEventListener('scroll',onScroll)
   },[showFixed])

   const renderList =(fixed )=>(
       <List className= {fixed ? 'fixed' : ''}>
        {
            categories.map(category => (<Item key = {category.id}> <Category { ...category }/></Item>))
        }
    </List>
   )

return(
    <Fragment>
        {renderList()}
        {showFixed && renderList(true)}
    </Fragment>

);
}

