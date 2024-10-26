"use client";
import React, { useState } from "react";
import "../app/menu.css";

// Define a type for menu items
interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

// Define a type for the categories
interface Categories {
  Protein: MenuItem[];
  Cover: MenuItem[];
  Sauce: MenuItem[];
  Toppings: MenuItem[];
}

// Define a union type for the category keys
type CategoryKey = keyof Categories;

export default function HomePage() {
  // Categories and their items
  const categories = {
    Protein: [
      {
        id: 1,
        name: "Shawerma",
        price: 19.4,
        image: "/images/menu/shawerma.png",
        description: "Enjoy the tasty shawerma that is made with love.",
      },
      {
        id: 2,
        name: "Falafel",
        price: 12.9,
        image: "/images/menu/shawerma.png",
        description: "Enjoy the tasty falafel that is made with love.",
      },
      {
        id: 3,
        name: "Gyro",
        price: 16,
        image: "/images/menu/shawerma.png",
        description: "Enjoy the tasty Gyro for special time.",
      },
    ],
    Cover: [
      {
        id: 1,
        name: "Shawerma",
        price: 19.4,
        image: "/images/menu/shawerma.png",
        description: "Enjoy the tasty shawerma that is made with love.",
      },
      {
        id: 2,
        name: "Falafel",
        price: 12.9,
        image: "/images/menu/shawerma.png",
        description: "Enjoy the tasty falafel that is made with love.",
      },
    ],
    Sauce: [
      {
        id: 3,
        name: "Gyro",
        price: 16,
        image: "/images/menu/shawerma.png",
        description: "Enjoy the tasty Gyro for special time.",
      },
      {
        id: 3,
        name: "Gyro",
        price: 16,
        image: "/images/menu/shawerma.png",
        description: "Enjoy the tasty Gyro for special time.",
      },
    ],
    Toppings: [
      {
        id: 2,
        name: "Falafel",
        price: 12.9,
        image: "/images/menu/shawerma.png",
        description: "Enjoy the tasty falafel that is made with love.",
      },
      {
        id: 2,
        name: "Falafel",
        price: 12.9,
        image: "/images/menu/shawerma.png",
        description: "Enjoy the tasty falafel that is made with love.",
      },
    ],
  };

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>("Protein");

  // Array of category keys for easy navigation
  const categoryKeys = Object.keys(categories) as CategoryKey[];

  // Function to go to the next category
  const goToNextCategory = () => {
    const currentIndex = categoryKeys.indexOf(selectedCategory);
    if (currentIndex < categoryKeys.length - 1) {
      setSelectedCategory(categoryKeys[currentIndex + 1]);
    }
  };

  // Function to render items based on the selected category
  const renderItems = () => {
    return categories[selectedCategory].map((item: MenuItem) => (
      <div key={item.id} className="menu-item dark:bg-black">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="price-button-container">
          <span>${item.price}</span>
          <button className="button-28" onClick={goToNextCategory}>
            Select
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="menu dark:bg-black">
      <h1 className="text-4xl font-bold mb-8 text-amber-600 text-center ">
        Our Menu
      </h1>
      <div className="tabs ">
        {categoryKeys.map((category) => (
          <button
            key={category}
            className={`tab ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items " key={selectedCategory}>
        {renderItems()}
      </div>
      <button
        className="next-button button-28"
        onClick={goToNextCategory}
        disabled={selectedCategory === categoryKeys[categoryKeys.length - 1]}
      >
        →
      </button>
    </div>
  );
}
