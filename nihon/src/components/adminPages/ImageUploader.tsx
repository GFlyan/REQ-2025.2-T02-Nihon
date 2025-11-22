"use client";

import { useState, ChangeEvent } from "react";

export default function ImageUploader() {
  const [images, setImages] = useState<string[]>([]);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...urls]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className="h-72 w-full border border-gray-300 rounded-3xl overflow-auto flex flex-wrap gap-2 justify-between p-5"
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`preview ${index}`}
          className="h-20 w-20 object-cover rounded-lg cursor-pointer hover:opacity-70 transition"
          onClick={() => removeImage(index)}
          title="Clique para remover"
        />
      ))}

      <label className="h-20 w-20 border border-dashed border-gray-400 flex justify-center items-center rounded-lg cursor-pointer text-gray-500">
        + Upload
        <input
          type="file"
          multiple
          className="hidden"
          onChange={handleFiles}
          accept="image/*"
        />
      </label>
    </div>
  );
}
