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

const ctrlPtArrows = (n, c) => {
  return `c_{trlPt${n}Arrow${c}}=\\operatorname{polygon}\\left(\\left[c_{trlPt${n}}.x,c_{trlPt${n}}.x${
    c === "L" ? "-" : "+"
  }r_{ectWidth}\\cdot.15,c_{trlPt${n}}.x\\right]${
    c === "L" ? "-" : "+"
  }.15\\cdot r_{ectWidth},\\left[c_{trlPt${n}}.y-.2\\cdot r_{ectHeight},c_{trlPt${n}}.y,c_{trlPt${n}}.y+.2\\cdot r_{ectHeight}\\right]\\right)`;
};

const state = {
  version: 11,
  randomSeed: "de4271dc291fdc653980de0329f787ec",
  graph: {
    viewport: {
      xmin: -4,
      ymin: -6.666666666666666,
      xmax: 28,
      ymax: 14.666666666666666,
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
        latex: "m_{axRects}=16",
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
        latex: "v_{erticalDistance}=4",
      },
      { type: "folder", id: "98", title: "Tape 1" },
      {
        type: "expression",
        id: "7",
        folderId: "98",
        color: "#be95be",
        latex:
          "t_{ape1}=\\left\\{c_{trlPt1X}=0:\\operatorname{polygon}\\left(\\left(0,0\\right),\\left(0,0\\right),\\left(0,r_{ectHeight}\\right),\\left(0,r_{ectHeight}\\right)\\right),\\operatorname{polygon}\\left(\\left(N_1\\cdot r_{ectWidth},0\\right),\\left(\\left(N_1+1\\right)\\cdot r_{ectWidth},0\\right),\\left(\\left(N_1+1\\right)\\cdot r_{ectWidth},r_{ectHeight}\\right),\\left(N_1\\cdot r_{ectWidth},r_{ectHeight}\\right)\\right)\\right\\}",
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
        latex: ctrlPtArrows(1, "L"),
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
        latex: ctrlPtArrows(1, "R"),
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
        latex:
          "t_{ape2}=\\left\\{c_{trlPt2X}=0:\\operatorname{polygon}\\left(\\left(0,v_{erticalDistance}\\right),\\left(0,v_{erticalDistance}\\right),\\left(0,r_{ectHeight}+v_{erticalDistance}\\right),\\left(0,r_{ectHeight}+v_{erticalDistance}\\right)\\right),\\operatorname{polygon}\\left(\\left(N_{2}\\cdot r_{ectWidth},v_{erticalDistance}\\right),\\left(\\left(N_{2}+1\\right)\\cdot r_{ectWidth},v_{erticalDistance}\\right),\\left(\\left(N_{2}+1\\right)\\cdot r_{ectWidth},r_{ectHeight}+v_{erticalDistance}\\right),\\left(N_{2}\\cdot r_{ectWidth},r_{ectHeight}+v_{erticalDistance}\\right)\\right)\\right\\}",
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
        folderId: "98",
        color: "#f5ad61",
        latex: ctrlPtArrows(2, "L"),
        lines: true,
        fillOpacity: "1",
        lineOpacity: "1",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "31",
        folderId: "98",
        color: "#f5ad61",
        latex: ctrlPtArrows(2, "R"),
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
        latex:
          "t_{ape3}=\\left\\{c_{trlPt3X}=0:\\operatorname{polygon}\\left(\\left(0,2*v_{erticalDistance}\\right),\\left(0,2*v_{erticalDistance}\\right),\\left(0,r_{ectHeight}+2*v_{erticalDistance}\\right),\\left(0,r_{ectHeight}+2*v_{erticalDistance}\\right)\\right),\\operatorname{polygon}\\left(\\left(N_{3}\\cdot r_{ectWidth},2*v_{erticalDistance}\\right),\\left(\\left(N_{3}+1\\right)\\cdot r_{ectWidth},2*v_{erticalDistance}\\right),\\left(\\left(N_{3}+1\\right)\\cdot r_{ectWidth},r_{ectHeight}+2*v_{erticalDistance}\\right),\\left(N_{3}\\cdot r_{ectWidth},r_{ectHeight}+2*v_{erticalDistance}\\right)\\right)\\right\\}",
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
        folderId: "98",
        color: "#069ce1",
        latex: ctrlPtArrows(3, "L"),
        lines: true,
        fillOpacity: "1",
        lineOpacity: "1",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "41",
        folderId: "98",
        color: "#069ce1",
        latex: ctrlPtArrows(3, "R"),
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
        latex: "l_{abel1}=\\left(0-.2\\cdot r_{ectWidth},c_{trlPt1}.y\\right)",
        showLabel: true,
        label: "Label",
        hidden: true,
        labelOrientation: "left",
      },
      {
        type: "expression",
        id: "1001",
        color: "#000000",
        latex: "l_{abel2}=\\left(0-.2\\cdot r_{ectWidth},c_{trlPt2}.y\\right)",
        showLabel: true,
        label: "Label",
        hidden: true,
        labelOrientation: "left",
      },
      {
        type: "expression",
        id: "1002",
        color: "#000000",
        latex: "l_{abel3}=\\left(0-.2\\cdot r_{ectWidth},c_{trlPt3}.y\\right)",
        showLabel: true,
        label: "Label",
        hidden: true,
        labelOrientation: "left",
      },
    ],
  },
};

calculator.setState(state);
