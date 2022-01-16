import React, { useState } from 'react'
import styled from 'styled-components'
import KeysRoWithKArrays from './KeysROWithKArrays'

const FormStyles = styled.div`
    form{
        color: #D3C422;
        margin: .5% auto;
        width: 45%;
        font-size: 17px;
    }
    label{
        margin-right: 2%;
        padding-right: 1%;
    }
    input{
        margin-left: .5%;
    }
    button{
        margin-right: 2%;
        text-decoration: none;
        background-color: #1D1E18;
        color: #93032E;
        border-radius: 5px;
    }
`

function HexForm() {
    const [keyColor, setKeyColor ] = useState("#F5F5F5")
    const [keyBGColor, setKeyBGColor ] = useState("#000000")
    const initValues = {
        color: keyColor,
        background: keyBGColor
    }

    const [formState, setFormState] = useState(initValues)
  
    const [isValid, setIsValid ] = useState(false)


    const handleChange = evt => {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value})
    }
    const submitKeyColor = (clr, evt) => {
        evt.preventDefault()
        if(clr.length === 7 ){
            return setIsValid(true);
        }
        setKeyColor(formState.keyColor);
    }

    const submitKeyBGColor = (clr, evt) => {
        evt.preventDefault()
        if(clr.length === 7 ){
            return setIsValid(true);
        }
        setKeyBGColor(clr);
    }

    return ( 
        <FormStyles>
            
            <form>
                <label htmlFor="keyBGColorInput">
                    Key Background Color
                    <input type="text"
                    name="background"
                    placeholder="Enter 6 Characters with a #"
                    value={formState.background}
                    onChange={handleChange}
                    onSubmit={isValid ? submitKeyBGColor : null} />
                </label>
                {/* <button onClick={isValid ? submitKeyBGColor : null}>Submit BG</button> */}
                <label htmlFor="KeyColorInput">
                    Key Color
                    <input type="text"
                    name="color"
                    placeholder="Enter 6 Characters with a #"
                    value={formState.color}
                    onChange={handleChange}
                    onSubmit={isValid ? submitKeyColor : null} />
                </label>
                {/* <button onClick={submitKeyColor}>Submit Key</button> */}
            </form>
            <KeysRoWithKArrays keyColor={keyColor} keyBGColor={keyBGColor} />
        </FormStyles>
     );
}

export default HexForm;
