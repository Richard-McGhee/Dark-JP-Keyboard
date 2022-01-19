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

    /* Media Queries */
    /* Trying to match up with my firefox breakpoint */
    @media(max-width: 1600){

    }
    /* Laptop */
    @media(max-width: 1024px){
        form{
            width: 70%;
        }
    }
    /* Tablet */
    @media(max-width: 768px){

    }
    /* Mobile */
    @media(max-width: 480px){

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
        if(formState.color.length === 7 ){
             setIsValid(true)
        }
        setKeyColor(formState.color)
        console.log(formState)
    }
    
    const submitKeyBGColor = (clr, evt) => {
        evt.preventDefault()
        if(formState.background.length === 7 ){
            return setIsValid(true)
        }
        setKeyBGColor(formState.background)
        console.log(formState)
    }
    
    console.log(formState)
    return ( 
        <FormStyles>
            
            <form onSubmit={submitKeyColor}>
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
                {/* <button onClick={isValid ? submitKeyColor : null}>Submit Key</button> */}
            </form>
            <KeysRoWithKArrays keyColor={keyColor} keyBGColor={keyBGColor} />
        </FormStyles>
     );
}

export default HexForm;
