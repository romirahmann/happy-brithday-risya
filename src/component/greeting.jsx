import Typewriter from "typewriter-effect";
const Greeting = () => {
  return (
    <>
      <div className="container-fluid">
        <span className=" text-2xl md:text-[10em] font-extrabold text-white drop-shadow-lg p-10 bg-clip-text ">
          <Typewriter
            options={{
              strings: ["Happy Brithday !", "Risya Ristia Wardah"],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </span>
      </div>
    </>
  );
};

export default Greeting;
