const TranslatorStart = ({ onStart }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-6 sm:p-12">
      {/* Gradient header with different language greetings */}
      <div className="w-full h-64 bg-gradient-to-l from-[#DA98C9] to-[#3d5585] rounded-t-full rounded-bl-full flex flex-col justify-center text-gray-700 pr-6">
        
        {/* Greeting in English */}
        <span className="font-shojumaru text-5xl sm:text-6xl text-center text-[#b6d3e3]">Hello</span>
        
        {/* Greeting in Georgian (გამარჯობა) and Zulu (Lumelo) */}
        <span className="text-2xl sm:text-3xl text-center text-[#daebf4]">გამარჯობა &nbsp; &nbsp;  Lumelo</span>

        {/* Greeting in Swahili (Hujambo) and Japanese (こんにちは) with margin applied */}
        <span className="font-notoSansJp text-2xl sm:text-3xl text-right text-[#daebf4] mt-[10px]">Hujambo  &nbsp; &nbsp; &nbsp; &nbsp; こんにちは</span>

        {/* Greeting in Spanish (Hola) */}
        <span className="text-2xl sm:text-3xl text-center text-[#daebf4] mt-[20px]">Hola</span>
      </div>

      {/* Centered content with a heading */}
      <div className="flex flex-col items-center justify-center mt-20 mb-36 space-y-5">
      </div>

      {/* Button container with margin-top to separate from the text above */}
      <div className="flex items-center justify-center mt-15">
      </div>
    </div>
  );
};

export default TranslatorStart;
