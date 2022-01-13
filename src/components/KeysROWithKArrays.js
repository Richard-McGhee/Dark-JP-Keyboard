import React from 'react'
import styled from 'styled-components'
import { keyDataInRowsObjectsWithKeyArrays } from './KeysDataStorage'

const KeyStyles = styled.div`
    position: relative;
    border: 5px solid black;
    color: whitesmoke;
    background-color: black;
    font-size: 27px;
    width: 85%;
    height: 85vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
    div{
        border: 2px solid whitesmoke;
        width: 6.5%;
        height: 13vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .BSpace{
        width: 195px;
        font-size: 30px;
    }
    .Tab, .BSlash{
        width: 150px;
        font-size: 30px;
    }
    .Caps{
        width: 165px;
        font-size: 30px;
    }
    .Enter{
        width: 245px;
        font-size: 30px;
    }
    .Shifts{
        width: 260px;
        font-size: 30px;
    }
    .Ctrls{
        width: 150px;
        font-size: 30px;
    }
    .SpcBar{
        width: 769px;
        font-size: 30px;
        font-weight: bold;
    }
    span{
        margin: 0 auto;
    }
    span:nth-child(1){
        /* margin: 0 6%; */
    }
    span:nth-child(2){
        /* margin: 0 2%; */
    }
    span:nth-child(3){
        margin: 0 40%;
    }
    span:nth-child(4){
        margin: 0 auto;
        font-size: 22px;
    }
`

function Keys() {
    let keyData = keyDataInRowsObjectsWithKeyArrays
    return ( 
        <KeyStyles>
            
                {keyData.map(item =>(
                    item.map((row) => (
                        row.map((chara, idx) => (
                            <div key={idx} className={chara.id === "Back Space" ? "BSpace" : "" || chara.id === "Tab" ? "Tab" : "" || chara.id === "|" ? "BSlash" : "" || chara.id === "Caps" ? "Caps" : "" || chara.id === "Enter" ? "Enter" : ""|| chara.id === "L.Shift" ? "Shifts" : "" || chara.id === "R.Shift" ? "Shifts" : "" ||chara.id === "L.Ctrl" ? "Ctrls" : "" || chara.id === "R.Ctrl" ? "Ctrls" : "" || chara.id === "Spacebar" ? "SpcBar" : ""}>{chara.chars.map(ch => (
                                <span>{ch}</span>
                            ))}</div>
                        ))
                    ))
                ))}
            
        </KeyStyles>
    )
}

export default Keys