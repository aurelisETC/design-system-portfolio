import ImageCard from './ImageCard';

const events = [
  { title: 'Family Group Reunion', day: 'Sunday', time: '8:00 AM', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=640&h=480&fit=crop' },
  { title: 'Youth Group Reunion', day: 'Friday', time: '7:00 PM', image: 'https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?w=640&h=480&fit=crop' },
  { title: 'Women Group Reunion', day: 'Monday', time: '1:00 PM', image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=640&h=480&fit=crop' },
  { title: 'Men Group Reunion', day: 'Tuesday', time: '8:00 PM', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=640&h=480&fit=crop' },
];

export default function Events() {
  return (
    <section id="events" className="bg-navy-800 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-16">
          <div>
            <p className="text-sm font-semibold italic text-brand-400">Schedule</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white md:text-[2.5rem]">
              Explore our<br />Ministries
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/50">
              Join one of our weekly gatherings. There's a place for everyone at Eternal Truth Church.
            </p>
          </div>
          <a
            href="#location"
            className="shrink-0 self-start rounded-full border-2 border-white px-7 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-navy-900 sm:self-auto"
          >
            Get Involved
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {events.map((e) => (
            <ImageCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}
