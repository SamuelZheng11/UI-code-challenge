import React from 'react';
import IBreadcrumb from './IBreadcrumb';
import './BreadcrumbComponent.scss';

interface IBreadcrumbProps {
  breadcrumbs: IBreadcrumb[];
}

function BreadcrumbComponent(props: IBreadcrumbProps) {
  return (
    <div className="breadcrumb-container">
      breadcrumbs
    </div>
  );
}

export default BreadcrumbComponent;
