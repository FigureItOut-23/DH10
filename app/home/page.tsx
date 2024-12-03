"use client";

import { useState, ChangeEvent } from "react";
import { color, motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft } from "@/utils/motion";
import axios from "axios";
import Link from "next/link";

let msgHistory: string[] = [];
let startMsg =
  "Roleplay as a human friend of mine. Share with me what's been going on in your life lately, any interesting stories or experiences you'd like to chat about. Feel free to ask me about my day too! Let's have a friendly and casual conversation";
const url =
  "https://northamerica-northeast2-model-bonsai-411201.cloudfunctions.net/pepper";

const startData = { msg: startMsg };
axios
  .post(url, startData)
  .then((response) => {
    msgHistory.push(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

export default function Home() {
  const [userInput, setUserInput] = useState("");

  const getResponse = async () => {
    let msgBody = "";
    for (let i = 0; i < msgHistory.length; i++) {
      msgBody += i % 2 == 0 ? "You: " : "User: ";
      msgBody += msgHistory[i] + "\n";
    }
    console.log(msgBody);
    const data = { msg: msgBody };
    axios
      .post(url, data)
      .then((response) => {
        msgHistory.push(response.data);
        setUserInput("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const Submit = (event: any) => {
    event.preventDefault();
    msgHistory.push(userInput);
    getResponse();
    setUserInput("Loading...");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <span className="mt-7 flex flex-col items-center gap-6 text-6xl font-bold text-white max-w-[60px] w-auto h-auto">
        <span className="text-[9rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:glow">
          P.E.P.P.E.R.
        </span>
      </span>

      {/* Container for the Image with margin-top added */}
      <div
        className="flex justify-start"
        style={{ width: "100%", height: "400px" }}
      >
        <div style={{ marginLeft: "200px", marginTop: "20px", opacity: 0.7 }}>
          <Image
            src="/stock_ai.png"
            alt="Description of your image"
            width={300} // Set the width as needed
            height={500} // Set the height as needed
          />
          {/* div for message history */}
          {/* incoming msg div */}
        </div>
        <div
          className="h-80 mx-10 my-6 text-white border-2 overflow-auto"
          style={{ width: "700px" }}
        >
          {msgHistory.map((item, index) => (
            <p
              className={`${index % 2 == 0 ? "text-green-300" : "text-white"}`}
              key={index}
            >
              {index % 2 == 0 ? "Pepper: " : "You: "}
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Text box underneath the image */}
      <div className="mt-4 p-4 bg-gray-200 rounded-lg opacity-80x">
        <p className="p-2 text-lg text-gray-600">Enter your message:</p>
        {/* Styled Text input box */}
        <form
          onSubmit={Submit}
          className="flex items-center justify-between border border-gray-300 rounded-full"
        >
          <input
            type="text"
            id="userInput"
            value={userInput}
            onChange={handleInputChange}
            className="flex-1 p-2 outline-none bg-gray-200"
            placeholder="Type here..."
          />
          <button
            className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
            type="submit"
            onClick={Submit}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
