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
    const [borderColor, setBorderColor] = useState("#E4DDDE")
    const initValues = {
        color: keyColor,
        background: keyBGColor,
        border: borderColor
    }

    const [formState, setFormState] = useState(initValues)
  
    const [isValid, setIsValid ] = useState(false)


    const handleChange = evt => {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value})
    }
    const submitKeyColor = (evt) => {
        evt.preventDefault()
        if(formState.color.length === 7 ){
            setKeyColor(formState.color)
            return setIsValid(true)
        }
    }
    
    const submitKeyBGColor = (evt) => {
        evt.preventDefault()
        
        if(formState.background.length === 7 ){
            setKeyBGColor(formState.background)
            return setIsValid(true)
        }
    }

    const submitBDColor = (evt) => {
        evt.preventDefault()
        
        if(formState.background.length === 7 ){
            setBorderColor(formState.border)
            return setIsValid(true)
        }
    }
    
    console.log(formState)
    return ( 
        <FormStyles>
            
            <form onSubmit={submitKeyBGColor}>
                <label htmlFor="keyBGColorInput">
                    Key Background Color
                    
                    <input type="text"
                        name="background"
                        placeholder="Enter 6 Characters with a #"
                        value={formState.background}
                        onChange={handleChange}
                    />  

                </label>
            </form>
            <form onSubmit={submitKeyColor}>
            <label htmlFor="KeyColorInput">
                    Key Color
                    <input type="text"
                    name="color"
                    placeholder="Enter 6 Characters with a #"
                    value={formState.color}
                    onChange={handleChange} />
                </label>
            </form>
            <form onSubmit={submitBDColor}>
            <label htmlFor="KeyColorInput">
                    Border Color
                    <input type="text"
                    name="border"
                    placeholder="Enter 6 Characters with a #"
                    value={formState.border}
                    onChange={handleChange} />
                </label>
            </form>
            <KeysRoWithKArrays keyColor={keyColor} keyBGColor={keyBGColor} borderColor={borderColor} />
        </FormStyles>
     );
}

export default HexForm;
