import type { SVGProps } from "react";
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function MacOutLogo(props: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={cn("relative", props.className)}>
        <Image
            src="https://iili.io/KQ5UldN.png"
            alt="Macout Logo"
            fill
            className="object-contain"
            sizes="10vw"
        />
    </div>
  );
}
