import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#FCF0E3] text-sky-950 px-5 py-8 min-h-[200px] flex flex-col justify-end">
      {/* Top */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 md:px-12">
        <Image
          src="/logo.svg"
          alt="Pokédex Unifor"
          width={192}
          height={95}
          className="mx-auto md:mx-0"
        />

        <div className="flex flex-wrap justify-center gap-3 cursor-pointer">
          <Link href="#">
            <Image
              src="/app-store.png"
              alt="Download on the App Store"
              width={140}
              height={45}
            />
          </Link>
          <Link href="#">
            <Image
              src="/play-store.png"
              alt="Get it on Google Play"
              width={140}
              height={45}
            />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#fde0c1] my-4 w-[95%] mx-auto" />

      {/* Bottom */}
      <div className="text-sm text-center flex flex-col items-center gap-2 md:flex-row md:justify-between md:px-8 md:text-left">
        <p className="mx-4">Todos os direitos reservados</p>
        <p className="mx-4 ">Termos de uso</p>
        <p className="mx-4 ">Política de Privacidade</p>
      </div>
    </footer>
  )
}
