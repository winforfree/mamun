(() => {
    "use strict";
    var e, r = {},
        t = {};

    function o(e) {
        var n = t[e];
        if (void 0 !== n) return n.exports;
        var i = t[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return r[e].call(i.exports, i, i.exports, o), i.loaded = !0, i.exports
    }
    o.m = r, e = [], o.O = (r, t, n, i) => {
        if (!t) {
            var l = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [t, n, i] = e[u], a = !0, s = 0; s < t.length; s++)(!1 & i || l >= i) && Object.keys(o.O).every((e => o.O[e](t[s]))) ? t.splice(s--, 1) : (a = !1, i < l && (l = i));
                if (a) {
                    e.splice(u--, 1);
                    var d = n();
                    void 0 !== d && (r = d)
                }
            }
            return r
        }
        i = i || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
        e[u] = [t, n, i]
    }, o.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return o.d(r, {
            a: r
        }), r
    }, o.d = (e, r) => {
        for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
        })
    }, o.e = () => Promise.resolve(), o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e = {
            runtimeSimplePage: 0
        };
        o.O.j = r => 0 === e[r];
        var r = (r, t) => {
                var n, i, [l, a, s] = t,
                    d = 0;
                if (l.some((r => 0 !== e[r]))) {
                    for (n in a) o.o(a, n) && (o.m[n] = a[n]);
                    if (s) var u = s(o)
                }
                for (r && r(t); d < l.length; d++) i = l[d], o.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                return o.O(u)
            },
            t = self.webpackChunkeditor = self.webpackChunkeditor || [];
        t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    })()
})();
//# sourceMappingURL=runtimeSimplePage.1f5d57551aa31777b361.js.map