import type { Config } from "@react-router/dev/config";

export default {
  // Server rendering is required for authentication and protected routes.
  ssr: true,
} satisfies Config;
