import ListItem from "./ListItem";
import data from "../data";
import { useState } from "react";
export default function List() {
  const [birthdays, setBirthdays] = useState([...data]);
  return (
    <div>
      <h2>{birthdays.length} Birthdays Today</h2>
      <ul>
        {birthdays.map((ele) => {
          return <ListItem key={ele.id} {...ele} />;
        })}
      </ul>
      <button
        onClick={() => {
          setBirthdays([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
}
