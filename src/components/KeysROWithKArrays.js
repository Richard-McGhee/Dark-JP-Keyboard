import React from 'react'
import styled from 'styled-components'
import { keyDataInRowsObjectsWithKeyArrays } from './KeysDataStorage'

const KeyStyles = styled.div`
    position: relative;
    border: 5px solid black;
    font-size: 27px;
    width: 85%;
    height: 85vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
    padding: 0 2%;
    
    div{
        border: 2px solid #E4DDDE;
        width: 6.5%;
        height: 13vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .BSpace, .Tab, .Caps, .Enter, .Shifts, .Ctrls, .SpcBar{
        font-size: 30px;
    }
    .Tab, .BSlash{
        width: 150px;
    }
    .BSpace{
        width: 195px;
    }
    .Caps{
        width: 165px;
    }
    .Enter{
        width: 245px;
    }
    .Shifts{
        width: 260px;
    }
    .Ctrls{
        width: 150px;
    }
    .SpcBar{
        width: 769px;
        font-weight: bold;
    }
    span{
        margin: 0 auto;
    }
    span:nth-child(3){
        margin: 0 40%;
    }
    span:nth-child(4){
        margin: 0 auto;
        font-size: 22px;
    }

    /* Media Queries */
    /* Trying to match up with my firefox breakpoint */
    @media(max-width: 1600px){
        .BSpace{
            width: 145px;
        }
        .BSpace span{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 0 0 0 20%;
        }
        .Tab{
            width: 110px;
        }
        .BSlash{
            width: 125px;
        }
        .Caps{
            width: 125px;
        }
        .Enter{
            width: 205px;
        }
        .Shifts{
            width: 210px;
        }
        .SpcBar{
            width: 579px;
        }
    }
    /* Laptop */
    @media(max-width: 1024px){
        
    }
    /* Tablet */
    @media(max-width: 768px){

    }
    /* Mobile */
    @media(max-width: 480px){

    }
`

function Keys(props) {
    let keyData = keyDataInRowsObjectsWithKeyArrays
    // let [keyColor, setKeyColor] = useState("#E4DDDE")
    // let [keyBGColor, setKeyBGColor] = useState("#000000")

    // let changeKeyColor = (clr) => {
    //     setKeyColor(clr)
    // }
    // let changeKeyBGColor = (clr) => {
    //     setKeyBGColor(clr)
    // }
    // style={{
    //             color: keyColor,
    //             backgroundColor: keyBGColor
    //         }}
    return ( 
        <KeyStyles style={{color: props.keyColor, background: props.keyBGColor}} >
            
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
// 
export default Keys