import { UseLogin } from "../hook/UseLogin";
import "./login.css";

export const LoginPage = () => {
  const { error, handleChange, handleSubmit } = UseLogin({
    name: "",
    email: "",
  });

  return (
    <section className="section container login">
      <h2 className="section__tile">Login</h2>

      <div className="section__container">
        <form className="section__cart" onSubmit={handleSubmit}>
          <span className="section__tag">Sale</span>

          <input
            type="text"
            placeholder="Name..."
            name="name"
            className="section__name"
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email.."
            name="email"
            className="section__email"
            autoComplete="off"
            onChange={handleChange}
          />

          <input type="submit" value="Login" />
        </form>
      </div>
      <div className="section__messages">
        {error && (
          <p className="section__messages-error">Complete el formulario</p>
        )}
      </div>
    </section>
  );
};
