import React from 'react'
import styled from 'styled-components'
import { keyDataInRows } from './KeysDataStorage'

const KeyStyles = styled.div`
    background-color: black;
    color: whitesmoke;
    position: relative;
    border: 2px solid whitesmoke;
    div{
        border: 2px solid whitesmoke;
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
    let keyData = keyDataInRows
    return ( 
        <KeyStyles>
            
                {keyData.map(item =>(
                    item.map(row => (
                        <div>{row}</div>
                    ))
                ))}
            
        </KeyStyles>
    )
}

export default Keys