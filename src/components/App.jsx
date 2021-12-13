import { useState } from "react"

import Login from "./Login"
import Main from "./Main"



export default function App() {
    const decksData = {
        React: [
            {
                question: "O que é JSX?",
                answer: "Uma extensão de linguagem do JavaScript"
            },
            {
                question: "O React é __",
                answer: "Uma biblioteca JavaScript para construção de interfaces"
            },
            {
                question: "Componentes devem iniciar com __ ",
                answer: "Letra maiúscula"
            },
            {
                question: "Podemos colocar __ dentro do JSX",
                answer: "Expressões"
            },
            {
                question: "O ReactDOM nos ajuda __ ",
                answer: " Interagindo com a DOM para colocar componentes React na mesma"
            },
            {
                question: "Usamos o npm para __ ",
                answer: "Gerenciar os pacotes necessários e suas dependências"
            },
            {
                question: "Usamos props para __ ",
                answer: "Passar diferentes informações para componentes"
            },
            {
                question: "Usamos estado (state) para __ ",
                answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
            }
        ],
        JavaScript: [
            {
                question: "Qual o papel do JavaScript na construção de um site?",
                answer: "Nos permite criar sites mais interativos, reagindo ao comportamento do usuário"
            },
            {
                question: "Qual o papel do JavaScript na construção de um site?",
                answer: "Nos permite criar sites mais interativos, reagindo ao comportamento do usuário"
            },
            {
                question: "Qual o papel do JavaScript na construção de um site?",
                answer: "Nos permite criar sites mais interativos, reagindo ao comportamento do usuário"
            },
            {
                question: "Qual o papel do JavaScript na construção de um site?",
                answer: "Nos permite criar sites mais interativos, reagindo ao comportamento do usuário"
            }
        ]
    }

    const [decks, setDecks] = useState(decksData)
    const [play, setPlay] = useState(false)
    const [input, setInput] = useState('')
    const [pickedDeck, setPickedDeck] = useState('')

    return (
        <>
            {play === true ?
                (
                    <Main
                        decksData={decksData}
                        pickedDeck={pickedDeck}
                        decks={decks}
                        input={input}
                        setPlay={setPlay}
                        setInput={setInput}
                        setDecks={setDecks}
                    />
                )
                :
                (
                    <Login
                        setPickedDeck={setPickedDeck}
                        setDecks={setDecks}
                        setInput={setInput}
                        setPlay={setPlay}
                        input={input}
                        decks={decks}
                    />
                )
            }
        </>
    )
}