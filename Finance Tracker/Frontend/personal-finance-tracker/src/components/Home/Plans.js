import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { SiHackaday } from "react-icons/si";
function Plans() {
  return (
    <div className="py-[10px] md:py-[100px]">
      <div className="max-w-[1600px] gap-3  mx-auto md:grid grid-cols-3">
        <div className="hover:bg-gray-100 shadow-2xl border  h-[500px] hover:scale-105 duration-500 rounded-md  flex flex-col  text-center items-center">
          <AiFillDollarCircle className="text-[120px] mt-2" />
          <p className="font-bold text-3xl mt-5">Financial Planning 101</p>
          <p className="font-semibold mt-3">
            Master the art of effective financial planning with this
            comprehensive course. Learn how to set realistic goals, budget
            effectively, manage debt, and invest wisely. Equip yourself with the
            tools and knowledge to create a solid financial roadmap for a secure
            and prosperous future.
          </p>
          <button className="bg-[#00df9a] text-black font-semibold hover:bg-black hover:text-[#00df9a] p-2 w-[50%] rounded-lg mt-4">
            Learn Now
          </button>
        </div>
        <div className="mt-[5px] hover:bg-gray-100 shadow-2xl border h-[500px] hover:scale-105 duration-500 rounded-md">
          <div className="hover:bg-gray-100 shadow-2xl border  h-[500px] hover:scale-105 duration-500 rounded-md  flex flex-col  text-center items-center">
            <AiFillDollarCircle className="text-[120px] mt-2" />
            <p className="font-bold text-3xl mt-5">Investment Strategies</p>
            <p className="font-semibold mt-3">
              Discover the intricacies of investment and maximize your returns.
              This course dives deep into various investment options, such as
              stocks, bonds, real estate, and more. Understand risk management,
              portfolio diversification, and market analysis to make informed
              investment decisions that align with your financial goals.
            </p>
            <button className="bg-[#00df9a] text-black font-semibold hover:bg-black hover:text-[#00df9a] p-2 w-[50%] rounded-lg mt-4">
              Learn Now
            </button>
          </div>
        </div>
        <div className="mt-[5px] hover:bg-gray-100 shadow-2xl border  h-[500px] hover:scale-105 duration-500 rounded-md">
          <div className="hover:bg-gray-100 shadow-2xl border  h-[500px] hover:scale-105 duration-500 rounded-md  flex flex-col  text-center items-center">
            <AiFillDollarCircle className="text-[120px] mt-2" />
            <p className="font-bold text-3xl mt-5">
              Personal Finance for Millennials
            </p>
            <p className="font-semibold mt-3">
              Tailored specifically for the millennial generation, this course
              addresses unique financial challenges and opportunities. From
              student loan management to side hustles and building credit, learn
              how to navigate financial independence successfully. Gain
              essential skills and insights to make informed decisions and
              achieve long-term financial stability.
            </p>
            <button className="bg-[#00df9a] text-black font-semibold hover:bg-black hover:text-[#00df9a] p-2 w-[50%] rounded-lg mt-4">
              Learn Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
