import { useState } from 'react/cjs/react.development'
import Card from './Card'
import Result from './Result'

export default function Main() {

    const [result, setResult] = useState(false)

    return (
        <main className="main">
            <header className="logo-corner">
            </header>
            {result === false ? (<Card setResult={setResult} />) : (<Result />)}

        </main>
    )
}