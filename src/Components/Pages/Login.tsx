import { useState } from "react";
import { Avatar } from "@mui/material";
import google_Icon from "../../assets/Images/devicon_google.svg";

const Login = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex flex-col justify-between h-screen w-full  bg-custom-image bg-no-repeat bg-center bg-cover ">
      <div className="flex flex-col justify-center items-center flex-grow p-4 ">
        <h1 className="bg-gradient-to-r from-content-low to-content-high bg-clip-text text-transparent text-3xl md:text-5xl font-semibold text-center">
          Welcome to Aevum
        </h1>
        <p className="text-sm font-light text-white mt-3 leading-6 text-center opacity-65">
          Thank you for choosing Aevum, to start enjoying <br /> the benefits,
          let’s set up your account.
        </p>

        <div className="mt-6 w-full max-w-xs">
          <div className="relative">
            <input
              type="email"
              placeholder="account email"
              className="text-white w-full h-[50px] rounded-full px-6 py-[14px] bg-input-bg border border-input-border "
            />
            <button className="absolute w-[25px] right-[12px] top-0 bottom-0 ">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="24"
                  height="24"
                  rx="12"
                  stroke="white"
                  stroke-opacity="0.55"
                />
                <g clip-path="url(#clip0_1353_463)">
                  <path
                    d="M13.2967 15.9883L16.5 12.5L13.2967 9.01166C13.2677 8.9705 13.231 8.93656 13.1889 8.91213C13.1468 8.8877 13.1004 8.87335 13.0527 8.87006C13.005 8.86676 12.9573 8.8746 12.9127 8.89304C12.8681 8.91147 12.8276 8.94008 12.7941 8.97692C12.7606 9.01376 12.7347 9.05797 12.7184 9.10657C12.702 9.15516 12.6954 9.207 12.6992 9.25857C12.7029 9.31015 12.7168 9.36025 12.7399 9.4055C12.7631 9.45075 12.7949 9.49008 12.8333 9.52083L15.23 12.1389L8.85333 12.1389C8.76493 12.1389 8.68014 12.1769 8.61763 12.2446C8.55512 12.3124 8.52 12.4042 8.52 12.5C8.52 12.5958 8.55512 12.6876 8.61763 12.7553C8.68014 12.8231 8.76493 12.8611 8.85333 12.8611L15.23 12.8611L12.8333 15.4792C12.771 15.5472 12.7362 15.6392 12.7365 15.735C12.7368 15.8308 12.7722 15.9226 12.835 15.9901C12.8978 16.0577 12.9827 16.0954 13.0712 16.0951C13.1596 16.0947 13.2443 16.0563 13.3067 15.9883L13.2967 15.9883Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1353_463">
                    <rect
                      width="13"
                      height="12"
                      fill="white"
                      transform="translate(18.5 6) rotate(90)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          <div className="mt-6 flex justify-center items-center gap-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={handleChange}
              />
              <div
                className={`h-[20px] w-[20px] rounded-full border-2 transition ${
                  checked
                    ? "bg-checkbox-gradient border-none"
                    : "bg-transparent border-white-500"
                } flex items-center justify-center`}
              >
                <svg
                  className={`w-3 h-3 text-white transition-opacity duration-200 ${
                    checked ? "opacity-100" : "opacity-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19l-7-7 1.4-1.4L9 16.2l14.6-14.6L24 4l-15 15z" />
                </svg>
              </div>
            </label>

            <p className="text-white text-sm font-light leading-[16.94px] opacity-65">
              I agree to the{" "}
            </p>
            <span className="text-content-high text-sm">
              terms and conditions
            </span>
          </div>

          <div className="mt-6 flex justify-center items-center gap-2">
            <Avatar
              alt="google_Icon"
              src={google_Icon}
              sx={{ width: "20px", height: "auto" }}
            />
            <span className="text-white text-sm font-normal leading-[16.94px] hover:cursor-pointer">
              Signup with Google
            </span>
          </div>

          <p className="text-content-deam mt-6 text-sm font-normal leading-[16.94px] text-center">
            Login Instead?{" "}
            <a href="#" className="hover:cursor-pointer hover:text-white">
              Click here
            </a>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-1 bg-black pb-12 ">
        <p className="text-white opacity-40">
          By signing up, you agree to our{" "}
        </p>
        <span className="text-white"> Terms of Service</span>
      </div>
    </div>
  );
};

export default Login;
