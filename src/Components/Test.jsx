const Test = () => {
    return(
        <div className="">
            <div className="absolute top-[10%] w-[250px] middle">
                <img src="public/poster.jpg"/>
            </div>
            <style>
                {
                    ` .middle {
                        left: calc(50% -125px);
                    }`
                }
                </style>
        </div>
    )
}

export default Test