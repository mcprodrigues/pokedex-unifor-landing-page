import Image from 'next/image';

export default function HeroSection() {
  return (
    <header className="flex flex-col items-start text-start px-4 sm:px-8 md:px-16 lg:px-40 xl:px-40 py-8">
      <h1 className="w-full max-w-[500px] text-3xl md:text-4xl font-semibold mb-2 text-left">
        Seja bem-vindo à Universidade de Fortaleza!
      </h1>
      <p className="max-w-xl text-sm md:text-base text-neutral-700 text-left">
        Descubra os animais incríveis que vivem no campus da Universidade de Fortaleza com nosso sistema inteligente de reconhecimento por imagem, de forma prática, interativa e divertida.
      </p>
    </header>
  );
}