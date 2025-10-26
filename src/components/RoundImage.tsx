
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface RoundedImageProps {
  className?: string;
}

const RoundedImage = ({className}: RoundedImageProps) => {
    return (
    <>
      <Image
        src="/pfp.jpg"
        height={140}
        width={140}
        alt="Profile Picture"
        className={cn("rounded-full aspect-square object-cover border-4", 
            className,
        )}
      />
    </>
  );
};

export default RoundedImage;
