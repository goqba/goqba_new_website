import Asmit_Header from "@/components/header/asmit_header";
import { unstable_setRequestLocale } from "next-intl/server";
type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const Layout = ({ children, params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex flex-col bg-[#000D27]">
      <Asmit_Header />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
