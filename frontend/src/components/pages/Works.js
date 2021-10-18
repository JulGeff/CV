
import React, { useEffect, useState } from 'react';
import '../../styles/style.css'
import test from '../../images/pics/test.jpg'
import test2 from '../../images/pics/test2.jpg'
import test3 from '../../images/pics/test3.jpg'
import test4 from '../../images/pics/test4.jpg'

function Works() {

    
    return (
      <div className='works'> 

        <ul>
          <li className="overlay">
             
                <h2>Groupomania</h2>
                <p>Fullstack</p>
                <img src={test} alt="Alt text hover" />
        
          </li>
          <li className="overlay"> 
            <h2>So Pekocko</h2>
            <p>Backend</p>
            <img src={test2} alt="Alt text hover" />
          </li>
          <li className="overlay">
            <h2>Orinoco</h2>
            <p>Frontend</p>
            <img src={test3} alt="Alt text hover" />
            </li>
          <li className="overlay"> 
            <h2>Ohmyfood!</h2>
            <p>Frontend</p>
            <img src={test4} alt="Alt text hover" />
            </li>
        </ul>
       
       </div>
    )

}
  
export default Works