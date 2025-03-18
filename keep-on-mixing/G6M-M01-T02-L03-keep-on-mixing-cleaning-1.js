const options = {
  settingsMenu: false,
  expressions: false,
  zoomButtons: false,
  showResetButtonOnGraphpaper: false,
  lockViewport: false,
  pointsOfInterest: false,
  authorFeatures: false,
  trace: false,
  allowUndox: false,
  colors: {
    blueA: '#a0b0ea',
    blueB: '#4264d9',
    blueC: '#2a4cc2',
    blueD: '#1f2eb5',
    blueE: '#002195',
    blueF: '#031371',

    purpleA: '#CDB4F3',
    purpleB: '#8150CF',
    purpleC: '#6B31C7',
    purpleD: '#5421AC',
    purpleE: '#39128D',
    purpleF: '#200761',

    greenA: '#8AD3B9',
    greenB: '#26996F',
    greenC: '#008756',
    greenD: '#03784C',
    greenE: '#00613C',
    greenF: '#00452B',

    redA: '#F0959C',
    redB: '#E64A56',
    redC: '#E12A38',
    redD: '#C4212C',
    redE: '#A10712',
    redF: '#6E303A',

    yellowA: '#F9DFB8',
    yellowB: '#F2B558',
    yellowC: '#EC9511',
    yellowD: '#E7820C',
    yellowE: '#DF6705',
    yellowF: '#B55100',

    black: '#000000',
    white: '#ffffff',
  },
  actions: true,
};

const elt = document.getElementById('calculator');
const calculator = Desmos.Geometry(elt, options);

const state = {
  version: 11,
  randomSeed: '63b239e74b5dc263650aac948a8ed28d',
  graph: {
    viewport: {
      xmin: -1.7366089600643715,
      ymin: -5.834804666140798,
      xmax: 15.078328493652618,
      ymax: 13.166074656559399,
    },
    degreeMode: true,
    product: 'geometry-calculator',
  },
  expressions: {
    list: [
      {
        type: 'folder',
        id: '**dcg_geo_folder**',
        title: 'geometry',
        secret: true,
      },
      {
        type: 'expression',
        id: '6',
        color: '#000000',
        latex: 'y_{label}=\\left(-1,4\\right)',
        showLabel: true,
        label: 'Amount of Lemon Juice (cups)',
        hidden: true,
        labelAngle: '90',
      },
      {
        type: 'expression',
        id: '7',
        color: '#000000',
        latex: 'x_{label}=\\left(7,-1\\right)',
        showLabel: true,
        label: 'Amount of Baking Soda (cups)',
        hidden: true,
      },
      { type: 'expression', id: '8', color: '#2a4cc2' },
    ],
  },
  geometryToolbar: {
    toolbar: 'custom',
    toolbarState: { point: { visible: true }, line: { visible: true } },
  },
};

calculator.setState(state);
