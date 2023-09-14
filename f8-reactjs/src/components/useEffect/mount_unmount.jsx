import React, { useState } from "react";
import Basic from "./basic";
import Effct_have_deps from "./Effct_have_deps";
const Mount_unmount = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Effct_have_deps />}
    </div>
  );
};

export default Mount_unmount;
