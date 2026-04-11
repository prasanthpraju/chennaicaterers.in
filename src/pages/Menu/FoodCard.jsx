import React from "react";

const FoodCard = ({ food }) => {
  if (!food) return null;

  const imagePath =
    food.image?.url ||
    food.image?.data?.url ||
    food.image?.data?.attributes?.url;

  const imageUrl = imagePath
    ? `https://api.chennaicateres.in${imagePath}`
    : "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl">
      <img
        src={imageUrl}
        alt={food.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{food.name}</h3>
        <p className="text-gray-500">{food.description}</p>
        <p className="text-orange-500 font-bold">₹{food.price}</p>
      </div>
    </div>
  );
};

export default FoodCard;