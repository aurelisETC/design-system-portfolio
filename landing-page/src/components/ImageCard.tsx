import { Calendar, Clock } from 'lucide-react';

interface Props {
  title: string;
  day: string;
  time: string;
  image: string;
}

export default function ImageCard({ title, day, time, image }: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl sm:min-h-[340px] lg:min-h-[380px]"
    >
      <div
        style={{
          background: 'linear-gradient(to top, rgba(0,30,48,0.95) 0%, rgba(0,30,48,0.6) 60%, transparent 100%)',
        }}
        className="px-6 pb-6 pt-24"
      >
        <h3 className="text-xl font-bold leading-snug text-white">{title}</h3>
        <div className="mt-2 flex items-center gap-3 text-[13px] text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} className="text-brand-400" />
            {day}
          </span>
          <span className="text-white/30">—</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} className="text-brand-400" />
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}
