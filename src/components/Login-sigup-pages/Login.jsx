import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handle submit on click button
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  // handle change on input field
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div
        className="w-screen h-screen bg-zinc-900 flex items-center px-4"
        style={{
          backgroundImage: 'URL("../../public/img/symbol-scatter-haikei.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="shadow rounded shadow-white p-4 w-96 m-auto text-center bg-slate-50">
          <h1 className="text-3xl my-4 font-bold">
            Login <span style={{ color: "#F1A661" }}>Now</span>
          </h1>
          <p className="my-3">
            Hey, Enter Your Details to Get Sign in to Your Account{" "}
          </p>
          <button className="w-full  rounded-lg shadow-lg  bg-zinc-900 my-3 text-white p-2 hover:bg-zinc-950 transition flex items-center gap-2 justify-center ">
            {" "}
            <FcGoogle /> Sign In with Google
          </button>
          <button className="w-full  rounded-lg shadow-lg  bg-blue-900 my-3 text-white p-2 hover:bg-blue-950 transition flex items-center gap-2 justify-center ">
            {" "}
            <FaFacebook /> Sign In with Facebook
          </button>
          <h2 className="text-xl my3">---- Or ----</h2>
          <form action="#" onSubmit={handleSubmit}>
            <label
              className="flex flex-col my-5 gap-1  items-start"
              htmlFor="email"
            >
              Email
              <input
                id="email"
                className="p-2 border w-full outline-none rounded-lg active:border"
                style={{ borderColor: "#F1A661" }}
                type="email"
                name="email"
                placeholder="Enter Your Email Here"
                onChange={handleChange}
                value={formData.email}
              />
            </label>
            <label
              className="flex flex-col my-5 gap-1  items-start"
              htmlFor="password"
            >
              Password
              <input
                id="password"
                className="p-2 border w-full outline-none rounded-lg"
                style={{ borderColor: "#F1A661" }}
                type="password"
                name="password"
                placeholder="Enter Your Password Here"
                onChange={handleChange}
                value={formData.password}
              />
            </label>
            <button className="w-full bg-[#F1A661] font-bold rounded-lg shadow-lg  my-3 text-black p-2  transition hover:bg-[#E99141]  ">
              {" "}
              Sign In
            </button>
          </form>
          <p>
            Not A Member ?
            <Link
              className="text-[#F1A661] mx-2 underline hover:text-[#E99141]"
              to="/register"
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
