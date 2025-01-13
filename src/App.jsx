import { useState, useEffect } from "react";
import "./App.css";
import Greeting from "./component/greeting";

function App() {
  const [showHero, setShowHero] = useState(false); // Kontrol tampilan Hero
  const [isTransitioning, setIsTransitioning] = useState(false); // Untuk animasi transisi
  const [showButton, setShowButton] = useState(false);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // Fungsi delay

  const handleTransition = () => {
    setIsTransitioning(true); // Mulai transisi
    setTimeout(() => {
      setShowHero(true); // Pindah ke Hero setelah delay
    }, 1000); // Delay 1 detik
  };

  useEffect(() => {
    const showButtonAfterDelay = async () => {
      await delay(5000); // Tunggu 3 detik
      setShowButton(true); // Tampilkan button setelah 3 detik
    };

    showButtonAfterDelay(); // Panggil fungsi untuk menampilkan button
  }, []);

  return (
    // <div className="container-fluid">
    //   {!showHero ? (
    //     <section
    //       className={`h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center ${
    //         isTransitioning
    //           ? "opacity-0 transition-opacity duration-1000"
    //           : "opacity-100"
    //       }`}
    //       id="greeting"
    //     >
    //       <Greeting />
    //       {showButton ? (
    //         <button
    //           className="mt-3 md:mt-20 px-4 py-2 md:px-6 md:py-3 bg-white text-purple-500 font-bold rounded-full shadow-lg hover:bg-purple-500 hover:text-white transition-all"
    //           onClick={handleTransition}
    //         >
    //           Lanjut ke Hero Section
    //         </button>
    //       ) : (
    //         <span></span>
    //       )}
    //     </section>
    //   ) : (
    //     <section className="h-screen bg-pink-500">
    //       <div className="container">
    //         <div className="grid grid-cols-1 md:grid-cols-2">
    //           <div className="desc grid content-center">
    //             <h1 className="text-6xl max-w-lg mx-auto font-extrabold mb-4">
    //               Happy Birthday, My Love!
    //             </h1>
    //             <p className="text-xl mb-6 max-w-lg mx-auto">
    //               On this special day, I want you to know how much you mean to
    //               me. You are my heart, my joy, and my everything. I’m so
    //               grateful to have you by my side. Here’s to more memories,
    //               love, and laughter together. Happy Birthday, my forever love.
    //               💖
    //             </p>
    //           </div>
    //           <div className="image"></div>
    //         </div>
    //       </div>
    //     </section>
    //   )}
    // </div>
    <>
      <section className="h-screen bg-pink-500">
        <div className="container h-full flex items-center justify-center p">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="desc flex flex-col justify-center items-center my-auto">
              <h1 className="text-6xl max-w-lg mx-auto font-extrabold mb-4">
                Happy Birthday, My Love!
              </h1>
              <p className="text-xl mb-6 max-w-lg mx-auto">
                On this special day, I want you to know how much you mean to me.
                You are my heart, my joy, and my everything. I’m so grateful to
                have you by my side. Here’s to more memories, love, and laughter
                together. Happy Birthday, my forever love. 💖
              </p>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
