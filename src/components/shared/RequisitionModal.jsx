import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const texasState = {
  Austin: [
    "Texas State Capitol",
    "Barton Springs Pool",
    "Sixth Street Historic District",
    "Lady Bird Lake",
    "Zilker Park",
    "Mount Bonnell",
  ],
  Houston: [
    "Space Center Houston",
    "The Museum of Fine Arts, Houston",
    "Buffalo Bayou Park",
    "The Menil Collection",
    "Discovery Green",
    "Houston Museum of Natural Science",
  ],
  "San Antonio": [
    "The Alamo",
    "River Walk",
    "San Antonio Missions National Historical Park",
    "Pearl District",
    "San Fernando Cathedral",
    "Japanese Tea Garden",
  ],
  Dallas: [
    "The Sixth Floor Museum at Dealey Plaza",
    "Dallas Museum of Art",
    "Reunion Tower",
    "Klyde Warren Park",
    "AT&T Stadium (Arlington, near Dallas)",
    "Perot Museum of Nature and Science",
  ],
};

const RequisitionModal = ({ bookId, isOpen, closeModal }) => {
  const { user } = useContext(AuthContext);
  const [city, setCity] = useState("");
  const [locations, setLocations] = useState([]);
  const [spot, setSpots] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleCity = (event) => {
    event.preventDefault();
    const singleCity = event.target.value;
    setCity(singleCity);

    if (singleCity === "austin") {
      setLocations(texasState.Austin);
    } else if (singleCity === "houston") {
      setLocations(texasState.Houston);
    } else if (singleCity === "sanAntonio") {
      setLocations(texasState["San Antonio"]);
    } else if (singleCity === "dalas") {
      setLocations(texasState.Dallas);
    } else {
      setLocations(["Please select city first"]);
    }
  };

  const handleLocation = (event) => {
    event.preventDefault();
    setSpots(event.target.value);
  };

  const handleRequisitionData = (event) => {
    event.preventDefault();
    console.log("raju", user.email);
    const userEmail = user?.email;
    const bookInfo = { userEmail, bookId, city, spot };
    console.log("hashi", bookInfo);
    closeModal();
  };

  return (
    <div className="z-10 flex justify-center items-center bg-slate-500 bg-opacity-50 fixed w-screen h-screen top-0 left-0 ">
      <div className="bg-white w-6/12 min-w-72 h-56 p-10 rounded-md">
        <form onSubmit={handleRequisitionData} action="">
          <div className="flex justify-around">
            {/* State block */}
            <div className="w-1/4 ">
              <label htmlFor="" className="pl-3">
                State
              </label>
              <select className="px-3 py-2 w-full mt-1 outline-none text-black border">
                <option value="texas">Texas</option>
              </select>
            </div>
            {/* City Block */}
            <div className="w-1/4 ">
              <label htmlFor="" className="pl-3">
                City
              </label>
              <select
                className="px-3 py-2 w-full mt-1 outline-none text-black border"
                onChange={handleCity}
              >
                <option value="none">Select City</option>
                <option value="austin">Austin</option>
                <option value="houston">Houston</option>
                <option value="sanAntonio">San Antonio</option>
                <option value="dallas">Dallas</option>
              </select>
            </div>
            {/* Location block */}
            <div className="w-1/4 ">
              <label htmlFor="" className="pl-3">
                Location
              </label>
              <select
                onChange={handleLocation}
                className="px-3 py-2 w-full mt-1 outline-none text-black border"
              >
                <option value="none">Select Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-fit mx-auto mt-8">
            <button className="bg-[#F55653] px-8 py-2 rounded-md" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequisitionModal;
