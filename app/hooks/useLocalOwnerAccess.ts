import { useEffect, useState } from "react";

type Session = {
  username?: string;
};

const isLocalHostname = (hostname: string) =>
  hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";

export function useLocalOwnerAccess() {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isLocalHostname(window.location.hostname)) {
      setHasAccess(false);
      return;
    }

    let active = true;

    fetch("/api/session", { headers: { Accept: "application/json" } })
      .then(async (response) => {
        if (!response.ok) return null;
        return (await response.json()) as Session;
      })
      .then((session) => {
        if (active) {
          setHasAccess(session?.username?.trim().toLowerCase() === "me");
        }
      })
      .catch(() => {
        if (active) setHasAccess(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return hasAccess;
}
