import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

export default function UpdateProfile() {
  const { updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm;

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    updateUserProfile(name, photoURL)
      .then(() => {
        //profile updated!
        //...
      })
      .catch((error) => {
        //an error occured
        // ...
      });
  };
  return (
    <div className="flex items-center justify-center h-screen mb-2 text-black text-xl">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-200 text-black text-xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold">Update Your Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-black">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="...your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-black">
                Upload photo
              </span>
            </label>
            <input
              {...register("photoURL")}
              type="text"
              placeholder="photoURL"
              className="input input-bordered"
              required
            />

            {/* uploading image with backend */}
            {/* <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" /> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green text-white text-xl">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
