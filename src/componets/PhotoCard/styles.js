import styled from 'styled-components'

export const IgmWrapper = styled.div`
    display: block;
    border-radius: 10px;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
    `

export const Img = styled.img`
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    `

export const Button = styled.button`
    padding-top: 8px;
    display: flex;
    align-items: center;
    padding-top: 8px;
    & svg{
        margin-right: 4px;
    }
`
