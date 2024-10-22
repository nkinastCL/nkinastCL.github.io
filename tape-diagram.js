const options = {
  settingsMenu: true,
  expressions: true,
  zoomButtons: false,
  showResetButtonOnGraphpaper: true,
  lockViewport: false,
  pointsOfInterest: false,
  authorFeatures: true,
  trace: false,
  colors: {
    "clp-blue": "#069ce1",
    "clp-orange": "#f5ad61",
    "clp-beige": "#fde4d0",
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
    viewport: {
      xmin: -9.354164486740684,
      ymin: -9.336058417134339,
      xmax: 39.02951407110562,
      ymax: 15.823454432945748,
    },
    showXAxis: false,
    showYAxis: false,
    xAxisNumbers: false,
    yAxisNumbers: false,
    polarNumbers: false,
  },
  expressions: {
    list: [
      {
        type: "expression",
        id: "1",
        color: "#000000",
        latex: "r_{ectHeight}=1",
      },
      {
        type: "expression",
        id: "2",
        color: "#069ce1",
        latex: "r_{ectWidth}=2",
      },
      {
        type: "expression",
        id: "3",
        color: "#069ce1",
        latex:
          "r_{ect11}=\\operatorname{polygon}\\left(\\left[0,r_{ectWidth},r_{ectWidth},0\\right],\\left[0,0,r_{ectHeight},r_{ectHeight}\\right]\\right)",
        hidden: true,
        dragMode: "NONE",
      },
      {
        type: "expression",
        id: "4",
        color: "#069ce1",
        latex: "r_{ectOutline11}=r_{ect11}",
        hidden: true,
        lineStyle: "DASHED",
        fillOpacity: "0",
        lineWidth: "1.5",
      },
      {
        type: "expression",
        id: "5",
        color: "#069ce1",
        latex:
          "r_{ect12}=\\operatorname{polygon}\\left(\\left[r_{ectWidth},2*r_{ectWidth},2*r_{ectWidth},r_{ectWidth}\\right],\\left[0,0,r_{ectHeight},r_{ectHeight}\\right]\\right)",
        hidden: true,
        dragMode: "NONE",
      },
      {
        type: "expression",
        id: "46",
        color: "#069ce1",
        latex: "r_{ectOutline12}=r_{ect12}",
        hidden: true,
        lineStyle: "DASHED",
        fillOpacity: "0",
        lineWidth: "1.5",
      },
      {
        type: "expression",
        id: "47",
        color: "#069ce1",
        latex: "m_{axRects}=10",
      },
      {
        type: "expression",
        id: "48",
        color: "#000000",
        latex: "N=\\left[0...m_{axRects}\\right]",
      },
      {
        type: "expression",
        id: "49",
        color: "#069ce1",
        latex:
          "t_{ape1}=\\operatorname{polygon}\\left(\\left(N\\cdot r_{ectWidth},0\\right),\\left(\\left(N+1\\right)\\cdot r_{ectWidth},0\\right),\\left(\\left(N+1\\right)\\cdot r_{ectWidth},r_{ectHeight}\\right),\\left(N\\cdot r_{ectWidth},r_{ectHeight}\\right)\\right)",
        fillOpacity: "o_{pacities1}",
        lineOpacity: "o_{pacities1}",
        clickableInfo: {
          enabled: true,
          latex:
            "\\left\\{o_{pacities1}\\left[\\operatorname{index}\\right]=0:a_{show}\\left(\\operatorname{index}\\right),a_{hide}\\left(\\operatorname{index}\\right)\\right\\}",
        },
      },
      {
        type: "expression",
        id: "51",
        color: "#000000",
        latex:
          "o_{pacities1}=\\left[0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4\\right]",
      },
      {
        type: "expression",
        id: "52",
        color: "#ffffff",
        latex:
          "a_{hide}\\left(i_{ndex}\\right)=o_{pacities1}\\to\\left[\\left\\{n=i_{ndex}:0,o_{pacities1}\\left[n\\right]\\right\\}\\ \\operatorname{for}\\ n=\\left[1...\\operatorname{length}\\left(o_{pacities1}\\right)\\right]\\right]",
      },
      {
        type: "expression",
        id: "60",
        color: "#000000",
        latex:
          "a_{show}\\left(i_{ndex}\\right)=o_{pacities1}\\to\\left[\\left\\{n=i_{ndex}:0.4,o_{pacities1}\\left[n\\right]\\right\\}\\ \\operatorname{for}\\ n=\\left[1...\\operatorname{length}\\left(o_{pacities1}\\right)\\right]\\right]",
      },
      {
        type: "expression",
        id: "54",
        color: "#000000",
        latex: "b=o_{pacities1}",
      },
      {
        type: "expression",
        id: "55",
        color: "#ffffff",
        latex: "o_{pacities1}\\left[3\\right]",
      },
      {
        type: "expression",
        id: "57",
        color: "#000000",
        latex:
          "A=\\left[\\left\\{n=2:0,o_{pacities1}\\left[n\\right]\\right\\}\\operatorname{for}n=\\left[1...\\operatorname{length}\\left(o_{pacities1}\\right)\\right]\\right]",
      },
    ],
  },
};

calculator.setState(state);
