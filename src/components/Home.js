import React from 'react'
import HexForm from './HexForm'
import styled from 'styled-components' 

const HomeStyles = styled.div`
    h1{
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    /* Media Queries */
    /* Trying to match up with my firefox breakpoint */
    @media(max-width: 1600px){
        h1{
            width: 60%;
        }
    }
    /* Laptop */
    @media(max-width: 1024px){
        h1{
            width: 100%;
        } 
    }
    /* Tablet */
    @media(max-width: 768px){
        h1{
            width: 100%;
        }      
    }
    /* Mobile */
    @media(max-width: 480px){
        h1{
            width: 100%;
        } 
    }
 `

function Home() {
    return ( 
        <HomeStyles>
            <h1>
                <a href="https://github.com/Richard-McGhee/Dark-JP-Keyboard/blob/main/src/components/KeysDataStorage.js">Link to Keys Data Set for Reference</a>
                <a href="https://www.linkedin.com/in/richardjmcghee/">By: Richard McGhee</a>
            </h1>
            <HexForm />
        </HomeStyles>
    )
}

export default Home