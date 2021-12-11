import { useState } from 'react/cjs/react.development'
import turn from '../assets/turn.png'

export default function Card(props) {

    const [flipCard, setFlipCard] = useState(false)
    const [border, setBorder] = useState('')
    const [status, setStatus] = useState(false)
    const [cardData, setCardData] = useState(0)

    function handleBorder(event) {
        let clickedButtonColor = event.target.className.split(' ')

        if (clickedButtonColor[1] === "black") {
            setBorder("black-border");
        } else if (clickedButtonColor[1] === "red") {
            props.setResultStatus(false)
            setBorder("red-border");
        } else if (clickedButtonColor[1] === "green") {
            setBorder("green-border");
        } else if (clickedButtonColor[1] === "yellow") {
            setBorder("yellow-border");
        }

        setStatus(true)
    }

    function handleNextCard() {
        setFlipCard(false)
        setBorder('')
        setStatus(false)
        if (cardData === deck.length - 1) {
            props.setResult(true)
            setCardData(0)
        }
        setCardData(cardData + 1)
    }

    const deck = [{
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    }, {
        question: "O React é __",
        answer: "Uma biblioteca JavaScript para construção de interfaces"
    }, {
        question: "Componentes devem iniciar com __ ",
        answer: "Letra maiúscula"
    }, {
        question: "Podemos colocar __ dentro do JSX",
        answer: "Expressões"
    }, {
        question: "O ReactDOM nos ajuda __ ",
        answer: " Interagindo com a DOM para colocar componentes React na mesma"
    }, {
        question: "Usamos o npm para __ ",
        answer: "Gerenciar os pacotes necessários e suas dependências"
    }, {
        question: "Usamos props para __ ",
        answer: "Passar diferentes informações para componentes"
    }, {
        question: "Usamos estado (state) para __ ",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
    ]

    return (
        <div className={`card ${border}`}>
            {flipCard === false ?
                (<div className="card-front">
                    <div className="card-counter">{cardData + 1}/{deck.length}</div>
                    <span className="card-question">{deck[cardData].question}</span>
                    <img className="turn-icon" src={turn} onClick={() => { setFlipCard(true) }} alt="turn card icon" />
                </div>)
                :
                (<div className="card-back">
                    <div className="top-card-back">
                        <span className="card-back-question">{deck[cardData].question}</span>
                        <div className="card-back-counter">{cardData + 1}/{deck.length}</div>
                    </div>
                    <p className="card-back-text">{deck[cardData].answer}</p>
                    {status === false ?
                        (<div className="buttons-back">
                            <button onClick={(event) => { handleBorder(event) }} className="button-back black">Aprendi agora</button>
                            <button onClick={(event) => { handleBorder(event) }} className="button-back red">Não lembrei</button>
                            <button onClick={(event) => { handleBorder(event) }} className="button-back green">Lembrei com esforço</button>
                            <button onClick={(event) => { handleBorder(event) }} className="button-back yellow">Zap!</button>
                        </div>)
                        :
                        (<img className="turn-icon" onClick={handleNextCard} src={turn} alt="turn card icon" />)}


                </div>)
            }


        </div>
    )
}