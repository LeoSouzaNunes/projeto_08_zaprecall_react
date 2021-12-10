import next from '../assets/next.png'

export default function Login() {

    return (
        <div className="login-screen">
            <div className="logo-center"></div>
            <button className="button-join">Praticar React <img src={next} alt="icon with next symbol" /> </button>
        </div>
    )
}