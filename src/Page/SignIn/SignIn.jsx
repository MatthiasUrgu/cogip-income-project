import SignForm from "../../components/SignForm/SignForm";
import FormGirl from "../../assets/img/Form_Girls.svg";
import s from "./style.module.scss";
function SignIn() {
  return (
    <div className={s.container}>
      <div className={s.form}>
        <img src={FormGirl} alt="image formSignIn" />

        <SignForm title="Welcome" subtitle="Hi, enter your details"submit='Submit' submitP='You have still an account?  Sign in '
        submitLink="here"/>
      </div>
    </div>
  );
}

export default SignIn;
