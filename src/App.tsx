import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock(); // set initial time
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-blue-400 drop-shadow-lg">
        Clock
      </h1>

      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h2 className="text-6xl font-mono tracking-widest">{time}</h2>
      </div>

      <p className="mt-8 text-gray-400 text-sm">
        Built with <span className="text-blue-400 font-semibold">React</span> &
        <span className="text-yellow-400 font-semibold"> Tailwind CSS</span>
      </p>
    </div>
  );
}

export default App;
