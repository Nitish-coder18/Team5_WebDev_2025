import Bhagat from '../assets/Bhagat.jpg';
import Chandrashekhar from '../assets/chandrasekhar.jpg';
import Subhash from '../assets/subhash.jpg';
import MahatmaGandhi from '../assets/mahatmagandhi.jpg';
import {Link} from "react-router-dom";

import React from 'react'

const IdolsList = () => {

const Idolslist [  {
    id:1,name:Mahatma Gandhi,image:MahatmaGandhi,year:1869 –  1948
}, { id:2,name:Subhash Chandra Bose,image:Subhash,year:1897-1945 },       ];




  return (
    <div>

{   Idolslist.map(   ( idol)=>(       
    
    <div     key={idol.id}     >

        <Link to=`/deatils/${idol.id}`  >










</Link>


</div>

                                        ))}






</div>

  )
}
export default IdolsList