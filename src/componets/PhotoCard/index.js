import React from 'react'
import { IgmWrapper, Button, Img } from './styles';
import { MdFavoriteBorder } from "react-icons/md";
const DEFAULT_IMG="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
export const PhotoCard = ({id, likes = 0,src=DEFAULT_IMG}) =>{
    return(
    <article>
        <a href={`details/${id}`}/>
        <IgmWrapper>
            <Img src={src}/>
        </IgmWrapper>
        <Button>
            <MdFavoriteBorder size ='32px'/>{likes} likes!!
        </Button>
    </article>
        );
}