import { useState } from 'react/cjs/react.development'
import turn from '../assets/turn.png'

export default function Card({ setResult, setResultStatus, input, decks, setDecks, decksData, setMissedZaps }) {

    const [flipCard, setFlipCard] = useState(false)
    const [border, setBorder] = useState('')
    const [status, setStatus] = useState(false)
    const [cardData, setCardData] = useState(0)
    const [zapNumber, setZapNumber] = useState(0)
    const [redNumber, setRedNumber] = useState(0)

    function handleBorder(event) {
        let clickedButtonColor = event.target.className.split(' ')

        if (clickedButtonColor[1] === "black") {
            setBorder("black-border");
        } else if (clickedButtonColor[1] === "red") {
            setRedNumber(redNumber + 1)
            setBorder("red-border");
        } else if (clickedButtonColor[1] === "green") {
            setBorder("green-border");
        } else if (clickedButtonColor[1] === "yellow") {
            setZapNumber(zapNumber + 1)
            setBorder("yellow-border");
        }
        setStatus(true)
    }

    function handleNextCard() {
        setFlipCard(false)
        setBorder('')
        setStatus(false)
        if (cardData === decks.length - 1) {
            if (zapNumber < input || redNumber >= 1) {
                if (redNumber >= 1 && zapNumber > input) {
                    setMissedZaps('alguns')
                } else {
                    setMissedZaps(input - zapNumber)
                }
                setResultStatus(false)

            } else {
                setResultStatus(true)
            }
            setDecks(decksData)
            setRedNumber(0)
            setZapNumber(0)
            setResult(true)
            setCardData(0)
        }
        setCardData(cardData + 1)
    }

    return (
        <div className={`card ${border}`} data-identifier="flashcard">
            {flipCard === false ?
                (<div className="card-front">
                    <div data-identifier="counter" className="card-counter">{cardData + 1}/{decks.length}</div>
                    <span className="card-question">{decks[cardData].question}</span>
                    <img data-identifier="arrow" className="turn-icon" src={turn} onClick={() => { setFlipCard(true) }} alt="turn card icon" />
                </div>)
                :
                (<div className="card-back">
                    <div className="top-card-back">
                        <span className="card-back-question">{decks[cardData].question}</span>
                        <div data-identifier="counter" className="card-back-counter">{cardData + 1}/{decks.length}</div>
                    </div>
                    <p className="card-back-text">{decks[cardData].answer}</p>

                    {status === false ?
                        (<div className="buttons-back">
                            <button onClick={(event) => { handleBorder(event) }} className="button-back black">Aprendi agora</button>
                            <button onClick={(event) => { handleBorder(event) }} className="button-back red">Não lembrei</button>
                            <button onClick={(event) => { handleBorder(event) }} className="button-back green">Lembrei com esforço</button>
                            <button onClick={(event) => { handleBorder(event) }} className="button-back yellow">Zap!</button>
                        </div>)
                        :
                        (<img data-identifier="arrow" className="turn-icon" onClick={handleNextCard} src={turn} alt="turn card icon" />)
                    }


                </div>)
            }


        </div>
    )
}