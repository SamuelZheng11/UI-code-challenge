import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent'
import BodyComponent from './BodyComponent/BodyComponent';
import FooterComponent from './FooterComponent/FooterComponent';

interface ILocalizedText {
  CopyRightText: string;
  PrivacyText: string;
  TermsConditionsText: string;
  ContactText: string;
  pageRibbonTitle: string;
}

const englishLocalizedTexts: ILocalizedText = {
  CopyRightText: "2019 © NETFRONT",
  PrivacyText: "Privacy",
  TermsConditionsText: "Terms & Conditons",
  ContactText: 'Contact',
  pageRibbonTitle: "My apps"
}

function App() {
  return (
    <div>
      <HeaderComponent/>
      <BodyComponent pageRibbonTitle={englishLocalizedTexts.pageRibbonTitle} pageRibbonBreadcrumbs={[]}/>
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
