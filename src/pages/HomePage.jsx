import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import Sale from "../components/Sale";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="bg-black text-white my-14 rounded-lg text-center text-2xl font-semibold uppercase">
                <div>
                    <div className="p-5 gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">

                        <div>
                            <img src="https://i.ibb.co/dPgVhGM/levis.png" alt="" />
                            <h3>Levis</h3>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/mGWYcVm/champion.png" alt="" />
                            <h3>Champion</h3>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/5M38sw4/nike.png" alt="" />
                            <h3>Nike</h3>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/BgxqfmF/calvin.png" alt="" />
                            <h3>CK</h3>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/Gsw3pJZ/dolce.png" alt="" />
                            <h3>D & G</h3>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/wyTFGKN/armani.png" alt="" />
                            <h3>Armani</h3>
                        </div>

                    </div>
                </div>
            </div>

            <Sale></Sale>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;