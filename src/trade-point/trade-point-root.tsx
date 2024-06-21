import React, { useEffect, useState } from 'react';
import tradePoints from '../resource/data.json';
import groupSet from '../resource/group.json';
import TradePointGroup from './trade-point-group';
import { Collapse, Button, H4 } from '@blueprintjs/core';
import { ITradePoint } from '../interface/trade-point.interface';

export default function TradePointRoot() {
  const [dataset, setData] = useState<ITradePoint[]>([]);
  const [groupNames, setGroupNames] = useState<string[]>([]);
  const [openStates, setOpenStates] = useState<boolean[]>([]);
  const arr: ITradePoint[] = [];
  useEffect(() => {
    groupSet.forEach(gs => {
      gs.content.forEach((g) => {
        tradePoints.forEach(tp => {
          if (g === tp.label) {
            const res: ITradePoint = Object.assign({}, tp, {
              group: gs.label
            });
            arr.push(res);
          }
        });
      });
    });
    setData(arr);
    const gn: string[] = ['북해', '동지중해', '서지중해', '서아프리카', '남아프리카', '동아프리카', '아라비아', '인도차이나', '남아시아', '동아시아', '극동아시아', '남태평양', '오세아니아', '북극', '남아메리카', '북아메리카', '서아메리카', '서남아메리카'];
    setGroupNames(gn);
    const openArr = [];
    for (let i = 0; i < gn.length; i++) {
      openArr.push(false);
    }
    setOpenStates(openArr);
  }, []);

  const handleClick = (i: number) => {
    openStates[i] = !openStates[i];
    setOpenStates([...openStates]);
  }

  return (
    <div style={{padding: '12px'}}>
      <H4>거래점수</H4>
      <p>last updated: 2024-06-21 10:05</p>
      {groupNames.map((name, i) => (
        <div key={i}>
          <Button style={{marginTop:'12px'}} large={true} rightIcon={openStates[i] ? 'small-minus' : 'small-plus'} onClick={() => handleClick(i)}>{name}</Button>
          <Collapse isOpen={openStates[i]}>
            <TradePointGroup
              filteredTradePoints={dataset.filter(d => d.group === name)} />
          </Collapse>
        </div>
      ))}
    </div>
  );

  
}





