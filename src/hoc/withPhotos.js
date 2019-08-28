import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
const GET_PHOTOS = gql`
query getFotos($categoryId: ID){
    photos(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const withPhoto = graphql(GET_PHOTOS)
