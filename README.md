# ember-dp-map

Google maps component for Ember.

## Installation

`ember install dpatz/ember-dp-map`

or

* `git clone` this repository
* `npm install`
* `bower install`

## Usage
```
{{#dp-map zoom=14
          lat=32.96
          lon=-117.15
          on-center-change='map-center-changed'}}
  {{dp-circle center=model.center
              radius=500
              strokeColor='#FF0000'
              strokeOpacity='#FF0000'
              strokeWeight=2
              fillColor='#FF0000'
              _fillOpacity: 0.35}}
  {{dp-marker position=model.center title='The center'}}
{{/dp-map}}
```

## Running

* `ember server` to run the dummy app
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
