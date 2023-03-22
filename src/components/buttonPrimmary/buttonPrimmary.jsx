import Button from 'react-bootstrap/Button';
import s from './style.module.scss'


 function ButtonPrimmary({children}){
    return <Button className={s.button}variant="light">{children}</Button>
}

export default ButtonPrimmary