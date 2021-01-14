import React from "react";
import "./styles.css";
import MyForm from "./MyForm";
export default function App() {
  const data = {
    facets: [
      {
        displayName: "Brand",
        values: [{ name: "Apple", value: "Google" }]
      },

      {
        displayName: "Department",
        values: [{ name: "Music", value: "Movies" }]
      }
    ]
  };
  return (
    <div className="App">
      <MyForm data={data} />
    </div>
  );
}
