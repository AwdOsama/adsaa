import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/imgi_1_logo-GdqARQRt.png";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopLinkClass = ({ isActive }) =>
    `rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
        : "text-neutral-400 hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "border border-orange-500/30 bg-orange-500/10 text-orange-500"
        : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-80 border-b border-[#262626] bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <NavLink to="/" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
              <img
                src={logo}
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="bg-linear-to-r from-white to-neutral-300 bg-clip-text text-xl font-bold text-transparent">
                عدسة
              </span>
              <span className="hidden text-xs tracking-wide text-orange-400/80 sm:block">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center">
            <div className="flex items-center rounded-full border  border-[#262626] bg-[#161616] p-1.5">
              <NavLink to="/" end className={desktopLinkClass} >
                الرئيسية
              </NavLink>
              <NavLink to="/blog" className={desktopLinkClass}>
                المدونة
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-xl border border-transparent p-3 text-neutral-500 transition-all duration-300 hover:border-[#262626] hover:bg-[#161616] hover:text-orange-500">
              <CiSearch className="h-6 w-6 text-gray-500" />
            </button>
            <NavLink
              to="/blog"
              className="bg-linear-to-r from-orange-500 to-orange-600  px-8 text-white py-4 rounded-3xl text-sm font-medium transition-all duration-300 hover:translate-y-[-4px]"
            >
              ابدأ القراءة
            </NavLink>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-xl border border-transparent p-3 text-neutral-400 transition-all duration-300 hover:border-[#262626] hover:bg-[#161616] hover:text-white"
          >
            <MdMenu className="h-6 w-6" />
          </button>
        </div>

        <div className={`md:hidden ${menuOpen ? "" : "hidden"}`}>
          <div className="rounded-2xl border border-[#262626] bg-[#161616] p-4 backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              <NavLink to="/" end className={mobileLinkClass}>
                الرئيسية
              </NavLink>
              <NavLink
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className={mobileLinkClass}
              >
                المدونة
              </NavLink>

              <NavLink
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className=" text-center mt-1 bg-linear-to-r from-orange-500 to-orange-600  px-8 text-white py-4 rounded-3xl text-sm font-medium transition-all duration-300 hover:translate-y-[-4px]"
              >
                ابدأ القراءة
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
