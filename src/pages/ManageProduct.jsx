import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ManageProduct = () => {
    const loadProducts = useLoaderData()
    const [products, setProducts] = useState(loadProducts)

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your Product has been deleted.',
                        'success'
                    )
                    const remaining = products.filter(x => x._id !== id)
                    setProducts(remaining)
                }
            })
    }

    return (
        <div className="bg-slate-100 rounded-[60px]">
            <div className="text-center font-black text-2xl md:text-4xl p-10 md:p-20">
                <h2>Manage Product</h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(x =>
                                    <tr key={x._id}>
                                        <th>{x._id}</th>
                                        <td>{x.name}</td>
                                        <td>{x.brand}</td>
                                        <td>{x.price}</td>
                                        <td>
                                            <Link to={`/update-product/${x._id}`}><button className="btn btn-xs">Edit</button></Link>
                                            <button onClick={() => handleDelete(x._id)} className="btn btn-xs">X</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;