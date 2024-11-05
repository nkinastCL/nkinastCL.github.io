const options = {
  settingsMenu: false,
  expressions: false,
  zoomButtons: false,
  showResetButtonOnGraphpaper: true,
  lockViewport: false,
  pointsOfInterest: false,
  authorFeatures: false,
  trace: false,
  actions: true,
};

const elt = document.getElementById("calculator");
const calculator = Desmos.Geometry(elt, options);

const state = {
  version: 11,
  randomSeed: "9983ab5d8dafa9862f23d0a378cf8cbd",
  graph: {
    viewport: { xmin: -3, ymin: -2.74, xmax: 35, ymax: 14.74 },
    xAxisArrowMode: "BOTH",
    yAxisArrowMode: "BOTH",
    degreeMode: true,
    userLockedViewport: true,
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
      { type: "folder", id: "375", title: "Labels" },
      {
        type: "expression",
        id: "373",
        folderId: "375",
        color: "#000000",
        latex: "p_{1}=\\left(17.5,-1.75\\right)",
        showLabel: true,
        label: "Long Side",
        hidden: true,
        labelOrientation: "above",
      },
      { type: "expression", id: "407", folderId: "375", color: "#2d70b3" },
      {
        type: "expression",
        id: "376",
        folderId: "375",
        color: "#000000",
        latex: "p_{2}=\\left(-1.5,5.5\\right)",
        showLabel: true,
        label: "Short Side",
        hidden: true,
        labelOrientation: "right",
        labelAngle: "90",
      },
      {
        type: "text",
        id: "366",
        text: "Click on the folder next to Ava's Rectangles or Gabriel's Rectangles to remove their rectangles.",
      },
      {
        type: "text",
        id: "368",
        text: "Click on the empty circle next to Ava's Rectangles or Gabriel's Rectangles to show their rectangles.",
      },
      {
        type: "folder",
        id: "96",
        title: "Ava's Rectangles",
        hidden: true,
        collapsed: true,
      },
      {
        id: "148",
        type: "table",
        folderId: "96",
        columns: [
          {
            values: ["0", "0", "5", "5", "0"],
            hidden: true,
            id: "146",
            color: "#000000",
            latex: "x_{1}",
          },
          {
            values: ["0", "2", "2", "0", "0"],
            id: "147",
            color: "#000000",
            lines: true,
            latex: "y_{1}",
          },
        ],
      },
      {
        id: "153",
        type: "table",
        folderId: "96",
        columns: [
          {
            values: ["0", "0", "10", "10", "0"],
            hidden: true,
            id: "151",
            color: "#6042a6",
            latex: "x_{2}",
          },
          {
            values: ["0", "4", "4", "0", "0"],
            id: "152",
            color: "#000000",
            lines: true,
            latex: "y_{2}",
          },
        ],
      },
      {
        id: "158",
        type: "table",
        folderId: "96",
        columns: [
          {
            values: ["0", "0", "30", "30", "0"],
            hidden: true,
            id: "156",
            color: "#388c46",
            latex: "x_{3}",
          },
          {
            values: ["0", "12", "12", "0", "0"],
            id: "157",
            color: "#000000",
            lines: true,
            latex: "y_{3}",
          },
        ],
      },
      {
        id: "228",
        type: "table",
        folderId: "96",
        columns: [
          {
            values: ["0", "0", "15", "15", "0"],
            hidden: true,
            id: "226",
            color: "#388c46",
            latex: "x_{7}",
          },
          {
            values: ["0", "6", "6", "0", "0"],
            id: "227",
            color: "#000000",
            lines: true,
            latex: "y_{7}",
          },
        ],
      },
      {
        type: "expression",
        id: "516",
        folderId: "96",
        color: "#000000",
        latex: "p_3=\\left(5,2\\right)",
        showLabel: true,
        dragMode: "NONE",
        labelOrientation: "above",
      },
      {
        type: "expression",
        id: "518",
        folderId: "96",
        color: "#000000",
        latex: "p_{4}=\\left(10,4\\right)",
        showLabel: true,
        dragMode: "NONE",
        labelOrientation: "above",
      },
      {
        type: "expression",
        id: "519",
        folderId: "96",
        color: "#000000",
        latex: "p_{5}=\\left(15,6\\right)",
        showLabel: true,
        dragMode: "NONE",
        labelOrientation: "above",
      },
      {
        type: "expression",
        id: "520",
        folderId: "96",
        color: "#000000",
        latex: "p_{6}=\\left(30,12\\right)",
        showLabel: true,
        dragMode: "NONE",
        labelOrientation: "above",
      },
      {
        type: "folder",
        id: "198",
        title: "Gabriel's Rectangles",
        hidden: true,
        collapsed: true,
      },
      {
        id: "202",
        type: "table",
        folderId: "198",
        columns: [
          {
            values: ["0", "0", "5", "5", "0"],
            hidden: true,
            id: "200",
            color: "#6042a6",
            latex: "x_{4}",
          },
          {
            values: ["0", "2", "2", "0", "0"],
            id: "201",
            color: "#000000",
            lines: true,
            pointStyle: "CROSS",
            latex: "y_{4}",
          },
        ],
      },
      {
        id: "209",
        type: "table",
        folderId: "198",
        columns: [
          {
            values: ["0", "0", "6", "6", "0"],
            hidden: true,
            id: "207",
            color: "#000000",
            latex: "x_{5}",
          },
          {
            values: ["0", "3", "3", "0", "0"],
            id: "208",
            color: "#000000",
            lines: true,
            pointStyle: "CROSS",
            latex: "y_{5}",
          },
        ],
      },
      {
        id: "214",
        type: "table",
        folderId: "198",
        columns: [
          {
            values: ["0", "0", "10", "10", "0"],
            hidden: true,
            id: "212",
            color: "#6042a6",
            latex: "x_{6}",
          },
          {
            values: ["0", "7", "7", "0", "0"],
            id: "213",
            color: "#000000",
            lines: true,
            pointStyle: "CROSS",
            latex: "y_{6}",
          },
        ],
      },
      {
        id: "233",
        type: "table",
        folderId: "198",
        columns: [
          {
            values: ["0", "0", "8", "8", "0"],
            hidden: true,
            id: "231",
            color: "#2d70b3",
            latex: "x_{8}",
          },
          {
            values: ["0", "5", "5", "0", "0"],
            id: "232",
            color: "#000000",
            lines: true,
            pointStyle: "CROSS",
            latex: "y_{8}",
          },
        ],
      },
      {
        type: "expression",
        id: "540",
        folderId: "198",
        color: "#000000",
        latex: "p_{8}=\\left(6,3\\right)",
        showLabel: true,
        pointStyle: "CROSS",
        dragMode: "NONE",
        labelOrientation: "above",
      },
      {
        type: "expression",
        id: "523",
        folderId: "198",
        color: "#000000",
        latex: "p_{7}=\\left(5,2\\right)",
        showLabel: true,
        pointStyle: "CROSS",
        dragMode: "NONE",
        labelOrientation: "below_left",
      },
      {
        type: "expression",
        id: "541",
        folderId: "198",
        color: "#000000",
        latex: "p_{9}=\\left(8,5\\right)",
        showLabel: true,
        pointStyle: "CROSS",
        dragMode: "NONE",
        labelOrientation: "above",
      },
      {
        type: "expression",
        id: "542",
        folderId: "198",
        color: "#000000",
        latex: "p_{10}=\\left(10,7\\right)",
        showLabel: true,
        pointStyle: "CROSS",
        dragMode: "NONE",
        labelOrientation: "above",
      },
      { type: "expression", id: "543", color: "#c74440" },
    ],
  },
  geometryToolbar: {
    toolbar: "custom",
    toolbarState: { line: { visible: true } },
  },
};

calculator.setState(state);
calculator.setDefaultState(state);

const avaCheckLeft = 20;
const avaCheckTop = 23;
const gabrielCheckLeft = avaCheckLeft + 160;
const gabrielCheckTop = avaCheckTop;

const avaCheck = document.createElement("input");
avaCheck.type = "checkbox";
avaCheck.id = "avaCheck";
avaCheck.name = "avaCheck";
avaCheck.value = "Ava's Rectangles";
avaCheck.style.position = "absolute";
avaCheck.style.top = `${avaCheckTop}px`;
avaCheck.style.left = `${avaCheckLeft}px`;
avaCheck.style.transform = "scale(1.25)";

const avaLabel = document.createElement("label");
avaLabel.htmlFor = "avaCheck";
avaLabel.appendChild(document.createTextNode("Ava's Rectangles"));
avaLabel.style.position = "absolute";
avaLabel.style.top = `${avaCheckTop}px`;
avaLabel.style.left = `${avaCheckLeft + 25}px`;
avaLabel.style["font-size"] = "1rem";
avaLabel.style["font-family"] = "sans-serif";

const gabrielCheck = document.createElement("input");
gabrielCheck.type = "checkbox";
gabrielCheck.id = "gabrielCheck";
gabrielCheck.name = "gabrielCheck";
gabrielCheck.value = "Gabriel's Rectangles";
gabrielCheck.style.position = "absolute";
gabrielCheck.style.top = `${gabrielCheckTop}px`;
gabrielCheck.style.left = `${gabrielCheckLeft}px`;
gabrielCheck.style.transform = "scale(1.25)";

const gabrielLabel = document.createElement("label");
gabrielLabel.htmlFor = "gabrielCheck";
gabrielLabel.appendChild(document.createTextNode("Gabriel's Rectangles"));
gabrielLabel.style.position = "absolute";
gabrielLabel.style.top = `${gabrielCheckTop}px`;
gabrielLabel.style.left = `${gabrielCheckLeft + 25}px`;
gabrielLabel.style["font-size"] = "1rem";
gabrielLabel.style["font-family"] = "sans-serif";

elt.appendChild(avaCheck);
elt.appendChild(avaLabel);
elt.appendChild(gabrielCheck);
elt.appendChild(gabrielLabel);

const handleCheck = (event) => {
  console.log(event);
  if (event.target.name === "avaCheck") {
    calculator.setExpression({ id: "96", hidden: !event.target.checked });
  }
  if (event.target.name === "gabrielCheck") {
    calculator.setExpression({ id: "198", hidden: !event.target.checked });
  }
};

avaCheck.addEventListener("change", handleCheck);
gabrielCheck.addEventListener("change", handleCheck);
