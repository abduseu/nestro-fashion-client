import { Link } from "react-router-dom";

const ProductCard = ({obj}) => {
    const { _id, name, brand, type, price, description, rating, image } = obj
    return (
        <div className="p-3 rounded flex flex-col shadow-md">
            <div className="pb-4">
                <img className="rounded" src={image} />
            </div>
            <h1 className="font-bold text-lg">{name}</h1>
            <p className="pt-3 grow">{description}</p>
            <div className="flex justify-between px-1">
                <p className="py-3 font-bold">Price: <span>${price}</span></p>
                <p className="py-3 font-bold">Rating: <span>{rating || 'none'}</span></p>
            </div>

            <Link to={`/products/${_id}`}><button className="btn btn-neutral w-full rounded">Details</button></Link>
        </div>
    );
};

export default ProductCard;