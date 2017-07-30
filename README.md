### WIP

# ember-dp-map

Google maps component for Ember.

## Installation

`npm install ember-dp-map`

or

* `git clone` this repository
* `npm install`
* `bower install`

then add these entries to your config/environment.js:

```
ENV.contentSecurityPolicy = {
  'default-src': "'none'",
  'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com",
  'style-src': "'self' 'unsafe-inline' https://*.googleapis.com",
  'img-src': "'self' https://*.googleapis.com https://*.gstatic.com data:",
  'font-src': "'self' https://*.gstatic.com"
}
```

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
