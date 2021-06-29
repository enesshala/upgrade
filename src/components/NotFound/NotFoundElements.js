import styled from "styled-components";
import { Link } from "react-router-dom";

export const NFMainBox = styled.div`
    background-color:#141019;
    background: radial-gradient(at 50% -20%, #908392, #0d060e) fixed;
    color: #fff;
    margin: auto;
    height: 100vh;
    width: 100%;
`


export const NFQuestion = styled.p`
    position: absolute;
    font-size: 8.5rem;
    left: 42%;
    top: 15%;
    color: #01BF71;

    &:before{
        content: '4';
        color: #fff;
    }
    &:after{
        content: '4';
        color: #fff;
    }
`

export const NFErr2 = styled.div`
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;
    position:absolute;
    left: 50%;
    top: 8%;
`

export const NFMsg = styled.div`
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.6rem;
    position:absolute;
    left: 16%;
    top: 45%;
    width: 75%;
`
  
export const NFLink = styled.a`
    text-decoration: none;
    color: #01BF71;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`

export const NFp = styled.p`
    color: #fff
`