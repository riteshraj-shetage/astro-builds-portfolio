# Work on following issues...

projects.astro - change the button(that come after hover on project image) text, to Code and Visit. Make the buttons as they are in GitHub for example the <> Code button in the repo section in github, also change the Browse Repositories to Browse More with replacing the github svg with 'repositories' svg in github, additionally the technologies used in project should have th esame styles as the related skills have in the credentials

credentials.astro - remove the credentialId completely dont need that anywhere, keeping things simple, make the certificate modal load with the certificate loading fully and padding all sides(as required), also the verify button should be visible completely, try make this a seemless experience without any flaws

header.astro - the transparent navbar doesnt work really well with bothe the themes, the text becomes not readable when similar color is under it: especially on the mobile, so fix it (if needed remove the effect)

for the skills we got to hard code some stuff, like the links for following specific items end with:
  aws -> amazonwebservices-original-wordmark.svg
  .NET -> dot-net-original.svg
  django -> django-plain.svg
  c# -> csharp
  c++ -> cplusplus
so hard code these in the right place.

IMPORTANT: Reset and Give the background color for all the sections in the github style, also if needed do any modifications required..

portfolio.ts -> look for enhancements and refactor any redundent code with proper updation throughout its references

remove any old, out of context code, configs, styles, etc.

make sure that everything works as intended.
