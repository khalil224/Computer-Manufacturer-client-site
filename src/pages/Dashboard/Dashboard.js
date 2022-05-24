import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardleftSide from './DashboardleftSide';

const Dashboard = () => {
    return (
        <div>
            <DashboardleftSide>
                <Outlet></Outlet>
            </DashboardleftSide>
        </div>
    );
};

export default Dashboard;