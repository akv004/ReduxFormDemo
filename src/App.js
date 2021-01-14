import React from "react";
import "./styles.css";
import MyForm from "./MyForm";
import showResults from "./showResults";

export default function App() {
  const data = {
    facets: [
      {
        displayName: "Brand",
        values: [{ name: "Apple" }, { name: "Google" }]
      },

      {
        displayName: "Department",
        values: [{ name: "Music" }, { name: "Movies" }]
      }
    ]
  };
  return (
    <div className="App">
      <MyForm data={data} onSubmit={showResults} />
    </div>
  );
}
