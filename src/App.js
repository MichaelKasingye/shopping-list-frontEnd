import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import ItemModal from './components/itemModal';
import {Container} from 'reactstrap';
import AppNavBar from './components/AppNavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavBar/>
      <Container>
      <ItemModal/>
      <ShoppingList/>
      </Container>
    </div>
    </Provider>
  );
}

export default App;
