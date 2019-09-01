import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../componets/Layout'
export const Detail = ({ detailId }) => (
  <Layout title={`Fotografia #${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
