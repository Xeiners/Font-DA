import { useEffect, useState } from 'react'



function GridCard({name, background, number, placement, setActiveGrid, activeGrid}) {

    useEffect(() => {
      return () => {
       console.log('composant numero' + placement + 'charger')
      }
    }, [])
    
    

    function showCard() {
        if(activeGrid !== number){
            setActiveGrid(number)
        } else {
            setActiveGrid(null)
        }
    }

    
    return(
        <div className={activeGrid === number ? `gridBlock_active${placement}` : 'gridBlock'} 
                onClick={() => showCard()} 
                style={{background : `${background}`, zIndex : activeGrid === number ? '500': setTimeout('1', 1000)}}>
            <p>Name : {`${name}`}</p>
            <p>Color : {`${background}`}</p>
            <p>ID card: {`${number}`}</p>
        </div>
    )
} 

export default GridCard