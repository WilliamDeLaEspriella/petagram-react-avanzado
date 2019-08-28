import React from 'react'
import { PhotoCard } from '../PhotoCard'
// import {  List, Item } from "./styles";
// import { categories }  from '../../../api/db.json'
export const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4].map(photoCard => (<li key={photoCard}> <PhotoCard id={photoCard} /></li>))
      }
    </ul>
  )
}
