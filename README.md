# u02, Individuell uppgift, Egen portfoliosida (VG)

[🔗  Live Preview](https://fjs24-u02-cristian-pencheff.netlify.app/)

[📄  Svar på frågor – Inlämningsarbete u02](https://docs.google.com/document/d/1vcKj2IuwESKlv-fZ1EfF7OGI73gomNWtHHjrDVQYto0/edit?usp=drive_link)

Det här projektet är en vidareutveckling av uppgiften [u01 Portfoliosida utifrån designskiss (HTML/CSS)](https://fjs24-u01-cristian-pencheff.netlify.app/). Målet har varit att bygga vidare på portfoliosajten med JavaScript och JSON för att göra den mer interaktiv och dynamisk.  

### Interaktiva Scripts:
För att öka interaktiviteten på sajten har jag implementerat följande funktioner med JavaScript:  

 * **Visa Fler / Visa Färre arbetsplatser (CV-sektionen, About Me-sidan)**  
Här laddas de senaste tre arbetsplatserna, och om det finns fler än tre, visas en knapp för att visa fler. När alla är synliga kan användaren fälla ihop listan tillbaka till de ursprungliga tre.

 * **Dark/Light Theme Toggle**  
Jag har implementerat en temaomkopplare (dark/light theme) med JavaScript istället för att enbart använda checkbox och CSS. Besökarens val sparas i localStorage för att bevara temat även vid sidomläsningar.

 * **Mobil Navigering (Burger Icon)**  
Jag använder JavaScript för att visa och dölja navigeringen i mobilt läge istället för att enbart använda CSS som jag gjorde tidigare. Detta ger en bättre användarupplevelse på små skärmar.

 * **Sticky Notification Bar**  
Jag har lagt till en sticky notification bar som triggas efter att besökaren varit på sidan i 4 sekunder. Innehållet i baren växlar var 8:e sekund och uppmanar användaren att kontakta mig via email, LinkedIn eller Spotify. Användaren har möjlighet att stänga ner den, och den kommer att återaktiveras när en ny sida besöks eller vid en omladdning.  

### Portfolio:
Min portfolio samlar projekt från en JSON-fil med information om tidigare arbetsuppgifter och publika projekt från min GitHub. Jag hämtar dessa projekt via GitHub API och visar endast de som har en hemsideadress kopplad. Detta gör det enkelt att styra vilket innehåll som visas och även att fånga upp och visa projektets hemsideadress.  

En loader visas medan projekten hämtas från GitHub API.  

### GitHub Workflow:
Jag använder en developer-branch där jag arbetar och testar nya funktioner, och sedan mergar jag till main-branchen när jag är klar med ändringarna.

### Tekniska krav:
 * Validerad med 0 fel på [W3C Validator](https://validator.w3.org/about.html)  

 * Inga fel i webbläsarens konsol  

 * Projektet är publicerat på [Netlify](https://fjs24-u02-cristian-pencheff.netlify.app/) via en fork av mitt GitHub-repo.  

### Styrkor:
 * Jag tycker att underlaget från u01-projektet gav en bra projektstruktur, vilket gjorde det enkelt att uppdatera sajten med nya JavaScript-funktioner.  

 * Genom arbetet med u03 (Quiz App) har jag lärt mig att arbeta med JS-moduler, vilket jag nu har implementerat i det här projektet. Det har gjort arbetsflödet smidigare och koden mer lättnavigerad.  

 * Att hämta och hantera JSON-data var något vi övade på i u03, vilket har varit väldigt användbart i det här projektet och har förbättrat min kodhantering och datahantering.  

### Brister:
 * Jag hade lite svårt att komma på interaktiva JavaScript-funktioner som tillförde något extra till sajten, men är slutligen rätt nöjd med de lösningar jag har implementerat. 

 * En del av den JavaScript jag saknade för u01-projektet har jag nu lyckats implementera i det här projektet, vilket känns bra.  

 * Framöver skulle jag vilja göra om CSS till SCSS för att bättre organisera stilarna i partials och minifiera filerna för att öka prestandan och minska anropen.  

 * Jag skulle också vilja minifiera JavaScript-filerna för att förbättra prestandan ytterligare.  

 * Jag funderar på att skapa en undersida för varje projekt där jag kan presentera dem mer på djupet.  
