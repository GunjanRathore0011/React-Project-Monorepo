import React from 'react'

const ProtectedRoute = ({ children, isAuthenticated }) => {
    return (
        isAuthenticated ? children : <div>You are not authenticated to read this...</div>
    )
}

export default ProtectedRoute