import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-xl mb-4 text-primary">page not found</h1>
      <Link href="/" className="text-accent hover:underline">
        return home
      </Link>
    </div>
  );
}
