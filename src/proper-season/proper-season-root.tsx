import React, { useEffect, useState } from 'react';
import { Checkbox, H4, Section } from '@blueprintjs/core';

export default function ProperSeasonRoot() {

  const state = {
    whiteGold: false
  }

  const [month, setMonth] = useState(0);
  useEffect(() => {
    setMonth(3);
  }, []);

  const toggleCheck = (target: string) => {
    // state[target] = !state[target];
  }

  return (
    <div style={{padding: '12px'}}>
      <H4>제철품목</H4>

      <Checkbox label="백금" checked={state.whiteGold} onChange={() => toggleCheck('whiteGold')}/>

      <Section title="백금">
        <table className="bp5-html-table" style={{width:'100%'}}>
          <tbody>
            <tr>
              <td>모삼비크</td>
              <td className={`season-low ${month === 1 ? "season-active" : ""}`}>비</td>
              <td className={`season-low ${month === 2 ? "season-active" : ""}`}>비</td>
              <td className={`season-low ${month === 3 ? "season-active" : ""}`}>비</td>
              <td className={`season-low ${month === 4 ? "season-active" : ""}`}>비</td>
              <td className={`season-peak ${month === 5 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 6 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 7 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 8 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 9 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 10 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 11 ? "season-active" : ""}`}>성</td>
              <td className={`season-low ${month === 12 ? "season-active" : ""}`}>비</td>
            </tr>
            <tr>
              <td>칼리마니</td>
              <td className={`season-low ${month === 1 ? "season-active" : ""}`}>비</td>
              <td className={`season-low ${month === 2 ? "season-active" : ""}`}>비</td>
              <td className={`season-low ${month === 3 ? "season-active" : ""}`}>비</td>
              <td className={`season-low ${month === 4 ? "season-active" : ""}`}>비</td>
              <td className={`season-peak ${month === 5 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 6 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 7 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 8 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 9 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 10 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 11 ? "season-active" : ""}`}>성</td>
              <td className={`season-low ${month === 12 ? "season-active" : ""}`}>비</td>
            </tr>
            <tr>
              <td>소팔라</td>
              <td className={`season-low ${month === 1 ? "season-active" : ""}`}>비</td>
              <td className={`season-low ${month === 2 ? "season-active" : ""}`}>비</td>
              <td className={`season-low ${month === 3 ? "season-active" : ""}`}>비</td>
              <td className={`season-low ${month === 4 ? "season-active" : ""}`}>비</td>
              <td className={`season-peak ${month === 5 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 6 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 7 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 8 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 9 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 10 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 11 ? "season-active" : ""}`}>성</td>
              <td className={`season-low ${month === 12 ? "season-active" : ""}`}>비</td>
            </tr>
            <tr>
              <td>나탈</td>
              <td className={`season-low ${month === 1 ? "season-active" : ""}`}>비</td>
              <td className={`season-low ${month === 2 ? "season-active" : ""}`}>비</td>
              <td className={`season-flat ${month === 3 ? "season-active" : ""}`}>평</td>
              <td className={`season-flat ${month === 4 ? "season-active" : ""}`}>평</td>
              <td className={`season-flat ${month === 5 ? "season-active" : ""}`}>평</td>
              <td className={`season-peak ${month === 6 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 7 ? "season-active" : ""}`}>성</td>
              <td className={`season-peak ${month === 8 ? "season-active" : ""}`}>성</td>
              <td className={`season-flat ${month === 9 ? "season-active" : ""}`}>평</td>
              <td className={`season-flat ${month === 10 ? "season-active" : ""}`}>평</td>
              <td className={`season-flat ${month === 11 ? "season-active" : ""}`}>평</td>
              <td className={`season-low ${month === 12 ? "season-active" : ""}`}>비</td>
            </tr>
          </tbody>
        </table>
      </Section>
    </div>
  );

}
