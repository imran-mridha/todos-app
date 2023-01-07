import Lottie from "react-lottie";
import animationData from "../src/assets/todo.json";
import TodoList from "./components/TodoList";

import Todos from "./components/Todos";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-20">
      <h1 className="text-4xl uppercase border-b border-blue-600 pb-2 font-semibold my-5"> Track Your Daily Plan</h1>
      <div className="flex justify-between gap-10 items-center">
        <div className="w-full">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="bg-white p-10 rounded shadow-lg w-full">
          <Todos />
          {/* <TodoList /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
