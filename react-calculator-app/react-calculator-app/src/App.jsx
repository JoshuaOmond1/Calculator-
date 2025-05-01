import { useState } from "react";

export default function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const sanitized = expression.replace(/×/g, "*").replace(/÷/g, "/");
        const evalResult = eval(sanitized);
        setResult("=" + evalResult);
      } catch {
        setResult("= Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "⌫") {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    "C", "⌫", "÷", "×",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", "."
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        <div className="text-right mb-4">
          <div className="text-xl break-words">{expression || "0"}</div>
          <div className="text-gray-500">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-gray-200 hover:bg-gray-300 p-4 rounded-xl text-lg font-semibold"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
