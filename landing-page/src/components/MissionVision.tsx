import { Target, Eye, Check } from 'lucide-react';

const checks = [
  'Proclaim the Gospel of Jesus Christ',
  'Disciple believers to spiritual maturity',
  'Serve our community with compassion',
  'Equip leaders for ministry',
];

const stats = [
  { n: '4,000+', l: 'Community members' },
  { n: '25+', l: 'Years of ministry' },
  { n: '600%', l: 'Growth in outreach' },
  { n: '200+', l: 'Families served weekly' },
];

export default function MissionVision() {
  return (
    <section className="bg-navy-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* ── MISSION ── */}
        <div id="mission" className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600/20">
              <Target size={20} className="text-brand-400" strokeWidth={1.5} />
            </div>
            <p className="mt-4 text-sm font-semibold italic text-brand-400">Our Mission</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white md:text-4xl">To know God and make Him known</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55">
              Our mission is to lead people into a growing relationship with Jesus Christ through inspiring worship, biblical teaching, meaningful community, and compassionate service.
            </p>
            <ul className="mt-6 space-y-2.5">
              {checks.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600/20">
                    <Check size={12} className="text-brand-400" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-white/70">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=720&h=540&fit=crop" alt="Mission" className="w-full object-cover" style={{ height: 420 }} />
          </div>
        </div>

        {/* Divider */}
        <hr className="my-24 border-white/10 md:my-32" />

        {/* ── VISION ── */}
        <div id="vision" className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div className="order-2 overflow-hidden rounded-2xl md:order-1">
            <img src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=720&h=540&fit=crop" alt="Vision" className="w-full object-cover" style={{ height: 420 }} />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600/20">
              <Eye size={20} className="text-brand-400" strokeWidth={1.5} />
            </div>
            <p className="mt-4 text-sm font-semibold italic text-brand-400">Our Vision</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white md:text-4xl">Transforming lives through the Gospel</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55">
              We envision a church that reflects the diversity and love of God's kingdom — where every person finds belonging, every family is strengthened, and every generation is equipped to make an eternal impact.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
              {stats.map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-extrabold text-brand-400 md:text-3xl">{s.n}</p>
                  <p className="mt-0.5 text-xs text-white/40">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
