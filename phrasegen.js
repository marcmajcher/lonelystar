var bits = [
  [
    ['compression', 'magnetic', 'electric', 'coolant', 'resonant', 'heat',
      'fuel', 'lubricant', 'thermal', 'gravitic', 'nuclear', 'quantum'
    ],
    ['coil', 'throttle', 'gear', 'turbine', 'feeder', 'generator',
      'pressurizer', 'exchanger', 'catalyst', 'actuator', 'thrusters', 'exhaust'
    ],
    ['discharging', 'leaking', 'grinding', 'overheating', 'shaking', 'clogging',
      'radiating', 'bending', 'shuddering', 'seizing', 'shifting', 'deviating'
    ]
  ],
  [
    ['steel', 'composite', 'airlock', 'engine', 'cargo', 'jeffries',
      'scarf', 'engine', 'port', 'starboard', 'fore', 'aft'
    ],
    ['coupling', 'pylong', 'ring', 'fork', 'bulkhead', 'mount',
      'casing', 'frame', 'jacket', 'tube', 'plate', 'door'
    ],
    ['bending', 'snapping', 'bulging', 'cracking', 'breaking', 'sagging',
      'oxidizing', 'twisting', 'tearing', 'fracturing', 'splitting', 'ablating'
    ]
  ],
  [
    ['oxygen', 'weapons', 'communications', 'waste', 'carbon dioxide', 'heat',
      'water', 'sensor', 'electrical', 'gravity', 'visual', 'hydraulic'
    ],
    ['exchanger', 'computer', 'lubricant', 'antenna', 'eliminator', 'radiator',
      'purifier', 'recycler', 'relay', 'generator', 'wires', 'tubes'
    ],
    ['leaking', 'sparking', 'fluctuating', 'crashing', 'spraying', 'deviating',
      'arcing', 'scorching', 'hesitating', 'oscillating', 'ghosting', 'vibrating'
    ]
  ]
];
var intros = ['Buckle up,', 'Strap in!', 'Captain,', 'Captain!', 'We got a problem!',
  'Hang on everyone,', 'Ain\'t no thing, only', 'It\'s shiny, it\'s just',
  'Problem, Captain!', '<i>Ai ya! Huai le</i>!', '<i>Ta ma de</i>.', '<i>Wo men wan le</i>!', '<i>Gou shi</i>!',
  '<i>Lao tian, bu</i>.', '<i>Zao gao</i>!', 'We got a problem here!', 'Captain, uh... ',
  '<i>Wo de tian a</i>!', '<i>Zhen dao mei</i>!', 'Uh oh.', 'Gorram it!', 'Captain,'
];
var expls = ['', '', '', 'gorram', '<i>xi niu</i>', 'gorram', '', '<i>gou shi</i>', 'gorram', '', '<i>yu bun de</i>',
  'gorram', '', '<i>fei wu</i>', 'gorram', '', '', '<i>gou zao de</i>', '', ''
];

function loadPhrase(list) {
  if (list === undefined) {
    list = Math.floor(Math.random() * 3);
  }
  var p1 = bits[list][0][Math.floor(Math.random() * 12)];
  var p2 = bits[list][1][Math.floor(Math.random() * 12)];
  var p3 = bits[list][2][Math.floor(Math.random() * 12)];
  var intro = intros[Math.floor(Math.random() * intros.length)];
  var expl = expls[Math.floor(Math.random() * expls.length)];
  var the = (Math.random() < .75) ? 'the' : 'our';
  if (intro.slice(-1) === '.' || intro.slice(-1) === '!') {
    the = the.charAt(0).toUpperCase() + the.slice(1);
  }
  var verb = (p2.slice(-1) === 's') ? 'are' : 'is';

  var phrase = [intro, the, expl, p1, p2, verb, p3].join(' ') + '!';
  $('#phrase').html(phrase);
}

function init() {
  $('#again').click(function() {
    loadPhrase()
  });
  $('#engine').click(function() {
    loadPhrase(0)
  });
  $('#hull').click(function() {
    loadPhrase(1)
  });
  $('#systems').click(function() {
    loadPhrase(2)
  });

  loadPhrase();
}

$(document).ready(init);
