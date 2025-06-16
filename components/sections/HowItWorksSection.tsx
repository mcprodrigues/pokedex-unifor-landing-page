import Image from 'next/image';

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white mt-[-4rem] md:mt-[-6rem] pt-32 sm:pt-16 md:pt-32 lg:pt-40 pb-20 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-40">
      <div className="max-w-2xl w-full text-left">
        <h2 className="text-2xl max-w-[500px] md:text-3xl font-sans font-semibold mb-4">
          Pokédex Unifor – Como funciona?
        </h2>
        <p className="max-w-[550px] text-sm md:text-base text-neutral-700 mb-12">
          Pokédex Unifor é um sistema de Inteligência Artificial desenvolvido para realizar a identificação automatizada dos animais presentes no campus da Universidade de Fortaleza.
        </p>
        <Image src="/steps.png" alt="Passo a passo de como o sistema funciona" width={747} height={182} />
      </div>
    </section>
  );
}