import React from 'react'
import { keyDataAsObjects } from './KeysCopy2'

function Keys() {
    let keyData = keyDataAsObjects
    return ( 
        <div>
            {keyData.map(item =>(
                <div>{item}</div>
            ))}
        </div>
    )
}

export default Keys