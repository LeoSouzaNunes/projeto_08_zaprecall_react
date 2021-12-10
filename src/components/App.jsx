import { useState } from "react"

import Login from "./Login"
import Main from "./Main"


export default function App() {

    const [play, setPlay] = useState(false)

    return (
        <>
            {play === true ? <Main /> : <Login setPlay={setPlay} />}
        </>
    )
}