"use client";
import React, { useState } from "react";

const buttons = [
  "C",
  "(",
  ")",
  "←",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
  "sin",
  "cos",
  "tan",
  "√",
  "log",
  "ln",
  "^",
  "π",
];

export default function ScientificCalculator() {
  const [expression, setExpression] = useState("");

  const handleClick = (value: any) => {
    if (value === "C") {
      setExpression("");
    } else if (value === "←") {
      setExpression(expression.slice(0, -1));
    } else if (value === "=") {
      try {
        const result = evaluateExpression(expression);
        setExpression(result.toString());
      } catch {
        setExpression("Error");
      }
    } else if (value === "π") {
      setExpression(expression + Math.PI.toString());
    } else if (["sin", "cos", "tan", "log", "ln", "√"].includes(value)) {
      setExpression(expression + value + "(");
    } else {
      setExpression(expression + value);
    }
  };

  const evaluateExpression = (expr: string) => {
    let replaced = expr
      .replace(/π/g, Math.PI.toString())
      .replace(/√\(/g, "Math.sqrt(")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/\^/g, "**");

    // Remove leading zeros from numbers (except after decimal)
    replaced = replaced.replace(/\b0+([0-9]+)/g, "$1");

    return eval(replaced);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <input
          className="w-full p-3 border border-[#138a55] rounded-lg outline-none transition mb-4 text-end"
          value={expression}
          onChange={(e) => {
            const input = e.target.value;

            const allowedPattern = /^[0-9+\-*/().^a-zπ]*$/i;
            if (!allowedPattern.test(input)) return;

            const functions = ["sin", "cos", "tan", "log", "ln", "sqrt"];

            let newExpr = input;
            for (const func of functions) {
              const regex = new RegExp(`\\b${func}$`);
              if (regex.test(newExpr)) {
                newExpr += "(";
                break;
              }
            }

            setExpression(newExpr);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              try {
                const result = evaluateExpression(expression);
                setExpression(result.toString());
              } catch {
                setExpression("Error");
              }
            }
          }}
        />

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              className="bg-[#006633] text-white hover:bg-green-800 text-lg h-12 rounded-xl shadow"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
