import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-center p-10">
      <Image src="/logo.svg" alt="Pokédex Unifor" width={160} height={80} className="mb-4" />
    </nav>
  );
}
