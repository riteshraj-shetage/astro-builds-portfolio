// src/lib/icons.ts
import * as Octicons from "@primer/octicons";

// Export the entire Octicons set
export const icons = Octicons;

// Type safety: restricts `name` prop to valid Octicon keys
export type IconName = keyof typeof icons;
