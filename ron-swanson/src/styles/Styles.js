import styled from "styled-components";
import img from "../assets/ron.jpg";

const QuoteCard = styled.div `
    width: 50%;
    height: 80vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    position: relative;
`

const Card = styled.div `
    color: black;
    border: solid 1px white;
    width: 40%;
    margin: 100px;
    background: white;
    opacity: .8;
    font-size: 40px;
`

const Button = styled.button `
    border: white solid 1px;
    height: 40px;
    border-radius: 10px;
    margin: 20px;
    background: #551B29;
    color: white;
    font-size: 20px;
    font-weight: bold;
    :hover {
        border: solid 1px #551B29;
        background: white;
        color: #551B29
    }
`

export { QuoteCard, Card, Button };