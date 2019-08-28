import React, { useState, useEffect } from 'react'
import {Category} from '../Category'
import {  List, Item } from "./styles";
// import { categories as mockCategories }  from '../../../api/db.json'

export const ListOfCategory = ()=>{
    const [categories, setCategories] = useState([])


   useEffect(()=>{
       window.fetch('https://petgram-api-example.now.sh/categories')
       .then(res => res.json())
       .then(response => {
           setCategories(response)
       })
   },[])
return(
    <List>
        {
            categories.map(category => (<Item key = {category.id}> <Category { ...category }/></Item>))
        }
    </List>
);
}

