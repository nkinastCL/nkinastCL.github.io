// TODO: Adjust x min based on max label width?

const options = {
  settingsMenu: true,
  expressions: true,
  zoomButtons: false,
  showResetButtonOnGraphpaper: true,
  lockViewport: true,
  pointsOfInterest: false,
  authorFeatures: true,
  trace: false,
  colors: {
    "clp-blue": "#069ce1",
    "clp-orange": "#f5ad61",
    "clp-beige": "#fde4d0",
    "clp-purple": "#be95be",
    black: "#000000",
    white: "#ffffff",
  },
  actions: true,
};

const elt = document.getElementById("calculator");
const calculator = Desmos.GraphingCalculator(elt, options);

const makeTape = (tapeNum) => {
  return `t_{ape${tapeNum}}=\\left\\{c_{trlPt${tapeNum}X}=0:\\operatorname{polygon}\\left(\\left(0,${
    tapeNum - 1
  }*v_{erticalDistance}\\right),\\left(0,${
    tapeNum - 1
  }*v_{erticalDistance}\\right),\\left(0,r_{ectHeight}+${
    tapeNum - 1
  }*v_{erticalDistance}\\right),\\left(0,r_{ectHeight}+${
    tapeNum - 1
  }*v_{erticalDistance}\\right)\\right),\\operatorname{polygon}\\left(\\left(N_{${tapeNum}}\\cdot r_{ectWidth},${
    tapeNum - 1
  }*v_{erticalDistance}\\right),\\left(\\left(N_{${tapeNum}}+1\\right)\\cdot r_{ectWidth},${
    tapeNum - 1
  }*v_{erticalDistance}\\right),\\left(\\left(N_{${tapeNum}}+1\\right)\\cdot r_{ectWidth},r_{ectHeight}+${
    tapeNum - 1
  }*v_{erticalDistance}\\right),\\left(N_{${tapeNum}}\\cdot r_{ectWidth},r_{ectHeight}+${
    tapeNum - 1
  }*v_{erticalDistance}\\right)\\right)\\right\\}`;
};

const makeCtrlPtArrows = (tapeNum, direction) => {
  return `c_{trlPt${tapeNum}Arrow${direction}}=\\operatorname{polygon}\\left(\\left[c_{trlPt${tapeNum}}.x,c_{trlPt${tapeNum}}.x${
    direction === "L" ? "-" : "+"
  }r_{ectWidth}\\cdot.15,c_{trlPt${tapeNum}}.x\\right]${
    direction === "L" ? "-" : "+"
  }.15\\cdot r_{ectWidth},\\left[c_{trlPt${tapeNum}}.y-.2\\cdot r_{ectHeight},c_{trlPt${tapeNum}}.y,c_{trlPt${tapeNum}}.y+.2\\cdot r_{ectHeight}\\right]\\right)`;
};

const makeLabel = (tapeNum) => {
  return `l_{abel${tapeNum}}=\\left(0-.2\\cdot r_{ectWidth},c_{trlPt${tapeNum}}.y\\right)`;
};

const state = {
  version: 11,
  randomSeed: "de4271dc291fdc653980de0329f787ec",
  graph: {
    viewport: {
      xmin: -4,
      ymin: -2,
      xmax: 28,
      ymax: 10,
    },
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    xAxisNumbers: false,
    yAxisNumbers: false,
    polarNumbers: false,
  },
  expressions: {
    list: [
      { type: "folder", id: "999", title: "Constants", collapsed: true },
      {
        type: "expression",
        id: "1",
        folderId: "999",
        color: "#069ce1",
        latex: "o_{pacityEnabled}=0.4",
        slider: { hardMin: true, hardMax: true, min: "0", max: "1" },
      },
      {
        type: "expression",
        id: "2",
        folderId: "999",
        color: "#f5ad61",
        latex: "o_{pacityDisabled}=0",
        slider: { hardMin: true, hardMax: true, min: "0", max: "1" },
      },
      {
        type: "expression",
        id: "3",
        folderId: "999",
        color: "black",
        latex: "r_{ectHeight}=1",
      },
      {
        type: "expression",
        id: "4",
        folderId: "999",
        color: "#069ce1",
        latex: "r_{ectWidth}=2*r_{ectHeight}",
      },
      {
        type: "expression",
        id: "5",
        folderId: "999",
        color: "#069ce1",
        latex: "m_{axRects}=12",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "0",
          max: "16",
          step: "1",
        },
      },
      {
        type: "expression",
        id: "6",
        folderId: "999",
        color: "black",
        latex: "N_{1}=\\left[0...\\frac{c_{trlPt1X}}{r_{ectWidth}}-1\\right]",
      },
      {
        type: "expression",
        id: "20",
        folderId: "999",
        color: "black",
        latex: "N_{2}=\\left[0...\\frac{c_{trlPt2X}}{r_{ectWidth}}-1\\right]",
      },
      {
        type: "expression",
        id: "21",
        folderId: "999",
        color: "black",
        latex: "N_{3}=\\left[0...\\frac{c_{trlPt3X}}{r_{ectWidth}}-1\\right]",
      },
      {
        type: "expression",
        id: "13",
        folderId: "999",
        color: "black",
        latex: "v_{erticalDistance}=2*r_{ectWidth}",
      },
      { type: "folder", id: "98", title: "Tape 1", collapsed: true },
      {
        type: "expression",
        id: "7",
        folderId: "98",
        color: "#be95be",
        latex: makeTape(1),
        fillOpacity: ".4",
        lineOpacity: "1",
      },
      {
        type: "expression",
        id: "8",
        folderId: "98",
        color: "#be95be",
        latex: "c_{trlPt1}=\\left(c_{trlPt1X},0.5\\cdot r_{ectHeight}\\right)",
        dragMode: "X",
        pointOpacity: "1",
      },
      {
        type: "expression",
        id: "14",
        folderId: "98",
        color: "#be95be",
        latex: makeCtrlPtArrows(1, "L"),
        lines: true,
        fillOpacity: "1",
        lineOpacity: "1",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "1004",
        folderId: "98",
        color: "#be95be",
        latex: makeCtrlPtArrows(1, "R"),
        lines: true,
        fillOpacity: "1",
        lineOpacity: "1",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "9",
        folderId: "98",
        color: "#f5ad61",
        latex: "c_{trlPt1X}=12",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "0",
          max: "m_{axRects}\\cdot r_{ectWidth}",
          step: "r_{ectWidth}",
        },
      },
      { type: "folder", id: "97", title: "Tape 2", collapsed: true },
      {
        type: "expression",
        id: "10",
        folderId: "97",
        color: "#f5ad61",
        latex: makeTape(2),
        fillOpacity: ".4",
        lineOpacity: "1",
      },
      {
        type: "expression",
        id: "11",
        folderId: "97",
        color: "#f5ad61",
        latex:
          "c_{trlPt2}=\\left(c_{trlPt2X},0.5\\cdot r_{ectHeight}+v_{erticalDistance}\\right)",
        dragMode: "X",
      },
      {
        type: "expression",
        id: "30",
        folderId: "97",
        color: "#f5ad61",
        latex: makeCtrlPtArrows(2, "L"),
        lines: true,
        fillOpacity: "1",
        lineOpacity: "1",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "31",
        folderId: "97",
        color: "#f5ad61",
        latex: makeCtrlPtArrows(2, "R"),
        lines: true,
        fillOpacity: "1",
        lineOpacity: "1",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "12",
        folderId: "97",
        color: "#fde4d0",
        latex: "c_{trlPt2X}=18",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "0",
          max: "m_{axRects}\\cdot r_{ectWidth}",
          step: "r_{ectWidth}",
        },
      },
      { type: "folder", id: "96", title: "Tape 3", collapsed: true },
      {
        type: "expression",
        id: "15",
        folderId: "96",
        color: "#069ce1",
        latex: makeTape(3),
        fillOpacity: ".4",
        lineOpacity: "1",
      },
      {
        type: "expression",
        id: "16",
        folderId: "96",
        color: "#069ce1",
        latex:
          "c_{trlPt3}=\\left(c_{trlPt3X},0.5\\cdot r_{ectHeight}+2*v_{erticalDistance}\\right)",
        dragMode: "X",
      },
      {
        type: "expression",
        id: "40",
        folderId: "96",
        color: "#069ce1",
        latex: makeCtrlPtArrows(3, "L"),
        lines: true,
        fillOpacity: "1",
        lineOpacity: "1",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "41",
        folderId: "96",
        color: "#069ce1",
        latex: makeCtrlPtArrows(3, "R"),
        lines: true,
        fillOpacity: "1",
        lineOpacity: "1",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "17",
        folderId: "96",
        color: "#fde4d0",
        latex: "c_{trlPt3X}=8",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "0",
          max: "m_{axRects}\\cdot r_{ectWidth}",
          step: "r_{ectWidth}",
        },
      },
      {
        type: "expression",
        id: "1000",
        color: "#000000",
        latex: makeLabel(1),
        showLabel: true,
        label: "Label",
        hidden: true,
        labelOrientation: "left",
      },
      {
        type: "expression",
        id: "1001",
        color: "#000000",
        latex: makeLabel(2),
        showLabel: true,
        label: "Label",
        hidden: true,
        labelOrientation: "left",
      },
      {
        type: "expression",
        id: "1002",
        color: "#000000",
        latex: makeLabel(3),
        showLabel: true,
        label: "Label",
        hidden: true,
        labelOrientation: "left",
      },
    ],
  },
};

calculator.setState(state);

let maxRects = 0;

const maxRectsExp = calculator.HelperExpression({ latex: "m_{axRects}" });
maxRectsExp.observe("numericValue", () => {
  maxRects = maxRectsExp.numericValue;
});

rectHeight = calculator.HelperExpression({ latex: "r_{ectHeight}" });
rectHeight.observe("numericValue", () => {
  const n = rectHeight.numericValue;
  calculator.setMathBounds({
    left: -3 * n,
    right: 2 * (maxRects + 1) * n,
    bottom: -2 * n,
    top: 11 * n,
  });
});
