const CartPage = () => {
    return (
        <div className="bg-slate-100 rounded-[60px]">
            <div className="text-center font-black text-2xl md:text-4xl p-10 md:p-20">
                <h2>My Cart</h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <form>
                    <div className="text-center">
                        <li>item-1</li>
                        <li>item-2</li>
                        <li>item-3</li>
                    </div>
                    <div className="text-center pt-10">
                        <button className="btn btn-neutral">Purchase</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CartPage;