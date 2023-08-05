import React from "react";

const ClubCard = ({ club }) => {
  return (
    <div className="bg-[#01616c] rounded-[25px] mt-2 ml-4 flex flex-col justify-center border border-black h-[150px] w-[900px]">
      <div className="ml-3">
        <h3 className="text-white text-4xl font-bold mb-1">{club.name}</h3>
        <p className="text-[1.15rem] text-gray-200">{club.description}</p>
      </div>
    </div>
  );
};

export default ClubCard;
