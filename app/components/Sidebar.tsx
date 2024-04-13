import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <nav className="text-center">
      <Link href={"/star-rating"}>Star Rating</Link>
    </nav>
  );
};
