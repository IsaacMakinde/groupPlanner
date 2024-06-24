import { useState, useEffect } from "react";
import { Navigate } from "react-router";

const LoginForm = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);
      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData);
      const email = payload.email.toString();
      const password = payload.password.toString();

      setIsSigningIn(true);
    }
  };

  return (
    <>
      {isSigningIn && <Navigate to="/" />}
      <section className="section is-relative is-clipped">
        <div
          className="is-hidden-touch has-background-primary"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "70%",
            height: "100%",
          }}
        ></div>
        <div
          className="is-hidden-desktop has-background-primary is-fullwidth"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div className="container mx-auto is-relative">
          <div className="is-centered columns is-multiline">
            <div className="column is-6 is-5-desktop mb-5">
              <div>
                <h2 className="has-text-white mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">
                  Lorem ipsum dolor sit amet consectutar domor at elis
                </h2>
                <p className="has-text-white mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                  aliquet orci.
                </p>
              </div>
              <div>
                <h2 className="has-text-white mb-4 is-size-1 is-size-3-mobile has-text-weight-bold"></h2>
                <p className="has-text-white mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                  aliquet orci.
                </p>
              </div>
            </div>
            <div className="column is-6 is-4-desktop mx-auto">
              <div className="box has-background-light has-text-centered">
                <form onSubmit={handleLogin}>
                  <h3 className="mb-5 is-size-4 has-text-weight-bold">
                    Welcome back!
                  </h3>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="E-mail address"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSigningIn}
                    className="button is-primary mb-4 is-fullwidth"
                  >
                    {isSigningIn ? "Signing In..." : "Sign in"}
                  </button>
                  {errorMessage && (
                    <p className="has-text-danger">{errorMessage}</p>
                  )}
                  <p className="has-text-grey-dark">
                    Don't have an account?{" "}
                    <a href="#" className="has-text-primary">
                      Sign up
                    </a>
                  </p>
                  <a className="mb-4 is-inline-block" href="#">
                    <small>Forgot password?</small>
                  </a>
                  <div className="separator"></div>
                  <button className="button is-fullwidth">
                    <p>
                      {isSigningIn ? "Signing In..." : "Continue with Google"}
                    </p>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
