import { useState, useContext } from 'react';
import { contextAuth } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useForm } from "react-hook-form";
import { useNavigate} from 'react-router-dom';
import login from "../../image/login.png";
import initializeFirebase from './firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

initializeFirebase();

function Login() {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // eslint-disable-next-line no-unused-vars
    const [logininfo,setLogininfo] = useContext(contextAuth);
    const navigate = useNavigate();

    const [user, setUser] = useState({
        isLoggedin: false,
        name: '',
        email: '',
        photo: ''
    })

    const signin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    ...user,
                    isLoggedin: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                authDataRedirect();
                setUser(signedInUser)
                setLogininfo(signedInUser);
                
                
                //(signedInUser);  
                
            }).catch((error) => {
               console.log(error.message);
            }); 
    }
    
    const authDataRedirect=()=>{
        auth.currentUser.getIdToken(true)
        .then((idToken)=> {
            sessionStorage.setItem('token', idToken);
            navigate("/appoinment",{
                replace:true
            });
        }).catch((error)=> {
            // Handle error
        });              
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <section>
            <div className="row">
                <div className="col-md-7 my-auto">
                    <div className="col-md-7 mx-auto border p-5">
                        {
                            user.isLoggedin!==false ? <h5>{user.name}</h5>:''
                        }
                        <h2 className="header-text bg-main text-center">Log in</h2>
                        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mt-3">
                                <input type="email" name="email" {...register("email", { required: true })} placeholder='Email' className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" name="password" {...register("password", { required: true })} placeholder='password' className="form-control" />
                                {errors.password && <span className="text-danger">This field is required</span>}
                            </div>
                            <p className="text-danger">Forget your password..?</p>
                            <div className="form-group text-center mt-3">
                                <button type="submit" className="btn btn-main">Login</button>
                            </div>
                        </form>
                        <hr />
                        <div className="form-group text-center mt-3">
                            <button type="submit" onClick={signin} className="btn btn-main">Login with Google<FontAwesomeIcon className="ms-2" icon={faGoogle} /> </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <img className="login-bg" src={login} alt="" />
                </div>
            </div>
        </section>
    );
}
export default Login;