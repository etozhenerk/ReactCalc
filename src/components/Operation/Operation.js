import React from "react";

export const Operation = ({ addTransaction, addDescription, addAmount, description, amount }) => (
  <section className="operation">
    <h3>Новая операция</h3>
    <form id="form">
      <label>
        <input
          type="text"
          className="operation__fields operation__name"
          placeholder="Наименование операции"
          onChange = {addDescription}
          value = {description}
          
        />
      </label>
      <label>
        <input
          type="number"
          className="operation__fields operation__amount"
          placeholder="Введите сумму"
          onChange = {addAmount}
          value = {amount}
          onInput = {(e) => {
            e.target.value = e.target.value.replace(/\D/g,'');
          }}
        />
      </label>
      <div className="operation__btns">
        <button
          onClick={() => {
            addTransaction(false);
          }}
          type="button"
          className="operation__btn operation__btn-subtract"
        >
          РАСХОД
        </button>
        <button
          onClick={() => {
            addTransaction(true);
          }}
          type="button"
          className="operation__btn operation__btn-add"
        >
          ДОХОД
        </button>
      </div>
    </form>
  </section>
);
