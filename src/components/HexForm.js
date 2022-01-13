import React, { useState } from 'react'

function HexForm() {
    const [keyColor, setKeyColor ] = useState("whitesmoke")
    const [keyBgColor, setKeyBgColor ] = useState("black")
    const [isValid, setIsValid ] = useState(false)

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
        <form>

        </form>
     );
}

export default HexForm;
