import './styles.css'

export function Login() {
    return (
       <div className="containerLogin">
        <div className="card">
        <h3 className="title">Entrar</h3>
        <form className="form">
            <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' />
            </div>
            <div className="inputContainer">
                <label htmlFor="pass">Senha</label>
                <input type="password" id='pass' />
            </div>

            <button className="button">Entrar</button>
        </form>
        </div>
       </div>
    )
}