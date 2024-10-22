import Input from "./Input";
import { useState } from "react";

const Form = () => {
  const [signedIn, setSignedIn] = useState(true);
  const [data, setData] = useState({
    ...(signedIn ? {} : { Email: "" }),
    Ctzno: "",
    Password: "",
  }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  console.log("data>>:", data);

  return (
    <>
      <div className="bg-white w-[400px] h-[550px] shadow-lg rounded-lg flex flex-col items-center justify-center">
        <div className="text-4xl font-extrabold">
          Welcome {signedIn ? "Back" : ""}
        </div>

        <div className="text-xl font-light mt-10 mb-6">
          {signedIn ? "log in to explore" : "sign up to get started"}
        </div>

        <form onSubmit={handleSubmit}>
          {!signedIn && (
            <Input
              label="Email Address"
              name="Email"
              type="email"
              placeholder="Enter the email address"
              className="mb-4"
              value={data.Email}
              onChange={(e) =>
                setData({ ...data, Email: e.target.value })
              }
              required
            />
          )}

          <Input
            label="Citizenship number"
            name="Ctzno"
            type="text"
            placeholder="Enter Citizenship no."
            className="mb-4"
            value={data.Ctzno}
            onChange={(e) =>
              setData({ ...data, Ctzno: e.target.value })
            }
            required
          />

          <Input
            label="Password"
            name="Password"
            type="text"
            placeholder="Enter Password"
            className="mb-4"
            value={data.Password}
            onChange={(e) =>
              setData({ ...data, Password: e.target.value })
            }
            required
          />

          <div className="flex items-center justify-center flex-col">
    
          <button
            className="bg-blue-800 text-white w-[100px] p-2.5 rounded-lg 
            hover:bg-blue-500 focus:outline-none focus:ring-blue-300 font-medium text-sm"
            type="submit"
          >
            {signedIn ? "log in" : "sign up"}
          </button>
          <div>
            {signedIn ? "Don't have an account?" : "Already have an account?"}
            <span
              className="mx-2 my-2 text-blue-400 cursor-pointer underline"
              onClick={() => setSignedIn(!signedIn)}
            >
              {signedIn ? "sign up" : "sign in"}
            </span>
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
