import React from "react";

function Flex({ style, children }) {
  return <div className={`flex ${style}`}>{children}</div>;
}

export default Flex;
