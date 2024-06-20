import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import tradePoints from '../resource/data.json';
import groupSet from '../resource/group.json';
import TradePointGroup from './trade-point-group';

export default function TradePointRoot() {

  const [dataset, setData] = useState([]);
  const arr = [];
  useEffect(() => {
    groupSet.forEach(gs => {
      gs.content.forEach((g) => {
        tradePoints.forEach(tp => {
          if (g === tp.label) {
            arr.push(Object.assign({}, tp, {
              group: gs.label
            }));
          }
        });
      });
    });
    setData(arr);
  }, []);
  
  return (
    <div>
      <h2>거래점수</h2>
      <TradePointGroup
        title='오세아니아'
        filteredTradePoints={dataset.filter(d => d.group === '오세아니아')} />
      <TradePointGroup
        title='태평양'
        filteredTradePoints={dataset.filter(d => d.group === '태평양')} />
    </div>
  );
}

