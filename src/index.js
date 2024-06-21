import React from 'react';
import ReactDOM from 'react-dom/client';

// or using a ESM bundler which resolves CSS files as modules:
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./css/styles.css";

import TradePointRoot from './trade-point/trade-point-root';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

function App() {
  return <TradePointRoot />;
}

root.render(<App />);