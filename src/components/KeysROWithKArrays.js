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
            width: 200px;
        }
        .Shifts{
            width: 207px;
        }
        
        .SpcBar{
            width: 559px;
        }
    }
    /* Next Attempt at Firefox Breakpoint */
    @media(max-width: 1580px){
        .BSpace{
            width: 140px;
        }
        .BSpace span{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-right: 15%;
        }
        .Tab{
            width: 105px;
        }
        .BSlash{
            width: 117px;
        }
        .Caps{
            width: 125px;
        }
        .Enter{
            width: 185px;
        }
        .Shifts{
            width: 198px;
        }
        .SpcBar{
            width: 545px;
        }
    }
    /* Next Attempt at Firefox Breakpoint */
    @media(max-width: 1500px){
        .BSpace{
            width: 140px;
        }
        .BSpace span{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-right: 15%;
        }
        .Tab{
            width: 105px;
        }
        .BSlash{
            width: 117px;
        }
        .Caps{
            width: 125px;
        }
        .Enter{
            width: 185px;
        }
        .Shifts{
            width: 198px;
        }
        .SpcBar{
            width: 525px;
        }
    }
    /* Laptop */
    @media(max-width: 1440px){
        .BSpace{
            width: 125px;
        }
        .BSpace span{
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 0;
        }
        .Tab{
            width: 90px;
        }
        .BSlash{
            width: 115px;
        }
        .Caps{
            width: 105px;
        }
        .Enter{
            width: 185px;
        }
        .Shifts{
            width: 187px;
        }
        
        .SpcBar{
            width: 485px;
        }
    }
    /* Laptop 2 */
    @media(max-width: 1024px){
        font-size: 25px;
        .BSpace{
            width: 75px;
            font-size: 17px;
        }
        .Tab{
            width: 60px;
        }
        .BSlash{
            width: 75px;
        }
        .Caps{
            width: 85px;
        }
        .Enter{
            width: 105px;
        }
        .Shifts{
            width: 125px;
        }
        .Ctrls{
            width: 145px;
        }
        .SpcBar{
            width: 259px;
        }
    }
    /* Tablet */
    @media(max-width: 768px){
        .BSpace{
            width: 6.5%;
        }
        .Tab{
            width: 6.5%;
        }
        .BSlash{
            width: 6.5%;
        }
        .Caps{
            width: 9.5%;
        }
        .Enter{
            width: 11%;
        }
        .Shifts{
            width: 90px;
        }
        .Ctrls{
            width: 100px;
        }
        .SpcBar{
            width: 205px;
        }
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
                            <div style={{border: `2px solid ${props.borderColor}`}} key={idx} className={chara.id === "Back Space" ? "BSpace" : "" || chara.id === "Tab" ? "Tab" : "" || chara.id === "|" ? "BSlash" : "" || chara.id === "Caps" ? "Caps" : "" || chara.id === "Enter" ? "Enter" : ""|| chara.id === "L.Shift" ? "Shifts" : "" || chara.id === "R.Shift" ? "Shifts" : "" ||chara.id === "L.Ctrl" ? "Ctrls" : "" || chara.id === "R.Ctrl" ? "Ctrls" : "" || chara.id === "Spacebar" ? "SpcBar" : ""}>{chara.chars.map(ch => (
                                <span key={ch[0]}>{ch}</span>
                            ))}</div>
                        ))
                    ))
                ))}
            
        </KeyStyles>
    )
}
// 
export default Keys