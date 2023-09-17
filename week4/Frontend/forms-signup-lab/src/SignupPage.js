import './SignupPage.css';
import { useState } from 'react';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('');
    const [message, setMessage] = useState('All fields required!');

    const emailValid = (email) => {
        return (email.includes('@'))
    };

    const passwordValid = (password) => {
        return (password.length > 5)
    };

    const nationalityValid = (nationality) => {
        return (nationality)
    };

    const greetings = {
        de: 'Hallo,',
        fr: 'Bonjour,',
        en: 'Hello,'
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (emailValid(email) && passwordValid(password) && nationalityValid(nationality)) {
            const newUser = {
                email,
                password,
                nationality
            };

            console.log(newUser);

            setMessage(`${greetings[nationality]} your email is ${email}!`);

            setEmail('');
            setPassword('');
            setNationality('');
        };         
    };

    return (
        <div className='signup-container'>
            <h2>Sign Up</h2>
            <form className='signup-form' onSubmit={onSubmit}>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        className={emailValid(email)? 'success':'fail' }  
                        id='email'
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        className={passwordValid(password)? 'success':'fail'}
                        id='password'
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        minLength='6'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='nationality'>Nationality:</label>
                    <select
                        className={nationalityValid(nationality)? 'success':'fail'}
                        name='nationality'
                        onChange={e => setNationality(e.target.value)}
                        value={nationality}
                        required
                    >
                        <option value='' disabled>
                            Select a nationality
                        </option>
                        <option value='fr'>French</option>
                        <option value='de'>German</option>
                        <option value='en'>English</option>
                    </select>
                </div>
                <button>Sign up</button>
                <p>{message}</p>
            </form>
        </div>
    );
};

export default SignupPage;