import dashboardData from './data.json';

// Proxy pattern, act like we are receving real data a backend service (API)
export default function GetDashboardConent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(dashboardData[0].data.cards), 2500)
    })
}