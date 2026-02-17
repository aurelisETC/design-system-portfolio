export default function HeroBanner() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600&h=900&fit=crop&crop=top)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(to right, rgba(0,30,48,0.95) 0%, rgba(0,30,48,0.75) 50%, rgba(0,30,48,0.3) 100%)',
        }}
        className="pb-28 pt-32 md:pb-36 md:pt-40"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm font-semibold italic text-brand-400">Welcome</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              A Place Where<br />Faith Comes<br />
              <span className="text-brand-400">Alive</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
              Welcome to Eternal Truth Church. We are a community of believers dedicated to growing in faith, serving one another, and sharing God's love with the world.
            </p>
            <a
              href="#location"
              className="mt-8 inline-block rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-navy-900"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
