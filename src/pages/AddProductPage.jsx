import Swal from 'sweetalert2';

const AddProductPage = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brandName.value
        const type = form.type.value
        const price = form.price.value
        const description = form.shortDescription.value
        const rating = form.rating.value
        const image = form.image.value

        const product = { name, brand, type, price, description, rating, image }

        console.log('form:', product)

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Product Added!',
                        'Your Product has beed Added!',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="bg-slate-100 rounded-[60px]">
            <div className="text-center font-black text-2xl md:text-4xl p-10 md:p-20">
                <h2>Add Product</h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <form onSubmit={handleAddProduct}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3>Name:</h3>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Brand Name:</h3>
                            <select name="brandName" className="select select-bordered w-full">
                                <option value="Armani">Armani</option>
                                <option value="Champion">Champion</option>
                                <option value="CK">CK</option>
                                <option value="D&G">D&G</option>
                                <option value="Levi's">Levi's</option>
                                <option value="Nike">Nike</option>
                            </select>
                        </div>
                        <div>
                            <h3>Type:</h3>
                            <input type="text" name="type" placeholder="ex. shirt, dress, shoe etc." className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Price:</h3>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Description:</h3>
                            <input type="text" name="shortDescription" placeholder="Description" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Rating:</h3>
                            <input type="text" name="rating" placeholder="Name" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Image:</h3>
                            <input type="url" name="image" placeholder="Paste image url here" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="text-center pt-10">
                        <button className="btn btn-neutral">Add product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductPage;