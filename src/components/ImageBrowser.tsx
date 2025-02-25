import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface ImageDropzoneProps {
  onImageUpload: (imageUrl: string) => void;
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({ onImageUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onImageUpload(url);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div
      {...getRootProps()}
      className="mt-6 p-6 w-full max-w-xs border-2 border-dashed border-gray-500 rounded-lg text-gray-500 text-center cursor-pointer hover:bg-gray-100 transition"
    >
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the image here...</p> : <p>Drag & drop an image here, or click to browse</p>}
    </div>
  );
};

export default ImageDropzone;
