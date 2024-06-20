import React from 'react';
import ReactDOM from 'react-dom/client';

import TradePointRoot from './trade-point/trade-point-root';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
  return <TradePointRoot />;
}

root.render(<App />);