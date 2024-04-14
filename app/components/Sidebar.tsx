"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { routes } from "../constants/routes";

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <nav className="text-center">
      {routes.map((route) => {
        return (
          <Link
            key={route.path}
            href={route.path}
            className={
              route.path === pathname
                ? "text-slate-950 underline"
                : "text-slate-500 hover:text-slate-950 hover:underline"
            }
          >
            {route.title}
          </Link>
        );
      })}
    </nav>
  );
};
