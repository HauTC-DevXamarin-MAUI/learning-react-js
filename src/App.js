import logo from "./logo.svg";
import "./App.css";
import { ReactDOM, useState } from "react";

const gifts = ["🍎", "🍊", "🍋", "🍌", "🍉", "🍇"];
function App() {
  const handleGetGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };
  const [gift, setGift] = useState();
  return (
    <div className="App" style={{ padding: 32 }}>
      <h1>{gift || "don't have gift"}</h1>
      <button onClick={handleGetGift} style={{ padding: 16 }}>
        Get Gift
      </button>
    </div>
  );
}
export default App;
