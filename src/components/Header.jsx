import React from 'react'
import { useState } from "react";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";

const Header = () => {

    
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default Header
