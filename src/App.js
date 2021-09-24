import DataCard from './components/Card';
import Header from './components/AppBar';
import React, { useState } from 'react';
import LeftPanel from './components/LeftPanel';

function App() {
  const data = [
    {
      id: 0,
      title: 'Personalized Message 1',
      description:
        'Some random Some random Some random Some random Some random Some random Some random Some random Some random Some random',
      link: 'https://google.com',
    },
    {
      id: 1,
      title: 'Personalized Message 2',
      description:
        'Some random Some random Some random Some random Some random Some random Some random Some random Some random Some random',
      link: 'https://google.com',
    },
    {
      id: 2,
      title: 'Personalized Message 3',
      description:
        'Some random Some random Some random Some random Some random Some random Some random Some random Some random Some random',
      link: 'https://google.com',
    },
  ];
  const headersData = [
    {
      label: 'LinkedInPersonalized',
    },
    {
      label: 'PersonalizedIcebreakers',
    },
    {
      label: 'BankLinkPersonalization',
    },
    {
      label: 'Contextual',
    },
  ];

  const leftPanelData = {
    LinkedInPersonalized: [
      'Button1paragraph1',
      'Button1paragraph2',
      'Button1paragraph3',
    ],
    PersonalizedIcebreakers: [
      'Button2paragraph1',
      'Button2paragraph2',
      'Button2paragraph3',
    ],
    BankLinkPersonalization: [
      'Button3paragraph1',
      'Button3paragraph2',
      'Button3paragraph3',
    ],
    Contextual: ['Button4paragraph1', 'Button4paragraph2', 'Button4paragraph3'],
  };

  const [label, setLabel] = useState('LinkedInPersonalized');
  const [rightPanel, setRightPanel] = useState(0);

  return (
    <>
      <Header
        updateLabel={setLabel}
        headersData={headersData}
        title="Here's What You Can Expect For 1000s"
      />
      <LeftPanel data={leftPanelData[label]} setRightPanel={setRightPanel} />
      <DataCard card={data[rightPanel]}></DataCard>
    </>
  );
}

export default App;
