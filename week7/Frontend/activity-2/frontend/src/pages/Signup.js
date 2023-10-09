//import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { useField } from '../hooks/useField';

const Signup = () => {
  //const [email, setEmail] = useState('')
  const email = useField('email');
  //const [password, setPassword] = useState('')
  const password = useField('password');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email.value, password.value);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

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

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
