'use client';

import { usePathname } from 'next/navigation';
import SettingsSidebar from './SettingsSidebar';

export default function SettingsSidebarWrapper() {
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return <SettingsSidebar />;
}
