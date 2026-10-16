# Tuindorp Films

Een Nederlandstalig eerbetoon aan de lokale Amsterdamse filmcultuur van de jaren 70 en 80, onder de titel **Op eigen doek**. Geschreven vanuit een onafhankelijke journalistieke invalshoek, met bronverwijzingen bij historische feiten en herkenbare onbevestigde onderzoekssporen.

`index.html` is het overkoepelende verhaal over Oktopus, het Amsterdams Filmhuis, Rialto, Melkweg, Cinemien, Amsterdams Stadsjournaal en Cavia. `oktopus.html` bevat het filmhuisverhaal en alle achttien aanvullende namen. `tuindorp-films.html` beschrijft het filmwerk van Herman Meerman en Chris Hahn. `bronnen.html` bevat het bronnenregister en de onderzoeksgrenzen.

De site scheidt filmcredits, bibliografische sporen en persoonlijke herinneringen. Een filmcredit bewijst geen Oktopus-functie of productie onder de naam Tuindorp Films. De formele bedrijfsgeschiedenis blijft open. Het oorspronkelijke zoekdossier is bewaard in `archief/onderzoek-2026-10-15.html`, met een verwijzing naar de bijgewerkte site. Zoekmachine-indexering blijft uit. De site is geen officiële filmhuis- of bedrijfswebsite.

## Lokaal bekijken

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Er is geen installatie of bouwstap. De HTML-pagina's, `styles.css` en `app.js` staan in de hoofdmap. Google Fonts zijn optioneel; de site heeft lokale lettertypealternatieven. De grafische affiche en papiertextuur in `assets/` zijn nieuw ontworpen SVG's, geen historische afbeeldingen.

De namenlijst is zonder JavaScript volledig leesbaar. `app.js` voegt zoeken op naam en filteren op bronstatus toe. Links zijn relatief, zodat de site ook onder een GitHub Pages-projectpad werkt.

## Testbereik voor nu

Test alleen op standaard desktopformaat, 1440 × 900 pixels. Kleinere schermen, mobiele telefoons en responsive tests vallen voorlopig buiten het testbereik. Alleen de happy flow is nodig: de pagina's openen, navigeren, op naam zoeken en het bronfilter gebruiken. Dit geldt ook voor lopende controlerondes en screenshots. Breid het testbereik pas uit na een nieuwe afspraak.

## Publicatie

GitHub Pages kan de hoofdmap van de branch `main` publiceren. `.nojekyll` schakelt Jekyll uit. Publiceer of push deze uitwerking pas na goedkeuring van Dries. Er is voor deze update niets gepubliceerd of gepusht. Tijdelijke bestanden en screenshots in `.fang-artifacts/` staan buiten Git.

## Inhoud aanvullen

Controleer de identiteit en de precieze reikwijdte van een bron voordat je een rol of productie toevoegt. Voeg verwijzingen toe aan `bronnen.html` en link de claim naar het bijbehorende bronnummer. Behoud aangeleverde spellingen wanneer een andere schrijfwijze niet is bevestigd. Werk de onderzoeksdatum bij. Voeg historische beelden pas toe wanneer bron en gebruiksrecht vaststaan.
