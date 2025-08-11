import React from 'react' 




import Bhagat from '../assets/Bhagat.jpg';
import Chandrashekhar from '../assets/chandrasekhar.jpg';
import Subhash from '../assets/subhash.jpg';
import MahatmaGandhi from '../assets/mahatmagandhi.jpg';
import Rani from '../assets/rani.jpg';
import Jawahar from '../assets/jawaharlal lal nehru.jpg';
import {Link} from "react-router-dom";



const IdolsList = () => {

const Idolslist = [  {
     id:1, name: "Mahatma Gandhi" , image: MahatmaGandhi, year :"1869-1948"
}, { id:2, name:"Subhash Chandra Bose" , image: Subhash, year:"1897-1945"        },

{  id:3, name:"Rani Lakshmibai", image: Rani, year:"1828-1858" },
{ id:4, name:"Jawaharlal Nehru", image: Jawahar, year:"1889-1964" },
{ id:5, name:"Bhagat Singh", image: Bhagat, year:"1907-1931" },
{ id:6, name:"Chandra Shekhar Azad", image: Chandrashekhar, year:"1906-1931" },                                    








];




  return (
    <center >
        <div className='mt-10 text-5xl mb-15 italic font-bold'>Our Indians Idols</div>
    <div className='flex flex-wrap justify-center gap-30 w-300 '  >

{   Idolslist.map(   ( idol) =>(       
    
    <div     key={idol.id}     >

        <Link to={`/details/${idol.id}`}>
        <div>

<img className='img5 h-55'  src={idol.image} alt={idol.name} /> 
<h1 className='mt-5'>    {idol.name}                    </h1>  

</div>


</Link>


</div>

                                        ))}






</div>
</center>
  )
}
export default IdolsList