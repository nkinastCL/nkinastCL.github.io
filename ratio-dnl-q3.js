const options = {
  settingsMenu: false,
  expressions: false,
  zoomButtons: false,
  showResetButtonOnGraphpaper: true,
  lockViewport: false,
  pointsOfInterest: false,
  authorFeatures: true,
  trace: false,
  colors: { "clp-blue": "#069ce1" },
};
const elt = document.getElementById("calculator");
const calculator = Desmos.GraphingCalculator(elt, options);

const state = {
  version: 11,
  randomSeed: "c9f2b0bbf32382b6ec89381e3b1ba930",
  graph: {
    viewport: {
      xmin: -3,
      ymin: -10,
      xmax: 21.5,
      ymax: 11.18603299698208,
    },
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
  },
  expressions: {
    list: [
      {
        type: "expression",
        id: "2",
        color: "#000000",
        latex: "y=2\\left\\{0\\le x\\le20.5\\right\\}",
      },
      {
        type: "expression",
        id: "3",
        color: "#000000",
        latex: "y=0\\left\\{0\\le x\\le20.5\\right\\}",
      },
      {
        type: "expression",
        id: "4",
        color: "#000000",
        latex: "y=x-18.5\\left\\{20.25<x<20.5\\right\\}",
      },
      {
        type: "expression",
        id: "6",
        color: "#000000",
        latex: "y=x-20.5\\left\\{20.25<x<20.5\\right\\}",
      },
      {
        type: "expression",
        id: "7",
        color: "#000000",
        latex: "y=-x+20.5\\left\\{20.25<x<20.5\\right\\}",
      },
      {
        type: "expression",
        id: "8",
        color: "#000000",
        latex: "y=-x+22.5\\left\\{20.25<x<20.5\\right\\}",
      },
      {
        type: "expression",
        id: "14",
        color: "#2d70b3",
        latex: "h_{over1p}=\\left(h_{1px},2\\right)",
        hidden: true,
        dragMode: "NONE",
        pointOpacity: ".5",
        pointSize: "12",
        movablePointSize: "12",
      },

      {
        type: "expression",
        id: "16",
        color: "#388c46",
        latex: "h_{over2p}=\\left(h_{2px},0\\right)",
        hidden: true,
        dragMode: "NONE",
        pointOpacity: ".5",
        pointSize: "12",
        movablePointSize: "12",
      },
      {
        type: "expression",
        id: "17",
        color: "#6042a6",
        latex: "h_{1ax}=8.332036648762116",
        slider: {
          hardMin: true,
        },
      },
      {
        type: "expression",
        id: "18",
        color: "#000000",
        latex: "h_{2ax}=1.7047071918254773",
      },
      {
        type: "expression",
        id: "19",
        color: "#c74440",
        latex: "h_{1px}=1.7047071918254773",
      },
      {
        type: "expression",
        id: "20",
        color: "#2d70b3",
        latex: "h_{2px}=8.332036648762116",
      },
      {
        type: "expression",
        id: "24",
        color: "#c74440",
        latex: "C=\\ \\left[0...n_{ticks}\\right]",
      },
      {
        type: "expression",
        id: "25",
        color: "#000000",
        latex: "x=r_{lt}C\\left\\{1.8<y<2.2\\right\\}",
      },
      {
        type: "expression",
        id: "26",
        color: "#000000",
        latex: "x=r_{lt}C\\left\\{-.2<y<.2\\right\\}",
      },
      {
        type: "expression",
        id: "27",
        color: "#000000",
        latex: "\\left(r_{lt}C,3\\right)",
        label: "${C_3}",
        hidden: true,
        dragMode: "NONE",
        labelSize: "1",
      },
      {
        type: "expression",
        id: "30",
        color: "#000000",
        latex: "\\left(r_{lt}C,-1\\right)",
        label: "${C_4}",
        hidden: true,
        dragMode: "NONE",
        labelSize: "1",
      },
      {
        type: "expression",
        id: "28",
        color: "#2d70b3",
        latex: "C_{3}=i_{1}\\cdot C",
      },
      {
        type: "expression",
        id: "29",
        color: "#388c46",
        latex: "C_{4}=i_{2}\\cdot C",
      },
      {
        type: "expression",
        id: "31",
        color: "clp-blue",
        latex: "x=d_{x}\\left\\{0<y<2\\right\\}",
        hidden: false,
        lineStyle: "DASHED",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "32",
        color: "#c74440",
        latex: "i_{1}=1",
      },
      {
        type: "expression",
        id: "33",
        color: "#2d70b3",
        latex: "i_{2}=.125",
      },
      {
        type: "expression",
        id: "34",
        color: "#c74440",
        latex: "n_{ticks}=16",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "1",
          max: "20",
          step: "1",
        },
      },
      {
        type: "expression",
        id: "37",
        color: "#6042a6",
        latex: "r_{lt}=\\frac{20}{n_{ticks}}",
      },
      {
        type: "expression",
        id: "39",
        color: "#2d70b3",
        latex: "d_{x}=5",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "0",
          max: "20",
        },
      },
      {
        type: "expression",
        id: "40",
        color: "clp-blue",
        latex: "\\left(d_{x},1\\right)",
        dragMode: "X",
      },
      {
        type: "expression",
        id: "41",
        latex: "w=r_{lt}",
      },
      {
        type: "expression",
        id: "13",
        color: "black",
        latex: "h_{over1a}=\\left(d_{x},2\\right)",
        showLabel: true,
        label: " ",
        hidden: false,
        dragMode: "NONE",
        pointOpacity: "1",
        pointSize: "12",
        movablePointSize: "12",
      },
      {
        type: "expression",
        id: "15",
        color: "black",
        latex: "h_{over2a}=\\left(d_{x},0\\right)",
        showLabel: true,
        label: " ",
        hidden: false,
        dragMode: "NONE",
        pointOpacity: "1",
        pointSize: "12",
        movablePointSize: "12",
      },
      {
        type: "expression",
        id: "42",
        color: "clp-blue",
        latex: "x=5\\left\\{0<y<2\\right\\}",
        hidden: false,
        lineStyle: "DASHED",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "43",
        color: "clp-blue",
        latex: "h_{over1a}=\\left(5,2\\right)",
        showLabel: true,
        label: " ",
        hidden: false,
        dragMode: "NONE",
        pointOpacity: "1",
        pointSize: "12",
        movablePointSize: "12",
      },
      {
        type: "expression",
        id: "44",
        color: "clp-blue",
        latex: "h_{over2a}=\\left(5,0\\right)",
        showLabel: true,
        label: " ",
        hidden: false,
        dragMode: "NONE",
        pointOpacity: "1",
        pointSize: "12",
        movablePointSize: "12",
      },
      {
        type: "expression",
        id: "45",
        color: "#000000",
        latex: "\\left(5,3\\right)",
        label: "1",
        showLabel: true,
        hidden: true,
        dragMode: "NONE",
        labelSize: "1.25",
      },
      {
        type: "expression",
        id: "46",
        color: "#000000",
        latex: "\\left(5,-1\\right)",
        label: "0.50",
        showLabel: true,
        hidden: true,
        dragMode: "NONE",
        labelSize: "1.25",
      },
      {
        type: "expression",
        id: "47",
        color: "#000000",
        latex: "\\left(5,3\\right)",
        label: "1",
        showLabel: false,
        hidden: true,
        dragMode: "NONE",
        labelSize: "1.25",
      },
      {
        type: "expression",
        id: "48",
        color: "#000000",
        latex: "\\left(5,-1\\right)",
        label: "1",
        showLabel: false,
        hidden: true,
        dragMode: "NONE",
        labelSize: "1.25",
      },
      {
        type: "expression",
        id: "49",
        color: "#000000",
        latex: "\\left(-1.8,2\\right)",
        label: "Bananas (lb)",
        showLabel: true,
        hidden: true,
        dragMode: "NONE",
        labelSize: "1",
      },
      {
        type: "expression",
        id: "50",
        color: "#000000",
        latex: "\\left(-1.43,0\\right)",
        label: "Cost ($)",
        showLabel: true,
        hidden: true,
        dragMode: "NONE",
        labelSize: "1",
      },
    ],
  },
};

calculator.setDefaultState(state);
calculator.setState(state);
const calculatorRect = elt.getBoundingClientRect();

let hoverVisible = false;
let xList = [];
const SNAP_DISTANCE = 0.5;
const NEAR_DISTANCE = 0.15;

const [
  hoverPointActive1,
  hoverPointPassive1,
  hoverPointActive2,
  hoverPointPassive2,
  barbellDragPoint,
] = ["13", "14", "15", "16", "40"];

const show = (...ids) => {
  ids.forEach((id) => {
    calculator.setExpression({ id: id, hidden: false });
  });
};

const hide = (...ids) => {
  ids.forEach((id) => {
    calculator.setExpression({ id: id, hidden: true });
  });
};

const scaleRatio = calculator.HelperExpression({ latex: "w" });

const snapX = (x) => {
  const snapPoint =
    Math.round(x / scaleRatio.numericValue) * scaleRatio.numericValue;
  if (Math.abs(x - snapPoint) < SNAP_DISTANCE) {
    return snapPoint;
  } else return x;
};

const nearTo = (x, y) => {
  return Math.abs(x - y) < NEAR_DISTANCE;
};

let barbellDragPointX = calculator.HelperExpression({ latex: "d_{x}" });

barbellDragPointX.observe("numericValue", () => {
  const x = barbellDragPointX.numericValue;
  const snapPoint =
    Math.round(x / scaleRatio.numericValue) * scaleRatio.numericValue;
  if (!nearTo(x, 5) && nearTo(snapPoint, x)) {
    calculator.setExpression({
      id: "47",
      latex: `\\left(${snapX(x)},3\\right)`,
      label: `${snapX(x) / scaleRatio.numericValue / 4}`,
      showLabel: true,
    });
    calculator.setExpression({
      id: "48",
      latex: `\\left(${snapX(x)},-1\\right)`,
      label: `${snapX(x) / scaleRatio.numericValue / 8}`,
      showLabel: true,
    });
  } else {
    calculator.setExpression({
      id: "47",
      showLabel: false,
    });
    calculator.setExpression({
      id: "48",
      showLabel: false,
    });
  }
});

elt.addEventListener("mouseup", () => {
  const x = barbellDragPointX.numericValue;
  calculator.setExpression({ id: "39", latex: `d_{x}=${snapX(x)}` });
});

calculator.observeEvent("graphReset", () => {
  barbellDragPointX = calculator.HelperExpression({ latex: "d_{x}" });
});
