import './Background.css'
import background from '../../assets/back.jpg'

const Background = () => {
    return (
        <div className='backgroundContainer'>
            <h1 className='backgroundTitle'>Dejar de fumar, es posible</h1>
            <img className='backgroundImg' src={background} alt="" />
        </div>
    )
} 

export default Background; 