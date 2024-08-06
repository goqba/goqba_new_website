const Running = () => {
  return (
    <div className="text-white text-2xl font-semibold absolute top-1/3 w-[400px] h-[200px] bg-slate-500 rounded-lg z-50">
      <div className="text-center pt-10">AI model running...</div>
      <div className="h-[60%]">
        <div className="relative flex justify-center items-center h-full">
          {/* <!-- Outer Ring--> */}
          <div
            className="w-12 h-12 rounded-full absolute
                        border-8 border-solid border-gray-200"
          ></div>
          {/* <!-- Inner Ring --> */}
          <div
            className="w-12 h-12 rounded-full animate-spin absolute
                        border-8 border-solid border-purple-500 border-t-transparent"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Running;
