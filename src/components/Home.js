import React from 'react'
// import Keys from './Keys'
import KeysArrays from './KeysArrays'
// import KeysRows from './KeysRows'

function Home() {
    return ( 
        <div>
            <h1>
                <a href="https://github.com/Richard-McGhee/Dark-JP-Keyboard/blob/main/src/components/KeysDataStorage.js">Link to Keys Data Set for Reference</a>
            </h1>
            {/* <Keys /> */}
            <KeysArrays />
            {/* <KeysRows /> */}
        </div>
    )
}

export default Home