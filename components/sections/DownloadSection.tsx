import Image from 'next/image';

export default function DownloadSection() {
  return (
    <section className="w-full bg-white mt-[-4rem] md:mt-[-6rem] pt-32 sm:pt-16 md:pt-32 lg:pt-40 pb-20 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-40">
      <div className='flex flex-wrap justify-between'>
        <div>
          <h2 className="text-2xl max-w-[500px] md:text-3xl font-sans font-semibold mb-4">
            Instale nosso aplicativo e comece sua jornada agora!
          </h2>
          <p className="max-w-[500px] text-sm md:text-base text-neutral-700 mb-12">
            Descubra, fotografe e identifique os animais do campus com a Pokédex Unifor — um aplicativo com inteligência artificial que reconhece as espécies em tempo real.
          </p>
        </div>
        <div>
          <Image src="/qrcode.svg" alt="Stacks utilizadas" width={300} height={300} className="mb-4" />
        </div>
      </div>
    </section>
  );
}