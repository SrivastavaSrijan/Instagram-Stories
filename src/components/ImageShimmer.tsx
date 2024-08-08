import { CldImage } from 'next-cloudinary';

import { generateShimmerSvg, toBase64 } from '@/utils';

interface IImageShimmerProps {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  onLoad?: () => void;
}

export const ImageShimmer = ({
  width,
  height,
  alt,
  src,
  className = '',
  sizes = '',
  fill = false,
  onLoad,
}: IImageShimmerProps) => {
  const shouldShowPlaceholder = fill || (width ?? 0) >= 40 || (height ?? 0) >= 40;

  return (
    <CldImage
      draggable="false"
      alt={alt}
      onLoad={onLoad}
      src={src}
      {...(fill ? { fill: true, sizes } : { width, height })}
      {...(shouldShowPlaceholder && {
        placeholder: `data:image/svg+xml;base64,${toBase64(generateShimmerSvg(width, height))}`,
      })}
      className={className.concat(fill ? ' absolute inset-0 h-full w-full' : '')}
    />
  );
};
