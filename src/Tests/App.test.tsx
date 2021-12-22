import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {Provider} from "react-redux";
import store from "../redux/redux-store";
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
  render(<BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>);
  const linkElement = screen.getByText(/social network/i);
  expect(linkElement).toBeInTheDocument();
});
