import * as React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to={`example/1`}>Example - 1</Link>
      <p>Header</p>
    </div>
  );
}
