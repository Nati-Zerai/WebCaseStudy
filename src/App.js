import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import states_sample from "./states.json";
import "./App.css";

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
  //// Age
  const [checkedAge_1, setCheckedAge_1] = useState(false);
  const [checkedAge_2, setCheckedAge_2] = useState(false);
  const [checkedAge_3, setCheckedAge_3] = useState(false);
  const [checkedAge_4, setCheckedAge_4] = useState(false);
  const [checkedAge_5, setCheckedAge_5] = useState(false);
  //// Race / ethnicity
  const [checkedRace_1, setCheckedRace_1] = useState(false);
  const [checkedRace_2, setCheckedRace_2] = useState(false);
  const [checkedRace_3, setCheckedRace_3] = useState(false);
  const [checkedRace_4, setCheckedRace_4] = useState(false);
  const [checkedRace_5, setCheckedRace_5] = useState(false);
  const [checkedRace_6, setCheckedRace_6] = useState(false);

  //// handle Age
  const handleChangeAge_1 = () => {
    setCheckedAge_1(!checkedAge_1);
  };
  const handleChangeAge_2 = () => {
    setCheckedAge_2(!checkedAge_2);
  };
  const handleChangeAge_3 = () => {
    setCheckedAge_3(!checkedAge_3);
  };
  const handleChangeAge_4 = () => {
    setCheckedAge_4(!checkedAge_4);
  };
  const handleChangeAge_5 = () => {
    setCheckedAge_5(!checkedAge_5);
  };
  //// Handle Race / ethnicity
  const handleChangeRace_1 = () => {
    setCheckedRace_1(!checkedRace_1);
  };
  const handleChangeRace_2 = () => {
    setCheckedRace_2(!checkedRace_2);
  };
  const handleChangeRace_3 = () => {
    setCheckedRace_3(!checkedRace_3);
  };
  const handleChangeRace_4 = () => {
    setCheckedRace_4(!checkedRace_4);
  };
  const handleChangeRace_5 = () => {
    setCheckedRace_5(!checkedRace_5);
  };
  const handleChangeRace_6 = () => {
    setCheckedRace_6(!checkedRace_6);
  };

  return (
    <div>
      <div class="text-center m-8">
        <h1 class="items-center text-3xl font-bold text-red-500 ">
          Web Application Case Study
        </h1>
        <h2 class="items-center text-2xl font-bold ">Interactive Map</h2>
        <p></p>
      </div>
      <div>
        <div class="justify-center flex flex-row">
          <div>
            <div
              class="px-5 py-3
             border mb-1 rounded-md bg-slate-100"
            >
              <p class="font-bold"> Age </p>
              <Checkbox
                label=" 5 - 11"
                value={checkedAge_1}
                onChange={handleChangeAge_1}
              />
              <Checkbox
                label=" 12 - 17"
                value={checkedAge_2}
                onChange={handleChangeAge_2}
              />
              <Checkbox
                label=" 18 - 49"
                value={checkedAge_3}
                onChange={handleChangeAge_3}
              />
              <Checkbox
                label=" 50 - 64"
                value={checkedAge_4}
                onChange={handleChangeAge_4}
              />
              <Checkbox
                label=" 65+"
                value={checkedAge_5}
                onChange={handleChangeAge_5}
              />
            </div>
            <div class="p-5 mb-1 border rounded-md bg-slate-100">
              <p class="font-bold"> Race/Ethnicity </p>
              <Checkbox
                label=" American Indian or Alaska Native"
                value={checkedRace_1}
                onChange={handleChangeRace_1}
              />
              <Checkbox
                label=" Asian"
                value={checkedRace_2}
                onChange={handleChangeRace_2}
              />
              <Checkbox
                label=" Black or African American"
                value={checkedRace_3}
                onChange={handleChangeRace_3}
              />
              <Checkbox
                label=" Hispanic or Latino"
                value={checkedRace_4}
                onChange={handleChangeRace_4}
              />
              <Checkbox
                label=" Native Hawaiian or Other Pacific Islander"
                value={checkedRace_5}
                onChange={handleChangeRace_5}
              />
              <Checkbox
                label=" White"
                value={checkedRace_6}
                onChange={handleChangeRace_6}
              />
            </div>
          </div>
          <div class="px-5 mx-5">
            <MapContainer
              center={center}
              zoom={4}
              style={{ width: "60vw", height: "60vh" }}
            >
              <TileLayer
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=sqGeUrL2NlkpSG0j8Zu6"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              />

              {states_sample.features.map((state) => {
                const coordinates = state.geometry.coordinates[0].map(
                  (item) => [item[1], item[0]]
                );
                const myEstimate = state.properties.avg_estimate;
                console.log("avg_estimate " + myEstimate + "\n");

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
                  const color = `hsl(${70 * (percentage / 100)}, 100%, 50%)`;
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
