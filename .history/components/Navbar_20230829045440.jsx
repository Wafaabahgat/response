import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1>capture</h1>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/#gallery'>Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href='/work'>Work</Link>
          </li>
          <li >
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>


        </ul>
      </div>
    </div>
  );
};

export default Navbar;
