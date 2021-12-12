import { useState } from 'react/cjs/react.development'
import next from '../assets/next.png'

export default function Login({ setPlay, setInput, input }) {

    const [inputValueTest, setInputValueTest] = useState("")

    function handleInput(event) {
        let inputValue = event.target.value
        setInputValueTest(inputValue)
        setInput(inputValue)
    }

    function hadleButton() {
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

                <input type="text" className="input-login" onChange={handleInput} placeholder='Sua meta de zaps (vazio = 1 zap)' value={input} />
                <button data-identifier="start-zap-recall" className="button-join" onClick={hadleButton} >
                    Praticar React <img src={next} alt="icon with next symbol" />
                </button>

            </div>
        </div >
    )
}