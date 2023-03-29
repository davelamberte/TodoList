import { useState } from "react";

export default function Todo({ data, setData }) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    isEditing: false,
    index: -1,
    isDone: false,
  });

  let todoIndex = 1;

  const titleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };
  const descriptionChange = (e) => {
    setTodo({ ...todo, description: e.target.value });
  };

  const buttonClicked = () => {
    if (todo.title === "" && todo.description === "") {
      return;
    }
    setData([...data, todo]);
    setTodo({ title: "", description: "" });
  };

  function cancelEdit() {
    setTodo((todo.isEditing = false));
  }

  function deleteClicked(index) {
    let modifedTodos = data.filter((data, todoIndex) => {
      if (index !== todoIndex) return data;
    });
    setData(modifedTodos);
  }

  function editClicked(index, todoItem) {
    setTodo({
      title: todoItem.title,
      description: todoItem.description,
      isEditing: true,
      index: index,
    });
  }

  function updateClicked() {
    let newTodos = data.map((data, index) => {
      if (index === todo.index) {
        return { title: todo.title, description: todo.description };
      }
      return data;
    });
    setData(newTodos);
    setTodo({ ...todo, title: "", description: "", isEditing: false });
  }

  function doneClicked(index) {
    let modifedTodos = data.filter((data, todoIndex) => {
      if (index === todoIndex) {
        return (data.isDone = true);
      } else {
        return data;
      }
    });
    setData(modifedTodos);
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="grow shrink-0 w-[500px]">
        <div className="pt-5">
          <div className="text-2xl font-bold">To-dos</div>
          Title:{" "}
          <input
            name="title"
            value={todo.title}
            onChange={titleChange}
            className="shadow pb-2 appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
          Description:{" "}
          <input
            name="description"
            value={todo.description}
            onChange={descriptionChange}
            className="shadow pb-2 appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
          {todo.isEditing ? (
            <div>
              <button
                onClick={updateClicked}
                className="mt-3 shadow bg-violet-500 hover:bg-violet-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Update
              </button>
              <button
                onClick={cancelEdit}
                className="mt-3 ml-4 shadow bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={buttonClicked}
              className="mt-3 shadow bg-blue-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Add To-do
            </button>
          )}
        </div>
        <ul>
          {data.map((todo, index) => {
            if (todo.isDone !== true) {
              return (
                <li className="text-lg pt-5 flex" key={index}>
                  <div className="grow">
                    <div className="font-bold">
                      {todoIndex++}: {todo.title}
                    </div>
                    <div className="bg-white rounded-md p-3">
                      {todo.description}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => doneClicked(index)}
                      className="m-3 mr-4 shadow bg-yellow-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Done
                    </button>

                    <button
                      onClick={() => editClicked(index, todo)}
                      className="m-3 mr-4 shadow bg-blue-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteClicked(index)}
                      className="m-3 shadow bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
