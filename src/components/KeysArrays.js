import React from 'react'
import styled from 'styled-components'
import { keyDataInArrays } from './KeysDataStorage'

const KeyStyles = styled.div`
    background-color: black;
    color: white;
    position: relative;
    div{
        border: 2px solid white;
        width: 6.5%;
        height: 15vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    width: 85%;
    height: 85vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
`

function Keys() {
    let keyData = keyDataInArrays
    return ( 
        <KeyStyles>
            
                {keyData.map(item =>(
                    <div>{item}</div>
                ))}
            
        </KeyStyles>
    )
}

export default Keys