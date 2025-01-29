const options = {
  settingsMenu: false,
  expressions: true,
  zoomButtons: false,
  showResetButtonOnGraphpaper: true,
  lockViewport: false,
  pointsOfInterest: false,
  authorFeatures: true,
  trace: false,
  keypad: false,
  pasteGrapheLink: true,
  colors: {
    blueA: "#a0b0ea",
    blueB: "#4264d9",
    blueC: "#2a4cc2",
    blueD: "#1f2eb5",
    blueE: "#002195",
    blueF: "#031371",

    purpleA: "#CDB4F3",
    purpleB: "#8150CF",
    purpleC: "#6B31C7",
    purpleD: "#5421AC",
    purpleE: "#39128D",
    purpleF: "#200761",

    greenA: "#8AD3B9",
    greenB: "#26996F",
    greenC: "#008756",
    greenD: "#03784C",
    greenE: "#00613C",
    greenF: "#00452B",

    redA: "#F0959C",
    redB: "#E64A56",
    redC: "#E12A38",
    redD: "#C4212C",
    redE: "#A10712",
    redF: "#6E303A",

    yellowA: "#F9DFB8",
    yellowB: "#F2B558",
    yellowC: "#EC9511",
    yellowD: "#E7820C",
    yellowE: "#DF6705",
    yellowF: "#B55100",

    black: "#000000",
    white: "#ffffff",
  },
  actions: true,
};

const elt = document.getElementById("calculator");
const calculator = Desmos.GraphingCalculator(elt, options);

const state = {
  version: 11,
  randomSeed: "de4271dc291fdc653980de0329f787ec",
  graph: {
    viewport: { xmin: -10, ymin: -10, xmax: 10, ymax: 10 },
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    xAxisNumbers: false,
    yAxisNumbers: false,
    polarNumbers: false,
    squareAxes: false,
  },
  expressions: { list: [] },
};

calculator.setState(state);
