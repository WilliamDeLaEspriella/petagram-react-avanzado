import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhoto = graphql(gql`
query getFotos{
    photos{
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
)
const ListOfPhotoCardComponent = ({ data: { photos = [] } }) => {
  console.log(photos)
  return (
    <ul>
      {
        photos.map(photoCard => (<li key={photoCard.id}> <PhotoCard {...photoCard} /></li>))
      }
    </ul>
  )
}

export const ListOfPhotoCard = withPhoto(ListOfPhotoCardComponent)
