import image from "..//assets/indianfleag2.png"
import "./header_animation.css";

const Header = () => {
  return (

    <div className="flex flex-row items-center justify-center gap-50 mt-35">
      <div className="">
            <h1 className="text-5xl font-bold mb-4 text-orange-500 slide-up-animation"> Digital Freedom Gallery</h1>
            <p className="text-3xl mb-14 items-start mt-3 slide-up-animation">Code a Vision. Design the Nation</p>
            <p className="text-2xl font-extralight text-green-500 slide-up-animation">A web tribute to India's <br /> past, present, and digital future</p>
      </div>
      <div className="updown-animation">
          <img className="h-120 slide-up-animation" src={image} alt="" />
      </div>
    </div>

  )
}

export default Header
