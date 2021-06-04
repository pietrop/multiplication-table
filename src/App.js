import { useState, useEffect } from 'react';
const DEFAULT_NUM = 10;
function App() {
  const [num, setNum] = useState(DEFAULT_NUM);
  const [table, setTable] = useState(null);

  useEffect(() => {
    const tmpTable = printMultiplicationTable();
    setTable(tmpTable);
  }, []);

  const handleChangeNum = (e) => {
    setNum(e.target.value);
  };

  const printMultiplicationTable = () => {
    let table = [];
    let row = [];
    let counter = 0;
    // counter starting at 1 to avoid zero padding on table
    for (let j = 1; j <= num; j++) {
      row = new Array(num).fill(1).map((n, i) => {
        // i+1 to start at 1 and not at zero
        counter += 1;
        return (
          <td
            style={{ textAlign: 'center', backgroundColor: i + 1 === j ? 'yellow' : 'lightblue' }}
            key={counter}
          >
            {i + 1 === j ? (
              <b title={`${i + 1}*${j}`}>{(i + 1) * j}</b>
            ) : (
              <span title={`${i + 1}*${j}`}>{(i + 1) * j}</span>
            )}
          </td>
        );
      });
      table.push(<tr key={j}>{row}</tr>);
    }
    return <table style={{ width: '100%' }}>{table}</table>;
  };

  const handleUpdateTable = () => {
    const tmpTable = printMultiplicationTable(num);
    setTable(tmpTable);
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
