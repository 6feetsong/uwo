import React from 'react';
import TradePointItem from './trade-point-item';


export default function TradePointGroup({ filteredTradePoints }) {
  return (
    <div>
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
