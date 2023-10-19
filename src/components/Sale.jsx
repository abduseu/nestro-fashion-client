const Sale = () => {
    return (
        <div className="bg-green-600 lg:flex text-center items-center lg:justify-around rounded-lg">
            <div className="max-w-2xl">
                <div className="md:p-20 p-10 transform -scale-x-100">
                    <img src="https://i.ibb.co/ScX4RkY/banner-model-3.png" />
                </div>
            </div>
            <div className="font-black max-w-2xl  p-10 md:p-20">
                <h2 className=" text-5xl md:text-8xl leading-snug">PARTY<br />
                    <span className="text-white">SEASON</span> <br />
                    SALE.
                </h2>
                <button className="btn btn-outline border-2 text-white rounded-lg my-10">SHOP NOW</button>
            </div>
            
        </div>
    );
};

export default Sale;