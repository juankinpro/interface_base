// src/components/TableMain.js
import React from 'react';

/*
 * Componente TableMain
 */
const TableMain = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div className="table-container">
      <table className="table table-striped p-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => (
            <tr key={datas.id}>
              <td>{datas.id}</td>
              <td>{datas.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMain;
