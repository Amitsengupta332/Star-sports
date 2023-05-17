import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Adventure Pals</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link>Blogs</Link></li>
                        <li><Link>All Toys</Link></li>
                        <li><Link>My Toys</Link></li>
                        <li><Link>Add a Toy</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;