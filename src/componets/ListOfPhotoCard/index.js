import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardComponent = ({ data: { photos = [] } }) => {
  return (
    <ul>
      {
        photos.map(photoCard => (<li key={photoCard.id}> <PhotoCard {...photoCard} /></li>))
      }
    </ul>
  )
}
