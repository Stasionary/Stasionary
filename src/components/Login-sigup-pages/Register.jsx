import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber:""
  });

//   const [error , setError] = useState("");

//   const{createUser} = UserAuth()

  // handle submit on click button
 async function handleSubmit(event) {
    event.preventDefault();
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
        className="w-full h-full bg-zinc-900 flex items-center justify-center p-5 "
        style={{
          backgroundImage: 'URL("../../public/img/symbol-scatter-haikei.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="shadow rounded shadow-white p-4   text-center bg-slate-50 flex  flex-col" style={{width:"600px"}}>
          <div className="welcom">
            <h1 className="text-3xl my-4 font-bold">
              Sign Up <span style={{ color: "#F1A661" }}>Now</span>
            </h1>
            <p className="my-3">
              Hey, Enter Your Details to Get Sign Up to Our Family
            </p>
          </div>

          <div className="register-info flex items-center justify-evenly ">
            <form action="#" onSubmit={handleSubmit}>
              <label
                className="flex flex-col my-5 gap-1  items-start"
                htmlFor="fullName"
              >
                Full Name
                <input
                  id="fullName"
                  className="p-2 border w-full outline-none rounded-lg active:border"
                  style={{ borderColor: "#F1A661" }}
                  type="text"
                  name="fullName"
                  placeholder="Enter Your Full Name Here"
                  onChange={handleChange}
                  value={formData.fullName}
                />
              </label>
              <label
                className="flex flex-col my-3 gap-1  items-start"
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
                className="flex flex-col my-3 gap-1  items-start"
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
              <label
                className="flex flex-col my-3 gap-1  items-start"
                htmlFor="confirmPassword"
              >
                Confirm Password
                <input
                  id="confirmPassword"
                  className="p-2 border w-full outline-none rounded-lg"
                  style={{ borderColor: "#F1A661" }}
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Your Password Again Here"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                />
              </label>
              <label
                className="flex flex-col my-3 gap-1  items-start"
                htmlFor="phoneNumber"
              >
                Confirm Password
                <input
                  id="phoneNumber"
                  className="p-2 border w-full outline-none rounded-lg"
                  style={{ borderColor: "#F1A661" }}
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter Your Phone Number Here"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                />
              </label>
              <button className="w-full bg-[#F1A661] font-bold rounded-lg shadow-lg  my-3 text-black p-2  transition hover:bg-[#E99141]  ">
                {" "}
                Sign Up
              </button>
              <p>
                Already Have An Account ?
                <Link
                  className="text-[#F1A661] mx-2 underline hover:text-[#E99141]"
                  to="/login"
                >
                  Sign In
                </Link>
              </p>
            </form>
            <div style={{ height:"400px" , border:"0.4px solid #F1A661"}}></div>
            <div className="social flex flex-col self-start my-9">
            <button className="w-full  rounded-lg shadow-lg  bg-zinc-900 my-3 text-white p-2 hover:bg-zinc-950 transition flex items-center gap-2 justify-center ">
              {" "}
              <FcGoogle /> Sign Up with Google
            </button>
            <button className="w-full  rounded-lg shadow-lg  bg-blue-900 my-3 text-white p-2 hover:bg-blue-950 transition flex items-center gap-2 justify-center ">
              {" "}
              <FaFacebook /> Sign Up with Facebook
            </button>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
