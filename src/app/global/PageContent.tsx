interface PageContentProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageContent({ title, children }: PageContentProps) {
  return (
    <div className="flex-1 h-screen text-[#FFFDD0] flex items-start justify-center pt-16">
      <div className="max-w-4xl text-center px-6">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="flex flex-col items-center gap-8">{children}</div>
      </div>
    </div>
  );
}
