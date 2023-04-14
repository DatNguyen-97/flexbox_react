import React, { useState } from "react";

const Caculator = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0)

  const [total, setTotal] = useState(0)
   const handleClickBtnCong = (e) => {
    // console.log('click-button', e);
    setTotal(Number(count) + Number(count2))
  };

  const handleClickBtnTru = (e) => {
    // console.log('click-button', e);
    setTotal(Number(count) - Number(count2))
  };

  const handleClickBtnReset = (e) => {
    // console.log('click-button', e);
    setTotal(0)
    setCount(0)
    setCount2(0)
  };

  const handleInput = (e) => {
    setCount(e.target.value);
  };

  const handleInput2 = (e) => {

    setCount2(e.target.value);
  };

//   console.log(typeof count);

  return (
    <div className="">
      <input
        value={count}
        type="number"
        placeholder="Nhập value 1"
        onChange={(e) => handleInput(e)}
      />
      <input
      value={count2}
        type="number"
        placeholder="Nhập value 2"
        onChange={(e) => handleInput2(e)}
      />
        <button onClick={(e) => handleClickBtnCong(e)}>Cong</button>
        <button onClick={(e) => handleClickBtnTru(e)}>Tru</button>
        <button onClick={(e) => handleClickBtnReset(e)}>Reset</button>
      <div>
        Result is : {total}
      </div>
    </div>
  );
};

export default Caculator;