"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ProtectedRoute = _ref => {
  let {
    isAuthenticated,
    children,
    adminRoute,
    isAdmin,
    redirect = "/login",
    redirectAdmin = "/profile"
  } = _ref;

  if (!isAuthenticated) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: redirect
    });
  }

  if (adminRoute && !isAdmin) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: redirectAdmin
    });
  }

  return children ? children : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Outlet, null);
};

var _default = ProtectedRoute;
exports.default = _default;