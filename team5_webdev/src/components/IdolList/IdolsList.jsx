import React from 'react';

import Bhagat from '../../assets/Bhagat.jpg';
import Chandrashekhar from '../../assets/chandrasekhar.jpg';
import Subhash from '../../assets/subhash.jpg';
import MahatmaGandhi from '../../assets/mahatmagandhi.jpg';
import Rani from '../../assets/rani.jpg';
import Jawahar from '../../assets/jawaharlal lal nehru.jpg';

import { Link } from "react-router-dom";

const IdolsList = () => {

  const Idolslist = [
    { id:1, name: "Mahatma Gandhi", image: MahatmaGandhi, year :"1869-1948" },
    { id:2, name:"Subhash Chandra Bose", image: Subhash, year:"1897-1945" },
    { id:3, name:"Rani Lakshmibai", image: Rani, year:"1828-1858" },
    { id:4, name:"Jawaharlal Nehru", image: Jawahar, year:"1889-1964" },
    { id:5, name:"Bhagat Singh", image: Bhagat, year:"1907-1931" },
    { id:6, name:"Chandra Shekhar Azad", image: Chandrashekhar, year:"1906-1931" },
  ];

  return (
    <>
      {/* Outer Dark Container */}
      <div className="max-w-6xl mx-auto mt-24 mb-16 px-6 py-10 
                      border border-gray-700 rounded-2xl shadow-xl 
                      bg-[#0d0d0d]">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-wide">
            <span className="text-orange-400">Our </span>
            <span className="text-gray-200">Indian </span>
            <span className="text-green-400">Idols</span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {Idolslist.map((idol) => (
            <Link to={`/details/${idol.id}`} key={idol.id}>
              
              <div className="
                bg-[#1a1a1a] border border-gray-700 rounded-xl 
                shadow-md hover:shadow-2xl transition duration-300 
                overflow-hidden cursor-pointer hover:-translate-y-2
              ">

                {/* Indian Flag Theme Bar */}
                <div className="h-2 w-full flex">
                  <div className="w-1/3 bg-orange-500"></div>
                  <div className="w-1/3 bg-white"></div>
                  <div className="w-1/3 bg-green-600"></div>
                </div>

                {/* Image */}
                <img 
                  src={idol.image} 
                  alt={idol.name} 
                  className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-5 text-center">
                  <h2 className="text-xl font-semibold text-gray-100">
                    {idol.name}
                  </h2>
                  <p className="text-sm text-green-300 mt-1">{idol.year}</p>
                </div>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </>
  );
};

export default IdolsList;
