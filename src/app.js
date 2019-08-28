import React from 'react'
import { ListOfCategory } from './componets/ListOfCategory'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotoCard } from './container/ListOfPhotoCard'
import { Logo } from './componets/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('details')
  console.log(detailId)
  return (
    <div>
      <GlobalStyles />
      <Logo />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : (
          <>
            <ListOfCategory />
            <ListOfPhotoCard categoryId={3} />
          </>
        )}

    </div>
  )
}
