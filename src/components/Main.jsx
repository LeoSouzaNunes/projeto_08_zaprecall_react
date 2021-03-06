import { useState } from 'react'
import Card from './Card'
import Result from './Result'

export default function Main({ input, setPlay, setInput, decks, pickedDeck, setDecks, decksData }) {
    const [result, setResult] = useState(false)
    const [resultStatus, setResultStatus] = useState(true)
    const [missedZaps, setMissedZaps] = useState(0)

    return (
        <main className="main">
            <header onClick={() => (window.location.reload())} className="logo-corner">
            </header>
            {result === false ?
                (
                    <>
                        <h1 className="Deck-title">{pickedDeck[1]}</h1>
                        <Card
                            setMissedZaps={setMissedZaps}
                            decksData={decksData}
                            setDecks={setDecks}
                            decks={decks}
                            setResult={setResult}
                            setResultStatus={setResultStatus}
                            input={input}
                        />
                    </>
                )
                :
                (
                    <Result
                        resultStatus={resultStatus}
                        setPlay={setPlay}
                        setInput={setInput}
                        missedZaps={missedZaps}
                    />
                )
            }

        </main>
    )
}