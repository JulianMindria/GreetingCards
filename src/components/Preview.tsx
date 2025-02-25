import React from "react";
import { Stage, Layer, Text, Image } from "react-konva";
import useImage from "use-image";
import Konva from "konva";

interface GreetingCardPreviewProps {
  dear: string;
  message: string;
  from: string;
  imageSrc: string | null;
  stageRef: React.RefObject<Konva.Stage | null>
}

const GreetingCardPreview: React.FC<GreetingCardPreviewProps> = ({ dear, message, from, imageSrc, stageRef }) => {
    const [image] = useImage(imageSrc ?? "");
  
    if (!image) return null;
  
    return (
      <Stage ref={stageRef} width={384} height={256}>
        <Layer>
          <Image image={image} width={384} height={256} opacity={0.7} />
          <Text text={`Dear ${dear || "..."},`} x={50} y={50} fontSize={20} fontFamily="Arial" fill="black" draggable />
          <Text text={message || "Write your message here!"} x={50} y={100} fontSize={18} fontFamily="Arial" fill="black" draggable />
          <Text text={`- ${from || "Your Name"}`} x={50} y={150} fontSize={18} fontFamily="Arial" fill="black" draggable />
        </Layer>
      </Stage>
    );
  };
  
export default GreetingCardPreview;
