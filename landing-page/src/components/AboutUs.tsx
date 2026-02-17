import { Heart, Users, BookOpen } from 'lucide-react';

const features = [
  { icon: Heart, title: 'Rooted in Love', text: 'Our church is built on the foundation of God\'s love. We welcome everyone with open arms.' },
  { icon: Users, title: 'Strong Community', text: 'Through small groups and service opportunities, we build lasting connections.' },
  { icon: BookOpen, title: 'Biblical Teaching', text: 'Every message is grounded in Scripture with clarity and relevance for everyday life.' },
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-navy-800 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=720&h=560&fit=crop"
              alt="Church community"
              className="w-full object-cover"
              style={{ height: 440 }}
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold italic text-brand-400">About us</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-4xl">
              A community rooted in faith and love
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/55">
              Eternal Truth Church has been serving our community for over 25 years. We are passionate about helping people discover and grow in their relationship with Jesus Christ.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600/20">
                    <f.icon size={18} className="text-brand-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{f.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/50">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
