import React from 'react';

export default function TradePointItem({ label, content }) {
  return (
    <dl>
      <dt>{label}</dt>
      <dd>{content}</dd>
    </dl>
  )
}
