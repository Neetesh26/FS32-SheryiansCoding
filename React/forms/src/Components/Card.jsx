import React from "react";

const Card = ({ data, setData, deleteUsers, id }) => {
  // console.log(id);
  // console.log("render");

  return (
    <div>
      <div
        className="main"
        style={{
          backgroundColor: "gray",
          display: "inline-block",
          rowGap: 10,
        }}
      >
        <div className="info">
          <h1>NAME : {data.name}</h1>
          <h1>email :{data.Email}</h1>
        <button onClick={() => deleteUsers(id)}>delete</button>
        </div>
      </div>
      {/* {data.map((elem, idx) => {
        return (
          
        );
      })} */}
    </div>
  );
};

export default Card;
