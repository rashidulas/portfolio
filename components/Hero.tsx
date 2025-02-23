const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-black bg-opacity-40">
      <div
        className={`absolute inset-0 top-1/4 max-w-7xl mx-auto flex flex-col items-center gap-5`}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            {/* Profile Picture */}
            <div className="relative w-40 h-40 rounded-full bg-white flex justify-center items-center">
              <img
                src="/images/sami.jpg"
                alt="Sami"
                className="w-36 h-36 object-cover rounded-full transform scale-110"
              />
            </div>
          </div>
          <h1 className={` mt-2 text-gray-300 text-center`}>
            Hello I'm{" "}
            <span className="text-white-200">Md Rashidul Alam Sami</span>
          </h1>
        </div>
      </div>

      {/* <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-8 h-16 rounded-full border-2 border-gray-400 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-4 h-4 rounded-full bg-white"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
