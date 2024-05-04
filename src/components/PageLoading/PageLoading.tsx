import "./styles.css";

const PageLoading = () => {
  return (
    <div className="fixed flex flex-1 inset-0 bg-slate-800 items-center justify-center w-full h-full z-50">
      <div className="spinner">
        <div
          className="w-16 h-16 border-4 border-blue-500 rounded-full animate-spin duration-1"
          style={{ animationName: "spin1" }}
        ></div>
        <div
          className="w-16 h-16 border-4 border-red-500 rounded-full animate-spin duration-2"
          style={{ animationName: "spin2" }}
        ></div>
        <div
          className="w-16 h-16 border-4 border-green-500 rounded-full animate-spin duration-3"
          style={{ animationName: "spin3" }}
        ></div>
      </div>
    </div>
  );
};

export default PageLoading;
