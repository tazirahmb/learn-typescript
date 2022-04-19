import React from 'react';
import logo from '../../assets/logo.svg';
import * as Types from './types'


const user: Types.User = {
  name: 'ZIra',
  lastName: 'Marwan',
  age: 23
}

function Home({ title = 'React', useLink, children, userData = [user] }: Types.Props) {

  const theWindowState: Types.WindowState = 'Locked';


  // untuk function, deklarasinya bisa secara function global
  // jadi 1 type mencakup params dan outputnya type apa...
  const fullName: Types.FullName =
    (firstName, lastName) =>
      lastName ? `${firstName} ${lastName}` : firstName; 
  
  // ...atau bisa juga satu-satu
  // jadi di paramsnya dan juga di functionnya untuk output
  const fullNameOtherVariation =
    (firstName: string, lastName?: string): string =>
      lastName ? `${lastName} ${firstName}` : firstName; 

  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {useLink && <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {title}
        </a>}
        {userData.map(user => (
          <>
            <p>Name: {fullName(user.name, user.lastName)}</p>
            <p>Name other variation: {fullNameOtherVariation(user.name, user.lastName)}</p>
            <p>Age: {user.age}</p>
          </>
        ))}
        <p>WIndows State: {theWindowState}</p>
        {children}
      </header>
    </div>
  );
};

export default Home;