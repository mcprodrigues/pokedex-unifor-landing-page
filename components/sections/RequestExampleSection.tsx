'use client';

import { useState } from 'react';

export default function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [response, setResponse] = useState<string | null>(null);

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
      const res = await fetch('http://127.0.0.1:5000/prediction', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Erro na requisição');
      }

      const result = await res.json();
      setResponse(JSON.stringify(result, null, 2));
    } catch (error: any) {
      console.error(error);
      setResponse('Erro ao enviar a imagem.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Enviar imagem</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Enviar
      </button>

      {response && (
        <div className="mt-4">
          <h3 className="font-semibold">Resposta da pokedex:</h3>
          <pre className="bg-gray-100 p-2 rounded">{response}</pre>
        </div>
      )}
    </div>
  );
}
