import React from 'react';
import './App.css';
import ContactList from './components/contacts/ContactList';
import Header from './components/contacts/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactList />
    </div>
  );
}

export default App;
