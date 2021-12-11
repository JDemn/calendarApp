import React from 'react'

export const Navbar = () => {
    return (
        <div className = "navbar navbar-dark bg-dark mb-4 p-2">
            <span className = "navbar-brand">
                Deniz
            </span>
            <button className = "btn btn-outline-danger">
                <i className = "fas fa-sign-out-alt"></i>
                <span> logout</span>
            </button>
        </div>
    )
}
