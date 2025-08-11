import Video from '.././assets/video.mp4'

const About = () => {
  return (
    <div id='about'>
        <center>
      <div className="text-5xl my-5 mb-10 italic">
        <span className="mx-1 text-orange-500">15</span>
        <span className="mx-1">August</span>
        <span className="mx-1 text-green-500">1947</span>
      </div>
      </center>

    <center className="text-2xl">
      <div className="w-250 flex flex-col gap-10">
        <p className='text-orange-500'> Independence Day is celebrated every year on 15th August. On this day in 1947, India gained freedom from British rule. It is a symbol of patriotism and pride.</p>

        <p> On this day, the national flag is hoisted across the country. Schools, colleges, and government offices hold special programs. People sing patriotic songs and deliver speeches.</p>

        <p className='text-green-500'> Independence Day reminds us of the brave heroes who sacrificed their lives for freedom. It inspires us to stay united and serve our nation. </p>
      </div>
      <video className='video h-60 mt-10 mb-15' controls src={Video}></video>
      </center>
    </div>
  )
}

export default About
