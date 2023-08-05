import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ auth: { isAuthenticated, loading } }) => {
    return !isAuthenticated && !loading ?  ( <Navigate to='/sign-in' /> ) : (<Outlet />)
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)