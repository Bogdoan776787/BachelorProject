import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [loadImage, setLoadImage] = useState(false);
  const [imageView, setImageView] = useState(null);

  const imageValidation = (e) => {
    const image = e.target.files[0];
    console.log(image);
    if (image.size >= 1048576) {
      return alert("Please choose the file less than 1mb");
    } else {
      setUserImage(image);
      setImageView(URL.createObjectURL(image));
    }
  };
  const loadingImage = async () => {
    const data = new FormData();
    data.append("image", userImage);
    data.append("upload_preset", "i5gzjiks");
    try {
      setLoadImage(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/djwacmcrq/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setLoadImage(false);
      return urlData.url;
    } catch (err) {
      setLoadImage(false);
      console.error("error", err);
    }
  };
  const registerhandler = async (e) => {
    e.preventDefault();
    if (!userImage) return alert("You have forgot to load the image");
    const url = await loadingImage(userImage);
    console.log(url);
  };
  return (
    <>
      <div className=" opacity-80 h-[150vh] pb-[10rem]  bg-cover bg-center bg-fixed bg-[url('https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] ">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
          <div className="w-full max-w-md space-y-6 bg-white px-10 py-10 rounded-xl ">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign up to your new account
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              onSubmit={registerhandler}
            >
              <div className="flex justify-center items-center flex-col text-center ">
                <div>
                  <img
                    className="mx-auto h-20 w-20  rounded-full "
                    src={
                      imageView ||
                      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    alt="userPhoto"
                  />

                  <label htmlFor="image-load" className="cursor-pointer">
                    Add your photo
                  </label>

                  <input
                    type="file"
                    id="image-load"
                    hidden
                    accept="image/png, image/jpeg"
                    onChange={imageValidation}
                  />
                </div>
              </div>

              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    value={userName}
                    id="user-name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Name"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="mt-8 space-y-6">
                  <label htmlFor="email" className="sr-only">
                    Email-address
                  </label>
                  <input
                    value={userEmail}
                    id="user-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
                <div className="mt-8 space-y-6">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    value={userPassword}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent h-10 bg-gradient-to-r from-purple-700 to-pink-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  {loadImage ? "Signing you up..." : "Sign up"}
                </button>
                <div className="flex justify-center mt-2">
                  If you have an acount
                </div>
                <Link to="/signin">
                  <button
                    type="submit"
                    className=" mt-4 group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                    Sign in
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
