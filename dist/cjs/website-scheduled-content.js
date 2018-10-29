'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_1 = require('./chunk-1c32c684.js');
var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var queries = require('@base-cms/base4-website-nextjs/queries');
var __chunk_2 = require('./chunk-e3da5ca7.js');
require('classnames');
require('graphql-tag');
require('@base-cms/base4-website-nextjs/components/content');
require('@base-cms/base4-website-nextjs/utils');

var propTypes = {
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
  query: {}
};

var BlockListGroupA = function BlockListGroupA(_ref) {
  var query = _ref.query,
      attrs = __chunk_1._objectWithoutProperties(_ref, ["query"]);

  var fragment = __chunk_2.ListGroupStyleA.fragments.content;

  var props = __chunk_1._objectSpread({}, query, {
    fragment: fragment
  });

  return React.createElement(queries.WebsiteScheduledContent, props, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        items = _ref2.items;
    if (loading) return React.createElement("span", null, "Loading...");

    if (error) {
      return React.createElement("span", null, "Error", ' ', error.message);
    }

    return React.createElement(__chunk_2.ListGroupStyleA, __chunk_1._extends({
      nodes: items
    }, attrs));
  });
};

BlockListGroupA.displayName = 'WebsiteScheduledContent/Blocks/ListGroupA';
BlockListGroupA.propTypes = propTypes;
BlockListGroupA.defaultProps = defaultProps;

exports.BlockListGroupA = BlockListGroupA;
