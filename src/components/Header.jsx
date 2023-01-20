import React from "react";
import tower from "../asset/tower.jpeg"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <section class="overflow-hidden">
      <div class="flex items-center justify-between px- xl:px-14 py-5 bg-gray-200">
        <div className="inline-flex">
          <img
            src={tower}
            alt=""
            className="object-cover rounded-full w-10 mr-2 h-10"
          />
          <span className="text-sm  mt-2 font-bold">The City</span>
        </div>
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-auto hidden lg:block">
              <ul class="flex items-center mr-16">
                <li class="mr-9 font-medium hover:text-gray-700">
                <Link to="/">
                  <span>Home</span>
                </Link>
                </li>
                <li class="mr-9 font-medium hover:text-gray-700">
                  <span>Features</span>
                </li>
                <li class="mr-9 font-medium hover:text-gray-700">
                  <span>Solutions</span>
                </li>
                <li class="mr-9 font-medium hover:text-gray-700">
                  <span>Resources</span>
                </li>
                <li class="font-medium hover:text-gray-700">
                  <span>Pricing</span>
                </li>
              </ul>
            </div>
            <div class="w-auto hidden lg:block">
              <div class="inline-block">
                <button
                  class="py-3 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                  type="button"
                >
                  Login
                </button>
              </div>
            </div>
            <div class="w-auto lg:hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;