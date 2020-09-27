import React, { useEffect } from 'react';
import './BodyComponent.scss';
import PageRibbonComponent from '../PageRibbonComponent/PageRibbonComponent';
import IBreadcrumb from '../BreadcrumbComponent/IBreadcrumb';
import DashboardComponent from '../DashboardComponent/DashboardComponent';
import IDashboardDetail from '../DashboardComponent/IDashboardDetail';
import GetDashboardConent from '../ContentService/MockDashboardContentService';

interface IBodyProps {
  pageRibbonTitle: string;
  pageRibbonBreadcrumbs: IBreadcrumb[];
  noRatingsText: string;
}

function BodyComponent(props: IBodyProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [dashboardData, setDashboardData] = React.useState([] as IDashboardDetail[]);

  // Equivelent to ComponentDidMount
  // Send off the query to get Dashboard data (this is mocked in this application)
  useEffect(() => {
    GetDashboardConent().then((dashboardConentPayload: unknown) => {
      setDashboardData(dashboardConentPayload as IDashboardDetail[]);
      setIsLoaded(true);
    })
  })

  return (
    <div className="body">
      <PageRibbonComponent title={props.pageRibbonTitle} breadcrumbs={props.pageRibbonBreadcrumbs}/>
      <div className="body-content">
        <DashboardComponent isLoaded={isLoaded} dashboardCardConent={dashboardData} userTextPrefix="by" ratingTotal={5} noRatingsText={props.noRatingsText}/>
      </div>
    </div>
  );
}

export default BodyComponent;
