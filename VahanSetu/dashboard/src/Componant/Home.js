import React from 'react'
import 
{ BsPersonCircle,BsPeopleFill,BsFillFileEarmarkTextFill, BsFillPersonLinesFill}
 from 'react-icons/bs'


function Home() {
  return (

    <main className='main-container'>
    <div className='main-title'>
        <h3> WELECOME TO DASHBOARD</h3>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3 >USER</h3>
                < BsPersonCircle className='card_icon'/>
            </div>
            
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>SALE</h3>
                <BsPeopleFill className='card_icon'/>
            </div>
           
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>REQUEST</h3>
                <BsFillFileEarmarkTextFill className='card_icon'/>
            </div>
            
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>DISTRIBUTOR</h3>
                < BsFillPersonLinesFill className='card_icon'/>
            </div>
            
        </div>
    </div>

    </main>
    
  )
}

export default Home
