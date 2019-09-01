import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../componets/Layout'
export const Favs = () => (
  <>
    <Layout
      title='Petagram -  tu favoritos'
      subtitle='Con petgram puedes favoritos'
    >
      <FavsWithQuery />
    </Layout>
  </>
)
