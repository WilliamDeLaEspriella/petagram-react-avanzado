import React from 'react'
import { ListOfCategory } from '../componets/ListOfCategory'
import { ListOfPhotoCard } from '../container/ListOfPhotoCard'
import { Layout } from '../componets/Layout'

export const Home = ({ id }) => {
  return (
    <Layout
      title='Petagram -  tu app de fotos de mascotas'
      subtitle='Con petgram puedes encontrar fotos de animales domesticos'
    >
      <ListOfCategory />
      <ListOfPhotoCard categoryId={id} />
    </Layout>

  )
}
