(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    4094: function (e, r, n) {
      Promise.resolve().then(n.bind(n, 7228));
    },
    7228: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          ClientCompoenent: function () {
            return u;
          },
        });
      var t = n(9268),
        o = n(6006);
      let s = (0, o.createContext)({}),
        u = () => {
          let [e, r] = (0, o.useState)(0);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(
                (e) => {
                  let { children: r } = e;
                  return (0, t.jsx)(s.Provider, { value: {}, children: r });
                },
                { children: (0, t.jsx)("input", {}) }
              ),
              (0, t.jsx)("button", {
                onClick: () => {
                  console.log("click"), r(e + 1);
                },
                children: "+1 (rerender)",
              }),
            ],
          });
        };
    },
    3177: function (e, r, n) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var t = n(6006),
        o = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        u = Object.prototype.hasOwnProperty,
        c =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        i = { key: !0, ref: !0, __self: !0, __source: !0 };
      function l(e, r, n) {
        var t,
          s = {},
          l = null,
          f = null;
        for (t in (void 0 !== n && (l = "" + n),
        void 0 !== r.key && (l = "" + r.key),
        void 0 !== r.ref && (f = r.ref),
        r))
          u.call(r, t) && !i.hasOwnProperty(t) && (s[t] = r[t]);
        if (e && e.defaultProps)
          for (t in (r = e.defaultProps)) void 0 === s[t] && (s[t] = r[t]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: f,
          props: s,
          _owner: c.current,
        };
      }
      (r.Fragment = s), (r.jsx = l), (r.jsxs = l);
    },
    9268: function (e, r, n) {
      "use strict";
      e.exports = n(3177);
    },
  },
  function (e) {
    e.O(0, [253, 769, 744], function () {
      return e((e.s = 4094));
    }),
      (_N_E = e.O());
  },
]);
