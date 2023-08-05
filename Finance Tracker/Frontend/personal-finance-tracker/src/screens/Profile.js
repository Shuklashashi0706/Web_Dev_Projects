import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const ProfilePage = ({ user }) => {
  console.log(user);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phoneNumber, setPhoneNumber] = useState(user?.mobile);
  const [gender, setGender] = useState("Male");

  useEffect(() => {
    setName(user?.name)
    setEmail(user?.email)
    setPhoneNumber(user?.mobile)
  }, [user])

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions with the submitted data here
    console.log("Submitted:", { name, email, phoneNumber, gender });
  };

  return (
    <div className="bg-[#2699fb]  flex justify-center  h-screen">
      <div className="max-w-[80%] pl-[30px] mt-[40px]">
        <div className="bg-gray-100 w-[100rem] h-[45rem] flex justify-center p-3 my-10 rounded-2xl">
          <form onSubmit={handleSubmit}>
            <h2 className="text-8xl mb-8 underline">Profile</h2>
            <label>
              <span className="text-3xl">Name:</span>
              <input
                disabled={true}
                className="text-2xl"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </label>
            <br />
            <br />
            <label>
              <span className="text-3xl">Email:</span>
              <input disabled={true} className='text-3xl' type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <br />
            <label>
              <span className="text-3xl" >Phone Number:</span>
              <input
                disabled={true}
                className="text-3xl"
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </label>
            <br />
            <br />
            <label className="mt-3">
              <span className="text-3xl">Gender: {gender}</span>
              {/* <select className="text-3xl" value={gender} onChange={handleGenderChange}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select> */}
            </label>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(ProfilePage)
