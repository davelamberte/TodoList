import Done from "@/components/Done";
import Todo from "@/components/Todo";
import { useState } from "react";

export default function Home() {
  const [nav, setNav] = useState("todo");
  const [data, setData] = useState([]);

  const changeNav = (nav) => {
    setNav(nav);
  };

  return (
    <div>
      <div className="flex  bg-gray-400 place-content-center m-1 rounded-lg">
        <h1 className="font-bold text-2xl text-white">WS101 To-Do List App</h1>
      </div>
      <div className="flex  place-content-center">
        <button
          onClick={() => changeNav("todo")}
          name="1"
          value="1"
          className="mt-3 mr-4 shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Todo
        </button>
        <button
          onClick={() => changeNav("done")}
          name="2"
          value="2"
          className="mt-3 mr-4 shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Done
        </button>
      </div>
      <div className="bg-red-400 pb-6 m-10 rounded-lg">
        {" "}
        {nav === "todo" && <Todo data={data} setData={setData} />}
        {nav === "done" && <Done todos={data} setData={setData} />}
      </div>
    </div>
  );
}
