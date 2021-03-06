'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-2c19305a.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var gql = _interopDefault(require('graphql-tag'));
var queries = require('@base-cms/base4-website-nextjs/queries');
var core = require('./core.js');
var content = require('./content.js');
require('classnames');
require('next/router');
require('@base-cms/base4-website-nextjs/components/core');
require('@base-cms/base4-website-nextjs/utils');
require('@base-cms/base4-website-nextjs/config');
require('@base-cms/base4-website-nextjs/components/content');

function _templateObject() {
  var data = __chunk_1._taggedTemplateLiteral(["\n  fragment ContentBlockHeroStyleA on PlatformContent {\n    ...ContentListGroupItemStyleA\n    ...ContentCardBodyStyleB\n  }\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var fragment = gql(_templateObject(), content.CardBodyB.fragments.content, content.ListGroupA.fragments.content);
var propTypes = {
  header: PropTypes.string,
  // @todo These should be placed here by a HOC.
  query: PropTypes.shape({
    after: PropTypes.string,
    children: PropTypes.func,
    excludeContentIds: PropTypes.arrayOf(PropTypes.string),
    excludeContentTypes: PropTypes.arrayOf(PropTypes.string),
    first: PropTypes.number,
    includeContentTypes: PropTypes.arrayOf(PropTypes.string),
    requiresImage: PropTypes.bool,
    sectionBubbling: PropTypes.bool,
    sectionId: PropTypes.number.isRequired
  })
};
var defaultProps = {
  header: null,
  query: {}
};

var BlockHeroA = function BlockHeroA(_ref) {
  var header = _ref.header,
      query = _ref.query,
      attrs = __chunk_1._objectWithoutProperties(_ref, ["header", "query"]);

  var props = __chunk_1._objectSpread({}, query, {
    fragment: fragment
  });

  return React__default.createElement(queries.WebsiteScheduledContent, props, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        items = _ref2.items;
    if (loading) return React__default.createElement("span", null, "Loading...");

    if (error) {
      return React__default.createElement("span", null, "Error", ' ', error.message);
    }

    var content$$1 = items[0] || {};
    var nodes = items.slice(1) || [];
    return React__default.createElement(core.Card, attrs, header && React__default.createElement("div", {
      className: "card-header"
    }, header), React__default.createElement(content.CardBodyB, {
      content: content$$1,
      imgAttrs: {
        className: header ? 'rounded-0' : null
      }
    }), React__default.createElement(content.ListGroupA, {
      flush: true,
      nodes: nodes
    }));
  });
};

BlockHeroA.displayName = 'WebsiteScheduledContent/Blocks/CardListGroupA';
BlockHeroA.propTypes = propTypes;
BlockHeroA.defaultProps = defaultProps;

function _templateObject$1() {
  var data = __chunk_1._taggedTemplateLiteral(["\n  fragment ContentBlockHeroStyleA on PlatformContent {\n    ...ContentListGroupItemStyleA\n    ...ContentCardBodyStyleA\n  }\n  ", "\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var fragment$1 = gql(_templateObject$1(), content.CardBodyA.fragments.content, content.ListGroupA.fragments.content);
var propTypes$1 = {
  // @todo These should be placed here by a HOC.
  query: PropTypes.shape({
    after: PropTypes.string,
    children: PropTypes.func,
    excludeContentIds: PropTypes.arrayOf(PropTypes.string),
    excludeContentTypes: PropTypes.arrayOf(PropTypes.string),
    first: PropTypes.number,
    includeContentTypes: PropTypes.arrayOf(PropTypes.string),
    requiresImage: PropTypes.bool,
    sectionBubbling: PropTypes.bool,
    sectionId: PropTypes.number.isRequired
  })
};
var defaultProps$1 = {
  query: {}
};

var BlockHeroA$1 = function BlockHeroA(_ref) {
  var query = _ref.query,
      attrs = __chunk_1._objectWithoutProperties(_ref, ["query"]);

  var props = __chunk_1._objectSpread({}, query, {
    fragment: fragment$1
  });

  return React__default.createElement(queries.WebsiteScheduledContent, props, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        items = _ref2.items;
    if (loading) return React__default.createElement("span", null, "Loading...");

    if (error) {
      return React__default.createElement("span", null, "Error", ' ', error.message);
    }

    var content$$1 = items[0] || {};
    var nodes = items.slice(1) || [];
    return React__default.createElement("div", {
      className: "row"
    }, React__default.createElement("div", {
      className: "col-lg-7 col-xl-8"
    }, React__default.createElement(core.Card, null, React__default.createElement(content.CardBodyA, __chunk_1._extends({
      content: content$$1
    }, attrs)))), React__default.createElement("div", {
      className: "col-lg-5 col-xl-4"
    }, React__default.createElement(content.ListGroupA, __chunk_1._extends({
      nodes: nodes
    }, attrs))));
  });
};

BlockHeroA$1.displayName = 'WebsiteScheduledContent/Blocks/HeroA';
BlockHeroA$1.propTypes = propTypes$1;
BlockHeroA$1.defaultProps = defaultProps$1;

var fragment$2 = content.ListGroupA.fragments.content;
var propTypes$2 = {
  // @todo These should be placed here by a HOC.
  query: PropTypes.shape({
    after: PropTypes.string,
    children: PropTypes.func,
    excludeContentIds: PropTypes.arrayOf(PropTypes.string),
    excludeContentTypes: PropTypes.arrayOf(PropTypes.string),
    first: PropTypes.number,
    includeContentTypes: PropTypes.arrayOf(PropTypes.string),
    requiresImage: PropTypes.bool,
    sectionBubbling: PropTypes.bool,
    sectionId: PropTypes.number.isRequired
  })
};
var defaultProps$2 = {
  query: {}
};

var BlockListGroupA = function BlockListGroupA(_ref) {
  var query = _ref.query,
      attrs = __chunk_1._objectWithoutProperties(_ref, ["query"]);

  var props = __chunk_1._objectSpread({}, query, {
    fragment: fragment$2
  });

  return React__default.createElement(queries.WebsiteScheduledContent, props, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        items = _ref2.items;
    if (loading) return React__default.createElement("span", null, "Loading...");

    if (error) {
      return React__default.createElement("span", null, "Error", ' ', error.message);
    }

    return React__default.createElement(content.ListGroupA, __chunk_1._extends({
      nodes: items
    }, attrs));
  });
};

BlockListGroupA.displayName = 'WebsiteScheduledContent/Blocks/ListGroupA';
BlockListGroupA.propTypes = propTypes$2;
BlockListGroupA.defaultProps = defaultProps$2;

exports.BlockCardListGroupA = BlockHeroA;
exports.BlockHeroA = BlockHeroA$1;
exports.BlockListGroupA = BlockListGroupA;
