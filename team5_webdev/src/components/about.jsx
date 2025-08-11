import Video from '.././assets/video.mp4'
import "./about_animation.css"
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"


const About = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div id='about'>
        <center>
      <div className="text-5xl my-5 mb-10 italic">
        <span className="mx-1 text-orange-500" data-aos="left-in-animation">15</span>
        <span className="mx-1" data-aos="still-animation">August</span>
        <span className="mx-1 text-green-500" data-aos="right-in-animation">1947</span>
      </div>
      </center>

    <center className="text-2xl">
      <div className="w-250 flex flex-col gap-10 ">
        <p className='text-orange-500 ' data-aos="slide-up-animation"> Independence Day is celebrated every year on 15th August. On this day in 1947, India gained freedom from British rule. It is a symbol of patriotism and pride.</p>

        <p data-aos="slide-up-animation"> On this day, the national flag is hoisted across the country. Schools, colleges, and government offices hold special programs. People sing patriotic songs and deliver speeches.</p>

        <p className='text-green-500 'data-aos="slide-up-animation"> Independence Day reminds us of the brave heroes who sacrificed their lives for freedom. It inspires us to stay united and serve our nation. </p>
      </div>
      <div data-aos="slide-up-animation">
      <video className='video h-60 mt-10 mb-15' controls src={Video} ></video>
      </div>
      </center>
    </div>
  )
}

export default About
