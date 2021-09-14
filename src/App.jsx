import { useState } from "react";

export const App = () => {
  // All varibles
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();
  const [userPass, setUserPass] = useState();

  // All onChange event function
  const userNameEvent = (event) => setName(event.target.value);
  const userPassEvent = (event) => setPass(event.target.value);

  // Submit form function
  const onSubmit = (e) => {
    e.preventDefault();

    setUserName(name);
    setName("");
    setUserPass(pass);
    setPass("");
  };

  return (
    <>
      <div className="main_div">
        <h1 className="heading">
          Hello {userName} {userPass}
        </h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter You Name"
            onChange={userNameEvent}
            value={name}
          />
          <input
            type="password"
            placeholder="Enter You Password"
            onChange={userPassEvent}
            value={pass}
          />
          <button type="submit" className="submitBtn">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};
 