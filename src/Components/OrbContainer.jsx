import Orb from './Orb'

const OrbContainer = () => {
    return(
        <div className="container w-full h-screen text-center relative overflow-hidden">
            <div className="slider top-[10%] w-[250px] h-[250px] left-[50%] z-20">
                {/* <Orb/> */}
                <div><img src="public/poster.jpg" /></div>
            </div>
        </div>
    )
}

export default OrbContainer