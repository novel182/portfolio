import Orb from './Orb'

const OrbContainer = () => {
    return(
        <div className="container w-screen h-screen text-center relative overflow-hidden">
            <div className="slider absolute ">
                <Orb/>
            </div>
        </div>
    )
}

export default OrbContainer