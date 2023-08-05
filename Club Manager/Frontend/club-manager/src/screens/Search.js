import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchClubs } from "../store/actions/club";
import ClubCard from "../components/Clubs/ClubCard";

const Search = ({ clubs, fetchClubs }) => {
  useEffect(() => {
    fetchClubs();
  }, []);

  const [interest, setInterest] = useState("");
  const [recommendedClubs, setRecommendedClubs] = useState(clubs);

  useEffect(() => {
    setRecommendedClubs(clubs);
  }, [clubs]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInterest = interest.toLowerCase();
    const searchClubs = clubs.filter((club) =>
      club.interests.includes(userInterest)
    );
    setRecommendedClubs(searchClubs);
  };

  return (
    <>
      <div className="bg-[#01616c] text-white">
        <h1 className="text-6xl font-bold p-5">Club Recommendation</h1>
      </div>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Section */}
        <div className="bg-gray-200 py-8 lg:w-1/3 px-2">
          <form onSubmit={handleSubmit}>
            <label className="block ml-1">
              <p className="font-bold text-2xl mb-4">
                Enter your interests:
              </p>
              <input
                className="border border-black w-[85%] rounded-md mb-4 h-[35px] px-2"
                type="text"
                placeholder="Interests..."
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
              />
            </label>
            <button
              className="ml-1 p-2 bg-black hover:bg-[#01616c] text-white  px-5 rounded-lg"
              onSubmit={handleSubmit}
              type="submit"
            >
              Recommend
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="bg-white  lg:w-2/3">
          <div className="ml-4 mt-8">
            <h2 className="text-2xl font-bold ml-4">Recommended Clubs:</h2>
            {recommendedClubs.length > 0 &&
              recommendedClubs.map((club) => (
                <ClubCard key={club._id} club={club} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  clubs: state.club.clubs,
});

export default connect(mapStateToProps, { fetchClubs })(Search);
