import React from 'react'
import { PhotoCard } from '../componets/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTOS = gql`query getSinglePhoto($id:ID!){
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }`

const renderProps = ({ loading, error, data }) => {
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTOS} variables={{ id }}>
    {
      renderProps
    }
  </Query>
)
