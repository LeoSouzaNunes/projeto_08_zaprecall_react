import turn from '../assets/turn.png'
import party from '../assets/party.png'

export default function Main() {

    return (
        <main className="main">
            <header className="logo-corner">
            </header>
            <div className="card hidden">
                <div className="card-front hidden">
                    <div className="card-counter">1/8</div>
                    <span className="card-question">O que é JSX?</span>
                    <img src={turn} alt="turn card icon" />
                </div>
                <div className="card-back">
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
            <div className="result">
                <h1 className="result-title">Parabéns!<img src={party} alt="party emoji" /></h1>
                <p className="result-text">Você não esqueceu de nenhum flashcard!</p>
            </div>
        </main>
    )
}