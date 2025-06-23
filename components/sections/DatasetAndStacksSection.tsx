import Image from 'next/image';

export default function DatasetAndStacksSection() {
  return (
    <section className="w-full bg-white mt-[-4rem] md:mt-[-6rem] pt-32 sm:pt-16 md:pt-32 lg:pt-40 pb-20 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl max-w-[500px] md:text-3xl font-sans font-semibold mb-4">
            Sobre o Dataset
          </h2>
          <p className="max-w-[400px] text-sm md:text-base text-neutral-700 mb-12">
            Coleção com 10 classes de animais, usada para treinar o modelo de classificação de imagens.
          </p>
          <Image src="/dataset.png" alt="Pokedex Unifor" width={400} height={280} className="pt-6 mb-4" />
        </div>

        <div>
          <h2 className="text-2xl max-w-[500px] md:text-3xl font-sans font-semibold mb-4">
            Tecnologias usadas
          </h2>
          <p className="max-w-[400px] text-sm md:text-base text-neutral-700 mb-12">
            Infraestrutura integrada para inteligência artificial, frontend interativo e serviços em nuvem.
          </p>
          <Image src="/stacks.png" alt="Stacks utilizadas" width={400} height={250} className="mb-4" />
        </div>
      </div>
    </section>
  );
}