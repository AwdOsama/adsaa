import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-[#262626] bg-[#0a0a0a] text-neutral-300">
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="group mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 transition-all duration-300 group-hover:scale-105">
                <span className="text-xl font-bold text-white">ع</span>
              </div>

              <span className="text-xl font-bold text-white">عدسة</span>
            </a>

            <p className="mb-6 text-sm leading-relaxed text-neutral-500">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="flex gap-2">
              <a
                href="https://twitter.com/adasah"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white"
              >
                <FaSquareXTwitter className="h-5 w-5" />        
              </a>

              <a
                href="https://github.com/adasah"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/company/adasah"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="https://youtube.com/@adasah"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
              <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
              استكشف
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-orange-500"
                >
                  <span className="mr-[-1rem] w-4 opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100">
                    ←
                  </span>
                  الرئيسية
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-orange-500"
                >
                  <span className="mr-[-1rem] w-4 opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100">
                    ←
                  </span>
                  المدونة
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-orange-500"
                >
                  <span className="mr-[-1rem] w-4 opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100">
                    ←
                  </span>
                  من نحن
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
              <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
              التصنيفات
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="/blog?category=إضاءة"
                  className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-orange-500"
                >
                  <span className="mr-[-1rem] w-4 opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100">
                    ←
                  </span>
                  إضاءة
                </a>
              </li>

              <li>
                <a
                  href="/blog?category=بورتريه"
                  className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-orange-500"
                >
                  <span className="mr-[-1rem] w-4 opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100">
                    ←
                  </span>
                  بورتريه
                </a>
              </li>

              <li>
                <a
                  href="/blog?category=مناظر طبيعية"
                  className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-orange-500"
                >
                  <span className="mr-[-1rem] w-4 opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100">
                    ←
                  </span>
                  مناظر طبيعية
                </a>
              </li>

              <li>
                <a
                  href="/blog?category=تقنيات"
                  className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-orange-500"
                >
                  <span className="mr-[-1rem] w-4 opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100">
                    ←
                  </span>
                  تقنيات
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-semibold text-white">
              <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
              ابقى على اطلاع
            </h3>

            <p className="mb-4 text-sm text-neutral-500">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full rounded-xl border border-[#262626] bg-[#161616] px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-neutral-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#262626]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-neutral-600">
              © 2026 عدسة. صنع بكل{" "}
              <i className="fa-solid fa-heart text-orange-500" /> جميع الحقوق
              محفوظة.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-sm text-neutral-600 transition-colors duration-300 hover:text-orange-500"
              >
                سياسة الخصوصية
              </a>

              <a
                href="/terms"
                className="text-sm text-neutral-600 transition-colors duration-300 hover:text-orange-500"
              >
                شروط الخدمة
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
