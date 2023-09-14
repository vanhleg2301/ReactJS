import React, { useState } from "react";

const gifts = ["CPU", "Ram", "Bom"];

const Two_wayBinding = () => {
  const [gift, setGift] = useState("");

  const handleGive = () => {
    const rd = Math.floor(Math.random() * gifts.length);
    setGift(gifts[rd]);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>{gift || "Have no gift"}</h1>
      <button onClick={handleGive}>Give</button>
    </div>
  );
};

// Sửa trên giao diện mà dữ liệu thay đổi thì đc gọi là one way binding

const Two_wayBinding2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRe = () => {};
  return (
    <div style={{ padding: 30 }}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleRe}>Register</button>
    </div>
  );
};

const courses = [
  {
    id: 1,
    name: "HTML, css",
  },
  {
    id: 2,
    name: "Java",
  },
  {
    id: 3,
    name: "Loz",
  },
];

// radio
const Two_wayBinding3 = () => {
  const [checked, setChecked] = useState(3);

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div style={{ padding: 30 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

// Checkbox
const Two_wayBinding4 = () => {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
        //
      } else {
        return [...prev, id];
      }
    });
  };
  const handleSubmit = () => {
    console.log({ ids: checked });
  };

  return (
    <div style={{ padding: 30 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export { Two_wayBinding, Two_wayBinding2, Two_wayBinding3, Two_wayBinding4 };
