import React from "react";
import tower from "../asset/tower.jpeg";

const Heropage = () => {
  return (
    <div className="mt-10 mb-9">
      <div className="flex w-full">
        <div className=" lg:w-1/2 w-full ml-4 p-6 rounded-xl">
          <h1 className="text-6xl text-white font-bold tracking-tight leading-tight">
            Dar-es-Salaam is one of the world vibrant cities located on the East
            Coast of Tanzania
          </h1>
          <p className="mb-8 text-2xl mt-2 text-white font-medium  ">
            Dar-es-Salaam an arab meaning of safe habor was first formed in
            1857. Before its current name, Dar-es-Salaam was originally a small
            village named Mzizima (swahili for healthy town).
          </p>

          <div className="mt-12">
            <button className="px-6 py-5 bg-green-200 mr-4 rounded-lg">
              Request a tour guide
            </button>
            <button className="px-6 py-5 bg-green-200 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
        <div className=" lg:w-1/2 w-full px-2 rounded-xl">
          <div className="mx-auto max-w-max">
            <img
              src={tower}
              alt=""
              className="h-[600px] w-[600px]  rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
