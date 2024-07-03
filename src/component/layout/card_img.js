import cover_back from '../../img/back.png'

function CardImg({img}) {


    return(

            <div className='image_container'>
                <div className='lay'>
                    <img className='lay_back' src={img} alt="Images"/>
                    <img className='lay_front' src={cover_back} alt="Images"/>
                </div>
            </div>    
    )

}

export default CardImg