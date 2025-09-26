//! Æternum Author
//? @/components/presentation/ImageSlide.tsx
import { FC } from 'react';
import Image from 'next/image';

type ImageSlideProps = {
  path: string;
  alt?: string;
};

const ImageSlide: FC<ImageSlideProps> = ({ path, alt = 'Slide' }) => (
  <div className="flex items-center justify-center min-h-[60vh] px-4">
    <div className="relative w-full max-w-sm animate-fade-in">
      <Image
        src={`/images/${path}`}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-auto rounded-lg shadow-lg bg-MIDDLE/20 object-cover animate-scale-in hover:scale-105 transition-transform duration-300"
        priority={false}
      />
    </div>
  </div>
);

export default ImageSlide;
