'use client';

import { useEffect, useState } from 'react';

export default function Pathname() {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return <code className="text-sm text-slate-300 font-mono truncate max-w-xs">{pathname}</code>;
}
