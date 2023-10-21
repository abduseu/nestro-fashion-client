import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const BrandPage = () => {
    const products = useLoaderData()

    return (
        <div>
            <div className="bg-slate-100 rounded-[60px] lg:flex lg:justify-between">
                <div className="font-black max-w-2xl leading-snug p-10 text-5xl md:text-8xl md:p-20 md:leading-snug">
                    <h2>Brand <br />
                        <span className="bg-green-600 text-white">Page</span> <br />
                    </h2>
                </div>
                <div className="max-w-2xl">
                    <div className="lg:p-20">
                        <img src="https://i.ibb.co/LPJBDm7/banner-model-1.png" />
                    </div>
                </div>

            </div>
            <div className="my-14 flex justify-center rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {products.length > 0 ?
                        products.map(x => <ProductCard key={x._id} obj={x}></ProductCard>) :
                        <>
                            <h2 className="font-bold text-5xl">Products Unavailable</h2>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandPage;