import React, { useState } from 'react'
import styled from 'styled-components'

const FormStyles = styled.div`
    form{
        
    }
`

function HexForm() {
    const [keyColor, setKeyColor ] = useState("#F5F5F5")
    const [keyBgColor, setKeyBgColor ] = useState("#000000")
    const initValues = {
        color: keyColor,
        background: keyBgColor
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

    const submitKeyBgColor = (clr) => {
        if(clr.length > 6 || clr.length < 6 ){
            return setIsValid(true);
        }
        setKeyBgColor(clr);
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
                    onSubmit={isValid ? submitKeyBgColor : null} />
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
        </FormStyles>
     );
}

export default HexForm;
