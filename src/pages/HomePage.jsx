import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import Sale from "../components/Sale";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>

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

            <Sale></Sale>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;