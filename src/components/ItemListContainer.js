import { ItemCount } from './ItemCount'
import './ItemCount.css'

export const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <p className="itemListContainer">Hola {greeting}</p>
            <ItemCount />
        </>
    )
}