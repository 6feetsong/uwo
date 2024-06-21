import { ITradePoint } from '../interface/trade-point.interface';

export default function TradePointItem({ label, content }: ITradePoint) {
  return (
    <dl>
      <dt>{label}</dt>
      <dd>{content}</dd>
    </dl>
  )
}
