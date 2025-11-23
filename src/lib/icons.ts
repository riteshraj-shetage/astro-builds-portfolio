// src/lib/icons.ts
import * as OcticonsModule from "@primer/octicons";

// The default export from octicons contains all the icon objects
// In ES modules, we need to handle both default and named exports
const Octicons = (OcticonsModule as any).default || OcticonsModule;

// Export the entire Octicons set
export const icons = Octicons;

// Type safety: restricts `name` prop to valid Octicon keys
export type IconName = keyof typeof icons;
