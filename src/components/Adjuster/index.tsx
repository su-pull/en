'use client';

import { ReactNode } from 'react';
import useLayoutJuster from 'hooks/useLayoutJuster';
import { usePathname } from 'next/navigation';

type AnimateProps = {
  children: ReactNode;
};

const Animate = ({ children }: AnimateProps): JSX.Element => {
  const { ref, isToggleClass } = useLayoutJuster();
  const isClass = isToggleClass ? 'layout_center_content' : '';
  const pathname = usePathname();
  return (
    <main ref={ref} className={`pages_root ${isClass} ${pathname.includes('/posts/') && 'slug_margin_top'}`}>
      {children}
    </main>
  );
};

export default Animate;
