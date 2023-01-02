/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

//   const valueMap = {
//     "5 - 11": [checkedAge_1, setCheckedAge_1],
//     "12 - 17": [checkedAge_2, setCheckedAge_2],
//     "18 - 49": [checkedAge_3, setCheckedAge_3],
//     "50 - 64": [checkedAge_4, setCheckedAge_4],
//     "65+": [checkedAge_5, setCheckedAge_5],
//     "American Indian or Alaska Native": [checkedRace_1, setCheckedRace_1],
//     Asian: [checkedRace_2, setCheckedRace_2],
//     "Black or African American": [checkedRace_3, setCheckedRace_3],
//     "Hispanic or Latino": [checkedRace_4, setCheckedRace_4],
//     "Native Hawaiian or Other Pacific Islander": [
//       checkedRace_5,
//       setCheckedRace_5,
//     ],
//     White: [checkedRace_6, setCheckedRace_6],
//   };

// const [search, setSearch] = useState("18 - 49 years, Black, 18 - 49 years, non-Hispanic");
// const given_value = "18 - 49 years";

// Write a function that first searches for ( ", " + given_value ) and removes it.
// Then searches again for given_value and removes it.
//                 <Checkbox
//                 value="5 - 11"
//                 onChange={(event) => handleCheckboxChange(event, "5 - 11")}
//               />
//               <Checkbox
//                 value="12 - 17"
//                 onChange={(event) => handleCheckboxChange(event, "12 - 17")}
//               />
//               <Checkbox
//                 value="18 - 49"
//                 onChange={(event) => handleCheckboxChange(event, "18 - 49")}
//               />
//               <Checkbox
//                 value="50 - 64"
//                 onChange={(event) => handleCheckboxChange(event, "50 - 64")}
//               />
//               <Checkbox
//                 value="65+"
//                 onChange={(event) => handleCheckboxChange(event, "65+")}
//               />

//               <Checkbox
//                 value="American Indian or Alaska Native"
//                 onChange={(event) =>
//                   handleCheckboxChange(
//                     event,
//                     "American Indian or Alaska Native"
//                   )
//                 }
//               />
//               <Checkbox
//                 value="Asian"
//                 onChange={(event) => handleCheckboxChange(event, "Asian")}
//               />
//               <Checkbox
//                 value="Black or African American"
//                 onChange={(event) =>
//                   handleCheckboxChange(event, "Black or African American")
//                 }
//               />
//               <Checkbox
//                 value="Hispanic or Latino"
//                 onChange={(event) =>
//                   handleCheckboxChange(event, "Hispanic or Latino")
//                 }
//               />
//               <Checkbox
//                 value="Native Hawaiian or Other Pacific Islander"
//                 onChange={(event) =>
//                   handleCheckboxChange(
//                     event,
//                     "Native Hawaiian or Other Pacific Islander"
//                   )
//                 }
//               />
//               <Checkbox
//                 value="White"
//                 onChange={(event) => handleCheckboxChange(event, "White")}
//               />
