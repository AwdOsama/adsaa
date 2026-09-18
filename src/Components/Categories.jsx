import { Link } from "react-router-dom";
import postsData from "../data/posts.json";

const CATEGORIES = [
  { name: "إضاءة", icon: "fa-sun", gradient: "from-orange-500 to-yellow-500" },
  {
    name: "بورتريه",
    icon: "fa-user",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    name: "مناظر طبيعية",
    icon: "fa-mountain-sun",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    name: "تقنيات",
    icon: "fa-sliders",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    name: "معدات",
    icon: "fa-camera-retro",
    gradient: "from-orange-500 to-yellow-500",
  },
];

export default function Categories() {
  return (
    <section className="relative border-y border-[#262626] bg-[#111111] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
            </span>
            التصنيفات
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            استكشف حسب الموضوع
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-neutral-400">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {CATEGORIES.map((category) => {
            const count = postsData.posts.filter(
              (post) => post.category === category.name,
            ).length;

            return (
              <Link
                key={category.name}
                to={`/blog?category=${category.name}`}
                className="group relative block overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/30"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                ></div>

                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 transition-colors duration-300 group-hover:border-transparent group-hover:bg-white/20">
                    <i
                      className={`fa-solid ${category.icon} text-xl text-orange-500 transition-colors duration-300 group-hover:text-white`}
                    ></i>
                  </div>

                  <h3 className="mb-1 text-lg font-bold text-white transition-colors duration-300 group-hover:text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-white/80">
                    {count} مقالة
                  </p>

                  <div className="absolute top-6 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#262626] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-white/20">
                    <i className="fa-solid fa-arrow-left text-sm text-white"></i>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
