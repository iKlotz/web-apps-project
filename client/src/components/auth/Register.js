import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const {setAlert} = alertContext;
    const {register, error, clearErrors, isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/'); //redirects to our home page
        }

        if (error === 'User already exists') { //better way is to use an ID
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '' //confirmation
    });

    const {firstname, lastname, email, password, password2} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if (firstname === '' || lastname === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({
                firstname,
                lastname,
                email,
                password
            });
        }
    };


    return (
        <div className='form-container'>
            <h1>
                Account Register
            </h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" name="firstname" value={firstname} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" name="lastname" value={lastname} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" value={email} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password:</label>
                    <input type="password"
                           name="password2"
                           value={password2}
                           onChange={onChange}
                           required
                           minLength="6"
                    />
                </div>
                <input type="submit" value="Register" className="btn btn-secondary btn-block"/>
            </form>
        </div>
    );
};

export default Register;