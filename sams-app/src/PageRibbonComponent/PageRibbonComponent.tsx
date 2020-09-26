import React from 'react';
import './PageRibbonComponent.scss';
import IBreadcrumb from '../BreadcrumbComponent/IBreadcrumb';
import BreadcrumbComponent from '../BreadcrumbComponent/BreadcrumbComponent';

interface IPageRibbonProps {
  title: string;
  breadcrumbs: IBreadcrumb[];
}

function PageRibbonComponent(props: IPageRibbonProps) {
  return (
    <div className="page-ribbon-container">
      <BreadcrumbComponent breadcrumbs={props.breadcrumbs}></BreadcrumbComponent>
      <div className="title-container">{props.title}</div>
    </div>
  );
}

export default PageRibbonComponent;
