import React from 'react'
import { keyDataAsObjects } from './KeysDataStorage'

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