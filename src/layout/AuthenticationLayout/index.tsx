import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface IAuthenticationLayoutProps {
  children?: ReactNode;
}
const AuthenticationLayout: React.FC<IAuthenticationLayoutProps> = ({
  children,
}) => {
  const location = useLocation();
  const [isRegistered, setIsRegistered] = useState(true);

  useEffect(() => {
    location.pathname === "/" && setIsRegistered(false);
  }, [location]);
  return (
    <main className="m-0 p-0 h-screen w-screen overflow-hidden flex flex-col font-iranyekan relative">
      <header className="flex justify-between items-center m-20 h-[45px]">
        <h1 className="logo font-iranyekan h-fit">کوئرا تسک منیجر</h1>
        <div className="flex items-center">
          <h6 className="text-base font-medium ml-[7px]">
            {isRegistered === false
              ? "ثبت نام نکرده ای؟"
              : "قبلا ثبت نام کرده ای؟"}
          </h6>
          <button className="bg-brand-primary w-[95px] h-10 p-[10px] rounded-[6px] text-white text-sm font-extrabold">
            {isRegistered === false ? "ثبت نام" : "ورود"}
          </button>
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
