const options = {
  settingsMenu: false,
  expressions: true,
  zoomButtons: false,
  showResetButtonOnGraphpaper: true,
  lockViewport: false,
  pointsOfInterest: false,
  authorFeatures: false,
  trace: false,
};

const elt = document.getElementById("calculator");
const calculator = Desmos.Geometry(elt, options);

const state = {
  version: 11,
  randomSeed: "9c3869b862c7bbb84580636371a8fd20",
  graph: {
    viewport: {
      xmin: -17.243560091328398,
      ymin: -5.497976488005202,
      xmax: 11.530664428401224,
      ymax: 8.962019702375276,
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
        latex: "A=\\left(-2.1,0.26\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "3",
        color: "#000000",
        latex: "B=\\left(1.9,0.26\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "4",
        color: "#000000",
        latex: "C=\\left(1.9,3.26\\right)",
        hidden: true,
      },
      {
        type: "expression",
        id: "5",
        color: "#000000",
        latex: "D=\\left(-0.1,3.26\\right)",
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
        id: "7",
        color: "#6042a6",
        latex:
          "P_{rot}=\\operatorname{rotate}\\left(P,R_{otcenter},a_{1}\\right)",
      },
      {
        type: "expression",
        id: "35",
        color: "#c74440",
        latex: "R_{otcenter}=\\left(-3.48,0.34\\right)",
        pointSize: "12",
        movablePointSize: "12",
      },
      {
        type: "expression",
        id: "18",
        color: "#c74440",
        latex:
          "R=\\operatorname{circle}\\left(R_{otcenter},\\operatorname{distance}\\left(R_{otcenter},B\\right)\\right)",
        hidden: true,
        lines: false,
      },
      {
        type: "expression",
        id: "25",
        color: "#6042a6",
        latex: "X=\\operatorname{glider}\\left(R,0.998\\right)",
        pointSize: "12",
        movablePointSize: "12",
      },
      {
        type: "expression",
        id: "26",
        color: "#c74440",
        latex:
          "a=\\left\\{X.y>f\\left(X.x\\right):\\operatorname{angle}\\left(X,R_{otcenter},B\\right),360-\\operatorname{angle}\\left(X,R_{otcenter},B\\right)\\right\\}",
      },
      {
        type: "expression",
        id: "46",
        color: "#2d70b3",
        latex:
          "f\\left(x\\right)=\\left(\\frac{B.y-R_{otcenter}.y}{B.x-R_{otcenter}.x}\\right)\\left(x-B.x\\right)+B.y",
        hidden: true,
      },
      {
        type: "expression",
        id: "49",
        color: "#000000",
        latex:
          "a_{1}=\\left\\{R_{otcenter}.x<B.x:a,\\left\\{X.y>f\\left(X.x\\right):360-\\operatorname{angle}\\left(X,R_{otcenter},B\\right),\\operatorname{angle}\\left(X,R_{otcenter},B\\right)\\right\\}\\right\\}",
      },
      {
        type: "expression",
        id: "52",
        color: "#000000",
        latex: "\\left(-2.98,8.22\\right)",
        showLabel: true,
        label:
          "Drag the red point to set the center of rotation. Drag the purple point to rotate the polygon.",
        hidden: true,
        dragMode: "XY",
      },
      {
        type: "expression",
        id: "53",
        color: "#388c46",
        latex: "L=\\operatorname{vertices}\\left(P_{rot}\\right)",
        hidden: true,
        points: false,
        dragMode: "NONE",
      },
      {
        type: "expression",
        id: "58",
        color: "#000000",
        latex: "A_{1}=L\\left[1\\right]",
        label: "`A\\prime`",
        hidden: true,
        labelOrientation: "below_left",
      },
      {
        type: "expression",
        id: "59",
        color: "#000000",
        latex: "B_{1}=L\\left[2\\right]",
        label: "`B\\prime`",
        hidden: true,
        labelOrientation: "below_right",
      },
      {
        type: "expression",
        id: "60",
        color: "#000000",
        latex: "C_{1}=L\\left[3\\right]",
        label: "`C\\prime`",
        hidden: true,
        labelOrientation: "above_right",
      },
      {
        type: "expression",
        id: "61",
        color: "#000000",
        latex: "D_{1}=L\\left[4\\right]",
        label: "`D\\prime`",
        hidden: true,
        labelOrientation: "above_left",
      },
    ],
  },
  geometryToolbar: { toolbar: "custom" },
};

calculator.setState(state);
calculator.setDefaultState(state);
