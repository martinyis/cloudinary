"use client";
import Image from "next/image";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {imageId && (
        <CldImage
          width="600"
          height="600"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
