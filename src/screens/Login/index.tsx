import './styles.css'

type LoginProps = {
    setIsLogged: (value: boolean) => void;
}

export function Login({ setIsLogged }: LoginProps) {

    function login() {
        setIsLogged(true)
    }

    return (
        <div className="containerLogin">
            <div className="card">
                <h3 className="title">Login</h3>
                <form className="form">
                    <div className="inputContainer">
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="pass">Senha</label>
                        <input type="password" id='pass' />
                    </div>
                    <div className='options'>
                        <div className="checkboxContainer">
                            <input className='checkbox' type="checkbox" id='check' />
                            <label className='labelCheck' htmlFor="check">Lembrar senha</label>
                        </div>
                        <a className='forgotPass' href="#">Esqueceu a senha?</a>
                    </div>
                    <button onClick={login} className="button">Entrar</button>
                    <p className="register">Novo? <a href='#' className="register">Crie uma conta</a></p>

                </form>
            </div>
        </div>
    )
}