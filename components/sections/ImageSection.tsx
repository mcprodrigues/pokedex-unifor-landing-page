import Image from 'next/image';

export default function ImageSection() {
  return (
    <section className="w-full">
      <Image
        src="/unifor-bg.png"
        alt="Universidade de Fortaleza"
        width={1920}
        height={1080}
        className="w-full h-auto"
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
      />
    </section>
  );
}