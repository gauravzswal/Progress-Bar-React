import { useState, useEffect } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return prev; 
        } else {
          return prev + 1;
        }
      });
    }, 100);

    // Cleanup function to clear timer when component unmounts
    return () => clearInterval(timer);
  }, [progress]);

  function handleClick() {
    setProgress(0);
  }

  return (
    <>
      <div className="flex w-screen h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Progress Bar</h1>
        <div className="w-[50vw] h-[5vh] border-2 rounded-3xl overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div>{progress < 100 ? `Loading... ${progress}%` : "Complete!"}</div>

        <button
          className="bg-black text-white px-4 py-1 rounded-xl text-2xl"
          onClick={handleClick}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
