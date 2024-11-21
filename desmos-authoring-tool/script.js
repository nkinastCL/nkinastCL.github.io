// window.onbeforeunload = function() {
//     return true;
// };

const toggleSidebarButton = document.getElementById("toggleSidebar");

toggleSidebarButton.addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("collapsed")) {
    sidebar.classList.remove("collapsed");
    sidebar.classList.add("expanded");
    toggleSidebarButton.innerText = ">";
  } else {
    sidebar.classList.remove("expanded");
    sidebar.classList.add("collapsed");
    toggleSidebarButton.innerText = "<";
  }
});

const inputWidth = document.getElementById("input-width");
const inputHeight = document.getElementById("input-height");
const calc = document.getElementById("calculator");

inputWidth.addEventListener("input", () => {
  const newWidth = inputWidth.value;
  calc.style.width = `${newWidth}px`;
});

inputHeight.addEventListener("input", () => {
  const newHeight = inputHeight.value;
  calc.style.height = `${newHeight}px`;
});

const optShowExpressions = document.getElementById("opt-show-expressions");
optShowExpressions.addEventListener("change", () => {
  calculator.setOptions({
    expressions: optShowExpressions.checked,
    expressionsCollapsed: !optShowExpressions.checked,
  });
});

const optShowSettings = document.getElementById("opt-show-settings");
optShowSettings.addEventListener("change", () => {
  calculator.setOptions({
    settingsMenu: optShowSettings.checked,
  });
});

const optLockViewport = document.getElementById("opt-lock-viewport");
optLockViewport.addEventListener("change", () => {
  calculator.setOptions({ lockViewport: optLockViewport.checked });
});

const optAuthorFeatures = document.getElementById("opt-author-features");
optAuthorFeatures.addEventListener("change", () => {
  calculator.setOptions({ authorFeatures: optAuthorFeatures.checked });
});

const copyState = document.getElementById("copy-state");
const downloadState = document.getElementById("download-state");
const loadStateFromClipboard = document.getElementById(
  "load-state-from-clipboard"
);
const loadStateFromFile = document.getElementById("load-state-from-file");
const stateFile = document.getElementById("state-file");

copyState.addEventListener("click", () => {
  const stateObj = getStateObj();
  navigator.clipboard.writeText(JSON.stringify(stateObj));
  copyState.disabled = true;
  setTimeout(() => {
    copyState.disabled = false;
  }, 1000);
});

downloadState.addEventListener("click", () => {
  const stateObj = getStateObj();
  const date = new Date();
  const timestamp = `${
    date.toString().split(" ")[0]
  }-${date.getMonth()}-${date.getDate()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const fileName = prompt(
    "Save As...",
    `My Awesome Desmos Interactive ${timestamp}`
  );
  if (fileName !== null) {
    downloadJSON(stateObj, fileName);
  }
});

loadStateFromClipboard.addEventListener("click", () => {
  navigator.clipboard.readText().then((result) => {
    const stateObj = JSON.parse(result);
    calculator.setState(stateObj["state"], stateObj["options"]);
  });

  loadStateFromClipboard.disabled = true;
  setTimeout(() => {
    loadStateFromClipboard.disabled = false;
  }, 1000);
});

stateFile.addEventListener("change", loadStateFromJSON);

loadStateFromFile.addEventListener("click", () => {
  stateFile.click();
});

function downloadJSON(obj, fileName) {
  const jsonString = JSON.stringify(obj, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const a = document.createElement("a");
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}

function getStateObj() {
  const newState = calculator.getState();
  const newOptions = calculator.graphSettings;
  const stateObj = { state: newState, options: newOptions };
  return stateObj;
}

function loadStateFromJSON(event) {
  const file = event.target.files[0];
  if (!file) {
    alert("No file selected.");
    return;
  }
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const stateObj = JSON.parse(e.target.result);
      calculator.setState(stateObj["state"], stateObj["options"]);
    } catch (error) {
      alert("Error parsing JSON file: " + error.message);
    }
  };

  reader.readAsText(file);
}
