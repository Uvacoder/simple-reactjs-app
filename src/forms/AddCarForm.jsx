import React, { useState, useEffect } from "react";

const AddCarForm = (props) => {

  useEffect(() => {
    setCar(initCar);
  }, [props]);

  const initCar = { id: null, make: "", model: "" };

  const [car, setCar] = useState(initCar);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (car.make && car.model) {
      handleChange(e, props.addCar(car));
      document.getElementById("error-message").style.display = "none";
    }
    if (car.make == "" || car.model == "") {
      document.getElementById("error-message").innerHTML = "All fields are required.";
    }
  };

  return (
    <form>
      <label>Make</label>
      <input
        className="u-full-width"
        type="text"
        value={car.make}
        name="make"
        onChange={handleChange}
      />
      <label>Model</label>
      <input
        className="u-full-width"
        type="text"
        value={car.model}
        name="model"
        onChange={handleChange}
      />
      <div style={{ color: "red" }} id="error-message"></div>
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Add car
      </button>
    </form>
  );
};

export default AddCarForm;
