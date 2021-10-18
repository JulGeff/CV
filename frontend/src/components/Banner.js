
import '../styles/style.css'
import portrait from '../images/portrait_julien_geffriaud.jpg'
import React from "react";
import {
    Link
  } from "react-router-dom";
 
 

function Banner() {

        
    return  (
        <header className='banner'>
            <div className='banner__welcome'>
                <Link className='banner_links' to="/">
                <img src={portrait} alt='Groupomania' className='banner__welcome__logo' />
                <h1>Julien Geffriaud <br />
                    Ingenieur<br />
                    Developpeur front-end</h1>
                    </Link>
            </div>  
            <nav>
                <ul className = 'banner__icons'>
                    <li>
                        <Link className='banner_links' to="/parcours">
                            <h2>parcours //</h2>
                        </Link>
                    </li>
                    <li>
                        <Link className='banner_links' to="/technos">
                            <h2>technos //</h2>
                        </Link>
                    </li>
                    <li>
                        <Link className='banner_links' to="/works">
                            <h2>realisations //</h2>
                        </Link>
                    </li>
                    <li>
                        <Link className='banner_links' to="/creativite">
                            <h2>musique</h2>
                        </Link>
                    </li>
                
                </ul>   
            </nav>            
        </header>
        )          
}

export default Banner