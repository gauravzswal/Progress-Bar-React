import { useState, useEffect } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
        } else {
          return prev + 1;
        }
      });
    }, 100);
  }, []);

  function handleClick(){
    setProgress(0);
  }

  return (
    <>
      <div className="flex w-screen h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Progress Bar</h1>
        <div className="w-[50vw] h-[5vh] border-2 rounded-3xl overflow-hidden" onClick={handleClick}>
          <div
            className="h-full bg-blue-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div>{progress < 100 ? `Loading... ${progress}%` : "Complete!"}</div>
      </div>
    </>
  );
}

export default App;
