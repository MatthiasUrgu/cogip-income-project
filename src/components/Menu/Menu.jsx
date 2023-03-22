import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";
import { Logo } from "../Logo/Logo";

export function Menu(props) {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Logo 
            onClick={() => navigate("/home")} 
            title="Cogip" />
        <div className={s.menu}>
          <a onClick={() => navigate("/home")}>
            <li>Home</li>
          </a>

          <a onClick={() => navigate("/invoices")}>
            <li>Invoices</li>
          </a>

          <a onClick={() => navigate("/contact")}>
            <li>Contact</li>
          </a>
        </div>
        <div className={s.log}>
          <div onClick={() => navigate("/SignIn")}>Sign in</div>
          <div>Log In</div>
        </div>
      </div>
    </div>
  );
}
