import React from 'react';
import './App.scss';
import HeaderComponent from './HeaderComponent/HeaderComponent'
import BodyComponent from './BodyComponent/BodyComponent';
import FooterComponent from './FooterComponent/FooterComponent';
import IBreadcrumb from './BreadcrumbComponent/IBreadcrumb';
import ToTopSvg from './assets/to-top.svg';

interface ILocalizedText {
  CopyRightText: string;
  PrivacyText: string;
  TermsConditionsText: string;
  ContactText: string;
  pageRibbonTitle: string;
  breadcrumbs: IBreadcrumb[];
  noRatingsText: string;
}

const englishLocalizedTexts: ILocalizedText = {
  CopyRightText: "2019 © NETFRONT",
  PrivacyText: "Privacy",
  TermsConditionsText: "Terms & Conditons",
  ContactText: 'Contact',
  pageRibbonTitle: "My apps",
  breadcrumbs: [
    { breadcrumbTitle: "Dashboard" },
    { breadcrumbTitle: "My apps" }
  ],
  noRatingsText: "No reviews",
}

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BodyComponent 
        pageRibbonTitle={englishLocalizedTexts.pageRibbonTitle} 
        pageRibbonBreadcrumbs={englishLocalizedTexts.breadcrumbs} 
        noRatingsText={englishLocalizedTexts.noRatingsText}
      />
      <div className="to-top-button-container" ><img className="to-top-button" src={ToTopSvg}></img></div>
      <FooterComponent 
        CopyRightText={englishLocalizedTexts.CopyRightText} 
        PrivacyText= {englishLocalizedTexts.PrivacyText} 
        TermsConditionsText={englishLocalizedTexts.TermsConditionsText} 
        ContactText={englishLocalizedTexts.ContactText}
      />
    </div>
  );
}

export default App;
