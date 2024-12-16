import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinks = <>
        <li className="text-lg font-semibold"><NavLink to="/">Home</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/menu">Our Menu</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/orderfood/salad">Order Food</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/login">Login</NavLink></li>
        </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-blue-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold text-white">ServeWell</a>
            </div>
            <div className="navbar-center hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline text-lg text-orange-500">Button</a>
            </div>
        </div>
    );
};

export default Navbar;