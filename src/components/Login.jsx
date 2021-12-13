import { useState } from 'react'
import next from '../assets/next.png'

export default function Login({ setPlay, setInput, input, decks, setDecks, setPickedDeck }) {
    let arrayDeckName = Object.keys(decks)
    let arrayData = Object.entries(decks)

    const [inputValueTest, setInputValueTest] = useState("")

    function handleInput(event) {
        let inputValue = event.target.value
        setInputValueTest(inputValue)
        setInput(inputValue)
    }


    function hadleButton(event) {
        setPickedDeck(event.target.innerText.split(' '))

        let localPickedDeck = event.target.innerText.split(' ')

        function handleDeck() {
            for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i][0] === localPickedDeck[1]) {
                    setDecks(arrayData[i][1])
                }

            }
        }

        handleDeck()

        if (inputValueTest === "" || (Number.isInteger(Number(inputValueTest)) && Number(inputValueTest) >= 1)) {
            if (inputValueTest === "") {
                setInput(1)
            }
            setPlay(true)
        } else {
            alert('O Input precisa ser um inteiro diferente de zero ou pode deixar ele vazio ;)')
        }

    }

    return (
        <div className="login-screen">
            <div className="logo-center"></div>
            <div className="container-input-button">

                <input
                    type="text"
                    className="input-login"
                    onChange={handleInput}
                    placeholder='Sua meta de zaps (vazio = 1 zap)'
                    value={input}
                />

                {arrayDeckName.map(
                    (deck, index) => (
                        <button
                            key={index}
                            data-identifier="start-zap-recall"
                            className="button-join"
                            onClick={hadleButton}
                        >
                            Praticar {deck}
                            <img src={next} alt="icon with next symbol"
                            />
                        </button>
                    )
                )}

            </div>
        </div >
    )
}