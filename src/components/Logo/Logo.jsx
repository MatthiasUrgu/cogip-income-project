import s from './style.module.scss'

export function Logo({onClick,title}){
    return <div onClick={onClick}>
        <div className={s.logo}>{title}</div>
    </div>
}