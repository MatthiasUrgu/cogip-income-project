import s from './style.module.scss'

export function HeroText({title,texte}){
    return <div className={s.container}>
        <h1>{title}</h1>
        <p>{texte}</p>
    </div>
}