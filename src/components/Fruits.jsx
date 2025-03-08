import React from "react";

const Fruits = () => {
  const fruits = [
    { name: "Apple", price: 5 },
    { name: "Banana", price: 8 },
    { name: "Orange", price: 7 },
    { name: "Pear", price: 10 },
    { name: "Grape", price: 15 },
    { name: "Cherry", price: 12 },
  ];
  return (
    <div>
      <h1>Fruit Inventory:</h1>
      <ul>
        {fruits.map((fruit) =>
          fruit.price > 0 ? (
            <li key={fruit.name}>
              <h3>
                {fruit.name} R{fruit.price}
              </h3>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default Fruits;
