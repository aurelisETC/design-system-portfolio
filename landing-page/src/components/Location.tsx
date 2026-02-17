import { MapPin, Phone } from 'lucide-react';

const locations = [
  { city: 'Los Angeles, CA', address: '1000 S Westgate Ave Saint\nLos Angeles, 90049', phone: '(310) 747 - 1374' },
  { city: 'San Francisco, CA', address: '5482 Adobe Falls Rd #15\nSan Francisco, 94102', phone: '(414) 321 - 7956' },
  { city: 'New York, NY', address: '10087 Thorne St. Saint Av.\nNew York, NY 10029', phone: '(518) 394 - 3856' },
];

export default function Location() {
  return (
    <section id="location" className="bg-navy-800 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold italic text-brand-400">Our Locations</p>
          <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">Come visit us</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <div key={loc.city} className="rounded-2xl border border-white/10 bg-navy-700/40 p-7 transition hover:border-brand-500/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600/20">
                <MapPin size={18} className="text-brand-400" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-base font-bold text-white">{loc.city}</h3>
              <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-white/50">{loc.address}</p>
              <div className="mt-4 flex items-center gap-2">
                <Phone size={14} className="text-brand-400" strokeWidth={1.5} />
                <span className="text-sm font-medium text-brand-400">{loc.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
