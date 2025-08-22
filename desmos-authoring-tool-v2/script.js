(() => {
  'use strict';

  // ---------- DOM helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const on = (el, type, handler, opts) =>
    el.addEventListener(type, handler, opts);

  // ---------- Elements ----------
  const calcEl = $('#calculator');
  const sidebar = $('#sidebar');
  const toggleSidebarButton = $('#toggleSidebar');

  const xMinInput = $('#input-xmin');
  const xMaxInput = $('#input-xmax');
  const yMinInput = $('#input-ymin');
  const yMaxInput = $('#input-ymax');
  const boundsForm = $('#boundsForm');
  const setBoundsButton = $('#set-bounds');

  const clearHistoryButton = $('#clear-history');

  const optionsList = $('#optionsList');

  const copyStateBtn = $('#copy-state');
  const downloadStateBtn = $('#download-state');
  const loadFromClipboardBtn = $('#load-state-from-clipboard');
  const loadFromFileBtn = $('#load-state-from-file');
  const stateFileInput = $('#state-file');

  const xMinorRange = document.getElementById('input-xminor');
  const yMinorRange = document.getElementById('input-yminor');
  const xMinorOut = document.getElementById('out-xminor');
  const yMinorOut = document.getElementById('out-yminor');

  // const loadTemplateBtn = $('#load-template');
  // const selectTemplate = $('#select-template');

  // Script editor modal
  const modal = $('#modal');
  const openModalButton = $('#open-code-editor');
  const closeModalButton = $('#closeModal');

  // ---------- Sidebar toggle with ARIA ----------
  const setSidebarOpen = (open) => {
    sidebar.classList.toggle('is-open', open);
    sidebar.classList.toggle('is-closed', !open);
    sidebar.dataset.state = open ? 'open' : 'closed';

    toggleSidebarButton.setAttribute('aria-expanded', String(open));

    // Icons: open => ">", collapsed => "<"
    toggleSidebarButton.textContent = open ? '>' : '<';
    toggleSidebarButton.title = open ? 'Hide settings' : 'Show settings';
  };

  on(toggleSidebarButton, 'click', () => {
    setSidebarOpen(!sidebar.classList.contains('is-open'));
  });

  setSidebarOpen(true);

  // ---------- Bounds handling ----------
  const getNumber = (el) => parseFloat(el.value);
  const sanitizeMinMax = (min, max) => (min > max ? [max, min] : [min, max]);

  const applyBounds = () => {
    let [left, right] = sanitizeMinMax(
      getNumber(xMinInput),
      getNumber(xMaxInput)
    );
    let [bottom, top] = sanitizeMinMax(
      getNumber(yMinInput),
      getNumber(yMaxInput)
    );
    try {
      calculator?.setMathBounds?.({ left, right, bottom, top });
    } catch (err) {
      console.error('setMathBounds failed:', err);
    }
  };

  on(setBoundsButton, 'click', (e) => {
    e.preventDefault();
    applyBounds();
  });
  on(boundsForm, 'submit', (e) => {
    e.preventDefault();
    applyBounds();
  });

  // ---------- Grouped Options Registry ----------
  /**
   * Add new groups or options by editing OPTION_GROUPS below.
   * Each option has:
   *  - key: unique string
   *  - label: UI label
   *  - default: default boolean
   *  - apply(checked): side-effect to call on change (and initial render)
   */
  const OPTION_GROUPS = [
    {
      id: 'display',
      title: 'Display',
      desc: 'Axes, grid, viewport',
      items: [
        {
          key: 'showAxesGrid',
          label: 'Show Axes & Grid',
          default: false,
          apply: (checked) => {
            calculator?.updateSettings?.({
              showGrid: checked,
              showXAxis: checked,
              showYAxis: checked,
              xAxisNumbers: checked,
              yAxisNumbers: checked,
              xAxisArrowMode: checked ? 'BOTH' : 'NONE',
              yAxisArrowMode: checked ? 'BOTH' : 'NONE',
            });
          },
        },
        {
          key: 'firstQuadrant',
          label: 'First Quadrant Only',
          default: false,
          apply: (checked) =>
            calculator?.updateSettings?.({
              restrictGridToFirstQuadrant: checked,
            }),
        },
        {
          key: 'lockViewport',
          label: 'Lock Viewport',
          default: false,
          apply: (checked) =>
            calculator?.updateSettings?.({ lockViewport: checked }),
        },
      ],
    },
    {
      id: 'ui',
      title: 'UI Elements',
      desc: 'Expression panel and buttons',
      items: [
        {
          key: 'showExpressions',
          label: 'Show Expressions',
          default: true,
          apply: (checked) =>
            calculator?.updateSettings?.({ expressions: checked }),
        },
        {
          key: 'expTopbar',
          label: 'Show Expressions Topbar',
          default: true,
          apply: (checked) =>
            calculator?.updateSettings?.({ expressionsTopbar: checked }),
        },
        {
          key: 'settingsMenu',
          label: 'Show Settings Menu',
          default: false,
          apply: (checked) =>
            calculator?.updateSettings?.({ settingsMenu: checked }),
        },
        {
          key: 'zoomButtons',
          label: 'Show Zoom Buttons',
          default: false,
          apply: (checked) =>
            calculator?.updateSettings?.({ zoomButtons: checked }),
        },
      ],
    },
    {
      id: 'authoring',
      title: 'Authoring',
      desc: 'Author features',
      items: [
        {
          key: 'authorFeatures',
          label: 'Enable Author Features',
          default: true,
          apply: (checked) =>
            calculator?.updateSettings?.({ authorFeatures: checked }),
        },
        // Example “future” setting:
        // {
        //   key: 'trace',
        //   label: 'Enable Trace',
        //   default: false,
        //   apply: (checked) => calculator?.updateSettings?.({ trace: checked }),
        // },
      ],
    },
  ];

  // ---------- Persistence (optional; safe if storage is blocked) ----------
  const STORAGE_KEYS = {
    options: 'desmos_options_state_v1',
    groups: 'desmos_option_groups_open_v1',
  };
  const readJSON = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  };
  const writeJSON = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  };

  // ---------- Rendering ----------
  function renderOptionGroups() {
    const savedOptions = readJSON(STORAGE_KEYS.options, {});
    const openGroups = new Set(readJSON(STORAGE_KEYS.groups, []));

    const container = document.createDocumentFragment();

    OPTION_GROUPS.forEach((group) => {
      const sectionId = `group-${group.id}`;
      const contentId = `${sectionId}-content`;
      const isOpen = openGroups.has(group.id);

      // Wrapper panel
      const panel = document.createElement('section');
      panel.className = 'panel';

      // Collapsible header button
      const headerBtn = document.createElement('button');
      headerBtn.type = 'button';
      headerBtn.className = 'collapse';
      headerBtn.setAttribute('aria-expanded', String(isOpen));
      headerBtn.setAttribute('aria-controls', contentId);
      headerBtn.innerHTML = `
      <span class="chev" aria-hidden="true"></span>
      <span class="collapse__title">${group.title}</span>
      ${group.desc ? `<span class="collapse__desc">${group.desc}</span>` : ''}
    `;
      panel.appendChild(headerBtn);

      // Content
      const content = document.createElement('div');
      content.className = 'collapse__content';
      content.id = contentId;
      content.hidden = !isOpen;

      const list = document.createElement('div');
      list.className = 'option-list';

      group.items.forEach((opt) => {
        const id = `opt-${opt.key}`;

        const label = document.createElement('label');
        label.className = 'option';
        label.htmlFor = id;

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = id;
        input.dataset.optKey = opt.key;

        // decide initial value: saved -> default
        const initial =
          typeof savedOptions[opt.key] === 'boolean'
            ? savedOptions[opt.key]
            : !!opt.default;
        input.checked = initial;

        const text = document.createElement('span');
        text.className = 'option__label';
        text.textContent = opt.label;

        label.appendChild(input);
        label.appendChild(text);
        list.appendChild(label);

        // wire change
        input.addEventListener('change', () => {
          const checked = input.checked;
          // apply effect
          try {
            opt.apply?.(checked);
          } catch (e) {
            console.error(`Apply for ${opt.key} failed`, e);
          }
          // persist
          const next = {
            ...readJSON(STORAGE_KEYS.options, {}),
            [opt.key]: checked,
          };
          writeJSON(STORAGE_KEYS.options, next);
        });

        // apply initial value
        try {
          opt.apply?.(initial);
        } catch {}
      });

      content.appendChild(list);
      panel.appendChild(content);
      container.appendChild(panel);

      // Toggle behavior
      headerBtn.addEventListener('click', () => {
        const expanded = headerBtn.getAttribute('aria-expanded') === 'true';
        const next = !expanded;
        headerBtn.setAttribute('aria-expanded', String(next));
        content.hidden = !next;

        const setArr = new Set(readJSON(STORAGE_KEYS.groups, []));
        if (next) setArr.add(group.id);
        else setArr.delete(group.id);
        writeJSON(STORAGE_KEYS.groups, Array.from(setArr));
      });
    });

    optionsList.innerHTML = '';
    optionsList.appendChild(container);
  }

  renderOptionGroups();

  // ---------- Boolean Setting Index (setOptions vs updateSettings) ----------
  // Source: Desmos API v1.11 docs; boolean configuration options and boolean graph settings.
  // Config options (set via calculator.setOptions({...})) [booleans only]
  const BOOL_CONFIG_OPTIONS = [
    // visibility / UI
    'keypad',
    'graphpaper',
    'expressions',
    'settingsMenu',
    'zoomButtons',
    'showResetButtonOnGraphpaper',
    'expressionsTopbar',
    'pointsOfInterest',
    'trace',
    'border',
    'lockViewport',
    'expressionsCollapsed',
    // authoring / content affordances
    'capExpressionSize',
    'authorFeatures',
    'images',
    'folders',
    'notes',
    'sliders',
    'substitutions',
    'links',
    // behavior / misc
    'autosize',
    'sixKeyInput',
    'brailleControls',
    'audio',
    // lesser-known documented booleans
    'pasteGraphLink', // loads graph when a link is pasted
    'logScales', // allow logarithmic axis scales
  ];

  // Graph settings (persist in state, set via calculator.updateSettings({...})) [booleans only]
  const BOOL_GRAPH_SETTINGS = [
    'showGrid',
    'showXAxis',
    'showYAxis',
    'xAxisNumbers',
    'yAxisNumbers',
    'restrictGridToFirstQuadrant',
    // add other confirmed boolean graph settings here as needed
  ];

  // Build a search index with metadata
  const BOOLEAN_SETTINGS_INDEX = [
    ...BOOL_CONFIG_OPTIONS.map((key) => ({
      key,
      type: 'option',
      apply: (v) => calculator?.updateSettings?.({ [key]: v }),
    })),
    ...BOOL_GRAPH_SETTINGS.map((key) => ({
      key,
      type: 'setting',
      apply: (v) => calculator?.updateSettings?.({ [key]: v }),
    })),
  ];

  // Optional: a few friendly aliases to match user searches (maps alias -> real key)
  const ALIASES = {
    grid: 'showGrid',
    'x-axis': 'showXAxis',
    'y-axis': 'showYAxis',
    'x numbers': 'xAxisNumbers',
    'y numbers': 'yAxisNumbers',
    'first quadrant': 'restrictGridToFirstQuadrant',
    poI: 'pointsOfInterest',
  };

  // ---------- Search UI ----------
  const searchInput = document.getElementById('settings-search');
  const resultsBox = document.getElementById('settings-results');

  const readOptionsState = () => {
    try {
      return JSON.parse(localStorage.getItem('desmos_options_state_v1')) || {};
    } catch {
      return {};
    }
  };

  // Derive current values best-effort from persisted options and live calculator state
  function getCurrentBooleanValue(item) {
    // Try from persisted user choices first
    const saved = readOptionsState();
    if (Object.prototype.hasOwnProperty.call(saved, item.key))
      return !!saved[item.key];

    // Fallback to live settings if available (non-blocking)
    try {
      if (item.type === 'option') {
        // Many options are not directly observable; assume Desmos internal defaults if unknown
        // We'll just return undefined to render unchecked; user can toggle to set.
        return undefined;
      } else {
        const s = calculator?.settings || calculator?.graphSettings;
        if (s && Object.prototype.hasOwnProperty.call(s, item.key))
          return !!s[item.key];
      }
    } catch {}
    return undefined;
  }

  function renderSearchResults(query) {
    resultsBox.innerHTML = '';
    if (!query || !query.trim()) return;

    const q = query.trim().toLowerCase();

    // Map alias to canonical key if exact match
    const aliasKey = ALIASES[q];
    const matches = BOOLEAN_SETTINGS_INDEX.filter(({ key }) => {
      if (aliasKey) return key === aliasKey;
      return key.toLowerCase().includes(q);
    });

    if (!matches.length) return;

    const frag = document.createDocumentFragment();

    matches.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'setting-item';
      row.setAttribute('role', 'option');

      const name = document.createElement('span');
      name.className = 'setting-item__name';
      name.textContent = item.key;

      const badge = document.createElement('span');
      badge.className = 'setting-item__badge';
      badge.textContent = item.type === 'option' ? 'option' : 'setting';

      const toggle = document.createElement('input');
      toggle.type = 'checkbox';
      const current = getCurrentBooleanValue(item);
      if (typeof current === 'boolean') toggle.checked = current;

      toggle.addEventListener('change', () => {
        try {
          item.apply(!!toggle.checked);
        } catch (e) {
          console.error(`Failed applying ${item.key}`, e);
        }
        // persist option-type values alongside your existing registry persistence
        if (item.type === 'option') {
          const next = { ...readOptionsState(), [item.key]: !!toggle.checked };
          try {
            localStorage.setItem(
              'desmos_options_state_v1',
              JSON.stringify(next)
            );
          } catch {}
        }
      });

      const right = document.createElement('div');
      right.style.display = 'flex';
      right.style.alignItems = 'center';
      right.style.gap = '8px';
      right.appendChild(badge);
      right.appendChild(toggle);

      row.appendChild(name);
      row.appendChild(right);
      frag.appendChild(row);
    });

    resultsBox.appendChild(frag);
  }

  const debounce = (fn, ms = 200) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  };

  searchInput?.addEventListener(
    'input',
    debounce((e) => {
      renderSearchResults(e.target.value);
    }, 150)
  );

  // ---------- History ----------
  on(clearHistoryButton, 'click', () => {
    try {
      calculator?.clearHistory?.();
    } catch (e) {
      console.error('clearHistory failed:', e);
    }
  });

  // ---------- Subdivision Sliders ----------
  function applyMinorSubdivisions() {
    const x = parseInt(xMinorRange.value, 10);
    const y = parseInt(yMinorRange.value, 10);
    calculator.updateSettings({
      xAxisMinorSubdivisions: x,
      yAxisMinorSubdivisions: y,
    });
  }

  function syncMinorFromCalculator() {
    try {
      // Prefer the live observable settings object
      const xs = calculator.settings?.xAxisMinorSubdivisions;
      const ys = calculator.settings?.yAxisMinorSubdivisions;

      const x = typeof xs === 'number' ? xs : 0;
      const y = typeof ys === 'number' ? ys : 0;

      xMinorRange.value = String(x);
      yMinorRange.value = String(y);
      xMinorOut.value = String(x);
      yMinorOut.value = String(y);
    } catch {
      // if anything is unavailable, leave defaults
    }
  }

  // reflect value as you slide, and apply immediately
  xMinorRange.addEventListener('input', () => {
    xMinorOut.value = xMinorRange.value;
    calculator.updateSettings({
      xAxisMinorSubdivisions: parseInt(xMinorRange.value, 10),
    });
  });

  yMinorRange.addEventListener('input', () => {
    yMinorOut.value = yMinorRange.value;
    calculator.updateSettings({
      yAxisMinorSubdivisions: parseInt(yMinorRange.value, 10),
    });
  });

  // initialize from current graph settings once scripts are loaded
  window.addEventListener('load', syncMinorFromCalculator);

  // ---------- Save / Load ----------
  const pad = (n) => String(n).padStart(2, '0');
  const timeStamp = () => {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
      d.getDate()
    )}_${pad(d.getHours())}-${pad(d.getMinutes())}-${pad(d.getSeconds())}`;
  };

  const downloadJSON = (obj, fileName) => {
    const jsonString = JSON.stringify(obj, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const a = document.createElement('a');
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName.endsWith('.json') ? fileName : `${fileName}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const getStateObj = (id) => {
    const newState = calculator?.getState?.();
    const newOptions = calculator?.graphSettings; // keep parity with original
    const product = newState?.graph?.product;
    const calculatorType =
      product === 'graphing-3d'
        ? '3D'
        : product === 'geometry-calculator'
        ? 'geometry'
        : 'graphing';

    const stateObj = {
      id: id || undefined,
      rootElement: {
        type: 'clic-desmos',
        calculator: calculatorType,
        initialState: newState,
        initialSettings: newOptions,
      },
    };
    if (globalScript?.trim()) {
      stateObj.rootElement.initialScript = globalScript;
    }
    return stateObj;
  };

  const fetchTemplate = async (filePath) => {
    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.error('Template load failed:', err);
      return null;
    }
  };

  const loadStateFromJSON = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const stateObj = JSON.parse(String(e.target?.result || ''));
        calculator?.setState?.(
          stateObj.rootElement.initialState,
          stateObj.rootElement.initialSettings
        );
        if (stateObj.rootElement.initialScript) {
          globalScript = stateObj.rootElement.initialScript;
          updateScript(globalScript);
        }
      } catch (error) {
        alert('Error parsing JSON file: ' + error.message);
      }
    };
    reader.readAsText(file);
  };

  // on(loadTemplateBtn, 'click', async () => {
  //   const value = selectTemplate.value;
  //   if (!value) return;
  //   const data = await fetchTemplate(`templates/${value}.JSON`);
  //   if (!data?.rootElement?.initialState) return;
  //   calculator?.setState?.(
  //     data.rootElement.initialState,
  //     data.rootElement.initialSettings
  //   );
  //   if (data.rootElement.initialScript) {
  //     globalScript = data.rootElement.initialScript;
  //     updateScript(globalScript);
  //   }
  // });

  on(copyStateBtn, 'click', async () => {
    try {
      const name = `Desmos-Interactive-${timeStamp()}`;
      const stateObj = getStateObj(name);
      await navigator.clipboard.writeText(JSON.stringify(stateObj));
      copyStateBtn.disabled = true;
      setTimeout(() => (copyStateBtn.disabled = false), 900);
    } catch (e) {
      console.error('Copy failed:', e);
    }
  });

  on(downloadStateBtn, 'click', () => {
    try {
      calculator?.clearHistory?.(); // match original behavior
      const defaultName = `My Awesome Desmos Interactive ${timeStamp()}`;
      const fileName = prompt('Save As…', defaultName);
      if (fileName === null) return;
      const stateObj = getStateObj(fileName);
      downloadJSON(stateObj, fileName);
    } catch (e) {
      console.error('Download failed:', e);
    }
  });

  on(loadFromClipboardBtn, 'click', async () => {
    try {
      const text = await navigator.clipboard.readText();
      const stateObj = JSON.parse(text);
      calculator?.setState?.(
        stateObj.rootElement.initialState,
        stateObj.rootElement.initialSettings
      );
      if (stateObj.rootElement.initialScript) {
        globalScript = stateObj.rootElement.initialScript;
        updateScript(globalScript);
      }
      loadFromClipboardBtn.disabled = true;
      setTimeout(() => (loadFromClipboardBtn.disabled = false), 900);
    } catch (e) {
      alert('Could not read or parse clipboard JSON.');
      console.error(e);
    }
  });

  on(stateFileInput, 'change', loadStateFromJSON);
  on(loadFromFileBtn, 'click', () => stateFileInput.click());

  // ---------- Script editor (Ace) ----------
  let globalScript;
  const aceEditor = (() => {
    // Will be initialized on open
    return {
      instance: null,
      get ready() {
        return !!this.instance;
      },
      ensure() {
        if (!this.instance && window.ace) {
          this.instance = ace.edit('editor');
          this.instance.setTheme('ace/theme/eclipse');
          this.instance.session.setMode('ace/mode/javascript');
        }
      },
      setValue(v) {
        this.instance?.setValue(v, -1);
      },
      getValue() {
        return this.instance?.getValue() || '';
      },
      focus() {
        this.instance?.focus();
      },
    };
  })();

  const openModal = () => {
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    aceEditor.ensure();
    if (globalScript) aceEditor.setValue(globalScript);
    aceEditor.focus();
  };
  const closeModal = () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    if (aceEditor.ready) {
      globalScript = aceEditor.getValue();
      updateScript(globalScript);
    }
  };

  on(openModalButton, 'click', openModal);
  on(closeModalButton, 'click', closeModal);
  on(modal, 'click', (e) => {
    if (e.target === modal) closeModal();
  });

  function updateScript(scriptContent) {
    const oldScript = document.getElementById('desmosScript');
    if (oldScript) oldScript.remove();
    if (!scriptContent?.trim()) return;

    const newScript = document.createElement('script');
    newScript.id = 'desmosScript';
    newScript.textContent = `(function(){\n${scriptContent}\n})();`;
    document.body.appendChild(newScript);
  }
})();
