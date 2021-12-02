import React from 'react'
import styled from 'styled-components'

const KeyStyles = styled.div`
    background-color: black;
    color: white;
    div{
        border: 2px solid white;
        width: 30%;
        height: 10vh;
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
    let keyData = [
        ["~", "`", "ろ"],
        ["!", "1", "ぬ"],
        ["@", "2", "ふ"],
        ["#", "3", "あ", "ぁ"],
        ["$", "4", "う", "ぅ"],
        ["%", "5", "え", "ぇ"],
        ["^", "6", "お", "ぉ"],
        ["&", "7", "や", "ゃ"],
        ["*", "8", "ゆ", "ゅ"],
        ["(", "9", "よ", "ょ"],
        [")", "0", "わ", "を"],
        ["_", "-", "ほ"],
        ["+", "=", "へ"],
        ["BacSpace"],
        ["Tab"],
        ["Q", "た"],
        ["W", "て"],
        ["E", "い", "ぃ"],
        ["R", "す"],
        ["T", "か"],
        ["Y", "ん"],
        ["U", "な"],
        ["I", "に"],
        ["O", "ら"],
        ["P", "せ"],
        ["{", "[", "゛", "「"],
        ["}", "]", "゜", "」"],
        ["|", " Back Slash ", "む"],
        ["Caps"],
        ["A", "ち"],
        ["S", "と"],
        ["D", "し"],
        ["F", "は"],
        ["G", "き"],
        ["H", "く"],
        ["J", "ま"],
        ["K", "の"],
        ["L", "り"],
        [",", "semi colon", "れ"],
        ["Dbl Quote", " ' ", "け"],
        ["Enter"],
        ["L.Shift"],
        ["Z", "つ", "っ"],
        ["X", "さ"],
        ["C", "そ"],
        ["V", "ひ"],
        ["B", "こ"],
        ["N", "み"],
        ["M", "も"],
        ["<", ",", "ね", "、"],
        [">", ".", "る", "。"],
        ["?", "/", "め", "・"],
        ["R.Shift"],
        ["L.Ctrl"],
        ["Fn", "L.Win"],
        ["Win", "L.Alt"],
        ["L.Alt", "None or Space"],
        ["Spacebar"],
        ["R.Alt"],
        ["R.Ctrl", "R.Win"],
        ["Menu"],
        ["R.Ctrl"]        
    ]
    return ( 
        <KeyStyles>
            <div>
                {keyData.map(item =>(
                    <div>{item}</div>
                ))}
            </div>
        </KeyStyles>
    )
}

export default Keys