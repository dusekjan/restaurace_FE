# Projekt Restaurace frontend
Toto je README pro frontend aplikace restaurace. Backend je taktéž veřejný git repozitář zde: https://github.com/dusekjan/restaurace_BE Doporučuji spouštět projekt v některém vývojovém prostředí, které dokáže samo najít aplikaci a spustit ji. Projekt je samozřejmě možné spustit i klasickými následujícími příkazy v hlavním adresáři.

## Automatizace správcovské části s Redux Toolkit Query
Tato větev 'master' je označení finální fáze projektu s názvem 'Automatizace správcovské části s Redux Toolkit Query' o které pojednává diplomová práce.

Všechny fáze jsou rozmístěny do jednotlivých větví tohoto projektu:
  - https://github.com/dusekjan/restaurace_FE/tree/1_Zakladni_pilire_aplikace
  - https://github.com/dusekjan/restaurace_FE/tree/2_Smerovac_a_prihlasovaci_proces
  - https://github.com/dusekjan/restaurace_FE/tree/3_Objednavkovy_system
  - https://github.com/dusekjan/restaurace_FE/tree/4_Redux_a_prihlaseni_uzivatele
  - https://github.com/dusekjan/restaurace_FE/tree/master

## Instalace potřebných závislostí před prvním spuštěním
`npm install`

## Spuštění projektu na adrese `localhost:3000` - ideální pro vývoj
`npm start` Pro správné fungování komunikace se serverem při vývoji je nutné, aby backend byl spuštěn v `debug` módu.

## Spuštění produkčního buildu
`npm run build` Vytvoří/Nahradí složku .\build v tomto adresáři, která je vhodná pro uložení na server. 
