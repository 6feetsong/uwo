// or using a ESM bundler which resolves CSS files as modules:
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./css/styles.css";

import LayoutRoot from './layout-root/layout-root';
import TradePointRoot from "./trade-point/trade-point-root";

function App() {
  return (
    <TradePointRoot />
  );
}

export default App;
