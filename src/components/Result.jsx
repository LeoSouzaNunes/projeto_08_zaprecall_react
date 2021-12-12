import party from '../assets/party.png'
import sad from '../assets/sad.png'
import next from '../assets/next.png'

export default function Result({ setInput, setPlay, resultStatus }) {

    function handleReset() {
        setInput('')
        setPlay(false)
    }


    return (
        <div className="result">
            {resultStatus === true ?
                (<>
                    <h1 className="result-title">PARABÉNS!<img src={party} alt="party emoji" /></h1>
                    <p className="result-text">Você não esqueceu de nenhum flashcard!</p>
                    <button className="button-join" onClick={handleReset} >
                        Tentar novamente <img src={next} alt="icon with next symbol" />
                    </button>
                </>)
                :
                (<>
                    <h1 className="result-title">Putz..<img src={sad} alt="sad emoji" /></h1>
                    <p className="result-text">Você esqueceu alguns flashcards...<br />Não desanime! Na próxima você consegue!</p>
                    <button className="button-join" onClick={handleReset} >
                        Tentar novamente <img src={next} alt="icon with next symbol" />
                    </button>
                </>)
            }

        </div>
    )
}