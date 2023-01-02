import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import states_sample from "./states.json";
import "./App.css";
import axios from "axios";

const Checkbox = ({ label, value, onChange }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

function App() {
  const center = [37.62514389160612, -99.67658554492868];

  // Search
  const [search, setSearch] = useState("");
  console.log("@@@@ Search is : " + search);
  // Add to Search
  const addToSearch = (value) => {
    setSearch((prevSearch) => {
      if (prevSearch === "") {
        return value;
      }
      return `${prevSearch}, ${value}`;
    });
  };
  // Remove from Search
  const removeFromSearch = (value) => {
    setSearch((prevSearch) => {
      let newSearch = prevSearch;
      // search for ", value" and remove it
      while (newSearch.indexOf(`, ${value}`) !== -1) {
        const index = newSearch.indexOf(`, ${value}`);
        newSearch = `${newSearch.substring(0, index)}${newSearch.substring(
          index + value.length + 2
        )}`;
      }
      // search for "value," and remove it
      while (newSearch.indexOf(`${value},`) !== -1) {
        const index = newSearch.indexOf(`, ${value}`);
        newSearch = `${newSearch.substring(0, index)}${newSearch.substring(
          index + value.length + 3
        )}`;
      }
      // search for value and remove it
      while (newSearch.indexOf(value) !== -1) {
        const index = newSearch.indexOf(value);
        newSearch = `${newSearch.substring(0, index)}${newSearch.substring(
          index + value.length
        )}`;
      }
      return newSearch;
    });
  };

  // Get API

  const myAPI =
    "https://natnael-nodejs.herokuapp.com/confidence?geography_category=" +
    search;
  console.log("myAPI:::: " + myAPI + "  --  " + typeof myAPI);
  const [post, setPost] = useState(states_sample);

  // function fetch data using axios
  function axiosFetch() {
    axios.get(myAPI).then((response) => {
      setPost(response.data);
      console.log("hiii: ");
      console.log("post_inside: " + JSON.stringify(response.data));
    });
  }

  useEffect(() => {
    // axiosFetch();
  }, []);
  console.log("byee: ");
  console.log("post_outside: " + post);

  //// Age
  const [checkedAge_1, setCheckedAge_1] = useState(false);
  const [checkedAge_2, setCheckedAge_2] = useState(false);
  const [checkedAge_3, setCheckedAge_3] = useState(false);
  const [checkedAge_4, setCheckedAge_4] = useState(false);
  const [checkedAge_5, setCheckedAge_5] = useState(false);
  //// Race / Ethnicity
  const [checkedRace_1, setCheckedRace_1] = useState(false);
  const [checkedRace_2, setCheckedRace_2] = useState(false);
  const [checkedRace_3, setCheckedRace_3] = useState(false);
  const [checkedRace_4, setCheckedRace_4] = useState(false);
  const [checkedRace_5, setCheckedRace_5] = useState(false);
  const [checkedRace_6, setCheckedRace_6] = useState(false);

  //// Handle Checkbox
  const valueMap = {
    "5 - 11 years": [checkedAge_1, setCheckedAge_1],
    "12 - 17 years": [checkedAge_2, setCheckedAge_2],
    "18 - 49 years": [checkedAge_3, setCheckedAge_3],
    "50 - 64 years": [checkedAge_4, setCheckedAge_4],
    "65+ years": [checkedAge_5, setCheckedAge_5],
  };

  const handleCheckboxChange = (event, value) => {
    const [state, setState] = valueMap[value];
    setState(event.target.checked);
    console.log("XXXX event.target", event.target.checked);
    if (event.target.checked == true) {
      addToSearch(value);
      axiosFetch();
    } else {
      removeFromSearch(value);
      axiosFetch();
    }
  };
  console.log("&&&&&&&&&checkedAge_1  " + checkedAge_1);
  return (
    <div>
      <div className="text-center m-8">
        <h1 className="items-center text-3xl font-bold text-red-500 ">
          Web Application Case Study
        </h1>
        <h2 className="items-center text-2xl font-bold ">Interactive Map</h2>
        <p></p>
      </div>
      <div>
        <div className="justify-center flex flex-row">
          <div>
            <div
              className="px-5 py-3
             border mb-1 rounded-md bg-slate-100"
            >
              <p className="font-bold"> Age </p>
              <Checkbox
                label="5 - 11 years"
                value={checkedAge_1}
                onChange={(event) =>
                  handleCheckboxChange(event, "5 - 11 years")
                }
              />
              <Checkbox
                label="12 - 17 years"
                value={checkedAge_2}
                onChange={(event) =>
                  handleCheckboxChange(event, "12 - 17 years")
                }
              />
              <Checkbox
                label="18 - 49 years"
                value={checkedAge_3}
                onChange={(event) =>
                  handleCheckboxChange(event, "18 - 49 years")
                }
              />
              <Checkbox
                label="50 - 64 years"
                value={checkedAge_4}
                onChange={(event) =>
                  handleCheckboxChange(event, "50 - 64 years")
                }
              />
              <Checkbox
                label="65+ years"
                value={checkedAge_5}
                onChange={(event) => handleCheckboxChange(event, "65+ years")}
              />
            </div>
            <div className="p-5 mb-1 border rounded-md bg-slate-100">
              <p className="font-bold"> Race/Ethnicity </p>
            </div>
          </div>
          <div className="px-5 mx-5">
            <MapContainer
              center={center}
              zoom={4}
              style={{ width: "60vw", height: "60vh" }}
            >
              <TileLayer
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=sqGeUrL2NlkpSG0j8Zu6"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              />

              {console.log("-------post: " + post)}
              {post?.data.map((state) => {
                const coordinates = state.geometry.coordinates[0].map(
                  (item) => [item[1], item[0]]
                );
                const myEstimate = state.properties.avg_estimate;
                {
                  /* console.log("avg_estimate " + myEstimate + "\n"); */
                }

                {
                  /* 
                  Converter num-to-color Algorithm 1
                  console.log(
                  "calc " +
                    "#" +
                    Math.round(myEstimate).toString(16).padStart(6, "0")
                ); */
                }

                //// Converter num-to-color Algorithm 2
                function percentageToHslColor(percentage) {
                  const color = `hsl(${30 * (percentage / 100)}, 100%, 50%)`;
                  return color;
                }

                return (
                  <>
                    <Polygon
                      pathOptions={{
                        fillColor: percentageToHslColor(myEstimate),
                        fillOpacity: 0.7,
                        weight: 2,
                        opacity: 1,
                        dashArray: 3,
                        color: "white",
                      }}
                      positions={coordinates}
                      eventHandlers={{
                        mouseover: (e) => {
                          const layer = e.target;
                          layer.setStyle({
                            dashArray: "",
                            fillColor: "#00000",
                            fillOpacity: 0.7,
                            weight: 2,
                            opacity: 1,
                            color: "white",
                          });
                        },
                        mouseout: (e) => {
                          const layer = e.target;
                          layer.setStyle({
                            fillOpacity: 0.7,
                            weight: 2,
                            dashArray: "3",
                            color: "white",
                            fillColor: percentageToHslColor(myEstimate),
                          });
                        },
                        click: (e) => {},
                      }}
                    />
                  </>
                );
              })}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
