import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-16 bg-base-200">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><NavLink to='/dashboard/add-service'>MY ORDERS</NavLink></li>
                    <li><NavLink to='/dashboard/add-admin'>ADD A REVIEW</NavLink></li>
                    <li><NavLink to='/dashboard/add-admin'>MY PROFILE</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;