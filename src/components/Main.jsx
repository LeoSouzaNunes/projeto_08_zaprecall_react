import { useState } from 'react/cjs/react.development'
import Card from './Card'
import Result from './Result'

export default function Main({ input, setPlay, setInput }) {

    const [result, setResult] = useState(false)
    const [resultStatus, setResultStatus] = useState(true)

    return (
        <main className="main">
            <header onClick={() => (window.location.reload())} className="logo-corner">
            </header>
            {result === false ?
                (<Card setResult={setResult} setResultStatus={setResultStatus} input={input} />)
                :
                (<Result resultStatus={resultStatus} setPlay={setPlay} setInput={setInput} />)
            }

        </main>
    )
}