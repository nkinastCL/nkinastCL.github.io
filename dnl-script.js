const options = {
  settingsMenu: false,
  expressions: false,
  zoomButtons: false,
  showResetButtonOnGraphpaper: true,
  lockViewport: true,
};

const elt = document.getElementById("calculator");
const calculator = Desmos.GraphingCalculator(elt, options);

const state = {
  version: 11,
  randomSeed: "c9f2b0bbf32382b6ec89381e3b1ba930",
  graph: {
    viewport: {
      xmin: -2.886111751988887,
      ymin: -10.460276075944321,
      xmax: 22.602474673792372,
      ymax: 10.780212612206729,
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
        id: "13",
        color: "#2d70b3",
        latex: "h_{over1a}=\\left(h_{1ax},2\\right)",
        showLabel: true,
        label: " ",
        hidden: true,
        dragMode: "NONE",
        pointOpacity: "1",
        pointSize: "12",
        movablePointSize: "12",
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
        id: "15",
        color: "#388c46",
        latex: "h_{over2a}=\\left(h_{2ax},0\\right)",
        showLabel: true,
        label: " ",
        hidden: true,
        dragMode: "NONE",
        pointOpacity: "1",
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
        latex: "h_{1ax}=7.3093228183236185",
        slider: {
          hardMin: true,
        },
      },
      {
        type: "expression",
        id: "18",
        color: "#000000",
        latex: "h_{2ax}=5.663184944991912",
      },
      {
        type: "expression",
        id: "19",
        color: "#c74440",
        latex: "h_{1px}=5.663184944991912",
      },
      {
        type: "expression",
        id: "20",
        color: "#2d70b3",
        latex: "h_{2px}=7.3093228183236185",
      },
      {
        type: "expression",
        id: "24",
        color: "#c74440",
        latex: "C=\\ \\left[0...20\\right]",
      },
      {
        type: "expression",
        id: "25",
        color: "#000000",
        latex: "x=C\\left\\{1.8<y<2.2\\right\\}",
      },
      {
        type: "expression",
        id: "26",
        color: "#000000",
        latex: "x=C\\left\\{-.2<y<.2\\right\\}",
      },
      {
        type: "expression",
        id: "27",
        color: "#000000",
        latex: "\\left(C,3\\right)",
        showLabel: true,
        label: "${C_3}",
        hidden: true,
        points: false,
        dragMode: "NONE",
        labelSize: "1",
      },
      {
        type: "expression",
        id: "30",
        color: "#000000",
        latex: "\\left(C,-1\\right)",
        showLabel: true,
        label: "${C_4}",
        hidden: true,
        points: false,
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
        color: "#6042a6",
        latex: "x=0\\left\\{0<y<2\\right\\}",
        hidden: true,
        lineStyle: "DASHED",
        lineWidth: "2",
      },
      {
        type: "expression",
        id: "32",
        color: "#c74440",
        latex: "i_{1}=3",
      },
      {
        type: "expression",
        id: "33",
        color: "#2d70b3",
        latex: "i_{2}=4",
      },
    ],
  },
};

let hoverVisible = false;
let xList = [];
const SNAP_DISTANCE = 0.15;
const NEAR_DISTANCE = 0.15;

const [
  hoverPointActive1,
  hoverPointPassive1,
  hoverPointActive2,
  hoverPointPassive2,
] = ["13", "14", "15", "16"];

calculator.setState(state);
calculator.setDefaultState(state);
const calculatorRect = elt.getBoundingClientRect();

const intervalInput1 = document.createElement("input");
const intervalInput2 = document.createElement("input");

for (input of [intervalInput1, intervalInput2]) {
  input.style.position = "absolute";
  input.style.top = "80%";
  input.style["font-size"] = "1.5em";
  input.style.width = "1.5em";
  input.style.padding = ".25em";
  input.maxlength = "1";
}

intervalInput1.style.left = "5%";
intervalInput1.style.top = "31%";
intervalInput2.style.left = "5%";
intervalInput2.style.top = "44%";

elt.appendChild(intervalInput1);
elt.appendChild(intervalInput2);

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

const snapX = (x) => {
  if (x - SNAP_DISTANCE < Math.floor(x)) {
    return Math.floor(x);
  } else if (x + SNAP_DISTANCE > Math.ceil(x)) {
    return Math.ceil(x);
  } else return x;
};

const nearTo = (x, y) => {
  return Math.abs(x - y) < NEAR_DISTANCE;
};

elt.addEventListener("mousemove", (e) => {
  const mousePos = calculator.pixelsToMath({
    x: e.clientX - calculatorRect.left,
    y: e.clientY - calculatorRect.top,
  });
  const x = mousePos.x;
  const y = mousePos.y;

  if (y < 2.25 && y > 1.75 && x > 0 && x < 20) {
    hoverVisible = true;
    show(hoverPointActive1, hoverPointPassive2);
    calculator.setExpression({ id: "17", latex: `h_{1ax}=${snapX(x)}` });
    calculator.setExpression({ id: "20", latex: `h_{2px}=${snapX(x)}` });
  } else if (y < 0.25 && y > -0.25 && x > 0 && x < 20) {
    hoverVisible = true;
    show(hoverPointActive2, hoverPointPassive1);
    calculator.setExpression({ id: "18", latex: `h_{2ax}=${snapX(x)}` });
    calculator.setExpression({ id: "19", latex: `h_{1px}=${snapX(x)}` });
  } else {
    hoverVisible = false;
    hide(
      hoverPointActive1,
      hoverPointActive2,
      hoverPointPassive1,
      hoverPointPassive2
    );
  }

  xList.forEach((xCoord) => {
    if (nearTo(x, xCoord)) {
      calculator.setExpression({
        id: "31",
        latex: `x=${xCoord}\\left\\{0<y<2\\right\\}`,
        hidden: false,
      });
    } else {
      calculator.setExpression({ id: "31", hidden: true });
    }
  });
});

elt.addEventListener("mouseup", (e) => {
  if (hoverVisible) {
    const mousePos = calculator.pixelsToMath({
      x: e.clientX - calculatorRect.left,
      y: e.clientY - calculatorRect.top,
    });

    calculator.setExpression({
      latex: `(${snapX(mousePos.x)},${mousePos.y - 1 > 0 ? 2 : 0})`,
      pointSize: 12,
      color: "#000000",
    });

    xList.push(snapX(mousePos.x));
  }
});

intervalInput1.addEventListener("change", (e) => {
  const int = parseInt(e.target.value);
  calculator.setExpression({
    id: "32",
    latex: `i_{1}=${int}`,
  });
});

intervalInput2.addEventListener("change", (e) => {
  const int = parseInt(e.target.value);
  calculator.setExpression({
    id: "33",
    latex: `i_{2}=${int}`,
  });
});

calculator.observeEvent("graphReset", () => {
  intervalInput1.value = "";
  intervalInput2.value = "";
});
