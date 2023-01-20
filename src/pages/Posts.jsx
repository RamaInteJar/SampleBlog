import React from "react";
import shimo from "../asset/shimo.jpeg";
import zach from "../asset/zach.jpeg";
import dinesh from "../asset/dinesh.jpeg";
import { BsChatDots } from "react-icons/bs";
import {Link} from "react-router-dom"
import { useState } from "react";
import UserInput from "../components/UserInput";
import supabase from "../utils/supabaseClient";
const Posts = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  }
  console.log(supabase)
  return (
    <>
      
      <UserInput open={ isOpen} toggle={handleOpenModal} />
      
    <section className="container mx-auto py-6">
      <div className="flex justify-between mx-auto px-4 mb-6">
        <h1 className=" text-5xl px-8 text-green-400 ">
          Latest Post
        </h1>
        <button className=" bg-green-200 px-4  rounded-lg" onClick={handleOpenModal}>
          Create Post
        </button>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-center rounded-xl mx-auto">
        <div className="bg-gray-400 ml-8 max-w-sm mb-6 rounded-xl">
          <img
            src={shimo}
            alt=""
            className="object-cover w-full h-52 rounded-xl"
          />
          <Link to='/details'>
          <h6 className="px-4 py-2">Product</h6>
          </Link>
          <div className="px-4 py-2">
            <p>How startup company can help you to grow as a developer</p>
          </div>
          <div className="px-4 py-4 items-center flex  justify-between">
            <div className="inline-flex">
              <img
                src={shimo}
                alt=""
                className="object-cover  rounded-full w-8 mr-2 h-8"
              />
              <span className="text-sm font-medium mt-2">Shimo</span>
            </div>
            <div className="inline-flex">
              <BsChatDots className="h-8 w-8" />
            </div>
          </div>
        </div>
        <div className="bg-gray-400 ml-8 max-w-sm mb-6 rounded-xl">
          <img
            src={zach}
            alt=""
            className="object-cover w-full h-52 rounded-xl"
          />
          <h6 className="px-4 py-2">Product</h6>
          <div className="px-4 py-2">
            <p>How startup company can help you to grow as a developer</p>
          </div>
          <div className="px-4 py-4 items-center flex  justify-between">
            <div className="inline-flex">
              <img
                src={zach}
                alt=""
                className="object-cover  rounded-full w-8 mr-2 h-8"
              />
              <span className="text-sm font-medium mt-2">Zach</span>
            </div>
            <div className="inline-flex">
              <BsChatDots className="h-8 w-8" />
            </div>
          </div>
        </div>
        <div className="bg-gray-400 ml-8 max-w-sm mb-6 rounded-xl">
          <img
            src={dinesh}
            alt=""
            className="object-cover w-full h-52 rounded-xl"
          />
          <h6 className="px-4 py-2">Product</h6>
          <div className="px-4 py-2">
            <p>How startup company can help you to grow as a developer</p>
          </div>
          <div className="px-4 py-4 items-center flex  justify-between">
            <div className="inline-flex">
              <img
                src={dinesh}
                alt=""
                className="object-cover  rounded-full w-8 mr-2 h-8"
              />
              <span className="text-sm font-medium mt-2">Dinesh</span>
            </div>
            <div className="inline-flex">
              <BsChatDots className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Posts;
