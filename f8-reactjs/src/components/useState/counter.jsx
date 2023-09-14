import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const handleUp = () => {
    setCounter(counter + 10);
  };

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <button onClick={handleUp}>Up</button>
    </div>
  );
};

// callback
const Counter2 = () => {
  const [counter2, setCounter2] = useState(0);

  const handleUp2 = () => {
    setCounter2((prevState) => prevState + 1);
  };

  return (
    <div className="counter">
      <h1>{counter2}</h1>
      <button onClick={handleUp2}>Up</button>
    </div>
  );
};

// initial + callback
const orders = [100, 200, 300];

const Counter3 = () => {
  const [counter3, setCounter3] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);

    console.log(total);
    return total;
  });

  const handleUp3 = () => {
    setCounter3((prevState) => prevState + 1);
  };

  return (
    <div className="counter">
      <h1>{counter3}</h1>
      <button onClick={handleUp3}>Up</button>
    </div>
  );
};

const Counter4 = () => {
  const [info, setsetInfo] = useState({
    name: "Le Diem Quynh",
    age: 18,
    address: "Hoc Vien Ngan Hang",
  });

  const handleUpdate = () => {
    setsetInfo((prev) => ({ ...prev, bio: "An cut" }));
  };

  return (
    <div className="counter">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Up</button>
    </div>
  );
};
export { Counter, Counter2, Counter3, Counter4 }; // Export individual components
