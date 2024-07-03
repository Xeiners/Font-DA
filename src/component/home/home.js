import { useEffect } from 'react'
import './home.css'


function Home({logo, bg_color, allow, pos, text1, text2}) {
    // pos === 'sticky' ?  `${pos} , height : '110vh'` : `${pos}`
    return(
        <div className="home" style={{background: `${bg_color}`, position : `${pos}`}}>
            <span className='topping'  style={{display : allow ? "block" : "none"}}>Brand Guidelines</span>
            <div className='toppingBar' style={{display : !allow ? "flex" : "none"}}>
               <p>{text1}</p>
               <p>{text2}</p>
            </div>
            <img src={logo} alt="Logo"/>
        </div>
    )
}

export default Home