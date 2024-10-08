const thing = {
  version: 11,
  randomSeed: "591546ec650a745a02da1d84545e63f3",
  graph: {
    viewport: {
      xmin: -5,
      ymin: -3.045774647887323,
      xmax: 5,
      ymax: 3.045774647887325,
    },
    showGrid: false,
  },
  expressions: {
    list: [
      {
        type: "expression",
        id: "2",
        color: "#2d70b3",
        latex:
          "\\min\\left(\\max\\left(8\\left(\\left|\\operatorname{mod}\\left(x,1\\right)-\\frac{3}{8}\\right|-\\frac{3}{12}\\right),-1\\right),1\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "83",
        color: "#000000",
        latex:
          "\\operatorname{polygon}\\left(\\left(10^{10},10^{10}\\right),\\left(-10^{10},10^{10}\\right),\\left(-10^{10},-10^{10}\\right),\\left(10^{10},-10^{10}\\right)\\right)",
        lines: false,
        fillOpacity: "1",
      },
      {
        type: "folder",
        id: "64",
        title: "Functions",
        hidden: true,
        collapsed: true,
      },
      {
        type: "expression",
        id: "65",
        folderId: "64",
        color: "#6042a6",
        latex:
          "X_{cubestep}=\\sqrt[3]{19\\sqrt{5\\left(1805x^{2}-3016x+1265\\right)}+1508-1805x}",
        hidden: true,
      },
      {
        type: "expression",
        id: "66",
        folderId: "64",
        color: "#000000",
        latex:
          "f_{cbstpHelper}\\left(x\\right)=\\frac{13-X_{cubestep}}{19}+\\frac{21}{19X_{cubestep}}",
        hidden: true,
      },
      {
        type: "expression",
        id: "67",
        folderId: "64",
        color: "#c74440",
        latex:
          "f_{cubestep}\\left(x\\right)=\\left(\\left(f_{cbstpHelper}\\left(x\\right)^{2}\\left(-2f_{cbstpHelper}\\left(x\\right)+3\\right)\\right)\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "90",
        folderId: "64",
        color: "#388c46",
        latex: "f_{polyrec}\\left(x\\right)=\\frac{x^{2}}{2x^{2}-2x+1}",
      },
      {
        type: "expression",
        id: "94",
        folderId: "64",
        color: "#2d70b3",
        latex:
          "C_{fmod}\\left(t\\right)=A_{c}\\cos\\left(2\\pi f_{c}t+\\frac{f_{delta}}{f_{m}}\\sin\\left(2\\pi f_{m}t\\right)\\right)",
      },
      {
        type: "expression",
        id: "100",
        folderId: "64",
        color: "#388c46",
        latex:
          "S_{fmod}\\left(t\\right)=A_{c}\\sin\\left(2\\pi f_{c}t+\\frac{f_{delta}}{f_{m}}\\sin\\left(2\\pi f_{m}t\\right)\\right)",
      },
      {
        type: "folder",
        id: "17",
        title: "Ground Truth - Rectangle",
        hidden: true,
        collapsed: true,
      },
      {
        type: "expression",
        id: "10",
        folderId: "17",
        color: "#6042a6",
        latex: "L_{sq4}=\\frac{\\left[0,1,2,3,4\\right]}{4}",
      },
      {
        type: "expression",
        id: "3",
        folderId: "17",
        color: "#000000",
        latex: "x=L_{sq4}",
      },
      {
        type: "expression",
        id: "9",
        folderId: "17",
        color: "#c74440",
        latex: "\\left(L_{sq4},\\left[1,-1,-1,1,1\\right]\\right)",
        lines: true,
        lineWidth: "8",
      },
      {
        type: "expression",
        id: "15",
        folderId: "17",
        color: "#388c46",
        latex: "\\left(L_{sq4},\\left[-1,-1,1,1\\right]\\right)",
        lines: true,
        lineWidth: "8",
      },
      {
        type: "folder",
        id: "19",
        title: "Ground Truth - Triangle",
        hidden: true,
      },
      {
        type: "expression",
        id: "24",
        folderId: "19",
        color: "#388c46",
        latex: "L_{sq3}=\\frac{\\left[0,1,2,3\\right]}{3}",
      },
      {
        type: "expression",
        id: "25",
        folderId: "19",
        color: "#000000",
        latex: "x=L_{sq3}",
      },
      {
        type: "expression",
        id: "27",
        folderId: "19",
        color: "#c74440",
        latex: "x\\left(\\frac{3\\sqrt{3}}{2}\\right)",
      },
      {
        type: "expression",
        id: "28",
        folderId: "19",
        color: "#388c46",
        latex:
          "\\left(x-\\frac{1}{3}\\right)\\left(-3\\sqrt{3}\\right)+\\frac{\\sqrt{3}}{2}",
      },
      {
        type: "expression",
        id: "21",
        folderId: "19",
        color: "#c74440",
        latex: "\\left(L_{sq3},\\left[1,-0.5,-0.5,1\\right]\\right)",
        lines: true,
        lineWidth: "8",
      },
      {
        type: "expression",
        id: "22",
        folderId: "19",
        color: "#388c46",
        latex:
          "\\left(L_{sq3},\\left[0,\\frac{\\sqrt{3}}{2},-\\frac{\\sqrt{3}}{2},0\\right]\\right)",
        lines: true,
        lineWidth: "8",
      },
      {
        type: "expression",
        id: "23",
        folderId: "19",
        color: "#000000",
        latex:
          "\\left(\\left[1,-0.5,-0.5,1\\right],\\left[0,\\frac{\\sqrt{3}}{2},-\\frac{\\sqrt{3}}{2},0\\right]\\right)",
        hidden: true,
        lines: true,
      },
      {
        type: "expression",
        id: "40",
        folderId: "19",
        color: "#388c46",
        latex:
          "\\frac{\\sqrt{3}}{2}\\left(-\\frac{6}{2}\\min\\left(2\\operatorname{mod}\\left(x+\\frac{2}{3},1\\right),1-\\operatorname{mod}\\left(x+\\frac{2}{3},1\\right)\\right)+1\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "41",
        folderId: "19",
        color: "#6042a6",
        latex:
          "\\left(\\frac{\\sqrt{3}}{2}-\\frac{3\\sqrt{3}}{2}\\min\\left(2\\operatorname{mod}\\left(x+\\frac{2}{3},1\\right),1-\\operatorname{mod}\\left(x+\\frac{2}{3},1\\right)\\right)\\right)",
      },
      {
        type: "expression",
        id: "45",
        folderId: "19",
        color: "#388c46",
        latex: "-\\frac{9}{2}\\left|x\\right|+1",
      },
      { type: "expression", id: "46", folderId: "19", color: "#6042a6" },
      {
        type: "expression",
        id: "48",
        folderId: "19",
        color: "#c74440",
        latex: "\\left(0.5,-1.25\\right)",
      },
      {
        type: "expression",
        id: "49",
        folderId: "19",
        color: "#2d70b3",
        latex: "x=0.5",
      },
      {
        type: "folder",
        id: "53",
        title: "Ground Truth - Triangle 4 Sub",
        hidden: true,
        collapsed: true,
      },
      {
        type: "expression",
        id: "54",
        folderId: "53",
        color: "#c74440",
        latex: "x=L_{sq4}",
      },
      {
        type: "expression",
        id: "55",
        folderId: "53",
        color: "#2d70b3",
        latex:
          "\\left(1-\\alpha\\right)P_{trigx}\\left(x\\right)+\\alpha\\cdot P_{square}\\left(x\\right)",
      },
      {
        type: "expression",
        id: "56",
        folderId: "53",
        color: "#388c46",
        latex:
          "\\left(1-\\alpha\\right)P_{trigy}\\left(x+0.25\\right)+\\alpha\\cdot P_{square}\\left(x+0.25\\right)",
      },
      {
        type: "folder",
        id: "31",
        title: "Trial and Error",
        hidden: true,
        collapsed: true,
      },
      {
        type: "expression",
        id: "32",
        folderId: "31",
        color: "#000000",
        latex:
          "\\left|\\frac{x-\\beta_{1}}{2}\\left(-\\operatorname{sign}\\left(x-\\beta_{1}\\right)-3\\right)\\right|",
        hidden: true,
      },
      {
        type: "expression",
        id: "37",
        folderId: "31",
        color: "#000000",
        latex: "\\beta_{1}=0.8",
        hidden: true,
      },
      {
        type: "expression",
        id: "26",
        folderId: "31",
        color: "#000000",
        latex:
          "\\left|x\\right|\\cdot\\left(\\operatorname{sign}\\left(x\\right)+1\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "39",
        folderId: "31",
        color: "#2d70b3",
        latex:
          "\\left|\\frac{1}{2}\\left(\\operatorname{mod}\\left(\\operatorname{mod}\\left(x,1\\right),\\frac{2}{3}\\right)-\\frac{1}{3}\\right)\\left(\\operatorname{sign}\\left(\\operatorname{mod}\\left(\\operatorname{mod}\\left(x,1\\right),\\frac{2}{3}\\right)-\\frac{1}{3}\\right)+3\\right)\\right|+\\frac{1}{3}\\operatorname{floor}\\left(\\operatorname{mod}\\left(x,1\\right)+\\frac{1}{3}\\right)",
      },
      {
        type: "expression",
        id: "29",
        folderId: "31",
        color: "#388c46",
        latex:
          "\\left|p\\left(\\frac{\\operatorname{sign}\\left(p\\right)+3}{2}\\right)\\right|+\\frac{\\operatorname{floor}\\left(\\operatorname{mod}\\left(x,1\\right)+\\frac{1}{3}\\right)}{3}",
        hidden: true,
      },
      {
        type: "expression",
        id: "36",
        folderId: "31",
        color: "#6042a6",
        latex:
          "p=\\operatorname{mod}\\left(\\operatorname{mod}\\left(x,1\\right),\\frac{2}{3}\\right)-\\beta",
        hidden: true,
      },
      {
        type: "expression",
        id: "38",
        folderId: "31",
        color: "#c74440",
        latex:
          "\\left(\\operatorname{mod}\\left(x,\\frac{2}{3}\\right)-\\beta\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "33",
        folderId: "31",
        color: "#c74440",
        latex: "\\beta=\\frac{1}{3}",
        hidden: true,
      },
      {
        type: "folder",
        id: "62",
        title: "Function Testing",
        hidden: true,
        collapsed: true,
      },
      {
        type: "expression",
        id: "11",
        folderId: "62",
        color: "#000000",
        latex:
          "P_{square}\\left(t\\right)=\\min\\left(\\max\\left(8\\left(\\left|\\operatorname{mod}\\left(t,1\\right)-\\frac{3}{8}\\right|-\\frac{3}{12}\\right),-1\\right),1\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "43",
        folderId: "62",
        color: "#c74440",
        latex:
          "P_{trigx}\\left(t\\right)=\\max\\left(\\frac{9}{2}\\left(\\left|\\operatorname{mod}\\left(t,1\\right)-\\frac{1}{2}\\right|\\right)-\\frac{5}{4},-\\frac{1}{2}\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "44",
        folderId: "62",
        color: "#2d70b3",
        latex:
          "P_{trigy}\\left(t\\right)=\\left(\\frac{\\sqrt{3}}{2}-\\frac{3\\sqrt{3}}{2}\\min\\left(2\\operatorname{mod}\\left(t+\\frac{2}{3},1\\right),1-\\operatorname{mod}\\left(t+\\frac{2}{3},1\\right)\\right)\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "50",
        folderId: "62",
        color: "#388c46",
        latex:
          "\\left(P_{trigx}\\left(t\\right),P_{trigy}\\left(t\\right)\\right)",
        hidden: true,
        fill: true,
      },
      {
        type: "expression",
        id: "12",
        folderId: "62",
        color: "#c74440",
        latex:
          "\\left(\\frac{P_{square}\\left(2t-0.25\\right)+4\\operatorname{floor}\\left(2t\\right)-2}{3},P_{square}\\left(2t\\right)\\right)",
        hidden: true,
      },
      { type: "folder", id: "60", title: "Play to Pause", collapsed: true },
      {
        type: "expression",
        id: "82",
        folderId: "60",
        color: "#c74440",
        latex: "A_{2}=T\\to T_{sim},T_{sph}\\to T_{sphSim}",
      },
      {
        type: "expression",
        id: "74",
        folderId: "60",
        color: "#2d70b3",
        latex:
          "c_{olor}=\\operatorname{hsv}\\left(200,0.1+0.6\\alpha,0.8\\right)",
      },
      {
        type: "expression",
        id: "91",
        folderId: "60",
        color: "#6042a6",
        latex:
          "c_{olor2}=\\operatorname{hsv}\\left(205,0.23-0.12\\alpha,0.29+0.71\\alpha\\right)",
      },
      {
        type: "expression",
        id: "92",
        folderId: "60",
        color: "#000000",
        latex: "T_{max}=16",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "5",
          max: "60",
          step: "1",
        },
      },
      {
        type: "expression",
        id: "72",
        folderId: "60",
        color: "#000000",
        latex: "T=0",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "0",
          max: "T_{max}",
          step: "1",
        },
      },
      {
        type: "expression",
        id: "79",
        folderId: "60",
        color: "#2d70b3",
        latex:
          "T_{sim}=\\left\\{T_{switch}=0:\\min\\left(T+1,T_{max}\\right),\\max\\left(T-1,0\\right)\\right\\}",
      },
      {
        type: "expression",
        id: "80",
        folderId: "60",
        color: "#388c46",
        latex: "T_{switch}=1",
        slider: { hardMin: true, hardMax: true, min: "0", max: "1", step: "1" },
      },
      {
        type: "expression",
        id: "75",
        folderId: "60",
        color: "#388c46",
        latex:
          "P_{play}=\\left(P_{trigx}\\left(t+0.25\\right),P_{trigy}\\left(t+0.25\\right)\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "76",
        folderId: "60",
        color: "#6042a6",
        latex:
          "P_{pause}=\\left(\\frac{P_{square}\\left(2-2t+i+\\left\\{t>0.5:0.5,0\\right\\}\\right)+4\\operatorname{floor}\\left(2t\\right)-2}{3},P_{square}\\left(2-2t+0.25+i+\\left\\{t>0.5:0.5,0\\right\\}\\right)\\right)\\cdot0.75",
        hidden: true,
        parametricDomain: { min: "", max: "o" },
        domain: { min: "0", max: "o" },
      },
      {
        type: "expression",
        id: "85",
        folderId: "60",
        color: "#388c46",
        latex: "o=0.618",
        hidden: true,
        slider: { hardMin: true, hardMax: true, min: "0", max: "1" },
      },
      {
        type: "expression",
        id: "84",
        folderId: "60",
        color: "#2d70b3",
        latex: "i=-0.125",
        hidden: true,
      },
      {
        type: "expression",
        id: "77",
        folderId: "60",
        color: "#000000",
        latex: "A_{from}=P_{pause}",
        hidden: true,
      },
      {
        type: "expression",
        id: "78",
        folderId: "60",
        color: "#c74440",
        latex: "A_{to}=P_{play}",
        hidden: true,
      },
      {
        type: "expression",
        id: "51",
        folderId: "60",
        color: "#6042a6",
        latex:
          "p_{layButton}\\left(t\\right)=\\left(1-\\alpha\\right)^{2}P_{play}+2\\left(1-\\alpha\\right)\\alpha\\cdot\\left(\\cos\\left(\\tau t+\\frac{\\pi}{2}\\right),\\sin\\left(\\tau t+\\frac{\\pi}{2}\\right)\\right)+\\alpha^{2}P_{pause}",
        fill: true,
      },
      {
        type: "expression",
        id: "86",
        folderId: "60",
        color: "#6042a6",
        latex:
          ".\\left(\\left(1-\\alpha\\right)^{2}P_{play}+2\\left(1-\\alpha\\right)\\alpha P_{pause}+\\alpha^{2}P_{pause}\\right)",
      },
      {
        type: "expression",
        id: "88",
        folderId: "60",
        color: "#c74440",
        latex:
          ".\\left(\\left(1-\\alpha\\right)^{2}P_{play}+2\\left(1-\\alpha\\right)\\alpha\\left(\\cos\\left(\\tau t+\\frac{\\pi}{2}\\right),\\sin\\left(\\tau t+\\frac{\\pi}{2}\\right)\\right)+\\alpha^{2}P_{pause}\\right)",
      },
      {
        type: "expression",
        id: "87",
        folderId: "60",
        color: "#000000",
        latex:
          ".\\left(\\left(1-\\alpha\\right)P_{play}+\\alpha P_{pause}\\right)",
      },
      {
        type: "expression",
        id: "73",
        folderId: "60",
        color: "rgba(44,83,116,1)",
        latex: "1.5\\left(\\cos\\tau t,\\sin\\tau t\\right)",
        lines: true,
        fill: true,
        colorLatex: "c_{olor}",
        fillOpacity: "0.7",
        lineOpacity: "1",
        lineWidth: "3",
        clickableInfo: {
          enabled: true,
          latex: "T_{switch}\\to \\left\\{T_{switch}=0:1,0\\right\\}",
        },
      },
      {
        type: "expression",
        id: "68",
        folderId: "60",
        color: "rgba(58,68,75,1)",
        latex: "p_{layButton}\\left(t\\right)",
        fill: true,
        colorLatex: "c_{olor2}",
        fillOpacity: "0.5",
        lineOpacity: "1",
        lineWidth: "5",
      },
      {
        type: "expression",
        id: "13",
        folderId: "60",
        color: "#2d70b3",
        latex: "\\alpha=f_{polyrec}\\left(\\frac{T}{T_{max}}\\right)",
        slider: {
          hardMin: true,
          hardMax: true,
          animationPeriod: 400,
          loopMode: "PLAY_ONCE",
          min: "0",
          max: "1",
        },
      },
      {
        type: "expression",
        id: "89",
        folderId: "60",
        color: "#2d70b3",
        latex: ".f_{cubestep}\\left(\\frac{T}{T_{max}}\\right)",
      },
      { type: "folder", id: "101", title: "Spheres Params", collapsed: true },
      {
        type: "expression",
        id: "107",
        folderId: "101",
        color: "#6042a6",
        latex: "T_{sph}=3580.0000000000023",
      },
      {
        type: "expression",
        id: "108",
        folderId: "101",
        color: "#000000",
        latex: "T_{sphSim}=\\left\\{\\alpha>0:T_{sph}+\\alpha\\right\\}",
      },
      {
        type: "expression",
        id: "102",
        folderId: "101",
        color: "#6042a6",
        latex: "A_{c}=1",
      },
      {
        type: "expression",
        id: "103",
        folderId: "101",
        color: "#000000",
        latex: "f_{c}=1.1",
      },
      {
        type: "expression",
        id: "104",
        folderId: "101",
        color: "#c74440",
        latex: "f_{m}=0.6",
      },
      {
        type: "expression",
        id: "105",
        folderId: "101",
        color: "#2d70b3",
        latex: "f_{delta}=-2.2",
      },
      {
        type: "expression",
        id: "106",
        folderId: "101",
        color: "#388c46",
        latex:
          "\\left(10^{-8}t+2C_{fmod}\\left(\\frac{T_{sph}}{125}-\\frac{\\operatorname{floor}\\left(5t\\right)}{20}\\right),2S_{fmod}\\left(\\frac{T_{sph}}{125}-\\frac{\\operatorname{floor}\\left(5t\\right)}{20}\\right)\\right)",
        colorLatex: "c_{olor2}",
        lineWidth: "20",
      },
    ],
    ticker: { handlerLatex: "A_{2}", playing: true, open: true },
  },
  includeFunctionParametersInRandomSeed: true,
};
