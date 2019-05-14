import SignupStyles from './SignupStyles';

const Signup = () => (
  <SignupStyles>
    <fieldset>
      <h2>Sign up for an account</h2>
      <label htmlFor="email">
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label htmlFor="username">
        <input type="text" name="username" placeholder="Username" />
      </label>
      <button type="submit">Sign Up</button>
    </fieldset>
  </SignupStyles>
);

export default Signup;
