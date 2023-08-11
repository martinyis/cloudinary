"use client";
import React from "react";
import { SearcResult } from "./getResults";
import { CldImage } from "next-cloudinary";
type Props = {
  results: SearcResult[];
};

const ImagesList = ({ results }: Props) => {
  console.log(results);
  return (
    <div className="grid grid-cols-4">
      {results.map((result: SearcResult) => (
        <div className="px-4 py-4">
          <CldImage
            width="600"
            height="600"
            src={result.public_id}
            sizes="100vw"
            alt="Description of my image"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesList;
