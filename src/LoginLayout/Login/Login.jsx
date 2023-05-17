import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src="https://img.freepik.com/free-vector/data-security-technology-background-vector-blue-tone_53876-112201.jpg?w=740&t=st=1684349342~exp=1684349942~hmac=1cddf55f689f47bab2076c2cbe5fd6e3e36924855bb4a45fbb9168e78c468c3a" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link>
                        </p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;