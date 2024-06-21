import React, { useEffect, useState } from 'react';
import tradePoints from '../resource/data.json';
import groupSet from '../resource/group.json';
import TradePointGroup from './trade-point-group';
import { Collapse, Button } from '@blueprintjs/core';

export default function TradePointRoot() {
  const [dataset, setData] = useState([]);
  const [groupNames, setGroupNames] = useState([]);
  const [openStates, setOpenStates] = useState([]);
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
    const gn = ['북해', '동지중해', '서지중해', '서아프리카', '남아프리카', '동아프리카', '아라비아', '인도차이나', '남아시아', '동아시아', '극동아시아', '남태평양', '오세아니아', '북극', '남아메리카', '북아메리카', '서아메리카', '서남아메리카'];
    setGroupNames(gn);
    const openArr = [];
    for (let i = 0; i < gn.length; i++) {
      openArr.push(false);
    }
    setOpenStates(openArr);
  }, []);

  const handleClick = (i) => {
    openStates[i] = !openStates[i];
    setOpenStates([...openStates]);
  }

  return (
    <div>
      <h2>거래점수</h2>
      <p>last updated: 2024-06-21 09:38:53</p>
      {groupNames.map((name, i) => (
        <div key={i}>
          <Button style={{marginTop:'12px'}} large={true} rightIcon={openStates[i] ? 'small-minus' : 'small-plus'} onClick={() => handleClick(i)}>{name}</Button>
          <Collapse isOpen={openStates[i]}>
            <TradePointGroup
              title={name}
              filteredTradePoints={dataset.filter(d => d.group === name)} />
          </Collapse>
        </div>
      ))}
    </div>
  );

  
}





