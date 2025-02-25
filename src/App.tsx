import React, { useState, useRef } from "react";
import Konva from "konva";
import TextInput from "./components/TextInput"
import ImageBrowser from "./components/ImageBrowser";
import GreetingCardPreview from "./components/Preview";

const GreetingCard: React.FC = () => {
  const [dear, setDear] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const stageRef = useRef<Konva.Stage | null>(null);
  

  const handleDownload = () => {
    if (stageRef.current) {
      const dataURL = stageRef.current.toDataURL({ pixelRatio: 3 });
      const a = document.createElement("a");
      a.href = dataURL;
      a.download = "greeting-card.png";
      a.click();
    }
  };

  const isFormValid = dear.trim() && message.trim() && from.trim() && imageSrc;

  return (
    <div className="flex flex-col items-center p-6 bg-white text-black">
      <GreetingCardPreview dear={dear} message={message} from={from} imageSrc={imageSrc} stageRef={stageRef} />
      <ImageBrowser onImageUpload={setImageSrc} />

      <div className="mt-6 flex flex-col w-full max-w-xs space-y-4">
        <TextInput label="Dear" placeholder="Dear" value={dear} onChange={(e) => setDear(e.target.value)} />
        <TextInput label="Message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <TextInput label="From" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>

      {!isFormValid && <p className="text-red-500 text-sm mt-2">Please fill out all fields and upload an image.</p>}

      <button
        onClick={handleDownload}
        disabled={!isFormValid}
        className={`mt-6 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-700 ${
          isFormValid ? "bg-black text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
      >
        Download Greeting Card
      </button>
    </div>
  );
};

export default GreetingCard;
