import React, { useState } from 'react'
import styled from 'styled-components'
import { keyDataInRowsObjectsWithKeyArrays } from './KeysDataStorage'

const KeyStyles = styled.div`
    position: relative;
    border: 2px solid whitesmoke;
    div{
        border: 2px solid whitesmoke;
        width: 6.5%;
        height: 13vh;
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
    const [keyColor, setKeyColor ] = useState("whitesmoke")
    const [keyBgColor, setKeyBgColor ] = useState("black")
    const [isValid, setIsValid ] = useState(false)

    const submitKeyColor = (clr) => {
        if(clr.length > 6 || clr.length < 6 ){
            return setIsValid(true);
        }
        setKeyColor(clr);
    }

    const submitKeyBgColor = (clr) => {
        // Can do validation here
        setKeyBgColor(clr);
    }

    let keyData = keyDataInRowsObjectsWithKeyArrays
    return ( 
        <KeyStyles style={{ color: keyColor, background: keyBgColor }}>
            
                {keyData.map(item =>(
                    item.map((row) => (
                        row.map((chara, idx) => (
                            <div key={idx} style={{
                                width: chara.id === "Back Space" ? 160 : 60,
                                fontSize: chara.id === "Back Space" ? 25: 20
                            }}>{chara.chars ? chara.chars.map(ch => (
                                <span>{ch}</span>
                            )): null }</div>
                        ))
                    ))
                ))}
            
        </KeyStyles>
    )
}

export default Keys