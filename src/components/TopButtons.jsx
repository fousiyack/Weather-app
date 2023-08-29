import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Kozhikode",
    },
    {
      id: 2,
      title: "Malappuram",
    },
    {
      id: 3,
      title: "Kochi",
    },
    {
      id: 4,
      title: "Thiruvananthapuram",
    },
    {
      id: 5,
      title: "Kannur",
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
