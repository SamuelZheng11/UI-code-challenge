import React from 'react';
import './BodyComponent.scss';
import PageRibbonComponent from '../PageRibbonComponent/PageRibbonComponent';
import IBreadcrumb from '../BreadcrumbComponent/IBreadcrumb';

interface IBodyProps {
  pageRibbonTitle: string;
  pageRibbonBreadcrumbs: IBreadcrumb[];
}

function BodyComponent(props: IBodyProps) {
  return (
    <div className="body-container">
      <PageRibbonComponent title={props.pageRibbonTitle} breadcrumbs={props.pageRibbonBreadcrumbs}/>
      <div className="body-content">hello</div>
    </div>
  );
}

export default BodyComponent;
