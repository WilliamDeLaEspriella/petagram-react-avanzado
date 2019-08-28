import React from 'react'
import { IgmWrapper, Button, Img, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
const DEFAULT_IMG = 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  // if(!show) return null
  return (
    <Article ref={element}>
      {show &&
        <>
          <a href={`details/${id}`} />
          <IgmWrapper>
            <Img src={src} />
          </IgmWrapper>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' />{likes} likes!!
          </Button>
        </>}
    </Article>
  )
}
