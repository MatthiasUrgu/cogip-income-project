import s from './style.module.scss'
import ButtonPrimmary from '../buttonPrimmary/buttonPrimmary'

export function HeroText({title,texte}){
    return <div className={s.container}>
        <h1 className={`${s.title} col-4 mb-4`}>{title}</h1>
        <p  className={`${s.texte} col-4 mb-4`}>{texte}</p>
        <ButtonPrimmary children="start free trial"/>
            
        
    </div>
}