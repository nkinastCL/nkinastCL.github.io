const options = {
  settingsMenu: true,
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
  randomSeed: "9983ab5d8dafa9862f23d0a378cf8cbd",
  graph: {
    viewport: {
      xmin: -2.952500000000015,
      ymin: -3.309999999999988,
      xmax: 10,
      ymax: 75,
    },
    xAxisArrowMode: "BOTH",
    yAxisArrowMode: "BOTH",
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
      { type: "folder", id: "375", title: "Labels" },
      {
        type: "expression",
        id: "373",
        folderId: "375",
        color: "#000000",
        latex: "p_{1}=\\left(17.5,-2\\right)",
        showLabel: true,
        label: "Number of Tickets",
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
        label: "Total Price ($)",
        hidden: true,
        labelOrientation: "right",
        labelAngle: "90",
      },
      { type: "expression", id: "543", color: "#c74440" },
    ],
  },
  geometryToolbar: {
    toolbar: "custom",
    toolbarState: { line: { visible: true }, point: { visible: true } },
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
avaLabel.style.top = `${avaCheckTop + 2}px`;
avaLabel.style.left = `${avaCheckLeft + 25}px`;
avaLabel.style["font-size"] = "1rem";
avaLabel.style["font-family"] = "sans-serif";

const gabrielCheck = document.createElement("input");
gabrielCheck.type = "checkbox";
gabrielCheck.id = "gabrielCheck";
gabrielCheck.name = "gabrielCheck";
gabrielCheck.value = "Gabriel's Rectangles";
gabrielCheck.style.position = "absolute";
gabrielCheck.style.top = `${gabrielCheckTop + 1}px`;
gabrielCheck.style.left = `${gabrielCheckLeft}px`;
gabrielCheck.style.transform = "scale(1.25)";

const gabrielLabel = document.createElement("label");
gabrielLabel.htmlFor = "gabrielCheck";
gabrielLabel.appendChild(document.createTextNode("Gabriel's Rectangles"));
gabrielLabel.style.position = "absolute";
gabrielLabel.style.top = `${gabrielCheckTop + 2}px`;
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
