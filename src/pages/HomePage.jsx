import Banner from "../components/Banner";

const HomePage = () => {
    return (
        <div>
            <Banner />

            {/* Brand Section */}
            <div className="bg-black text-white my-14 rounded-lg lg:flex lg:justify-between">
                <div className="p-5 md:p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
                    <li>item-1</li>
                    <li>item-2</li>
                    <li>item-3</li>
                    <li>item-4</li>
                    <li>item-5</li>
                    <li>item-6</li>
                </div>
            </div>

            {/* Extra section 1 */}
            <div>
                New Araival
            </div>

            {/* Extra section 2 */}
            <div>
                Sale Now
            </div>

            {/* Extra section 3 */}
            <div>
                News Letter
            </div>
        </div>
    );
};

export default HomePage;