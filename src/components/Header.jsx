import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleSignout = () => {
        logOut()
            .then(() => {
                console.log('signed Out')
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    //Navlink
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add">Add Product</NavLink></li>
        <li><NavLink to="/cart">My Cart</NavLink></li>
        <li><NavLink to="/login" className="btn btn-outline btn-sm">Login</NavLink></li>
    </>
    const linksPrivate = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add">Add Product</NavLink></li>
        <li><NavLink to="/cart">My Cart</NavLink></li>
        <li><NavLink onClick={handleSignout} className="btn btn-outline btn-sm">Signout</NavLink></li>
    </>

    return (
<div className="py-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                    <Link to="/" className="text-5xl font-thin">NEST</Link>
                </div>
                <div className="mt-6 md:mt-0">
                    <nav>
                        <ul className={`md:space-x-12 grid ${user ? 'grid-cols-2' : 'grid-cols-3'}  gap-2 md:flex list-none text-lg font-bold`}>
                        {user ? linksPrivate : links}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex items-center justify-center md:justify-end mt-4">
                {
                    user && <>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                            </div>
                        </label>
                        <h3 className="text-lg font-bold">{user.displayName}</h3>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;