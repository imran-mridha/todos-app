import Lottie from "react-lottie";
import animationData from "../src/assets/todo.json";

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
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl uppercase"> ToDo App</h1>
      <div className="flex justify-between gap-10 items-center">
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="bg-white p-5 rounded shadow-lg">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
