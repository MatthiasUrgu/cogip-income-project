import s from './style.module.scss'
import { useNavigate } from 'react-router-dom';


function SignForm({title,subtitle,submit,submitP,submitLink}){
    const navigate =useNavigate();
    return <>
    <form action="#" className={s.container}>
        
        <div className={s.form}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
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
            <div className="mb-5">
                <label  className={`form-label ${s.titleInput}`}>Phone</label>
                <input type="email" className="form-control" id="phoneInput" placeholder="Ex: 012/45.58.56"/>
            </div>
            </div>
            <div className="mb-3 d-grid gap-2">
                <button className={` ${s.buttonSubmit} btn btn-primary `} size="lg"type="submit">
                    {submit}
                </button>
            </div>
            <p> {submitP} 
                <a className={s.submitBottom} onClick={() => navigate("/LogIn")}>
                    {submitLink}
                </a>
                .
            </p>
        </div>
    </form>
    </>
}


export default SignForm