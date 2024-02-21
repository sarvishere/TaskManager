import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Link from "../../components/ui/Link";

interface IAuthenticationLayoutProps {
  children?: ReactNode;
}
const AuthenticationLayout: React.FC<IAuthenticationLayoutProps> = ({
  children,
}) => {
  const location = useLocation();

  return (
    <main className="m-0 p-0 h-screen w-screen overflow-hidden flex flex-col font-iranyekan relative">
      <header className="flex justify-between items-center m-20 h-[45px]">
        <h1 className="logo font-iranyekan h-fit">کوئرا تسک منیجر</h1>
        <div className="flex items-center">
          <h6 className="text-base font-medium ml-[7px]">
            {location.pathname === "/"
              ? "ثبت نام نکرده ای؟"
              : "قبلا ثبت نام کرده ای؟"}
          </h6>
          <Link
            className="text-white text-center p-[10px] bg-brand-primary w-[95px] h-[40px] rounded-[6px]"
            weight="800"
            size="S"
            to={location.pathname === "/" ? "/register" : "/"}
          >
            {location.pathname === "/" ? "ثبت نام" : "ورود"}
          </Link>
        </div>
      </header>
      <section className="flex justify-center items-center z-50">
        {children}
      </section>
      <div className="authentication_bg absolute h-3/4 w-full bottom-0"></div>
    </main>
  );
};

export default AuthenticationLayout;
