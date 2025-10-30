import React, { useEffect, useState } from "react";

export default function ComponentChanges() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);

  useEffect((prev) => setCount(prev + 1), [value]);

  const onChange = ({ target }) => setValue(target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}
