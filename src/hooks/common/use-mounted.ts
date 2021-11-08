import { useEffect, useState } from 'react';

// HOOK
export const useMounted = () => {
  const [mounted, setMounted] = useState<boolean>(true);

  useEffect(() => {
    // When any component (or object) using this hook are destroying,
    // set the flag that this object is no longer mounted
    return () => setMounted(false);
  }, []);

  // RETURN
  return {
    mounted
  };
};
