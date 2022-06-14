import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Lagos",
    },
    {
      id: 2,
      title: "Oyo",
    },
    {
      id: 3,
      title: "Osun",
    },
    {
      id: 4,
      title: "Ogun",
    },
    {
      id: 5,
      title: "Ondo",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
