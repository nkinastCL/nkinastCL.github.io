const options = {
  settingsMenu: true,
  expressions: true,
  zoomButtons: false,
  showResetButtonOnGraphpaper: true,
  lockViewport: true,
  pointsOfInterest: false,
  authorFeatures: false,
  trace: false,
  colors: { "clp-blue": "#069ce1", black: "#000000" },
};

const elt = document.getElementById("calculator");
const calculator = Desmos.GraphingCalculator(elt, options);

const state = {
  version: 11,
  randomSeed: "de4271dc291fdc653980de0329f787ec",
  graph: {
    viewport: {
      xmin: -11,
      ymin: -11.363636363636365,
      xmax: 11,
      ymax: 11.363636363636365,
    },
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    xAxisNumbers: false,
    yAxisNumbers: false,
  },
  expressions: {
    list: [
      {
        type: "expression",
        id: "2",
        color: "#069ce1",
        latex: "a_{rrowWidth}=0.25",
      },
      {
        type: "expression",
        id: "1",
        color: "black",
        latex: "y=x+10\\left\\{-10<x<-10+a_{rrowWidth}\\right\\}",
      },
      {
        type: "expression",
        id: "4",
        color: "black",
        latex: "y=-x-10\\left\\{-10<x<-10+a_{rrowWidth}\\right\\}",
      },
      {
        type: "expression",
        id: "5",
        color: "black",
        latex: "y=x-10\\left\\{10-a_{rrowWidth}<x<10\\right\\}",
      },
      {
        type: "expression",
        id: "6",
        color: "black",
        latex: "y=-x+10\\left\\{10-a_{rrowWidth}<x<10\\right\\}",
      },
      {
        type: "expression",
        id: "7",
        color: "black",
        latex: "y=0\\left\\{-10<x<10\\right\\}",
      },
    ],
  },
};

calculator.setState(state);
