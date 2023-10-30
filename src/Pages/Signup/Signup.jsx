import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Signup = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignup=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>console.log(error))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-1/2 mr-12">
                <img src={image} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className='card-body'>
                    <h1 className="text-3xl text-center font-bold">Sign Up Now!</h1>
                    <form onSubmit={handleSignup}>
                        {/* name field */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        {/* email field */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        {/* password field */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required />
               
                        </div>
                        <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary bg-orange-600 hover:bg-orange-700 text-white">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center my-4'>Already Have Account ? Please <Link className='text-orange-600 font-bold' to='signup'>Login</Link></p>
                </div>    
            </div>
        </div>
    </div>
    );
};

export default Signup;