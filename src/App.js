import React from 'react';
import Header from './header';
import Address from './address';
import Education from './education';
import WorkHistory from './workhistory';
import Footer from './footer';

function App() {
  return (
    <main className='App'>
      { <Header /> }
      { <Address /> }
      { <Education /> }
      { <WorkHistory />}
      { <Footer /> }
    </main>
  );
}

export default App;