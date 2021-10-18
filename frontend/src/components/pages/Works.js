
import React, { useEffect, useState } from 'react';
import '../../styles/style.css'
import groupomania from '../../images/pics/groupomania.png'
import sopekocko from '../../images/pics/sopekocko.png'
import orinoco from '../../images/pics/orinoco.png'
import ohmyfood from '../../images/pics/ohmyfood.png'


import {
  Link
} from "react-router-dom";

function Works() {

    
    return (
      <div className='works'> 

        <ul>
          
          <li className="overlay">
            <Link className='groupomania' to="/works/groupomania">              
              <h2>Groupomania</h2>
              <p>Fullstack</p>
            </Link>
              <img src={groupomania} alt="Alt text hover" />
           
          </li>
          <li className="overlay"> 
            <Link className='sopekocko' to="/works/sopekocko">       
              <h2>So Pekocko</h2>
              <p>Backend</p>
            </Link>  
              <img src={sopekocko} alt="Alt text hover" />
          </li>
          
          <li className="overlay">
            <Link className='orinoco' to="/works/orinoco">  
              <h2>Orinoco</h2>
              <p>Frontend</p>
            </Link> 
            <img src={orinoco} alt="Alt text hover" />
          </li>
          
          <li className="overlay"> 
            <Link className='ohmyfood' to="/works/ohmyfood">  
              <h2>Ohmyfood!</h2>
              <p>Frontend</p>
            </Link> 
            <img src={ohmyfood} alt="Alt text hover" />
          </li>
        </ul>
       
       </div>
    )

}
  
export default Works