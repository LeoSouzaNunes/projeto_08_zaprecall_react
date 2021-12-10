import turn from '../assets/turn.png'

export default function Card() {

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
        <div className="card">
            <div className="card-front">
                <div className="card-counter">1/8</div>
                <span className="card-question">O que é JSX?</span>
                <img src={turn} alt="turn card icon" />
            </div>
            <div className="card-back hidden">
                <div className="top-card-back">
                    <span className="card-back-question">O que é JSX?</span>
                    <div className="card-back-counter">1/8</div>
                </div>
                <p className="card-back-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.</p>
                <div className="buttons-back">
                    <button className="button-back black-border">Aprendi agora</button>
                    <button className="button-back red-border">Não lembrei</button>
                    <button className="button-back green-border">Lembrei com esforço</button>
                    <button className="button-back yellow-border">Zap!</button>
                </div>
            </div>
        </div>
    )
}