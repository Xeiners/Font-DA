import './Layout.css'
import CardImg from './card_img'
import img from '../../img/part1.png'
import img2 from '../../img/part2.png'
import img3 from '../../img/part3.png'
import img4 from '../../img/part4.png'




function Layout() {


    return(
        <div className='layout_container'>
            <div className='toppingBar'>
               <p>Layout</p>
               <p>Some images for previewing</p>
            </div>
            
            <div className='content_lay'>

                <CardImg img={img} /> 
                <CardImg img={img2} /> 
                <CardImg img={img4} />

            </div>
        </div>
    )

}

export default Layout