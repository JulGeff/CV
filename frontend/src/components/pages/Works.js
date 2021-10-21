
import React, { useEffect, useState } from 'react';
import '../../styles/style.css'
import {
  Link
} from "react-router-dom";

function Works() {

    
    return (
      <div className='works'> 

        <ul>
          
          <li>
            <Link className='works__link' to="/works/groupomania">              
              <h2>Groupomania</h2>
              <p>Fullstack</p>
            </Link>
           
          </li>
          <li> 
            <Link className='works__link' to="/works/sopekocko">       
              <h2>So Pekocko</h2>
              <p>Backend</p>
            </Link>  
          </li>
          
          <li>
            <Link className='works__link' to="/works/orinoco">  
              <h2>Orinoco</h2>
              <p>Frontend</p>
            </Link> 
          </li>
          
          <li> 
            <Link className='works__link' to="/works/ohmyfood">  
              <h2>Ohmyfood!</h2>
              <p>Frontend</p>
            </Link> 
          </li>
        </ul>
       
       </div>
    )

}
  
export default Works