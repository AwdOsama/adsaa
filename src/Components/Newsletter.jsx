import postsData from "../data/posts.json";

export default function Newsletter() {

  const avatars = [
    ...new Map(
      postsData.posts.map((post) => [post.author.name, post.author.avatar])
    ).values(),
  ].slice(0, 3);

  
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24">
      <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#262626] bg-[#161616] p-8 text-center md:p-12 lg:p-16">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600">
            <i className="fa-solid fa-envelope text-2xl text-white"></i>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            اشترك في <span className="text-orange-500">نشرتنا الإخبارية</span>
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-lg text-neutral-400">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <form
            className="mx-auto mb-6 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <input
              placeholder="أدخل بريدك الإلكتروني"
              type="email"
              required
              className="flex-1 rounded-xl border border-[#262626] bg-[#0a0a0a] px-5 py-4 text-white placeholder-neutral-500 transition-colors focus:border-orange-500/50 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-orange-600 hover:to-orange-700"
            >
              اشترك الآن
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2 space-x-reverse">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-[#161616]"
                  />
                ))}
              </div>
              <span>
                انضم لـ <span className="font-medium text-white">+10,000</span> مصور
              </span>
            </div>
            <span className="hidden text-[#262626] sm:inline">•</span>
            <span>بدون إزعاج</span>
            <span className="hidden text-[#262626] sm:inline">•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}