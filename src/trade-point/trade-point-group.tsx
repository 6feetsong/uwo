import TradePointItem from './trade-point-item';
import { ITradePoint } from '../interface/trade-point.interface';

export default function TradePointGroup({ filteredTradePoints }: { filteredTradePoints: ITradePoint[] }) {
  return (
    <div>
      <ul>
        {filteredTradePoints.map((d: ITradePoint, i) => (
          <li key={i}>
            <TradePointItem label={d.label} content={d.content} />
          </li>
        ))}
      </ul>
    </div>
  )

}
