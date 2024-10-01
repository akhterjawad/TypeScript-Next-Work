import Image from "next/image";
import ImageMain from "../download.jpeg";
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center pt-48 min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <h1 className="text-4xl font-bold text-white text-center">
          Hello World
          <br />
          with
          <br />
          NextJS
        </h1>
        <Image
          src={ImageMain}
          alt="NextJS Image"
          width={300}
          height={0}
          className="mt-8 rounded-lg shadow-lg h-auto w-auto"
        />
      </div>
    </React.Fragment>
  );
}
