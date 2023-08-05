import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { BiSolidPencil } from "react-icons/bi";

import default_logo from '../assets/images/club_logo_default.png'
import default_cover from '../assets/images/cover_image_default.png'
import ProfileInputEdit from "../components/Profile/ProfileInputEdit";
import Spinner from "../components/Spinner/Spinner";
import { editClub, getClub } from "../store/actions/club";

function EditProfile({ club, user, loading, editClub, getClub }) {
  const history = useNavigate()

  const inputRef1 = useRef("");
  const inputRef2 = useRef("");

  const [loading2, setLoading2] = useState(false)

  const [coverImg, setCoverImg] = useState(club?.coverimg);
  const [logoImg, setLogoImg] = useState(club?.logoimg);
  const [name, setName] = useState(club?.name)
  const [description, setDescription] = useState(club?.description)
  const [collegename, setCollegeName] = useState(club?.collegename)
  const [president, setPresident] = useState(club?.president)
  const [vicepresident, setVicePresident] = useState(club?.vicepresident)
  const [secretary, setSecretary] = useState(club?.secretary)
  const [treasurer, setTreasurer] = useState(club?.treasurer)
  const [contactemail, setContactEmail] = useState(club?.contactemail)
  const [contactmobile, setContactMobile] = useState(club?.contactmobile)
  const [members, setMembers] = useState(club?.members.toString())
  const [clubInterests, setClubInterests] = useState(club?.interests.toString())
  const [achievements, setAchievements] = useState(club?.achievements.toString())

  useEffect(() => {
    getClub(user?._id)
  }, [user])

  useEffect(() => {
    setCoverImg(club?.coverimg)
    setLogoImg(club?.logoimg)
    setName(club?.name)
    setDescription(club?.description)
    setCollegeName(club?.collegename)
    setPresident(club?.president)
    setVicePresident(club?.vicepresident)
    setSecretary(club?.secretary)
    setTreasurer(club?.treasurer)
    setContactEmail(club?.contactemail)
    setContactMobile(club?.contactmobile)
    setMembers(club?.members.toString())
    setClubInterests(club?.interests.toString())
    setAchievements(club?.achievements.toString())
  }, [club])

  const handleImageChange = (e) => {
    var reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (e.target.name == 'coverimg') {
        setCoverImg(reader.result);
      } else {
        setLogoImg(reader.result);
      }
    };
  };

  const handleImageClick1 = () => {
    inputRef1.current.click();
  };

  const handleImageClick2 = () => {
    inputRef2.current.click();
  };

  const onSubmit = e => {
    e.preventDefault()
    setLoading2(true)
    const interests = clubInterests.toLowerCase()
    editClub(logoImg, coverImg, name, contactemail, contactmobile, president, vicepresident, secretary, treasurer, members, description, interests, achievements, history);
  }

  if (loading || loading2) {
    return <Spinner />
  }

  return (
    <div className="p-10 py-20">
      <form>
        <div className="flex justify-center space-x-40">

          <div className="flex flex-col items-center mb-4">
            {/* Club Cover */}
            <div className="relative" onClick={handleImageClick1} >
              <input
                name="coverimg"
                ref={inputRef1}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <img
                src={coverImg ? coverImg : default_cover}
                alt="dp"
                className="w-[30rem] h-80 rounded-2xl "
              />
              <div className="absolute -right-5 -top-4 bg-white border-2 rounded-full p-1">
                <BiSolidPencil style={{ fontSize: 60 }} />
              </div>
            </div>
            {/* Club Logo */}
            <div className="mt-20 relative" onClick={handleImageClick2} >
              <input
                name="logoimg"
                ref={inputRef2}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <img
                src={logoImg ? logoImg : default_logo}
                alt="dp"
                className="w-80 h-80 rounded-2xl "
              />
              <div className="absolute -right-5 -top-4 bg-white border-2 rounded-full p-1">
                <BiSolidPencil style={{ fontSize: 60 }} />
              </div>
            </div>
            <button onClick={onSubmit} className=" bg-black hover:bg-[#01616c] text-white w-[40%] h-12 justify-items-end justify-end justify-self-end mt-auto rounded-md p-2">
              <Link className="flex justify-center text-lg" to="/edit-club">
                Submit
              </Link>
            </button>
          </div>

          <div>
            <div className="flex flex-col mb-4">
              <ProfileInputEdit onChange={e => setName(e.target.value)} title={'Club Name'} value={name} type={'text'} name={'clubname'} />
              <div className="flex px-5 items-center" >
                <p className='font-bold mr-5 w-40' >Description :</p>
                <textarea
                  value={description}
                  rows={3}
                  onChange={e => setDescription(e.target.value)}
                  className="my-4 p-2 w-96 border border-gray-300"
                  placeholder="Club description..."
                />
              </div>
              <ProfileInputEdit disabled={true} title={'College Name'} value={collegename} type={'text'} name={'collegename'} />
            </div>

            <div className="mb-4">
              {/* Club Officers */}
              <h2 className="text-xl font-bold mb-2">Club Officers</h2>
              <ProfileInputEdit disabled={true} title={'President'} value={president} type={'text'} name={'president'} />
              <ProfileInputEdit onChange={e => setVicePresident(e.target.value)} title={'Vice President'} value={vicepresident} type={'text'} name={'vice president'} />
              <ProfileInputEdit onChange={e => setSecretary(e.target.value)} title={'Secretary'} value={secretary} type={'text'} name={'secretary'} />
              <ProfileInputEdit onChange={e => setTreasurer(e.target.value)} title={'Treasurer'} value={treasurer} type={'text'} name={'treasurer'} />
            </div>

            <div className="mb-4">
              {/* Contact Details */}
              <h2 className="text-xl font-bold mb-5">Contact Details</h2>
              <ProfileInputEdit onChange={e => setContactEmail(e.target.value)} title={'Email'} value={contactemail} type={'text'} name={'treasurer'} />
              <ProfileInputEdit onChange={e => setContactMobile(e.target.value)} title={'Phone Number'} value={contactmobile} type={'text'} name={'treasurer'} />
            </div>
            <div className="mb-4">
              {/* Club Members */}
              <h2 className="text-xl font-bold mb-5">Club Members</h2>
              <textarea
                cols={50}
                rows={2}
                value={members}
                onChange={e => setMembers(e.target.value)}
                className="border border-gray-300 p-2 ml-5"
                placeholder="Members"
              />
            </div>
            <div className="mb-4">
              {/* Club Members */}
              <h2 className="text-xl font-bold mb-5">Club Interests</h2>
              <textarea
                cols={50}
                rows={2}
                value={clubInterests}
                onChange={e => setClubInterests(e.target.value)}
                className="border border-gray-300 p-2 ml-5"
                placeholder="Interests"
              />
            </div>

            <div className="mb-4">
              {/* Club Achievements */}
              <h2 className="text-xl font-bold mb-5">Club Achievements</h2>
              <textarea cols={50} rows={2} value={achievements} onChange={e => setAchievements(e.target.value)} className="p-2 border border-gray-300 ml-5" placeholder="Club achievements, awards, or recognition details"></textarea>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  club: state.club.club,
  loading: state.club.loading
})

export default connect(mapStateToProps, { editClub, getClub })(EditProfile)
