const options = {
  settingsMenu: false,
  expressions: true,
  zoomButtons: false,
  showResetButtonOnGraphpaper: true,
  lockViewport: false,
  pointsOfInterest: false,
  authorFeatures: true,
  trace: false,
  actions: true,
};

const elt = document.getElementById("calculator");
const calculator = Desmos.Geometry(elt, options);

const state = {
  version: 11,
  randomSeed: "9c3869b862c7bbb84580636371a8fd20",
  graph: {
    viewport: {
      xmin: -10.437459188826717,
      ymin: -7.9216047383938974,
      xmax: 13.551798623673294,
      ymax: 9.403510536846335,
    },
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    degreeMode: true,
    product: "geometry-calculator",
  },
  expressions: {
    list: [
      {
        type: "folder",
        id: "**dcg_geo_folder**",
        title: "geometry",
        secret: true,
      },
      {
        type: "expression",
        id: "16",
        folderId: "**dcg_geo_folder**",
        color: "#2d70b3",
        latex: "\\token{8}=\\token{7}\\left(P\\right)",
      },
      {
        type: "expression",
        id: "2",
        color: "#000000",
        latex: "A=\\left(0,0\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "3",
        color: "#000000",
        latex: "B=\\left(4,0\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "4",
        color: "#000000",
        latex: "C=\\left(4,3\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "5",
        color: "#000000",
        latex: "D=\\left(2,3\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "6",
        color: "#2d70b3",
        latex: "P=\\operatorname{polygon}\\left(A,B,C,D\\right)",
      },
      {
        type: "expression",
        id: "63",
        color: "#2d70b3",
        latex: "A_{1}=\\left(6.78,1.12\\right)",
        dragMode: "XY",
      },
      {
        type: "expression",
        id: "64",
        color: "#388c46",
        latex: "v=\\operatorname{vector}\\left(A,A_{1}\\right)",
      },
      {
        type: "expression",
        id: "65",
        color: "#6042a6",
        latex: "P_{1}=\\operatorname{translate}\\left(P,t_{e}\\cdot v\\right)",
      },
      {
        type: "expression",
        id: "66",
        color: "#000000",
        latex: "t=1",
        slider: {
          hardMin: true,
          hardMax: true,
          loopMode: "PLAY_ONCE",
          isPlaying: false,
          min: "0",
          max: "1",
        },
      },
      {
        type: "expression",
        id: "69",
        color: "#388c46",
        latex: "t_{e}=1-\\left(1-t\\right)^{3}",
      },
      {
        type: "expression",
        id: "70",
        color: "#000000",
        latex: "X=\\left(-4.98,5.58\\right)",
      },
      {
        type: "expression",
        id: "71",
        color: "#000000",
        latex:
          "B_{X}=\\operatorname{polygon}\\left(X,X+\\left(1,0\\right),X+\\left(1,1\\right),X+\\left(0,1\\right)\\right)",
        clickableInfo: { enabled: true, latex: "p_{lay}" },
      },
      { type: "expression", id: "72", color: "#388c46", latex: "a=0" },
      {
        type: "expression",
        id: "73",
        color: "#c74440",
        latex: "p_{lay}=a\\to\\left\\{a=0:1,0\\right\\}",
      },
      { type: "expression", id: "74", color: "#2d70b3" },
      { type: "expression", id: "67", color: "#c74440" },
    ],
    ticker: { open: true },
  },
  geometryToolbar: { toolbar: "custom" },
};

calculator.setState(state);
calculator.setDefaultState(state);

isAnimating = calculator.HelperExpression({ latex: "a" });

isAnimating.observe("numericValue", () => {
  if (isAnimating.numericValue === 1) {
    calculator.setExpression({ id: "66", latex: "t=0", playing: true });
    calculator.setExpression({ id: "72", latex: "a=0" });
  }
});
