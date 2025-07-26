export default function SandboxContainer() {
  return (
    <div className="rounded-xl min-w-[65vw] bg-white text-black">
      <p>Sliding Div</p>
      <div className="flex gap-4">
        <HoverCard
          image="/ted-bryan-yu-5mezpWin6T8-unsplash(1).jpg"
          text="Text"
        />
        <HoverCard
          image="/ted-bryan-yu-5mezpWin6T8-unsplash(1).jpg"
          text="Text"
        />
      </div>
      <p>July 19, 2025</p>
    </div>
  );
}

function HoverCard({
  image,
  video,
  text,
}: {
  image: string;
  video?: string;
  text: string;
}) {
  return (
    <div
      className={`
        relative
        flex-1
        h-[300px]
        overflow-hidden
        transition-all duration-500
        hover:flex-[3]
      `}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
      />
      <video
        src={video}
        className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex items-center justify-center h-full text-2xl font-bold text-black transition-opacity duration-300 hover:opacity-0">
        {text}
      </div>
    </div>
  );
}
