import React from 'react';
import Header from './Header';
import Map from './Map';

export default class House extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
      </div>
    );
  }
}
