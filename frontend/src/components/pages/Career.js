
import React, { useEffect, useState } from 'react';
import '../../styles/style.css'
import oc from '../../images/logos/oc.png'
import esma from '../../images/logos/esma.png'
import icam from '../../images/logos/icam.png'

function Career() {

    
    return (
    <div className='career'>   
        <table>
            <tr className='career__one'>
                <td><img src={oc} alt='Logo Open Classrooms' className='oc' /></td>
                <td>
                    2021<br />
                    Open Classrooms<br />
                    Developpeur web
                </td>
            </tr>   
            <tr className='career__two'>
                <td><img src={esma} alt='Logo Open Classrooms' className='esma' /></td>
                <td>
                    2007<br />
                    ESM-A Marne-la-Vallée<br />
                    Master en Strategie logistique
                </td>
            </tr>
            <tr className='career__three'>    
                <td><img src={icam} alt='Logo Open Classrooms' className='icam' /></td>
                <td>
                2006<br />
                    ICAM Nantes<br />
                    Ingenieur generaliste
                </td>
            </tr>
        </table>
    </div>
    )

}
  
export default Career