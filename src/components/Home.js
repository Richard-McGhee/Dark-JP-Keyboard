import React from 'react'
import KeysArrays from './KeysArrays'
import KeysRows from './KeysRows'
import KeysRowsObjects from './KeysRowsObjects'

function Home() {
    return ( 
        <div>
            <h1>
                <a href="https://github.com/Richard-McGhee/Dark-JP-Keyboard/blob/main/src/components/KeysDataStorage.js">Link to Keys Data Set for Reference</a>
            </h1>
            {/* <Keys /> */}
            {/* <KeysArrays /> */}
            {/* <KeysRows /> */}
            <KeysRowsObjects />
        </div>
    )
}

export default Home