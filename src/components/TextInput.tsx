import React from "react";

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm text-left font-medium text-gray-700">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default TextInput;
