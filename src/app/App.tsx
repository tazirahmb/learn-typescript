import React from 'react';
import './App.css';
import * as Pages from '../pages';

const userData = [{
  name: 'Zira',
  lastName: 'Maruan',
  age: 12
},
{
  name: 'Wahid',
  age: 42
  },
{
  name: 'Sultan',
  age: 71
}]

function App() {
  return (
    <>
      <Pages.Home title="Zira" useLink userData={userData}>
        <p>Hello Worls</p>
      </Pages.Home>
    </>
  );
}

export default App;
