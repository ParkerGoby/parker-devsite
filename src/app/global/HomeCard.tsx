import Link from "next/link";
import Image from "next/image";

interface HomeCardProps {
  href: string;
  title: string;
  imageSrc: string;
}

export default function HomeCard({ href, title, imageSrc }: HomeCardProps) {
  return (
    <Link
      href={href}
      className="group block max-w-xl min-w-lg rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-white"
    >
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center text-sm font-medium text-black">
        {title}
      </div>
    </Link>
  );
}
