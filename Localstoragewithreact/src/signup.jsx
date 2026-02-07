import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sign() {
  const [signfrm, setform] = useState({
    name: "",
    age: "",
    city: "",
  });

  const navigate = useNavigate();

  function inputdata(e) {
    const { name, value } = e.target;
    setform({ ...signfrm, [name]: value });
  }

  function Submit(e) {
    e.preventDefault(); 
    localStorage.setItem("userdata", JSON.stringify(signfrm)); 
    navigate("/Login");
  }

  return (
    <>
      <h1>Sign up page</h1>

      <form onSubmit={Submit}>
        <label>Name</label> <br />
        <input
          type="text"
          name="name"
          value={signfrm.name}
          onChange={inputdata}
        />
        <br />

        <label>Age</label> <br />
        <input
          type="text"
          name="age"
          value={signfrm.age}
          onChange={inputdata}
        />
        <br />

        <label>City</label> <br />
        <input
          type="text"
          name="city"
          value={signfrm.city}
          onChange={inputdata}
        />
        <br /><br />

        <input type="submit" />
      </form>
    </>
  );
}

export default Sign;
