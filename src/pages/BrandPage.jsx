import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const BrandPage = () => {
    const products = useLoaderData()

    return (
        <div>
            <div className="rounded-lg">
                <div className="carousel h-96 rounded-lg">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/wLZ0HM4/banner-4.jpg" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/qFBtZY7/banner-5.jpg" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/pJq9s0Z/banner-1.jpg" className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i.ibb.co/dbbXhzX/banner-3.jpg" className="w-full" />
                    </div>
                </div>

                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
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