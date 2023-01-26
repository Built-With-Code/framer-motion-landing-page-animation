import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-12">
      <h3 className="flex flex-col font-black text-4xl leading-[80%]">
        <span>Robots</span> <span>Co</span>
      </h3>
      <div>Menu</div>
    </nav>
  );
};

export default Navbar;
