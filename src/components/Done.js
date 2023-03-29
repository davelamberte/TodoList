export default function Done({ todos }) {
  let itemIndex = 1;

  const display = () => {
    if (todos.length === 0) {
      return (
        <h1 className="font-bold p-3 bg-white rounded-md shadow-lg text-2xl">
          Nothing
        </h1>
      );
    } else {
      return todos.map((todo, index) => {
        if (todo.isDone === true) {
          return (
            <li
              className="text-lg bg-white rounded-md p-3 mt-3 shadow-lg flex"
              key={index}
            >
              <div className="grow">
                <div className="font-bold text-2xl">
                  {itemIndex++}: {todo.title} ✅
                </div>
                <div>{todo.description} </div>
              </div>
              <div></div>
            </li>
          );
        }
      });
    }
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="grow shrink-0 w-[500px]">
        <div className="pt-5">
          <div className="text-lg font-bold">Completed Task:</div>
        </div>
        <ul>{display()}</ul>
      </div>
    </div>
  );
}
