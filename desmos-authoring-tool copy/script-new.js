// Elements
const toggleSidebarButton = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const inputWidth = document.getElementById("input-width");
const inputHeight = document.getElementById("input-height");
const calc = document.getElementById("calculator");
const optShowExpressions = document.getElementById("opt-show-expressions");
const optShowSettings = document.getElementById("opt-show-settings");
const optLockViewport = document.getElementById("opt-lock-viewport");
const optAuthorFeatures = document.getElementById("opt-author-features");
const copyState = document.getElementById("copy-state");
const downloadState = document.getElementById("download-state");
const loadStateFromClipboard = document.getElementById(
  "load-state-from-clipboard"
);
const loadStateFromFile = document.getElementById("load-state-from-file");
const stateFile = document.getElementById("state-file");
const loadTemplate = document.getElementById("load-template");
const selectTemplate = document.getElementById("select-template");
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-code-editor");
const closeModalButton = document.getElementById("closeModal");
const editor = ace.edit("editor");

let globalScript;
let editorInitialized = false;

// Functions
const toggleSidebar = () => {
  const isCollapsed = sidebar.classList.toggle("collapsed");
  sidebar.classList.toggle("expanded", !isCollapsed);
  toggleSidebarButton.innerText = isCollapsed ? "<" : ">";
};

const updateCalcDimensions = (dimension, value) => {
  calc.style[dimension] = `${value}px`;
};

const updateCalculatorOptions = (options) => {
  calculator.setOptions(options);
};

const downloadJSON = (obj, fileName) => {
  const blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
};

const getStateObj = () => ({
  state: calculator.getState(),
  options: calculator.graphSettings,
  ...(globalScript && { script: globalScript }),
});

const loadStateFromJSON = (event) => {
  const file = event.target.files[0];
  if (!file) return alert("No file selected.");

  const reader = new FileReader();
  reader.onload = ({ target: { result } }) => {
    try {
      const stateObj = JSON.parse(result);
      calculator.setState(stateObj.state, stateObj.options);
      if (stateObj.script) updateScript(stateObj.script);
    } catch (error) {
      alert(`Error parsing JSON file: ${error.message}`);
    }
  };
  reader.readAsText(file);
};

const updateScript = (scriptContent) => {
  document.getElementById("desmosScript")?.remove();
  const newScript = document.createElement("script");
  newScript.id = "desmosScript";
  newScript.textContent = `(function() { ${scriptContent} })();`;
  document.body.appendChild(newScript);
};

const fetchTemplate = async (filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error loading Desmos state:", error);
  }
};

// Event Listeners
toggleSidebarButton.addEventListener("click", toggleSidebar);
inputWidth.addEventListener("input", () =>
  updateCalcDimensions("width", inputWidth.value)
);
inputHeight.addEventListener("input", () =>
  updateCalcDimensions("height", inputHeight.value)
);
// optShowExpressions.addEventListener("change", (e) => {
//   optShowExpressions.checked = !optShowExpressions.checked;
//   updateCalculatorOptions({
//     expressions: optShowExpressions.checked,
//     expressionsCollapsed: !optShowExpressions.checked,
//   });
// });

// optShowSettings.addEventListener("click", (e) => {
//   optShowSettings.checked = !optShowSettings.checked;
//   updateCalculatorOptions({ settingsMenu: optShowSettings.checked });
// });

// optLockViewport.addEventListener("click", (e) => {
//   optLockViewport.checked = !optLockViewport.checked;
//   updateCalculatorOptions({ lockViewport: optLockViewport.checked });
// });

// optAuthorFeatures.addEventListener("click", (e) => {
//   optAuthorFeatures.checked = !optAuthorFeatures.checked;
//   updateCalculatorOptions({ authorFeatures: optAuthorFeatures.checked });
// });

loadTemplate.addEventListener("click", async () => {
  if (selectTemplate.value) {
    const stateObj = await fetchTemplate(
      `templates/${selectTemplate.value}.JSON`
    );
    if (stateObj) {
      calculator.setState(stateObj.state, stateObj.options);
      if (stateObj.script) updateScript(stateObj.script);
    }
  }
});

copyState.addEventListener("click", () => {
  navigator.clipboard.writeText(JSON.stringify(getStateObj()));
  copyState.disabled = true;
  setTimeout(() => (copyState.disabled = false), 1000);
});

downloadState.addEventListener("click", () => {
  const date = new Date();
  const timestamp = `${
    date.toString().split(" ")[0]
  }-${date.getMonth()}-${date.getDate()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const fileName = prompt(
    "Save As...",
    `My Awesome Desmos Interactive ${timestamp}`
  );
  if (fileName !== null) downloadJSON(getStateObj(), fileName);
});

loadStateFromClipboard.addEventListener("click", async () => {
  const result = await navigator.clipboard.readText();
  const stateObj = JSON.parse(result);
  calculator.setState(stateObj.state, stateObj.options);
  loadStateFromClipboard.disabled = true;
  setTimeout(() => (loadStateFromClipboard.disabled = false), 1000);
});

stateFile.addEventListener("change", loadStateFromJSON);
loadStateFromFile.addEventListener("click", () => stateFile.click());

openModalButton.onclick = () => {
  modal.style.display = "block";
  if (!editorInitialized) {
    editor.setTheme("ace/theme/eclipse");
    editor.session.setMode("ace/mode/javascript");
    editorInitialized = true;
  }
  if (globalScript) editor.setValue(globalScript, -1);
};

const closeModal = () => {
  modal.style.display = "none";
  globalScript = editor.getValue();
  updateScript(globalScript);
};

closeModalButton.onclick = closeModal;
window.onclick = (event) => event.target === modal && closeModal();
