import React from 'react'

const ProfileInputEdit = ({ title, value, name, type, onChange, gender, disabled }) => {
    return (
        <div className='flex p-3 px-5 rounded-xl items-center' >
            <p className='font-bold mr-5 w-40' >{title} :</p>
            {gender ? (
                <select className='h-11 w-96 border-2' value={gender} onChange={onChange} name="gender" id="gender">
                    <option className='text-center' value="default">Gender</option>
                    <option className='text-center' value="male">Male</option>
                    <option className='text-center' value="female">Female</option>
                </select>
            ) : (
                <input disabled={disabled} value={value || ''} onChange={onChange} className="p-2 w-96 text-center border border-gray-300" type={type} name={name} />
            )}
        </div>
    )
}

export default ProfileInputEdit