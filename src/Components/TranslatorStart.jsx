const TranslatorStart = ({ onStart }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-6 sm:p-12">
      {/* Gradient header with different language greetings */}
      <div className="w-full h-64 bg-gradient-to-l from-[#DA98C9] to-[#3d5585] rounded-t-full rounded-bl-full flex flex-col justify-center text-gray-700 pr-6">
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
