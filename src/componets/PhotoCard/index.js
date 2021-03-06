import React from 'react'
import { IgmWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { Link } from '@reach/router'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
const DEFAULT_IMG = 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMG }) => {
  const [show, element] = useNearScreen()

  // if(!show) return null
  return (
    <Article ref={element}>
      {show &&
        <div>
          <Link to={`/detail/${id}`}>
            <IgmWrapper>
              <Img src={src} />
            </IgmWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  console.log('ok2')
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                }
                return (<FavButton liked={liked} likes={likes} onClick={handleFavClick} />)
              }
            }
          </ToggleLikeMutation>
        </div>}
    </Article>
  )
}
