import React from 'react';
import './BadgeComponent.scss';

interface IBadgeProps {
  isPublished: boolean,
}

function BadgeComponent(props: IBadgeProps) {
  return (
    <div className={`badge${props.isPublished ? ' published' : ' unpublished'}`}>
      {props.isPublished ? "published" : "Unpublished"}
    </div>
  );
}

export default BadgeComponent;
