import React from 'react';
import './CardComponent.scss';
import placementImage from '../assets/image-placement.svg'
import BadgeComponent from '../BadgeComponent/BadgeComponent';
import RatingsComponent from '../RatingsComponent/RatingsComponent';

interface ICardProps {
  title: string,
  published: boolean,
  user: string,
  ratingValue: number,
  ratingTotal: number,
  userTextPrefix: string,
  isFocused: boolean,
  noRatingsText: string;
}

function CardComponent(props: ICardProps) {
  return (
    <div className={`card${props.isFocused ? ' focused-card' : ''}`}>
      <div className="card-top">
        <div className="badge-container">
          <BadgeComponent isPublished={props.published}/>
        </div>
      </div>
        <div className="title-container">{props.title}</div>
        <div className="user-container">{props.userTextPrefix} {props.user}</div>
        <div className="ratings-container"><RatingsComponent ratingValue={props.ratingValue} ratingTotal={props.ratingTotal} noRatingsText={props.noRatingsText}/></div>
    </div>
  );
}

export default CardComponent;
