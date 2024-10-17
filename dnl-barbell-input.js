const options = {
  settingsMenu: false,
  expressions: false,
  zoomButtons: false,
  showResetButtonOnGraphpaper: false,
  lockViewport: true,
  pointsOfInterest: false,
  authorFeatures: false,
  trace: false,
  colors: { "clp-blue": "#069ce1", black: "#000000" },
  border: false,
};

const elt = document.getElementById("calculator");
const calculator = Desmos.GraphingCalculator(elt, options);

const state = {
  version: 11,
  randomSeed: "a4012ada39bb42c456b166fb67fad18a",
  graph: {
    viewport: {
      xmin: -1.7999999999999998,
      ymin: -4.5,
      xmax: 6.300000000000001,
      ymax: 4.5,
    },
    showGrid: false,
    showXAxis: false,
    showYAxis: false,
    xAxisNumbers: false,
    yAxisNumbers: false,
    polarNumbers: false,
    squareAxes: false,
  },
  expressions: {
    list: [
      { type: "folder", id: "87", title: "Customization", collapsed: true },
      {
        type: "expression",
        id: "13",
        folderId: "87",
        color: "black",
        latex: "n_{ticks}=16",
        slider: {
          hardMin: true,
          hardMax: true,
          playDirection: -1,
          min: "0",
          max: "25",
          step: "1",
        },
      },
      {
        type: "expression",
        id: "55",
        folderId: "87",
        color: "clp-blue",
        latex: "t_{opLineInterval}=2",
        slider: { hardMin: true, min: "0" },
      },
      {
        type: "expression",
        id: "56",
        folderId: "87",
        color: "clp-blue",
        latex: "b_{otLineInterval}=2.5",
        slider: { hardMin: true, min: "0" },
      },
      {
        type: "expression",
        id: "48",
        folderId: "87",
        color: "black",
        latex:
          "t_{opLineLabel}=\\left(-.5\\cdot t_{ickHeight},t_{opLineY}\\right)",
        showLabel: true,
        label: "Rectangle width",
        hidden: true,
        labelOrientation: "left",
      },
      {
        type: "expression",
        id: "50",
        folderId: "87",
        color: "black",
        latex:
          "b_{otLineLabel}=\\left(-.5\\cdot t_{ickHeight},b_{otLineY}\\right)",
        showLabel: true,
        label: "Rectangle length",
        hidden: true,
        labelOrientation: "left",
      },
      { type: "folder", id: "76", title: "Lines", collapsed: true },
      {
        type: "expression",
        id: "18",
        folderId: "76",
        color: "black",
        latex: "b_{otLineY}=-.15\\cdot n_{ticks}",
      },
      {
        type: "expression",
        id: "17",
        folderId: "76",
        color: "black",
        latex: "t_{opLineY}=.15\\cdot n_{ticks}",
      },
      {
        type: "expression",
        id: "6",
        folderId: "76",
        color: "black",
        latex: "a_{rrowWidth}=t_{ickHeight}",
      },
      {
        type: "expression",
        id: "3",
        folderId: "76",
        color: "black",
        latex: "t_{opLine}=t_{opLineY}\\left\\{0<x<n_{ticks}\\right\\}",
      },
      {
        type: "expression",
        id: "4",
        folderId: "76",
        color: "black",
        latex: "b_{otLine}=b_{otLineY}\\left\\{0<x<n_{ticks}\\right\\}",
      },
      {
        type: "expression",
        id: "5",
        folderId: "76",
        color: "black",
        latex:
          "b_{otBotArrow}=x-n_{ticks}+b_{otLineY}\\left\\{n_{ticks}-a_{rrowWidth}<x<n_{ticks}\\right\\}",
      },
      {
        type: "expression",
        id: "10",
        folderId: "76",
        color: "black",
        latex:
          "b_{otTopArrow}=-x+n_{ticks}+b_{otLineY}\\left\\{n_{ticks}-a_{rrowWidth}<x<n_{ticks}\\right\\}",
      },
      {
        type: "expression",
        id: "11",
        folderId: "76",
        color: "black",
        latex:
          "t_{opTopArrow}=x-n_{ticks}+t_{opLineY}\\left\\{n_{ticks}-a_{rrowWidth}<x<n_{ticks}\\right\\}",
      },
      {
        type: "expression",
        id: "9",
        folderId: "76",
        color: "black",
        latex:
          "t_{opBotArrow}=-x+n_{ticks}+t_{opLineY}\\left\\{n_{ticks}-a_{rrowWidth}<x<n_{ticks}\\right\\}",
      },
      { type: "folder", id: "78", title: "Ticks", collapsed: true },
      {
        type: "expression",
        id: "19",
        folderId: "78",
        color: "black",
        latex: "t_{ickHeight}=n_{ticks}\\cdot.03",
      },
      {
        type: "expression",
        id: "15",
        folderId: "78",
        color: "black",
        latex: "t_{ickLocations}=\\left[0...n_{ticks}-1\\right]",
      },
      {
        type: "expression",
        id: "16",
        folderId: "78",
        color: "black",
        latex:
          "t_{opTicks}=\\left(t_{ickLocations}\\right)\\left\\{t_{opLineY}-t_{ickHeight}<y<t_{opLineY}+t_{ickHeight}\\right\\}",
      },
      {
        type: "expression",
        id: "20",
        folderId: "78",
        color: "black",
        latex:
          "b_{otTicks}=\\left(t_{ickLocations}\\right)\\left\\{b_{otLineY}-t_{ickHeight}<y<b_{otLineY}+t_{ickHeight}\\right\\}",
      },
      { type: "folder", id: "79", title: "Barbell 1", collapsed: true },
      {
        type: "expression",
        id: "21",
        folderId: "79",
        color: "black",
        latex: "b_{arbellCtrlPt1}=\\left(b_{arbellCtrlPt1X},0\\right)",
        dragMode: "X",
      },
      {
        type: "expression",
        id: "26",
        folderId: "79",
        color: "black",
        latex: "b_{arbellCtrlPt1X}=0",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "0",
          max: "n_{ticks}",
          step: "1",
        },
      },
      {
        type: "expression",
        id: "29",
        folderId: "79",
        color: "black",
        latex: "b_{arbellTopPt1}=\\left(b_{arbellCtrlPt1X},t_{opLineY}\\right)",
        dragMode: "NONE",
      },
      {
        type: "expression",
        id: "30",
        folderId: "79",
        color: "black",
        latex: "b_{arbellBotPt1}=\\left(b_{arbellCtrlPt1X},b_{otLineY}\\right)",
        dragMode: "NONE",
      },
      {
        type: "expression",
        id: "31",
        folderId: "79",
        color: "black",
        latex:
          "b_{arbellLine1}=b_{arbellCtrlPt1X}\\left\\{b_{otLineY}<y<t_{opLineY}\\right\\}",
        lineStyle: "DASHED",
      },
      {
        type: "expression",
        id: "51",
        folderId: "79",
        color: "black",
        latex:
          "b_{arbellTopLabelPt1}=\\left(b_{arbellTopPt1}.x,1.5\\cdot t_{opLineY}\\right)",
        showLabel: true,
        label: "${b_{arbellTopLabel1}}",
        hidden: true,
      },
      {
        type: "expression",
        id: "52",
        folderId: "79",
        color: "black",
        latex:
          "b_{arbellBotLabelPt1}=\\left(b_{arbellBotPt1}.x,1.5\\cdot b_{otLineY}\\right)",
        showLabel: false,
        label: "${b_{arbellBotLabel1}}",
        hidden: true,
      },
      {
        type: "expression",
        id: "53",
        folderId: "79",
        color: "black",
        latex:
          "b_{arbellTopLabel1}=t_{opLineInterval}\\cdot b_{arbellTopLabelPt1}.x",
      },
      {
        type: "expression",
        id: "54",
        folderId: "79",
        color: "black",
        latex:
          "b_{arbellBotLabel1}=b_{otLineInterval}\\cdot b_{arbellBotLabelPt1}.x",
      },
      { type: "folder", id: "82", title: "Barbell 2", collapsed: true },
      {
        type: "expression",
        id: "32",
        folderId: "82",
        color: "black",
        latex: "b_{arbellCtrlPt2X}=0",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "0",
          max: "n_{ticks}",
          step: "1",
        },
      },
      {
        type: "expression",
        id: "33",
        folderId: "82",
        color: "black",
        latex: "b_{arbellCtrlPt2}=\\left(b_{arbellCtrlPt2X},0\\right)",
        dragMode: "X",
      },
      {
        type: "expression",
        id: "34",
        folderId: "82",
        color: "black",
        latex: "b_{arbellTopPt2}=\\left(b_{arbellCtrlPt2X},t_{opLineY}\\right)",
        dragMode: "NONE",
      },
      {
        type: "expression",
        id: "35",
        folderId: "82",
        color: "black",
        latex: "b_{arbellBotPt2}=\\left(b_{arbellCtrlPt2X},b_{otLineY}\\right)",
        dragMode: "NONE",
      },
      {
        type: "expression",
        id: "36",
        folderId: "82",
        color: "black",
        latex:
          "b_{arbellLine2}=b_{arbellCtrlPt2X}\\left\\{b_{otLineY}<y<t_{opLineY}\\right\\}",
        lineStyle: "DASHED",
      },
      {
        type: "expression",
        id: "59",
        folderId: "82",
        color: "black",
        latex:
          "b_{arbellTopLabelPt2}=\\left(b_{arbellTopPt2}.x,1.5\\cdot t_{opLineY}\\right)",
        showLabel: true,
        label: "${b_{arbellTopLabel2}}",
        hidden: true,
      },
      {
        type: "expression",
        id: "60",
        folderId: "82",
        color: "black",
        latex:
          "b_{arbellBotLabelPt2}=\\left(b_{arbellBotPt2}.x,1.5\\cdot b_{otLineY}\\right)",
        showLabel: false,
        label: "${b_{arbellBotLabel2}}",
        hidden: true,
      },
      {
        type: "expression",
        id: "63",
        folderId: "82",
        color: "clp-blue",
        latex:
          "b_{arbellTopLabel2}=t_{opLineInterval}\\cdot b_{arbellTopLabelPt2}.x",
      },
      {
        type: "expression",
        id: "66",
        folderId: "82",
        color: "clp-blue",
        latex:
          "b_{arbellBotLabel2}=b_{otLineInterval}\\cdot b_{arbellBotLabelPt2}.x",
      },
      { type: "folder", id: "84", title: "Barbell 3", collapsed: true },
      {
        type: "expression",
        id: "37",
        folderId: "84",
        color: "black",
        latex: "b_{arbellCtrlPt3X}=0",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "0",
          max: "n_{ticks}",
          step: "1",
        },
      },
      {
        type: "expression",
        id: "38",
        folderId: "84",
        color: "black",
        latex: "b_{arbellCtrlPt3}=\\left(b_{arbellCtrlPt3X},0\\right)",
        dragMode: "X",
      },
      {
        type: "expression",
        id: "39",
        folderId: "84",
        color: "black",
        latex: "b_{arbellTopPt3}=\\left(b_{arbellCtrlPt3X},t_{opLineY}\\right)",
        dragMode: "NONE",
      },
      {
        type: "expression",
        id: "40",
        folderId: "84",
        color: "black",
        latex: "b_{arbellBotPt3}=\\left(b_{arbellCtrlPt3X},b_{otLineY}\\right)",
        dragMode: "NONE",
      },
      {
        type: "expression",
        id: "41",
        folderId: "84",
        color: "black",
        latex:
          "b_{arbellLine3}=b_{arbellCtrlPt3X}\\left\\{b_{otLineY}<y<t_{opLineY}\\right\\}",
        lineStyle: "DASHED",
      },
      {
        type: "expression",
        id: "67",
        folderId: "84",
        color: "black",
        latex:
          "b_{arbellTopLabelPt3}=\\left(b_{arbellTopPt3}.x,1.5\\cdot t_{opLineY}\\right)",
        showLabel: true,
        label: "${b_{arbellTopLabel3}}",
        hidden: true,
      },
      {
        type: "expression",
        id: "68",
        folderId: "84",
        color: "black",
        latex:
          "b_{arbellBotLabelPt3}=\\left(b_{arbellBotPt3}.x,1.5\\cdot b_{otLineY}\\right)",
        showLabel: false,
        label: "${b_{arbellBotLabel3}}",
        hidden: true,
      },
      {
        type: "expression",
        id: "69",
        folderId: "84",
        color: "clp-blue",
        latex:
          "b_{arbellTopLabel3}=t_{opLineInterval}\\cdot b_{arbellTopLabelPt3}.x",
      },
      {
        type: "expression",
        id: "70",
        folderId: "84",
        color: "clp-blue",
        latex:
          "b_{arbellBotLabel3}=b_{otLineInterval}\\cdot b_{arbellBotLabelPt3}.x",
      },
      { type: "folder", id: "86", title: "Barbell 4", collapsed: true },
      {
        type: "expression",
        id: "42",
        folderId: "86",
        color: "black",
        latex: "b_{arbellCtrlPt4X}=0",
        slider: {
          hardMin: true,
          hardMax: true,
          min: "0",
          max: "n_{ticks}",
          step: "1",
        },
      },
      {
        type: "expression",
        id: "43",
        folderId: "86",
        color: "black",
        latex: "b_{arbellCtrlPt4}=\\left(b_{arbellCtrlPt4X},0\\right)",
        dragMode: "X",
        hidden: true,
      },
      {
        type: "expression",
        id: "44",
        folderId: "86",
        color: "black",
        latex: "b_{arbellTopPt4}=\\left(b_{arbellCtrlPt4X},t_{opLineY}\\right)",
        dragMode: "NONE",
        hidden: true,
      },
      {
        type: "expression",
        id: "45",
        folderId: "86",
        color: "black",
        latex: "b_{arbellBotPt4}=\\left(b_{arbellCtrlPt4X},b_{otLineY}\\right)",
        dragMode: "NONE",
        hidden: true,
      },
      {
        type: "expression",
        id: "46",
        folderId: "86",
        color: "black",
        latex:
          "b_{arbellLine4}=b_{arbellCtrlPt4X}\\left\\{b_{otLineY}<y<t_{opLineY}\\right\\}",
        lineStyle: "DASHED",
        hidden: true,
      },
      {
        type: "expression",
        id: "71",
        folderId: "86",
        color: "black",
        latex:
          "b_{arbellTopLabelPt4}=\\left(b_{arbellTopPt4}.x,1.5\\cdot t_{opLineY}\\right)",
        showLabel: true,
        label: "${b_{arbellTopLabel4}}",
        hidden: true,
      },
      {
        type: "expression",
        id: "72",
        folderId: "86",
        color: "black",
        latex:
          "b_{arbellBotLabelPt4}=\\left(b_{arbellBotPt4}.x,1.5\\cdot b_{otLineY}\\right)",
        showLabel: false,
        label: "${b_{arbellBotLabel4}}",
        hidden: true,
      },
      {
        type: "expression",
        id: "73",
        folderId: "86",
        color: "clp-blue",
        latex:
          "b_{arbellTopLabel4}=t_{opLineInterval}\\cdot b_{arbellTopLabelPt4}.x",
        hidden: true,
      },
      {
        type: "expression",
        id: "74",
        folderId: "86",
        color: "clp-blue",
        latex:
          "b_{arbellBotLabel4}=b_{otLineInterval}\\cdot b_{arbellBotLabelPt4}.x",
        hidden: true,
      },
    ],
  },
};

calculator.setState(state);

numTicks = calculator.HelperExpression({ latex: "n_{ticks}" });
numTicks.observe("numericValue", () => {
  const n = numTicks.numericValue;
  calculator.setMathBounds({
    left: -0.3 * n,
    right: 1.05 * n,
    bottom: -0.75 * n,
    top: 0.75 * n,
  });
});

let input1X = 0;

const barbellInput1 = document.createElement("input");
const barbellInput2 = document.createElement("input");
const barbellInput3 = document.createElement("input");
barbellInput1.setAttribute("type", "text");
barbellInput2.setAttribute("type", "text");
barbellInput3.setAttribute("type", "text");
barbellInput1.setAttribute("maxlength", "2");
barbellInput2.setAttribute("maxlength", "2");
barbellInput3.setAttribute("maxlength", "2");

const inputStyle = {
  width: "3rem",
  height: "2rem",
  color: "black",
  position: "absolute",
  top: "325px",
  left: `0px`,
  "text-align": "center",
  "font-size": "1.5rem",
  "margin-left": "-1.3rem",
};

Object.assign(barbellInput1.style, inputStyle);
Object.assign(barbellInput2.style, inputStyle);
Object.assign(barbellInput3.style, inputStyle);

elt.append(barbellInput1);
elt.append(barbellInput2);
elt.append(barbellInput3);

const barbell1X = calculator.HelperExpression({ latex: "b_{arbellCtrlPt1X}" });
barbell1X.observe("numericValue", () => {
  barbellInput1.style.left = `${Math.round(
    calculator.mathToPixels({ x: barbell1X.numericValue }).x
  )}px`;
});

const barbell2X = calculator.HelperExpression({ latex: "b_{arbellCtrlPt2X}" });
barbell2X.observe("numericValue", () => {
  barbellInput2.style.left = `${Math.round(
    calculator.mathToPixels({ x: barbell2X.numericValue }).x
  )}px`;
});

const barbell3X = calculator.HelperExpression({ latex: "b_{arbellCtrlPt3X}" });
barbell3X.observe("numericValue", () => {
  barbellInput3.style.left = `${Math.round(
    calculator.mathToPixels({ x: barbell3X.numericValue }).x
  )}px`;
});
