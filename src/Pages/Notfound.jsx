import { NavLink } from "react-router-dom";
import { CiFaceFrown } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)]"></div>

      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-[float_6s_ease-in-out_infinite] rounded-full bg-orange-500/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-[float_8s_ease-in-out_infinite_1s] rounded-full bg-yellow-500/10 blur-[100px]"></div>
      </div>

      <div className="relative mx-auto max-w-lg px-4 text-center">
        <div className="relative mb-6">
          <h1 className="select-none text-[140px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 md:text-[180px]">
            404
          </h1>
          <div className="pointer-events-none absolute inset-0 select-none text-[140px] font-black leading-none text-orange-500/20 blur-2xl md:text-[180px]">
            404
          </div>
        </div>

        <div className="relative mx-auto mb-8 h-28 w-28">
          <div className="absolute inset-0 rounded-full border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-yellow-500/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <CiFaceFrown className="h-14 w-14 text-orange-500" />
          </div>
          <div className="absolute -right-2 -top-2 h-5 w-5 animate-bounce rounded-lg bg-orange-500 rotate-12"></div>
          <div className="absolute -bottom-1 -left-3 h-4 w-4 animate-pulse rounded-full bg-yellow-500"></div>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
          عفواً! الصفحة غير موجودة
        </h2>
        <p className="mb-8 text-lg text-neutral-400">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
          الصحيح.
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <NavLink
            to="/"
            className="py-4 px-8 bg-orange-500 rounded-3xl text-white font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[-4px]"
          >
            <FaHome className="h-5 w-5" />
            الذهاب للرئيسية
          </NavLink>
          <NavLink
            to="/blog"
            className="py-4 px-8 bg-black-500 rounded-3xl text-white font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-orange-500 border border-black-500 hover:border-amber-500"
          >
            <CiWarning className="h-5 w-5" />
            تصفح المقالات
          </NavLink>
        </div>

        <div className="border-t border-[#262626] pt-8">
          <p className="mb-4 text-sm text-neutral-500">قد تجد هذه مفيدة:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <NavLink
              to="/blog"
              className="font-medium text-orange-500 hover:text-orange-400 hover:underline"
            >
              المدونة
            </NavLink>
            <span className="text-neutral-600">•</span>

            <span className="text-neutral-600">•</span>
            <NavLink
              to="/privacy"
              className="font-medium text-orange-500 hover:text-orange-400 hover:underline"
            >
              الخصوصية
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
