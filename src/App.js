import { useState, useEffect } from 'react';
const DEFAULT_NUM = 10;
function App() {
  const [num, setNum] = useState(DEFAULT_NUM);
  const [table, setTable] = useState(null);

  useEffect(() => {
    handleUpdateTable();
  }, []);

  const handleChangeNum = (e) => {
    setNum(e.target.value);
  };

  /**
   * returns core logic to make a 2D array of multiplication table
   * @returns 2D array
   */
  const makeMultiplicationTable = (num) => {
    const table = [];
    // counter starting at 1 to avoid zero padding on table
    for (let j = 1; j <= num; j++) {
      let row = new Array(num).fill(1);
      for (let i = 0; i < num; i++) {
        row[i] = (i + 1) * j;
      }
      table.push(row);
    }
    return table;
  };

  /**
   * converts table 2D array to jsx table element
   * @param {2D array} table
   * @returns table html element jsx
   */
  const print2DArray = (table) => {
    let keyCounter = 0;
    const tableEl = table.map((row, j) => {
      const rowEl = row.map((cell, i) => {
        keyCounter += 1;
        return (
          <>
            {i === j ? (
              <td
                style={{ textAlign: 'center', backgroundColor: 'yellow' }}
                key={keyCounter.toString()}
                title={`${i}*${j}`}
              >
                {cell}
              </td>
            ) : i === 0 || j === 0 ? (
              <th
                style={{ textAlign: 'center', backgroundColor: 'lightblue' }}
                key={keyCounter.toString()}
                title={`${i}*${j}`}
              >
                {cell}
              </th>
            ) : (
              <td
                style={{ textAlign: 'center', backgroundColor: 'lightblue' }}
                key={keyCounter.toString()}
                title={`${i}*${j}`}
              >
                {cell}
              </td>
            )}
          </>
        );
      });
      return <tr key={j}>{rowEl}</tr>;
    });
    return (
      <table style={{ width: '100%' }}>
        <tbody>{tableEl}</tbody>
      </table>
    );
  };

  const handleUpdateTable = () => {
    const tmpTable = makeMultiplicationTable(num);
    console.table(tmpTable);
    setTable(print2DArray(tmpTable));
  };

  return (
    <div className="App">
      <h1>
        Multiplication table: <mark> {num} </mark>
      </h1>
      <input value={num} onChange={handleChangeNum}></input>
      <button onClick={handleUpdateTable}>Update</button>
      <hr />
      {table}
    </div>
  );
}

export default App;
