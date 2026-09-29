# Site da Cardiofrequência

Site de uma página só, feito com HTML, CSS e JavaScript puros. Não precisa instalar nada nem rodar build.

## Como abrir

Abra o `index.html` no navegador, ou rode um servidor simples nesta pasta:

```bash
npx serve .
```

Para publicar, é só subir esta pasta inteira para qualquer hospedagem de site estático.

## Pastas

```
index.html        a página
css/style.css     todo o visual
js/main.js        tudo que se mexe + telefone, exames e avaliações
favicon/          ícones da aba do navegador
img/
  capa.webp               foto grande do topo
  moldura-celular.webp    moldura do celular da parte "Como agendar"
  exames/                 fotos dos cartões de exames
  clinica/                fotos da clínica que ficam passando
  marca/                  símbolo da clínica (os .png são os arquivos originais do logo, não são usados no site)
```

## O que dá para mudar fácil

No começo do `js/main.js`:

- número do WhatsApp
- horário de funcionamento
- lista de exames e descrições
- exames que aparecem nos cartões de convênio
- avaliações dos pacientes

As cores ficam no começo do `css/style.css`.

## Coisas de fora que o site usa

- Fontes: Google Fonts (Stack Sans)
- Mapa: MapLibre (via jsDelivr) com o mapa do OpenFreeMap
