const pages = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Ministries', href: '#ministries' },
  { label: 'Contact', href: '#location' },
];
const resources = [
  { label: 'Donations', href: '#' },
  { label: 'Prayer Request', href: '#' },
  { label: 'Give Online', href: '#' },
  { label: 'Sermons', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="text-brand-400 text-xl leading-none">&#10013;</span>
              <span className="text-lg font-bold text-white">Worship</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-white/40">A place where faith comes alive. Join us every Sunday at 10:00 AM for worship.</p>
            <div className="mt-5 flex gap-2.5">
              {[
                'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z',
                'M12 6.87a5.14 5.14 0 100 10.27 5.14 5.14 0 000-10.27zm0 1.8a3.33 3.33 0 110 6.67 3.33 3.33 0 010-6.67z',
                'M23.5 6.19a3 3 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3 3 0 00.5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3 3 0 002.12 2.14c1.87.5 9.38.5 9.38.5s7.5 0 9.38-.5a3 3 0 002.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z',
              ].map((d, i) => (
                <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/40 transition hover:text-brand-400" aria-label="social">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">Pages</h4>
            <ul className="mt-4 space-y-2.5">
              {pages.map((l) => <li key={l.label}><a href={l.href} className="text-sm text-white/50 transition hover:text-brand-400">{l.label}</a></li>)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">Resources</h4>
            <ul className="mt-4 space-y-2.5">
              {resources.map((l) => <li key={l.label}><a href={l.href} className="text-sm text-white/50 transition hover:text-brand-400">{l.label}</a></li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">Stay Connected</h4>
            <p className="mt-4 text-sm leading-relaxed text-white/40">Subscribe for updates on events and sermons.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-brand-500/50" />
              <button type="submit" className="shrink-0 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} Eternal Truth Church | Designed with faith and purpose</p>
        </div>
      </div>
    </footer>
  );
}
