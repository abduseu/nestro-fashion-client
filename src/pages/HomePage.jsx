import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import Sale from "../components/Sale";

const HomePage = () => {
    const brands = useLoaderData()
    //{name, image_url}

    return (
        <div>
            <Banner></Banner>

            <div className="bg-black text-white my-14 rounded-lg text-center text-2xl font-semibold uppercase">
                <div>
                    <div className="p-5 gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
                        {
                            brands.map(x =>
                                <Link key={x.slug} to={`/${x.slug}`}>
                                    <div>
                                        <img src={x.image_url} />
                                        <h3>{x.name}</h3>
                                    </div>
                                </Link>)
                        }
                    </div>
                </div>
            </div>

            <Sale></Sale>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;