// window.onbeforeunload = function() {
//     return true;
// };

const toggleSidebarButton = document.getElementById('toggleSidebar');
let globalScript;

toggleSidebarButton.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('collapsed')) {
    sidebar.classList.remove('collapsed');
    sidebar.classList.add('expanded');
    toggleSidebarButton.innerText = '>';
  } else {
    sidebar.classList.remove('expanded');
    sidebar.classList.add('collapsed');
    toggleSidebarButton.innerText = '<';
  }
});

const inputWidth = document.getElementById('input-width');
const inputHeight = document.getElementById('input-height');
const inputXMin = document.getElementById('input-xmin');
const inputXMax = document.getElementById('input-xmax');
const inputYMin = document.getElementById('input-ymin');
const inputYMax = document.getElementById('input-ymax');
const setBoundsButton = document.getElementById('set-bounds');
const calc = document.getElementById('calculator');

inputWidth.addEventListener('input', () => {
  const newWidth = inputWidth.value;
  calc.style.width = `${newWidth}px`;
});

inputHeight.addEventListener('input', () => {
  const newHeight = inputHeight.value;
  calc.style.height = `${newHeight}px`;
});

setBoundsButton.addEventListener('click', () => {
  const xMin = parseFloat(inputXMin.value);
  const xMax = parseFloat(inputXMax.value);
  const yMin = parseFloat(inputYMin.value);
  const yMax = parseFloat(inputYMax.value);
  const newBounds = {
    left: xMin,
    right: xMax,
    bottom: yMin,
    top: yMax,
  };
  calculator.setMathBounds(newBounds);
});

const optShowExpressions = document.getElementById('opt-show-expressions');
optShowExpressions.addEventListener('change', () => {
  calculator.setOptions({
    expressions: optShowExpressions.checked,
    expressionsCollapsed: !optShowExpressions.checked,
  });
});

const optShowSettings = document.getElementById('opt-show-settings');
optShowSettings.addEventListener('change', () => {
  calculator.setOptions({
    settingsMenu: optShowSettings.checked,
  });
});

const optLockViewport = document.getElementById('opt-lock-viewport');
optLockViewport.addEventListener('change', () => {
  calculator.setOptions({ lockViewport: optLockViewport.checked });
});

const optAuthorFeatures = document.getElementById('opt-author-features');
optAuthorFeatures.addEventListener('change', () => {
  calculator.setOptions({ authorFeatures: optAuthorFeatures.checked });
});

const optZoomButtons = document.getElementById('opt-zoom-buttons');
optZoomButtons.addEventListener('change', () => {
  calculator.setOptions({ zoomButtons: optZoomButtons.checked });
});

const copyState = document.getElementById('copy-state');
const downloadState = document.getElementById('download-state');
const loadStateFromClipboard = document.getElementById(
  'load-state-from-clipboard'
);
const loadStateFromFile = document.getElementById('load-state-from-file');
const stateFile = document.getElementById('state-file');
const loadTemplate = document.getElementById('load-template');
const selectTemplate = document.getElementById('select-template');

loadTemplate.addEventListener('click', () => {
  if (selectTemplate.value) {
    fetchTemplate(`templates/${selectTemplate.value}.JSON`).then((stateObj) => {
      calculator.setState(
        stateObj.rootElement.initialState,
        stateObj.rootElement.initialSettings
      );
      if (stateObj.rootElement.initialScript) {
        globalScript = stateObj.rootElement.initialScript;
        updateScript(stateObj.rootElement.initialScript);
      }
    });
  }
});

copyState.addEventListener('click', () => {
  const stateObj = getStateObj();
  navigator.clipboard.writeText(JSON.stringify(stateObj));
  copyState.disabled = true;
  setTimeout(() => {
    copyState.disabled = false;
  }, 1000);
});

downloadState.addEventListener('click', () => {
  calculator.clearHistory();
  const date = new Date();
  const timestamp = `${
    date.toString().split(' ')[0]
  }-${date.getMonth()}-${date.getDate()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const fileName = prompt(
    'Save As...',
    `My Awesome Desmos Interactive ${timestamp}`
  );
  const stateObj = getStateObj(fileName);
  if (fileName !== null) {
    downloadJSON(stateObj, fileName);
  }
});

loadStateFromClipboard.addEventListener('click', () => {
  navigator.clipboard.readText().then((result) => {
    const stateObj = JSON.parse(result);
    calculator.setState(
      stateObj.rootElement.initialState,
      stateObj.rootElement.initialSettings
    );
  });

  loadStateFromClipboard.disabled = true;
  setTimeout(() => {
    loadStateFromClipboard.disabled = false;
  }, 1000);
});

stateFile.addEventListener('change', loadStateFromJSON);

loadStateFromFile.addEventListener('click', () => {
  stateFile.click();
});

function downloadJSON(obj, fileName) {
  const jsonString = JSON.stringify(obj, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const a = document.createElement('a');
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}

function getStateObj(id) {
  const newState = calculator.getState();
  const newOptions = calculator.graphSettings;
  const calculatorType =
    newState.graph.product === 'graphing-3d'
      ? '3d'
      : newState.graph.product === 'geometry-calculator'
      ? 'geometry'
      : 'graphing';
  const stateObj = {
    id: id,
    rootElement: {
      type: 'clic-desmos',
      calculator: calculatorType,
      initialState: newState,
      initialSettings: newOptions,
    },
  };
  if (globalScript) {
    stateObj.rootElement.initialScript = globalScript;
  }
  return stateObj;
}

function loadStateFromJSON(event) {
  const file = event.target.files[0];
  if (!file) {
    alert('No file selected.');
    return;
  }
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const stateObj = JSON.parse(e.target.result);
      calculator.setState(
        stateObj.rootElement.initialState,
        stateObj.rootElement.initialSettings
      );
      if (stateObj.rootElement.initialScript) {
        globalScript = stateObj.rootElement.initialScript;
        updateScript(stateObj.rootElement.initialScript);
      }
    } catch (error) {
      alert('Error parsing JSON file: ' + error.message);
    }
  };

  reader.readAsText(file);
}

function updateScript(scriptContent) {
  const oldScript = document.getElementById('desmosScript');
  if (oldScript) {
    oldScript.remove();
  }

  const newScript = document.createElement('script');
  newScript.id = 'desmosScript';
  newScript.textContent = ` (function() {
      ${scriptContent}
    })();`;
  document.body.appendChild(newScript);
}

async function fetchTemplate(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading Desmos state:', error);
  }
}

const modal = document.getElementById('modal');
const openModalButton = document.getElementById('open-code-editor');
const closeModalButton = document.getElementById('closeModal');
const editor = ace.edit('editor');

// Initialize the Monaco Editor once the modal opens
let editorInitialized = false;
openModalButton.onclick = () => {
  modal.style.display = 'block';
  if (!editorInitialized) {
    editor.setTheme('ace/theme/eclipse');
    editor.session.setMode('ace/mode/javascript');
    editorInitialized = true;
  }
  if (globalScript) {
    editor.setValue(globalScript, -1);
  }
};

// Close modal when the close button is clicked
closeModalButton.onclick = () => {
  modal.style.display = 'none';
  globalScript = editor.getValue();
  updateScript(globalScript);
};

// Close modal when clicking outside the modal content
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    globalScript = editor.getValue();
    updateScript(globalScript);
  }
};
