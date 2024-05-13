import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext, useState } from "react";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errormsg, setErrorMsg] = useState("");

  const { createUser, login } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        alert("Account Created Successfully");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <div className="max-w-md w-full mx-auto shadow p-6 rounded-lg bg-white relative">
        <div className="modal-action mt-0 flex flex-col justify-center">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="font-bold text-lg text-black">Create An Account</h3>
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
            {/* passowrd input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-gray-50 text-black"
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
            {/* SignUp button */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="SignUp"
                className="btn bg-green border-transparent text-xl hover:bg-slate-500 font-semibold text-white"
              />
            </div>
            <p className="text-center my-2 text-black text-xl">
              Already Have An Account?{" "}
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="text-red underline ml-1 text-xl"
              >
                Login
              </button>
            </p>
          </form>

          <Link
            to="/"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 text-black text-xl"
          >
            ✕
          </Link>

          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle btn-outline border-transparent bg-slate-400 text-black hover:bg-green hover:text-white">
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
        <Modal />
      </div>
    </div>
  );
}
