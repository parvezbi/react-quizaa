import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import classes from "../styles/Login.module.css";
function Login() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Dont have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
