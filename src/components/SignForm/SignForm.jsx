import s from './style.module.scss'

function SignForm(props){
    return <>
    <form action="">
        
        <div className={s.container}>
            <h1>Welcome</h1>
            <p>Hi, please enter your detail</p>
            <div className="forumulaire">
            <div className="mb-3">
                <label  className={`form-label ${s.titleInput}`}>Email</label>
                <input type="email" className="form-control" id="emailInput" placeholder="Ex: name@example.com"/>
            </div>
            <div className="mb-3">
                <label  className={`form-label ${s.titleInput}`}>Password</label>
                <input type="password" className="form-control" id="passwordInput" placeholder="Ex: mot de passe"/>
            </div>
            <div className="mb-3">
                <label  className={`form-label ${s.titleInput}`}>Compagny Name</label>
                <input type="email" className="form-control" id="compagnyInput" placeholder="Ex: Google"/>
            </div>
            <div className="mb-3">
                <label  className={`form-label ${s.titleInput}`}>Tva Number</label>
                <input type="email" className="form-control" id="tvaInput" placeholder="Ex: ***********-***"/>
            </div>
            <div className="mb-3">
                <label  className={`form-label ${s.titleInput}`}>Phone</label>
                <input type="email" className="form-control" id="phoneInput" placeholder="Ex: 012/45.58.56"/>
            </div>
            </div>
        </div>
    </form>
    </>
}


export default SignForm