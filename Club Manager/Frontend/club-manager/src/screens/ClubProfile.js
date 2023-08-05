import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getClub } from '../store/actions/club'
import { BiSolidPencil, BiSolidUser } from "react-icons/bi";

import default_logo from '../assets/images/club_logo_default.png'
import default_cover from '../assets/images/cover_image_default.png'
import Spinner from '../components/Spinner/Spinner';

function ClubProfile({ club, user, loading, loading2, getClub }) {
  useEffect(() => {
    getClub(user?._id)
  }, [user])

  if (loading || loading2) {
    return <Spinner />
  }

  return (club === null ? (
    <div className='h-screen p-16 px-20' >
      <p className='text-teal-500 font-bold text-4xl' >Club Dashboard</p>
      <div className='flex mt-7' >
        <BiSolidUser style={{ fontSize: 30, marginRight: 10 }} />
        <p className='text-blue-500 font-bold text-2xl' >Welcome {user?.name}</p>
      </div>
      <p className='text-black text-lg mt-3 ml-1 mb-10' >You have not yet setup a club, please add some info</p>
      <Link to='/edit-club' >
        <button className='bg-[#1e848f] text-white p-3 px-5 rounded-lg' >Create Club</button>
      </Link>
    </div>
  ) : (

    <div className="mx-auto px-14 my-5">
      <Link className="absolute top-32 bg-black hover:bg-[#01616c] text-white w-[10%] h-[40px] rounded-md p-2" to="/edit-club">
        <button className="flex">
          <BiSolidPencil style={{ fontSize: 23, marginRight: 9 }} />
          Edit Club
        </button>
      </Link>
      {/* Club Logo */}
      <div className='flex justify-between items-center'  >
        <img src={club?.logoimg ? club?.logoimg : default_logo} alt="Logo" className='w-52 h-52 ml-52 rounded-xl' />
        <img src={club?.coverimg ? club?.coverimg : default_cover} alt="Club Logo" className='w-[42%] h-80 rounded-2xl' />
      </div>
      <div className="flex justify-center space-x-60 mt-10">
        <div className="flex flex-col items-center text-center w-[30rem]">
          <div className="mb-4">
            {/* Club Name */}
            <h1 className="text-3xl underline font-bold">{club?.name}</h1>
            {/* Club Description */}
            <p className="text-gray-600 mt-7">{club?.description}</p>
          </div>
          <div className="mb-4 flex">
            {/* College Name */}
            <p>College name :</p>
            <p className="text-gray-600 ml-3">{club?.collegename}</p>
          </div>
          <div className="mb-4">
            {/* Club Contact Information */}
            <p className="text-gray-700 font-bold text-lg">Contact details: </p>
            <p className="text-gray-600">email : {club?.contactemail}</p>
            <p className="text-gray-600">phone : {club?.contactmobile}</p>
            {club?.socialmedia?.length > 0 && (
              <p className="text-gray-600">social media handles :</p>
            )}
          </div>
        </div>
        <div className="w-[30rem]">
          <div className="mb-4">
            {/* Club Officers */}
            <h2 className="text-xl font-bold mb-2">Club Officers</h2>
            <ul className="list-disc pl-6">
              <li>President: {club?.president}</li>
              <li>Vice President: {club?.vicepresident}</li>
              <li>Secretary: {club?.secretary}</li>
              <li>Treasurer: {club?.treasurer}</li>
            </ul>
          </div>
          {/* Club Members */}
          {club?.members?.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-bold">Club Members</h2>
              <ul className="flex flex-wrap w-[25rem]">
                {club?.members.map((member) => (
                  <li key={member} className='bg-blue-600 mt-3 mr-5 text-white p-1 px-2 rounded-xl' >{member}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Club Achievements */}
          {club?.achievements[0]?.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Club Achievements</h2>
              <ul className="flex flex-wrap w-[25rem]">
                {club?.achievements.map((achievements) => (
                  <li key={achievements} className='bg-cyan-600 mt-3 mr-5 text-white p-1 px-2 rounded-xl' >{achievements}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
  )
}

const mapStateToProps = state => ({
  club: state.club.club,
  user: state.auth.user,
  loading: state.auth.loading,
  loading2: state.club.loading
})

export default connect(mapStateToProps, { getClub })(ClubProfile)