# Perform the following changes

**Disclaimer:** The following are suggestions and may contain inaccuracies.  
Please use your judgment to decide what benefits the project.  
Any example code or snippets are provided for reference only — adapt them as needed, do not copy verbatim.

1. src/components/Skills.astro
   - isolate the Devicon icon fetching logic along with the special cases and all and create a separate component called <Devicon />, in the components just like the <Icon />, and use the <Devicon /> in the Skills.astro
   -
2. avatar border styling in hero section
   - use gitlines styling for the borderline of the avatar as described, https://brand.github.com/graphic-elements/gitlines

3. check for any unused code or that doesnt make any sense now, for example any styles in global.css or in any astro file

4. header navigation (only do if possible without any complex or unnecessary burden of code, and only if it adds up to the github styling of the portfolio)
   - if possible use github style navigation underline #f78166 (rose) colored, based on the view scrolled and which section is viewed currently
