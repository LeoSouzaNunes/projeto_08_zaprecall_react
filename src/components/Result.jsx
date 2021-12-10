import party from '../assets/party.png'

export default function Result() {


    return (
        <div className="result hidden">
            <h1 className="result-title">Parabéns!<img src={party} alt="party emoji" /></h1>
            <p className="result-text">Você não esqueceu de nenhum flashcard!</p>
        </div>
    )
}