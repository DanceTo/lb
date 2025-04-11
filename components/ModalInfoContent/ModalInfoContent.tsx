import Image from 'next/image';
import React from 'react';

import { ModalInfoProps } from './types';

export const ModalInfoContent: React.FC<ModalInfoProps> = ({ modalInfo }) => {
  const { title, imageUrl, info, description } = modalInfo;
  return (
    <div className="h-full w-full overflow-auto bg-white p-4 text-zinc-900 md:p-8">
      <div className="flex flex-col gap-6 overflow-auto xl:flex-row">
        {/* Зображення */}
        <div className="w-full max-w-xs flex-shrink-0 xl:w-1/3">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border-2 border-[#c40c00] shadow-md">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Заголовок і коротка довідка */}
        <div className="flex-col items-center justify-between">
          <h2 className="text-3xl font-extrabold leading-tight text-[#c40c00] md:text-4xl">
            {title}
          </h2>
          <p className="mb-4 mt-1 text-sm italic text-zinc-600">{info}</p>

          {/* Основний текст */}
          <div className="text-base leading-relaxed text-zinc-800 md:text-lg">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
