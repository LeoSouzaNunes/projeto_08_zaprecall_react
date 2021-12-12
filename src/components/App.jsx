import { useState } from "react"

import Login from "./Login"
import Main from "./Main"



export default function App() {

    const [play, setPlay] = useState(false)
    const [input, setInput] = useState('')

    return (
        <>
            {play === true ?
                (<Main input={input} setPlay={setPlay} setInput={setInput} />)
                :
                (<Login setInput={setInput} setPlay={setPlay} input={input} />)
            }
        </>
    )
}