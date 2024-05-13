import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useState } from "react";

export default function Modal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errormsg, setErrorMsg] = useState("");

  const { signUpWithGmail, login } = useContext(AuthContext);

  // redirecting to pathname or homepage after login
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  //on form submission
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    //console.log({ email: email, password: password });
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("LogIn Successful");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errormsg = error.message;
        setErrorMsg("Provide a  correct email & password");
      });
  };

  //login using Gmail
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        alert("Login Successsful");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {" "}
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box bg-gray-300">
          <div className="modal-action mt-0 flex flex-col justify-center ">
            <form
              className="card-body"
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="font-bold text-lg text-black">Please Login</h3>
              {/* email input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered bg-gray-50 text-black text-xl"
                  required
                  {...register("email")}
                />
              </div>
              {/* passw0rd input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered bg-gray-50 text-black text-xl"
                  required
                  {...register("password")}
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-xl text-black"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* error text */}
              {errormsg ? (
                <p className="text-red text-1xl mt-2">{errormsg}</p>
              ) : (
                ""
              )}
              {/* login button */}
              <div className="form-control mt-4">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-green border-transparent text-xl hover:bg-slate-500 font-semibold text-white"
                />
              </div>
              <p className=" text-center my-2 text-black text-xl">
                Do Not Have An Account?{" "}
                <Link className="text-red underline ml-1 text-xl" to="/signup">
                  SignUp Now
                </Link>
              </p>
              <button
                htmlFor="my_modal_5"
                onClick={() => document.getElementById("my_modal_5").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black text-xl"
              >
                ✕
              </button>
            </form>

            <div className="text-center space-x-3 mb-5">
              <button
                onClick={handleLogin}
                className="btn btn-circle btn-outline border-transparent bg-slate-400 text-black hover:bg-green hover:text-white"
              >
                {" "}
                <FaGoogle />
              </button>
              <button className="btn btn-circle btn-outline border-transparent bg-slate-400 text-black hover:bg-green hover:text-white">
                {" "}
                <FaFacebookF />
              </button>
              <button className="btn btn-circle btn-outline border-transparent bg-slate-400 text-black hover:bg-green hover:text-white">
                {" "}
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
