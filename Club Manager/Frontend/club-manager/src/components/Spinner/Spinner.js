import React from 'react'

const Spinner = () => {
    return (
        <div className="h-screen flex bg-[#004f58] " >
            <img className="m-auto pb-32 w-16" src={require("../../assets/images/spinner.gif")} alt='Loading...' />
        </div>
    )
}

export default Spinner