import { NavLink, Link } from "react-router-dom";
import postsData from "../data/posts.json";
import HomePosts from "../Components/HomePosts";
import Categories from './../Components/Categories';
import LatestPosts from './../Components/latesPosts';
import Newsletter from './../Components/Newsletter';


function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
    </span>
  );
}

export default function Home() {

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)]"></div>

        <div className="blob absolute left-10 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div
          className="blob absolute bottom-20 right-10 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#161616] px-4 py-2">
              <LiveDot />
              <span className="text-sm font-medium text-neutral-300">
                مرحباً بك في عدسة
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              اكتشف <span className="text-orange-500">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-neutral-400 md:text-2xl">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
              <NavLink
                to="/blog"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1"
              >
                <span>استكشف المقالات</span>←
              </NavLink>

              <NavLink
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#262626] bg-[#161616] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-orange-500/30 hover:bg-[#1a1a1a]"
              >
                <i className="fa-solid fa-circle-info h-5 w-5"></i>
                <span>اعرف المزيد</span>
              </NavLink>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-[#262626] bg-[#161616]/60 p-4 backdrop-blur-xl transition-transform duration-300 hover:scale-105">
                <i className="fa-solid fa-newspaper mb-1 text-2xl text-orange-500"></i>
                <p className="text-2xl font-bold text-orange-500 md:text-3xl">
                  +50
                </p>
                <p className="text-sm text-neutral-500">مقالة</p>
              </div>
              <div className="rounded-2xl border border-[#262626] bg-[#161616]/60 p-4 backdrop-blur-xl transition-transform duration-300 hover:scale-105">
                <i className="fa-solid fa-users mb-1 text-2xl text-orange-500"></i>
                <p className="text-2xl font-bold text-orange-500 md:text-3xl">
                  +10ألف
                </p>
                <p className="text-sm text-neutral-500">قارئ</p>
              </div>
              <div className="rounded-2xl border border-[#262626] bg-[#161616]/60 p-4 backdrop-blur-xl transition-transform duration-300 hover:scale-105">
                <i className="fa-solid fa-folder-open mb-1 text-2xl text-orange-500"></i>
                <p className="text-2xl font-bold text-orange-500 md:text-3xl">
                  4
                </p>
                <p className="text-sm text-neutral-500">تصنيفات</p>
              </div>
              <div className="rounded-2xl border border-[#262626] bg-[#161616]/60 p-4 backdrop-blur-xl transition-transform duration-300 hover:scale-105">
                <i className="fa-solid fa-pen-nib mb-1 text-2xl text-orange-500"></i>
                <p className="text-2xl font-bold text-orange-500 md:text-3xl">
                  6
                </p>
                <p className="text-sm text-neutral-500">كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomePosts />
      <Categories />
      <LatestPosts />
      <Newsletter />
    </>
  );
}
