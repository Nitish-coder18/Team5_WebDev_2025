

const Navbaar = () => {
  return (
    <div>
        <center>
      <div className="flex justify-between items-center w-250 mt-8">
        <div className="text-4xl font-bold slide-up-animation">INDIA</div>
        <div className="slide-up-animation">
            <ul className="flex gap-20 text-xl">
                <li><a className="text-orange-500" href="#home">Home</a></li>
                <li><a className="text-orange-500" href="">About</a></li>
                <li><a className="" href="">Idols</a></li>
                <li><a className="text-green-500" href="">Thanks</a></li>
                <li><a className="text-green-500" href="">Contact</a></li>
            </ul>
        </div>
      </div>
      </center>
    </div>
  )
}

export default Navbaar;
