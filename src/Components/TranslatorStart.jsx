const TranslatorStart = ({ onStart }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-6 sm:p-12">
      {/* Gradient header */}
      <div className="w-full h-64 bg-gradient-to-l from-[#DA98C9] to-[#3d5585] rounded-t-full rounded-bl-full flex flex-col justify-center text-gray-700 pr-6">
        <span className="font-shojumaru text-5xl sm:text-6xl text-center text-[#b6d3e3]">Hello</span>
        <span className="text-2xl sm:text-3xl text-center text-[#daebf4]">გამარჯობა &nbsp; &nbsp;  Lumelo</span>
        
        {/* Apply argin-top to move "Hola" 10px to the down */}
        <span className="font-notoSansJp text-2xl sm:text-3xl text-right text-[#daebf4] mt-[10px]">Hujambo  &nbsp; &nbsp; &nbsp; &nbsp; こんにちは</span>
        
        <span className="text-2xl sm:text-3xl text-center text-[#daebf4] mt-[20px]">Hola</span>
      </div>

      {/* Centered content including the heading */}
      <div className="flex flex-col items-center justify-center mt-20 mb-36 space-y-5">
        <h1 className="font-righteous text-4xl text-white uppercase text-center">Translator</h1>
        <h1 className="font-righteous text-4xl text-white uppercase text-center">App</h1>
      </div>

      {/* Button container with increased margin-top */}
      <div className="flex items-center justify-center mt-15">
        <button
          className="w-32 h-10 bg-gradient-to-l from-[#DA98C9] to-[#3d5585] rounded-full font-righteous font-bold text-lg uppercase text-gray-700 tracking-widest active:translate-y-[1px] justify-center"
          onClick={onStart}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default TranslatorStart;
