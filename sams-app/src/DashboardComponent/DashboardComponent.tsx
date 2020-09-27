import React, { useEffect } from 'react';
import './DashboardComponent.scss';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import CardComponent from '../CardComponent/CardComponent';
import GetDashboardConent from '../ContentService/MockDashboardContentService';
import IDashboardDetail from './IDashboardDetail';

interface IDashboardComponentProps {
  isLoaded: boolean;
  dashboardCardConent: IDashboardDetail[];
  ratingTotal: number;
  userTextPrefix: string;
  noRatingsText: string;
}

function DashboardComponent(props: IDashboardComponentProps) {
  const onCardClicked = () => {};

  // I believe that with GraphQL there is a intermediary step before requests are sent out. So I have moved the fetch request out of this class
  const generateDashboardCards = () => {
    return props.dashboardCardConent.map((cardDetail: IDashboardDetail) => {
      return ( 
        <React.Fragment>
          <div className="dashboard-card-container">
            <CardComponent 
              published={cardDetail.published} 
              ratingValue={cardDetail.rating}
              ratingTotal={props.ratingTotal}
              title={cardDetail.title}
              user={cardDetail.user}
              userTextPrefix={props.userTextPrefix}
              isFocused={false}
              noRatingsText={props.noRatingsText}
            />
          </div>
      </React.Fragment>
      )
    });
  }

  const generateLoader = () => {
    return (
      <div className="loader-container"><LoaderComponent/></div>
    );
  }

  return (
    <div className="dashboard">
      {props.isLoaded ? generateDashboardCards() : generateLoader()}
    </div>
  );
}

export default DashboardComponent;
