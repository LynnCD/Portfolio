/*
  Map from https://www.amcharts.com/visited_states/
*/

// $.getJSON('JS/statesVisited.json').then(function(states_visited){
//   return states_visited;
// })

let statesVisited = [];
$.getJSON('DATA/statesVisited.json').then(function(states_visited) {
  statesVisited = states_visited;
})

let map = AmCharts.makeChart('mapdiv', {
  type: 'map',
  theme: 'light',
  panEventsEnabled : true,
  backgroundColor : '#E1ECFA',
  backgroundAlpha : 1,
  zoomControl: {
    zoomControlEnabled : true
  },
  dataProvider : {
    map : 'usaHigh',
    getAreasFromMap : true,
    areas : [
      {
        'id': 'US-CA',
        'showAsSelected': true
      },
      {
        'id': 'US-CT',
        'showAsSelected': true
      },
      {
        'id': 'US-FL',
        'showAsSelected': true
      },
      {
        'id': 'US-GA',
        'showAsSelected': true
      },
      {
        'id': 'US-IL',
        'showAsSelected': true
      },
      {
        'id': 'US-LA',
        'showAsSelected': true
      },
      {
        'id': 'US-MA',
        'showAsSelected': true
      },
      {
        'id': 'US-MD',
        'showAsSelected': true
      },
      {
        'id': 'US-MS',
        'showAsSelected': true
      },
      {
        'id': 'US-NC',
        'showAsSelected': true
      },
      {
        'id': 'US-NH',
        'showAsSelected': true
      },
      {
        'id': 'US-NJ',
        'showAsSelected': true
      },
      {
        'id': 'US-NY',
        'showAsSelected': true
      },
      {
        'id': 'US-OR',
        'showAsSelected': true
      },
      {
        'id': 'US-PA',
        'showAsSelected': true
      },
      {
        'id': 'US-SC',
        'showAsSelected': true
      },
      {
        'id': 'US-TX',
        'showAsSelected': true
      },
      {
        'id': 'US-VA',
        'showAsSelected': true
      },
      {
        'id': 'US-VT',
        'showAsSelected': true
      },
      {
        'id': 'US-WA',
        'showAsSelected': true
      }
    ]
  },
  areasSettings : {
    autoZoom : true,
    color : '#B4B4B7',
    colorSolid : '#2E7CE8',
    selectedColor : '#2E7CE8',
    outlineColor : '#666666',
    rollOverColor : '#9EC2F7',
    rollOverOutlineColor : '#000000'
  }
});
