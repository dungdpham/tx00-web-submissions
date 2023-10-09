//import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useField } from '../hooks/useField';

const Login = () => {
  //const [email, setEmail] = useState('')
  const email = useField('email');
  //const [password, setPassword] = useState('')
  const password = useField('password');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email.value, password.value);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <label>Email address:</label>
      {/* <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      /> */}
      <input {...email} />
      <label>Password:</label>
      {/* <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      /> */}
      <input {...password} />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
