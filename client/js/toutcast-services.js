// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "toutCastServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name toutCastServices
 * @module
 * @description
 *
 * The `toutCastServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("toutCastServices", ['ngResource']);

/**
 * @ngdoc object
 * @name toutCastServices.Tout
 * @header toutCastServices.Tout
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tout` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Tout",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Touts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Tout.locale() instead.
        "prototype$__get__locale": {
          url: urlBase + "/Touts/:id/locale",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#prototype$__findById__redemptions
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Find a related item by id for redemptions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for redemptions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "prototype$__findById__redemptions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Touts/:id/redemptions/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#prototype$__destroyById__redemptions
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Delete a related item by id for redemptions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for redemptions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__redemptions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Touts/:id/redemptions/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#prototype$__updateById__redemptions
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Update a related item by id for redemptions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for redemptions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "prototype$__updateById__redemptions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Touts/:id/redemptions/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#prototype$__get__redemptions
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Queries redemptions of Tout.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "prototype$__get__redemptions": {
          isArray: true,
          url: urlBase + "/Touts/:id/redemptions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#prototype$__create__redemptions
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Creates a new instance in redemptions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "prototype$__create__redemptions": {
          url: urlBase + "/Touts/:id/redemptions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#prototype$__delete__redemptions
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Deletes all redemptions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__redemptions": {
          url: urlBase + "/Touts/:id/redemptions",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#prototype$__count__redemptions
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Counts redemptions of Tout.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__redemptions": {
          url: urlBase + "/Touts/:id/redemptions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#create
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Touts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#createMany
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Touts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#upsert
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Touts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#exists
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Touts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#findById
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Touts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#find
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Touts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#findOne
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Touts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#updateAll
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Touts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#deleteById
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Touts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#count
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Touts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#prototype$updateAttributes
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Touts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#createChangeStream
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Touts/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#nearby
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `loc` – `{GeoPoint}` - 
         *
         *  - `rad` – `{Number=}` - 
         *
         *  - `cap` – `{Number=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `touts` – `{undefined=}` - 
         */
        "nearby": {
          url: urlBase + "/Touts/nearby",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#publish
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `toutId` – `{String}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "publish": {
          url: urlBase + "/Touts/publish",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#redeem
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `toutId` – `{String}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `tout` – `{undefined=}` - 
         */
        "redeem": {
          url: urlBase + "/Touts/redeem",
          method: "POST"
        },

        // INTERNAL. Use Locale.touts.findById() instead.
        "::findById::Locale::touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts.destroyById() instead.
        "::destroyById::Locale::touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Locale.touts.updateById() instead.
        "::updateById::Locale::touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Locale.touts() instead.
        "::get::Locale::touts": {
          isArray: true,
          url: urlBase + "/Locales/:id/touts",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts.create() instead.
        "::create::Locale::touts": {
          url: urlBase + "/Locales/:id/touts",
          method: "POST"
        },

        // INTERNAL. Use Locale.touts.createMany() instead.
        "::createMany::Locale::touts": {
          isArray: true,
          url: urlBase + "/Locales/:id/touts",
          method: "POST"
        },

        // INTERNAL. Use Locale.touts.destroyAll() instead.
        "::delete::Locale::touts": {
          url: urlBase + "/Locales/:id/touts",
          method: "DELETE"
        },

        // INTERNAL. Use Locale.touts.count() instead.
        "::count::Locale::touts": {
          url: urlBase + "/Locales/:id/touts/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name toutCastServices.Tout#updateOrCreate
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#update
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#destroyById
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name toutCastServices.Tout#removeById
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name toutCastServices.Tout#modelName
    * @propertyOf toutCastServices.Tout
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Tout`.
    */
    R.modelName = "Tout";


        /**
         * @ngdoc method
         * @name toutCastServices.Tout#locale
         * @methodOf toutCastServices.Tout
         *
         * @description
         *
         * Fetches belongsTo relation locale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locale = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::get::Tout::locale"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name toutCastServices.BusinessCategory
 * @header toutCastServices.BusinessCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BusinessCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "BusinessCategory",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/BusinessCategories/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#create
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/BusinessCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#createMany
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/BusinessCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#upsert
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/BusinessCategories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#exists
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/BusinessCategories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#findById
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/BusinessCategories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#find
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/BusinessCategories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#findOne
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/BusinessCategories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#updateAll
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/BusinessCategories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#deleteById
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/BusinessCategories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#count
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/BusinessCategories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#prototype$updateAttributes
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/BusinessCategories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#createChangeStream
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/BusinessCategories/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Business.businessCategories() instead.
        "::get::Business::businessCategories": {
          url: urlBase + "/Businesses/:id/businessCategories",
          method: "GET"
        },

        // INTERNAL. Use Business.businessCategories.create() instead.
        "::create::Business::businessCategories": {
          url: urlBase + "/Businesses/:id/businessCategories",
          method: "POST"
        },

        // INTERNAL. Use Business.businessCategories.createMany() instead.
        "::createMany::Business::businessCategories": {
          isArray: true,
          url: urlBase + "/Businesses/:id/businessCategories",
          method: "POST"
        },

        // INTERNAL. Use Business.businessCategories.update() instead.
        "::update::Business::businessCategories": {
          url: urlBase + "/Businesses/:id/businessCategories",
          method: "PUT"
        },

        // INTERNAL. Use Business.businessCategories.destroy() instead.
        "::destroy::Business::businessCategories": {
          url: urlBase + "/Businesses/:id/businessCategories",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#updateOrCreate
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#update
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#destroyById
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name toutCastServices.BusinessCategory#removeById
         * @methodOf toutCastServices.BusinessCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name toutCastServices.BusinessCategory#modelName
    * @propertyOf toutCastServices.BusinessCategory
    * @description
    * The name of the model represented by this $resource,
    * i.e. `BusinessCategory`.
    */
    R.modelName = "BusinessCategory";


    return R;
  }]);

/**
 * @ngdoc object
 * @name toutCastServices.ToutUser
 * @header toutCastServices.ToutUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ToutUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ToutUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ToutUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__findById__accessTokens
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__destroyById__accessTokens
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__updateById__accessTokens
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ToutUser.commerces() instead.
        "prototype$__get__commerces": {
          url: urlBase + "/ToutUsers/:id/commerces",
          method: "GET"
        },

        // INTERNAL. Use ToutUser.commerces.create() instead.
        "prototype$__create__commerces": {
          url: urlBase + "/ToutUsers/:id/commerces",
          method: "POST"
        },

        // INTERNAL. Use ToutUser.commerces.update() instead.
        "prototype$__update__commerces": {
          url: urlBase + "/ToutUsers/:id/commerces",
          method: "PUT"
        },

        // INTERNAL. Use ToutUser.commerces.destroy() instead.
        "prototype$__destroy__commerces": {
          url: urlBase + "/ToutUsers/:id/commerces",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__findById__identities
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Find a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__findById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutUsers/:id/identities/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__destroyById__identities
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Delete a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutUsers/:id/identities/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__updateById__identities
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Update a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__updateById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutUsers/:id/identities/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__findById__credentials
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Find a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__findById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutUsers/:id/credentials/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__destroyById__credentials
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Delete a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutUsers/:id/credentials/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__updateById__credentials
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Update a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__updateById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ToutUsers/:id/credentials/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__get__accessTokens
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Queries accessTokens of ToutUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/ToutUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__create__accessTokens
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/ToutUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__delete__accessTokens
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/ToutUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__count__accessTokens
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Counts accessTokens of ToutUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/ToutUsers/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__get__identities
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Queries identities of ToutUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__get__identities": {
          isArray: true,
          url: urlBase + "/ToutUsers/:id/identities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__create__identities
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__create__identities": {
          url: urlBase + "/ToutUsers/:id/identities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__delete__identities
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Deletes all identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__identities": {
          url: urlBase + "/ToutUsers/:id/identities",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__count__identities
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Counts identities of ToutUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__identities": {
          url: urlBase + "/ToutUsers/:id/identities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__get__credentials
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Queries credentials of ToutUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__get__credentials": {
          isArray: true,
          url: urlBase + "/ToutUsers/:id/credentials",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__create__credentials
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$__create__credentials": {
          url: urlBase + "/ToutUsers/:id/credentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__delete__credentials
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Deletes all credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__credentials": {
          url: urlBase + "/ToutUsers/:id/credentials",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$__count__credentials
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Counts credentials of ToutUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__credentials": {
          url: urlBase + "/ToutUsers/:id/credentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#create
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ToutUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#createMany
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ToutUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#upsert
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ToutUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#exists
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ToutUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#findById
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ToutUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#find
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ToutUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#findOne
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ToutUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#updateAll
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/ToutUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#deleteById
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/ToutUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#count
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ToutUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#prototype$updateAttributes
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ToutUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#createChangeStream
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ToutUsers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#login
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/ToutUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#logout
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/ToutUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#confirm
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/ToutUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#resetPassword
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/ToutUsers/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#getCurrent
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with Http result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/ToutUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#updateOrCreate
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#update
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#destroyById
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#removeById
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ToutUser` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#getCachedCurrent
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link toutCastServices.ToutUser#login} or
         * {@link toutCastServices.ToutUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A ToutUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#isAuthenticated
         * @methodOf toutCastServices.ToutUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#getCurrentId
         * @methodOf toutCastServices.ToutUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name toutCastServices.ToutUser#modelName
    * @propertyOf toutCastServices.ToutUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ToutUser`.
    */
    R.modelName = "ToutUser";

    /**
     * @ngdoc object
     * @name toutCastServices.ToutUser.commerces
     * @header toutCastServices.ToutUser.commerces
     * @object
     * @description
     *
     * The object `ToutUser.commerces` groups methods
     * manipulating `Business` instances related to `ToutUser`.
     *
     * Call {@link toutCastServices.ToutUser#commerces ToutUser.commerces()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser#commerces
         * @methodOf toutCastServices.ToutUser
         *
         * @description
         *
         * Fetches hasOne relation commerces.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.commerces = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::get::ToutUser::commerces"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser.commerces#create
         * @methodOf toutCastServices.ToutUser.commerces
         *
         * @description
         *
         * Creates a new instance in commerces of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.commerces.create = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::create::ToutUser::commerces"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser.commerces#createMany
         * @methodOf toutCastServices.ToutUser.commerces
         *
         * @description
         *
         * Creates a new instance in commerces of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.commerces.createMany = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::createMany::ToutUser::commerces"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser.commerces#destroy
         * @methodOf toutCastServices.ToutUser.commerces
         *
         * @description
         *
         * Deletes commerces of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.commerces.destroy = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::destroy::ToutUser::commerces"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.ToutUser.commerces#update
         * @methodOf toutCastServices.ToutUser.commerces
         *
         * @description
         *
         * Update commerces of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.commerces.update = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::update::ToutUser::commerces"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name toutCastServices.Locale
 * @header toutCastServices.Locale
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Locale` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Locale",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Locales/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Locale.touts.findById() instead.
        "prototype$__findById__touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts.destroyById() instead.
        "prototype$__destroyById__touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Locale.touts.updateById() instead.
        "prototype$__updateById__touts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Locales/:id/touts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Locale.commerce() instead.
        "prototype$__get__commerce": {
          url: urlBase + "/Locales/:id/commerce",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts() instead.
        "prototype$__get__touts": {
          isArray: true,
          url: urlBase + "/Locales/:id/touts",
          method: "GET"
        },

        // INTERNAL. Use Locale.touts.create() instead.
        "prototype$__create__touts": {
          url: urlBase + "/Locales/:id/touts",
          method: "POST"
        },

        // INTERNAL. Use Locale.touts.destroyAll() instead.
        "prototype$__delete__touts": {
          url: urlBase + "/Locales/:id/touts",
          method: "DELETE"
        },

        // INTERNAL. Use Locale.touts.count() instead.
        "prototype$__count__touts": {
          url: urlBase + "/Locales/:id/touts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#create
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Locales",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#createMany
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Locales",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#upsert
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Locales",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#exists
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Locales/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#findById
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Locales/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#find
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Locales",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#findOne
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Locales/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#updateAll
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Locales/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#deleteById
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Locales/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#count
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Locales/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#prototype$updateAttributes
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Locales/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#createChangeStream
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Locales/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Tout.locale() instead.
        "::get::Tout::locale": {
          url: urlBase + "/Touts/:id/locale",
          method: "GET"
        },

        // INTERNAL. Use Business.locales.findById() instead.
        "::findById::Business::locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Businesses/:id/locales/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.locales.destroyById() instead.
        "::destroyById::Business::locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Businesses/:id/locales/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.locales.updateById() instead.
        "::updateById::Business::locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Businesses/:id/locales/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.locales() instead.
        "::get::Business::locales": {
          isArray: true,
          url: urlBase + "/Businesses/:id/locales",
          method: "GET"
        },

        // INTERNAL. Use Business.locales.create() instead.
        "::create::Business::locales": {
          url: urlBase + "/Businesses/:id/locales",
          method: "POST"
        },

        // INTERNAL. Use Business.locales.createMany() instead.
        "::createMany::Business::locales": {
          isArray: true,
          url: urlBase + "/Businesses/:id/locales",
          method: "POST"
        },

        // INTERNAL. Use Business.locales.destroyAll() instead.
        "::delete::Business::locales": {
          url: urlBase + "/Businesses/:id/locales",
          method: "DELETE"
        },

        // INTERNAL. Use Business.locales.count() instead.
        "::count::Business::locales": {
          url: urlBase + "/Businesses/:id/locales/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name toutCastServices.Locale#updateOrCreate
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#update
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#destroyById
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#removeById
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name toutCastServices.Locale#modelName
    * @propertyOf toutCastServices.Locale
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Locale`.
    */
    R.modelName = "Locale";

    /**
     * @ngdoc object
     * @name toutCastServices.Locale.touts
     * @header toutCastServices.Locale.touts
     * @object
     * @description
     *
     * The object `Locale.touts` groups methods
     * manipulating `Tout` instances related to `Locale`.
     *
     * Call {@link toutCastServices.Locale#touts Locale.touts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name toutCastServices.Locale#touts
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Queries touts of Locale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R.touts = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::get::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Locale.touts#count
         * @methodOf toutCastServices.Locale.touts
         *
         * @description
         *
         * Counts touts of Locale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.touts.count = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::count::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Locale.touts#create
         * @methodOf toutCastServices.Locale.touts
         *
         * @description
         *
         * Creates a new instance in touts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R.touts.create = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::create::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Locale.touts#createMany
         * @methodOf toutCastServices.Locale.touts
         *
         * @description
         *
         * Creates a new instance in touts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R.touts.createMany = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::createMany::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Locale.touts#destroyAll
         * @methodOf toutCastServices.Locale.touts
         *
         * @description
         *
         * Deletes all touts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.touts.destroyAll = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::delete::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Locale.touts#destroyById
         * @methodOf toutCastServices.Locale.touts
         *
         * @description
         *
         * Delete a related item by id for touts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for touts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.touts.destroyById = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::destroyById::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Locale.touts#findById
         * @methodOf toutCastServices.Locale.touts
         *
         * @description
         *
         * Find a related item by id for touts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for touts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R.touts.findById = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::findById::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Locale.touts#updateById
         * @methodOf toutCastServices.Locale.touts
         *
         * @description
         *
         * Update a related item by id for touts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for touts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tout` object.)
         * </em>
         */
        R.touts.updateById = function() {
          var TargetResource = $injector.get("Tout");
          var action = TargetResource["::updateById::Locale::touts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Locale#commerce
         * @methodOf toutCastServices.Locale
         *
         * @description
         *
         * Fetches belongsTo relation commerce.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R.commerce = function() {
          var TargetResource = $injector.get("Business");
          var action = TargetResource["::get::Locale::commerce"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name toutCastServices.Business
 * @header toutCastServices.Business
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Business` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Business",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Businesses/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Business.businessCategories() instead.
        "prototype$__get__businessCategories": {
          url: urlBase + "/Businesses/:id/businessCategories",
          method: "GET"
        },

        // INTERNAL. Use Business.businessCategories.create() instead.
        "prototype$__create__businessCategories": {
          url: urlBase + "/Businesses/:id/businessCategories",
          method: "POST"
        },

        // INTERNAL. Use Business.businessCategories.update() instead.
        "prototype$__update__businessCategories": {
          url: urlBase + "/Businesses/:id/businessCategories",
          method: "PUT"
        },

        // INTERNAL. Use Business.businessCategories.destroy() instead.
        "prototype$__destroy__businessCategories": {
          url: urlBase + "/Businesses/:id/businessCategories",
          method: "DELETE"
        },

        // INTERNAL. Use Business.locales.findById() instead.
        "prototype$__findById__locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Businesses/:id/locales/:fk",
          method: "GET"
        },

        // INTERNAL. Use Business.locales.destroyById() instead.
        "prototype$__destroyById__locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Businesses/:id/locales/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Business.locales.updateById() instead.
        "prototype$__updateById__locales": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Businesses/:id/locales/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Business.locales() instead.
        "prototype$__get__locales": {
          isArray: true,
          url: urlBase + "/Businesses/:id/locales",
          method: "GET"
        },

        // INTERNAL. Use Business.locales.create() instead.
        "prototype$__create__locales": {
          url: urlBase + "/Businesses/:id/locales",
          method: "POST"
        },

        // INTERNAL. Use Business.locales.destroyAll() instead.
        "prototype$__delete__locales": {
          url: urlBase + "/Businesses/:id/locales",
          method: "DELETE"
        },

        // INTERNAL. Use Business.locales.count() instead.
        "prototype$__count__locales": {
          url: urlBase + "/Businesses/:id/locales/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#create
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Businesses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#createMany
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Businesses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#upsert
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Businesses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#exists
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Businesses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#findById
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Businesses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#find
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Businesses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#findOne
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Businesses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#updateAll
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Businesses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#deleteById
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Businesses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#count
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Businesses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#prototype$updateAttributes
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Businesses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Business#createChangeStream
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Businesses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ToutUser.commerces() instead.
        "::get::ToutUser::commerces": {
          url: urlBase + "/ToutUsers/:id/commerces",
          method: "GET"
        },

        // INTERNAL. Use ToutUser.commerces.create() instead.
        "::create::ToutUser::commerces": {
          url: urlBase + "/ToutUsers/:id/commerces",
          method: "POST"
        },

        // INTERNAL. Use ToutUser.commerces.createMany() instead.
        "::createMany::ToutUser::commerces": {
          isArray: true,
          url: urlBase + "/ToutUsers/:id/commerces",
          method: "POST"
        },

        // INTERNAL. Use ToutUser.commerces.update() instead.
        "::update::ToutUser::commerces": {
          url: urlBase + "/ToutUsers/:id/commerces",
          method: "PUT"
        },

        // INTERNAL. Use ToutUser.commerces.destroy() instead.
        "::destroy::ToutUser::commerces": {
          url: urlBase + "/ToutUsers/:id/commerces",
          method: "DELETE"
        },

        // INTERNAL. Use Locale.commerce() instead.
        "::get::Locale::commerce": {
          url: urlBase + "/Locales/:id/commerce",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name toutCastServices.Business#updateOrCreate
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name toutCastServices.Business#update
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name toutCastServices.Business#destroyById
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name toutCastServices.Business#removeById
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Business` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name toutCastServices.Business#modelName
    * @propertyOf toutCastServices.Business
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Business`.
    */
    R.modelName = "Business";

    /**
     * @ngdoc object
     * @name toutCastServices.Business.businessCategories
     * @header toutCastServices.Business.businessCategories
     * @object
     * @description
     *
     * The object `Business.businessCategories` groups methods
     * manipulating `BusinessCategory` instances related to `Business`.
     *
     * Call {@link toutCastServices.Business#businessCategories Business.businessCategories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name toutCastServices.Business#businessCategories
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Fetches hasOne relation businessCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R.businessCategories = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::get::Business::businessCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.businessCategories#create
         * @methodOf toutCastServices.Business.businessCategories
         *
         * @description
         *
         * Creates a new instance in businessCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R.businessCategories.create = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::create::Business::businessCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.businessCategories#createMany
         * @methodOf toutCastServices.Business.businessCategories
         *
         * @description
         *
         * Creates a new instance in businessCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R.businessCategories.createMany = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::createMany::Business::businessCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.businessCategories#destroy
         * @methodOf toutCastServices.Business.businessCategories
         *
         * @description
         *
         * Deletes businessCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.businessCategories.destroy = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::destroy::Business::businessCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.businessCategories#update
         * @methodOf toutCastServices.Business.businessCategories
         *
         * @description
         *
         * Update businessCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BusinessCategory` object.)
         * </em>
         */
        R.businessCategories.update = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::update::Business::businessCategories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name toutCastServices.Business.locales
     * @header toutCastServices.Business.locales
     * @object
     * @description
     *
     * The object `Business.locales` groups methods
     * manipulating `Locale` instances related to `Business`.
     *
     * Call {@link toutCastServices.Business#locales Business.locales()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name toutCastServices.Business#locales
         * @methodOf toutCastServices.Business
         *
         * @description
         *
         * Queries locales of Business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locales = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::get::Business::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.locales#count
         * @methodOf toutCastServices.Business.locales
         *
         * @description
         *
         * Counts locales of Business.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.locales.count = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::count::Business::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.locales#create
         * @methodOf toutCastServices.Business.locales
         *
         * @description
         *
         * Creates a new instance in locales of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locales.create = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::create::Business::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.locales#createMany
         * @methodOf toutCastServices.Business.locales
         *
         * @description
         *
         * Creates a new instance in locales of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locales.createMany = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::createMany::Business::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.locales#destroyAll
         * @methodOf toutCastServices.Business.locales
         *
         * @description
         *
         * Deletes all locales of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.locales.destroyAll = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::delete::Business::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.locales#destroyById
         * @methodOf toutCastServices.Business.locales
         *
         * @description
         *
         * Delete a related item by id for locales.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locales
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.locales.destroyById = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::destroyById::Business::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.locales#findById
         * @methodOf toutCastServices.Business.locales
         *
         * @description
         *
         * Find a related item by id for locales.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locales
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locales.findById = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::findById::Business::locales"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name toutCastServices.Business.locales#updateById
         * @methodOf toutCastServices.Business.locales
         *
         * @description
         *
         * Update a related item by id for locales.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for locales
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Locale` object.)
         * </em>
         */
        R.locales.updateById = function() {
          var TargetResource = $injector.get("Locale");
          var action = TargetResource["::updateById::Business::locales"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name toutCastServices.Referal
 * @header toutCastServices.Referal
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Referal` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Referal",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Referals/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#create
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Referals",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#createMany
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Referals",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#upsert
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Referals",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#exists
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Referals/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#findById
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Referals/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#find
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Referals",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#findOne
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Referals/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#updateAll
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Referals/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#deleteById
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Referals/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#count
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Referals/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#prototype$updateAttributes
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Referals/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#createChangeStream
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Referals/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name toutCastServices.Referal#updateOrCreate
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#update
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#destroyById
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name toutCastServices.Referal#removeById
         * @methodOf toutCastServices.Referal
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referal` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name toutCastServices.Referal#modelName
    * @propertyOf toutCastServices.Referal
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Referal`.
    */
    R.modelName = "Referal";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name toutCastServices.LoopBackResourceProvider
   * @header toutCastServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name toutCastServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf toutCastServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name toutCastServices.LoopBackResourceProvider#setUrlBase
     * @methodOf toutCastServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name toutCastServices.LoopBackResourceProvider#getUrlBase
     * @methodOf toutCastServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
