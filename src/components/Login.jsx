import next from '../assets/next.png'

export default function Login({ setPlay }) {
    return (
        <div className="login-screen">
            <div className="logo-center"></div>
            <button className="button-join" onClick={() => setPlay(true)} >Praticar React <img src={next} alt="icon with next symbol" /> </button>
        </div >
    )
}