import party from '../assets/party.png'
import sad from '../assets/sad.png'

export default function Result(props) {


    return (
        <div className="result">
            {props.resultStatus === true ?
                (<>
                    <h1 className="result-title">Parabéns!<img src={party} alt="party emoji" /></h1>
                    <p className="result-text">Você não esqueceu de nenhum flashcard!</p>
                </>)
                :
                (<>
                    <h1 className="result-title">Putz...<img src={sad} alt="sad emoji" /></h1>
                    <p className="result-text">Você esqueceu alguns flashcards...<br />Não desanime! Na próxima você consegue!</p>
                </>)
            }

        </div>
    )
}