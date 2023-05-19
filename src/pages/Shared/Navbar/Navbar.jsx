import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        {
            user?.email ?
                <>
                    <li><Link to='/myToys'>My Toys</Link></li>
                    <li><Link to='addToys'>AddToy</Link></li>
                    <li><button onClick={handleLogOut} >Log Out</button></li> </>
                :
                <li><Link to='/login'>Login</Link></li>

        }
    </>

    // {user?.email ?
    //     <>
    //         <li><Link to='/bookings'>My Bookings</Link></li>
    //         <li><button onClick={handleLogOut}>Log Out</button></li>
    //     </>
    //     :
    //     <li><Link to='/login'>Login</Link></li>
    // }
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                            {/* <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/blog' className="justify-between">
                                    Blog
                                </Link>
                            </li>
                            <li><Link>All Toys</Link></li>
                            <li><Link>My Toys</Link></li>
                            <li><Link>Add A Toy</Link></li>
                            <li><Link to='/login'>Login</Link></li> */}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">All-Star Sports</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                        {/* <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/blog'>
                                Blog
                            </Link>

                        </li>
                        <li><Link>All Toys</Link></li>
                        <li><Link>My Toys</Link></li>
                        <li><Link>Add A Toy</Link></li>
                        <li><Link to='/login'>Login</Link></li> */}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;