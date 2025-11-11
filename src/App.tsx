import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const day = now.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      setTime(`${hours}:${minutes}:${seconds}`);
      setDate(day);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-400 drop-shadow-md text-center">
        React + Vite Clock
      </h1>

      <div className="bg-gray-800 px-6 py-8 sm:px-10 sm:py-12 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-mono font-semibold tracking-widest mb-2">
          {time}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">{date}</p>
      </div>

      <p className="mt-6 text-gray-400 text-xs sm:text-sm text-center">
        Built with <span className="text-blue-400 font-semibold">React</span> &{" "}
        <span className="text-yellow-400 font-semibold">Tailwind CSS</span>
      </p>
    </div>
  );
}

export default App;
