import loginImage from '../../assets/others/authentication1.png'
const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        const loginusr = {email,password,captcha}
        console.log(loginusr);

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImage} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className='text-3xl text-center font-semibold text-orange-400'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                {/* <span className="label-text">captcha</span> */}
                            </label>
                            <input type="" className="input input-bordered" />
                            <span className='text-violet-500'>Reload Captcha</span>
                        </div>
                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Password</span>
                            </label> */}
                            <input type="" name='captcha' placeholder="type here" className="input input-bordered" required />
                        </div>
                       <div>
                       <input type="submit" value="Login" className="btn btn-outline border border-b-4 bg-orange-300 w-full text-lg"/>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;