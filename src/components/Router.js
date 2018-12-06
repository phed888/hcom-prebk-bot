import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HCOMHome from './pages/HCOMHome';
import HCOMSearchResults from './pages/HCOMSearchResults';
import HotelPier2620 from './pages/HotelPier2620';
import HotelMarriott from './pages/HotelMarriott';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HCOMHome} />
      <Route path="/search-results" component={HCOMSearchResults} />
      <Route path="/pier2620Hotel" component={HotelPier2620} />
      <Route path="/marriottHotel" component={HotelMarriott} />
    </Switch>
  </BrowserRouter>
);

export default Router;
