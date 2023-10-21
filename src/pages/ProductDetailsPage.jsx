import { useLoaderData } from "react-router-dom";

const ProductDetailsPage = () => {
    const { name, brand, type, price, description, rating, image } = useLoaderData()


    return (
        <div className="bg-slate-100 rounded-[60px]">
            <div className="text-center font-black text-2xl md:text-4xl p-10 md:p-20">
                <h2>Product Details</h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="max-w-2xl mx-auto md:flex">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div className="px-5 text-xl md:space-y-4">
                        <div className="font-bold text-3xl">
                            {name}
                        </div>
                        <div>
                            {brand}
                        </div>
                        <div>
                            {type}
                        </div>
                        <div>
                            {description}
                        </div>
                        <div>
                            <div className="rating">
                                {(parseInt(rating)==0 || !rating) && <input type="radio" name="rating-1" className="rating-hidden" checked />}
                                {parseInt(rating)==1 ? 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" checked /> : 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" />
                                }
                                {parseInt(rating)==2 ? 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" checked /> : 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" />
                                }
                                {parseInt(rating)==3 ? 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" checked /> : 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" />
                                }
                                {parseInt(rating)==4 ? 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" checked /> : 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" />
                                }
                                {parseInt(rating)==5 ? 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" checked /> : 
                                <input type="radio" name="rating-1" className="mask mask-star bg-green-600" />
                                }
                            </div>
                            <div>Rating: {rating || 'none'}</div>
                        </div>
                        <div className="font-bold py-2">Price: ${price}</div>
                    </div>
                </div>
                <div className="text-center pt-10">
                    <button className="btn btn-neutral">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;