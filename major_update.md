# Full Website experience elevation

Disclaimer: Following given are the suggestions by me and use your intellect to take decisions as there may be some incorrect or misinformation ... do take decisions that benefit the project. All the example code and snippet is for your info make use of that info and use it as required and NOT as it is, okay?

if any of the following changes require additional changes in the files DO IT

1. portfolio.ts
    Do not use interfaces as we mostly have the strings.. fix this

2. replacement of the inline svg with: https://primer.style/octicons/
    first go thru the github octicons website and understand it

    replace all the inline svg with the suitable github's Octicons(24px versions) as mentioned in 3. and 4. below...
    replacement of: [github icon, theme toggle buttons, all buttons with inline svg, scroll to about section btn, in overview location and mail icon, in highlights replace the icons to match the statements text,view resume button, skills categories svgs, the icons in front of project names, the hover buttons for project image replace them, the view button icons in credentials and verify btn, in education use git-merge icon for the completed education and the ngoing will have git-pull-request icon, for send message paper-airplane icon ]
    the above given is example considerations you may use your intellect to make it full github style experience.

3. create: 
    src/lib/icons.ts
example code:
// src/lib/icons.ts
import * as Octicons from "@primer/octicons";

// Export the entire Octicons set
export const icons = Octicons;

// Type safety: restricts `name` prop to valid Octicon keys
export type IconName = keyof typeof icons;

4. create: 
    src/components/Icon.astro
example code:
---
import { icons, IconName } from "../lib/icons";

interface Props {
  name: IconName;
  size?: number;
  class?: string;
}

const { name, size = 24, class: className = "" } = Astro.props;
---

<div class={className} innerHTML={icons[name].toSVG({ width: size, height: size })}></div>

5. Example Usage code snippet:
---
import Icon from "../components/Icon.astro";
---

<!-- Theme Toggle Button (Mobile) -->
<button 
  id="theme-toggle-mobile" 
  class="p-2 text-gh-fg-default hover:text-gh-accent-fg hover:bg-gh-canvas-subtle rounded-md transition-all"
  aria-label="Toggle theme"
>
  <!-- Sun Icon (hidden by default) -->
  <Icon 
    name="sun" 
    size={20} 
    class="w-5 h-5 hidden" 
    id="sun-icon-mobile" 
  />

  <!-- Moon Icon (visible by default) -->
  <Icon 
    name="moon" 
    size={20} 
    class="w-5 h-5" 
    id="moon-icon-mobile" 
  />
</button>

