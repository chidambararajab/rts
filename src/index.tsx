import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);
root.render(<App />);
