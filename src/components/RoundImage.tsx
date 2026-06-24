import Image from 'next/image';
import { cn } from '@/lib/utils';

interface RoundedImageProps {
  className?: string;
}

const RoundedImage = ({ className }: RoundedImageProps) => {
  return (
    <div className={cn("relative size-36 shrink-0 rounded-full overflow-hidden border-4", className)}>
      <Image
        src="/pfp.jpg"
        fill
        alt="Profile Picture"
        className="object-cover"
        sizes="(max-width: 640px) 144px, 144px"
      />
    </div>
  );
};

export default RoundedImage;
