import React from "react";
import { useState } from "react";
import Inputs from "./Components/Inputs";
import Card from "./Components/Card";

const App = () => {
  const [form, setForms] = useState({
    name: "",
    Email: "",
  });
  const [data, setData] = useState([]);
  console.log(data);

  const deleteUsers = (id) => {
    console.log(id);

    const newData = data.filter((e,i)=>i != id)
    setData(newData)
  };

  return (
    <div>
      <Inputs form={form} setForms={setForms} data={data} setData={setData} />
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        {data.map((e, i) => {
          return (
            <Card
              key={i}
              data={e}
              setData={setData}
              id={i}
              deleteUsers={deleteUsers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
