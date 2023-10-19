import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {AiFillThunderbolt} from 'react-icons/ai';

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
        <li><NavLink to="/add-product">Add Product</NavLink></li>
        <li><NavLink to="/cart">My Cart</NavLink></li>
        <li><NavLink to="/login" className="navbtn rounded-lg">Login</NavLink></li>
    </>
    const linksPrivate = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add-product">Add Product</NavLink></li>
        <li><NavLink to="/cart">My Cart</NavLink></li>
        <li><NavLink onClick={handleSignout} className="navbtn rounded-lg">Signout</NavLink></li>
    </>

    return (
<div className="py-4">
            <div className="flex flex-col md:flex-row md:gap-10 items-center justify-between">
                <div>
                    
                    <Link to="/" className="text-4xl font-black flex items-center gap-2"><AiFillThunderbolt/>NESTRO</Link>
                </div>
                <div className="mt-6 md:mt-0">
                    <div>
                        <ul className={`md:space-x-12 grid ${user ? 'grid-cols-2' : 'grid-cols-2'}  gap-4 md:flex list-none font-semibold text-xl uppercase`}>
                        {user ? linksPrivate : links}
                        </ul>
                    </div>
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