import React from 'react';
import dashboardData from './data.json';
import IDashboardDetail from '../DashboardComponent/IDashboardDetail';

// Proxy pattern, act like we are receving real data a backend service (API)
export default function GetDashboardConent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(dashboardData[0].data.cards), 2500)
    })
}