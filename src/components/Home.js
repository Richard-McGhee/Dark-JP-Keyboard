import React from 'react'
import KeyDataInRowsObjectsWithKeyArrays from './KeysROWithKArrays'
import HexForm from './HexForm'
import styled from 'styled-components' 

const HomeStyles = styled.div`
    h1{
        margin-left: auto;
        margin-right: auto;
        width: 50%;
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
            {/* <KeyDataInRowsObjectsWithKeyArrays /> */}
        </HomeStyles>
    )
}

export default Home