import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="max-w-md bg-slate-50 h-screen shadow w-full mx-auto flex items-center justify-center my-20">
      {" "}
      <div className="modal-action mt-0 flex flex-col justify-center ">
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
              className="input input-bordered bg-gray-50"
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
              className="input input-bordered bg-gray-50"
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

          {/* SignUp button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="SignUp"
              className="btn bg-green border-transparent text-xl hover:bg-slate-500 font-semibold text-white"
            />
          </div>
          <p className=" text-center my-2 text-black text-xl">
            Already Have An Account?{" "}
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="text-red underline ml-1 text-xl"
            >
              Login
            </button>
          </p>
        </form>

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
  );
}
