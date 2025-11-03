import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {

    return (
        <div className="flex flex-col gap-6 items-center">
            <aside className='flex gap-2'>
                <Link to="profile">Profile</Link>
                <Link to="settings">Settings</Link>
                <Link to="reports">Reports</Link>
                <Link to="products?category=shoes&page=3"> Query Params </Link>
            </aside>
            <main>
                <Outlet /> 
            </main>
        </div>

    )
}

export default Dashboard