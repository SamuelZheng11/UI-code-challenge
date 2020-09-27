import React from 'react';
import IBreadcrumb from './IBreadcrumb';
import './BreadcrumbComponent.scss';

interface IBreadcrumbProps {
  breadcrumbs: IBreadcrumb[];
}

function BreadcrumbComponent(props: IBreadcrumbProps) {
  const generateBreadcrumbSeperator = () => {
    return(
      <React.Fragment>
        <div className="breadcrumb-seperator">></div>
      </React.Fragment>
    );
  }

  const generateBreadcrumbs = () => {
    return props.breadcrumbs.map((breadcrumb: IBreadcrumb) => {
      if (props.breadcrumbs.indexOf(breadcrumb) === props.breadcrumbs.length - 1) {
        return (
          <React.Fragment>
            {breadcrumb.breadcrumbTitle}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            {breadcrumb.breadcrumbTitle}
            {generateBreadcrumbSeperator()}
          </React.Fragment>
        );
      }
    });
  }

  return (
    <div className="breadcrumb">
      {generateBreadcrumbs()}
    </div>
  );
}

export default BreadcrumbComponent;
