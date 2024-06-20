import React from 'react';
import TradePointItem from './trade-point-item';


export default function TradePointGroup({ filteredTradePoints, title }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {filteredTradePoints.map((d) => (
          <li key={d.label}>
            <TradePointItem label={d.label} content={d.content} />
          </li>
        ))}
      </ul>
    </div>
  )

}
