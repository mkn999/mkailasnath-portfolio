import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [overlay, setOverlay] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const b = ["M ", "", "K", "A", "I", "L", "A", "S", "N", "A", "T", "H"];

  useEffect(() => {
    let a = 0;
    let intervalId;
    function display() {
      intervalId = setInterval(function () {
        if (a >= b.length - 1) {
          clearInterval(intervalId);
          setTimeout(() => {
            setFadeOut(true);
          }, 700);
          return;
        }
        setOverlay((prev) => prev + b[a]);
        a++;
      }, 200);
    }
    const timeoutId = setTimeout(display, 1000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <section className={`overlay ${fadeOut ? "fadeOut" : ""}`}>
        <p className="overlayText">{overlay}</p>
        <p className="overlayBlock">█</p>
      </section>
      <main className={`mainContent ${fadeOut ? "show" : ""}`}>
        <p className="mcText">
          i am a developer who <span>loves</span> <br /> converting dreams into reality
        </p>
        {/* <p className="overlayBlock">█</p> */}
      </main>
      <section className={`projectSection ${fadeOut ? "show" : ""}`}>
        <p className="projectSection"></p>
      </section>
    </>
  );
}

export default App;
