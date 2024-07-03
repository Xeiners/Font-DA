import { useState } from 'react'
import { useEffect } from 'react'
import GridCard from './Grid_card'
import './land_grid.css'

function LandGrid({text1, text2}) {

    const g1 = '#ff5517'
    const g2 = '#2d6657'
    const g3 = '#97b7de'
    const g4 = '#ff867c'

    
    const [randomNumbers, setrandomNumbers] = useState([])

    
    const [activeGrid, setActiveGrid] = useState(null)
    
    useEffect(() => {
    const newRandomNumbers = [];
    for(let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * 10000)
        newRandomNumbers.push(randomNumber)
    }
        setrandomNumbers(newRandomNumbers)
      }, [])
    

    return(
        <div className='container-grid'>
            <div className='toppingBar'>
               <p>{text1}</p>
               <p>{text2}</p>
            </div>
            <GridCard name='Orange' background={g1} number={randomNumbers[0]} placement={'one'} setActiveGrid={setActiveGrid} activeGrid={activeGrid}/>
            <GridCard name='Forest' background={g2} number={randomNumbers[1]} placement={'sec'} setActiveGrid={setActiveGrid} activeGrid={activeGrid}/>
            <GridCard name='Skye' background={g3} number={randomNumbers[2]} placement={'third'} setActiveGrid={setActiveGrid} activeGrid={activeGrid}/>
            <GridCard name='Pinky' background={g4} number={randomNumbers[3]} placement={'fourth'} setActiveGrid={setActiveGrid} activeGrid={activeGrid} />
        </div>
    )
}

export default LandGrid