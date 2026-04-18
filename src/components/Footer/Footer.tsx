"use client"

import { useState } from "react";
import Link from "next/link";
import React from 'react'

export default function Footer() {
  const [activeMenuItem, setActiveItem] = useState<string | null>(null);


  return (

    //TODO: add growing grass and flowers at the bottom of the page, and maybe a cute little butterfly
    <footer className="w-full h-30 overflow-hidden bg-[var(--color-black)]">
      {/* placeholder footer */}
    </footer>
  );
}
