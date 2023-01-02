import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import states_sample from "./states.json";
import "./App.css";
import axios from "axios";

// reusualble checkbox
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
  //const for the inotial map location
  const center = [37.62514389160612, -99.67658554492868];

  // const for the value to search
  const [search, setSearch] = useState("");

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

  // my customed made API
  const myAPI = "http://localhost:8080/confidence?group_category=" + search;

  //const to hold the fetched json
  const [post, setPost] = useState(states_sample);

  // function fetch data using axios
  function axiosFetch() {
    axios.get(myAPI).then((response) => {
      setPost(response.data);
    });
  }

  // Fetch on search change
  useEffect(() => {
    if (search === "") {
      setPost(states_sample);
      return;
    }
    axiosFetch();
  }, [search]);

  // Age checkbox states
  const [checkedAge_1, setCheckedAge_1] = useState(false);
  const [checkedAge_2, setCheckedAge_2] = useState(false);
  const [checkedAge_3, setCheckedAge_3] = useState(false);
  const [checkedAge_4, setCheckedAge_4] = useState(false);
  const [checkedAge_5, setCheckedAge_5] = useState(false);

  // Race / Ethnicity checkbox states
  const [checkedRace_1, setCheckedRace_1] = useState(false);
  const [checkedRace_2, setCheckedRace_2] = useState(false);
  const [checkedRace_3, setCheckedRace_3] = useState(false);
  const [checkedRace_4, setCheckedRace_4] = useState(false);
  const [checkedRace_5, setCheckedRace_5] = useState(false);
  const [checkedRace_6, setCheckedRace_6] = useState(false);

  // Handle Checkbox
  const valueMap = {
    "5 – 11 years": [checkedAge_1, setCheckedAge_1],
    "12 – 17 years": [checkedAge_2, setCheckedAge_2],
    "18 – 49 years": [checkedAge_3, setCheckedAge_3],
    "50 – 64 years": [checkedAge_4, setCheckedAge_4],
    "65+ years": [checkedAge_5, setCheckedAge_5],
    "American Indian or Alaska Native": [checkedRace_1, setCheckedRace_1],
    Asian: [checkedRace_2, setCheckedRace_2],
    Black: [checkedRace_3, setCheckedRace_3],
    "non-Hispanic": [checkedRace_4, setCheckedRace_4],
    "Native Hawaiian or Other Pacific Islander": [
      checkedRace_5,
      setCheckedRace_5,
    ],
    White: [checkedRace_6, setCheckedRace_6],
  };

  const handleCheckboxChange = (event, value) => {
    const [state, setState] = valueMap[value];
    setState(event.target.checked);
    if (event.target.checked === true) {
      addToSearch(value);
    } else {
      removeFromSearch(value);
    }
  };

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
                label="5 – 11 years"
                value={checkedAge_1}
                onChange={(event) =>
                  handleCheckboxChange(event, "5 – 11 years")
                }
              />
              <Checkbox
                label="12 – 17 years"
                value={checkedAge_2}
                onChange={(event) =>
                  handleCheckboxChange(event, "12 – 17 years")
                }
              />
              <Checkbox
                label="18 – 49 years"
                value={checkedAge_3}
                onChange={(event) =>
                  handleCheckboxChange(event, "18 – 49 years")
                }
              />
              <Checkbox
                label="50 – 64 years"
                value={checkedAge_4}
                onChange={(event) =>
                  handleCheckboxChange(event, "50 – 64 years")
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
              <Checkbox
                label="American Indian or Alaska Native"
                value={checkedRace_1}
                onChange={(event) =>
                  handleCheckboxChange(
                    event,
                    "American Indian or Alaska Native"
                  )
                }
              />
              <Checkbox
                label="Asian"
                value={checkedRace_2}
                onChange={(event) => handleCheckboxChange(event, "Asian")}
              />
              <Checkbox
                label="Black or African American"
                value={checkedRace_3}
                onChange={(event) => handleCheckboxChange(event, "Black")}
              />
              <Checkbox
                label="Hispanic or Latino"
                value={checkedRace_4}
                onChange={(event) =>
                  handleCheckboxChange(event, "non-Hispanic")
                }
              />
              <Checkbox
                label="Native Hawaiian or Other Pacific Islander"
                value={checkedRace_5}
                onChange={(event) =>
                  handleCheckboxChange(
                    event,
                    "Native Hawaiian or Other Pacific Islander"
                  )
                }
              />
              <Checkbox
                label="White"
                value={checkedRace_6}
                onChange={(event) => handleCheckboxChange(event, "White")}
              />
            </div>
          </div>
          <div className="mx-5">
            {/* Map */}
            <MapContainer
              center={center}
              zoom={4}
              style={{ width: "60vw", height: "60vh" }}
            >
              <TileLayer
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=sqGeUrL2NlkpSG0j8Zu6"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              />

              {/* loop through the output of the fetch */}
              {post?.data.map((state) => {
                // Store coordinates
                const key = state.id;
                const coordinates = state.geometry.coordinates[0].map(
                  (item) => [item[1], item[0]]
                );
                // Store estimate %
                const estimate = state.properties.avg_estimate;

                // Convert num-to-color
                function percentageToHslColor(percentage) {
                  const color = `hsl(${2 * percentage}, 100%, 45%)`;
                  return color;
                }

                return (
                  <Polygon
                    key={key}
                    pathOptions={{
                      fillColor: percentageToHslColor(estimate),
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
                          fillColor: percentageToHslColor(estimate),
                        });
                      },
                      click: (e) => {},
                    }}
                  />
                );
              })}
            </MapContainer>

            {/* Legend of the Map */}
            <div className="justify-center flex">
              <span className="mr-1 border text-sm bg-[#FF0000] w-10 h-2"></span>
              <h2 className="mr-1 text-sm"> 0</h2>

              <span className="mr-1 border text-sm bg-[#FF5E00] w-10 h-2"></span>
              <h2 className="mr-1 text-sm"> 10</h2>

              <span className="mr-1 border text-sm bg-[#FFBB00] w-10 h-2"></span>
              <h2 className="mr-1 text-sm"> 20</h2>

              <span className="mr-1 border text-sm bg-[#E6FF00] w-10 h-2"></span>
              <span className="mr-1 text-sm"> 30</span>

              <span className="mr-1 border text-sm bg-[#88FF00] w-10 h-2"></span>
              <h2 className="mr-1 text-sm"> 40</h2>
              <span className="mr-1 border text-sm bg-[#2AFF00] w-10 h-2"></span>
              <h2 className="mr-1 text-sm"> 50</h2>

              <span className="mr-1 border text-sm bg-[#00FF33] w-10 h-2"></span>
              <h2 className="mr-1 text-sm"> 60</h2>

              <span className="mr-1 border text-sm bg-[#00FF90] w-10 h-2"></span>
              <h2 className="mr-1 text-sm"> 70</h2>

              <span className="mr-1 border text-sm bg-[#00FFEE] w-10 h-2"></span>
              <h2 className="mr-1 text-sm"> 80</h2>

              <span className="mr-1 border text-sm bg-[#00B2FF] w-10 h-2"></span>
              <span className="mr-1 text-sm"> 90</span>

              <span className="mr-1 border text-sm bg-[#004CFF] w-10 h-2"></span>
              <h2 className="mr-1 text-sm"> 100</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
