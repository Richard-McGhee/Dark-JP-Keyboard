import React, { useState } from 'react'
import styled from 'styled-components'
import KeysRoWithKArrays from './KeysROWithKArrays'

const FormStyles = styled.div`
    form{
        
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
    const submitKeyColor = (clr) => {
        if(clr.length > 6 || clr.length < 6 ){
            return setIsValid(true);
        }
        setKeyColor(clr);
    }

    const submitKeyBGColor = (clr) => {
        if(clr.length > 6 || clr.length < 6 ){
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
                    name="keyBGColor"
                    placeholder="Enter 6 Characters with a #"
                    value={formState.background}
                    onChange={handleChange}
                    onSubmit={isValid ? submitKeyBGColor : null} />
                </label>
                <label htmlFor="KeyColorInput">
                    Key Color
                    <input type="text"
                    name="KeyColor"
                    placeholder="Enter 6 Characters with a #"
                    value={formState.color}
                    onChange={handleChange}
                    onSubmit={isValid ? submitKeyColor : null} />
                </label>
            </form>
            <KeysRoWithKArrays value={{keyColor, keyBGColor}} />
        </FormStyles>
     );
}

export default HexForm;
