import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(true);

  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  if (num % 3 === 0) {
    faceShowFlag || setfaceShowFlag(true);
  } else {
    faceShowFlag && setfaceShowFlag(false);
  }

  return (
    <>
      <p>テストメッセージ</p>
      <ColorfulMessage color="red" message="明日は晴れ" />
      <ColorfulMessage color="green" message="元気です" />
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(=^・^=)</p>}
    </>
  );
};

export default App;
