import React, { useState } from 'react'
import styled from 'styled-components'
import KeysRoWithKArrays from './KeysROWithKArrays'

const FormStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    form{
        color: #D3C422;
        margin: .5% auto;
        width: 30%;
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
    @media(max-width: 1600px){
        form{
            width: 25%;
        }
    }
    /* Laptop */
    @media(max-width: 1440px){
        form{
            width: 25%;
        }
    }
    /* Laptop 2 */
    @media(max-width: 1024px){
        display: flex;
        flex-wrap: wrap;
        form{
            width: 20%;
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
            <KeysRoWithKArrays 
                keyColor={isValid ? keyColor : formState.color} 
                keyBGColor={isValid ? keyBGColor : formState.background} 
                borderColor={isValid ? borderColor : formState.border} 
            />
        </FormStyles>
     );
}

export default HexForm;
