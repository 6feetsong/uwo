import {
  Alignment,
  Navbar,
  NavbarHeading,
  NavbarDivider
} from '@blueprintjs/core';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import TradePointRoot from '../trade-point/trade-point-root';
import ProperSeasonRoot from '../proper-season/proper-season-root';

export default function LayoutRoot() {
  return (
    <div style={{position:'relative'}}>
      <Navbar style={{position:'fixed'}}>
        <Navbar.Group align={Alignment.LEFT}>
          <NavbarHeading>UWO</NavbarHeading>
          <NavbarDivider />
          <a className="bp5-button" href="/product">거래점수</a>&nbsp;
          <a className="bp5-button" href="/season">제철품목</a>
        </Navbar.Group>
      </Navbar>

      <div style={{paddingTop: '50px'}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TradePointRoot />}></Route>
            <Route path="/product" element={<TradePointRoot />}></Route>
            <Route path="/season" element={<ProperSeasonRoot />}></Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}