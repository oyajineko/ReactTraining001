import React from "react";

const App = () => {
  const onClickButton = () => alert("ueda baka");
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={contentStyle}>こんにちは！</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
