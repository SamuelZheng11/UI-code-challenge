import React from 'react';
import './FooterComponent.scss';

// Globalization
export interface IFooterProps {
  CopyRightText: string;
  PrivacyText: string;
  TermsConditionsText: string;
  ContactText: string;
}

function FooterComponent(props: IFooterProps) {
  const generateSpacer = () => {
    return (
    <React.Fragment>
      <div className="footer-spacer">|</div>
    </React.Fragment>
    );
  }

  const generateFooterRightDetails = () => {
    return (
      <React.Fragment>
        <div>{props.PrivacyText}</div>
        {generateSpacer()}
        <div>{props.TermsConditionsText}</div>
        {generateSpacer()}
        <div>{props.ContactText}</div>
      </React.Fragment>
    );
  }


  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-copyright-container">{props.CopyRightText}</div>
        <div className="footer-details-container">{generateFooterRightDetails()}</div>
      </div>
    </div>
  );
}

export default FooterComponent;
