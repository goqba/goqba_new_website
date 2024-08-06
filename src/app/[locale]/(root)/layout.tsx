import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
// import Sidebar from "@/components/sidebar/sidebar";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const Layout = ({ children, params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  return (
    <div className="flex">
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
