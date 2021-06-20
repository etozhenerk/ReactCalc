import React from "react";

export const HistoryItem = ({transaction: {add, description, amount, id}, delTransaction}) => (
  <li className={`history__item ${add ? 'history__item-plus' : 'history__item-minus'}`}>
    {description}
    <span className="history__money">{add ? `+${amount}`: `-${amount}`} ₽</span>
    <button className="history__delete" onClick = {() => delTransaction(id)}>x</button>
  </li>
);
