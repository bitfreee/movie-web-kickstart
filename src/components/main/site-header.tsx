import { siteConfig } from "@/configs/site";
import React from "react";
import MainNav from "@/components/navigation/main-nav";

const SiteHeader = () => {
  return (
    // <header className="sticky top-0 z-50 border-b bg-background">
    <header className="sticky top-0 z-50">
      <MainNav items={siteConfig.mainNav} />
      {/* <MobileNav items={siteConfig.mainNav} className="md:hidden" /> */}
    </header>
  );
};

export default SiteHeader;
