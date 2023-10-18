const Banner = () => {
    return (
        <div className="bg-slate-100 rounded-[60px] lg:flex lg:justify-between">
            <div className="font-black max-w-2xl leading-snug p-10 text-5xl md:text-8xl md:p-20 md:leading-snug">
                <h2>LET’S <br />
                    EXPLORE <br />
                    <span className="bg-green-600 text-white">NESTRO</span> <br />
                    CLOTHES.</h2>
            </div>
            <div className="max-w-2xl">
                <div className="lg:p-20">
                <img src="https://i.ibb.co/LPJBDm7/banner-model-1.png" />
                </div>
            </div>

        </div>
    );
};

export default Banner;