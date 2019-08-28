import React, { Fragment, useRef, useEffect, useState } from 'react'
import { IgmWrapper, Button, Img, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAULT_IMG = 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined'
      ? window.IntersectionObserver
      : import('intersection-observer'))
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })

    // console.log(element.current)
  }, [element])

  // if(!show) return null
  return (
    <Article ref={element}>
      {show &&
        <Fragment>
          <a href={`details/${id}`} />
          <IgmWrapper>
            <Img src={src} />
          </IgmWrapper>
          <Button>
            <MdFavoriteBorder size='32px' />{likes} likes!!
          </Button>
        <Fragment/>}
    </Article>
  )
}
