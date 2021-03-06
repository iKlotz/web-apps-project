import React, {useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const {setAlert} = alertContext;
    const {login, error, clearErrors, isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/'); //redirects to our home page
        }

        if (error === 'Invalid Credentials') { //better way is to use an ID
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: '',
        remember_me: false
    });

    const {email, password, remember_me} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                email,
                password,
                remember_me
            });
        }
    };

    return (
        <div className='form-container'>
            <h1>
                Account Login
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input type="checkbox" name="remember_me" value="true" onChange={onChange}/> Remember me
                    <input type="submit"
                           value="Login"
                           className="btn btn-secondary btn-block"/>
                </div>
            </form>
        </div>
    );
};

export default Login;