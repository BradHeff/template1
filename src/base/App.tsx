import React from 'react';
import Header from '../components/Header';
import SecHead from '../components/SecHead';

class App extends React.Component {

  render(): JSX.Element {
    return (
      <div>
        <Header />
        <SecHead />
      </div>
    );
  }
}

export default App;
