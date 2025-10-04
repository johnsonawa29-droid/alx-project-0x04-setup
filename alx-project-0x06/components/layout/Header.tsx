
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Header: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          MyApp
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            Count: {count}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
