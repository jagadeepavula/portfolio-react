const { transform } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBg: "rgb(242,237,233)",
        customBlack: "rgb(30, 30, 30)",
        customText: "rgb(43,43,43)",
        customRed: "rgb(255, 0, 0)",
        customGreen: "rgb(0, 255, 0)",
        customExperience: "rgb(209, 209, 199)",
        customUl: "rgb(127,119,109)",
        customYellow: "rgb(242,191,37)",
        customYellowFont: "rgb(1,2,40)",
        customVanilla: "rgb(227,30,53)",
        customVanillaFont: "rgb(226,208,186)",
        customFiling: "rgb(222,221,212)",
        customFilingFont: "rgb(116,83,56)",
        customLinkedin: "rgb(41,103,178)",
        customLinkedinFont: "rgb(203,215,221)",
        customGithub: "rgb(21,25,36)",
        customGithubFont: "rgb(224,224,224)",
        customInsta: "rgb(82,68,94)",
        customInstaFont: "rgb(188,203,229)",
        customCard1: "rgb(124,160,107)",
        customCard1font: "rgb(228,222,128)",
        customCard2: "rgb(198,183,165)",
        customCard2font: "rgb(57,36,32)",
        customCard3: "rgb(151,177,166)",
        customCard3font: "rgb(57,62,65)",
        customCard4: "rgb(226,208,187)",
        customCard4font: "rgb(227,29,53)",
        customCard5: "rgb(205,112,63)",
        customCard5font: "rgb(228,216,200)",
        customFooter: "rgb(216,204,181)",
      },
      backgroundImage: {
        "noise-full":
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIG9wYWNpdHk9IjEiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMDYzIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjM1IiBzcGVjdWxhckNvbnN0YW50PSIwLjkiIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iI2ZmZmZmZiIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgIAkJPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTUxIj48L2ZlRGlzdGFudExpZ2h0PgogIAk8L2ZlU3BlY3VsYXJMaWdodGluZz4KICAKPC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjZmZmZmZmIiBmaWx0ZXI9InVybCgjbm5ub2lzZS1maWx0ZXIpIj48L3JlY3Q+PC9zdmc+")',
      },
      height: {
        "screen-minus-nav": "calc(100vh - 5rem)",
      },
    },
  },
  plugins: [],
};
