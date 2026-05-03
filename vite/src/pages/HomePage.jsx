import React from "react";
import { Link } from "react-router-dom";

const list = [
  { id: 1, link: "/modal", name: "Modal" },
  { id: 2, link: "/stars", name: "Starts" },
  { id: 3, link: "/pagination", name: "Pagination" },
];

function HomePage() {
  return (
    <div className="w-full h-200 flex items-center justify-center flex-col gap-10">
      <h1 className="text-[30px]">Custom Hooks</h1>
      <div className="w-full h-50 bg-pink-600 flex items-center justify-center gap-20">
        {list.map((item) => (
          <React.Fragment key={item.id}>
            <Link to={item.link}>
              <button className="w-30 h-10 bg-white rounded-xl cursor-pointer hover:text-pink-600">
                {item.name}
              </button>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
