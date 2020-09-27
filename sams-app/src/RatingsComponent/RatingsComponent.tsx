import React from 'react';
import './RatingsComponent.scss';
import goldStar from '../assets/single-star-gold.svg';
import greyStar from '../assets/single-star-grey.svg';

interface IRatingsProps {
  ratingValue: number;
  ratingTotal: number;
  noRatingsText: string;
}

function RatingsComponent(props: IRatingsProps) {
  const generateGreyStar = () => {
    return(
      <React.Fragment>
          <img className="ratings-star" src={greyStar} alt={''}></img>
      </React.Fragment>
    );
  }

  const generateGoldStar = () => {
    return(
      <React.Fragment>
          <img className="ratings-star" src={goldStar} alt={''}></img>
      </React.Fragment>
    );
  }

  // assumption if 'rating' > 'total', then it will assign 'total' number of stars
  // i.e. value = 6, total = 5 => number of filled starts is 5
  const generateStars = () => {
    const starsFragment = [];
    if (props.ratingTotal < props.ratingValue) {
      for(let i = 0; i < props.ratingTotal; i++) {
        starsFragment.push(generateGoldStar());
      }
    } else {
      for(let i = 0; i < Math.floor(props.ratingValue); i++) {
        starsFragment.push(generateGoldStar());
      }
      for(let i = 0; i < (props.ratingTotal - Math.floor(props.ratingValue)); i++) {
        starsFragment.push(generateGreyStar());
      }
    }
    return starsFragment;
  }

  return (
  <div className="ratings">
    {generateStars()}
    <div className="ratings-value">{props.ratingValue ? props.ratingValue : props.noRatingsText}</div>
  </div>
  );
}

export default RatingsComponent;
