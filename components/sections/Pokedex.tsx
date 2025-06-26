'use client';

import { Upload } from 'lucide-react';
import { useState } from 'react';

// Mapeamento de nomes em inglês/técnicos para português
const nameTranslations: Record<string, string> = {
  gamba: 'Gambá',
  lagarto: 'Lagarto',
  pavao: 'Pavão',
  ema: 'Ema',
  pombo: 'Pombo',
  cabra: 'Cabra',
  cavalo: 'Cavalo',
  gato: 'Gato',
  iguana: 'Iguana',
  vaca: 'Vaca',
  cat: 'Gato',
  horse: 'Cavalo',
  cow: 'Vaca',
  goat: 'Cabra',
  lizard: 'Lagarto',
  pigeon: 'Pombo',
  peacock: 'Pavão',
  opossum: 'Gambá',
  ostrich: 'Ema',

};

export default function Pokedex() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [identifiedAnimal, setIdentifiedAnimal] = useState<string>('');
  const [confidence, setConfidence] = useState<number | null>(null);

  const formatAnimalName = (name: string): string => {
    if (!name || typeof name !== 'string') return 'Desconhecido';
    const key = name.toLowerCase().replace(/_/g, '');
    return nameTranslations[key] || name.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Por favor, selecione uma imagem.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await fetch('https://classificationmodel-production.up.railway.app/prediction', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Erro na requisição');

      const result = await res.json();
      setIdentifiedAnimal(result.prediction || 'Desconhecido');
      setConfidence(result.confidence ? parseFloat(result.confidence.toFixed(2)) : null);
    } catch (error) {
      console.error(error);
      setIdentifiedAnimal('Erro');
      setConfidence(null);
    }
  };

  return (
    <div className=' bg-white flex-1'>
      <div className="max-w-3xl pl-44 w-full text-left ">
        <h2 className="text-2xl max-w-[500px] md:text-3xl font-sans font-semibold mb-4">
          Descubra o animal da sua foto
        </h2>
        <p className="max-w-[550px] text-sm md:text-base text-neutral-700 mb-12">
Envie uma imagem e veja qual espécie nosso modelo IA  encontra!        </p>
      </div>
    <div className=" bg-white pt-8 flex flex-col pb-20  mb-20 sm:px-8 md:px-16 lg:px-56 xl:px-40 gap-6 items-start">
<div className="w-full max-w-[456px] aspect-[4/3] flex rounded-lg border border-black scale-100 md:scale-[1.1] lg:scale-[1.25] xl:scale-[1.5] transition-transform">
        {/* LEFT PANEL */}
        <div className="w-1/2 bg-[#fe0065] grid grid-rows-[23%_50%_27%] border-r-2 border-black rounded-l-lg">
          {/* Top Lights */}
          <div className="relative flex items-center">
            <svg height="100" width="225" className="absolute z-10">
              <polyline points="0,75 70,75 90,38 224,38" fill="none" stroke="black" strokeWidth="3" />
            </svg>
            <div className="flex items-center ml-1 mb-3 z-20">
              <div className="w-[55px] h-[55px] border border-black rounded-full bg-white flex items-center justify-center">
                <div className="w-[45px] h-[45px] border border-black rounded-full bg-[#3298cb] flex items-center justify-center">
                  <div className="w-[15px] h-[15px] bg-[#85bdfe] rounded-full relative top-[7px] left-[10px]" />
                </div>
              </div>
              <div className="flex ml-8 mb-9 space-x-2">
                <div className="w-[16px] h-[16px] rounded-full border border-black bg-[#ff0000]">
                  <div className="w-[5px] h-[5px] bg-[#fe98cb] rounded-full relative top-[3px] left-[3px]" />
                </div>
                <div className="w-[16px] h-[16px] rounded-full border border-black bg-[#fecb65]">
                  <div className="w-[5px] h-[5px] bg-[#fefecb] rounded-full relative top-[3px] left-[3px]" />
                </div>
                <div className="w-[16px] h-[16px] rounded-full border border-black bg-[#32cb65]">
                  <div className="w-[5px] h-[5px] bg-[#98fe00] rounded-full relative top-[3px] left-[3px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Screen */}
          <div className="flex flex-col justify-center items-center gap-2">
            <label htmlFor="upload-image" className="cursor-pointer">
              <div
                className="w-[150px] h-[150px] border border-black rounded-bl-[17%] bg-white grid grid-rows-[10%_72%_18%]"
                title="Clique para enviar imagem"
              >
                <div className="flex justify-center items-center space-x-2 mt-1">
                  <div className="w-[5px] h-[5px] rounded-full border border-black bg-red-500" />
                  <div className="w-[5px] h-[5px] rounded-full border border-black bg-red-500" />
                </div>
<div className="w-[80%] h-full border-2 border-black rounded-md mx-auto bg-[#98cb98] flex items-center justify-center overflow-hidden">
  {selectedFile ? (
    <img
      src={URL.createObjectURL(selectedFile)}
      alt="Imagem selecionada"
      className="w-full h-full object-cover"
    />
  ) : (
    <Upload className="w-10 h-10 text-black" />
  )}
</div>

                <div className="flex justify-between items-center px-2 mt-1">
                  <div className="w-[12px] h-[12px] rounded-full border-2 border-black bg-[#ff0000]">
                    <div className="w-[4px] h-[4px] bg-[#fe98cb] rounded-full relative top-[2px] left-[2px]" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="w-[18px] h-[2px] bg-black" />
                    <div className="w-[18px] h-[2px] bg-black" />
                    <div className="w-[18px] h-[2px] bg-black" />
                  </div>
                </div>
              </div>
              <input id="upload-image" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
            <button
              onClick={handleUpload}
              className="w-[130px] h-[250px] border-2 border-black bg-[#3298cb] rounded-md flex justify-center font-sans items-center text-[12px] text-white font-press text-center"
            >
              {selectedFile ? 'Enviar imagem' : ' '}
            </button>
          </div>

          {/* Bottom buttons */}
          <div className="flex flex-col justify-center items-start px-2">
            <div className="flex items-start space-x-2">
              <div className="w-[25px] h-[25px] rounded-full border-2 border-black bg-[#585858]" />
              <div className="flex space-x-2 ml-2"></div>
            </div>
            <div className="flex justify-between items-center mt-4 w-full">
              <div className="text-2xl flex space-x-1 justify-center w-1/3">
                <div>.</div>
                <div>.</div>
              </div>
              <div className="w-[80px] h-[30px] border-2 border-black bg-[#3ab47d] rounded-md flex justify-center items-center">
                <span className="text-[8.5px] font-press text-center w-full truncate">
                  {formatAnimalName(identifiedAnimal)}
                </span>
              </div>
              <div className="w-1/3 flex justify-center items-center">
                <div className="relative w-[52px] h-[52px] flex items-center justify-center">
                  <div className="w-[5px] h-[5px] border-2 border-black rounded-full z-10" />
                  <div className="absolute transform rotate-90 bg-[#585858] rounded h-[12px] w-[52px] border-2 border-black" />
                  <div className="absolute bg-[#585858] rounded h-[12px] w-[52px] border-2 border-black">
                    <div className="absolute border-t-[3.5px] border-black w-[12px] top-[-3px] left-[20px]" />
                    <div className="absolute border-t-[3.5px] border-black w-[12px] top-[11px] left-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 bg-[#fe0065] flex flex-col gap-10 justify-center items-center border-l-2 border-black rounded-r-lg py-4 relative">
          <div className="absolute -left-[3px] bottom-0 w-full h-[265px] border-r-2 border-black rounded-br-md" />
          <div className="w-[146px] h-[64px] bg-[#9e9d9d] border-2 border-black rounded px-2 text-[10px] font-press flex items-center justify-center text-center leading-[2]">
            {confidence !== null ? (
              <span>
                Confiança: {confidence * 100}%<br />
                Animal: {formatAnimalName(identifiedAnimal)}
              </span>
            ) : (
              'Envie uma imagem'
            )}
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-5 grid-rows-2 gap-[2px] w-[146px] h-[60px]">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="rounded-[2px] border border-black bg-[#7ca9f7] shadow-inner" />
              ))}
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="grid">
              <div className="flex space-x-2 mb-2">
                <div className="w-[7px] h-[7px] rounded-full border-2 border-black bg-[#ff0000]">
                  <div className="w-[2.5px] h-[2.5px] bg-[#fe98cb] rounded-full relative top-[1px] left-[1px]" />
                </div>
                <div className="w-[7px] h-[7px] rounded-full border-2 border-black bg-[#ff0000]">
                  <div className="w-[2.5px] h-[2.5px] bg-[#fe98cb] rounded-full relative top-[1px] left-[1px]" />
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-[25px] h-[25px] rounded border-2 border-black bg-white shadow-inner" />
                <div className="w-[25px] h-[25px] rounded border-2 border-black bg-white shadow-inner" />
              </div>
            </div>
            <div className="grid">
              <div className="flex justify-between space-x-2">
                <div className="w-[35px] h-[2px] border-2 border-black bg-[#585858]" />
                <div className="w-[35px] h-[2px] border-2 border-black bg-[#585858]" />
              </div>
              <div className="w-[25px] h-[25px] rounded-full border-2 border-black bg-[#fecb65] ml-2 mt-1">
                <div className="w-[7px] h-[7px] rounded-full bg-[#fefecb] relative top-[3px] left-[5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
