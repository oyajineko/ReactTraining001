import React from "react";

const App = () => {
  const onClickButton = () => alert("ueda baka");
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
