//import { useState } from "react";
import { useSignup } from '../hooks/useSignup';
import { useField } from '../hooks/useField';

const Signup = () => {
  //const [email, setEmail] = useState("");
  const email = useField('email');
  //const [password, setPassword] = useState("");
  const password = useField('password');
  const password2 = useField('password');
  //const [name, setName] = useState("");
  const name = useField('text');

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name.value, email.value, password.value, password2.value);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Name:</label>
      {/* <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      /> */}
      <input {...name} />
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
      <label>Confirm Password:</label>
      <input {...password2} />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
