import Link from "next/link";
import React from "react";
import { Tooltip } from "../components";

function PopOver() {
  return (
    <div className="flex h-[300px] w-[600px] items-center justify-center gap-6 shadow-md">
      <Tooltip content="hi there!">
        <Link
          href="/pop-over"
          className="text-green-700 underline hover:text-green-500"
        >
          Hover Me
        </Link>
      </Tooltip>
      <Tooltip content="hi there!" position="right">
        <Link
          href="/pop-over"
          className="text-green-700 underline hover:text-green-500"
        >
          Hover Me
        </Link>
      </Tooltip>
      <Tooltip content="hi there!" position="bottom">
        <Link
          href="/pop-over"
          className="text-green-700 underline hover:text-green-500"
        >
          Hover Me
        </Link>
      </Tooltip>
      <Tooltip content="hi there!" position="left">
        <Link
          href="/pop-over"
          className="text-green-700 underline hover:text-green-500"
        >
          Hover Me
        </Link>
      </Tooltip>
    </div>
  );
}

export default PopOver;
