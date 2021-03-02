import React from "react";

function Column(props) {
  const size = props.size
    .split(" ")
    .map((size) => "col-" + size)
    .join(" ");

  return <div className={size}>{props.children}</div>;
}

export default Column;
