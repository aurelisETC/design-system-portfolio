import ImageCard from './ImageCard';

const ministries = [
  { title: 'Women Group Reunion', day: 'Monday', time: '1:00 PM', image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=640&h=480&fit=crop' },
  { title: 'Men Group Reunion', day: 'Tuesday', time: '8:00 PM', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=640&h=480&fit=crop' },
  { title: 'Young Kids Group Reunion', day: 'Sunday', time: '4:00 PM', image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=640&h=480&fit=crop' },
  { title: 'Youth Group Reunion', day: 'Friday', time: '7:00 PM', image: 'https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?w=640&h=480&fit=crop' },
];

export default function Ministries() {
  return (
    <section id="ministries" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="mx-auto mb-14 max-w-md text-center text-3xl font-extrabold leading-tight text-navy-900 md:mb-16 md:text-[2.5rem]">
          We have the perfect ministry for you
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ministries.map((m) => (
            <ImageCard key={m.title} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
