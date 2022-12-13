!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Calendar", [], t) : "object" == typeof exports ? exports.Calendar = t() : e.Calendar = t()
}(this, function () {
    return a = {}, r.m = n = [function (e, t, _i) {
        (function (di) {
            var ui; //! moment.js
            //! version : 2.27.0
            //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
            //! license : MIT
            //! momentjs.com
            di.exports = function () {
                "use strict";
                var t, r;

                function _() {
                    return t.apply(null, arguments)
                }

                function e(e) {
                    t = e
                }

                function i(e) {
                    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
                }

                function o(e) {
                    return e != null && Object.prototype.toString.call(e) === "[object Object]"
                }

                function d(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function u(e) {
                    if (Object.getOwnPropertyNames) {
                        return Object.getOwnPropertyNames(e).length === 0
                    } else {
                        var t;
                        for (t in e) {
                            if (d(e, t)) {
                                return false
                            }
                        }
                        return true
                    }

                }

                function s(e) {
                    return e === void 0
                }

                function l(e) {
                    return typeof e === "number" || Object.prototype.toString.call(e) === "[object Number]"
                }

                function c(e) {
                    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
                }

                function a(e, t) {
                    var n = [],
                        a;
                    for (a = 0; a < e.length; ++a) {
                        n.push(t(e[a], a))
                    }
                    return n
                }

                function m(e, t) {
                    for (var n in t) {
                        if (d(t, n)) {
                            e[n] = t[n]
                        }
                    }
                    if (d(t, "toString")) {
                        e.toString = t.toString
                    }
                    if (d(t, "valueOf")) {
                        e.valueOf = t.valueOf
                    }
                    return e
                }

                function f(e, t, n, a) {
                    return Gn(e, t, n, a, true).utc()
                }

                function n() {
                    return {
                        empty: false,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: false,
                        invalidEra: null,
                        invalidMonth: null,
                        invalidFormat: false,
                        userInvalidated: false,
                        iso: false,
                        parsedDateParts: [],
                        era: null,
                        meridiem: null,
                        rfc2822: false,
                        weekdayMismatch: false
                    }
                }

                function h(e) {
                    if (e._pf == null) {
                        e._pf = n()
                    }
                    return e._pf
                }

                if (Array.prototype.some) {
                    r = Array.prototype.some
                } else {
                    r = function (e) {
                        var t = Object(this),
                            n = t.length >>> 0,
                            a;
                        for (a = 0; a < n; a++) {
                            if (a in t && e.call(this, t[a], a, t)) {
                                return true
                            }
                        }
                        return false
                    }
                }

                function M(e) {
                    if (e._isValid == null) {
                        var t = h(e),
                            n = r.call(t.parsedDateParts, function (e) {
                                return e != null
                            }),
                            a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                        if (e._strict) {
                            a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === undefined
                        }
                        if (Object.isFrozen == null || !Object.isFrozen(e)) {
                            e._isValid = a
                        } else {
                            return a
                        }
                    }
                    return e._isValid
                }

                function y(e) {
                    var t = f(NaN);
                    if (e != null) {
                        m(h(t), e)
                    } else {
                        h(t).userInvalidated = true
                    }
                    return t
                }

                var p = _.momentProperties = [],
                    L = false;

                function v(e, t) {
                    var n, a, r;
                    if (!s(t._isAMomentObject)) {
                        e._isAMomentObject = t._isAMomentObject
                    }
                    if (!s(t._i)) {
                        e._i = t._i
                    }
                    if (!s(t._f)) {
                        e._f = t._f
                    }
                    if (!s(t._l)) {
                        e._l = t._l
                    }
                    if (!s(t._strict)) {
                        e._strict = t._strict
                    }
                    if (!s(t._tzm)) {
                        e._tzm = t._tzm
                    }
                    if (!s(t._isUTC)) {
                        e._isUTC = t._isUTC
                    }
                    if (!s(t._offset)) {
                        e._offset = t._offset
                    }
                    if (!s(t._pf)) {
                        e._pf = h(t)
                    }
                    if (!s(t._locale)) {
                        e._locale = t._locale
                    }
                    if (p.length > 0) {
                        for (n = 0; n < p.length; n++) {
                            a = p[n];
                            r = t[a];
                            if (!s(r)) {
                                e[a] = r
                            }
                        }
                    }
                    return e
                }

                function Y(e) {
                    v(this, e);
                    this._d = new Date(e._d != null ? e._d.getTime() : NaN);
                    if (!this.isValid()) {
                        this._d = new Date(NaN)
                    }
                    if (L === false) {
                        L = true;
                        _.updateOffset(this);
                        L = false
                    }
                }

                function k(e) {
                    return e instanceof Y || e != null && e._isAMomentObject != null
                }

                function g(e) {
                    if (_.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
                        console.warn("Deprecation warning: " + e)
                    }
                }

                function D(r, s) {
                    var i = true;
                    return m(function () {
                        if (_.deprecationHandler != null) {
                            _.deprecationHandler(null, r)
                        }
                        if (i) {
                            var e = [],
                                t, n, a;
                            for (n = 0; n < arguments.length; n++) {
                                t = "";
                                if (typeof arguments[n] === "object") {
                                    t += "\n[" + n + "] ";
                                    for (a in arguments[0]) {
                                        if (d(arguments[0], a)) {
                                            t += a + ": " + arguments[0][a] + ", "
                                        }
                                    }
                                    t = t.slice(0, -2)
                                } else {
                                    t = arguments[n]
                                }
                                e.push(t)
                            }
                            g(r + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + (new Error).stack);
                            i = false
                        }
                        return s.apply(this, arguments)
                    }, s)
                }

                var T = {},
                    w;

                function b(e, t) {
                    if (_.deprecationHandler != null) {
                        _.deprecationHandler(e, t)
                    }
                    if (!T[e]) {
                        g(t);
                        T[e] = true
                    }
                }

                function S(e) {
                    return typeof Function !== "undefined" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
                }

                function H(e) {
                    var t, n;
                    for (n in e) {
                        if (d(e, n)) {
                            t = e[n];
                            if (S(t)) {
                                this[n] = t
                            } else {
                                this["_" + n] = t
                            }
                        }
                    }
                    this._config = e;
                    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }

                function j(e, t) {
                    var n = m({}, e),
                        a;
                    for (a in t) {
                        if (d(t, a)) {
                            if (o(e[a]) && o(t[a])) {
                                n[a] = {};
                                m(n[a], e[a]);
                                m(n[a], t[a])
                            } else if (t[a] != null) {
                                n[a] = t[a]
                            } else {
                                delete n[a]
                            }
                        }
                    }
                    for (a in e) {
                        if (d(e, a) && !d(t, a) && o(e[a])) {
                            n[a] = m({}, n[a])
                        }
                    }
                    return n
                }

                function E(e) {
                    if (e != null) {
                        this.set(e)
                    }
                }

                if (_.suppressDeprecationWarnings = false, _.deprecationHandler = null, Object.keys) {
                    w = Object.keys
                } else {
                    w = function (e) {
                        var t, n = [];
                        for (t in e) {
                            if (d(e, t)) {
                                n.push(t)
                            }
                        }
                        return n
                    }
                }
                var x = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                };

                function O(e, t, n) {
                    var a = this._calendar[e] || this._calendar["sameElse"];
                    return S(a) ? a.call(t, n) : a
                }

                function P(e, t, n) {
                    var a = "" + Math.abs(e),
                        r = t - a.length,
                        s = e >= 0;
                    return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a
                }

                var A = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    W = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    F = {},
                    C = {};

                function N(e, t, n, a) {
                    var r = a;
                    if (typeof a === "string") {
                        r = function () {
                            return this[a]()
                        }
                    }
                    if (e) {
                        C[e] = r
                    }
                    if (t) {
                        C[t[0]] = function () {
                            return P(r.apply(this, arguments), t[1], t[2])
                        }
                    }
                    if (n) {
                        C[n] = function () {
                            return this.localeData().ordinal(r.apply(this, arguments), e)
                        }
                    }
                }

                function I(e) {
                    if (e.match(/\[[\s\S]/)) {
                        return e.replace(/^\[|\]$/g, "")
                    }
                    return e.replace(/\\/g, "")
                }

                function z(a) {
                    var r = a.match(A),
                        e, s;
                    for (e = 0, s = r.length; e < s; e++) {
                        if (C[r[e]]) {
                            r[e] = C[r[e]]
                        } else {
                            r[e] = I(r[e])
                        }
                    }
                    return function (e) {
                        var t = "",
                            n;
                        for (n = 0; n < s; n++) {
                            t += S(r[n]) ? r[n].call(e, a) : r[n]
                        }
                        return t
                    }
                }

                function R(e, t) {
                    if (!e.isValid()) {
                        return e.localeData().invalidDate()
                    }
                    t = J(t, e.localeData());
                    F[t] = F[t] || z(t);
                    return F[t](e)
                }

                function J(e, t) {
                    var n = 5;

                    function a(e) {
                        return t.longDateFormat(e) || e
                    }

                    W.lastIndex = 0;
                    while (n >= 0 && W.test(e)) {
                        e = e.replace(W, a);
                        W.lastIndex = 0;
                        n -= 1
                    }
                    return e
                }

                var B = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                };

                function U(e) {
                    var t = this._longDateFormat[e],
                        n = this._longDateFormat[e.toUpperCase()];

                    if (t || !n) {
                        return t
                    }
                    this._longDateFormat[e] = n.match(A).map(function (e) {
                        if (e === "MMMM" || e === "MM" || e === "DD" || e === "dddd") {
                            return e.slice(1)
                        }
                        return e
                    }).join("");
                    return this._longDateFormat[e]
                }

                var G = "Invalid date";

                function V() {
                    return this._invalidDate
                }

                var $ = "%d",
                    q = /\d{1,2}/;

                function K(e) {
                    return this._ordinal.replace("%d", e)
                }

                var Z = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    w: "a week",
                    ww: "%d weeks",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                };

                function Q(e, t, n, a) {
                    var r = this._relativeTime[n];
                    return S(r) ? r(e, t, n, a) : r.replace(/%d/i, e)
                }

                function X(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return S(n) ? n(t) : n.replace(/%s/i, t)
                }

                var ee = {};

                function te(e, t) {
                    var n = e.toLowerCase();
                    ee[n] = ee[n + "s"] = ee[t] = e
                }

                function ne(e) {
                    return typeof e === "string" ? ee[e] || ee[e.toLowerCase()] : undefined
                }

                function ae(e) {
                    var t = {},
                        n, a;
                    for (a in e) {
                        if (d(e, a)) {
                            n = ne(a);
                            if (n) {
                                t[n] = e[a]
                            }
                        }
                    }
                    return t
                }

                var re = {};

                function se(e, t) {
                    re[e] = t
                }

                function ie(e) {
                    var t = [],
                        n;
                    for (n in e) {
                        if (d(e, n)) {
                            t.push({
                                unit: n,
                                priority: re[n]
                            })
                        }
                    }
                    t.sort(function (e, t) {
                        return e.priority - t.priority
                    });
                    return t
                }

                function oe(e) {
                    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
                }

                function de(e) {
                    if (e < 0) {
                        return Math.ceil(e) || 0
                    } else {
                        return Math.floor(e)
                    }
                }

                function ue(e) {
                    var t = +e,
                        n = 0;
                    if (t !== 0 && isFinite(t)) {
                        n = de(t)
                    }
                    return n
                }

                function _e(t, n) {
                    return function (e) {
                        if (e != null) {
                            ce(this, t, e);
                            _.updateOffset(this, n);
                            return this
                        } else {
                            return le(this, t)
                        }
                    }
                }

                function le(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function ce(e, t, n) {
                    if (e.isValid() && !isNaN(n)) {
                        if (t === "FullYear" && oe(e.year()) && e.month() === 1 && e.date() === 29) {
                            n = ue(n);
                            e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Qe(n, e.month()))
                        } else {
                            e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
                        }
                    }
                }

                function me(e) {
                    e = ne(e);
                    if (S(this[e])) {
                        return this[e]()
                    }
                    return this
                }

                function fe(e, t) {
                    if (typeof e === "object") {
                        e = ae(e);
                        var n = ie(e),
                            a;
                        for (a = 0; a < n.length; a++) {
                            this[n[a].unit](e[n[a].unit])
                        }
                    } else {
                        e = ne(e);
                        if (S(this[e])) {
                            return this[e](t)
                        }
                    }
                    return this
                }

                var he = /\d/,
                    Me = /\d\d/,
                    ye = /\d{3}/,
                    pe = /\d{4}/,
                    Le = /[+-]?\d{6}/,
                    ve = /\d\d?/,
                    Ye = /\d\d\d\d?/,
                    ke = /\d\d\d\d\d\d?/,
                    ge = /\d{1,3}/,
                    De = /\d{1,4}/,
                    Te = /[+-]?\d{1,6}/,
                    we = /\d+/,
                    be = /[+-]?\d+/,
                    Se = /Z|[+-]\d\d:?\d\d/gi,
                    He = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    je = /[+-]?\d+(\.\d{1,3})?/,
                    Ee = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                    xe;

                function Oe(e, n, a) {
                    xe[e] = S(n) ? n : function (e, t) {
                        return e && a ? a : n
                    }
                }

                function Pe(e, t) {
                    if (!d(xe, e)) {
                        return new RegExp(Ae(e))
                    }
                    return xe[e](t._strict, t._locale)
                }

                function Ae(e) {
                    return We(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, a, r) {
                        return t || n || a || r
                    }))
                }

                function We(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                xe = {};
                var Fe = {};

                function Ce(e, n) {
                    var t, a = n;
                    if (typeof e === "string") {
                        e = [e]
                    }
                    if (l(n)) {
                        a = function (e, t) {
                            t[n] = ue(e)
                        }
                    }
                    for (t = 0; t < e.length; t++) {
                        Fe[e[t]] = a
                    }
                }

                function Ne(e, r) {
                    Ce(e, function (e, t, n, a) {
                        n._w = n._w || {};
                        r(e, n._w, n, a)
                    })
                }

                function Ie(e, t, n) {
                    if (t != null && d(Fe, e)) {
                        Fe[e](t, n._a, n, e)
                    }
                }

                var ze = 0,
                    Re = 1,
                    Je = 2,
                    Be = 3,
                    Ue = 4,
                    Ge = 5,
                    Ve = 6,
                    $e = 7,
                    qe = 8,
                    Ke;

                function Ze(e, t) {
                    return (e % t + t) % t
                }

                if (Array.prototype.indexOf) {
                    Ke = Array.prototype.indexOf
                } else {
                    Ke = function (e) {
                        var t;
                        for (t = 0; t < this.length; ++t) {
                            if (this[t] === e) {
                                return t
                            }
                        }
                        return -1
                    }
                }

                function Qe(e, t) {
                    if (isNaN(e) || isNaN(t)) {
                        return NaN
                    }
                    var n = Ze(t, 12);
                    e += (t - n) / 12;
                    return n === 1 ? oe(e) ? 29 : 28 : 31 - n % 7 % 2
                }

                N("M", ["MM", 2], "Mo", function () {
                    return this.month() + 1
                }), N("MMM", 0, 0, function (e) {
                    return this.localeData().monthsShort(this, e)
                }), N("MMMM", 0, 0, function (e) {
                    return this.localeData().months(this, e)
                }), te("month", "M"), se("month", 8), Oe("M", ve), Oe("MM", ve, Me), Oe("MMM", function (e, t) {
                    return t.monthsShortRegex(e)
                }), Oe("MMMM", function (e, t) {
                    return t.monthsRegex(e)
                }), Ce(["M", "MM"], function (e, t) {
                    t[Re] = ue(e) - 1
                }), Ce(["MMM", "MMMM"], function (e, t, n, a) {
                    var r = n._locale.monthsParse(e, a, n._strict);
                    if (r != null) {
                        t[Re] = r
                    } else {
                        h(n).invalidMonth = e
                    }
                });
                var Xe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    et = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    tt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    nt = Ee,
                    at = Ee;

                function rt(e, t) {
                    if (!e) {
                        return i(this._months) ? this._months : this._months["standalone"]
                    }
                    return i(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || tt).test(t) ? "format" : "standalone"][e.month()]
                }

                function st(e, t) {
                    if (!e) {
                        return i(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"]
                    }
                    return i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[tt.test(t) ? "format" : "standalone"][e.month()]
                }

                function it(e, t, n) {
                    var a, r, s, i = e.toLocaleLowerCase();
                    if (!this._monthsParse) {
                        this._monthsParse = [];
                        this._longMonthsParse = [];
                        this._shortMonthsParse = [];
                        for (a = 0; a < 12; ++a) {
                            s = f([2e3, a]);
                            this._shortMonthsParse[a] = this.monthsShort(s, "").toLocaleLowerCase();
                            this._longMonthsParse[a] = this.months(s, "").toLocaleLowerCase()
                        }
                    }
                    if (n) {
                        if (t === "MMM") {
                            r = Ke.call(this._shortMonthsParse, i);
                            return r !== -1 ? r : null
                        } else {
                            r = Ke.call(this._longMonthsParse, i);
                            return r !== -1 ? r : null
                        }
                    } else {
                        if (t === "MMM") {
                            r = Ke.call(this._shortMonthsParse, i);
                            if (r !== -1) {
                                return r
                            }
                            r = Ke.call(this._longMonthsParse, i);
                            return r !== -1 ? r : null
                        } else {
                            r = Ke.call(this._longMonthsParse, i);
                            if (r !== -1) {
                                return r
                            }
                            r = Ke.call(this._shortMonthsParse, i);
                            return r !== -1 ? r : null
                        }
                    }
                }

                function ot(e, t, n) {
                    var a, r, s;
                    if (this._monthsParseExact) {
                        return it.call(this, e, t, n)
                    }
                    if (!this._monthsParse) {
                        this._monthsParse = [];
                        this._longMonthsParse = [];
                        this._shortMonthsParse = []
                    }
                    for (a = 0; a < 12; a++) {
                        r = f([2e3, a]);
                        if (n && !this._longMonthsParse[a]) {
                            this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i");
                            this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")
                        }
                        if (!n && !this._monthsParse[a]) {
                            s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, "");
                            this._monthsParse[a] = new RegExp(s.replace(".", ""), "i")
                        }
                        if (n && t === "MMMM" && this._longMonthsParse[a].test(e)) {
                            return a
                        } else if (n && t === "MMM" && this._shortMonthsParse[a].test(e)) {
                            return a
                        } else if (!n && this._monthsParse[a].test(e)) {
                            return a
                        }
                    }
                }

                function dt(e, t) {
                    var n;
                    if (!e.isValid()) {
                        return e
                    }
                    if (typeof t === "string") {
                        if (/^\d+$/.test(t)) {
                            t = ue(t)
                        } else {
                            t = e.localeData().monthsParse(t);
                            if (!l(t)) {
                                return e
                            }
                        }
                    }
                    n = Math.min(e.date(), Qe(e.year(), t));
                    e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n);
                    return e
                }

                function ut(e) {
                    if (e != null) {
                        dt(this, e);
                        _.updateOffset(this, true);
                        return this
                    } else {
                        return le(this, "Month")
                    }
                }

                function _t() {
                    return Qe(this.year(), this.month())
                }

                function lt(e) {
                    if (this._monthsParseExact) {
                        if (!d(this, "_monthsRegex")) {
                            mt.call(this)
                        }
                        if (e) {
                            return this._monthsShortStrictRegex
                        } else {
                            return this._monthsShortRegex
                        }
                    } else {
                        if (!d(this, "_monthsShortRegex")) {
                            this._monthsShortRegex = nt
                        }
                        return this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
                    }
                }

                function ct(e) {
                    if (this._monthsParseExact) {
                        if (!d(this, "_monthsRegex")) {
                            mt.call(this)
                        }
                        if (e) {
                            return this._monthsStrictRegex
                        } else {
                            return this._monthsRegex
                        }
                    } else {
                        if (!d(this, "_monthsRegex")) {
                            this._monthsRegex = at
                        }
                        return this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
                    }
                }

                function mt() {
                    function e(e, t) {
                        return t.length - e.length
                    }

                    var t = [],
                        n = [],
                        a = [],
                        r, s;
                    for (r = 0; r < 12; r++) {
                        s = f([2e3, r]);
                        t.push(this.monthsShort(s, ""));
                        n.push(this.months(s, ""));
                        a.push(this.months(s, ""));
                        a.push(this.monthsShort(s, ""))
                    }
                    t.sort(e);
                    n.sort(e);
                    a.sort(e);
                    for (r = 0; r < 12; r++) {
                        t[r] = We(t[r]);
                        n[r] = We(n[r])
                    }
                    for (r = 0; r < 24; r++) {
                        a[r] = We(a[r])
                    }
                    this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i");
                    this._monthsShortRegex = this._monthsRegex;
                    this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
                    this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
                }

                function ft(e) {
                    return oe(e) ? 366 : 365
                }

                N("Y", 0, 0, function () {
                    var e = this.year();
                    return e <= 9999 ? P(e, 4) : "+" + e
                }), N(0, ["YY", 2], 0, function () {
                    return this.year() % 100
                }), N(0, ["YYYY", 4], 0, "year"), N(0, ["YYYYY", 5], 0, "year"), N(0, ["YYYYYY", 6, true], 0, "year"), te("year", "y"), se("year", 1), Oe("Y", be), Oe("YY", ve, Me), Oe("YYYY", De, pe), Oe("YYYYY", Te, Le), Oe("YYYYYY", Te, Le), Ce(["YYYYY", "YYYYYY"], ze), Ce("YYYY", function (e, t) {
                    t[ze] = e.length === 2 ? _.parseTwoDigitYear(e) : ue(e)
                }), Ce("YY", function (e, t) {
                    t[ze] = _.parseTwoDigitYear(e)
                }), Ce("Y", function (e, t) {
                    t[ze] = parseInt(e, 10)
                }), _.parseTwoDigitYear = function (e) {
                    return ue(e) + (ue(e) > 68 ? 1900 : 2e3)
                };
                var ht = _e("FullYear", true);

                function Mt() {
                    return oe(this.year())
                }

                function yt(e, t, n, a, r, s, i) {
                    var o;
                    if (e < 100 && e >= 0) {
                        o = new Date(e + 400, t, n, a, r, s, i);
                        if (isFinite(o.getFullYear())) {
                            o.setFullYear(e)
                        }
                    } else {
                        o = new Date(e, t, n, a, r, s, i)
                    }
                    return o
                }

                function pt(e) {
                    var t, n;
                    if (e < 100 && e >= 0) {
                        n = Array.prototype.slice.call(arguments);
                        n[0] = e + 400;
                        t = new Date(Date.UTC.apply(null, n));
                        if (isFinite(t.getUTCFullYear())) {
                            t.setUTCFullYear(e)
                        }
                    } else {
                        t = new Date(Date.UTC.apply(null, arguments))
                    }
                    return t
                }

                function Lt(e, t, n) {
                    var a = 7 + t - n,
                        r = (7 + pt(e, 0, a).getUTCDay() - t) % 7;
                    return -r + a - 1
                }

                function vt(e, t, n, a, r) {
                    var s = (7 + n - a) % 7,
                        i = Lt(e, a, r),
                        o = 1 + 7 * (t - 1) + s + i,
                        d, u;
                    if (o <= 0) {
                        d = e - 1;
                        u = ft(d) + o
                    } else if (o > ft(e)) {
                        d = e + 1;
                        u = o - ft(e)
                    } else {
                        d = e;
                        u = o
                    }
                    return {
                        year: d,
                        dayOfYear: u
                    }
                }

                function Yt(e, t, n) {
                    var a = Lt(e.year(), t, n),
                        r = Math.floor((e.dayOfYear() - a - 1) / 7) + 1,
                        s, i;
                    if (r < 1) {
                        i = e.year() - 1;
                        s = r + kt(i, t, n)
                    } else if (r > kt(e.year(), t, n)) {
                        s = r - kt(e.year(), t, n);
                        i = e.year() + 1
                    } else {
                        i = e.year();
                        s = r
                    }
                    return {
                        week: s,
                        year: i
                    }
                }

                function kt(e, t, n) {
                    var a = Lt(e, t, n),
                        r = Lt(e + 1, t, n);
                    return (ft(e) - a + r) / 7
                }

                function gt(e) {
                    return Yt(e, this._week.dow, this._week.doy).week
                }

                N("w", ["ww", 2], "wo", "week"), N("W", ["WW", 2], "Wo", "isoWeek"), te("week", "w"), te("isoWeek", "W"), se("week", 5), se("isoWeek", 5), Oe("w", ve), Oe("ww", ve, Me), Oe("W", ve), Oe("WW", ve, Me), Ne(["w", "ww", "W", "WW"], function (e, t, n, a) {
                    t[a.substr(0, 1)] = ue(e)
                });
                var Dt = {
                    dow: 0,
                    doy: 6
                };

                function Tt() {
                    return this._week.dow
                }

                function wt() {
                    return this._week.doy
                }

                function bt(e) {
                    var t = this.localeData().week(this);
                    return e == null ? t : this.add((e - t) * 7, "d")
                }

                function St(e) {
                    var t = Yt(this, 1, 4).week;
                    return e == null ? t : this.add((e - t) * 7, "d")
                }

                function Ht(e, t) {
                    if (typeof e !== "string") {
                        return e
                    }
                    if (!isNaN(e)) {
                        return parseInt(e, 10)
                    }
                    e = t.weekdaysParse(e);
                    if (typeof e === "number") {
                        return e
                    }
                    return null
                }

                function jt(e, t) {
                    if (typeof e === "string") {
                        return t.weekdaysParse(e) % 7 || 7
                    }
                    return isNaN(e) ? null : e
                }

                function Et(e, t) {
                    return e.slice(t, 7).concat(e.slice(0, t))
                }

                N("d", 0, "do", "day"), N("dd", 0, 0, function (e) {
                    return this.localeData().weekdaysMin(this, e)
                }), N("ddd", 0, 0, function (e) {
                    return this.localeData().weekdaysShort(this, e)
                }), N("dddd", 0, 0, function (e) {
                    return this.localeData().weekdays(this, e)
                }), N("e", 0, 0, "weekday"), N("E", 0, 0, "isoWeekday"), te("day", "d"), te("weekday", "e"), te("isoWeekday", "E"), se("day", 11), se("weekday", 11), se("isoWeekday", 11), Oe("d", ve), Oe("e", ve), Oe("E", ve), Oe("dd", function (e, t) {
                    return t.weekdaysMinRegex(e)
                }), Oe("ddd", function (e, t) {
                    return t.weekdaysShortRegex(e)
                }), Oe("dddd", function (e, t) {
                    return t.weekdaysRegex(e)
                }), Ne(["dd", "ddd", "dddd"], function (e, t, n, a) {
                    var r = n._locale.weekdaysParse(e, a, n._strict);
                    if (r != null) {
                        t.d = r
                    } else {
                        h(n).invalidWeekday = e
                    }
                }), Ne(["d", "e", "E"], function (e, t, n, a) {
                    t[a] = ue(e)
                });
                var xt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Ot = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Pt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    At = Ee,
                    Wt = Ee,
                    Ft = Ee;

                function Ct(e, t) {
                    var n = i(this._weekdays) ? this._weekdays : this._weekdays[e && e !== true && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                    return e === true ? Et(n, this._week.dow) : e ? n[e.day()] : n
                }

                function Nt(e) {
                    return e === true ? Et(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }

                function It(e) {
                    return e === true ? Et(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }

                function zt(e, t, n) {
                    var a, r, s, i = e.toLocaleLowerCase();
                    if (!this._weekdaysParse) {
                        this._weekdaysParse = [];
                        this._shortWeekdaysParse = [];
                        this._minWeekdaysParse = [];
                        for (a = 0; a < 7; ++a) {
                            s = f([2e3, 1]).day(a);
                            this._minWeekdaysParse[a] = this.weekdaysMin(s, "").toLocaleLowerCase();
                            this._shortWeekdaysParse[a] = this.weekdaysShort(s, "").toLocaleLowerCase();
                            this._weekdaysParse[a] = this.weekdays(s, "").toLocaleLowerCase()
                        }
                    }
                    if (n) {
                        if (t === "dddd") {
                            r = Ke.call(this._weekdaysParse, i);
                            return r !== -1 ? r : null
                        } else if (t === "ddd") {
                            r = Ke.call(this._shortWeekdaysParse, i);
                            return r !== -1 ? r : null
                        } else {
                            r = Ke.call(this._minWeekdaysParse, i);
                            return r !== -1 ? r : null
                        }
                    } else {
                        if (t === "dddd") {
                            r = Ke.call(this._weekdaysParse, i);
                            if (r !== -1) {
                                return r
                            }
                            r = Ke.call(this._shortWeekdaysParse, i);
                            if (r !== -1) {
                                return r
                            }
                            r = Ke.call(this._minWeekdaysParse, i);
                            return r !== -1 ? r : null
                        } else if (t === "ddd") {
                            r = Ke.call(this._shortWeekdaysParse, i);
                            if (r !== -1) {
                                return r
                            }
                            r = Ke.call(this._weekdaysParse, i);
                            if (r !== -1) {
                                return r
                            }
                            r = Ke.call(this._minWeekdaysParse, i);
                            return r !== -1 ? r : null
                        } else {
                            r = Ke.call(this._minWeekdaysParse, i);
                            if (r !== -1) {
                                return r
                            }
                            r = Ke.call(this._weekdaysParse, i);
                            if (r !== -1) {
                                return r
                            }
                            r = Ke.call(this._shortWeekdaysParse, i);
                            return r !== -1 ? r : null
                        }
                    }
                }

                function Rt(e, t, n) {
                    var a, r, s;
                    if (this._weekdaysParseExact) {
                        return zt.call(this, e, t, n)
                    }
                    if (!this._weekdaysParse) {
                        this._weekdaysParse = [];
                        this._minWeekdaysParse = [];
                        this._shortWeekdaysParse = [];
                        this._fullWeekdaysParse = []
                    }
                    for (a = 0; a < 7; a++) {
                        r = f([2e3, 1]).day(a);
                        if (n && !this._fullWeekdaysParse[a]) {
                            this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i");
                            this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i");
                            this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")
                        }
                        if (!this._weekdaysParse[a]) {
                            s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, "");
                            this._weekdaysParse[a] = new RegExp(s.replace(".", ""), "i")
                        }
                        if (n && t === "dddd" && this._fullWeekdaysParse[a].test(e)) {
                            return a
                        } else if (n && t === "ddd" && this._shortWeekdaysParse[a].test(e)) {
                            return a
                        } else if (n && t === "dd" && this._minWeekdaysParse[a].test(e)) {
                            return a
                        } else if (!n && this._weekdaysParse[a].test(e)) {
                            return a
                        }
                    }
                }

                function Jt(e) {
                    if (!this.isValid()) {
                        return e != null ? this : NaN
                    }
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    if (e != null) {
                        e = Ht(e, this.localeData());
                        return this.add(e - t, "d")
                    } else {
                        return t
                    }
                }

                function Bt(e) {
                    if (!this.isValid()) {
                        return e != null ? this : NaN
                    }
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return e == null ? t : this.add(e - t, "d")
                }

                function Ut(e) {
                    if (!this.isValid()) {
                        return e != null ? this : NaN
                    }
                    if (e != null) {
                        var t = jt(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    } else {
                        return this.day() || 7
                    }
                }

                function Gt(e) {
                    if (this._weekdaysParseExact) {
                        if (!d(this, "_weekdaysRegex")) {
                            qt.call(this)
                        }
                        if (e) {
                            return this._weekdaysStrictRegex
                        } else {
                            return this._weekdaysRegex
                        }
                    } else {
                        if (!d(this, "_weekdaysRegex")) {
                            this._weekdaysRegex = At
                        }
                        return this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex
                    }
                }

                function Vt(e) {
                    if (this._weekdaysParseExact) {
                        if (!d(this, "_weekdaysRegex")) {
                            qt.call(this)
                        }
                        if (e) {
                            return this._weekdaysShortStrictRegex
                        } else {
                            return this._weekdaysShortRegex
                        }
                    } else {
                        if (!d(this, "_weekdaysShortRegex")) {
                            this._weekdaysShortRegex = Wt
                        }
                        return this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
                    }
                }

                function $t(e) {
                    if (this._weekdaysParseExact) {
                        if (!d(this, "_weekdaysRegex")) {
                            qt.call(this)
                        }
                        if (e) {
                            return this._weekdaysMinStrictRegex
                        } else {
                            return this._weekdaysMinRegex
                        }
                    } else {
                        if (!d(this, "_weekdaysMinRegex")) {
                            this._weekdaysMinRegex = Ft
                        }
                        return this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
                    }
                }

                function qt() {
                    function e(e, t) {
                        return t.length - e.length
                    }

                    var t = [],
                        n = [],
                        a = [],
                        r = [],
                        s, i, o, d, u;
                    for (s = 0; s < 7; s++) {
                        i = f([2e3, 1]).day(s);
                        o = We(this.weekdaysMin(i, ""));
                        d = We(this.weekdaysShort(i, ""));
                        u = We(this.weekdays(i, ""));
                        t.push(o);
                        n.push(d);
                        a.push(u);
                        r.push(o);
                        r.push(d);
                        r.push(u)
                    }
                    t.sort(e);
                    n.sort(e);
                    a.sort(e);
                    r.sort(e);
                    this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i");
                    this._weekdaysShortRegex = this._weekdaysRegex;
                    this._weekdaysMinRegex = this._weekdaysRegex;
                    this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
                    this._weekdaysShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
                    this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
                }

                function Kt() {
                    return this.hours() % 12 || 12
                }

                function Zt() {
                    return this.hours() || 24
                }

                function Qt(e, t) {
                    N(e, 0, 0, function () {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function Xt(e, t) {
                    return t._meridiemParse
                }

                function en(e) {
                    return (e + "").toLowerCase().charAt(0) === "p"
                }

                N("H", ["HH", 2], 0, "hour"), N("h", ["hh", 2], 0, Kt), N("k", ["kk", 2], 0, Zt), N("hmm", 0, 0, function () {
                    return "" + Kt.apply(this) + P(this.minutes(), 2)
                }), N("hmmss", 0, 0, function () {
                    return "" + Kt.apply(this) + P(this.minutes(), 2) + P(this.seconds(), 2)
                }), N("Hmm", 0, 0, function () {
                    return "" + this.hours() + P(this.minutes(), 2)
                }), N("Hmmss", 0, 0, function () {
                    return "" + this.hours() + P(this.minutes(), 2) + P(this.seconds(), 2)
                }), Qt("a", true), Qt("A", false), te("hour", "h"), se("hour", 13), Oe("a", Xt), Oe("A", Xt), Oe("H", ve), Oe("h", ve), Oe("k", ve), Oe("HH", ve, Me), Oe("hh", ve, Me), Oe("kk", ve, Me), Oe("hmm", Ye), Oe("hmmss", ke), Oe("Hmm", Ye), Oe("Hmmss", ke), Ce(["H", "HH"], Be), Ce(["k", "kk"], function (e, t, n) {
                    var a = ue(e);
                    t[Be] = a === 24 ? 0 : a
                }), Ce(["a", "A"], function (e, t, n) {
                    n._isPm = n._locale.isPM(e);
                    n._meridiem = e
                }), Ce(["h", "hh"], function (e, t, n) {
                    t[Be] = ue(e);
                    h(n).bigHour = true
                }), Ce("hmm", function (e, t, n) {
                    var a = e.length - 2;
                    t[Be] = ue(e.substr(0, a));
                    t[Ue] = ue(e.substr(a));
                    h(n).bigHour = true
                }), Ce("hmmss", function (e, t, n) {
                    var a = e.length - 4,
                        r = e.length - 2;
                    t[Be] = ue(e.substr(0, a));
                    t[Ue] = ue(e.substr(a, 2));
                    t[Ge] = ue(e.substr(r));
                    h(n).bigHour = true
                }), Ce("Hmm", function (e, t, n) {
                    var a = e.length - 2;
                    t[Be] = ue(e.substr(0, a));
                    t[Ue] = ue(e.substr(a))
                }), Ce("Hmmss", function (e, t, n) {
                    var a = e.length - 4,
                        r = e.length - 2;
                    t[Be] = ue(e.substr(0, a));
                    t[Ue] = ue(e.substr(a, 2));
                    t[Ge] = ue(e.substr(r))
                });
                var tn, nn = _e("Hours", true);

                function an(e, t, n) {
                    if (e > 11) {
                        return n ? "pm" : "PM"
                    } else {
                        return n ? "am" : "AM"
                    }
                }

                var rn = {
                        calendar: x,
                        longDateFormat: B,
                        invalidDate: G,
                        ordinal: $,
                        dayOfMonthOrdinalParse: q,
                        relativeTime: Z,
                        months: Xe,
                        monthsShort: et,
                        week: Dt,
                        weekdays: xt,
                        weekdaysMin: Pt,
                        weekdaysShort: Ot,
                        meridiemParse: /[ap]\.?m?\.?/i
                    },
                    sn = {},
                    on = {},
                    dn;

                function un(e, t) {
                    var n, a = Math.min(e.length, t.length);
                    for (n = 0; n < a; n += 1) {
                        if (e[n] !== t[n]) {
                            return n
                        }
                    }
                    return a
                }

                function _n(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function ln(e) {
                    var t = 0,
                        n, a, r, s;
                    while (t < e.length) {
                        s = _n(e[t]).split("-");
                        n = s.length;
                        a = _n(e[t + 1]);
                        a = a ? a.split("-") : null;
                        while (n > 0) {
                            r = cn(s.slice(0, n).join("-"));
                            if (r) {
                                return r
                            }
                            if (a && a.length >= n && un(s, a) >= n - 1) {
                                break
                            }
                            n--
                        }
                        t++
                    }
                    return dn
                }

                function cn(t) {
                    var e = null,
                        n;
                    if (sn[t] === undefined && typeof di !== "undefined" && di && di.exports) {
                        try {
                            e = dn._abbr;
                            n = ui;
                            _i(258)("./" + t);
                            mn(e)
                        } catch (e) {
                            sn[t] = null
                        }
                    }
                    return sn[t]
                }

                function mn(e, t) {
                    var n;
                    if (e) {
                        if (s(t)) {
                            n = Mn(e)
                        } else {
                            n = fn(e, t)
                        }
                        if (n) {
                            dn = n
                        } else {
                            if (typeof console !== "undefined" && console.warn) {
                                console.warn("Locale " + e + " not found. Did you forget to load it?")
                            }
                        }
                    }
                    return dn._abbr
                }

                function fn(e, t) {
                    if (t !== null) {
                        var n, a = rn;
                        t.abbr = e;
                        if (sn[e] != null) {
                            b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change " + "an existing locale. moment.defineLocale(localeName, " + "config) should only be used for creating a new locale " + "See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                            a = sn[e]._config
                        } else if (t.parentLocale != null) {
                            if (sn[t.parentLocale] != null) {
                                a = sn[t.parentLocale]._config
                            } else {
                                n = cn(t.parentLocale);
                                if (n != null) {
                                    a = n._config
                                } else {
                                    if (!on[t.parentLocale]) {
                                        on[t.parentLocale] = []
                                    }
                                    on[t.parentLocale].push({
                                        name: e,
                                        config: t
                                    });
                                    return null
                                }
                            }
                        }
                        sn[e] = new E(j(a, t));
                        if (on[e]) {
                            on[e].forEach(function (e) {
                                fn(e.name, e.config)
                            })
                        }
                        mn(e);
                        return sn[e]
                    } else {
                        delete sn[e];
                        return null
                    }
                }

                function hn(e, t) {
                    if (null != t) {
                        var n, a, r = rn;
                        null != sn[e] && null != sn[e].parentLocale ? sn[e].set(j(sn[e]._config, t)) : (null != (a = cn(e)) && (r = a._config), t = j(r, t), null == a && (t.abbr = e), (n = new E(t)).parentLocale = sn[e], sn[e] = n), mn(e)
                    } else null != sn[e] && (null != sn[e].parentLocale ? (sn[e] = sn[e].parentLocale, e === mn() && mn(e)) : null != sn[e] && delete sn[e]);
                    return sn[e]
                }

                function Mn(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr) {
                        e = e._locale._abbr
                    }
                    if (!e) {
                        return dn
                    }
                    if (!i(e)) {
                        t = cn(e);
                        if (t) {
                            return t
                        }
                        e = [e]
                    }
                    return ln(e)
                }

                function yn() {
                    return w(sn)
                }

                function pn(e) {
                    var t, n = e._a;
                    if (n && h(e).overflow === -2) {
                        t = n[Re] < 0 || n[Re] > 11 ? Re : n[Je] < 1 || n[Je] > Qe(n[ze], n[Re]) ? Je : n[Be] < 0 || n[Be] > 24 || n[Be] === 24 && (n[Ue] !== 0 || n[Ge] !== 0 || n[Ve] !== 0) ? Be : n[Ue] < 0 || n[Ue] > 59 ? Ue : n[Ge] < 0 || n[Ge] > 59 ? Ge : n[Ve] < 0 || n[Ve] > 999 ? Ve : -1;
                        if (h(e)._overflowDayOfYear && (t < ze || t > Je)) {
                            t = Je
                        }
                        if (h(e)._overflowWeeks && t === -1) {
                            t = $e
                        }
                        if (h(e)._overflowWeekday && t === -1) {
                            t = qe
                        }
                        h(e).overflow = t
                    }
                    return e
                }

                var Ln = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    vn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    Yn = /Z|[+-]\d\d(?::?\d\d)?/,
                    kn = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, false],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
                        ["YYYYDDD", /\d{7}/],
                        ["YYYYMM", /\d{6}/, false],
                        ["YYYY", /\d{4}/, false]
                    ],
                    gn = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    Dn = /^\/?Date\((-?\d+)/i,
                    Tn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                    wn = {
                        UT: 0,
                        GMT: 0,
                        EDT: -4 * 60,
                        EST: -5 * 60,
                        CDT: -5 * 60,
                        CST: -6 * 60,
                        MDT: -6 * 60,
                        MST: -7 * 60,
                        PDT: -7 * 60,
                        PST: -8 * 60
                    };

                function bn(e) {
                    var t, n, a = e._i,
                        r = Ln.exec(a) || vn.exec(a),
                        s, i, o, d;
                    if (r) {
                        h(e).iso = true;
                        for (t = 0, n = kn.length; t < n; t++) {
                            if (kn[t][1].exec(r[1])) {
                                i = kn[t][0];
                                s = kn[t][2] !== false;
                                break
                            }
                        }
                        if (i == null) {
                            e._isValid = false;
                            return
                        }
                        if (r[3]) {
                            for (t = 0, n = gn.length; t < n; t++) {
                                if (gn[t][1].exec(r[3])) {
                                    o = (r[2] || " ") + gn[t][0];
                                    break
                                }
                            }
                            if (o == null) {
                                e._isValid = false;
                                return
                            }
                        }
                        if (!s && o != null) {
                            e._isValid = false;
                            return
                        }
                        if (r[4]) {
                            if (Yn.exec(r[4])) {
                                d = "Z"
                            } else {
                                e._isValid = false;
                                return
                            }
                        }
                        e._f = i + (o || "") + (d || "");
                        Nn(e)
                    } else {
                        e._isValid = false
                    }
                }

                function Sn(e, t, n, a, r, s) {
                    var i = [Hn(e), et.indexOf(t), parseInt(n, 10), parseInt(a, 10), parseInt(r, 10)];
                    if (s) {
                        i.push(parseInt(s, 10))
                    }
                    return i
                }

                function Hn(e) {
                    var t = parseInt(e, 10);
                    if (t <= 49) {
                        return 2e3 + t
                    } else if (t <= 999) {
                        return 1900 + t
                    }
                    return t
                }

                function jn(e) {
                    return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                }

                function En(e, t, n) {
                    if (e) {
                        var a = Ot.indexOf(e),
                            r = new Date(t[0], t[1], t[2]).getDay();
                        if (a !== r) {
                            h(n).weekdayMismatch = true;
                            n._isValid = false;
                            return false
                        }
                    }
                    return true
                }

                function xn(e, t, n) {
                    if (e) {
                        return wn[e]
                    } else if (t) {
                        return 0
                    } else {
                        var a = parseInt(n, 10),
                            r = a % 100,
                            s = (a - r) / 100;
                        return s * 60 + r
                    }
                }

                function On(e) {
                    var t = Tn.exec(jn(e._i)),
                        n;
                    if (t) {
                        n = Sn(t[4], t[3], t[2], t[5], t[6], t[7]);
                        if (!En(t[1], n, e)) {
                            return
                        }
                        e._a = n;
                        e._tzm = xn(t[8], t[9], t[10]);
                        e._d = pt.apply(null, e._a);
                        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
                        h(e).rfc2822 = true
                    } else {
                        e._isValid = false
                    }
                }

                function Pn(e) {
                    var t = Dn.exec(e._i);
                    if (t !== null) {
                        e._d = new Date(+t[1]);
                        return
                    }
                    bn(e);
                    if (e._isValid === false) {
                        delete e._isValid
                    } else {
                        return
                    }
                    On(e);
                    if (e._isValid === false) {
                        delete e._isValid
                    } else {
                        return
                    }
                    if (e._strict) {
                        e._isValid = false
                    } else {
                        _.createFromInputFallback(e)
                    }
                }

                function An(e, t, n) {
                    if (e != null) {
                        return e
                    }
                    if (t != null) {
                        return t
                    }
                    return n
                }

                function Wn(e) {
                    var t = new Date(_.now());
                    if (e._useUTC) {
                        return [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
                    }
                    return [t.getFullYear(), t.getMonth(), t.getDate()]
                }

                function Fn(e) {
                    var t, n, a = [],
                        r, s, i;
                    if (e._d) {
                        return
                    }
                    r = Wn(e);
                    if (e._w && e._a[Je] == null && e._a[Re] == null) {
                        Cn(e)
                    }
                    if (e._dayOfYear != null) {
                        i = An(e._a[ze], r[ze]);
                        if (e._dayOfYear > ft(i) || e._dayOfYear === 0) {
                            h(e)._overflowDayOfYear = true
                        }
                        n = pt(i, 0, e._dayOfYear);
                        e._a[Re] = n.getUTCMonth();
                        e._a[Je] = n.getUTCDate()
                    }
                    for (t = 0; t < 3 && e._a[t] == null; ++t) {
                        e._a[t] = a[t] = r[t]
                    }
                    for (; t < 7; t++) {
                        e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t]
                    }
                    if (e._a[Be] === 24 && e._a[Ue] === 0 && e._a[Ge] === 0 && e._a[Ve] === 0) {
                        e._nextDay = true;
                        e._a[Be] = 0
                    }
                    e._d = (e._useUTC ? pt : yt).apply(null, a);
                    s = e._useUTC ? e._d.getUTCDay() : e._d.getDay();
                    if (e._tzm != null) {
                        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm)
                    }
                    if (e._nextDay) {
                        e._a[Be] = 24
                    }
                    if (e._w && typeof e._w.d !== "undefined" && e._w.d !== s) {
                        h(e).weekdayMismatch = true
                    }
                }

                function Cn(e) {
                    var t, n, a, r, s, i, o, d, u;
                    t = e._w;
                    if (t.GG != null || t.W != null || t.E != null) {
                        s = 1;
                        i = 4;
                        n = An(t.GG, e._a[ze], Yt(Vn(), 1, 4).year);
                        a = An(t.W, 1);
                        r = An(t.E, 1);
                        if (r < 1 || r > 7) {
                            d = true
                        }
                    } else {
                        s = e._locale._week.dow;
                        i = e._locale._week.doy;
                        u = Yt(Vn(), s, i);
                        n = An(t.gg, e._a[ze], u.year);
                        a = An(t.w, u.week);
                        if (t.d != null) {
                            r = t.d;
                            if (r < 0 || r > 6) {
                                d = true
                            }
                        } else if (t.e != null) {
                            r = t.e + s;
                            if (t.e < 0 || t.e > 6) {
                                d = true
                            }
                        } else {
                            r = s
                        }
                    }
                    if (a < 1 || a > kt(n, s, i)) {
                        h(e)._overflowWeeks = true
                    } else if (d != null) {
                        h(e)._overflowWeekday = true
                    } else {
                        o = vt(n, a, r, s, i);
                        e._a[ze] = o.year;
                        e._dayOfYear = o.dayOfYear
                    }
                }

                function Nn(e) {
                    if (e._f === _.ISO_8601) {
                        bn(e);
                        return
                    }
                    if (e._f === _.RFC_2822) {
                        On(e);
                        return
                    }
                    e._a = [];
                    h(e).empty = true;
                    var t = "" + e._i,
                        n, a, r, s, i, o = t.length,
                        d = 0,
                        u;
                    r = J(e._f, e._locale).match(A) || [];
                    for (n = 0; n < r.length; n++) {
                        s = r[n];
                        a = (t.match(Pe(s, e)) || [])[0];
                        if (a) {
                            i = t.substr(0, t.indexOf(a));
                            if (i.length > 0) {
                                h(e).unusedInput.push(i)
                            }
                            t = t.slice(t.indexOf(a) + a.length);
                            d += a.length
                        }
                        if (C[s]) {
                            if (a) {
                                h(e).empty = false
                            } else {
                                h(e).unusedTokens.push(s)
                            }
                            Ie(s, a, e)
                        } else if (e._strict && !a) {
                            h(e).unusedTokens.push(s)
                        }
                    }
                    h(e).charsLeftOver = o - d;
                    if (t.length > 0) {
                        h(e).unusedInput.push(t)
                    }
                    if (e._a[Be] <= 12 && h(e).bigHour === true && e._a[Be] > 0) {
                        h(e).bigHour = undefined
                    }
                    h(e).parsedDateParts = e._a.slice(0);
                    h(e).meridiem = e._meridiem;
                    e._a[Be] = In(e._locale, e._a[Be], e._meridiem);
                    u = h(e).era;
                    if (u !== null) {
                        e._a[ze] = e._locale.erasConvertYear(u, e._a[ze])
                    }
                    Fn(e);
                    pn(e)
                }

                function In(e, t, n) {
                    var a;
                    if (n == null) {
                        return t
                    }
                    if (e.meridiemHour != null) {
                        return e.meridiemHour(t, n)
                    } else if (e.isPM != null) {
                        a = e.isPM(n);
                        if (a && t < 12) {
                            t += 12
                        }
                        if (!a && t === 12) {
                            t = 0
                        }
                        return t
                    } else {
                        return t
                    }
                }

                function zn(e) {
                    var t, n, a, r, s, i, o = false;
                    if (e._f.length === 0) {
                        h(e).invalidFormat = true;
                        e._d = new Date(NaN);
                        return
                    }
                    for (r = 0; r < e._f.length; r++) {
                        s = 0;
                        i = false;
                        t = v({}, e);
                        if (e._useUTC != null) {
                            t._useUTC = e._useUTC
                        }
                        t._f = e._f[r];
                        Nn(t);
                        if (M(t)) {
                            i = true
                        }
                        s += h(t).charsLeftOver;
                        s += h(t).unusedTokens.length * 10;
                        h(t).score = s;
                        if (!o) {
                            if (a == null || s < a || i) {
                                a = s;
                                n = t;
                                if (i) {
                                    o = true
                                }
                            }
                        } else {
                            if (s < a) {
                                a = s;
                                n = t
                            }
                        }
                    }
                    m(e, n || t)
                }

                function Rn(e) {
                    if (e._d) {
                        return
                    }
                    var t = ae(e._i),
                        n = t.day === undefined ? t.date : t.day;
                    e._a = a([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function (e) {
                        return e && parseInt(e, 10)
                    });
                    Fn(e)
                }

                function Jn(e) {
                    var t = new Y(pn(Bn(e)));
                    if (t._nextDay) {
                        t.add(1, "d");
                        t._nextDay = undefined
                    }
                    return t
                }

                function Bn(e) {
                    var t = e._i,
                        n = e._f;
                    e._locale = e._locale || Mn(e._l);
                    if (t === null || n === undefined && t === "") {
                        return y({
                            nullInput: true
                        })
                    }
                    if (typeof t === "string") {
                        e._i = t = e._locale.preparse(t)
                    }
                    if (k(t)) {
                        return new Y(pn(t))
                    } else if (c(t)) {
                        e._d = t
                    } else if (i(n)) {
                        zn(e)
                    } else if (n) {
                        Nn(e)
                    } else {
                        Un(e)
                    }
                    if (!M(e)) {
                        e._d = null
                    }
                    return e
                }

                function Un(e) {
                    var t = e._i;
                    if (s(t)) {
                        e._d = new Date(_.now())
                    } else if (c(t)) {
                        e._d = new Date(t.valueOf())
                    } else if (typeof t === "string") {
                        Pn(e)
                    } else if (i(t)) {
                        e._a = a(t.slice(0), function (e) {
                            return parseInt(e, 10)
                        });
                        Fn(e)
                    } else if (o(t)) {
                        Rn(e)
                    } else if (l(t)) {
                        e._d = new Date(t)
                    } else {
                        _.createFromInputFallback(e)
                    }
                }

                function Gn(e, t, n, a, r) {
                    var s = {};
                    if (t === true || t === false) {
                        a = t;
                        t = undefined
                    }
                    if (n === true || n === false) {
                        a = n;
                        n = undefined
                    }
                    if (o(e) && u(e) || i(e) && e.length === 0) {
                        e = undefined
                    }
                    s._isAMomentObject = true;
                    s._useUTC = s._isUTC = r;
                    s._l = n;
                    s._i = e;
                    s._f = t;
                    s._strict = a;
                    return Jn(s)
                }

                function Vn(e, t, n, a) {
                    return Gn(e, t, n, a, false)
                }

                _.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), " + "which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are " + "discouraged and will be removed in an upcoming major release. Please refer to " + "http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), _.ISO_8601 = function () {
                }, _.RFC_2822 = function () {
                };
                var $n = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                        var e = Vn.apply(null, arguments);
                        if (this.isValid() && e.isValid()) {
                            return e < this ? this : e
                        } else {
                            return y()
                        }
                    }),
                    qn = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                        var e = Vn.apply(null, arguments);
                        if (this.isValid() && e.isValid()) {
                            return e > this ? this : e
                        } else {
                            return y()
                        }
                    });

                function Kn(e, t) {
                    var n, a;
                    if (t.length === 1 && i(t[0])) {
                        t = t[0]
                    }
                    if (!t.length) {
                        return Vn()
                    }
                    n = t[0];
                    for (a = 1; a < t.length; ++a) {
                        if (!t[a].isValid() || t[a][e](n)) {
                            n = t[a]
                        }
                    }
                    return n
                }

                function Zn() {
                    var e;
                    return Kn("isBefore", [].slice.call(arguments, 0))
                }

                function Qn() {
                    var e;
                    return Kn("isAfter", [].slice.call(arguments, 0))
                }

                var Xn = function () {
                        return Date.now ? Date.now() : +new Date
                    },
                    ea = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                function ta(e) {
                    var t, n = false,
                        a;
                    for (t in e) {
                        if (d(e, t) && !(Ke.call(ea, t) !== -1 && (e[t] == null || !isNaN(e[t])))) {
                            return false
                        }
                    }
                    for (a = 0; a < ea.length; ++a) {
                        if (e[ea[a]]) {
                            if (n) {
                                return false
                            }
                            if (parseFloat(e[ea[a]]) !== ue(e[ea[a]])) {
                                n = true
                            }
                        }
                    }
                    return true
                }

                function na() {
                    return this._isValid
                }

                function aa() {
                    return wa(NaN)
                }

                function ra(e) {
                    var t = ae(e),
                        n = t.year || 0,
                        a = t.quarter || 0,
                        r = t.month || 0,
                        s = t.week || t.isoWeek || 0,
                        i = t.day || 0,
                        o = t.hour || 0,
                        d = t.minute || 0,
                        u = t.second || 0,
                        _ = t.millisecond || 0;
                    this._isValid = ta(t);
                    this._milliseconds = +_ + u * 1e3 + d * 6e4 + o * 1e3 * 60 * 60;
                    this._days = +i + s * 7;
                    this._months = +r + a * 3 + n * 12;
                    this._data = {};
                    this._locale = Mn();
                    this._bubble()
                }

                function sa(e) {
                    return e instanceof ra
                }

                function ia(e) {
                    if (e < 0) {
                        return Math.round(-1 * e) * -1
                    } else {
                        return Math.round(e)
                    }
                }

                function oa(e, t, n) {
                    var a = Math.min(e.length, t.length),
                        r = Math.abs(e.length - t.length),
                        s = 0,
                        i;
                    for (i = 0; i < a; i++) {
                        if (n && e[i] !== t[i] || !n && ue(e[i]) !== ue(t[i])) {
                            s++
                        }
                    }
                    return s + r
                }

                function da(e, n) {
                    N(e, 0, 0, function () {
                        var e = this.utcOffset(),
                            t = "+";
                        if (e < 0) {
                            e = -e;
                            t = "-"
                        }
                        return t + P(~~(e / 60), 2) + n + P(~~e % 60, 2)
                    })
                }

                da("Z", ":"), da("ZZ", ""), Oe("Z", He), Oe("ZZ", He), Ce(["Z", "ZZ"], function (e, t, n) {
                    n._useUTC = true;
                    n._tzm = _a(He, e)
                });
                var ua = /([\+\-]|\d\d)/gi;

                function _a(e, t) {
                    var n = (t || "").match(e),
                        a, r, s;
                    if (n === null) {
                        return null
                    }
                    a = n[n.length - 1] || [];
                    r = (a + "").match(ua) || ["-", 0, 0];
                    s = +(r[1] * 60) + ue(r[2]);
                    return s === 0 ? 0 : r[0] === "+" ? s : -s
                }

                function la(e, t) {
                    var n, a;
                    if (t._isUTC) {
                        n = t.clone();
                        a = (k(e) || c(e) ? e.valueOf() : Vn(e).valueOf()) - n.valueOf();
                        n._d.setTime(n._d.valueOf() + a);
                        _.updateOffset(n, false);
                        return n
                    } else {
                        return Vn(e).local()
                    }
                }

                function ca(e) {
                    return -Math.round(e._d.getTimezoneOffset())
                }

                function ma(e, t, n) {
                    var a = this._offset || 0,
                        r;
                    if (!this.isValid()) {
                        return e != null ? this : NaN
                    }
                    if (e != null) {
                        if (typeof e === "string") {
                            e = _a(He, e);
                            if (e === null) {
                                return this
                            }
                        } else if (Math.abs(e) < 16 && !n) {
                            e = e * 60
                        }
                        if (!this._isUTC && t) {
                            r = ca(this)
                        }
                        this._offset = e;
                        this._isUTC = true;
                        if (r != null) {
                            this.add(r, "m")
                        }
                        if (a !== e) {
                            if (!t || this._changeInProgress) {
                                Ea(this, wa(e - a, "m"), 1, false)
                            } else if (!this._changeInProgress) {
                                this._changeInProgress = true;
                                _.updateOffset(this, true);
                                this._changeInProgress = null
                            }
                        }
                        return this
                    } else {
                        return this._isUTC ? a : ca(this)
                    }
                }

                function fa(e, t) {
                    if (e != null) {
                        if (typeof e !== "string") {
                            e = -e
                        }
                        this.utcOffset(e, t);
                        return this
                    } else {
                        return -this.utcOffset()
                    }
                }

                function ha(e) {
                    return this.utcOffset(0, e)
                }

                function Ma(e) {
                    if (this._isUTC) {
                        this.utcOffset(0, e);
                        this._isUTC = false;
                        if (e) {
                            this.subtract(ca(this), "m")
                        }
                    }
                    return this
                }

                function ya() {
                    if (this._tzm != null) {
                        this.utcOffset(this._tzm, false, true)
                    } else if (typeof this._i === "string") {
                        var e = _a(Se, this._i);
                        if (e != null) {
                            this.utcOffset(e)
                        } else {
                            this.utcOffset(0, true)
                        }
                    }
                    return this
                }

                function pa(e) {
                    if (!this.isValid()) {
                        return false
                    }
                    e = e ? Vn(e).utcOffset() : 0;
                    return (this.utcOffset() - e) % 60 === 0
                }

                function La() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }

                function va() {
                    if (!s(this._isDSTShifted)) {
                        return this._isDSTShifted
                    }
                    var e = {},
                        t;
                    v(e, this);
                    e = Bn(e);
                    if (e._a) {
                        t = e._isUTC ? f(e._a) : Vn(e._a);
                        this._isDSTShifted = this.isValid() && oa(e._a, t.toArray()) > 0
                    } else {
                        this._isDSTShifted = false
                    }
                    return this._isDSTShifted
                }

                function Ya() {
                    return this.isValid() ? !this._isUTC : false
                }

                function ka() {
                    return this.isValid() ? this._isUTC : false
                }

                function ga() {
                    return this.isValid() ? this._isUTC && this._offset === 0 : false
                }

                _.updateOffset = function () {
                };
                var Da = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                    Ta = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                function wa(e, t) {
                    var n = e,
                        a = null,
                        r, s, i;
                    if (sa(e)) {
                        n = {
                            ms: e._milliseconds,
                            d: e._days,
                            M: e._months
                        }
                    } else if (l(e) || !isNaN(+e)) {
                        n = {};
                        if (t) {
                            n[t] = +e
                        } else {
                            n.milliseconds = +e
                        }
                    } else if (a = Da.exec(e)) {
                        r = a[1] === "-" ? -1 : 1;
                        n = {
                            y: 0,
                            d: ue(a[Je]) * r,
                            h: ue(a[Be]) * r,
                            m: ue(a[Ue]) * r,
                            s: ue(a[Ge]) * r,
                            ms: ue(ia(a[Ve] * 1e3)) * r
                        }
                    } else if (a = Ta.exec(e)) {
                        r = a[1] === "-" ? -1 : 1;
                        n = {
                            y: ba(a[2], r),
                            M: ba(a[3], r),
                            w: ba(a[4], r),
                            d: ba(a[5], r),
                            h: ba(a[6], r),
                            m: ba(a[7], r),
                            s: ba(a[8], r)
                        }
                    } else if (n == null) {
                        n = {}
                    } else if (typeof n === "object" && ("from" in n || "to" in n)) {
                        i = Ha(Vn(n.from), Vn(n.to));
                        n = {};
                        n.ms = i.milliseconds;
                        n.M = i.months
                    }
                    s = new ra(n);
                    if (sa(e) && d(e, "_locale")) {
                        s._locale = e._locale
                    }
                    if (sa(e) && d(e, "_isValid")) {
                        s._isValid = e._isValid
                    }
                    return s
                }

                function ba(e, t) {
                    var n = e && parseFloat(e.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * t
                }

                function Sa(e, t) {
                    var n = {};
                    n.months = t.month() - e.month() + (t.year() - e.year()) * 12;
                    if (e.clone().add(n.months, "M").isAfter(t)) {
                        --n.months
                    }
                    n.milliseconds = +t - +e.clone().add(n.months, "M");
                    return n
                }

                function Ha(e, t) {
                    var n;
                    if (!(e.isValid() && t.isValid())) {
                        return {
                            milliseconds: 0,
                            months: 0
                        }
                    }
                    t = la(t, e);
                    if (e.isBefore(t)) {
                        n = Sa(e, t)
                    } else {
                        n = Sa(t, e);
                        n.milliseconds = -n.milliseconds;
                        n.months = -n.months
                    }
                    return n
                }

                function ja(r, s) {
                    return function (e, t) {
                        var n, a;
                        if (t !== null && !isNaN(+t)) {
                            b(s, "moment()." + s + "(period, number) is deprecated. Please use moment()." + s + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                            a = e;
                            e = t;
                            t = a
                        }
                        n = wa(e, t);
                        Ea(this, n, r);
                        return this
                    }
                }

                function Ea(e, t, n, a) {
                    var r = t._milliseconds,
                        s = ia(t._days),
                        i = ia(t._months);
                    if (!e.isValid()) {
                        return
                    }
                    a = a == null ? true : a;
                    if (i) {
                        dt(e, le(e, "Month") + i * n)
                    }
                    if (s) {
                        ce(e, "Date", le(e, "Date") + s * n)
                    }
                    if (r) {
                        e._d.setTime(e._d.valueOf() + r * n)
                    }
                    if (a) {
                        _.updateOffset(e, s || i)
                    }
                }

                wa.fn = ra.prototype, wa.invalid = aa;
                var xa = ja(1, "add"),
                    Oa = ja(-1, "subtract");

                function Pa(e) {
                    return typeof e === "string" || e instanceof String
                }

                function Aa(e) {
                    return k(e) || c(e) || Pa(e) || l(e) || Fa(e) || Wa(e) || e === null || e === undefined
                }

                function Wa(e) {
                    var t = o(e) && !u(e),
                        n = false,
                        a = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
                        r, s;
                    for (r = 0; r < a.length; r += 1) {
                        s = a[r];
                        n = n || d(e, s)
                    }
                    return t && n
                }

                function Fa(t) {
                    var e = i(t),
                        n = false;
                    if (e) {
                        n = t.filter(function (e) {
                            return !l(e) && Pa(t)
                        }).length === 0
                    }
                    return e && n
                }

                function Ca(e) {
                    var t = o(e) && !u(e),
                        n = false,
                        a = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
                        r, s;
                    for (r = 0; r < a.length; r += 1) {
                        s = a[r];
                        n = n || d(e, s)
                    }
                    return t && n
                }

                function Na(e, t) {
                    var n = e.diff(t, "days", !0);
                    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                }

                function Ia(e, t) {
                    if (arguments.length === 1) {
                        if (Aa(arguments[0])) {
                            e = arguments[0];
                            t = undefined
                        } else if (Ca(arguments[0])) {
                            t = arguments[0];
                            e = undefined
                        }
                    }
                    var n = e || Vn(),
                        a = la(n, this).startOf("day"),
                        r = _.calendarFormat(this, a) || "sameElse",
                        s = t && (S(t[r]) ? t[r].call(this, n) : t[r]);
                    return this.format(s || this.localeData().calendar(r, this, Vn(n)))
                }

                function za() {
                    return new Y(this)
                }

                function Ra(e, t) {
                    var n = k(e) ? e : Vn(e);
                    if (!(this.isValid() && n.isValid())) {
                        return false
                    }
                    t = ne(t) || "millisecond";
                    if (t === "millisecond") {
                        return this.valueOf() > n.valueOf()
                    } else {
                        return n.valueOf() < this.clone().startOf(t).valueOf()
                    }
                }

                function Ja(e, t) {
                    var n = k(e) ? e : Vn(e);
                    if (!(this.isValid() && n.isValid())) {
                        return false
                    }
                    t = ne(t) || "millisecond";
                    if (t === "millisecond") {
                        return this.valueOf() < n.valueOf()
                    } else {
                        return this.clone().endOf(t).valueOf() < n.valueOf()
                    }
                }

                function Ba(e, t, n, a) {
                    var r = k(e) ? e : Vn(e),
                        s = k(t) ? t : Vn(t);
                    if (!(this.isValid() && r.isValid() && s.isValid())) {
                        return false
                    }
                    a = a || "()";
                    return (a[0] === "(" ? this.isAfter(r, n) : !this.isBefore(r, n)) && (a[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))
                }

                function Ua(e, t) {
                    var n = k(e) ? e : Vn(e),
                        a;
                    if (!(this.isValid() && n.isValid())) {
                        return false
                    }
                    t = ne(t) || "millisecond";
                    if (t === "millisecond") {
                        return this.valueOf() === n.valueOf()
                    } else {
                        a = n.valueOf();
                        return this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()
                    }
                }

                function Ga(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }

                function Va(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }

                function $a(e, t, n) {
                    var a, r, s;
                    if (!this.isValid()) {
                        return NaN
                    }
                    a = la(e, this);
                    if (!a.isValid()) {
                        return NaN
                    }
                    r = (a.utcOffset() - this.utcOffset()) * 6e4;
                    t = ne(t);
                    switch (t) {
                        case "year":
                            s = qa(this, a) / 12;
                            break;
                        case "month":
                            s = qa(this, a);
                            break;
                        case "quarter":
                            s = qa(this, a) / 3;
                            break;
                        case "second":
                            s = (this - a) / 1e3;
                            break;
                        case "minute":
                            s = (this - a) / 6e4;
                            break;
                        case "hour":
                            s = (this - a) / 36e5;
                            break;
                        case "day":
                            s = (this - a - r) / 864e5;
                            break;
                        case "week":
                            s = (this - a - r) / 6048e5;
                            break;
                        default:
                            s = this - a
                    }
                    return n ? s : de(s)
                }

                function qa(e, t) {
                    if (e.date() < t.date()) {
                        return -qa(t, e)
                    }
                    var n = (t.year() - e.year()) * 12 + (t.month() - e.month()),
                        a = e.clone().add(n, "months"),
                        r, s;
                    if (t - a < 0) {
                        r = e.clone().add(n - 1, "months");
                        s = (t - a) / (a - r)
                    } else {
                        r = e.clone().add(n + 1, "months");
                        s = (t - a) / (r - a)
                    }
                    return -(n + s) || 0
                }

                function Ka() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function Za(e) {
                    if (!this.isValid()) {
                        return null
                    }
                    var t = e !== true,
                        n = t ? this.clone().utc() : this;
                    if (n.year() < 0 || n.year() > 9999) {
                        return R(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ")
                    }
                    if (S(Date.prototype.toISOString)) {
                        if (t) {
                            return this.toDate().toISOString()
                        } else {
                            return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", R(n, "Z"))
                        }
                    }
                    return R(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                }

                function Qa() {
                    if (!this.isValid()) {
                        return "moment.invalid(/* " + this._i + " */)"
                    }
                    var e = "moment",
                        t = "",
                        n, a, r, s;
                    if (!this.isLocal()) {
                        e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
                        t = "Z"
                    }
                    n = "[" + e + '("]';
                    a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
                    r = "-MM-DD[T]HH:mm:ss.SSS";
                    s = t + '[")]';
                    return this.format(n + a + r + s)
                }

                function Xa(e) {
                    if (!e) {
                        e = this.isUtc() ? _.defaultFormatUtc : _.defaultFormat
                    }
                    var t = R(this, e);
                    return this.localeData().postformat(t)
                }

                function er(e, t) {
                    if (this.isValid() && (k(e) && e.isValid() || Vn(e).isValid())) {
                        return wa({
                            to: this,
                            from: e
                        }).locale(this.locale()).humanize(!t)
                    } else {
                        return this.localeData().invalidDate()
                    }
                }

                function tr(e) {
                    return this.from(Vn(), e)
                }

                function nr(e, t) {
                    if (this.isValid() && (k(e) && e.isValid() || Vn(e).isValid())) {
                        return wa({
                            from: this,
                            to: e
                        }).locale(this.locale()).humanize(!t)
                    } else {
                        return this.localeData().invalidDate()
                    }
                }

                function ar(e) {
                    return this.to(Vn(), e)
                }

                function rr(e) {
                    var t;
                    if (e === undefined) {
                        return this._locale._abbr
                    } else {
                        t = Mn(e);
                        if (t != null) {
                            this._locale = t
                        }
                        return this
                    }
                }

                _.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", _.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var sr = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
                    if (e === undefined) {
                        return this.localeData()
                    } else {
                        return this.locale(e)
                    }
                });

                function ir() {
                    return this._locale
                }

                var or = 1e3,
                    dr = 60 * or,
                    ur = 60 * dr,
                    _r = (365 * 400 + 97) * 24 * ur;

                function lr(e, t) {
                    return (e % t + t) % t
                }

                function cr(e, t, n) {
                    if (e < 100 && e >= 0) {
                        return new Date(e + 400, t, n) - _r
                    } else {
                        return new Date(e, t, n).valueOf()
                    }
                }

                function mr(e, t, n) {
                    if (e < 100 && e >= 0) {
                        return Date.UTC(e + 400, t, n) - _r
                    } else {
                        return Date.UTC(e, t, n)
                    }
                }

                function fr(e) {
                    var t, n;
                    e = ne(e);
                    if (e === undefined || e === "millisecond" || !this.isValid()) {
                        return this
                    }
                    n = this._isUTC ? mr : cr;
                    switch (e) {
                        case "year":
                            t = n(this.year(), 0, 1);
                            break;
                        case "quarter":
                            t = n(this.year(), this.month() - this.month() % 3, 1);
                            break;
                        case "month":
                            t = n(this.year(), this.month(), 1);
                            break;
                        case "week":
                            t = n(this.year(), this.month(), this.date() - this.weekday());
                            break;
                        case "isoWeek":
                            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                            break;
                        case "day":
                        case "date":
                            t = n(this.year(), this.month(), this.date());
                            break;
                        case "hour":
                            t = this._d.valueOf();
                            t -= lr(t + (this._isUTC ? 0 : this.utcOffset() * dr), ur);
                            break;
                        case "minute":
                            t = this._d.valueOf();
                            t -= lr(t, dr);
                            break;
                        case "second":
                            t = this._d.valueOf();
                            t -= lr(t, or);
                            break
                    }
                    this._d.setTime(t);
                    _.updateOffset(this, true);
                    return this
                }

                function hr(e) {
                    var t, n;
                    e = ne(e);
                    if (e === undefined || e === "millisecond" || !this.isValid()) {
                        return this
                    }
                    n = this._isUTC ? mr : cr;
                    switch (e) {
                        case "year":
                            t = n(this.year() + 1, 0, 1) - 1;
                            break;
                        case "quarter":
                            t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                            break;
                        case "month":
                            t = n(this.year(), this.month() + 1, 1) - 1;
                            break;
                        case "week":
                            t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                            break;
                        case "isoWeek":
                            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                            break;
                        case "day":
                        case "date":
                            t = n(this.year(), this.month(), this.date() + 1) - 1;
                            break;
                        case "hour":
                            t = this._d.valueOf();
                            t += ur - lr(t + (this._isUTC ? 0 : this.utcOffset() * dr), ur) - 1;
                            break;
                        case "minute":
                            t = this._d.valueOf();
                            t += dr - lr(t, dr) - 1;
                            break;
                        case "second":
                            t = this._d.valueOf();
                            t += or - lr(t, or) - 1;
                            break
                    }
                    this._d.setTime(t);
                    _.updateOffset(this, true);
                    return this
                }

                function Mr() {
                    return this._d.valueOf() - (this._offset || 0) * 6e4
                }

                function yr() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function pr() {
                    return new Date(this.valueOf())
                }

                function Lr() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                }

                function vr() {
                    var e = this;
                    return {
                        years: e.year(),
                        months: e.month(),
                        date: e.date(),
                        hours: e.hours(),
                        minutes: e.minutes(),
                        seconds: e.seconds(),
                        milliseconds: e.milliseconds()
                    }
                }

                function Yr() {
                    return this.isValid() ? this.toISOString() : null
                }

                function kr() {
                    return M(this)
                }

                function gr() {
                    return m({}, h(this))
                }

                function Dr() {
                    return h(this).overflow
                }

                function Tr() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function wr(e, t) {
                    var n, a, r, s = this._eras || Mn("en")._eras;
                    for (n = 0, a = s.length; n < a; ++n) {
                        switch (typeof s[n].since) {
                            case "string":
                                r = _(s[n].since).startOf("day");
                                s[n].since = r.valueOf();
                                break
                        }
                        switch (typeof s[n].until) {
                            case "undefined":
                                s[n].until = +Infinity;
                                break;
                            case "string":
                                r = _(s[n].until).startOf("day").valueOf();
                                s[n].until = r.valueOf();
                                break
                        }
                    }
                    return s
                }

                function br(e, t, n) {
                    var a, r, s = this.eras(),
                        i, o, d;
                    e = e.toUpperCase();
                    for (a = 0, r = s.length; a < r; ++a) {
                        i = s[a].name.toUpperCase();
                        o = s[a].abbr.toUpperCase();
                        d = s[a].narrow.toUpperCase();
                        if (n) {
                            switch (t) {
                                case "N":
                                case "NN":
                                case "NNN":
                                    if (o === e) {
                                        return s[a]
                                    }
                                    break;
                                case "NNNN":
                                    if (i === e) {
                                        return s[a]
                                    }
                                    break;
                                case "NNNNN":
                                    if (d === e) {
                                        return s[a]
                                    }
                                    break
                            }
                        } else if ([i, o, d].indexOf(e) >= 0) {
                            return s[a]
                        }
                    }
                }

                function Sr(e, t) {
                    var n = e.since <= e.until ? +1 : -1;
                    if (t === undefined) {
                        return _(e.since).year()
                    } else {
                        return _(e.since).year() + (t - e.offset) * n
                    }
                }

                function Hr() {
                    var e, t, n, a = this.localeData().eras();
                    for (e = 0, t = a.length; e < t; ++e) {
                        n = this.startOf("day").valueOf();
                        if (a[e].since <= n && n <= a[e].until) {
                            return a[e].name
                        }
                        if (a[e].until <= n && n <= a[e].since) {
                            return a[e].name
                        }
                    }
                    return ""
                }

                function jr() {
                    var e, t, n, a = this.localeData().eras();
                    for (e = 0, t = a.length; e < t; ++e) {
                        n = this.startOf("day").valueOf();
                        if (a[e].since <= n && n <= a[e].until) {
                            return a[e].narrow
                        }
                        if (a[e].until <= n && n <= a[e].since) {
                            return a[e].narrow
                        }
                    }
                    return ""
                }

                function Er() {
                    var e, t, n, a = this.localeData().eras();
                    for (e = 0, t = a.length; e < t; ++e) {
                        n = this.startOf("day").valueOf();
                        if (a[e].since <= n && n <= a[e].until) {
                            return a[e].abbr
                        }
                        if (a[e].until <= n && n <= a[e].since) {
                            return a[e].abbr
                        }
                    }
                    return ""
                }

                function xr() {
                    var e, t, n, a, r = this.localeData().eras();
                    for (e = 0, t = r.length; e < t; ++e) {
                        n = r[e].since <= r[e].until ? +1 : -1;
                        a = this.startOf("day").valueOf();
                        if (r[e].since <= a && a <= r[e].until || r[e].until <= a && a <= r[e].since) {
                            return (this.year() - _(r[e].since).year()) * n + r[e].offset
                        }
                    }
                    return this.year()
                }

                function Or(e) {
                    if (!d(this, "_erasNameRegex")) {
                        Ir.call(this)
                    }
                    return e ? this._erasNameRegex : this._erasRegex
                }

                function Pr(e) {
                    if (!d(this, "_erasAbbrRegex")) {
                        Ir.call(this)
                    }
                    return e ? this._erasAbbrRegex : this._erasRegex
                }

                function Ar(e) {
                    if (!d(this, "_erasNarrowRegex")) {
                        Ir.call(this)
                    }
                    return e ? this._erasNarrowRegex : this._erasRegex
                }

                function Wr(e, t) {
                    return t.erasAbbrRegex(e)
                }

                function Fr(e, t) {
                    return t.erasNameRegex(e)
                }

                function Cr(e, t) {
                    return t.erasNarrowRegex(e)
                }

                function Nr(e, t) {
                    return t._eraYearOrdinalRegex || we
                }

                function Ir() {
                    var e = [],
                        t = [],
                        n = [],
                        a = [],
                        r, s, i = this.eras();
                    for (r = 0, s = i.length; r < s; ++r) {
                        t.push(We(i[r].name));
                        e.push(We(i[r].abbr));
                        n.push(We(i[r].narrow));
                        a.push(We(i[r].name));
                        a.push(We(i[r].abbr));
                        a.push(We(i[r].narrow))
                    }
                    this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i");
                    this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i");
                    this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i");
                    this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i")
                }

                function zr(e, t) {
                    N(0, [e, e.length], 0, t)
                }

                function Rr(e) {
                    return $r.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function Jr(e) {
                    return $r.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function Br() {
                    return kt(this.year(), 1, 4)
                }

                function Ur() {
                    return kt(this.isoWeekYear(), 1, 4)
                }

                function Gr() {
                    var e = this.localeData()._week;
                    return kt(this.year(), e.dow, e.doy)
                }

                function Vr() {
                    var e = this.localeData()._week;
                    return kt(this.weekYear(), e.dow, e.doy)
                }

                function $r(e, t, n, a, r) {
                    var s;
                    if (e == null) {
                        return Yt(this, a, r).year
                    } else {
                        s = kt(e, a, r);
                        if (t > s) {
                            t = s
                        }
                        return qr.call(this, e, t, n, a, r)
                    }
                }

                function qr(e, t, n, a, r) {
                    var s = vt(e, t, n, a, r),
                        i = pt(s.year, 0, s.dayOfYear);
                    this.year(i.getUTCFullYear());
                    this.month(i.getUTCMonth());
                    this.date(i.getUTCDate());
                    return this
                }

                function Kr(e) {
                    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
                }

                N("N", 0, 0, "eraAbbr"), N("NN", 0, 0, "eraAbbr"), N("NNN", 0, 0, "eraAbbr"), N("NNNN", 0, 0, "eraName"), N("NNNNN", 0, 0, "eraNarrow"), N("y", ["y", 1], "yo", "eraYear"), N("y", ["yy", 2], 0, "eraYear"), N("y", ["yyy", 3], 0, "eraYear"), N("y", ["yyyy", 4], 0, "eraYear"), Oe("N", Wr), Oe("NN", Wr), Oe("NNN", Wr), Oe("NNNN", Fr), Oe("NNNNN", Cr), Ce(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, a) {
                    var r = n._locale.erasParse(e, a, n._strict);
                    if (r) {
                        h(n).era = r
                    } else {
                        h(n).invalidEra = e
                    }
                }), Oe("y", we), Oe("yy", we), Oe("yyy", we), Oe("yyyy", we), Oe("yo", Nr), Ce(["y", "yy", "yyy", "yyyy"], ze), Ce(["yo"], function (e, t, n, a) {
                    var r;
                    if (n._locale._eraYearOrdinalRegex) {
                        r = e.match(n._locale._eraYearOrdinalRegex)
                    }
                    if (n._locale.eraYearOrdinalParse) {
                        t[ze] = n._locale.eraYearOrdinalParse(e, r)
                    } else {
                        t[ze] = parseInt(e, 10)
                    }
                }), N(0, ["gg", 2], 0, function () {
                    return this.weekYear() % 100
                }), N(0, ["GG", 2], 0, function () {
                    return this.isoWeekYear() % 100
                }), zr("gggg", "weekYear"), zr("ggggg", "weekYear"), zr("GGGG", "isoWeekYear"), zr("GGGGG", "isoWeekYear"), te("weekYear", "gg"), te("isoWeekYear", "GG"), se("weekYear", 1), se("isoWeekYear", 1), Oe("G", be), Oe("g", be), Oe("GG", ve, Me), Oe("gg", ve, Me), Oe("GGGG", De, pe), Oe("gggg", De, pe), Oe("GGGGG", Te, Le), Oe("ggggg", Te, Le), Ne(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
                    t[a.substr(0, 2)] = ue(e)
                }), Ne(["gg", "GG"], function (e, t, n, a) {
                    t[a] = _.parseTwoDigitYear(e)
                }), N("Q", 0, "Qo", "quarter"), te("quarter", "Q"), se("quarter", 7), Oe("Q", he), Ce("Q", function (e, t) {
                    t[Re] = (ue(e) - 1) * 3
                }), N("D", ["DD", 2], "Do", "date"), te("date", "D"), se("date", 9), Oe("D", ve), Oe("DD", ve, Me), Oe("Do", function (e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), Ce(["D", "DD"], Je), Ce("Do", function (e, t) {
                    t[Je] = ue(e.match(ve)[0])
                });
                var Zr = _e("Date", true);

                function Qr(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return e == null ? t : this.add(e - t, "d")
                }

                N("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), te("dayOfYear", "DDD"), se("dayOfYear", 4), Oe("DDD", ge), Oe("DDDD", ye), Ce(["DDD", "DDDD"], function (e, t, n) {
                    n._dayOfYear = ue(e)
                }), N("m", ["mm", 2], 0, "minute"), te("minute", "m"), se("minute", 14), Oe("m", ve), Oe("mm", ve, Me), Ce(["m", "mm"], Ue);
                var Xr = _e("Minutes", false);
                N("s", ["ss", 2], 0, "second"), te("second", "s"), se("second", 15), Oe("s", ve), Oe("ss", ve, Me), Ce(["s", "ss"], Ge);
                var es = _e("Seconds", false),
                    ts, ns;
                for (N("S", 0, 0, function () {
                    return ~~(this.millisecond() / 100)
                }), N(0, ["SS", 2], 0, function () {
                    return ~~(this.millisecond() / 10)
                }), N(0, ["SSS", 3], 0, "millisecond"), N(0, ["SSSS", 4], 0, function () {
                    return this.millisecond() * 10
                }), N(0, ["SSSSS", 5], 0, function () {
                    return this.millisecond() * 100
                }), N(0, ["SSSSSS", 6], 0, function () {
                    return this.millisecond() * 1e3
                }), N(0, ["SSSSSSS", 7], 0, function () {
                    return this.millisecond() * 1e4
                }), N(0, ["SSSSSSSS", 8], 0, function () {
                    return this.millisecond() * 1e5
                }), N(0, ["SSSSSSSSS", 9], 0, function () {
                    return this.millisecond() * 1e6
                }), te("millisecond", "ms"), se("millisecond", 16), Oe("S", ge, he), Oe("SS", ge, Me), Oe("SSS", ge, ye), ts = "SSSS"; ts.length <= 9; ts += "S") {
                    Oe(ts, we)
                }

                function as(e, t) {
                    t[Ve] = ue(("0." + e) * 1e3)
                }

                for (ts = "S"; ts.length <= 9; ts += "S") {
                    Ce(ts, as)
                }

                function rs() {
                    return this._isUTC ? "UTC" : ""
                }

                function ss() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                ns = _e("Milliseconds", false), N("z", 0, 0, "zoneAbbr"), N("zz", 0, 0, "zoneName");
                var is = Y.prototype;
                if (is.add = xa, is.calendar = Ia, is.clone = za, is.diff = $a, is.endOf = hr, is.format = Xa, is.from = er, is.fromNow = tr, is.to = nr, is.toNow = ar, is.get = me, is.invalidAt = Dr, is.isAfter = Ra, is.isBefore = Ja, is.isBetween = Ba, is.isSame = Ua, is.isSameOrAfter = Ga, is.isSameOrBefore = Va, is.isValid = kr, is.lang = sr, is.locale = rr, is.localeData = ir, is.max = qn, is.min = $n, is.parsingFlags = gr, is.set = fe, is.startOf = fr, is.subtract = Oa, is.toArray = Lr, is.toObject = vr, is.toDate = pr, is.toISOString = Za, is.inspect = Qa, typeof Symbol !== "undefined" && Symbol.for != null) {
                    is[Symbol.for("nodejs.util.inspect.custom")] = function () {
                        return "Moment<" + this.format() + ">"
                    }
                }

                function os(e) {
                    return Vn(1e3 * e)
                }

                function ds() {
                    return Vn.apply(null, arguments).parseZone()
                }


                function us(e) {
                    return e
                }

                is.toJSON = Yr, is.toString = Ka, is.unix = yr, is.valueOf = Mr, is.creationData = Tr, is.eraName = Hr, is.eraNarrow = jr, is.eraAbbr = Er, is.eraYear = xr, is.year = ht, is.isLeapYear = Mt, is.weekYear = Rr, is.isoWeekYear = Jr, is.quarter = is.quarters = Kr, is.month = ut, is.daysInMonth = _t, is.week = is.weeks = bt, is.isoWeek = is.isoWeeks = St, is.weeksInYear = Gr, is.weeksInWeekYear = Vr, is.isoWeeksInYear = Br, is.isoWeeksInISOWeekYear = Ur, is.date = Zr, is.day = is.days = Jt, is.weekday = Bt, is.isoWeekday = Ut, is.dayOfYear = Qr, is.hour = is.hours = nn, is.minute = is.minutes = Xr, is.second = is.seconds = es, is.millisecond = is.milliseconds = ns, is.utcOffset = ma, is.utc = ha, is.local = Ma, is.parseZone = ya, is.hasAlignedHourOffset = pa, is.isDST = La, is.isLocal = Ya, is.isUtcOffset = ka, is.isUtc = ga, is.isUTC = ga, is.zoneAbbr = rs, is.zoneName = ss, is.dates = D("dates accessor is deprecated. Use date instead.", Zr), is.months = D("months accessor is deprecated. Use month instead", ut), is.years = D("years accessor is deprecated. Use year instead", ht), is.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", fa), is.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", va);
                var _s = E.prototype;

                function ls(e, t, n, a) {
                    var r = Mn(),
                        s = f().set(a, t);
                    return r[n](s, e)
                }

                function cs(e, t, n) {
                    if (l(e)) {
                        t = e;
                        e = undefined
                    }
                    e = e || "";
                    if (t != null) {
                        return ls(e, t, n, "month")
                    }
                    var a, r = [];
                    for (a = 0; a < 12; a++) {
                        r[a] = ls(e, a, n, "month")
                    }
                    return r
                }

                function ms(e, t, n, a) {
                    if (typeof e === "boolean") {
                        if (l(t)) {
                            n = t;
                            t = undefined
                        }
                        t = t || ""
                    } else {
                        t = e;
                        n = t;
                        e = false;
                        if (l(t)) {
                            n = t;
                            t = undefined
                        }
                        t = t || ""
                    }
                    var r = Mn(),
                        s = e ? r._week.dow : 0,
                        i, o = [];
                    if (n != null) {
                        return ls(t, (n + s) % 7, a, "day")
                    }
                    for (i = 0; i < 7; i++) {
                        o[i] = ls(t, (i + s) % 7, a, "day")
                    }
                    return o
                }

                function fs(e, t) {
                    return cs(e, t, "months")
                }

                function hs(e, t) {
                    return cs(e, t, "monthsShort")
                }

                function Ms(e, t, n) {
                    return ms(e, t, n, "weekdays")
                }

                function ys(e, t, n) {
                    return ms(e, t, n, "weekdaysShort")
                }

                function ps(e, t, n) {
                    return ms(e, t, n, "weekdaysMin")
                }

                _s.calendar = O, _s.longDateFormat = U, _s.invalidDate = V, _s.ordinal = K, _s.preparse = us, _s.postformat = us, _s.relativeTime = Q, _s.pastFuture = X, _s.set = H, _s.eras = wr, _s.erasParse = br, _s.erasConvertYear = Sr, _s.erasAbbrRegex = Pr, _s.erasNameRegex = Or, _s.erasNarrowRegex = Ar, _s.months = rt, _s.monthsShort = st, _s.monthsParse = ot, _s.monthsRegex = ct, _s.monthsShortRegex = lt, _s.week = gt, _s.firstDayOfYear = wt, _s.firstDayOfWeek = Tt, _s.weekdays = Ct, _s.weekdaysMin = It, _s.weekdaysShort = Nt, _s.weekdaysParse = Rt, _s.weekdaysRegex = Gt, _s.weekdaysShortRegex = Vt, _s.weekdaysMinRegex = $t, _s.isPM = en, _s.meridiem = an, mn("en", {
                    eras: [{
                        since: "0001-01-01",
                        until: +Infinity,
                        offset: 1,
                        name: "Anno Domini",
                        narrow: "AD",
                        abbr: "AD"
                    }, {
                        since: "0000-12-31",
                        until: -Infinity,
                        offset: 1,
                        name: "Before Christ",
                        narrow: "BC",
                        abbr: "BC"
                    }],
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function (e) {
                        var t = e % 10,
                            n = ue(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                        return e + n
                    }
                }), _.lang = D("moment.lang is deprecated. Use moment.locale instead.", mn), _.langData = D("moment.langData is deprecated. Use moment.localeData instead.", Mn);
                var Ls = Math.abs;

                function vs() {
                    var e = this._data;
                    return this._milliseconds = Ls(this._milliseconds), this._days = Ls(this._days), this._months = Ls(this._months), e.milliseconds = Ls(e.milliseconds), e.seconds = Ls(e.seconds), e.minutes = Ls(e.minutes), e.hours = Ls(e.hours), e.months = Ls(e.months), e.years = Ls(e.years), this
                }

                function Ys(e, t, n, a) {
                    var r = wa(t, n);
                    e._milliseconds += a * r._milliseconds;
                    e._days += a * r._days;
                    e._months += a * r._months;
                    return e._bubble()
                }

                function ks(e, t) {
                    return Ys(this, e, t, 1)
                }

                function gs(e, t) {
                    return Ys(this, e, t, -1)
                }

                function Ds(e) {
                    if (e < 0) {
                        return Math.floor(e)
                    } else {
                        return Math.ceil(e)
                    }
                }

                function Ts() {
                    var e, t, n, a, r, s = this._milliseconds,
                        i = this._days,
                        o = this._months,
                        d = this._data;
                    if (!(0 <= s && 0 <= i && 0 <= o || s <= 0 && i <= 0 && o <= 0)) s += 864e5 * Ds(bs(o) + i), o = i = 0;
                    return d.milliseconds = s % 1e3, e = de(s / 1e3), d.seconds = e % 60, t = de(e / 60), d.minutes = t % 60, n = de(t / 60), d.hours = n % 24, i += de(n / 24), r = de(ws(i)), o += r, i -= Ds(bs(r)), a = de(o / 12), o %= 12, d.days = i, d.months = o, d.years = a, this
                }

                function ws(e) {
                    return e * 4800 / 146097
                }

                function bs(e) {
                    return e * 146097 / 4800
                }

                function Ss(e) {
                    if (!this.isValid()) return NaN;
                    var t, n, a = this._milliseconds;
                    if ("month" === (e = ne(e)) || "quarter" === e || "year" === e) switch (t = this._days + a / 864e5, n = this._months + ws(t), e) {
                        case "month":
                            return n;
                        case "quarter":
                            return n / 3;
                        case "year":
                            return n / 12
                    } else switch (t = this._days + Math.round(bs(this._months)), e) {
                        case "week":
                            return t / 7 + a / 6048e5;
                        case "day":
                            return t + a / 864e5;
                        case "hour":
                            return 24 * t + a / 36e5;
                        case "minute":
                            return 1440 * t + a / 6e4;
                        case "second":
                            return 86400 * t + a / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + a;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
                }

                function Hs() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * ue(this._months / 12) : NaN
                }

                function js(e) {
                    return function () {
                        return this.as(e)
                    }
                }

                var Es = js("ms"),
                    xs = js("s"),
                    Os = js("m"),
                    Ps = js("h"),
                    As = js("d"),
                    Ws = js("w"),
                    Fs = js("M"),
                    Cs = js("Q"),
                    Ns = js("y");

                function Is() {
                    return wa(this)
                }

                function zs(e) {
                    return e = ne(e), this.isValid() ? this[e + "s"]() : NaN
                }

                function Rs(e) {
                    return function () {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }

                var Js = Rs("milliseconds"),
                    Bs = Rs("seconds"),
                    Us = Rs("minutes"),
                    Gs = Rs("hours"),
                    Vs = Rs("days"),
                    $s = Rs("months"),
                    qs = Rs("years");

                function Ks() {
                    return de(this.days() / 7)
                }

                var Zs = Math.round,
                    Qs = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        w: null,
                        M: 11
                    };

                function Xs(e, t, n, a, r) {
                    return r.relativeTime(t || 1, !!n, e, a)
                }

                function ei(e, t, n, a) {
                    var r = wa(e).abs(),
                        s = Zs(r.as("s")),
                        i = Zs(r.as("m")),
                        o = Zs(r.as("h")),
                        d = Zs(r.as("d")),
                        u = Zs(r.as("M")),
                        _ = Zs(r.as("w")),
                        l = Zs(r.as("y")),
                        c = (s <= n.ss ? ["s", s] : s < n.s && ["ss", s]) || i <= 1 && ["m"] || i < n.m && ["mm", i] || o <= 1 && ["h"] || o < n.h && ["hh", o] || d <= 1 && ["d"] || d < n.d && ["dd", d];
                    if (null != n.w) c = c || _ <= 1 && ["w"] || _ < n.w && ["ww", _];
                    return (c = c || u <= 1 && ["M"] || u < n.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l])[2] = t, c[3] = 0 < +e, c[4] = a,
                        function (e, t, n, a, r) {
                            return r.relativeTime(t || 1, !!n, e, a)
                        }.apply(null, c)
                }

                function ti(e) {
                    return void 0 !== e ? "function" == typeof e && (Zs = e, !0) : Zs
                }

                function ni(e, t) {
                    if (void 0 === Qs[e]) return !1;
                    if (void 0 === t) return Qs[e];
                    if (Qs[e] = t, "s" === e) Qs.ss = t - 1;
                    return !0
                }

                function ai(e, t) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var n, a, r = !1,
                        s = Qs;
                    if ("object" == typeof e) t = e, e = !1;
                    if ("boolean" == typeof e) r = e;
                    if ("object" == typeof t) s = Object.assign({}, Qs, t), null != t.s && null == t.ss && (s.ss = t.s - 1);
                    if (n = this.localeData(), a = function (e, t, n, a) {
                        var r = wa(e).abs(),
                            s = Zs(r.as("s")),
                            i = Zs(r.as("m")),
                            o = Zs(r.as("h")),
                            d = Zs(r.as("d")),
                            u = Zs(r.as("M")),
                            _ = Zs(r.as("w")),
                            l = Zs(r.as("y")),
                            c = (s <= n.ss ? ["s", s] : s < n.s && ["ss", s]) || i <= 1 && ["m"] || i < n.m && ["mm", i] || o <= 1 && ["h"] || o < n.h && ["hh", o] || d <= 1 && ["d"] || d < n.d && ["dd", d];
                        null != n.w && (c = c || _ <= 1 && ["w"] || _ < n.w && ["ww", _]);
                        return (c = c || u <= 1 && ["M"] || u < n.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l])[2] = t, c[3] = 0 < +e, c[4] = a,
                            function (e, t, n, a, r) {
                                return r.relativeTime(t || 1, !!n, e, a)
                            }.apply(null, c)
                    }(this, !r, s, n), r) a = n.pastFuture(+this, a);
                    return n.postformat(a)
                }

                var ri = Math.abs;

                function si(e) {
                    return (e > 0) - (e < 0) || +e
                }

                function ii() {
                    if (!this.isValid()) {
                        return this.localeData().invalidDate()
                    }
                    var e = ri(this._milliseconds) / 1e3,
                        t = ri(this._days),
                        n = ri(this._months),
                        a, r, s, i, o = this.asSeconds(),
                        d, u, _, l;
                    if (!o) {
                        return "P0D"
                    }
                    a = de(e / 60);
                    r = de(a / 60);
                    e %= 60;
                    a %= 60;
                    s = de(n / 12);
                    n %= 12;
                    i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "";
                    d = o < 0 ? "-" : "";
                    u = si(this._months) !== si(o) ? "-" : "";
                    _ = si(this._days) !== si(o) ? "-" : "";
                    l = si(this._milliseconds) !== si(o) ? "-" : "";
                    return d + "P" + (s ? u + s + "Y" : "") + (n ? u + n + "M" : "") + (t ? _ + t + "D" : "") + (r || a || e ? "T" : "") + (r ? l + r + "H" : "") + (a ? l + a + "M" : "") + (e ? l + i + "S" : "")
                }

                var oi = ra.prototype;
                return oi.isValid = function () {
                    return this._isValid
                }, oi.abs = function () {
                    var e = this._data;
                    return this._milliseconds = Ls(this._milliseconds), this._days = Ls(this._days), this._months = Ls(this._months), e.milliseconds = Ls(e.milliseconds), e.seconds = Ls(e.seconds), e.minutes = Ls(e.minutes), e.hours = Ls(e.hours), e.months = Ls(e.months), e.years = Ls(e.years), this
                }, oi.add = function (e, t) {
                    return Ys(this, e, t, 1)
                }, oi.subtract = function (e, t) {
                    return Ys(this, e, t, -1)
                }, oi.as = function (e) {
                    if (!this.isValid()) return NaN;
                    var t, n, a = this._milliseconds;
                    if ("month" === (e = ne(e)) || "quarter" === e || "year" === e) switch (t = this._days + a / 864e5, n = this._months + ws(t), e) {
                        case "month":
                            return n;
                        case "quarter":
                            return n / 3;
                        case "year":
                            return n / 12
                    } else switch (t = this._days + Math.round(bs(this._months)), e) {
                        case "week":
                            return t / 7 + a / 6048e5;
                        case "day":
                            return t + a / 864e5;
                        case "hour":
                            return 24 * t + a / 36e5;
                        case "minute":
                            return 1440 * t + a / 6e4;
                        case "second":
                            return 86400 * t + a / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + a;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
                }, oi.asMilliseconds = Es, oi.asSeconds = xs, oi.asMinutes = Os, oi.asHours = Ps, oi.asDays = As, oi.asWeeks = Ws, oi.asMonths = Fs, oi.asQuarters = Cs, oi.asYears = Ns, oi.valueOf = function () {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * ue(this._months / 12) : NaN
                }, oi._bubble = function () {
                    var e, t, n, a, r, s = this._milliseconds,
                        i = this._days,
                        o = this._months,
                        d = this._data;
                    0 <= s && 0 <= i && 0 <= o || s <= 0 && i <= 0 && o <= 0 || (s += 864e5 * Ds(bs(o) + i), o = i = 0);
                    return d.milliseconds = s % 1e3, e = de(s / 1e3), d.seconds = e % 60, t = de(e / 60), d.minutes = t % 60, n = de(t / 60), d.hours = n % 24, i += de(n / 24), r = de(ws(i)), o += r, i -= Ds(bs(r)), a = de(o / 12), o %= 12, d.days = i, d.months = o, d.years = a, this
                }, oi.clone = function () {
                    return wa(this)
                }, oi.get = function (e) {
                    return e = ne(e), this.isValid() ? this[e + "s"]() : NaN
                }, oi.milliseconds = Js, oi.seconds = Bs, oi.minutes = Us, oi.hours = Gs, oi.days = Vs, oi.weeks = function () {
                    return de(this.days() / 7)
                }, oi.months = $s, oi.years = qs, oi.humanize = function (e, t) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var n, a, r = !1,
                        s = Qs;
                    "object" == typeof e && (t = e, e = !1);
                    "boolean" == typeof e && (r = e);
                    "object" == typeof t && (s = Object.assign({}, Qs, t), null != t.s && null == t.ss && (s.ss = t.s - 1));
                    n = this.localeData(), a = function (e, t, n, a) {
                        var r = wa(e).abs(),
                            s = Zs(r.as("s")),
                            i = Zs(r.as("m")),
                            o = Zs(r.as("h")),
                            d = Zs(r.as("d")),
                            u = Zs(r.as("M")),
                            _ = Zs(r.as("w")),
                            l = Zs(r.as("y")),
                            c = (s <= n.ss ? ["s", s] : s < n.s && ["ss", s]) || i <= 1 && ["m"] || i < n.m && ["mm", i] || o <= 1 && ["h"] || o < n.h && ["hh", o] || d <= 1 && ["d"] || d < n.d && ["dd", d];
                        null != n.w && (c = c || _ <= 1 && ["w"] || _ < n.w && ["ww", _]);
                        return (c = c || u <= 1 && ["M"] || u < n.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l])[2] = t, c[3] = 0 < +e, c[4] = a,
                            function (e, t, n, a, r) {
                                return r.relativeTime(t || 1, !!n, e, a)
                            }.apply(null, c)
                    }(this, !r, s, n), r && (a = n.pastFuture(+this, a));
                    return n.postformat(a)
                }, oi.toISOString = ii, oi.toString = ii, oi.toJSON = ii, oi.locale = rr, oi.localeData = ir, oi.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ii), oi.lang = sr, N("X", 0, 0, "unix"), N("x", 0, 0, "valueOf"), Oe("x", be), Oe("X", /[+-]?\d+(\.\d{1,3})?/), Ce("X", function (e, t, n) {
                    n._d = new Date(1e3 * parseFloat(e))
                }), Ce("x", function (e, t, n) {
                    n._d = new Date(ue(e))
                }),
                    //! moment.js
                    _.version = "2.27.0",
                    function (e) {
                        t = e
                    }(Vn), _.fn = is, _.min = function () {
                    return Kn("isBefore", [].slice.call(arguments, 0))
                }, _.max = function () {
                    return Kn("isAfter", [].slice.call(arguments, 0))
                }, _.now = function () {
                    return Date.now ? Date.now() : +new Date
                }, _.utc = f, _.unix = function (e) {
                    return Vn(1e3 * e)
                }, _.months = function (e, t) {
                    return cs(e, t, "months")
                }, _.isDate = c, _.locale = mn, _.invalid = y, _.duration = wa, _.isMoment = k, _.weekdays = function (e, t, n) {
                    return ms(e, t, n, "weekdays")
                }, _.parseZone = function () {
                    return Vn.apply(null, arguments).parseZone()
                }, _.localeData = Mn, _.isDuration = sa, _.monthsShort = function (e, t) {
                    return cs(e, t, "monthsShort")
                }, _.weekdaysMin = function (e, t, n) {
                    return ms(e, t, n, "weekdaysMin")
                }, _.defineLocale = fn, _.updateLocale = function (e, t) {
                    {
                        var n, a, r;
                        null != t ? (r = rn, null != sn[e] && null != sn[e].parentLocale ? sn[e].set(j(sn[e]._config, t)) : (null != (a = cn(e)) && (r = a._config), t = j(r, t), null == a && (t.abbr = e), (n = new E(t)).parentLocale = sn[e], sn[e] = n), mn(e)) : null != sn[e] && (null != sn[e].parentLocale ? (sn[e] = sn[e].parentLocale, e === mn() && mn(e)) : null != sn[e] && delete sn[e])
                    }
                    return sn[e]
                }, _.locales = function () {
                    return w(sn)
                }, _.weekdaysShort = function (e, t, n) {
                    return ms(e, t, n, "weekdaysShort")
                }, _.normalizeUnits = ne, _.relativeTimeRounding = function (e) {
                    return void 0 !== e ? "function" == typeof e && (Zs = e, !0) : Zs
                }, _.relativeTimeThreshold = function (e, t) {
                    if (void 0 === Qs[e]) return !1;
                    if (void 0 === t) return Qs[e];
                    Qs[e] = t, "s" === e && (Qs.ss = t - 1);
                    return !0
                }, _.calendarFormat = function (e, t) {
                    var n = e.diff(t, "days", !0);
                    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                }, _.prototype = is, _.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "GGGG-[W]WW",
                    MONTH: "YYYY-MM"
                }, _
            }()
        }).call(this, _i(257)(e))
    }, function (e, t, n) {
        var a = n(4),
            r = n(52),
            s = n(6),
            i = n(53),
            o = n(58),
            d = n(84),
            u = r("wks"),
            _ = a.Symbol,
            l = d ? _ : _ && _.withoutSetter || i;
        e.exports = function (e) {
            return s(u, e) || (o && s(_, e) ? u[e] = _[e] : u[e] = l("Symbol." + e)), u[e]
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function (e, t, n) {
        var _ = n(4),
            l = n(16).f,
            c = n(10),
            m = n(15),
            f = n(51),
            h = n(79),
            M = n(57);
        e.exports = function (e, t) {
            var n, a, r, s, i = e.target,
                o = e.global,
                d = e.stat,
                u = o ? _ : d ? _[i] || f(i, {}) : (_[i] || {}).prototype;
            if (u)
                for (n in t) {
                    if (r = t[n], a = e.noTargetGet ? (s = l(u, n)) && s.value : u[n], !M(o ? n : i + (d ? "." : "#") + n, e.forced) && void 0 !== a) {
                        if (typeof r == typeof a) continue;
                        h(r, a)
                    }
                    (e.sham || a && a.sham) && c(r, "sham", !0), m(u, n, r, e)
                }
        }
    }, function (n, e, t) {
        (function (e) {
            function t(e) {
                return e && e.Math == Math && e
            }

            n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")()
        }).call(this, t(238))
    }, function (e, t, n) {
        var a = n(2);
        e.exports = !a(function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })
    }, function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }, function (e, t, n) {
        var a = n(5),
            r = n(75),
            s = n(8),
            i = n(23),
            o = Object.defineProperty;
        t.f = a ? o : function (e, t, n) {
            if (s(e), t = i(t, !0), s(n), r) try {
                return o(e, t, n)
            } catch (e) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
        }
    }, function (e, t, n) {
        var a = n(9);
        e.exports = function (e) {
            if (!a(e)) throw TypeError(String(e) + " is not an object");
            return e
        }
    }, function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function (e, t, n) {
        var a = n(5),
            r = n(7),
            s = n(22);
        e.exports = a ? function (e, t, n) {
            return r.f(e, t, s(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, function (e, t, n) {
        var a = n(28),
            r = Math.min;
        e.exports = function (e) {
            return 0 < e ? r(a(e), 9007199254740991) : 0
        }
    }, function (e, t, n) {
        var a = n(50),
            r = n(14);
        e.exports = function (e) {
            return a(r(e))
        }
    }, function (e, t, n) {
        var a = n(14);
        e.exports = function (e) {
            return Object(a(e))
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        }
    }, function (e, t, n) {
        var o = n(4),
            d = n(10),
            u = n(6),
            _ = n(51),
            a = n(77),
            r = n(24),
            s = r.get,
            l = r.enforce,
            c = String(String).split("String");
        (e.exports = function (e, t, n, a) {
            var r = !!a && !!a.unsafe,
                s = !!a && !!a.enumerable,
                i = !!a && !!a.noTargetGet;
            "function" == typeof n && ("string" != typeof t || u(n, "name") || d(n, "name", t), l(n).source = c.join("string" == typeof t ? t : "")), e !== o ? (r ? !i && e[t] && (s = !0) : delete e[t], s ? e[t] = n : d(e, t, n)) : s ? e[t] = n : _(t, n)
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && s(this).source || a(this)
        })
    }, function (e, t, n) {
        var a = n(5),
            r = n(49),
            s = n(22),
            i = n(12),
            o = n(23),
            d = n(6),
            u = n(75),
            _ = Object.getOwnPropertyDescriptor;
        t.f = a ? _ : function (e, t) {
            if (e = i(e), t = o(t, !0), u) try {
                return _(e, t)
            } catch (e) {
            }
            if (d(e, t)) return s(!r.f.call(e, t), e[t])
        }
    }, function (e, t, n) {
        function i(e) {
            throw e
        }

        var o = n(5),
            d = n(2),
            u = n(6),
            _ = Object.defineProperty,
            l = {};
        e.exports = function (e, t) {
            if (u(l, e)) return l[e];
            var n = [][e],
                a = !!u(t = t || {}, "ACCESSORS") && t.ACCESSORS,
                r = u(t, 0) ? t[0] : i,
                s = u(t, 1) ? t[1] : void 0;
            return l[e] = !!n && !d(function () {
                if (a && !o) return !0;
                var e = {
                    length: -1
                };
                a ? _(e, 1, {
                    enumerable: !0,
                    get: i
                }) : e[1] = 1, n.call(e, r, s)
            })
        }
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = ne[e] = g(K[U]);
            return V(n, {
                type: B,
                tag: e,
                description: t
            }), l || (n.description = t), n
        }

        function a(t, e) {
            p(t);
            var n = v(e),
                a = D(n).concat(me(n));
            return R(a, function (e) {
                l && !ce.call(n, e) || le(t, e, n[e])
            }), t
        }

        function s(e, t) {
            var n = v(e),
                a = Y(t, !0);
            if (n !== q || !h(ne, a) || h(ae, a)) {
                var r = Q(n, a);
                return !r || !h(ne, a) || h(n, J) && n[J][a] || (r.enumerable = !0), r
            }
        }

        function i(e) {
            var t = ee(v(e)),
                n = [];
            return R(t, function (e) {
                h(ne, e) || h(A, e) || n.push(e)
            }), n
        }

        var o = n(3),
            d = n(4),
            u = n(26),
            _ = n(25),
            l = n(5),
            c = n(58),
            m = n(84),
            f = n(2),
            h = n(6),
            M = n(38),
            y = n(9),
            p = n(8),
            L = n(13),
            v = n(12),
            Y = n(23),
            k = n(22),
            g = n(39),
            D = n(40),
            T = n(27),
            w = n(242),
            b = n(56),
            S = n(16),
            H = n(7),
            j = n(49),
            E = n(10),
            x = n(15),
            O = n(52),
            P = n(36),
            A = n(37),
            W = n(53),
            F = n(1),
            C = n(85),
            N = n(86),
            I = n(59),
            z = n(24),
            R = n(29).forEach,
            J = P("hidden"),
            B = "Symbol",
            U = "prototype",
            G = F("toPrimitive"),
            V = z.set,
            $ = z.getterFor(B),
            q = Object[U],
            K = d.Symbol,
            Z = u("JSON", "stringify"),
            Q = S.f,
            X = H.f,
            ee = w.f,
            te = j.f,
            ne = O("symbols"),
            ae = O("op-symbols"),
            re = O("string-to-symbol-registry"),
            se = O("symbol-to-string-registry"),
            ie = O("wks"),
            oe = d.QObject,
            de = !oe || !oe[U] || !oe[U].findChild,
            ue = l && f(function () {
                return 7 != g(X({}, "a", {
                    get: function () {
                        return X(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function (e, t, n) {
                var a = Q(q, t);
                a && delete q[t], X(e, t, n), a && e !== q && X(q, t, a)
            } : X,
            _e = m ? function (e) {
                return "symbol" == typeof e
            } : function (e) {
                return Object(e) instanceof K
            },
            le = function (e, t, n) {
                e === q && le(ae, t, n), p(e);
                var a = Y(t, !0);
                return p(n), h(ne, a) ? (n.enumerable ? (h(e, J) && e[J][a] && (e[J][a] = !1), n = g(n, {
                    enumerable: k(0, !1)
                })) : (h(e, J) || X(e, J, k(1, {})), e[J][a] = !0), ue(e, a, n)) : X(e, a, n)
            },
            ce = function (e) {
                var t = Y(e, !0),
                    n = te.call(this, t);
                return !(this === q && h(ne, t) && !h(ae, t)) && (!(n || !h(this, t) || !h(ne, t) || h(this, J) && this[J][t]) || n)
            },
            me = function (e) {
                var t = e === q,
                    n = ee(t ? ae : v(e)),
                    a = [];
                return R(n, function (e) {
                    !h(ne, e) || t && !h(q, e) || a.push(ne[e])
                }), a
            };
        c || (x((K = function (e) {
            if (this instanceof K) throw TypeError("Symbol is not a constructor");
            var t = arguments.length && void 0 !== e ? String(e) : void 0,
                n = W(t),
                a = function (e) {
                    this === q && a.call(ae, e), h(this, J) && h(this[J], n) && (this[J][n] = !1), ue(this, n, k(1, e))
                };
            return l && de && ue(q, n, {
                configurable: !0,
                set: a
            }), r(n, t)
        })[U], "toString", function () {
            return $(this).tag
        }), x(K, "withoutSetter", function (e) {
            return r(W(e), e)
        }), j.f = ce, H.f = le, S.f = s, T.f = w.f = i, b.f = me, C.f = function (e) {
            return r(F(e), e)
        }, l && (X(K[U], "description", {
            configurable: !0,
            get: function () {
                return $(this).description
            }
        }), _ || x(q, "propertyIsEnumerable", ce, {
            unsafe: !0
        }))), o({
            global: !0,
            wrap: !0,
            forced: !c,
            sham: !c
        }, {
            Symbol: K
        }), R(D(ie), function (e) {
            N(e)
        }), o({
            target: B,
            stat: !0,
            forced: !c
        }, {
            for: function (e) {
                var t = String(e);
                if (h(re, t)) return re[t];
                var n = K(t);
                return re[t] = n, se[n] = t, n
            },
            keyFor: function (e) {
                if (!_e(e)) throw TypeError(e + " is not a symbol");
                if (h(se, e)) return se[e]
            },
            useSetter: function () {
                de = !0
            },
            useSimple: function () {
                de = !1
            }
        }), o({
            target: "Object",
            stat: !0,
            forced: !c,
            sham: !l
        }, {
            create: function (e, t) {
                return void 0 === t ? g(e) : a(g(e), t)
            },
            defineProperty: le,
            defineProperties: a,
            getOwnPropertyDescriptor: s
        }), o({
            target: "Object",
            stat: !0,
            forced: !c
        }, {
            getOwnPropertyNames: i,
            getOwnPropertySymbols: me
        }), o({
            target: "Object",
            stat: !0,
            forced: f(function () {
                b.f(1)
            })
        }, {
            getOwnPropertySymbols: function (e) {
                return b.f(L(e))
            }
        }), Z && o({
            target: "JSON",
            stat: !0,
            forced: !c || f(function () {
                var e = K();
                return "[null]" != Z([e]) || "{}" != Z({
                    a: e
                }) || "{}" != Z(Object(e))
            })
        }, {
            stringify: function (e, t, n) {
                for (var a, r = [e], s = 1; s < arguments.length;) r.push(arguments[s++]);
                if ((y(a = t) || void 0 !== e) && !_e(e)) return M(t) || (t = function (e, t) {
                    if ("function" == typeof a && (t = a.call(this, e, t)), !_e(t)) return t
                }), r[1] = t, Z.apply(null, r)
            }
        }), K[U][G] || E(K[U], G, K[U].valueOf), I(K, B), A[J] = !0
    }, function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, function (e, t, n) {
        "use strict";
        var a = n(3),
            r = n(2),
            u = n(38),
            _ = n(9),
            l = n(13),
            c = n(11),
            m = n(31),
            f = n(60),
            s = n(32),
            i = n(1),
            o = n(89),
            h = i("isConcatSpreadable"),
            M = 9007199254740991,
            y = "Maximum allowed index exceeded",
            d = 51 <= o || !r(function () {
                var e = [];
                return e[h] = !1, e.concat()[0] !== e
            }),
            p = s("concat");
        a({
            target: "Array",
            proto: !0,
            forced: !d || !p
        }, {
            concat: function (e) {
                for (var t, n, a, r = l(this), s = f(r, 0), i = 0, o = -1, d = arguments.length; o < d; o++)
                    if (function (e) {
                        if (!_(e)) return !1;
                        var t = e[h];
                        return void 0 !== t ? !!t : u(e)
                    }(a = -1 === o ? r : arguments[o])) {
                        if (n = c(a.length), M < i + n) throw TypeError(y);
                        for (t = 0; t < n; t++, i++) t in a && m(s, i, a[t])
                    } else {
                        if (M <= i) throw TypeError(y);
                        m(s, i++, a)
                    }
                return s.length = i, s
            }
        })
    }, function (e, t, n) {
        "use strict";
        var a = n(3),
            r = n(46);
        a({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== r
        }, {
            exec: r
        })
    }, function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function (e, t, n) {
        var r = n(9);
        e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, a;
            if (t && "function" == typeof (n = e.toString) && !r(a = n.call(e))) return a;
            if ("function" == typeof (n = e.valueOf) && !r(a = n.call(e))) return a;
            if (!t && "function" == typeof (n = e.toString) && !r(a = n.call(e))) return a;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (e, t, n) {
        var a, r, s, i, o, d, u, _, l = n(239),
            c = n(4),
            m = n(9),
            f = n(10),
            h = n(6),
            M = n(36),
            y = n(37),
            p = c.WeakMap;
        u = l ? (a = new p, r = a.get, s = a.has, i = a.set, o = function (e, t) {
            return i.call(a, e, t), t
        }, d = function (e) {
            return r.call(a, e) || {}
        }, function (e) {
            return s.call(a, e)
        }) : (y[_ = M("state")] = !0, o = function (e, t) {
            return f(e, _, t), t
        }, d = function (e) {
            return h(e, _) ? e[_] : {}
        }, function (e) {
            return h(e, _)
        }), e.exports = {
            set: o,
            get: d,
            has: u,
            enforce: function (e) {
                return u(e) ? d(e) : o(e, {})
            },
            getterFor: function (n) {
                return function (e) {
                    var t;
                    if (!m(e) || (t = d(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                    return t
                }
            }
        }
    }, function (e, t) {
        e.exports = !1
    }, function (e, t, n) {
        function a(e) {
            return "function" == typeof e ? e : void 0
        }

        var r = n(81),
            s = n(4);
        e.exports = function (e, t) {
            return arguments.length < 2 ? a(r[e]) || a(s[e]) : r[e] && r[e][t] || s[e] && s[e][t]
        }
    }, function (e, t, n) {
        var a = n(82),
            r = n(55).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
            return a(e, r)
        }
    }, function (e, t) {
        var n = Math.ceil,
            a = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (0 < e ? a : n)(e)
        }
    }, function (e, t, n) {
        function a(m) {
            var f = 1 == m,
                h = 2 == m,
                M = 3 == m,
                y = 4 == m,
                p = 6 == m,
                L = 5 == m || p;
            return function (e, t, n, a) {
                for (var r, s, i = k(e), o = Y(i), d = v(t, n, 3), u = g(o.length), _ = 0, l = a || D, c = f ? l(e, u) : h ? l(e, 0) : void 0; _ < u; _++)
                    if ((L || _ in o) && (s = d(r = o[_], _, i), m))
                        if (f) c[_] = s;
                        else if (s) switch (m) {
                            case 3:
                                return !0;
                            case 5:
                                return r;
                            case 6:
                                return _;
                            case 2:
                                T.call(c, r)
                        } else if (y) return !1;
                return p ? -1 : M || y ? y : c
            }
        }

        var v = n(87),
            Y = n(50),
            k = n(13),
            g = n(11),
            D = n(60),
            T = [].push;
        e.exports = {
            forEach: a(0),
            map: a(1),
            filter: a(2),
            some: a(3),
            every: a(4),
            find: a(5),
            findIndex: a(6)
        }
    }, function (e, t, n) {
        "use strict";
        var a, r, s, i, o, d, u = n(3),
            _ = n(5),
            l = n(4),
            c = n(6),
            m = n(9),
            f = n(7).f,
            h = n(79),
            M = l.Symbol;
        !_ || "function" != typeof M || "description" in M.prototype && void 0 === M().description || (a = {}, h(r = function (e) {
            var t = arguments.length < 1 || void 0 === e ? void 0 : String(e),
                n = this instanceof r ? new M(t) : void 0 === t ? M() : M(t);
            return "" === t && (a[n] = !0), n
        }, M), (s = r.prototype = M.prototype).constructor = r, i = s.toString, o = "Symbol(test)" == String(M("test")), d = /^Symbol\((.*)\)[^)]+$/, f(s, "description", {
            configurable: !0,
            get: function () {
                var e = m(this) ? this.valueOf() : this,
                    t = i.call(e);
                if (c(a, e)) return "";
                var n = o ? t.slice(7, -1) : t.replace(d, "$1");
                return "" === n ? void 0 : n
            }
        }), u({
            global: !0,
            forced: !0
        }, {
            Symbol: r
        }))
    }, function (e, t, n) {
        "use strict";
        var r = n(23),
            s = n(7),
            i = n(22);
        e.exports = function (e, t, n) {
            var a = r(t);
            a in e ? s.f(e, a, i(0, n)) : e[a] = n
        }
    }, function (e, t, n) {
        var a = n(2),
            r = n(1),
            s = n(89),
            i = r("species");
        e.exports = function (t) {
            return 51 <= s || !a(function () {
                var e = [];
                return (e.constructor = {})[i] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            })
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t, n) {
        var a = n(63),
            r = n(15),
            s = n(255);
        a || r(Object.prototype, "toString", s, {
            unsafe: !0
        })
    }, function (e, t, n) {
        "use strict";
        var a = n(15),
            r = n(8),
            s = n(2),
            i = n(65),
            o = "toString",
            d = RegExp.prototype,
            u = d[o],
            _ = s(function () {
                return "/a/b" != u.call({
                    source: "a",
                    flags: "b"
                })
            }),
            l = u.name != o;
        (_ || l) && a(RegExp.prototype, o, function () {
            var e = r(this),
                t = String(e.source),
                n = e.flags;
            return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in d) ? i.call(e) : n)
        }, {
            unsafe: !0
        })
    }, function (e, t, n) {
        var a = n(52),
            r = n(53),
            s = a("keys");
        e.exports = function (e) {
            return s[e] || (s[e] = r(e))
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t, n) {
        var a = n(19);
        e.exports = Array.isArray || function (e) {
            return "Array" == a(e)
        }
    }, function (e, t, n) {
        function a() {
        }

        function r(e) {
            return "<script>" + e + "</" + f + ">"
        }

        var s, i = n(8),
            o = n(240),
            d = n(55),
            u = n(37),
            _ = n(241),
            l = n(76),
            c = n(36),
            m = "prototype",
            f = "script",
            h = c("IE_PROTO"),
            M = function () {
                try {
                    s = document.domain && new ActiveXObject("htmlfile")
                } catch (e) {
                }
                var e, t;
                M = s ? function (e) {
                    e.write(r("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                }(s) : ((t = l("iframe")).style.display = "none", _.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(r("document.F=Object")), e.close(), e.F);
                for (var n = d.length; n--;) delete M[m][d[n]];
                return M()
            };
        u[h] = !0, e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (a[m] = i(e), n = new a, a[m] = null, n[h] = e) : n = M(), void 0 === t ? n : o(n, t)
        }
    }, function (e, t, n) {
        var a = n(82),
            r = n(55);
        e.exports = Object.keys || function (e) {
            return a(e, r)
        }
    }, function (e, t, n) {
        "use strict";
        var a = n(3),
            r = n(91);
        a({
            target: "Array",
            proto: !0,
            forced: [].forEach != r
        }, {
            forEach: r
        })
    }, function (e, t, n) {
        var a = n(3),
            r = n(245);
        a({
            target: "Array",
            stat: !0,
            forced: !n(249)(function (e) {
                Array.from(e)
            })
        }, {
            from: r
        })
    }, function (e, t, n) {
        "use strict";
        var a = n(12),
            r = n(90),
            s = n(33),
            i = n(24),
            o = n(94),
            d = "Array Iterator",
            u = i.set,
            _ = i.getterFor(d);
        e.exports = o(Array, "Array", function (e, t) {
            u(this, {
                type: d,
                target: a(e),
                index: 0,
                kind: t
            })
        }, function () {
            var e = _(this),
                t = e.target,
                n = e.kind,
                a = e.index++;
            return !t || a >= t.length ? {
                value: e.target = void 0,
                done: !0
            } : "keys" == n ? {
                value: a,
                done: !1
            } : "values" == n ? {
                value: t[a],
                done: !1
            } : {
                value: [a, t[a]],
                done: !1
            }
        }, "values"), s.Arguments = s.Array, r("keys"), r("values"), r("entries")
    }, function (e, t, n) {
        "use strict";
        var a = n(3),
            u = n(9),
            _ = n(38),
            l = n(54),
            c = n(11),
            m = n(12),
            f = n(31),
            r = n(1),
            s = n(32),
            i = n(17),
            o = s("slice"),
            d = i("slice", {
                ACCESSORS: !0,
                0: 0,
                1: 2
            }),
            h = r("species"),
            M = [].slice,
            y = Math.max;
        a({
            target: "Array",
            proto: !0,
            forced: !o || !d
        }, {
            slice: function (e, t) {
                var n, a, r, s = m(this),
                    i = c(s.length),
                    o = l(e, i),
                    d = l(void 0 === t ? i : t, i);
                if (_(s) && (("function" == typeof (n = s.constructor) && (n === Array || _(n.prototype)) || u(n) && null === (n = n[h])) && (n = void 0), n === Array || void 0 === n)) return M.call(s, o, d);
                for (a = new (void 0 === n ? Array : n)(y(d - o, 0)), r = 0; o < d; o++, r++) o in s && f(a, r, s[o]);
                return a.length = r, a
            }
        })
    }, function (e, t, n) {
        var a = n(3),
            r = n(13),
            s = n(40);
        a({
            target: "Object",
            stat: !0,
            forced: n(2)(function () {
                s(1)
            })
        }, {
            keys: function (e) {
                return s(r(e))
            }
        })
    }, function (e, t, n) {
        "use strict";
        var a, r, l = n(65),
            s = n(100),
            c = RegExp.prototype.exec,
            m = String.prototype.replace,
            i = c,
            f = (a = /a/, r = /b*/g, c.call(a, "a"), c.call(r, "a"), 0 !== a.lastIndex || 0 !== r.lastIndex),
            h = s.UNSUPPORTED_Y || s.BROKEN_CARET,
            M = void 0 !== /()??/.exec("")[1];
        (f || M || h) && (i = function (e) {
            var t, n, a, r, s = this,
                i = h && s.sticky,
                o = l.call(s),
                d = s.source,
                u = 0,
                _ = e;
            return i && (-1 === (o = o.replace("y", "")).indexOf("g") && (o += "g"), _ = String(e).slice(s.lastIndex), 0 < s.lastIndex && (!s.multiline || s.multiline && "\n" !== e[s.lastIndex - 1]) && (d = "(?: " + d + ")", _ = " " + _, u++), n = new RegExp("^(?:" + d + ")", o)), M && (n = new RegExp("^" + d + "$(?!\\s)", o)), f && (t = s.lastIndex), a = c.call(i ? n : s, _), i ? a ? (a.input = a.input.slice(u), a[0] = a[0].slice(u), a.index = s.lastIndex, s.lastIndex += a[0].length) : s.lastIndex = 0 : f && a && (s.lastIndex = s.global ? a.index + a[0].length : t), M && a && 1 < a.length && m.call(a[0], n, function () {
                for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (a[r] = void 0)
            }), a
        }), e.exports = i
    }, function (e, t, n) {
        "use strict";
        var r = n(101).charAt,
            a = n(24),
            s = n(94),
            i = "String Iterator",
            o = a.set,
            d = a.getterFor(i);
        s(String, "String", function (e) {
            o(this, {
                type: i,
                string: String(e),
                index: 0
            })
        }, function () {
            var e, t = d(this),
                n = t.string,
                a = t.index;
            return a >= n.length ? {
                value: void 0,
                done: !0
            } : (e = r(n, a), t.index += e.length, {
                value: e,
                done: !1
            })
        })
    }, function (e, t, n) {
        var a = n(4),
            r = n(102),
            s = n(91),
            i = n(10);
        for (var o in r) {
            var d = a[o],
                u = d && d.prototype;
            if (u && u.forEach !== s) try {
                i(u, "forEach", s)
            } catch (e) {
                u.forEach = s
            }
        }
    }, function (e, t, n) {
        "use strict";
        var a = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            s = r && !a.call({
                1: 2
            }, 1);
        t.f = s ? function (e) {
            var t = r(this, e);
            return !!t && t.enumerable
        } : a
    }, function (e, t, n) {
        var a = n(2),
            r = n(19),
            s = "".split;
        e.exports = a(function () {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function (e) {
            return "String" == r(e) ? s.call(e, "") : Object(e)
        } : Object
    }, function (e, t, n) {
        var a = n(4),
            r = n(10);
        e.exports = function (t, n) {
            try {
                r(a, t, n)
            } catch (e) {
                a[t] = n
            }
            return n
        }
    }, function (e, t, n) {
        var a = n(25),
            r = n(78);
        (e.exports = function (e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: "3.6.5",
            mode: a ? "pure" : "global",
            copyright: "Â© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }, function (e, t) {
        var n = 0,
            a = Math.random();
        e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + a).toString(36)
        }
    }, function (e, t, n) {
        var a = n(28),
            r = Math.max,
            s = Math.min;
        e.exports = function (e, t) {
            var n = a(e);
            return n < 0 ? r(n + t, 0) : s(n, t)
        }
    }, function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function (e, t, n) {
        function a(e, t) {
            var n = o[i(e)];
            return n == u || n != d && ("function" == typeof t ? r(t) : !!t)
        }

        var r = n(2),
            s = /#|\.prototype\./,
            i = a.normalize = function (e) {
                return String(e).replace(s, ".").toLowerCase()
            },
            o = a.data = {},
            d = a.NATIVE = "N",
            u = a.POLYFILL = "P";
        e.exports = a
    }, function (e, t, n) {
        var a = n(2);
        e.exports = !!Object.getOwnPropertySymbols && !a(function () {
            return !String(Symbol())
        })
    }, function (e, t, n) {
        var a = n(7).f,
            r = n(6),
            s = n(1)("toStringTag");
        e.exports = function (e, t, n) {
            e && !r(e = n ? e : e.prototype, s) && a(e, s, {
                configurable: !0,
                value: t
            })
        }
    }, function (e, t, n) {
        var a = n(9),
            r = n(38),
            s = n(1)("species");
        e.exports = function (e, t) {
            var n;
            return r(e) && ("function" == typeof (n = e.constructor) && (n === Array || r(n.prototype)) || a(n) && null === (n = n[s])) && (n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        }
    }, function (e, t, n) {
        n(86)("iterator")
    }, function (e, t, n) {
        "use strict";
        var a = n(3),
            r = n(29).filter,
            s = n(32),
            i = n(17),
            o = s("filter"),
            d = i("filter");
        a({
            target: "Array",
            proto: !0,
            forced: !o || !d
        }, {
            filter: function (e, t) {
                return r(this, e, 1 < arguments.length ? t : void 0)
            }
        })
    }, function (e, t, n) {
        var a = {};
        a[n(1)("toStringTag")] = "z", e.exports = "[object z]" === String(a)
    }, function (e, t, n) {
        var a = n(5),
            r = n(7).f,
            s = Function.prototype,
            i = s.toString,
            o = /^\s*function ([^ (]*)/;
        !a || "name" in s || r(s, "name", {
            configurable: !0,
            get: function () {
                try {
                    return i.call(this).match(o)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    }, function (e, t, n) {
        "use strict";
        var a = n(8);
        e.exports = function () {
            var e = a(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }
    }, function (e, t, n) {
        "use strict";
        var a = n(67),
            l = n(68),
            L = n(8),
            c = n(14),
            v = n(256),
            Y = n(69),
            k = n(11),
            g = n(70),
            m = n(46),
            r = n(2),
            f = [].push,
            D = Math.min,
            T = 4294967295,
            w = !r(function () {
                return !RegExp(T, "y")
            });
        a("split", 2, function (r, M, y) {
            var p = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function (e, t) {
                var n = String(c(this)),
                    a = void 0 === t ? T : t >>> 0;
                if (0 == a) return [];
                if (void 0 === e) return [n];
                if (!l(e)) return M.call(n, e, a);
                for (var r, s, i, o = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, _ = new RegExp(e.source, d + "g");
                     (r = m.call(_, n)) && !(u < (s = _.lastIndex) && (o.push(n.slice(u, r.index)), 1 < r.length && r.index < n.length && f.apply(o, r.slice(1)), i = r[0].length, u = s, o.length >= a));) _.lastIndex === r.index && _.lastIndex++;
                return u === n.length ? !i && _.test("") || o.push("") : o.push(n.slice(u)), o.length > a ? o.slice(0, a) : o
            } : "0".split(void 0, 0).length ? function (e, t) {
                return void 0 === e && 0 === t ? [] : M.call(this, e, t)
            } : M;
            return [function (e, t) {
                var n = c(this),
                    a = null == e ? void 0 : e[r];
                return void 0 !== a ? a.call(e, n, t) : p.call(String(n), e, t)
            }, function (e, t) {
                var n = y(p, e, this, t, p !== M);
                if (n.done) return n.value;
                var a = L(e),
                    r = String(this),
                    s = v(a, RegExp),
                    i = a.unicode,
                    o = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (w ? "y" : "g"),
                    d = new s(w ? a : "^(?:" + a.source + ")", o),
                    u = void 0 === t ? T : t >>> 0;
                if (0 == u) return [];
                if (0 === r.length) return null === g(d, r) ? [r] : [];
                for (var _ = 0, l = 0, c = []; l < r.length;) {
                    d.lastIndex = w ? l : 0;
                    var m, f = g(d, w ? r : r.slice(l));
                    if (null === f || (m = D(k(d.lastIndex + (w ? 0 : l)), r.length)) === _) l = Y(r, l, i);
                    else {
                        if (c.push(r.slice(_, l)), c.length === u) return c;
                        for (var h = 1; h <= f.length - 1; h++)
                            if (c.push(f[h]), c.length === u) return c;
                        l = _ = m
                    }
                }
                return c.push(r.slice(_)), c
            }]
        }, !w)
    }, function (e, t, n) {
        "use strict";
        n(21);
        var l = n(15),
            c = n(2),
            m = n(1),
            f = n(46),
            h = n(10),
            M = m("species"),
            y = !c(function () {
                var e = /./;
                return e.exec = function () {
                    var e = [];
                    return e.groups = {
                        a: "7"
                    }, e
                }, "7" !== "".replace(e, "$<a>")
            }),
            p = "$0" === "a".replace(/./, "$0"),
            a = m("replace"),
            L = !!/./ [a] && "" === /./ [a]("a", "$0"),
            v = !c(function () {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments)
                };
                var n = "ab".split(e);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
            });
        e.exports = function (n, e, t, a) {
            var s, r, i, o, d = m(n),
                u = !c(function () {
                    var e = {};
                    return e[d] = function () {
                        return 7
                    }, 7 != "" [n](e)
                }),
                _ = u && !c(function () {
                    var e = !1,
                        t = /a/;
                    return "split" === n && ((t = {
                        constructor: {}
                    }).constructor[M] = function () {
                        return t
                    }, t.flags = "", t[d] = /./ [d]), t.exec = function () {
                        return e = !0, null
                    }, t[d](""), !e
                });
            u && _ && ("replace" !== n || y && p && !L) && ("split" !== n || v) || (s = /./ [d], i = (r = t(d, "" [n], function (e, t, n, a, r) {
                return t.exec === f ? u && !r ? {
                    done: !0,
                    value: s.call(t, n, a)
                } : {
                    done: !0,
                    value: e.call(n, t, a)
                } : {
                    done: !1
                }
            }, {
                REPLACE_KEEPS_$0: p,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: L
            }))[0], o = r[1], l(String.prototype, n, i), l(RegExp.prototype, d, 2 == e ? function (e, t) {
                return o.call(e, this, t)
            } : function (e) {
                return o.call(e, this)
            })), a && h(RegExp.prototype[d], "sham", !0)
        }
    }, function (e, t, n) {
        var a = n(9),
            r = n(19),
            s = n(1)("match");
        e.exports = function (e) {
            var t;
            return a(e) && (void 0 !== (t = e[s]) ? !!t : "RegExp" == r(e))
        }
    }, function (e, t, n) {
        "use strict";
        var a = n(101).charAt;
        e.exports = function (e, t, n) {
            return t + (n ? a(e, t).length : 1)
        }
    }, function (e, t, n) {
        var r = n(19),
            s = n(46);
        e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var a = n.call(e, t);
                if ("object" != typeof a) throw TypeError("RegExp exec method returned something other than an Object or null");
                return a
            }
            if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return s.call(e, t)
        }
    }, function (e, t, n) {
        var a = n(4),
            r = n(102),
            s = n(43),
            i = n(10),
            o = n(1),
            d = o("iterator"),
            u = o("toStringTag"),
            _ = s.values;
        for (var l in r) {
            var c = a[l],
                m = c && c.prototype;
            if (m) {
                if (m[d] !== _) try {
                    i(m, d, _)
                } catch (e) {
                    m[d] = _
                }
                if (m[u] || i(m, u, l), r[l])
                    for (var f in s)
                        if (m[f] !== s[f]) try {
                            i(m, f, s[f])
                        } catch (e) {
                            m[f] = s[f]
                        }
            }
        }
    }, function (e, t, n) {
        function a(n) {
            return function (e) {
                var t = String(r(e));
                return 1 & n && (t = t.replace(i, "")), 2 & n && (t = t.replace(o, "")), t
            }
        }

        var r = n(14),
            s = "[" + n(73) + "]",
            i = RegExp("^" + s + s + "*"),
            o = RegExp(s + s + "*$");
        e.exports = {
            start: a(1),
            end: a(2),
            trim: a(3)
        }
    }, function (e, t) {
        e.exports = "\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"
    }, function (e, t, n) {
        "use strict";
        var a = n(67),
            w = n(8),
            b = n(13),
            S = n(11),
            H = n(28),
            s = n(14),
            j = n(69),
            E = n(70),
            x = Math.max,
            O = Math.min,
            P = Math.floor,
            A = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            W = /\$([$&'`]|\d\d?)/g;
        a("replace", 2, function (r, Y, k, e) {
            var g = e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                D = e.REPLACE_KEEPS_$0,
                T = g ? "$" : "$0";
            return [function (e, t) {
                var n = s(this),
                    a = null == e ? void 0 : e[r];
                return void 0 !== a ? a.call(e, n, t) : Y.call(String(n), e, t)
            }, function (e, t) {
                if (!g && D || "string" == typeof t && -1 === t.indexOf(T)) {
                    var n = k(Y, e, this, t);
                    if (n.done) return n.value
                }
                var a = w(e),
                    r = String(this),
                    s = "function" == typeof t;
                s || (t = String(t));
                var i, o = a.global;
                o && (i = a.unicode, a.lastIndex = 0);
                for (var d = []; ;) {
                    var u = E(a, r);
                    if (null === u) break;
                    if (d.push(u), !o) break;
                    "" === String(u[0]) && (a.lastIndex = j(r, S(a.lastIndex), i))
                }
                for (var _, l = "", c = 0, m = 0; m < d.length; m++) {
                    u = d[m];
                    for (var f = String(u[0]), h = x(O(H(u.index), r.length), 0), M = [], y = 1; y < u.length; y++) M.push(void 0 === (_ = u[y]) ? _ : String(_));
                    var p, L = u.groups,
                        v = s ? (p = [f].concat(M, h, r), void 0 !== L && p.push(L), String(t.apply(void 0, p))) : function (s, i, o, d, u, e) {
                            var _ = o + s.length,
                                l = d.length,
                                t = W;
                            void 0 !== u && (u = b(u), t = A);
                            return Y.call(e, t, function (e, t) {
                                var n;
                                switch (t.charAt(0)) {
                                    case "$":
                                        return "$";
                                    case "&":
                                        return s;
                                    case "`":
                                        return i.slice(0, o);
                                    case "'":
                                        return i.slice(_);
                                    case "<":
                                        n = u[t.slice(1, -1)];
                                        break;
                                    default:
                                        var a = +t;
                                        if (0 == a) return e;
                                        if (l < a) {
                                            var r = P(a / 10);
                                            return 0 === r ? e : r <= l ? void 0 === d[r - 1] ? t.charAt(1) : d[r - 1] + t.charAt(1) : e
                                        }
                                        n = d[a - 1]
                                }
                                return void 0 === n ? "" : n
                            })
                        }(f, r, h, M, L, t);
                    c <= h && (l += r.slice(c, h) + v, c = h + f.length)
                }
                return l + r.slice(c)
            }]
        })
    }, function (e, t, n) {
        var a = n(5),
            r = n(2),
            s = n(76);
        e.exports = !a && !r(function () {
            return 7 != Object.defineProperty(s("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (e, t, n) {
        var a = n(4),
            r = n(9),
            s = a.document,
            i = r(s) && r(s.createElement);
        e.exports = function (e) {
            return i ? s.createElement(e) : {}
        }
    }, function (e, t, n) {
        var a = n(78),
            r = Function.toString;
        "function" != typeof a.inspectSource && (a.inspectSource = function (e) {
            return r.call(e)
        }), e.exports = a.inspectSource
    }, function (e, t, n) {
        var a = n(4),
            r = n(51),
            s = "__core-js_shared__",
            i = a[s] || r(s, {});
        e.exports = i
    }, function (e, t, n) {
        var o = n(6),
            d = n(80),
            u = n(16),
            _ = n(7);
        e.exports = function (e, t) {
            for (var n = d(t), a = _.f, r = u.f, s = 0; s < n.length; s++) {
                var i = n[s];
                o(e, i) || a(e, i, r(t, i))
            }
        }
    }, function (e, t, n) {
        var a = n(26),
            r = n(27),
            s = n(56),
            i = n(8);
        e.exports = a("Reflect", "ownKeys") || function (e) {
            var t = r.f(i(e)),
                n = s.f;
            return n ? t.concat(n(e)) : t
        }
    }, function (e, t, n) {
        var a = n(4);
        e.exports = a
    }, function (e, t, n) {
        var i = n(6),
            o = n(12),
            d = n(83).indexOf,
            u = n(37);
        e.exports = function (e, t) {
            var n, a = o(e),
                r = 0,
                s = [];
            for (n in a) !i(u, n) && i(a, n) && s.push(n);
            for (; t.length > r;) i(a, n = t[r++]) && (~d(s, n) || s.push(n));
            return s
        }
    }, function (e, t, n) {
        function a(o) {
            return function (e, t, n) {
                var a, r = d(e),
                    s = u(r.length),
                    i = _(n, s);
                if (o && t != t) {
                    for (; i < s;)
                        if ((a = r[i++]) != a) return !0
                } else
                    for (; i < s; i++)
                        if ((o || i in r) && r[i] === t) return o || i || 0;
                return !o && -1
            }
        }

        var d = n(12),
            u = n(11),
            _ = n(54);
        e.exports = {
            includes: a(!0),
            indexOf: a(!1)
        }
    }, function (e, t, n) {
        var a = n(58);
        e.exports = a && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }, function (e, t, n) {
        var a = n(1);
        t.f = a
    }, function (e, t, n) {
        var a = n(81),
            r = n(6),
            s = n(85),
            i = n(7).f;
        e.exports = function (e) {
            var t = a.Symbol || (a.Symbol = {});
            r(t, e) || i(t, e, {
                value: s.f(e)
            })
        }
    }, function (e, t, n) {
        var s = n(88);
        e.exports = function (a, r, e) {
            if (s(a), void 0 === r) return a;
            switch (e) {
                case 0:
                    return function () {
                        return a.call(r)
                    };
                case 1:
                    return function (e) {
                        return a.call(r, e)
                    };
                case 2:
                    return function (e, t) {
                        return a.call(r, e, t)
                    };
                case 3:
                    return function (e, t, n) {
                        return a.call(r, e, t, n)
                    }
            }
            return function () {
                return a.apply(r, arguments)
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        }
    }, function (e, t, n) {
        var a, r, s = n(4),
            i = n(243),
            o = s.process,
            d = o && o.versions,
            u = d && d.v8;
        u ? r = (a = u.split("."))[0] + a[1] : i && (!(a = i.match(/Edge\/(\d+)/)) || 74 <= a[1]) && (a = i.match(/Chrome\/(\d+)/)) && (r = a[1]), e.exports = r && +r
    }, function (e, t, n) {
        var a = n(1),
            r = n(39),
            s = n(7),
            i = a("unscopables"),
            o = Array.prototype;
        null == o[i] && s.f(o, i, {
            configurable: !0,
            value: r(null)
        }), e.exports = function (e) {
            o[i][e] = !0
        }
    }, function (e, t, n) {
        "use strict";
        var a = n(29).forEach,
            r = n(92),
            s = n(17),
            i = r("forEach"),
            o = s("forEach");
        e.exports = i && o ? [].forEach : function (e, t) {
            return a(this, e, 1 < arguments.length ? t : void 0)
        }
    }, function (e, t, n) {
        "use strict";
        var a = n(2);
        e.exports = function (e, t) {
            var n = [][e];
            return !!n && a(function () {
                n.call(null, t || function () {
                    throw 1
                }, 1)
            })
        }
    }, function (e, t, n) {
        var a = n(63),
            r = n(19),
            s = n(1)("toStringTag"),
            i = "Arguments" == r(function () {
                return arguments
            }());
        e.exports = a ? r : function (e) {
            var t, n, a;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                try {
                    return e[t]
                } catch (e) {
                }
            }(t = Object(e), s)) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
        }
    }, function (e, t, n) {
        "use strict";

        function y() {
            return this
        }

        var p = n(3),
            L = n(250),
            v = n(96),
            Y = n(97),
            k = n(59),
            g = n(10),
            D = n(15),
            a = n(1),
            T = n(25),
            w = n(33),
            r = n(95),
            b = r.IteratorPrototype,
            S = r.BUGGY_SAFARI_ITERATORS,
            H = a("iterator"),
            j = "values",
            E = "entries";
        e.exports = function (e, t, n, a, r, s, i) {
            L(n, t, a);

            function o(e) {
                if (e === r && h) return h;
                if (!S && e in m) return m[e];
                switch (e) {
                    case "keys":
                    case j:
                    case E:
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this)
                }
            }

            var d, u, _, l = t + " Iterator",
                c = !1,
                m = e.prototype,
                f = m[H] || m["@@iterator"] || r && m[r],
                h = !S && f || o(r),
                M = "Array" == t && m.entries || f;
            if (M && (d = v(M.call(new e)), b !== Object.prototype && d.next && (T || v(d) === b || (Y ? Y(d, b) : "function" != typeof d[H] && g(d, H, y)), k(d, l, !0, !0), T && (w[l] = y))), r == j && f && f.name !== j && (c = !0, h = function () {
                return f.call(this)
            }), T && !i || m[H] === h || g(m, H, h), w[t] = h, r)
                if (u = {
                    values: o(j),
                    keys: s ? h : o("keys"),
                    entries: o(E)
                }, i)
                    for (_ in u) !S && !c && _ in m || D(m, _, u[_]);
                else p({
                    target: t,
                    proto: !0,
                    forced: S || c
                }, u);
            return u
        }
    }, function (e, t, n) {
        "use strict";
        var a, r, s, i = n(96),
            o = n(10),
            d = n(6),
            u = n(1),
            _ = n(25),
            l = u("iterator"),
            c = !1;
        [].keys && ("next" in (s = [].keys()) ? (r = i(i(s))) !== Object.prototype && (a = r) : c = !0), null == a && (a = {}), _ || d(a, l) || o(a, l, function () {
            return this
        }), e.exports = {
            IteratorPrototype: a,
            BUGGY_SAFARI_ITERATORS: c
        }
    }, function (e, t, n) {
        var a = n(6),
            r = n(13),
            s = n(36),
            i = n(251),
            o = s("IE_PROTO"),
            d = Object.prototype;
        e.exports = i ? Object.getPrototypeOf : function (e) {
            return e = r(e), a(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? d : null
        }
    }, function (e, t, n) {
        var r = n(8),
            s = n(252);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var n, a = !1,
                e = {};
            try {
                (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), a = e instanceof Array
            } catch (e) {
            }
            return function (e, t) {
                return r(e), s(t), a ? n.call(e, t) : e.__proto__ = t, e
            }
        }() : void 0)
    }, function (e, t, n) {
        var a = n(3),
            r = n(2),
            s = n(12),
            i = n(16).f,
            o = n(5),
            d = r(function () {
                i(1)
            });
        a({
            target: "Object",
            stat: !0,
            forced: !o || d,
            sham: !o
        }, {
            getOwnPropertyDescriptor: function (e, t) {
                return i(s(e), t)
            }
        })
    }, function (e, t, n) {
        var a = n(3),
            r = n(5),
            d = n(80),
            u = n(12),
            _ = n(16),
            l = n(31);
        a({
            target: "Object",
            stat: !0,
            sham: !r
        }, {
            getOwnPropertyDescriptors: function (e) {
                for (var t, n, a = u(e), r = _.f, s = d(a), i = {}, o = 0; s.length > o;) void 0 !== (n = r(a, t = s[o++])) && l(i, t, n);
                return i
            }
        })
    }, function (e, t, n) {
        "use strict";
        var a = n(2);

        function r(e, t) {
            return RegExp(e, t)
        }

        t.UNSUPPORTED_Y = a(function () {
            var e = r("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
        }), t.BROKEN_CARET = a(function () {
            var e = r("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
        })
    }, function (e, t, n) {
        function a(o) {
            return function (e, t) {
                var n, a, r = String(u(e)),
                    s = d(t),
                    i = r.length;
                return s < 0 || i <= s ? o ? "" : void 0 : (n = r.charCodeAt(s)) < 55296 || 56319 < n || s + 1 === i || (a = r.charCodeAt(s + 1)) < 56320 || 57343 < a ? o ? r.charAt(s) : n : o ? r.slice(s, s + 2) : a - 56320 + (n - 55296 << 10) + 65536
            }
        }

        var d = n(28),
            u = n(14);
        e.exports = {
            codeAt: a(!1),
            charAt: a(!0)
        }
    }, function (e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function (e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return n ? "vm" : "VM"
                    } else {
                        return n ? "nm" : "NM"
                    }
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[MÃ´re om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    ss: "%d sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "Ù¡",
                    2: "Ù¢",
                    3: "Ù£",
                    4: "Ù¤",
                    5: "Ù¥",
                    6: "Ù¦",
                    7: "Ù§",
                    8: "Ù¨",
                    9: "Ù©",
                    0: "Ù "
                },
                n = {
                    "Ù¡": "1",
                    "Ù¢": "2",
                    "Ù£": "3",
                    "Ù¤": "4",
                    "Ù¥": "5",
                    "Ù¦": "6",
                    "Ù§": "7",
                    "Ù¨": "8",
                    "Ù©": "9",
                    "Ù ": "0"
                },
                o = function (e) {
                    return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                },
                d = {
                    s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                    m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                    h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                    d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                    M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                    y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
                },
                a = function (i) {
                    return function (e, t, n, a) {
                        var r = o(e),
                            s = d[i][o(e)];
                        if (r === 2) {
                            s = s[t ? 0 : 1]
                        }
                        return s.replace(/%d/i, e)
                    }
                },
                r = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"],
                s;
            e.defineLocale("ar", {
                months: r,
                monthsShort: r,
                weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/â€M/â€YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /Øµ|Ù…/,
                isPM: function (e) {
                    return "Ù…" === e
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "Øµ"
                    } else {
                        return "Ù…"
                    }
                },
                calendar: {
                    sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ø¨Ø¹Ø¯ %s",
                    past: "Ù…Ù†Ø° %s",
                    s: a("s"),
                    ss: a("s"),
                    m: a("m"),
                    mm: a("m"),
                    h: a("h"),
                    hh: a("h"),
                    d: a("d"),
                    dd: a("d"),
                    M: a("M"),
                    MM: a("M"),
                    y: a("y"),
                    yy: a("y")
                },
                preparse: function (e) {
                    return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (e) {
                        return n[e]
                    }).replace(/ØŒ/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    }).replace(/,/g, "ØŒ")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var o = function (e) {
                    return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                },
                d = {
                    s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                    m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                    h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                    d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                    M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                    y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
                },
                t = function (i) {
                    return function (e, t, n, a) {
                        var r = o(e),
                            s = d[i][o(e)];
                        if (r === 2) {
                            s = s[t ? 0 : 1]
                        }
                        return s.replace(/%d/i, e)
                    }
                },
                n = ["Ø¬Ø§Ù†ÙÙŠ", "ÙÙŠÙØ±ÙŠ", "Ù…Ø§Ø±Ø³", "Ø£ÙØ±ÙŠÙ„", "Ù…Ø§ÙŠ", "Ø¬ÙˆØ§Ù†", "Ø¬ÙˆÙŠÙ„ÙŠØ©", "Ø£ÙˆØª", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"],
                a;
            e.defineLocale("ar-dz", {
                months: n,
                monthsShort: n,
                weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/â€M/â€YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /Øµ|Ù…/,
                isPM: function (e) {
                    return "Ù…" === e
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "Øµ"
                    } else {
                        return "Ù…"
                    }
                },
                calendar: {
                    sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ø¨Ø¹Ø¯ %s",
                    past: "Ù…Ù†Ø° %s",
                    s: t("s"),
                    ss: t("s"),
                    m: t("m"),
                    mm: t("m"),
                    h: t("h"),
                    hh: t("h"),
                    d: t("d"),
                    dd: t("d"),
                    M: t("M"),
                    MM: t("M"),
                    y: t("y"),
                    yy: t("y")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "ØŒ")
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ar-kw", {
                months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
                monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
                weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ÙÙŠ %s",
                    past: "Ù…Ù†Ø° %s",
                    s: "Ø«ÙˆØ§Ù†",
                    ss: "%d Ø«Ø§Ù†ÙŠØ©",
                    m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                    mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                    h: "Ø³Ø§Ø¹Ø©",
                    hh: "%d Ø³Ø§Ø¹Ø§Øª",
                    d: "ÙŠÙˆÙ…",
                    dd: "%d Ø£ÙŠØ§Ù…",
                    M: "Ø´Ù‡Ø±",
                    MM: "%d Ø£Ø´Ù‡Ø±",
                    y: "Ø³Ù†Ø©",
                    yy: "%d Ø³Ù†ÙˆØ§Øª"
                },
                week: {
                    dow: 0,
                    doy: 12
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    0: "0"
                },
                o = function (e) {
                    return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                },
                d = {
                    s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
                    m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
                    h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
                    d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
                    M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
                    y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
                },
                n = function (i) {
                    return function (e, t, n, a) {
                        var r = o(e),
                            s = d[i][o(e)];
                        if (r === 2) {
                            s = s[t ? 0 : 1]
                        }
                        return s.replace(/%d/i, e)
                    }
                },
                a = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"],
                r;
            e.defineLocale("ar-ly", {
                months: a,
                monthsShort: a,
                weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/â€M/â€YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /Øµ|Ù…/,
                isPM: function (e) {
                    return "Ù…" === e
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "Øµ"
                    } else {
                        return "Ù…"
                    }
                },
                calendar: {
                    sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ø¨Ø¹Ø¯ %s",
                    past: "Ù…Ù†Ø° %s",
                    s: n("s"),
                    ss: n("s"),
                    m: n("m"),
                    mm: n("m"),
                    h: n("h"),
                    hh: n("h"),
                    d: n("d"),
                    dd: n("d"),
                    M: n("M"),
                    MM: n("M"),
                    y: n("y"),
                    yy: n("y")
                },
                preparse: function (e) {
                    return e.replace(/ØŒ/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    }).replace(/,/g, "ØŒ")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ar-ma", {
                months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
                monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
                weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                weekdaysShort: "Ø§Ø­Ø¯_Ø§Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ÙÙŠ %s",
                    past: "Ù…Ù†Ø° %s",
                    s: "Ø«ÙˆØ§Ù†",
                    ss: "%d Ø«Ø§Ù†ÙŠØ©",
                    m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                    mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                    h: "Ø³Ø§Ø¹Ø©",
                    hh: "%d Ø³Ø§Ø¹Ø§Øª",
                    d: "ÙŠÙˆÙ…",
                    dd: "%d Ø£ÙŠØ§Ù…",
                    M: "Ø´Ù‡Ø±",
                    MM: "%d Ø£Ø´Ù‡Ø±",
                    y: "Ø³Ù†Ø©",
                    yy: "%d Ø³Ù†ÙˆØ§Øª"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "Ù¡",
                    2: "Ù¢",
                    3: "Ù£",
                    4: "Ù¤",
                    5: "Ù¥",
                    6: "Ù¦",
                    7: "Ù§",
                    8: "Ù¨",
                    9: "Ù©",
                    0: "Ù "
                },
                n = {
                    "Ù¡": "1",
                    "Ù¢": "2",
                    "Ù£": "3",
                    "Ù¤": "4",
                    "Ù¥": "5",
                    "Ù¦": "6",
                    "Ù§": "7",
                    "Ù¨": "8",
                    "Ù©": "9",
                    "Ù ": "0"
                },
                a;
            e.defineLocale("ar-sa", {
                months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
                monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
                weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /Øµ|Ù…/,
                isPM: function (e) {
                    return "Ù…" === e
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "Øµ"
                    } else {
                        return "Ù…"
                    }
                },
                calendar: {
                    sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ÙÙŠ %s",
                    past: "Ù…Ù†Ø° %s",
                    s: "Ø«ÙˆØ§Ù†",
                    ss: "%d Ø«Ø§Ù†ÙŠØ©",
                    m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                    mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                    h: "Ø³Ø§Ø¹Ø©",
                    hh: "%d Ø³Ø§Ø¹Ø§Øª",
                    d: "ÙŠÙˆÙ…",
                    dd: "%d Ø£ÙŠØ§Ù…",
                    M: "Ø´Ù‡Ø±",
                    MM: "%d Ø£Ø´Ù‡Ø±",
                    y: "Ø³Ù†Ø©",
                    yy: "%d Ø³Ù†ÙˆØ§Øª"
                },
                preparse: function (e) {
                    return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (e) {
                        return n[e]
                    }).replace(/ØŒ/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    }).replace(/,/g, "ØŒ")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ar-tn", {
                months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
                monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
                weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
                weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
                weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ÙÙŠ %s",
                    past: "Ù…Ù†Ø° %s",
                    s: "Ø«ÙˆØ§Ù†",
                    ss: "%d Ø«Ø§Ù†ÙŠØ©",
                    m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                    mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                    h: "Ø³Ø§Ø¹Ø©",
                    hh: "%d Ø³Ø§Ø¹Ø§Øª",
                    d: "ÙŠÙˆÙ…",
                    dd: "%d Ø£ÙŠØ§Ù…",
                    M: "Ø´Ù‡Ø±",
                    MM: "%d Ø£Ø´Ù‡Ø±",
                    y: "Ø³Ù†Ø©",
                    yy: "%d Ø³Ù†ÙˆØ§Øª"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var r = {
                    1: "-inci",
                    5: "-inci",
                    8: "-inci",
                    70: "-inci",
                    80: "-inci",
                    2: "-nci",
                    7: "-nci",
                    20: "-nci",
                    50: "-nci",
                    3: "-Ã¼ncÃ¼",
                    4: "-Ã¼ncÃ¼",
                    100: "-Ã¼ncÃ¼",
                    6: "-ncÄ±",
                    9: "-uncu",
                    10: "-uncu",
                    30: "-uncu",
                    60: "-Ä±ncÄ±",
                    90: "-Ä±ncÄ±"
                },
                t;
            e.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),
                weekdaysShort: "Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),
                weekdaysMin: "Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugÃ¼n saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",
                    lastDay: "[dÃ¼nÉ™n] LT",
                    lastWeek: "[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s É™vvÉ™l",
                    s: "birneÃ§É™ saniyÉ™",
                    ss: "%d saniyÉ™",
                    m: "bir dÉ™qiqÉ™",
                    mm: "%d dÉ™qiqÉ™",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gÃ¼n",
                    dd: "%d gÃ¼n",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
                isPM: function (e) {
                    return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(e)
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "gecÉ™"
                    } else if (e < 12) {
                        return "sÉ™hÉ™r"
                    } else if (e < 17) {
                        return "gÃ¼ndÃ¼z"
                    } else {
                        return "axÅŸam"
                    }
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
                ordinal: function (e) {
                    if (e === 0) {
                        return e + "-Ä±ncÄ±"
                    }
                    var t = e % 10,
                        n = e % 100 - t,
                        a = e >= 100 ? 100 : null;
                    return e + (r[t] || r[n] || r[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function r(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function t(e, t, n) {
                var a = {
                    ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
                    mm: t ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½",
                    hh: t ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½",
                    dd: "Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½",
                    MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž",
                    yy: "Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž"
                };
                if (n === "m") {
                    return t ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ"
                } else if (n === "h") {
                    return t ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ"
                } else {
                    return e + " " + r(a[n], +e)
                }
            }

            var n;
            e.defineLocale("be", {
                months: {
                    format: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ".split("_"),
                    standalone: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ".split("_")
                },
                monthsShort: "ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶".split("_"),
                weekdays: {
                    format: "Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
                    standalone: "Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                    isFormat: /\[ ?[Ð£ÑƒÑž] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/
                },
                weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
                weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY Ð³.",
                    LLL: "D MMMM YYYY Ð³., HH:mm",
                    LLLL: "dddd, D MMMM YYYY Ð³., HH:mm"
                },
                calendar: {
                    sameDay: "[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT",
                    nextDay: "[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT",
                    lastDay: "[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT",
                    nextWeek: function () {
                        return "[Ð£] dddd [Ñž] LT"
                    },
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ð¿Ñ€Ð°Ð· %s",
                    past: "%s Ñ‚Ð°Ð¼Ñƒ",
                    s: "Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "Ð´Ð·ÐµÐ½ÑŒ",
                    dd: t,
                    M: "Ð¼ÐµÑÑÑ†",
                    MM: t,
                    y: "Ð³Ð¾Ð´",
                    yy: t
                },
                meridiemParse: /Ð½Ð¾Ñ‡Ñ‹|Ñ€Ð°Ð½Ñ–Ñ†Ñ‹|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°/,
                isPM: function (e) {
                    return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°)$/.test(e)
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "Ð½Ð¾Ñ‡Ñ‹"
                    } else if (e < 12) {
                        return "Ñ€Ð°Ð½Ñ–Ñ†Ñ‹"
                    } else if (e < 17) {
                        return "Ð´Ð½Ñ"
                    } else {
                        return "Ð²ÐµÑ‡Ð°Ñ€Ð°"
                    }
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return (e % 10 === 2 || e % 10 === 3) && e % 100 !== 12 && e % 100 !== 13 ? e + "-Ñ–" : e + "-Ñ‹";
                        case "D":
                            return e + "-Ð³Ð°";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("bg", {
                months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
                monthsShort: "ÑÐ½Ñƒ_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
                weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),
                weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),
                weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Ð”Ð½ÐµÑ Ð²] LT",
                    nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT",
                    nextWeek: "dddd [Ð²] LT",
                    lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[ÐœÐ¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[ÐœÐ¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ÑÐ»ÐµÐ´ %s",
                    past: "Ð¿Ñ€ÐµÐ´Ð¸ %s",
                    s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                    ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
                    m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                    mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                    h: "Ñ‡Ð°Ñ",
                    hh: "%d Ñ‡Ð°ÑÐ°",
                    d: "Ð´ÐµÐ½",
                    dd: "%d Ð´ÐµÐ½Ð°",
                    M: "Ð¼ÐµÑÐµÑ†",
                    MM: "%d Ð¼ÐµÑÐµÑ†Ð°",
                    y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
                    yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = e % 100;
                    if (e === 0) {
                        return e + "-ÐµÐ²"
                    } else if (n === 0) {
                        return e + "-ÐµÐ½"
                    } else if (n > 10 && n < 20) {
                        return e + "-Ñ‚Ð¸"
                    } else if (t === 1) {
                        return e + "-Ð²Ð¸"
                    } else if (t === 2) {
                        return e + "-Ñ€Ð¸"
                    } else if (t === 7 || t === 8) {
                        return e + "-Ð¼Ð¸"
                    } else {
                        return e + "-Ñ‚Ð¸"
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("bm", {
                months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_MÉ›kalo_ZuwÉ›nkalo_Zuluyekalo_Utikalo_SÉ›tanburukalo_É”kutÉ”burukalo_Nowanburukalo_Desanburukalo".split("_"),
                monthsShort: "Zan_Few_Mar_Awi_MÉ›_Zuw_Zul_Uti_SÉ›t_É”ku_Now_Des".split("_"),
                weekdays: "Kari_NtÉ›nÉ›n_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
                weekdaysShort: "Kar_NtÉ›_Tar_Ara_Ala_Jum_Sib".split("_"),
                weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "MMMM [tile] D [san] YYYY",
                    LLL: "MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm",
                    LLLL: "dddd MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm"
                },
                calendar: {
                    sameDay: "[Bi lÉ›rÉ›] LT",
                    nextDay: "[Sini lÉ›rÉ›] LT",
                    nextWeek: "dddd [don lÉ›rÉ›] LT",
                    lastDay: "[Kunu lÉ›rÉ›] LT",
                    lastWeek: "dddd [tÉ›mÉ›nen lÉ›rÉ›] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s kÉ”nÉ”",
                    past: "a bÉ› %s bÉ”",
                    s: "sanga dama dama",
                    ss: "sekondi %d",
                    m: "miniti kelen",
                    mm: "miniti %d",
                    h: "lÉ›rÉ› kelen",
                    hh: "lÉ›rÉ› %d",
                    d: "tile kelen",
                    dd: "tile %d",
                    M: "kalo kelen",
                    MM: "kalo %d",
                    y: "san kelen",
                    yy: "san %d"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "à§§",
                    2: "à§¨",
                    3: "à§©",
                    4: "à§ª",
                    5: "à§«",
                    6: "à§¬",
                    7: "à§­",
                    8: "à§®",
                    9: "à§¯",
                    0: "à§¦"
                },
                n = {
                    "à§§": "1",
                    "à§¨": "2",
                    "à§©": "3",
                    "à§ª": "4",
                    "à§«": "5",
                    "à§¬": "6",
                    "à§­": "7",
                    "à§®": "8",
                    "à§¯": "9",
                    "à§¦": "0"
                },
                a;
            e.defineLocale("bn", {
                months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à¦¿_à¦«à§‡à¦¬à§à¦°à§à§Ÿà¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),
                monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬à§à¦°à§_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­à§‡_à¦¡à¦¿à¦¸à§‡".split("_"),
                weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),
                weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
                weekdaysMin: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
                longDateFormat: {
                    LT: "A h:mm à¦¸à¦®à§Ÿ",
                    LTS: "A h:mm:ss à¦¸à¦®à§Ÿ",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",
                    LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"
                },
                calendar: {
                    sameDay: "[à¦†à¦œ] LT",
                    nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT",
                    lastWeek: "[à¦—à¦¤] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s à¦ªà¦°à§‡",
                    past: "%s à¦†à¦—à§‡",
                    s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                    ss: "%d à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                    m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                    mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                    h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",
                    hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾",
                    d: "à¦à¦• à¦¦à¦¿à¦¨",
                    dd: "%d à¦¦à¦¿à¦¨",
                    M: "à¦à¦• à¦®à¦¾à¦¸",
                    MM: "%d à¦®à¦¾à¦¸",
                    y: "à¦à¦• à¦¬à¦›à¦°",
                    yy: "%d à¦¬à¦›à¦°"
                },
                preparse: function (e) {
                    return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à¦°à¦¾à¦¤" && e >= 4 || t === "à¦¦à§à¦ªà§à¦°" && e < 5 || t === "à¦¬à¦¿à¦•à¦¾à¦²") {
                        return e + 12
                    } else {
                        return e
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "à¦°à¦¾à¦¤"
                    } else if (e < 10) {
                        return "à¦¸à¦•à¦¾à¦²"
                    } else if (e < 17) {
                        return "à¦¦à§à¦ªà§à¦°"
                    } else if (e < 20) {
                        return "à¦¬à¦¿à¦•à¦¾à¦²"
                    } else {
                        return "à¦°à¦¾à¦¤"
                    }
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "à¼¡",
                    2: "à¼¢",
                    3: "à¼£",
                    4: "à¼¤",
                    5: "à¼¥",
                    6: "à¼¦",
                    7: "à¼§",
                    8: "à¼¨",
                    9: "à¼©",
                    0: "à¼ "
                },
                n = {
                    "à¼¡": "1",
                    "à¼¢": "2",
                    "à¼£": "3",
                    "à¼¤": "4",
                    "à¼¥": "5",
                    "à¼¦": "6",
                    "à¼§": "7",
                    "à¼¨": "8",
                    "à¼©": "9",
                    "à¼ ": "0"
                },
                a;
            e.defineLocale("bo", {
                months: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
                monthsShort: "à½Ÿà¾³à¼‹1_à½Ÿà¾³à¼‹2_à½Ÿà¾³à¼‹3_à½Ÿà¾³à¼‹4_à½Ÿà¾³à¼‹5_à½Ÿà¾³à¼‹6_à½Ÿà¾³à¼‹7_à½Ÿà¾³à¼‹8_à½Ÿà¾³à¼‹9_à½Ÿà¾³à¼‹10_à½Ÿà¾³à¼‹11_à½Ÿà¾³à¼‹12".split("_"),
                monthsShortRegex: /^(à½Ÿà¾³à¼‹\d{1,2})/,
                monthsParseExact: true,
                weekdays: "à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
                weekdaysShort: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
                weekdaysMin: "à½‰à½²_à½Ÿà¾³_à½˜à½²à½‚_à½£à¾·à½‚_à½•à½´à½¢_à½¦à½„à½¦_à½¦à¾¤à½ºà½“".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[à½‘à½²à¼‹à½¢à½²à½„] LT",
                    nextDay: "[à½¦à½„à¼‹à½‰à½²à½“] LT",
                    nextWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT",
                    lastDay: "[à½à¼‹à½¦à½„] LT",
                    lastWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s à½£à¼‹",
                    past: "%s à½¦à¾”à½“à¼‹à½£",
                    s: "à½£à½˜à¼‹à½¦à½„",
                    ss: "%d à½¦à¾à½¢à¼‹à½†à¼",
                    m: "à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚",
                    mm: "%d à½¦à¾à½¢à¼‹à½˜",
                    h: "à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚",
                    hh: "%d à½†à½´à¼‹à½šà½¼à½‘",
                    d: "à½‰à½²à½“à¼‹à½‚à½…à½²à½‚",
                    dd: "%d à½‰à½²à½“à¼‹",
                    M: "à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚",
                    MM: "%d à½Ÿà¾³à¼‹à½–",
                    y: "à½£à½¼à¼‹à½‚à½…à½²à½‚",
                    yy: "%d à½£à½¼"
                },
                preparse: function (e) {
                    return e.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /à½˜à½šà½“à¼‹à½˜à½¼|à½žà½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à½˜à½šà½“à¼‹à½˜à½¼" && e >= 4 || t === "à½‰à½²à½“à¼‹à½‚à½´à½„" && e < 5 || t === "à½‘à½‚à½¼à½„à¼‹à½‘à½‚") {
                        return e + 12
                    } else {
                        return e
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "à½˜à½šà½“à¼‹à½˜à½¼"
                    } else if (e < 10) {
                        return "à½žà½¼à½‚à½¦à¼‹à½€à½¦"
                    } else if (e < 17) {
                        return "à½‰à½²à½“à¼‹à½‚à½´à½„"
                    } else if (e < 20) {
                        return "à½‘à½‚à½¼à½„à¼‹à½‘à½‚"
                    } else {
                        return "à½˜à½šà½“à¼‹à½˜à½¼"
                    }
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n) {
                var a = {
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                };
                return e + " " + r(a[n], e)
            }

            function n(e) {
                switch (a(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }

            function a(e) {
                if (e > 9) {
                    return a(e % 10)
                }
                return e
            }

            function r(e, t) {
                if (t === 2) {
                    return s(e)
                }
                return e
            }

            function s(e) {
                var t = {
                    m: "v",
                    b: "v",
                    d: "z"
                };
                if (t[e.charAt(0)] === undefined) {
                    return e
                }
                return t[e.charAt(0)] + e.substring(1)
            }

            var i = [/^gen/i, /^c[Ê¼\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
                o = /^(genver|c[Ê¼\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[Ê¼\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
                d = /^(genver|c[Ê¼\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
                u = /^(gen|c[Ê¼\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
                _ = [/^sul/i, /^lun/i, /^meurzh/i, /^merc[Ê¼\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
                l = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
                c = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i],
                m;
            e.defineLocale("br", {
                months: "Genver_CÊ¼hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_CÊ¼hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_MercÊ¼her_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                weekdaysParse: c,
                fullWeekdaysParse: _,
                shortWeekdaysParse: l,
                minWeekdaysParse: c,
                monthsRegex: o,
                monthsShortRegex: o,
                monthsStrictRegex: d,
                monthsShortStrictRegex: u,
                monthsParse: i,
                longMonthsParse: i,
                shortMonthsParse: i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY HH:mm",
                    LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[WarcÊ¼hoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[DecÊ¼h da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s Ê¼zo",
                    s: "un nebeud segondennoÃ¹",
                    ss: "%d eilenn",
                    m: "ur vunutenn",
                    mm: t,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: t,
                    M: "ur miz",
                    MM: t,
                    y: "ur bloaz",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}(aÃ±|vet)/,
                ordinal: function (e) {
                    var t = e === 1 ? "aÃ±" : "vet";
                    return e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                },
                meridiemParse: /a.m.|g.m./,
                isPM: function (e) {
                    return e === "g.m."
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "a.m." : "g.m."
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "ss":
                        if (e === 1) {
                            a += "sekunda"
                        } else if (e === 2 || e === 3 || e === 4) {
                            a += "sekunde"
                        } else {
                            a += "sekundi"
                        }
                        return a;
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        if (e === 1) {
                            a += "minuta"
                        } else if (e === 2 || e === 3 || e === 4) {
                            a += "minute"
                        } else {
                            a += "minuta"
                        }
                        return a;
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        if (e === 1) {
                            a += "sat"
                        } else if (e === 2 || e === 3 || e === 4) {
                            a += "sata"
                        } else {
                            a += "sati"
                        }
                        return a;
                    case "dd":
                        if (e === 1) {
                            a += "dan"
                        } else {
                            a += "dana"
                        }
                        return a;
                    case "MM":
                        if (e === 1) {
                            a += "mjesec"
                        } else if (e === 2 || e === 3 || e === 4) {
                            a += "mjeseca"
                        } else {
                            a += "mjeseci"
                        }
                        return a;
                    case "yy":
                        if (e === 1) {
                            a += "godina"
                        } else if (e === 2 || e === 3 || e === 4) {
                            a += "godine"
                        } else {
                            a += "godina"
                        }
                        return a
                }
            }

            var n;
            e.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                monthsParseExact: true,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juÄer u] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[proÅ¡lu] dddd [u] LT";
                            case 6:
                                return "[proÅ¡le] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[proÅ¡li] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ca", {
                months: {
                    standalone: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    format: "de gener_de febrer_de marÃ§_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._marÃ§_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: true,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a les] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[avui a " + (this.hours() !== 1 ? "les" : "la") + "] LT"
                    },
                    nextDay: function () {
                        return "[demÃ  a " + (this.hours() !== 1 ? "les" : "la") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [a " + (this.hours() !== 1 ? "les" : "la") + "] LT"
                    },
                    lastDay: function () {
                        return "[ahir a " + (this.hours() !== 1 ? "les" : "la") + "] LT"
                    },
                    lastWeek: function () {
                        return "[el] dddd [passat a " + (this.hours() !== 1 ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquÃ­ %s",
                    past: "fa %s",
                    s: "uns segons",
                    ss: "%d segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
                ordinal: function (e, t) {
                    var n = e === 1 ? "r" : e === 2 ? "n" : e === 3 ? "r" : e === 4 ? "t" : "Ã¨";
                    if (t === "w" || t === "W") {
                        n = "a"
                    }
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
                n = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
                a = [/^led/i, /^Ãºno/i, /^bÅ™e/i, /^dub/i, /^kvÄ›/i, /^(Ävn|Äerven$|Äervna)/i, /^(Ävc|Äervenec|Äervence)/i, /^srp/i, /^zÃ¡Å™/i, /^Å™Ã­j/i, /^lis/i, /^pro/i],
                r = /^(leden|Ãºnor|bÅ™ezen|duben|kvÄ›ten|Äervenec|Äervence|Äerven|Äervna|srpen|zÃ¡Å™Ã­|Å™Ã­jen|listopad|prosinec|led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i,
                s;

            function i(e) {
                return e > 1 && e < 5 && ~~(e / 10) !== 1
            }

            function o(e, t, n, a) {
                var r = e + " ";
                switch (n) {
                    case "s":
                        return t || a ? "pÃ¡r sekund" : "pÃ¡r sekundami";
                    case "ss":
                        if (t || a) {
                            return r + (i(e) ? "sekundy" : "sekund")
                        } else {
                            return r + "sekundami"
                        }
                    case "m":
                        return t ? "minuta" : a ? "minutu" : "minutou";
                    case "mm":
                        if (t || a) {
                            return r + (i(e) ? "minuty" : "minut")
                        } else {
                            return r + "minutami"
                        }
                    case "h":
                        return t ? "hodina" : a ? "hodinu" : "hodinou";
                    case "hh":
                        if (t || a) {
                            return r + (i(e) ? "hodiny" : "hodin")
                        } else {
                            return r + "hodinami"
                        }
                    case "d":
                        return t || a ? "den" : "dnem";
                    case "dd":
                        if (t || a) {
                            return r + (i(e) ? "dny" : "dnÃ­")
                        } else {
                            return r + "dny"
                        }
                    case "M":
                        return t || a ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
                    case "MM":
                        if (t || a) {
                            return r + (i(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯")
                        } else {
                            return r + "mÄ›sÃ­ci"
                        }
                    case "y":
                        return t || a ? "rok" : "rokem";
                    case "yy":
                        if (t || a) {
                            return r + (i(e) ? "roky" : "let")
                        } else {
                            return r + "lety"
                        }
                }
            }

            e.defineLocale("cs", {
                months: t,
                monthsShort: n,
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(leden|ledna|Ãºnora|Ãºnor|bÅ™ezen|bÅ™ezna|duben|dubna|kvÄ›ten|kvÄ›tna|Äervenec|Äervence|Äerven|Äervna|srpen|srpna|zÃ¡Å™Ã­|Å™Ã­jen|Å™Ã­jna|listopadu|listopad|prosinec|prosince)/i,
                monthsShortStrictRegex: /^(led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
                weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
                weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zÃ­tra v] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v nedÄ›li v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve stÅ™edu v] LT";
                            case 4:
                                return "[ve Ätvrtek v] LT";
                            case 5:
                                return "[v pÃ¡tek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[vÄera v] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[minulou nedÄ›li v] LT";
                            case 1:
                            case 2:
                                return "[minulÃ©] dddd [v] LT";
                            case 3:
                                return "[minulou stÅ™edu v] LT";
                            case 4:
                            case 5:
                                return "[minulÃ½] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pÅ™ed %s",
                    s: o,
                    ss: o,
                    m: o,
                    mm: o,
                    h: o,
                    hh: o,
                    d: o,
                    dd: o,
                    M: o,
                    MM: o,
                    y: o,
                    yy: o
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("cv", {
                months: "ÐºÓ‘Ñ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€Ó‘Ñ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ð»Ð°_Ð°Ð²Ó‘Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"),
                monthsShort: "ÐºÓ‘Ñ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ð°Ð²Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"),
                weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÓ—Ò«Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÓ‘Ð¼Ð°Ñ‚ÐºÑƒÐ½".split("_"),
                weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÓ—Ò«_ÑÑ€Ð½_ÑˆÓ‘Ð¼".split("_"),
                weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÒ«_ÑÑ€_ÑˆÐ¼".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—]",
                    LLL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm",
                    LLLL: "dddd, YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm"
                },
                calendar: {
                    sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                    nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                    lastDay: "[Ó–Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                    nextWeek: "[ÒªÐ¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                    lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ó—] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (e) {
                        var t = /ÑÐµÑ…ÐµÑ‚$/i.exec(e) ? "Ñ€ÐµÐ½" : /Ò«ÑƒÐ»$/i.exec(e) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½";
                        return e + t
                    },
                    past: "%s ÐºÐ°ÑÐ»Ð»Ð°",
                    s: "Ð¿Ó—Ñ€-Ð¸Ðº Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
                    ss: "%d Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
                    m: "Ð¿Ó—Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
                    mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
                    h: "Ð¿Ó—Ñ€ ÑÐµÑ…ÐµÑ‚",
                    hh: "%d ÑÐµÑ…ÐµÑ‚",
                    d: "Ð¿Ó—Ñ€ ÐºÑƒÐ½",
                    dd: "%d ÐºÑƒÐ½",
                    M: "Ð¿Ó—Ñ€ ÑƒÐ¹Ó‘Ñ…",
                    MM: "%d ÑƒÐ¹Ó‘Ñ…",
                    y: "Ð¿Ó—Ñ€ Ò«ÑƒÐ»",
                    yy: "%d Ò«ÑƒÐ»"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-Ð¼Ó—Ñˆ/,
                ordinal: "%d-Ð¼Ó—Ñˆ",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn Ã´l",
                    s: "ychydig eiliadau",
                    ss: "%d eiliad",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function (e) {
                    var t = e,
                        n = "",
                        a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                    if (t > 20) {
                        if (t === 40 || t === 50 || t === 60 || t === 80 || t === 100) {
                            n = "fed"
                        } else {
                            n = "ain"
                        }
                    } else if (t > 0) {
                        n = a[t]
                    }
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
                weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
                weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "pÃ¥ dddd [kl.] LT",
                    lastDay: "[i gÃ¥r kl.] LT",
                    lastWeek: "[i] dddd[s kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "fÃ¥ sekunder",
                    ss: "%d sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en mÃ¥ned",
                    MM: "%d mÃ¥neder",
                    y: "et Ã¥r",
                    yy: "%d Ã¥r"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }

            var n;
            e.defineLocale("de", {
                months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: true,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    w: t,
                    ww: "%d Wochen",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }

            var n;
            e.defineLocale("de-at", {
                months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "JÃ¤n._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: true,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    w: t,
                    ww: "%d Wochen",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }

            var n;
            e.defineLocale("de-ch", {
                months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: true,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    w: t,
                    ww: "%d Wochen",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = ["Þ–Þ¬Þ‚ÞªÞ‡Þ¦ÞƒÞ©", "ÞŠÞ¬Þ„Þ°ÞƒÞªÞ‡Þ¦ÞƒÞ©", "Þ‰Þ§ÞƒÞ¨Þ—Þª", "Þ‡Þ­Þ•Þ°ÞƒÞ©ÞÞª", "Þ‰Þ­", "Þ–Þ«Þ‚Þ°", "Þ–ÞªÞÞ¦Þ‡Þ¨", "Þ‡Þ¯ÞŽÞ¦ÞÞ°Þ“Þª", "ÞÞ¬Þ•Þ°Þ“Þ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‡Þ®Þ†Þ°Þ“Þ¯Þ„Þ¦ÞƒÞª", "Þ‚Þ®ÞˆÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‘Þ¨ÞÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª"],
                n = ["Þ‡Þ§Þ‹Þ¨Þ‡Þ°ÞŒÞ¦", "Þ€Þ¯Þ‰Þ¦", "Þ‡Þ¦Þ‚Þ°ÞŽÞ§ÞƒÞ¦", "Þ„ÞªÞ‹Þ¦", "Þ„ÞªÞƒÞ§ÞÞ°ÞŠÞ¦ÞŒÞ¨", "Þ€ÞªÞ†ÞªÞƒÞª", "Þ€Þ®Þ‚Þ¨Þ€Þ¨ÞƒÞª"],
                a;
            e.defineLocale("dv", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: "Þ‡Þ§Þ‹Þ¨_Þ€Þ¯Þ‰Þ¦_Þ‡Þ¦Þ‚Þ°_Þ„ÞªÞ‹Þ¦_Þ„ÞªÞƒÞ§_Þ€ÞªÞ†Þª_Þ€Þ®Þ‚Þ¨".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /Þ‰Þ†|Þ‰ÞŠ/,
                isPM: function (e) {
                    return "Þ‰ÞŠ" === e
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "Þ‰Þ†"
                    } else {
                        return "Þ‰ÞŠ"
                    }
                },
                calendar: {
                    sameDay: "[Þ‰Þ¨Þ‡Þ¦Þ‹Þª] LT",
                    nextDay: "[Þ‰Þ§Þ‹Þ¦Þ‰Þ§] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Þ‡Þ¨Þ‡Þ°Þ”Þ¬] LT",
                    lastWeek: "[ÞŠÞ§Þ‡Þ¨ÞŒÞªÞˆÞ¨] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ÞŒÞ¬ÞƒÞ­ÞŽÞ¦Þ‡Þ¨ %s",
                    past: "Þ†ÞªÞƒÞ¨Þ‚Þ° %s",
                    s: "ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞªÞ†Þ®Þ…Þ¬Þ‡Þ°",
                    ss: "d% ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞª",
                    m: "Þ‰Þ¨Þ‚Þ¨Þ“Þ¬Þ‡Þ°",
                    mm: "Þ‰Þ¨Þ‚Þ¨Þ“Þª %d",
                    h: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞ¬Þ‡Þ°",
                    hh: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞª %d",
                    d: "Þ‹ÞªÞˆÞ¦Þ€Þ¬Þ‡Þ°",
                    dd: "Þ‹ÞªÞˆÞ¦ÞÞ° %d",
                    M: "Þ‰Þ¦Þ€Þ¬Þ‡Þ°",
                    MM: "Þ‰Þ¦ÞÞ° %d",
                    y: "Þ‡Þ¦Þ€Þ¦ÞƒÞ¬Þ‡Þ°",
                    yy: "Þ‡Þ¦Þ€Þ¦ÞƒÞª %d"
                },
                preparse: function (e) {
                    return e.replace(/ØŒ/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "ØŒ")
                },
                week: {
                    dow: 7,
                    doy: 12
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function r(e) {
                return typeof Function !== "undefined" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
            }

            var t;
            e.defineLocale("el", {
                monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),
                monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),
                months: function (e, t) {
                    if (!e) {
                        return this._monthsNominativeEl
                    } else if (typeof t === "string" && /D/.test(t.substring(0, t.indexOf("MMMM")))) {
                        return this._monthsGenitiveEl[e.month()]
                    } else {
                        return this._monthsNominativeEl[e.month()]
                    }
                },
                monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),
                weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),
                weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),
                weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),
                meridiem: function (e, t, n) {
                    if (e > 11) {
                        return n ? "Î¼Î¼" : "ÎœÎœ"
                    } else {
                        return n ? "Ï€Î¼" : "Î Îœ"
                    }
                },
                isPM: function (e) {
                    return (e + "").toLowerCase()[0] === "Î¼"
                },
                meridiemParse: /[Î Îœ]\.?Îœ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT",
                    nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Î§Î¸ÎµÏ‚ {}] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 6:
                                return "[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";
                            default:
                                return "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar: function (e, t) {
                    var n = this._calendarEl[e],
                        a = t && t.hours();
                    if (r(n)) {
                        n = n.apply(t)
                    }
                    return n.replace("{}", a % 12 === 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
                },
                relativeTime: {
                    future: "ÏƒÎµ %s",
                    past: "%s Ï€ÏÎ¹Î½",
                    s: "Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
                    ss: "%d Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
                    m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",
                    mm: "%d Î»ÎµÏ€Ï„Î¬",
                    h: "Î¼Î¯Î± ÏŽÏÎ±",
                    hh: "%d ÏŽÏÎµÏ‚",
                    d: "Î¼Î¯Î± Î¼Î­ÏÎ±",
                    dd: "%d Î¼Î­ÏÎµÏ‚",
                    M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚",
                    MM: "%d Î¼Î®Î½ÎµÏ‚",
                    y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",
                    yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Î·/,
                ordinal: "%dÎ·",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("en-il", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("en-in", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("en-sg", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mart_apr_maj_jun_jul_aÅ­g_sept_okt_nov_dec".split("_"),
                weekdays: "dimanÄ‰o_lundo_mardo_merkredo_ÄµaÅ­do_vendredo_sabato".split("_"),
                weekdaysShort: "dim_lun_mard_merk_ÄµaÅ­_ven_sab".split("_"),
                weekdaysMin: "di_lu_ma_me_Äµa_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "[la] D[-an de] MMMM, YYYY",
                    LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                    LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                    llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function (e) {
                    return e.charAt(0).toLowerCase() === "p"
                },
                meridiem: function (e, t, n) {
                    if (e > 11) {
                        return n ? "p.t.m." : "P.T.M."
                    } else {
                        return n ? "a.t.m." : "A.T.M."
                    }
                },
                calendar: {
                    sameDay: "[HodiaÅ­ je] LT",
                    nextDay: "[MorgaÅ­ je] LT",
                    nextWeek: "dddd[n je] LT",
                    lastDay: "[HieraÅ­ je] LT",
                    lastWeek: "[pasintan] dddd[n je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "post %s",
                    past: "antaÅ­ %s",
                    s: "kelkaj sekundoj",
                    ss: "%d sekundoj",
                    m: "unu minuto",
                    mm: "%d minutoj",
                    h: "unu horo",
                    hh: "%d horoj",
                    d: "unu tago",
                    dd: "%d tagoj",
                    M: "unu monato",
                    MM: "%d monatoj",
                    y: "unu jaro",
                    yy: "%d jaroj"
                },
                dayOfMonthOrdinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var n = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                s;
            e.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (e, t) {
                    if (!e) {
                        return n
                    } else if (/-MMM-/.test(t)) {
                        return a[e.month()]
                    } else {
                        return n[e.month()]
                    }
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: t,
                longMonthsParse: t,
                shortMonthsParse: t,
                weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
                weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    nextDay: function () {
                        return "[maÃ±ana a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    lastDay: function () {
                        return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    lastWeek: function () {
                        return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un dÃ­a",
                    dd: "%d dÃ­as",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un aÃ±o",
                    yy: "%d aÃ±os"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 4
                },
                invalidDate: "Fecha invalida"
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var n = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                s;
            e.defineLocale("es-do", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (e, t) {
                    if (!e) {
                        return n
                    } else if (/-MMM-/.test(t)) {
                        return a[e.month()]
                    } else {
                        return n[e.month()]
                    }
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: t,
                longMonthsParse: t,
                shortMonthsParse: t,
                weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
                weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    nextDay: function () {
                        return "[maÃ±ana a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    lastDay: function () {
                        return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    lastWeek: function () {
                        return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un dÃ­a",
                    dd: "%d dÃ­as",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un aÃ±o",
                    yy: "%d aÃ±os"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var n = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                s;
            e.defineLocale("es-us", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (e, t) {
                    if (!e) {
                        return n
                    } else if (/-MMM-/.test(t)) {
                        return a[e.month()]
                    } else {
                        return n[e.month()]
                    }
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: t,
                longMonthsParse: t,
                shortMonthsParse: t,
                weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
                weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "MM/DD/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    nextDay: function () {
                        return "[maÃ±ana a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    lastDay: function () {
                        return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    lastWeek: function () {
                        return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un dÃ­a",
                    dd: "%d dÃ­as",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un aÃ±o",
                    yy: "%d aÃ±os"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n, a) {
                var r = {
                    s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"],
                    ss: [e + "sekundi", e + "sekundit"],
                    m: ["Ã¼he minuti", "Ã¼ks minut"],
                    mm: [e + " minuti", e + " minutit"],
                    h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"],
                    hh: [e + " tunni", e + " tundi"],
                    d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"],
                    M: ["kuu aja", "kuu aega", "Ã¼ks kuu"],
                    MM: [e + " kuu", e + " kuud"],
                    y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"],
                    yy: [e + " aasta", e + " aastat"]
                };
                if (t) {
                    return r[n][2] ? r[n][2] : r[n][1]
                }
                return a ? r[n][0] : r[n][1]
            }

            var n;
            e.defineLocale("et", {
                months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[TÃ¤na,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[JÃ¤rgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pÃ¤rast",
                    past: "%s tagasi",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: "%d pÃ¤eva",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: true,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    ss: "%d segundo",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "Û±",
                    2: "Û²",
                    3: "Û³",
                    4: "Û´",
                    5: "Ûµ",
                    6: "Û¶",
                    7: "Û·",
                    8: "Û¸",
                    9: "Û¹",
                    0: "Û°"
                },
                n = {
                    "Û±": "1",
                    "Û²": "2",
                    "Û³": "3",
                    "Û´": "4",
                    "Ûµ": "5",
                    "Û¶": "6",
                    "Û·": "7",
                    "Û¸": "8",
                    "Û¹": "9",
                    "Û°": "0"
                },
                a;
            e.defineLocale("fa", {
                months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
                monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
                weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
                weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
                weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/,
                isPM: function (e) {
                    return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(e)
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±"
                    } else {
                        return "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"
                    }
                },
                calendar: {
                    sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                    nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",
                    nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT",
                    lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                    lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ø¯Ø± %s",
                    past: "%s Ù¾ÛŒØ´",
                    s: "Ú†Ù†Ø¯ Ø«Ø§Ù†ÛŒÙ‡",
                    ss: "%d Ø«Ø§Ù†ÛŒÙ‡",
                    m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",
                    mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡",
                    h: "ÛŒÚ© Ø³Ø§Ø¹Øª",
                    hh: "%d Ø³Ø§Ø¹Øª",
                    d: "ÛŒÚ© Ø±ÙˆØ²",
                    dd: "%d Ø±ÙˆØ²",
                    M: "ÛŒÚ© Ù…Ø§Ù‡",
                    MM: "%d Ù…Ø§Ù‡",
                    y: "ÛŒÚ© Ø³Ø§Ù„",
                    yy: "%d Ø³Ø§Ù„"
                },
                preparse: function (e) {
                    return e.replace(/[Û°-Û¹]/g, function (e) {
                        return n[e]
                    }).replace(/ØŒ/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    }).replace(/,/g, "ØŒ")
                },
                dayOfMonthOrdinalParse: /\d{1,2}Ù…/,
                ordinal: "%dÙ…",
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var n = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "),
                a = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", n[7], n[8], n[9]],
                t;

            function r(e, t, n, a) {
                var r = "";
                switch (n) {
                    case "s":
                        return a ? "muutaman sekunnin" : "muutama sekunti";
                    case "ss":
                        r = a ? "sekunnin" : "sekuntia";
                        break;
                    case "m":
                        return a ? "minuutin" : "minuutti";
                    case "mm":
                        r = a ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return a ? "tunnin" : "tunti";
                    case "hh":
                        r = a ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return a ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
                    case "dd":
                        r = a ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
                        break;
                    case "M":
                        return a ? "kuukauden" : "kuukausi";
                    case "MM":
                        r = a ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return a ? "vuoden" : "vuosi";
                    case "yy":
                        r = a ? "vuoden" : "vuotta";
                        break
                }
                r = s(e, a) + " " + r;
                return r
            }

            function s(e, t) {
                return e < 10 ? t ? a[e] : n[e] : e
            }

            e.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pÃ¤Ã¤stÃ¤",
                    past: "%s sitten",
                    s: r,
                    ss: r,
                    m: r,
                    mm: r,
                    h: r,
                    hh: r,
                    d: r,
                    dd: r,
                    M: r,
                    MM: r,
                    y: r,
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("fil", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function (e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("fo", {
                months: "januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"),
                weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ã dag kl.] LT",
                    nextDay: "[Ã morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Ã gjÃ¡r kl.] LT",
                    lastWeek: "[sÃ­Ã°stu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s sÃ­Ã°ani",
                    s: "fÃ¡ sekund",
                    ss: "%d sekundir",
                    m: "ein minuttur",
                    mm: "%d minuttir",
                    h: "ein tÃ­mi",
                    hh: "%d tÃ­mar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mÃ¡naÃ°ur",
                    MM: "%d mÃ¡naÃ°ir",
                    y: "eitt Ã¡r",
                    yy: "%d Ã¡r"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = /^(janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
                n = /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?)/i,
                a = /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?|janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
                r = [/^janv/i, /^fÃ©vr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^aoÃ»t/i, /^sept/i, /^oct/i, /^nov/i, /^dÃ©c/i],
                s;
            e.defineLocale("fr", {
                months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
                monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
                monthsRegex: a,
                monthsShortRegex: a,
                monthsStrictRegex: t,
                monthsShortStrictRegex: n,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourdâ€™hui Ã ] LT",
                    nextDay: "[Demain Ã ] LT",
                    nextWeek: "dddd [Ã ] LT",
                    lastDay: "[Hier Ã ] LT",
                    lastWeek: "dddd [dernier Ã ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "D":
                            return e + (e === 1 ? "er" : "");
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                            return e + (e === 1 ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (e === 1 ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("fr-ca", {
                months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
                monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
                monthsParseExact: true,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourdâ€™hui Ã ] LT",
                    nextDay: "[Demain Ã ] LT",
                    nextWeek: "dddd [Ã ] LT",
                    lastDay: "[Hier Ã ] LT",
                    lastWeek: "dddd [dernier Ã ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function (e, t) {
                    switch (t) {
                        default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                            return e + (e === 1 ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (e === 1 ? "re" : "e")
                    }
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("fr-ch", {
                months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
                monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
                monthsParseExact: true,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourdâ€™hui Ã ] LT",
                    nextDay: "[Demain Ã ] LT",
                    nextWeek: "dddd [Ã ] LT",
                    lastDay: "[Hier Ã ] LT",
                    lastWeek: "dddd [dernier Ã ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function (e, t) {
                    switch (t) {
                        default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                            return e + (e === 1 ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (e === 1 ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var n = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                t;
            e.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function (e, t) {
                    if (!e) {
                        return n
                    } else if (/-MMM-/.test(t)) {
                        return a[e.month()]
                    } else {
                        return n[e.month()]
                    }
                },
                monthsParseExact: true,
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[Ã´frÃ»ne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    ss: "%d sekonden",
                    m: "ien minÃºt",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = ["EanÃ¡ir", "Feabhra", "MÃ¡rta", "AibreÃ¡n", "Bealtaine", "Meitheamh", "IÃºil", "LÃºnasa", "MeÃ¡n FÃ³mhair", "Deireadh FÃ³mhair", "Samhain", "Nollaig"],
                n = ["Ean", "Feabh", "MÃ¡rt", "Aib", "Beal", "Meith", "IÃºil", "LÃºn", "M.F.", "D.F.", "Samh", "Noll"],
                a = ["DÃ© Domhnaigh", "DÃ© Luain", "DÃ© MÃ¡irt", "DÃ© CÃ©adaoin", "DÃ©ardaoin", "DÃ© hAoine", "DÃ© Sathairn"],
                r = ["Domh", "Luan", "MÃ¡irt", "CÃ©ad", "DÃ©ar", "Aoine", "Sath"],
                s = ["Do", "Lu", "MÃ¡", "CÃ©", "DÃ©", "A", "Sa"],
                i;
            e.defineLocale("ga", {
                months: t,
                monthsShort: n,
                monthsParseExact: true,
                weekdays: a,
                weekdaysShort: r,
                weekdaysMin: s,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Inniu ag] LT",
                    nextDay: "[AmÃ¡rach ag] LT",
                    nextWeek: "dddd [ag] LT",
                    lastDay: "[InnÃ© ag] LT",
                    lastWeek: "dddd [seo caite] [ag] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i %s",
                    past: "%s Ã³ shin",
                    s: "cÃºpla soicind",
                    ss: "%d soicind",
                    m: "nÃ³imÃ©ad",
                    mm: "%d nÃ³imÃ©ad",
                    h: "uair an chloig",
                    hh: "%d uair an chloig",
                    d: "lÃ¡",
                    dd: "%d lÃ¡",
                    M: "mÃ­",
                    MM: "%d mÃ­onna",
                    y: "bliain",
                    yy: "%d bliain"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function (e) {
                    var t = e === 1 ? "d" : e % 10 === 2 ? "na" : "mh";
                    return e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = ["Am Faoilleach", "An Gearran", "Am MÃ rt", "An Giblean", "An CÃ¨itean", "An t-Ã’gmhios", "An t-Iuchar", "An LÃ¹nastal", "An t-Sultain", "An DÃ mhair", "An t-Samhain", "An DÃ¹bhlachd"],
                n = ["Faoi", "Gear", "MÃ rt", "Gibl", "CÃ¨it", "Ã’gmh", "Iuch", "LÃ¹n", "Sult", "DÃ mh", "Samh", "DÃ¹bh"],
                a = ["DidÃ²mhnaich", "Diluain", "DimÃ irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
                r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
                s = ["DÃ²", "Lu", "MÃ ", "Ci", "Ar", "Ha", "Sa"],
                i;
            e.defineLocale("gd", {
                months: t,
                monthsShort: n,
                monthsParseExact: true,
                weekdays: a,
                weekdaysShort: r,
                weekdaysMin: s,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-mÃ ireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-dÃ¨ aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    ss: "%d diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "mÃ¬os",
                    MM: "%d mÃ¬osan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function (e) {
                    var t = e === 1 ? "d" : e % 10 === 2 ? "na" : "mh";
                    return e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("gl", {
                months: "xaneiro_febreiro_marzo_abril_maio_xuÃ±o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                monthsShort: "xan._feb._mar._abr._mai._xuÃ±._xul._ago._set._out._nov._dec.".split("_"),
                monthsParseExact: true,
                weekdays: "domingo_luns_martes_mÃ©rcores_xoves_venres_sÃ¡bado".split("_"),
                weekdaysShort: "dom._lun._mar._mÃ©r._xov._ven._sÃ¡b.".split("_"),
                weekdaysMin: "do_lu_ma_mÃ©_xo_ve_sÃ¡".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoxe " + (this.hours() !== 1 ? "Ã¡s" : "Ã¡") + "] LT"
                    },
                    nextDay: function () {
                        return "[maÃ±Ã¡ " + (this.hours() !== 1 ? "Ã¡s" : "Ã¡") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [" + (this.hours() !== 1 ? "Ã¡s" : "a") + "] LT"
                    },
                    lastDay: function () {
                        return "[onte " + (this.hours() !== 1 ? "Ã¡" : "a") + "] LT"
                    },
                    lastWeek: function () {
                        return "[o] dddd [pasado " + (this.hours() !== 1 ? "Ã¡s" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (e) {
                        if (e.indexOf("un") === 0) {
                            return "n" + e
                        }
                        return "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un dÃ­a",
                    dd: "%d dÃ­as",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n, a) {
                var r = {
                    s: ["à¤¥à¥‹à¤¡à¤¯à¤¾ à¤¸à¥…à¤•à¤‚à¤¡à¤¾à¤‚à¤¨à¥€", "à¤¥à¥‹à¤¡à¥‡ à¤¸à¥…à¤•à¤‚à¤¡"],
                    ss: [e + " à¤¸à¥…à¤•à¤‚à¤¡à¤¾à¤‚à¤¨à¥€", e + " à¤¸à¥…à¤•à¤‚à¤¡"],
                    m: ["à¤à¤•à¤¾ à¤®à¤¿à¤£à¤Ÿà¤¾à¤¨", "à¤à¤• à¤®à¤¿à¤¨à¥‚à¤Ÿ"],
                    mm: [e + " à¤®à¤¿à¤£à¤Ÿà¤¾à¤‚à¤¨à¥€", e + " à¤®à¤¿à¤£à¤Ÿà¤¾à¤‚"],
                    h: ["à¤à¤•à¤¾ à¤µà¤°à¤¾à¤¨", "à¤à¤• à¤µà¤°"],
                    hh: [e + " à¤µà¤°à¤¾à¤‚à¤¨à¥€", e + " à¤µà¤°à¤¾à¤‚"],
                    d: ["à¤à¤•à¤¾ à¤¦à¤¿à¤¸à¤¾à¤¨", "à¤à¤• à¤¦à¥€à¤¸"],
                    dd: [e + " à¤¦à¤¿à¤¸à¤¾à¤‚à¤¨à¥€", e + " à¤¦à¥€à¤¸"],
                    M: ["à¤à¤•à¤¾ à¤®à¥à¤¹à¤¯à¤¨à¥à¤¯à¤¾à¤¨", "à¤à¤• à¤®à¥à¤¹à¤¯à¤¨à¥‹"],
                    MM: [e + " à¤®à¥à¤¹à¤¯à¤¨à¥à¤¯à¤¾à¤¨à¥€", e + " à¤®à¥à¤¹à¤¯à¤¨à¥‡"],
                    y: ["à¤à¤•à¤¾ à¤µà¤°à¥à¤¸à¤¾à¤¨", "à¤à¤• à¤µà¤°à¥à¤¸"],
                    yy: [e + " à¤µà¤°à¥à¤¸à¤¾à¤‚à¤¨à¥€", e + " à¤µà¤°à¥à¤¸à¤¾à¤‚"]
                };
                return a ? r[n][0] : r[n][1]
            }

            var n;
            e.defineLocale("gom-deva", {
                months: {
                    standalone: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¥€à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¯_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
                    format: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€à¤šà¥à¤¯à¤¾_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€à¤šà¥à¤¯à¤¾_à¤®à¤¾à¤°à¥à¤šà¤¾à¤šà¥à¤¯à¤¾_à¤à¤ªà¥à¤°à¥€à¤²à¤¾à¤šà¥à¤¯à¤¾_à¤®à¥‡à¤¯à¤¾à¤šà¥à¤¯à¤¾_à¤œà¥‚à¤¨à¤¾à¤šà¥à¤¯à¤¾_à¤œà¥à¤²à¤¯à¤¾à¤šà¥à¤¯à¤¾_à¤‘à¤—à¤¸à¥à¤Ÿà¤¾à¤šà¥à¤¯à¤¾_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°à¤¾à¤šà¥à¤¯à¤¾".split("_"),
                    isFormat: /MMMM(\s)+D[oD]?/
                },
                monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¥€._à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
                monthsParseExact: true,
                weekdays: "à¤†à¤¯à¤¤à¤¾à¤°_à¤¸à¥‹à¤®à¤¾à¤°_à¤®à¤‚à¤—à¤³à¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤¬à¤¿à¤°à¥‡à¤¸à¥à¤¤à¤¾à¤°_à¤¸à¥à¤•à¥à¤°à¤¾à¤°_à¤¶à¥‡à¤¨à¤µà¤¾à¤°".split("_"),
                weekdaysShort: "à¤†à¤¯à¤¤._à¤¸à¥‹à¤®._à¤®à¤‚à¤—à¤³._à¤¬à¥à¤§._à¤¬à¥à¤°à¥‡à¤¸à¥à¤¤._à¤¸à¥à¤•à¥à¤°._à¤¶à¥‡à¤¨.".split("_"),
                weekdaysMin: "à¤†_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤¬à¥à¤°à¥‡_à¤¸à¥_à¤¶à¥‡".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                    LTS: "A h:mm:ss [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                    LLLL: "dddd, MMMM Do, YYYY, A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]",
                    llll: "ddd, D MMM YYYY, A h:mm [à¤µà¤¾à¤œà¤¤à¤¾à¤‚]"
                },
                calendar: {
                    sameDay: "[à¤†à¤¯à¤œ] LT",
                    nextDay: "[à¤«à¤¾à¤²à¥à¤¯à¤¾à¤‚] LT",
                    nextWeek: "[à¤«à¥à¤¡à¤²à¥‹] dddd[,] LT",
                    lastDay: "[à¤•à¤¾à¤²] LT",
                    lastWeek: "[à¤«à¤¾à¤Ÿà¤²à¥‹] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s à¤†à¤¦à¥€à¤‚",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}(à¤µà¥‡à¤°)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "D":
                            return e + "à¤µà¥‡à¤°";
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                        case "w":
                        case "W":
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                },
                meridiemParse: /à¤°à¤¾à¤¤à¥€|à¤¸à¤•à¤¾à¤³à¥€à¤‚|à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚|à¤¸à¤¾à¤‚à¤œà¥‡/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à¤°à¤¾à¤¤à¥€") {
                        return e < 4 ? e : e + 12
                    } else if (t === "à¤¸à¤•à¤¾à¤³à¥€à¤‚") {
                        return e
                    } else if (t === "à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚") {
                        return e > 12 ? e : e + 12
                    } else if (t === "à¤¸à¤¾à¤‚à¤œà¥‡") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "à¤°à¤¾à¤¤à¥€"
                    } else if (e < 12) {
                        return "à¤¸à¤•à¤¾à¤³à¥€à¤‚"
                    } else if (e < 16) {
                        return "à¤¦à¤¨à¤ªà¤¾à¤°à¤¾à¤‚"
                    } else if (e < 20) {
                        return "à¤¸à¤¾à¤‚à¤œà¥‡"
                    } else {
                        return "à¤°à¤¾à¤¤à¥€"
                    }
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n, a) {
                var r = {
                    s: ["thoddea sekondamni", "thodde sekond"],
                    ss: [e + " sekondamni", e + " sekond"],
                    m: ["eka mintan", "ek minut"],
                    mm: [e + " mintamni", e + " mintam"],
                    h: ["eka voran", "ek vor"],
                    hh: [e + " voramni", e + " voram"],
                    d: ["eka disan", "ek dis"],
                    dd: [e + " disamni", e + " dis"],
                    M: ["eka mhoinean", "ek mhoino"],
                    MM: [e + " mhoineamni", e + " mhoine"],
                    y: ["eka vorsan", "ek voros"],
                    yy: [e + " vorsamni", e + " vorsam"]
                };
                return a ? r[n][0] : r[n][1]
            }

            var n;
            e.defineLocale("gom-latn", {
                months: {
                    standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                    format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                    isFormat: /MMMM(\s)+D[oD]?/
                },
                monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                monthsParseExact: true,
                weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
                weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "A h:mm [vazta]",
                    LTS: "A h:mm:ss [vazta]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [vazta]",
                    LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                    llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                },
                calendar: {
                    sameDay: "[Aiz] LT",
                    nextDay: "[Faleam] LT",
                    nextWeek: "[Fuddlo] dddd[,] LT",
                    lastDay: "[Kal] LT",
                    lastWeek: "[Fattlo] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s adim",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "D":
                            return e + "er";
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                        case "w":
                        case "W":
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                },
                meridiemParse: /rati|sokallim|donparam|sanje/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "rati") {
                        return e < 4 ? e : e + 12
                    } else if (t === "sokallim") {
                        return e
                    } else if (t === "donparam") {
                        return e > 12 ? e : e + 12
                    } else if (t === "sanje") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "rati"
                    } else if (e < 12) {
                        return "sokallim"
                    } else if (e < 16) {
                        return "donparam"
                    } else if (e < 20) {
                        return "sanje"
                    } else {
                        return "rati"
                    }
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "à«§",
                    2: "à«¨",
                    3: "à«©",
                    4: "à«ª",
                    5: "à««",
                    6: "à«¬",
                    7: "à«­",
                    8: "à«®",
                    9: "à«¯",
                    0: "à«¦"
                },
                n = {
                    "à«§": "1",
                    "à«¨": "2",
                    "à«©": "3",
                    "à«ª": "4",
                    "à««": "5",
                    "à«¬": "6",
                    "à«­": "7",
                    "à«®": "8",
                    "à«¯": "9",
                    "à«¦": "0"
                },
                a;
            e.defineLocale("gu", {
                months: "àªœàª¾àª¨à«àª¯à«àª†àª°à«€_àª«à«‡àª¬à«àª°à«àª†àª°à«€_àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿àª²_àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾àªˆ_àª‘àª—àª¸à«àªŸ_àª¸àªªà«àªŸà«‡àª®à«àª¬àª°_àª‘àª•à«àªŸà«àª¬àª°_àª¨àªµà«‡àª®à«àª¬àª°_àª¡àª¿àª¸à«‡àª®à«àª¬àª°".split("_"),
                monthsShort: "àªœàª¾àª¨à«àª¯à«._àª«à«‡àª¬à«àª°à«._àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿._àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾._àª‘àª—._àª¸àªªà«àªŸà«‡._àª‘àª•à«àªŸà«._àª¨àªµà«‡._àª¡àª¿àª¸à«‡.".split("_"),
                monthsParseExact: true,
                weekdays: "àª°àªµàª¿àªµàª¾àª°_àª¸à«‹àª®àªµàª¾àª°_àª®àª‚àª—àª³àªµàª¾àª°_àª¬à«àª§à«àªµàª¾àª°_àª—à«àª°à«àªµàª¾àª°_àª¶à«àª•à«àª°àªµàª¾àª°_àª¶àª¨àª¿àªµàª¾àª°".split("_"),
                weekdaysShort: "àª°àªµàª¿_àª¸à«‹àª®_àª®àª‚àª—àª³_àª¬à«àª§à«_àª—à«àª°à«_àª¶à«àª•à«àª°_àª¶àª¨àª¿".split("_"),
                weekdaysMin: "àª°_àª¸à«‹_àª®àª‚_àª¬à«_àª—à«_àª¶à«_àª¶".split("_"),
                longDateFormat: {
                    LT: "A h:mm àªµàª¾àª—à«àª¯à«‡",
                    LTS: "A h:mm:ss àªµàª¾àª—à«àª¯à«‡",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡",
                    LLLL: "dddd, D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡"
                },
                calendar: {
                    sameDay: "[àª†àªœ] LT",
                    nextDay: "[àª•àª¾àª²à«‡] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[àª—àª‡àª•àª¾àª²à«‡] LT",
                    lastWeek: "[àªªàª¾àª›àª²àª¾] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s àª®àª¾",
                    past: "%s àªªàª¹à«‡àª²àª¾",
                    s: "àª…àª®à«àª• àªªàª³à«‹",
                    ss: "%d àª¸à«‡àª•àª‚àª¡",
                    m: "àªàª• àª®àª¿àª¨àª¿àªŸ",
                    mm: "%d àª®àª¿àª¨àª¿àªŸ",
                    h: "àªàª• àª•àª²àª¾àª•",
                    hh: "%d àª•àª²àª¾àª•",
                    d: "àªàª• àª¦àª¿àªµàª¸",
                    dd: "%d àª¦àª¿àªµàª¸",
                    M: "àªàª• àª®àª¹àª¿àª¨à«‹",
                    MM: "%d àª®àª¹àª¿àª¨à«‹",
                    y: "àªàª• àªµàª°à«àª·",
                    yy: "%d àªµàª°à«àª·"
                },
                preparse: function (e) {
                    return e.replace(/[à«§à«¨à«©à«ªà««à«¬à«­à«®à«¯à«¦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /àª°àª¾àª¤|àª¬àªªà«‹àª°|àª¸àªµàª¾àª°|àª¸àª¾àª‚àªœ/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "àª°àª¾àª¤") {
                        return e < 4 ? e : e + 12
                    } else if (t === "àª¸àªµàª¾àª°") {
                        return e
                    } else if (t === "àª¬àªªà«‹àª°") {
                        return e >= 10 ? e : e + 12
                    } else if (t === "àª¸àª¾àª‚àªœ") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "àª°àª¾àª¤"
                    } else if (e < 10) {
                        return "àª¸àªµàª¾àª°"
                    } else if (e < 17) {
                        return "àª¬àªªà«‹àª°"
                    } else if (e < 20) {
                        return "àª¸àª¾àª‚àªœ"
                    } else {
                        return "àª°àª¾àª¤"
                    }
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("he", {
                months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),
                monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),
                weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),
                weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),
                weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [×‘]MMMM YYYY",
                    LLL: "D [×‘]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [×‘]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[×”×™×•× ×‘Ö¾]LT",
                    nextDay: "[×ž×—×¨ ×‘Ö¾]LT",
                    nextWeek: "dddd [×‘×©×¢×”] LT",
                    lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT",
                    lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "×‘×¢×•×“ %s",
                    past: "×œ×¤× ×™ %s",
                    s: "×ž×¡×¤×¨ ×©× ×™×•×ª",
                    ss: "%d ×©× ×™×•×ª",
                    m: "×“×§×”",
                    mm: "%d ×“×§×•×ª",
                    h: "×©×¢×”",
                    hh: function (e) {
                        if (e === 2) {
                            return "×©×¢×ª×™×™×"
                        }
                        return e + " ×©×¢×•×ª"
                    },
                    d: "×™×•×",
                    dd: function (e) {
                        if (e === 2) {
                            return "×™×•×ž×™×™×"
                        }
                        return e + " ×™×ž×™×"
                    },
                    M: "×—×•×“×©",
                    MM: function (e) {
                        if (e === 2) {
                            return "×—×•×“×©×™×™×"
                        }
                        return e + " ×—×•×“×©×™×"
                    },
                    y: "×©× ×”",
                    yy: function (e) {
                        if (e === 2) {
                            return "×©× ×ª×™×™×"
                        } else if (e % 10 === 0 && e !== 10) {
                            return e + " ×©× ×”"
                        }
                        return e + " ×©× ×™×"
                    }
                },
                meridiemParse: /××—×”"×¦|×œ×¤× ×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×œ×¤× ×™ ×”×¦×”×¨×™×™×|×œ×¤× ×•×ª ×‘×•×§×¨|×‘×‘×•×§×¨|×‘×¢×¨×‘/i,
                isPM: function (e) {
                    return /^(××—×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×‘×¢×¨×‘)$/.test(e)
                },
                meridiem: function (e, t, n) {
                    if (e < 5) {
                        return "×œ×¤× ×•×ª ×‘×•×§×¨"
                    } else if (e < 10) {
                        return "×‘×‘×•×§×¨"
                    } else if (e < 12) {
                        return n ? '×œ×¤× ×”"×¦' : "×œ×¤× ×™ ×”×¦×”×¨×™×™×"
                    } else if (e < 18) {
                        return n ? '××—×”"×¦' : "××—×¨×™ ×”×¦×”×¨×™×™×"
                    } else {
                        return "×‘×¢×¨×‘"
                    }
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "à¥§",
                    2: "à¥¨",
                    3: "à¥©",
                    4: "à¥ª",
                    5: "à¥«",
                    6: "à¥¬",
                    7: "à¥­",
                    8: "à¥®",
                    9: "à¥¯",
                    0: "à¥¦"
                },
                n = {
                    "à¥§": "1",
                    "à¥¨": "2",
                    "à¥©": "3",
                    "à¥ª": "4",
                    "à¥«": "5",
                    "à¥¬": "6",
                    "à¥­": "7",
                    "à¥®": "8",
                    "à¥¯": "9",
                    "à¥¦": "0"
                },
                a;
            e.defineLocale("hi", {
                months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),
                monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),
                monthsParseExact: true,
                weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
                weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
                weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
                longDateFormat: {
                    LT: "A h:mm à¤¬à¤œà¥‡",
                    LTS: "A h:mm:ss à¤¬à¤œà¥‡",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm à¤¬à¤œà¥‡",
                    LLLL: "dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡"
                },
                calendar: {
                    sameDay: "[à¤†à¤œ] LT",
                    nextDay: "[à¤•à¤²] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[à¤•à¤²] LT",
                    lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s à¤®à¥‡à¤‚",
                    past: "%s à¤ªà¤¹à¤²à¥‡",
                    s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",
                    ss: "%d à¤¸à¥‡à¤•à¤‚à¤¡",
                    m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",
                    mm: "%d à¤®à¤¿à¤¨à¤Ÿ",
                    h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",
                    hh: "%d à¤˜à¤‚à¤Ÿà¥‡",
                    d: "à¤à¤• à¤¦à¤¿à¤¨",
                    dd: "%d à¤¦à¤¿à¤¨",
                    M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",
                    MM: "%d à¤®à¤¹à¥€à¤¨à¥‡",
                    y: "à¤à¤• à¤µà¤°à¥à¤·",
                    yy: "%d à¤µà¤°à¥à¤·"
                },
                preparse: function (e) {
                    return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à¤°à¤¾à¤¤") {
                        return e < 4 ? e : e + 12
                    } else if (t === "à¤¸à¥à¤¬à¤¹") {
                        return e
                    } else if (t === "à¤¦à¥‹à¤ªà¤¹à¤°") {
                        return e >= 10 ? e : e + 12
                    } else if (t === "à¤¶à¤¾à¤®") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "à¤°à¤¾à¤¤"
                    } else if (e < 10) {
                        return "à¤¸à¥à¤¬à¤¹"
                    } else if (e < 17) {
                        return "à¤¦à¥‹à¤ªà¤¹à¤°"
                    } else if (e < 20) {
                        return "à¤¶à¤¾à¤®"
                    } else {
                        return "à¤°à¤¾à¤¤"
                    }
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "ss":
                        if (e === 1) {
                            a += "sekunda"
                        } else if (e === 2 || e === 3 || e === 4) {
                            a += "sekunde"
                        } else {
                            a += "sekundi"
                        }
                        return a;
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        if (e === 1) {
                            a += "minuta"
                        } else if (e === 2 || e === 3 || e === 4) {
                            a += "minute"
                        } else {
                            a += "minuta"
                        }
                        return a;
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        if (e === 1) {
                            a += "sat"
                        } else if (e === 2 || e === 3 || e === 4) {
                            a += "sata"
                        } else {
                            a += "sati"
                        }
                        return a;
                    case "dd":
                        if (e === 1) {
                            a += "dan"
                        } else {
                            a += "dana"
                        }
                        return a;
                    case "MM":
                        if (e === 1) {
                            a += "mjesec"
                        } else if (e === 2 || e === 3 || e === 4) {
                            a += "mjeseca"
                        } else {
                            a += "mjeseci"
                        }
                        return a;
                    case "yy":
                        if (e === 1) {
                            a += "godina"
                        } else if (e === 2 || e === 3 || e === 4) {
                            a += "godine"
                        } else {
                            a += "godina"
                        }
                        return a
                }
            }

            var n;
            e.defineLocale("hr", {
                months: {
                    format: "sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: true,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM YYYY",
                    LLL: "Do MMMM YYYY H:mm",
                    LLLL: "dddd, Do MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juÄer u] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[proÅ¡lu] [nedjelju] [u] LT";
                            case 3:
                                return "[proÅ¡lu] [srijedu] [u] LT";
                            case 6:
                                return "[proÅ¡le] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[proÅ¡li] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" "),
                n;

            function a(e, t, n, a) {
                var r = e;
                switch (n) {
                    case "s":
                        return a || t ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
                    case "ss":
                        return r + (a || t) ? " mÃ¡sodperc" : " mÃ¡sodperce";
                    case "m":
                        return "egy" + (a || t ? " perc" : " perce");
                    case "mm":
                        return r + (a || t ? " perc" : " perce");
                    case "h":
                        return "egy" + (a || t ? " Ã³ra" : " Ã³rÃ¡ja");
                    case "hh":
                        return r + (a || t ? " Ã³ra" : " Ã³rÃ¡ja");
                    case "d":
                        return "egy" + (a || t ? " nap" : " napja");
                    case "dd":
                        return r + (a || t ? " nap" : " napja");
                    case "M":
                        return "egy" + (a || t ? " hÃ³nap" : " hÃ³napja");
                    case "MM":
                        return r + (a || t ? " hÃ³nap" : " hÃ³napja");
                    case "y":
                        return "egy" + (a || t ? " Ã©v" : " Ã©ve");
                    case "yy":
                        return r + (a || t ? " Ã©v" : " Ã©ve")
                }
                return ""
            }

            function r(e) {
                return (e ? "" : "[mÃºlt] ") + "[" + t[this.day()] + "] LT[-kor]"
            }

            e.defineLocale("hu", {
                months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),
                monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"),
                weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),
                weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function (e) {
                    return e.charAt(1).toLowerCase() === "u"
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return n === true ? "de" : "DE"
                    } else {
                        return n === true ? "du" : "DU"
                    }
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function () {
                        return r.call(this, true)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function () {
                        return r.call(this, false)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s mÃºlva",
                    past: "%s",
                    s: a,
                    ss: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("hy-am", {
                months: {
                    format: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_"),
                    standalone: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_")
                },
                monthsShort: "Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_"),
                weekdays: "Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_"),
                weekdaysShort: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
                weekdaysMin: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY Õ©.",
                    LLL: "D MMMM YYYY Õ©., HH:mm",
                    LLLL: "dddd, D MMMM YYYY Õ©., HH:mm"
                },
                calendar: {
                    sameDay: "[Õ¡ÕµÕ½Ö…Ö€] LT",
                    nextDay: "[Õ¾Õ¡Õ²Õ¨] LT",
                    lastDay: "[Õ¥Ö€Õ¥Õ¯] LT",
                    nextWeek: function () {
                        return "dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                    },
                    lastWeek: function () {
                        return "[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s Õ°Õ¥Õ¿Õ¸",
                    past: "%s Õ¡Õ¼Õ¡Õ»",
                    s: "Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
                    ss: "%d Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
                    m: "Ö€Õ¸ÕºÕ¥",
                    mm: "%d Ö€Õ¸ÕºÕ¥",
                    h: "ÕªÕ¡Õ´",
                    hh: "%d ÕªÕ¡Õ´",
                    d: "Ö…Ö€",
                    dd: "%d Ö…Ö€",
                    M: "Õ¡Õ´Õ«Õ½",
                    MM: "%d Õ¡Õ´Õ«Õ½",
                    y: "Õ¿Õ¡Ö€Õ«",
                    yy: "%d Õ¿Õ¡Ö€Õ«"
                },
                meridiemParse: /Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
                isPM: function (e) {
                    return /^(ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(e)
                },
                meridiem: function (e) {
                    if (e < 4) {
                        return "Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡"
                    } else if (e < 12) {
                        return "Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡"
                    } else if (e < 17) {
                        return "ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡"
                    } else {
                        return "Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"
                    }
                },
                dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            if (e === 1) {
                                return e + "-Õ«Õ¶"
                            }
                            return e + "-Ö€Õ¤";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "pagi") {
                        return e
                    } else if (t === "siang") {
                        return e >= 11 ? e : e + 12
                    } else if (t === "sore" || t === "malam") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 11) {
                        return "pagi"
                    } else if (e < 15) {
                        return "siang"
                    } else if (e < 19) {
                        return "sore"
                    } else {
                        return "malam"
                    }
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    ss: "%d detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function s(e) {
                if (e % 100 === 11) {
                    return true
                } else if (e % 10 === 1) {
                    return false
                }
                return true
            }

            function t(e, t, n, a) {
                var r = e + " ";
                switch (n) {
                    case "s":
                        return t || a ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
                    case "ss":
                        if (s(e)) {
                            return r + (t || a ? "sekÃºndur" : "sekÃºndum")
                        }
                        return r + "sekÃºnda";
                    case "m":
                        return t ? "mÃ­nÃºta" : "mÃ­nÃºtu";
                    case "mm":
                        if (s(e)) {
                            return r + (t || a ? "mÃ­nÃºtur" : "mÃ­nÃºtum")
                        } else if (t) {
                            return r + "mÃ­nÃºta"
                        }
                        return r + "mÃ­nÃºtu";
                    case "hh":
                        if (s(e)) {
                            return r + (t || a ? "klukkustundir" : "klukkustundum")
                        }
                        return r + "klukkustund";
                    case "d":
                        if (t) {
                            return "dagur"
                        }
                        return a ? "dag" : "degi";
                    case "dd":
                        if (s(e)) {
                            if (t) {
                                return r + "dagar"
                            }
                            return r + (a ? "daga" : "dÃ¶gum")
                        } else if (t) {
                            return r + "dagur"
                        }
                        return r + (a ? "dag" : "degi");
                    case "M":
                        if (t) {
                            return "mÃ¡nuÃ°ur"
                        }
                        return a ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
                    case "MM":
                        if (s(e)) {
                            if (t) {
                                return r + "mÃ¡nuÃ°ir"
                            }
                            return r + (a ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um")
                        } else if (t) {
                            return r + "mÃ¡nuÃ°ur"
                        }
                        return r + (a ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
                    case "y":
                        return t || a ? "Ã¡r" : "Ã¡ri";
                    case "yy":
                        if (s(e)) {
                            return r + (t || a ? "Ã¡r" : "Ã¡rum")
                        }
                        return r + (t || a ? "Ã¡r" : "Ã¡ri")
                }
            }

            var n;
            e.defineLocale("is", {
                months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),
                weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),
                weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),
                weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[Ã­ dag kl.] LT",
                    nextDay: "[Ã¡ morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Ã­ gÃ¦r kl.] LT",
                    lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s sÃ­Ã°an",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: "klukkustund",
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[Oggi a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT"
                    },
                    nextDay: function () {
                        return "[Domani a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT"
                    },
                    nextWeek: function () {
                        return "dddd [a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT"
                    },
                    lastDay: function () {
                        return "[Ieri a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT"
                    },
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
                            default:
                                return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "tra %s",
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("it-ch", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ja", {
                eras: [{
                    since: "2019-05-01",
                    offset: 1,
                    name: "ä»¤å’Œ",
                    narrow: "ã‹¿",
                    abbr: "R"
                }, {
                    since: "1989-01-08",
                    until: "2019-04-30",
                    offset: 1,
                    name: "å¹³æˆ",
                    narrow: "ã»",
                    abbr: "H"
                }, {
                    since: "1926-12-25",
                    until: "1989-01-07",
                    offset: 1,
                    name: "æ˜­å’Œ",
                    narrow: "ã¼",
                    abbr: "S"
                }, {
                    since: "1912-07-30",
                    until: "1926-12-24",
                    offset: 1,
                    name: "å¤§æ­£",
                    narrow: "ã½",
                    abbr: "T"
                }, {
                    since: "1873-01-01",
                    until: "1912-07-29",
                    offset: 6,
                    name: "æ˜Žæ²»",
                    narrow: "ã¾",
                    abbr: "M"
                }, {
                    since: "0001-01-01",
                    until: "1873-12-31",
                    offset: 1,
                    name: "è¥¿æš¦",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -Infinity,
                    offset: 1,
                    name: "ç´€å…ƒå‰",
                    narrow: "BC",
                    abbr: "BC"
                }],
                eraYearOrdinalRegex: /(å…ƒ|\d+)å¹´/,
                eraYearOrdinalParse: function (e, t) {
                    return t[1] === "å…ƒ" ? 1 : parseInt(t[1] || e, 10)
                },
                months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
                monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
                weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),
                weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
                weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYYå¹´MæœˆDæ—¥",
                    LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                    LLLL: "YYYYå¹´MæœˆDæ—¥ dddd HH:mm",
                    l: "YYYY/MM/DD",
                    ll: "YYYYå¹´MæœˆDæ—¥",
                    lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                    llll: "YYYYå¹´MæœˆDæ—¥(ddd) HH:mm"
                },
                meridiemParse: /åˆå‰|åˆå¾Œ/i,
                isPM: function (e) {
                    return e === "åˆå¾Œ"
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "åˆå‰"
                    } else {
                        return "åˆå¾Œ"
                    }
                },
                calendar: {
                    sameDay: "[ä»Šæ—¥] LT",
                    nextDay: "[æ˜Žæ—¥] LT",
                    nextWeek: function (e) {
                        if (e.week() !== this.week()) {
                            return "[æ¥é€±]dddd LT"
                        } else {
                            return "dddd LT"
                        }
                    },
                    lastDay: "[æ˜¨æ—¥] LT",
                    lastWeek: function (e) {
                        if (this.week() !== e.week()) {
                            return "[å…ˆé€±]dddd LT"
                        } else {
                            return "dddd LT"
                        }
                    },
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}æ—¥/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "y":
                            return e === 1 ? "å…ƒå¹´" : e + "å¹´";
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "æ—¥";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%så¾Œ",
                    past: "%så‰",
                    s: "æ•°ç§’",
                    ss: "%dç§’",
                    m: "1åˆ†",
                    mm: "%dåˆ†",
                    h: "1æ™‚é–“",
                    hh: "%dæ™‚é–“",
                    d: "1æ—¥",
                    dd: "%dæ—¥",
                    M: "1ãƒ¶æœˆ",
                    MM: "%dãƒ¶æœˆ",
                    y: "1å¹´",
                    yy: "%då¹´"
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "enjing") {
                        return e
                    } else if (t === "siyang") {
                        return e >= 11 ? e : e + 12
                    } else if (t === "sonten" || t === "ndalu") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 11) {
                        return "enjing"
                    } else if (e < 15) {
                        return "siyang"
                    } else if (e < 19) {
                        return "sonten"
                    } else {
                        return "ndalu"
                    }
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    ss: "%d detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ka", {
                months: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"),
                monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"),
                weekdays: {
                    standalone: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"),
                    format: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_"),
                    isFormat: /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/
                },
                weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"),
                weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]",
                    nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]",
                    lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]",
                    nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]",
                    lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (e) {
                        return e.replace(/(áƒ¬áƒáƒ›|áƒ¬áƒ£áƒ—|áƒ¡áƒáƒáƒ—|áƒ¬áƒ”áƒš|áƒ“áƒ¦|áƒ—áƒ•)(áƒ˜|áƒ”)/, function (e, t, n) {
                            return n === "áƒ˜" ? t + "áƒ¨áƒ˜" : t + n + "áƒ¨áƒ˜"
                        })
                    },
                    past: function (e) {
                        if (/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(e)) {
                            return e.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ")
                        }
                        if (/áƒ¬áƒ”áƒšáƒ˜/.test(e)) {
                            return e.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ")
                        }
                        return e
                    },
                    s: "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜",
                    ss: "%d áƒ¬áƒáƒ›áƒ˜",
                    m: "áƒ¬áƒ£áƒ—áƒ˜",
                    mm: "%d áƒ¬áƒ£áƒ—áƒ˜",
                    h: "áƒ¡áƒáƒáƒ—áƒ˜",
                    hh: "%d áƒ¡áƒáƒáƒ—áƒ˜",
                    d: "áƒ“áƒ¦áƒ”",
                    dd: "%d áƒ“áƒ¦áƒ”",
                    M: "áƒ—áƒ•áƒ”",
                    MM: "%d áƒ—áƒ•áƒ”",
                    y: "áƒ¬áƒ”áƒšáƒ˜",
                    yy: "%d áƒ¬áƒ”áƒšáƒ˜"
                },
                dayOfMonthOrdinalParse: /0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/,
                ordinal: function (e) {
                    if (e === 0) {
                        return e
                    }
                    if (e === 1) {
                        return e + "-áƒšáƒ˜"
                    }
                    if (e < 20 || e <= 100 && e % 20 === 0 || e % 100 === 0) {
                        return "áƒ›áƒ”-" + e
                    }
                    return e + "-áƒ”"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var a = {
                    0: "-ÑˆÑ–",
                    1: "-ÑˆÑ–",
                    2: "-ÑˆÑ–",
                    3: "-ÑˆÑ–",
                    4: "-ÑˆÑ–",
                    5: "-ÑˆÑ–",
                    6: "-ÑˆÑ‹",
                    7: "-ÑˆÑ–",
                    8: "-ÑˆÑ–",
                    9: "-ÑˆÑ‹",
                    10: "-ÑˆÑ‹",
                    20: "-ÑˆÑ‹",
                    30: "-ÑˆÑ‹",
                    40: "-ÑˆÑ‹",
                    50: "-ÑˆÑ–",
                    60: "-ÑˆÑ‹",
                    70: "-ÑˆÑ–",
                    80: "-ÑˆÑ–",
                    90: "-ÑˆÑ‹",
                    100: "-ÑˆÑ–"
                },
                t;
            e.defineLocale("kk", {
                months: "Ò›Ð°Ò£Ñ‚Ð°Ñ€_Ð°Ò›Ð¿Ð°Ð½_Ð½Ð°ÑƒÑ€Ñ‹Ð·_ÑÓ™ÑƒÑ–Ñ€_Ð¼Ð°Ð¼Ñ‹Ñ€_Ð¼Ð°ÑƒÑÑ‹Ð¼_ÑˆÑ–Ð»Ð´Ðµ_Ñ‚Ð°Ð¼Ñ‹Ð·_Ò›Ñ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_Ò›Ð°Ð·Ð°Ð½_Ò›Ð°Ñ€Ð°ÑˆÐ°_Ð¶ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½".split("_"),
                monthsShort: "Ò›Ð°Ò£_Ð°Ò›Ð¿_Ð½Ð°Ñƒ_ÑÓ™Ñƒ_Ð¼Ð°Ð¼_Ð¼Ð°Ñƒ_ÑˆÑ–Ð»_Ñ‚Ð°Ð¼_Ò›Ñ‹Ñ€_Ò›Ð°Ð·_Ò›Ð°Ñ€_Ð¶ÐµÐ»".split("_"),
                weekdays: "Ð¶ÐµÐºÑÐµÐ½Ð±Ñ–_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ–_ÑÓ™Ñ€ÑÐµÐ½Ð±Ñ–_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ–".split("_"),
                weekdaysShort: "Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓ™Ñ€_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½".split("_"),
                weekdaysMin: "Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ€_Ð±Ð¹_Ð¶Ð¼_ÑÐ½".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT",
                    nextDay: "[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT",
                    nextWeek: "dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
                    lastDay: "[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT",
                    lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s Ñ–ÑˆÑ–Ð½Ð´Ðµ",
                    past: "%s Ð±Ò±Ñ€Ñ‹Ð½",
                    s: "Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´",
                    ss: "%d ÑÐµÐºÑƒÐ½Ð´",
                    m: "Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
                    mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
                    h: "Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚",
                    hh: "%d ÑÐ°Ò“Ð°Ñ‚",
                    d: "Ð±Ñ–Ñ€ ÐºÒ¯Ð½",
                    dd: "%d ÐºÒ¯Ð½",
                    M: "Ð±Ñ–Ñ€ Ð°Ð¹",
                    MM: "%d Ð°Ð¹",
                    y: "Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»",
                    yy: "%d Ð¶Ñ‹Ð»"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = e >= 100 ? 100 : null;
                    return e + (a[e] || a[t] || a[n])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "áŸ¡",
                    2: "áŸ¢",
                    3: "áŸ£",
                    4: "áŸ¤",
                    5: "áŸ¥",
                    6: "áŸ¦",
                    7: "áŸ§",
                    8: "áŸ¨",
                    9: "áŸ©",
                    0: "áŸ "
                },
                n = {
                    "áŸ¡": "1",
                    "áŸ¢": "2",
                    "áŸ£": "3",
                    "áŸ¤": "4",
                    "áŸ¥": "5",
                    "áŸ¦": "6",
                    "áŸ§": "7",
                    "áŸ¨": "8",
                    "áŸ©": "9",
                    "áŸ ": "0"
                },
                a;
            e.defineLocale("km", {
                months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
                monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
                weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
                weekdaysShort: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
                weekdaysMin: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /áž–áŸ’ážšáž¹áž€|áž›áŸ’áž„áž¶áž…/,
                isPM: function (e) {
                    return e === "áž›áŸ’áž„áž¶áž…"
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "áž–áŸ’ážšáž¹áž€"
                    } else {
                        return "áž›áŸ’áž„áž¶áž…"
                    }
                },
                calendar: {
                    sameDay: "[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT",
                    nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",
                    nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT",
                    lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",
                    lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sáž‘áŸ€áž",
                    past: "%sáž˜áž»áž“",
                    s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",
                    ss: "%d ážœáž·áž“áž¶áž‘áž¸",
                    m: "áž˜áž½áž™áž“áž¶áž‘áž¸",
                    mm: "%d áž“áž¶áž‘áž¸",
                    h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„",
                    hh: "%d áž˜áŸ‰áŸ„áž„",
                    d: "áž˜áž½áž™ážáŸ’áž„áŸƒ",
                    dd: "%d ážáŸ’áž„áŸƒ",
                    M: "áž˜áž½áž™ážáŸ‚",
                    MM: "%d ážáŸ‚",
                    y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",
                    yy: "%d áž†áŸ’áž“áž¶áŸ†"
                },
                dayOfMonthOrdinalParse: /áž‘áž¸\d{1,2}/,
                ordinal: "áž‘áž¸%d",
                preparse: function (e) {
                    return e.replace(/[áŸ¡áŸ¢áŸ£áŸ¤áŸ¥áŸ¦áŸ§áŸ¨áŸ©áŸ ]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "à³§",
                    2: "à³¨",
                    3: "à³©",
                    4: "à³ª",
                    5: "à³«",
                    6: "à³¬",
                    7: "à³­",
                    8: "à³®",
                    9: "à³¯",
                    0: "à³¦"
                },
                n = {
                    "à³§": "1",
                    "à³¨": "2",
                    "à³©": "3",
                    "à³ª": "4",
                    "à³«": "5",
                    "à³¬": "6",
                    "à³­": "7",
                    "à³®": "8",
                    "à³¯": "9",
                    "à³¦": "0"
                },
                a;
            e.defineLocale("kn", {
                months: "à²œà²¨à²µà²°à²¿_à²«à³†à²¬à³à²°à²µà²°à²¿_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚à²¬à²°à³_à²…à²•à³à²Ÿà³†à³‚à³•à²¬à²°à³_à²¨à²µà³†à²‚à²¬à²°à³_à²¡à²¿à²¸à³†à²‚à²¬à²°à³".split("_"),
                monthsShort: "à²œà²¨_à²«à³†à²¬à³à²°_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚_à²…à²•à³à²Ÿà³†à³‚à³•_à²¨à²µà³†à²‚_à²¡à²¿à²¸à³†à²‚".split("_"),
                monthsParseExact: true,
                weekdays: "à²­à²¾à²¨à³à²µà²¾à²°_à²¸à³†à³‚à³•à²®à²µà²¾à²°_à²®à²‚à²—à²³à²µà²¾à²°_à²¬à³à²§à²µà²¾à²°_à²—à³à²°à³à²µà²¾à²°_à²¶à³à²•à³à²°à²µà²¾à²°_à²¶à²¨à²¿à²µà²¾à²°".split("_"),
                weekdaysShort: "à²­à²¾à²¨à³_à²¸à³†à³‚à³•à²®_à²®à²‚à²—à²³_à²¬à³à²§_à²—à³à²°à³_à²¶à³à²•à³à²°_à²¶à²¨à²¿".split("_"),
                weekdaysMin: "à²­à²¾_à²¸à³†à³‚à³•_à²®à²‚_à²¬à³_à²—à³_à²¶à³_à²¶".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[à²‡à²‚à²¦à³] LT",
                    nextDay: "[à²¨à²¾à²³à³†] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[à²¨à²¿à²¨à³à²¨à³†] LT",
                    lastWeek: "[à²•à³†à³‚à²¨à³†à²¯] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s à²¨à²‚à²¤à²°",
                    past: "%s à²¹à²¿à²‚à²¦à³†",
                    s: "à²•à³†à²²à²µà³ à²•à³à²·à²£à²—à²³à³",
                    ss: "%d à²¸à³†à²•à³†à²‚à²¡à³à²—à²³à³",
                    m: "à²’à²‚à²¦à³ à²¨à²¿à²®à²¿à²·",
                    mm: "%d à²¨à²¿à²®à²¿à²·",
                    h: "à²’à²‚à²¦à³ à²—à²‚à²Ÿà³†",
                    hh: "%d à²—à²‚à²Ÿà³†",
                    d: "à²’à²‚à²¦à³ à²¦à²¿à²¨",
                    dd: "%d à²¦à²¿à²¨",
                    M: "à²’à²‚à²¦à³ à²¤à²¿à²‚à²—à²³à³",
                    MM: "%d à²¤à²¿à²‚à²—à²³à³",
                    y: "à²’à²‚à²¦à³ à²µà²°à³à²·",
                    yy: "%d à²µà²°à³à²·"
                },
                preparse: function (e) {
                    return e.replace(/[à³§à³¨à³©à³ªà³«à³¬à³­à³®à³¯à³¦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /à²°à²¾à²¤à³à²°à²¿|à²¬à³†à²³à²¿à²—à³à²—à³†|à²®à²§à³à²¯à²¾à²¹à³à²¨|à²¸à²‚à²œà³†/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à²°à²¾à²¤à³à²°à²¿") {
                        return e < 4 ? e : e + 12
                    } else if (t === "à²¬à³†à²³à²¿à²—à³à²—à³†") {
                        return e
                    } else if (t === "à²®à²§à³à²¯à²¾à²¹à³à²¨") {
                        return e >= 10 ? e : e + 12
                    } else if (t === "à²¸à²‚à²œà³†") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "à²°à²¾à²¤à³à²°à²¿"
                    } else if (e < 10) {
                        return "à²¬à³†à²³à²¿à²—à³à²—à³†"
                    } else if (e < 17) {
                        return "à²®à²§à³à²¯à²¾à²¹à³à²¨"
                    } else if (e < 20) {
                        return "à²¸à²‚à²œà³†"
                    } else {
                        return "à²°à²¾à²¤à³à²°à²¿"
                    }
                },
                dayOfMonthOrdinalParse: /\d{1,2}(à²¨à³†à³•)/,
                ordinal: function (e) {
                    return e + "à²¨à³†à³•"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ko", {
                months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
                monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
                weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),
                weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
                weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYYë…„ MMMM Dì¼",
                    LLL: "YYYYë…„ MMMM Dì¼ A h:mm",
                    LLLL: "YYYYë…„ MMMM Dì¼ dddd A h:mm",
                    l: "YYYY.MM.DD.",
                    ll: "YYYYë…„ MMMM Dì¼",
                    lll: "YYYYë…„ MMMM Dì¼ A h:mm",
                    llll: "YYYYë…„ MMMM Dì¼ dddd A h:mm"
                },
                calendar: {
                    sameDay: "ì˜¤ëŠ˜ LT",
                    nextDay: "ë‚´ì¼ LT",
                    nextWeek: "dddd LT",
                    lastDay: "ì–´ì œ LT",
                    lastWeek: "ì§€ë‚œì£¼ dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s í›„",
                    past: "%s ì „",
                    s: "ëª‡ ì´ˆ",
                    ss: "%dì´ˆ",
                    m: "1ë¶„",
                    mm: "%dë¶„",
                    h: "í•œ ì‹œê°„",
                    hh: "%dì‹œê°„",
                    d: "í•˜ë£¨",
                    dd: "%dì¼",
                    M: "í•œ ë‹¬",
                    MM: "%dë‹¬",
                    y: "ì¼ ë…„",
                    yy: "%dë…„"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ì¼|ì›”|ì£¼)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "ì¼";
                        case "M":
                            return e + "ì›”";
                        case "w":
                        case "W":
                            return e + "ì£¼";
                        default:
                            return e
                    }
                },
                meridiemParse: /ì˜¤ì „|ì˜¤í›„/,
                isPM: function (e) {
                    return e === "ì˜¤í›„"
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ì˜¤ì „" : "ì˜¤í›„"
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "Ù¡",
                    2: "Ù¢",
                    3: "Ù£",
                    4: "Ù¤",
                    5: "Ù¥",
                    6: "Ù¦",
                    7: "Ù§",
                    8: "Ù¨",
                    9: "Ù©",
                    0: "Ù "
                },
                n = {
                    "Ù¡": "1",
                    "Ù¢": "2",
                    "Ù£": "3",
                    "Ù¤": "4",
                    "Ù¥": "5",
                    "Ù¦": "6",
                    "Ù§": "7",
                    "Ù¨": "8",
                    "Ù©": "9",
                    "Ù ": "0"
                },
                a = ["Ú©Ø§Ù†ÙˆÙ†ÛŒ Ø¯ÙˆÙˆÛ•Ù…", "Ø´ÙˆØ¨Ø§Øª", "Ø¦Ø§Ø²Ø§Ø±", "Ù†ÛŒØ³Ø§Ù†", "Ø¦Ø§ÛŒØ§Ø±", "Ø­ÙˆØ²Û•ÛŒØ±Ø§Ù†", "ØªÛ•Ù…Ù…ÙˆØ²", "Ø¦Ø§Ø¨", "Ø¦Û•ÛŒÙ„ÙˆÙˆÙ„", "ØªØ´Ø±ÛŒÙ†ÛŒ ÛŒÛ•ÙƒÛ•Ù…", "ØªØ´Ø±ÛŒÙ†ÛŒ Ø¯ÙˆÙˆÛ•Ù…", "ÙƒØ§Ù†ÙˆÙ†ÛŒ ÛŒÛ•Ú©Û•Ù…"],
                r;
            e.defineLocale("ku", {
                months: a,
                monthsShort: a,
                weekdays: "ÛŒÙ‡â€ŒÙƒØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ø¯ÙˆÙˆØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ø³ÛŽØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ú†ÙˆØ§Ø±Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ù¾ÛŽÙ†Ø¬Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ù‡Ù‡â€ŒÛŒÙ†ÛŒ_Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ".split("_"),
                weekdaysShort: "ÛŒÙ‡â€ŒÙƒØ´Ù‡â€ŒÙ…_Ø¯ÙˆÙˆØ´Ù‡â€ŒÙ…_Ø³ÛŽØ´Ù‡â€ŒÙ…_Ú†ÙˆØ§Ø±Ø´Ù‡â€ŒÙ…_Ù¾ÛŽÙ†Ø¬Ø´Ù‡â€ŒÙ…_Ù‡Ù‡â€ŒÛŒÙ†ÛŒ_Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ".split("_"),
                weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ù‡_Ø´".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ|Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ/,
                isPM: function (e) {
                    return /Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ/.test(e)
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ"
                    } else {
                        return "Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ"
                    }
                },
                calendar: {
                    sameDay: "[Ø¦Ù‡â€ŒÙ…Ø±Û† ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                    nextDay: "[Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                    nextWeek: "dddd [ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                    lastDay: "[Ø¯ÙˆÛŽÙ†ÛŽ ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                    lastWeek: "dddd [ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ù„Ù‡â€Œ %s",
                    past: "%s",
                    s: "Ú†Ù‡â€ŒÙ†Ø¯ Ú†Ø±ÙƒÙ‡â€ŒÛŒÙ‡â€ŒÙƒ",
                    ss: "Ú†Ø±ÙƒÙ‡â€Œ %d",
                    m: "ÛŒÙ‡â€ŒÙƒ Ø®ÙˆÙ„Ù‡â€ŒÙƒ",
                    mm: "%d Ø®ÙˆÙ„Ù‡â€ŒÙƒ",
                    h: "ÛŒÙ‡â€ŒÙƒ ÙƒØ§ØªÚ˜Ù…ÛŽØ±",
                    hh: "%d ÙƒØ§ØªÚ˜Ù…ÛŽØ±",
                    d: "ÛŒÙ‡â€ŒÙƒ Ú•Û†Ú˜",
                    dd: "%d Ú•Û†Ú˜",
                    M: "ÛŒÙ‡â€ŒÙƒ Ù…Ø§Ù†Ú¯",
                    MM: "%d Ù…Ø§Ù†Ú¯",
                    y: "ÛŒÙ‡â€ŒÙƒ Ø³Ø§Úµ",
                    yy: "%d Ø³Ø§Úµ"
                },
                preparse: function (e) {
                    return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (e) {
                        return n[e]
                    }).replace(/ØŒ/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    }).replace(/,/g, "ØŒ")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var a = {
                    0: "-Ñ‡Ò¯",
                    1: "-Ñ‡Ð¸",
                    2: "-Ñ‡Ð¸",
                    3: "-Ñ‡Ò¯",
                    4: "-Ñ‡Ò¯",
                    5: "-Ñ‡Ð¸",
                    6: "-Ñ‡Ñ‹",
                    7: "-Ñ‡Ð¸",
                    8: "-Ñ‡Ð¸",
                    9: "-Ñ‡Ñƒ",
                    10: "-Ñ‡Ñƒ",
                    20: "-Ñ‡Ñ‹",
                    30: "-Ñ‡Ñƒ",
                    40: "-Ñ‡Ñ‹",
                    50: "-Ñ‡Ò¯",
                    60: "-Ñ‡Ñ‹",
                    70: "-Ñ‡Ð¸",
                    80: "-Ñ‡Ð¸",
                    90: "-Ñ‡Ñƒ",
                    100: "-Ñ‡Ò¯"
                },
                t;
            e.defineLocale("ky", {
                months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),
                monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
                weekdays: "Ð–ÐµÐºÑˆÐµÐ¼Ð±Ð¸_Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±Ð¸_Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð–ÑƒÐ¼Ð°_Ð˜ÑˆÐµÐ¼Ð±Ð¸".split("_"),
                weekdaysShort: "Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ€_Ð‘ÐµÐ¹_Ð–ÑƒÐ¼_Ð˜ÑˆÐµ".split("_"),
                weekdaysMin: "Ð–Ðº_Ð”Ð¹_Ð¨Ð¹_Ð¨Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð˜Ñˆ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ð‘Ò¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ‚] LT",
                    nextDay: "[Ð­Ñ€Ñ‚ÐµÒ£ ÑÐ°Ð°Ñ‚] LT",
                    nextWeek: "dddd [ÑÐ°Ð°Ñ‚] LT",
                    lastDay: "[ÐšÐµÑ‡ÑÑ ÑÐ°Ð°Ñ‚] LT",
                    lastWeek: "[Ó¨Ñ‚ÐºÓ©Ð½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ð½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ‚] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s Ð¸Ñ‡Ð¸Ð½Ð´Ðµ",
                    past: "%s Ð¼ÑƒÑ€ÑƒÐ½",
                    s: "Ð±Ð¸Ñ€Ð½ÐµÑ‡Ðµ ÑÐµÐºÑƒÐ½Ð´",
                    ss: "%d ÑÐµÐºÑƒÐ½Ð´",
                    m: "Ð±Ð¸Ñ€ Ð¼Ò¯Ð½Ó©Ñ‚",
                    mm: "%d Ð¼Ò¯Ð½Ó©Ñ‚",
                    h: "Ð±Ð¸Ñ€ ÑÐ°Ð°Ñ‚",
                    hh: "%d ÑÐ°Ð°Ñ‚",
                    d: "Ð±Ð¸Ñ€ ÐºÒ¯Ð½",
                    dd: "%d ÐºÒ¯Ð½",
                    M: "Ð±Ð¸Ñ€ Ð°Ð¹",
                    MM: "%d Ð°Ð¹",
                    y: "Ð±Ð¸Ñ€ Ð¶Ñ‹Ð»",
                    yy: "%d Ð¶Ñ‹Ð»"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(Ñ‡Ð¸|Ñ‡Ñ‹|Ñ‡Ò¯|Ñ‡Ñƒ)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = e >= 100 ? 100 : null;
                    return e + (a[e] || a[t] || a[n])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n, a) {
                var r = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? r[n][0] : r[n][1]
            }

            function n(e) {
                var t = e.substr(0, e.indexOf(" "));
                if (r(t)) {
                    return "a " + e
                }
                return "an " + e
            }

            function a(e) {
                var t = e.substr(0, e.indexOf(" "));
                if (r(t)) {
                    return "viru " + e
                }
                return "virun " + e
            }

            function r(e) {
                e = parseInt(e, 10);
                if (isNaN(e)) {
                    return false
                }
                if (e < 0) {
                    return true
                } else if (e < 10) {
                    if (4 <= e && e <= 7) {
                        return true
                    }
                    return false
                } else if (e < 100) {
                    var t = e % 10,
                        n = e / 10;
                    if (t === 0) {
                        return r(n)
                    }
                    return r(t)
                } else if (e < 1e4) {
                    while (e >= 10) {
                        e = e / 10
                    }
                    return r(e)
                } else {
                    e = e / 1e3;
                    return r(e)
                }
            }

            var s;
            e.defineLocale("lb", {
                months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: true,
                weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[GÃ«schter um] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: n,
                    past: a,
                    s: "e puer Sekonnen",
                    ss: "%d Sekonnen",
                    m: t,
                    mm: "%d Minutten",
                    h: t,
                    hh: "%d Stonnen",
                    d: t,
                    dd: "%d Deeg",
                    M: t,
                    MM: "%d MÃ©int",
                    y: t,
                    yy: "%d Joer"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("lo", {
                months: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
                monthsShort: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
                weekdays: "àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
                weekdaysShort: "àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
                weekdaysMin: "àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "àº§àº±àº™dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/,
                isPM: function (e) {
                    return e === "àº•àº­àº™à»àº¥àº‡"
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "àº•àº­àº™à»€àºŠàº»à»‰àº²"
                    } else {
                        return "àº•àº­àº™à»àº¥àº‡"
                    }
                },
                calendar: {
                    sameDay: "[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT",
                    nextDay: "[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT",
                    nextWeek: "[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT",
                    lastDay: "[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT",
                    lastWeek: "[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "àº­àºµàº %s",
                    past: "%sàºœà»ˆàº²àº™àº¡àº²",
                    s: "àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ",
                    ss: "%d àº§àº´àº™àº²àº—àºµ",
                    m: "1 àº™àº²àº—àºµ",
                    mm: "%d àº™àº²àº—àºµ",
                    h: "1 àºŠàº»à»ˆàº§à»‚àº¡àº‡",
                    hh: "%d àºŠàº»à»ˆàº§à»‚àº¡àº‡",
                    d: "1 àº¡àº·à»‰",
                    dd: "%d àº¡àº·à»‰",
                    M: "1 à»€àº”àº·àº­àº™",
                    MM: "%d à»€àº”àº·àº­àº™",
                    y: "1 àº›àºµ",
                    yy: "%d àº›àºµ"
                },
                dayOfMonthOrdinalParse: /(àº—àºµà»ˆ)\d{1,2}/,
                ordinal: function (e) {
                    return "àº—àºµà»ˆ" + e
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    ss: "sekundÄ—_sekundÅ¾iÅ³_sekundes",
                    m: "minutÄ—_minutÄ—s_minutÄ™",
                    mm: "minutÄ—s_minuÄiÅ³_minutes",
                    h: "valanda_valandos_valandÄ…",
                    hh: "valandos_valandÅ³_valandas",
                    d: "diena_dienos_dienÄ…",
                    dd: "dienos_dienÅ³_dienas",
                    M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",
                    MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",
                    y: "metai_metÅ³_metus",
                    yy: "metai_metÅ³_metus"
                },
                n;

            function a(e, t, n, a) {
                if (t) {
                    return "kelios sekundÄ—s"
                } else {
                    return a ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"
                }
            }

            function s(e, t, n, a) {
                return t ? o(n)[0] : a ? o(n)[1] : o(n)[2]
            }

            function i(e) {
                return e % 10 === 0 || e > 10 && e < 20
            }

            function o(e) {
                return t[e].split("_")
            }

            function r(e, t, n, a) {
                var r = e + " ";
                if (e === 1) {
                    return r + s(e, t, n[0], a)
                } else if (t) {
                    return r + (i(e) ? o(n)[1] : o(n)[0])
                } else {
                    if (a) {
                        return r + o(n)[1]
                    } else {
                        return r + (i(e) ? o(n)[1] : o(n)[2])
                    }
                }
            }

            e.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis".split("_"),
                    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Å iandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[PraÄ—jusÄ¯] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieÅ¡ %s",
                    s: a,
                    ss: r,
                    m: s,
                    mm: r,
                    h: s,
                    hh: r,
                    d: s,
                    dd: r,
                    M: s,
                    MM: r,
                    y: s,
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                ordinal: function (e) {
                    return e + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var a = {
                    ss: "sekundes_sekundÄ“m_sekunde_sekundes".split("_"),
                    m: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
                    mm: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
                    h: "stundas_stundÄm_stunda_stundas".split("_"),
                    hh: "stundas_stundÄm_stunda_stundas".split("_"),
                    d: "dienas_dienÄm_diena_dienas".split("_"),
                    dd: "dienas_dienÄm_diena_dienas".split("_"),
                    M: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
                    MM: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
                    y: "gada_gadiem_gads_gadi".split("_"),
                    yy: "gada_gadiem_gads_gadi".split("_")
                },
                t;

            function r(e, t, n) {
                if (n) {
                    return t % 10 === 1 && t % 100 !== 11 ? e[2] : e[3]
                } else {
                    return t % 10 === 1 && t % 100 !== 11 ? e[0] : e[1]
                }
            }

            function n(e, t, n) {
                return e + " " + r(a[n], e, t)
            }

            function s(e, t, n) {
                return r(a[n], e, t)
            }

            function i(e, t) {
                return t ? "daÅ¾as sekundes" : "daÅ¾Äm sekundÄ“m"
            }

            e.defineLocale("lv", {
                months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Å odien pulksten] LT",
                    nextDay: "[RÄ«t pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pÄ“c %s",
                    past: "pirms %s",
                    s: i,
                    ss: n,
                    m: s,
                    mm: n,
                    h: s,
                    hh: n,
                    d: s,
                    dd: n,
                    M: s,
                    MM: n,
                    y: s,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var r = {
                    words: {
                        ss: ["sekund", "sekunda", "sekundi"],
                        m: ["jedan minut", "jednog minuta"],
                        mm: ["minut", "minuta", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mjesec", "mjeseca", "mjeseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function (e, t) {
                        return e === 1 ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function (e, t, n) {
                        var a = r.words[n];
                        if (n.length === 1) {
                            return t ? a[0] : a[1]
                        } else {
                            return e + " " + r.correctGrammaticalCase(e, a)
                        }
                    }
                },
                t;
            e.defineLocale("me", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: true,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sjutra u] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juÄe u] LT",
                    lastWeek: function () {
                        var e = ["[proÅ¡le] [nedjelje] [u] LT", "[proÅ¡log] [ponedjeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srijede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "nekoliko sekundi",
                    ss: r.translate,
                    m: r.translate,
                    mm: r.translate,
                    h: r.translate,
                    hh: r.translate,
                    d: "dan",
                    dd: r.translate,
                    M: "mjesec",
                    MM: r.translate,
                    y: "godinu",
                    yy: r.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("mi", {
                months: "Kohi-tÄte_Hui-tanguru_PoutÅ«-te-rangi_Paenga-whÄwhÄ_Haratua_Pipiri_HÅngoingoi_Here-turi-kÅkÄ_Mahuru_Whiringa-Ä-nuku_Whiringa-Ä-rangi_Hakihea".split("_"),
                monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_HÅngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                weekdays: "RÄtapu_Mane_TÅ«rei_Wenerei_TÄite_Paraire_HÄtarei".split("_"),
                weekdaysShort: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
                weekdaysMin: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [i] HH:mm",
                    LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                },
                calendar: {
                    sameDay: "[i teie mahana, i] LT",
                    nextDay: "[apopo i] LT",
                    nextWeek: "dddd [i] LT",
                    lastDay: "[inanahi i] LT",
                    lastWeek: "dddd [whakamutunga i] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i roto i %s",
                    past: "%s i mua",
                    s: "te hÄ“kona ruarua",
                    ss: "%d hÄ“kona",
                    m: "he meneti",
                    mm: "%d meneti",
                    h: "te haora",
                    hh: "%d haora",
                    d: "he ra",
                    dd: "%d ra",
                    M: "he marama",
                    MM: "%d marama",
                    y: "he tau",
                    yy: "%d tau"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("mk", {
                months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
                monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
                weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),
                weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),
                weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",
                    nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",
                    nextWeek: "[Ð’Ð¾] dddd [Ð²Ð¾] LT",
                    lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ð·Ð° %s",
                    past: "Ð¿Ñ€ÐµÐ´ %s",
                    s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                    ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸",
                    m: "ÐµÐ´Ð½Ð° Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                    mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                    h: "ÐµÐ´ÐµÐ½ Ñ‡Ð°Ñ",
                    hh: "%d Ñ‡Ð°ÑÐ°",
                    d: "ÐµÐ´ÐµÐ½ Ð´ÐµÐ½",
                    dd: "%d Ð´ÐµÐ½Ð°",
                    M: "ÐµÐ´ÐµÐ½ Ð¼ÐµÑÐµÑ†",
                    MM: "%d Ð¼ÐµÑÐµÑ†Ð¸",
                    y: "ÐµÐ´Ð½Ð° Ð³Ð¾Ð´Ð¸Ð½Ð°",
                    yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = e % 100;
                    if (e === 0) {
                        return e + "-ÐµÐ²"
                    } else if (n === 0) {
                        return e + "-ÐµÐ½"
                    } else if (n > 10 && n < 20) {
                        return e + "-Ñ‚Ð¸"
                    } else if (t === 1) {
                        return e + "-Ð²Ð¸"
                    } else if (t === 2) {
                        return e + "-Ñ€Ð¸"
                    } else if (t === 7 || t === 8) {
                        return e + "-Ð¼Ð¸"
                    } else {
                        return e + "-Ñ‚Ð¸"
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ml", {
                months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"),
                monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"),
                monthsParseExact: true,
                weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"),
                weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"),
                weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"),
                longDateFormat: {
                    LT: "A h:mm -à´¨àµ",
                    LTS: "A h:mm:ss -à´¨àµ",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -à´¨àµ",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -à´¨àµ"
                },
                calendar: {
                    sameDay: "[à´‡à´¨àµà´¨àµ] LT",
                    nextDay: "[à´¨à´¾à´³àµ†] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT",
                    lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s à´•à´´à´¿à´žàµà´žàµ",
                    past: "%s à´®àµàµ»à´ªàµ",
                    s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾",
                    ss: "%d à´¸àµ†à´•àµà´•àµ»à´¡àµ",
                    m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ",
                    mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ",
                    h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
                    hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
                    d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚",
                    dd: "%d à´¦à´¿à´µà´¸à´‚",
                    M: "à´’à´°àµ à´®à´¾à´¸à´‚",
                    MM: "%d à´®à´¾à´¸à´‚",
                    y: "à´’à´°àµ à´µàµ¼à´·à´‚",
                    yy: "%d à´µàµ¼à´·à´‚"
                },
                meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ†|à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿/i,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à´°à´¾à´¤àµà´°à´¿" && e >= 4 || t === "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" || t === "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚") {
                        return e + 12
                    } else {
                        return e
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "à´°à´¾à´¤àµà´°à´¿"
                    } else if (e < 12) {
                        return "à´°à´¾à´µà´¿à´²àµ†"
                    } else if (e < 17) {
                        return "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ"
                    } else if (e < 20) {
                        return "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚"
                    } else {
                        return "à´°à´¾à´¤àµà´°à´¿"
                    }
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n, a) {
                switch (n) {
                    case "s":
                        return t ? "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´" : "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½";
                    case "ss":
                        return e + (t ? " ÑÐµÐºÑƒÐ½Ð´" : " ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½");
                    case "m":
                    case "mm":
                        return e + (t ? " Ð¼Ð¸Ð½ÑƒÑ‚" : " Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹Ð½");
                    case "h":
                    case "hh":
                        return e + (t ? " Ñ†Ð°Ð³" : " Ñ†Ð°Ð³Ð¸Ð¹Ð½");
                    case "d":
                    case "dd":
                        return e + (t ? " Ó©Ð´Ó©Ñ€" : " Ó©Ð´Ñ€Ð¸Ð¹Ð½");
                    case "M":
                    case "MM":
                        return e + (t ? " ÑÐ°Ñ€" : " ÑÐ°Ñ€Ñ‹Ð½");
                    case "y":
                    case "yy":
                        return e + (t ? " Ð¶Ð¸Ð»" : " Ð¶Ð¸Ð»Ð¸Ð¹Ð½");
                    default:
                        return e
                }
            }

            var n;
            e.defineLocale("mn", {
                months: "ÐÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¥Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð“ÑƒÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ó©Ñ€Ó©Ð²Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¢Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð—ÑƒÑ€Ð³Ð°Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ð¾Ð»Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÐ°Ð¹Ð¼Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð•ÑÐ´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ñ…Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€".split("_"),
                monthsShort: "1 ÑÐ°Ñ€_2 ÑÐ°Ñ€_3 ÑÐ°Ñ€_4 ÑÐ°Ñ€_5 ÑÐ°Ñ€_6 ÑÐ°Ñ€_7 ÑÐ°Ñ€_8 ÑÐ°Ñ€_9 ÑÐ°Ñ€_10 ÑÐ°Ñ€_11 ÑÐ°Ñ€_12 ÑÐ°Ñ€".split("_"),
                monthsParseExact: true,
                weekdays: "ÐÑÐ¼_Ð”Ð°Ð²Ð°Ð°_ÐœÑÐ³Ð¼Ð°Ñ€_Ð›Ñ…Ð°Ð³Ð²Ð°_ÐŸÒ¯Ñ€ÑÐ²_Ð‘Ð°Ð°ÑÐ°Ð½_Ð‘ÑÐ¼Ð±Ð°".split("_"),
                weekdaysShort: "ÐÑÐ¼_Ð”Ð°Ð²_ÐœÑÐ³_Ð›Ñ…Ð°_ÐŸÒ¯Ñ€_Ð‘Ð°Ð°_Ð‘ÑÐ¼".split("_"),
                weekdaysMin: "ÐÑ_Ð”Ð°_ÐœÑ_Ð›Ñ…_ÐŸÒ¯_Ð‘Ð°_Ð‘Ñ".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D",
                    LLL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm",
                    LLLL: "dddd, YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm"
                },
                meridiemParse: /Ò®Ó¨|Ò®Ð¥/i,
                isPM: function (e) {
                    return e === "Ò®Ð¥"
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "Ò®Ó¨"
                    } else {
                        return "Ò®Ð¥"
                    }
                },
                calendar: {
                    sameDay: "[Ó¨Ð½Ó©Ó©Ð´Ó©Ñ€] LT",
                    nextDay: "[ÐœÐ°Ñ€Ð³Ð°Ð°Ñˆ] LT",
                    nextWeek: "[Ð˜Ñ€ÑÑ…] dddd LT",
                    lastDay: "[Ó¨Ñ‡Ð¸Ð³Ð´Ó©Ñ€] LT",
                    lastWeek: "[Ó¨Ð½Ð³Ó©Ñ€ÑÓ©Ð½] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s Ð´Ð°Ñ€Ð°Ð°",
                    past: "%s Ó©Ð¼Ð½Ó©",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2} Ó©Ð´Ó©Ñ€/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + " Ó©Ð´Ó©Ñ€";
                        default:
                            return e
                    }
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "à¥§",
                    2: "à¥¨",
                    3: "à¥©",
                    4: "à¥ª",
                    5: "à¥«",
                    6: "à¥¬",
                    7: "à¥­",
                    8: "à¥®",
                    9: "à¥¯",
                    0: "à¥¦"
                },
                n = {
                    "à¥§": "1",
                    "à¥¨": "2",
                    "à¥©": "3",
                    "à¥ª": "4",
                    "à¥«": "5",
                    "à¥¬": "6",
                    "à¥­": "7",
                    "à¥®": "8",
                    "à¥¯": "9",
                    "à¥¦": "0"
                },
                a;

            function r(e, t, n, a) {
                var r = "";
                if (t) {
                    switch (n) {
                        case "s":
                            r = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";
                            break;
                        case "ss":
                            r = "%d à¤¸à¥‡à¤•à¤‚à¤¦";
                            break;
                        case "m":
                            r = "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";
                            break;
                        case "mm":
                            r = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";
                            break;
                        case "h":
                            r = "à¤à¤• à¤¤à¤¾à¤¸";
                            break;
                        case "hh":
                            r = "%d à¤¤à¤¾à¤¸";
                            break;
                        case "d":
                            r = "à¤à¤• à¤¦à¤¿à¤µà¤¸";
                            break;
                        case "dd":
                            r = "%d à¤¦à¤¿à¤µà¤¸";
                            break;
                        case "M":
                            r = "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";
                            break;
                        case "MM":
                            r = "%d à¤®à¤¹à¤¿à¤¨à¥‡";
                            break;
                        case "y":
                            r = "à¤à¤• à¤µà¤°à¥à¤·";
                            break;
                        case "yy":
                            r = "%d à¤µà¤°à¥à¤·à¥‡";
                            break
                    }
                } else {
                    switch (n) {
                        case "s":
                            r = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                            break;
                        case "ss":
                            r = "%d à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                            break;
                        case "m":
                            r = "à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";
                            break;
                        case "mm":
                            r = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";
                            break;
                        case "h":
                            r = "à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";
                            break;
                        case "hh":
                            r = "%d à¤¤à¤¾à¤¸à¤¾à¤‚";
                            break;
                        case "d":
                            r = "à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";
                            break;
                        case "dd":
                            r = "%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";
                            break;
                        case "M":
                            r = "à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";
                            break;
                        case "MM":
                            r = "%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";
                            break;
                        case "y":
                            r = "à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";
                            break;
                        case "yy":
                            r = "%d à¤µà¤°à¥à¤·à¤¾à¤‚";
                            break
                    }
                }
                return r.replace(/%d/i, e)
            }

            e.defineLocale("mr", {
                months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
                monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
                monthsParseExact: true,
                weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
                weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
                weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
                longDateFormat: {
                    LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
                    LTS: "A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
                    LLLL: "dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾"
                },
                calendar: {
                    sameDay: "[à¤†à¤œ] LT",
                    nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[à¤•à¤¾à¤²] LT",
                    lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sà¤®à¤§à¥à¤¯à¥‡",
                    past: "%sà¤ªà¥‚à¤°à¥à¤µà¥€",
                    s: r,
                    ss: r,
                    m: r,
                    mm: r,
                    h: r,
                    hh: r,
                    d: r,
                    dd: r,
                    M: r,
                    MM: r,
                    y: r,
                    yy: r
                },
                preparse: function (e) {
                    return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /à¤ªà¤¹à¤¾à¤Ÿà¥‡|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€|à¤°à¤¾à¤¤à¥à¤°à¥€/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à¤ªà¤¹à¤¾à¤Ÿà¥‡" || t === "à¤¸à¤•à¤¾à¤³à¥€") {
                        return e
                    } else if (t === "à¤¦à¥à¤ªà¤¾à¤°à¥€" || t === "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" || t === "à¤°à¤¾à¤¤à¥à¤°à¥€") {
                        return e >= 12 ? e : e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e >= 0 && e < 6) {
                        return "à¤ªà¤¹à¤¾à¤Ÿà¥‡"
                    } else if (e < 12) {
                        return "à¤¸à¤•à¤¾à¤³à¥€"
                    } else if (e < 17) {
                        return "à¤¦à¥à¤ªà¤¾à¤°à¥€"
                    } else if (e < 20) {
                        return "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€"
                    } else {
                        return "à¤°à¤¾à¤¤à¥à¤°à¥€"
                    }
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "pagi") {
                        return e
                    } else if (t === "tengahari") {
                        return e >= 11 ? e : e + 12
                    } else if (t === "petang" || t === "malam") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 11) {
                        return "pagi"
                    } else if (e < 15) {
                        return "tengahari"
                    } else if (e < 19) {
                        return "petang"
                    } else {
                        return "malam"
                    }
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "pagi") {
                        return e
                    } else if (t === "tengahari") {
                        return e >= 11 ? e : e + 12
                    } else if (t === "petang" || t === "malam") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 11) {
                        return "pagi"
                    } else if (e < 15) {
                        return "tengahari"
                    } else if (e < 19) {
                        return "petang"
                    } else {
                        return "malam"
                    }
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("mt", {
                months: "Jannar_Frar_Marzu_April_Mejju_Ä unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_DiÄ‹embru".split("_"),
                monthsShort: "Jan_Fra_Mar_Apr_Mej_Ä un_Lul_Aww_Set_Ott_Nov_DiÄ‹".split("_"),
                weekdays: "Il-Ä¦add_It-Tnejn_It-Tlieta_L-ErbgÄ§a_Il-Ä¦amis_Il-Ä imgÄ§a_Is-Sibt".split("_"),
                weekdaysShort: "Ä¦ad_Tne_Tli_Erb_Ä¦am_Ä im_Sib".split("_"),
                weekdaysMin: "Ä¦a_Tn_Tl_Er_Ä¦a_Ä i_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Illum fil-]LT",
                    nextDay: "[GÄ§ada fil-]LT",
                    nextWeek: "dddd [fil-]LT",
                    lastDay: "[Il-bieraÄ§ fil-]LT",
                    lastWeek: "dddd [li gÄ§adda] [fil-]LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "fâ€™ %s",
                    past: "%s ilu",
                    s: "ftit sekondi",
                    ss: "%d sekondi",
                    m: "minuta",
                    mm: "%d minuti",
                    h: "siegÄ§a",
                    hh: "%d siegÄ§at",
                    d: "Ä¡urnata",
                    dd: "%d Ä¡ranet",
                    M: "xahar",
                    MM: "%d xhur",
                    y: "sena",
                    yy: "%d sni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "á",
                    2: "á‚",
                    3: "áƒ",
                    4: "á„",
                    5: "á…",
                    6: "á†",
                    7: "á‡",
                    8: "áˆ",
                    9: "á‰",
                    0: "á€"
                },
                n = {
                    "á": "1",
                    "á‚": "2",
                    "áƒ": "3",
                    "á„": "4",
                    "á…": "5",
                    "á†": "6",
                    "á‡": "7",
                    "áˆ": "8",
                    "á‰": "9",
                    "á€": "0"
                },
                a;
            e.defineLocale("my", {
                months: "á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬".split("_"),
                monthsShort: "á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®".split("_"),
                weekdays: "á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±".split("_"),
                weekdaysShort: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
                weekdaysMin: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[á€šá€”á€±.] LT [á€™á€¾á€¬]",
                    nextDay: "[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]",
                    nextWeek: "dddd LT [á€™á€¾á€¬]",
                    lastDay: "[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]",
                    lastWeek: "[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬",
                    past: "á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€",
                    s: "á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º",
                    ss: "%d á€…á€€á€¹á€€á€”á€·á€º",
                    m: "á€á€…á€ºá€™á€­á€”á€…á€º",
                    mm: "%d á€™á€­á€”á€…á€º",
                    h: "á€á€…á€ºá€”á€¬á€›á€®",
                    hh: "%d á€”á€¬á€›á€®",
                    d: "á€á€…á€ºá€›á€€á€º",
                    dd: "%d á€›á€€á€º",
                    M: "á€á€…á€ºá€œ",
                    MM: "%d á€œ",
                    y: "á€á€…á€ºá€”á€¾á€…á€º",
                    yy: "%d á€”á€¾á€…á€º"
                },
                preparse: function (e) {
                    return e.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: true,
                weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
                weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),
                weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i gÃ¥r kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    ss: "%d sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    M: "en mÃ¥ned",
                    MM: "%d mÃ¥neder",
                    y: "ett Ã¥r",
                    yy: "%d Ã¥r"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "à¥§",
                    2: "à¥¨",
                    3: "à¥©",
                    4: "à¥ª",
                    5: "à¥«",
                    6: "à¥¬",
                    7: "à¥­",
                    8: "à¥®",
                    9: "à¥¯",
                    0: "à¥¦"
                },
                n = {
                    "à¥§": "1",
                    "à¥¨": "2",
                    "à¥©": "3",
                    "à¥ª": "4",
                    "à¥«": "5",
                    "à¥¬": "6",
                    "à¥­": "7",
                    "à¥®": "8",
                    "à¥¯": "9",
                    "à¥¦": "0"
                },
                a;
            e.defineLocale("ne", {
                months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),
                monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),
                monthsParseExact: true,
                weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),
                weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),
                weekdaysMin: "à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
                    LTS: "Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
                    LLLL: "dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡"
                },
                preparse: function (e) {
                    return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à¤°à¤¾à¤¤à¤¿") {
                        return e < 4 ? e : e + 12
                    } else if (t === "à¤¬à¤¿à¤¹à¤¾à¤¨") {
                        return e
                    } else if (t === "à¤¦à¤¿à¤‰à¤à¤¸à¥‹") {
                        return e >= 10 ? e : e + 12
                    } else if (t === "à¤¸à¤¾à¤à¤") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 3) {
                        return "à¤°à¤¾à¤¤à¤¿"
                    } else if (e < 12) {
                        return "à¤¬à¤¿à¤¹à¤¾à¤¨"
                    } else if (e < 16) {
                        return "à¤¦à¤¿à¤‰à¤à¤¸à¥‹"
                    } else if (e < 20) {
                        return "à¤¸à¤¾à¤à¤"
                    } else {
                        return "à¤°à¤¾à¤¤à¤¿"
                    }
                },
                calendar: {
                    sameDay: "[à¤†à¤œ] LT",
                    nextDay: "[à¤­à¥‹à¤²à¤¿] LT",
                    nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",
                    lastDay: "[à¤¹à¤¿à¤œà¥‹] LT",
                    lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sà¤®à¤¾",
                    past: "%s à¤…à¤—à¤¾à¤¡à¤¿",
                    s: "à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£",
                    ss: "%d à¤¸à¥‡à¤•à¥‡à¤£à¥à¤¡",
                    m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",
                    mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",
                    h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",
                    hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾",
                    d: "à¤à¤• à¤¦à¤¿à¤¨",
                    dd: "%d à¤¦à¤¿à¤¨",
                    M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",
                    MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾",
                    y: "à¤à¤• à¤¬à¤°à¥à¤·",
                    yy: "%d à¤¬à¤°à¥à¤·"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var n = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                t = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                s;
            e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function (e, t) {
                    if (!e) {
                        return n
                    } else if (/-MMM-/.test(t)) {
                        return a[e.month()]
                    } else {
                        return n[e.month()]
                    }
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: t,
                longMonthsParse: t,
                shortMonthsParse: t,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "Ã©Ã©n minuut",
                    mm: "%d minuten",
                    h: "Ã©Ã©n uur",
                    hh: "%d uur",
                    d: "Ã©Ã©n dag",
                    dd: "%d dagen",
                    M: "Ã©Ã©n maand",
                    MM: "%d maanden",
                    y: "Ã©Ã©n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var n = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                t = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                s;
            e.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function (e, t) {
                    if (!e) {
                        return n
                    } else if (/-MMM-/.test(t)) {
                        return a[e.month()]
                    } else {
                        return n[e.month()]
                    }
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: t,
                longMonthsParse: t,
                shortMonthsParse: t,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "Ã©Ã©n minuut",
                    mm: "%d minuten",
                    h: "Ã©Ã©n uur",
                    hh: "%d uur",
                    d: "Ã©Ã©n dag",
                    dd: "%d dagen",
                    M: "Ã©Ã©n maand",
                    MM: "%d maanden",
                    y: "Ã©Ã©n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: true,
                weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "su._mÃ¥._ty._on._to._fr._lau.".split("_"),
                weekdaysMin: "su_mÃ¥_ty_on_to_fr_la".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I gÃ¥r klokka] LT",
                    lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    ss: "%d sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    M: "ein mÃ¥nad",
                    MM: "%d mÃ¥nader",
                    y: "eit Ã¥r",
                    yy: "%d Ã¥r"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("oc-lnc", {
                months: {
                    standalone: "geniÃ¨r_febriÃ¨r_marÃ§_abril_mai_junh_julhet_agost_setembre_octÃ²bre_novembre_decembre".split("_"),
                    format: "de geniÃ¨r_de febriÃ¨r_de marÃ§_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octÃ²bre_de novembre_de decembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._marÃ§_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
                monthsParseExact: true,
                weekdays: "dimenge_diluns_dimars_dimÃ¨cres_dijÃ²us_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: "[uÃ¨i a] LT",
                    nextDay: "[deman a] LT",
                    nextWeek: "dddd [a] LT",
                    lastDay: "[iÃ¨r a] LT",
                    lastWeek: "dddd [passat a] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquÃ­ %s",
                    past: "fa %s",
                    s: "unas segondas",
                    ss: "%d segondas",
                    m: "una minuta",
                    mm: "%d minutas",
                    h: "una ora",
                    hh: "%d oras",
                    d: "un jorn",
                    dd: "%d jorns",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
                ordinal: function (e, t) {
                    var n = e === 1 ? "r" : e === 2 ? "n" : e === 3 ? "r" : e === 4 ? "t" : "Ã¨";
                    if (t === "w" || t === "W") {
                        n = "a"
                    }
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "à©§",
                    2: "à©¨",
                    3: "à©©",
                    4: "à©ª",
                    5: "à©«",
                    6: "à©¬",
                    7: "à©­",
                    8: "à©®",
                    9: "à©¯",
                    0: "à©¦"
                },
                n = {
                    "à©§": "1",
                    "à©¨": "2",
                    "à©©": "3",
                    "à©ª": "4",
                    "à©«": "5",
                    "à©¬": "6",
                    "à©­": "7",
                    "à©®": "8",
                    "à©¯": "9",
                    "à©¦": "0"
                },
                a;
            e.defineLocale("pa-in", {
                months: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
                monthsShort: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
                weekdays: "à¨à¨¤à¨µà¨¾à¨°_à¨¸à©‹à¨®à¨µà¨¾à¨°_à¨®à©°à¨—à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©€à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨•à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©€à¨šà¨°à¨µà¨¾à¨°".split("_"),
                weekdaysShort: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
                weekdaysMin: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
                longDateFormat: {
                    LT: "A h:mm à¨µà¨œà©‡",
                    LTS: "A h:mm:ss à¨µà¨œà©‡",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm à¨µà¨œà©‡",
                    LLLL: "dddd, D MMMM YYYY, A h:mm à¨µà¨œà©‡"
                },
                calendar: {
                    sameDay: "[à¨…à¨œ] LT",
                    nextDay: "[à¨•à¨²] LT",
                    nextWeek: "[à¨…à¨—à¨²à¨¾] dddd, LT",
                    lastDay: "[à¨•à¨²] LT",
                    lastWeek: "[à¨ªà¨¿à¨›à¨²à©‡] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s à¨µà¨¿à©±à¨š",
                    past: "%s à¨ªà¨¿à¨›à¨²à©‡",
                    s: "à¨•à©à¨ à¨¸à¨•à¨¿à©°à¨Ÿ",
                    ss: "%d à¨¸à¨•à¨¿à©°à¨Ÿ",
                    m: "à¨‡à¨• à¨®à¨¿à©°à¨Ÿ",
                    mm: "%d à¨®à¨¿à©°à¨Ÿ",
                    h: "à¨‡à©±à¨• à¨˜à©°à¨Ÿà¨¾",
                    hh: "%d à¨˜à©°à¨Ÿà©‡",
                    d: "à¨‡à©±à¨• à¨¦à¨¿à¨¨",
                    dd: "%d à¨¦à¨¿à¨¨",
                    M: "à¨‡à©±à¨• à¨®à¨¹à©€à¨¨à¨¾",
                    MM: "%d à¨®à¨¹à©€à¨¨à©‡",
                    y: "à¨‡à©±à¨• à¨¸à¨¾à¨²",
                    yy: "%d à¨¸à¨¾à¨²"
                },
                preparse: function (e) {
                    return e.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©‡à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à¨°à¨¾à¨¤") {
                        return e < 4 ? e : e + 12
                    } else if (t === "à¨¸à¨µà©‡à¨°") {
                        return e
                    } else if (t === "à¨¦à©à¨ªà¨¹à¨¿à¨°") {
                        return e >= 10 ? e : e + 12
                    } else if (t === "à¨¸à¨¼à¨¾à¨®") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "à¨°à¨¾à¨¤"
                    } else if (e < 10) {
                        return "à¨¸à¨µà©‡à¨°"
                    } else if (e < 17) {
                        return "à¨¦à©à¨ªà¨¹à¨¿à¨°"
                    } else if (e < 20) {
                        return "à¨¸à¨¼à¨¾à¨®"
                    } else {
                        return "à¨°à¨¾à¨¤"
                    }
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var n = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),
                a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_"),
                t;

            function r(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
            }

            function s(e, t, n) {
                var a = e + " ";
                switch (n) {
                    case "ss":
                        return a + (r(e) ? "sekundy" : "sekund");
                    case "m":
                        return t ? "minuta" : "minutÄ™";
                    case "mm":
                        return a + (r(e) ? "minuty" : "minut");
                    case "h":
                        return t ? "godzina" : "godzinÄ™";
                    case "hh":
                        return a + (r(e) ? "godziny" : "godzin");
                    case "MM":
                        return a + (r(e) ? "miesiÄ…ce" : "miesiÄ™cy");
                    case "yy":
                        return a + (r(e) ? "lata" : "lat")
                }
            }

            e.defineLocale("pl", {
                months: function (e, t) {
                    if (!e) {
                        return n
                    } else if (t === "") {
                        return "(" + a[e.month()] + "|" + n[e.month()] + ")"
                    } else if (/D MMMM/.test(t)) {
                        return a[e.month()]
                    } else {
                        return n[e.month()]
                    }
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
                weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_Å›r_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DziÅ› o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[W niedzielÄ™ o] LT";
                            case 2:
                                return "[We wtorek o] LT";
                            case 3:
                                return "[W Å›rodÄ™ o] LT";
                            case 6:
                                return "[W sobotÄ™ o] LT";
                            default:
                                return "[W] dddd [o] LT"
                        }
                    },
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                            case 3:
                                return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                            case 6:
                                return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
                            default:
                                return "[W zeszÅ‚y] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    ss: s,
                    m: s,
                    mm: s,
                    h: s,
                    hh: s,
                    d: "1 dzieÅ„",
                    dd: "%d dni",
                    M: "miesiÄ…c",
                    MM: s,
                    y: "rok",
                    yy: s
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("pt", {
                months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
                weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje Ã s] LT",
                    nextDay: "[AmanhÃ£ Ã s] LT",
                    nextWeek: "dddd [Ã s] LT",
                    lastDay: "[Ontem Ã s] LT",
                    lastWeek: function () {
                        return this.day() === 0 || this.day() === 6 ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "hÃ¡ %s",
                    s: "segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mÃªs",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("pt-br", {
                months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "domingo_segunda-feira_terÃ§a-feira_quarta-feira_quinta-feira_sexta-feira_sÃ¡bado".split("_"),
                weekdaysShort: "dom_seg_ter_qua_qui_sex_sÃ¡b".split("_"),
                weekdaysMin: "do_2Âª_3Âª_4Âª_5Âª_6Âª_sÃ¡".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [Ã s] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje Ã s] LT",
                    nextDay: "[AmanhÃ£ Ã s] LT",
                    nextWeek: "dddd [Ã s] LT",
                    lastDay: "[Ontem Ã s] LT",
                    lastWeek: function () {
                        return this.day() === 0 || this.day() === 6 ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "hÃ¡ %s",
                    s: "poucos segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mÃªs",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}Âº/,
                ordinal: "%dÂº"
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n) {
                var a = {
                        ss: "secunde",
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        MM: "luni",
                        yy: "ani"
                    },
                    r = " ";
                if (e % 100 >= 20 || e >= 100 && e % 100 === 0) {
                    r = " de "
                }
                return e + r + a[n]
            }

            var n;
            e.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: true,
                weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mÃ¢ine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s Ã®n urmÄƒ",
                    s: "cÃ¢teva secunde",
                    ss: t,
                    m: "un minut",
                    mm: t,
                    h: "o orÄƒ",
                    hh: t,
                    d: "o zi",
                    dd: t,
                    M: "o lunÄƒ",
                    MM: t,
                    y: "un an",
                    yy: t
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function r(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function t(e, t, n) {
                var a = {
                    ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
                    mm: t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
                    hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
                    dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
                    MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
                    yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
                };
                if (n === "m") {
                    return t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ"
                } else {
                    return e + " " + r(a[n], +e)
                }
            }

            var n = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i],
                a;
            e.defineLocale("ru", {
                months: {
                    format: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_"),
                    standalone: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_")
                },
                monthsShort: {
                    format: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_"),
                    standalone: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_")
                },
                weekdays: {
                    standalone: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),
                    format: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"),
                    isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?] ?dddd/
                },
                weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                monthsParse: n,
                longMonthsParse: n,
                shortMonthsParse: n,
                monthsRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
                monthsShortRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
                monthsStrictRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ])/i,
                monthsShortStrictRegex: /^(ÑÐ½Ð²\.|Ñ„ÐµÐ²Ñ€?\.|Ð¼Ð°Ñ€[Ñ‚.]|Ð°Ð¿Ñ€\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑŒÑ.]|Ð¸ÑŽÐ»[ÑŒÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ‚?\.|Ð¾ÐºÑ‚\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY Ð³.",
                    LLL: "D MMMM YYYY Ð³., H:mm",
                    LLLL: "dddd, D MMMM YYYY Ð³., H:mm"
                },
                calendar: {
                    sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, Ð²] LT",
                    nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð°, Ð²] LT",
                    lastDay: "[Ð’Ñ‡ÐµÑ€Ð°, Ð²] LT",
                    nextWeek: function (e) {
                        if (e.week() !== this.week()) {
                            switch (this.day()) {
                                case 0:
                                    return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd, [Ð²] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd, [Ð²] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd, [Ð²] LT"
                            }
                        } else {
                            if (this.day() === 2) {
                                return "[Ð’Ð¾] dddd, [Ð²] LT"
                            } else {
                                return "[Ð’] dddd, [Ð²] LT"
                            }
                        }
                    },
                    lastWeek: function (e) {
                        if (e.week() !== this.week()) {
                            switch (this.day()) {
                                case 0:
                                    return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd, [Ð²] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd, [Ð²] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd, [Ð²] LT"
                            }
                        } else {
                            if (this.day() === 2) {
                                return "[Ð’Ð¾] dddd, [Ð²] LT"
                            } else {
                                return "[Ð’] dddd, [Ð²] LT"
                            }
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ñ‡ÐµÑ€ÐµÐ· %s",
                    past: "%s Ð½Ð°Ð·Ð°Ð´",
                    s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
                    ss: t,
                    m: t,
                    mm: t,
                    h: "Ñ‡Ð°Ñ",
                    hh: t,
                    d: "Ð´ÐµÐ½ÑŒ",
                    dd: t,
                    M: "Ð¼ÐµÑÑÑ†",
                    MM: t,
                    y: "Ð³Ð¾Ð´",
                    yy: t
                },
                meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
                isPM: function (e) {
                    return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(e)
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "Ð½Ð¾Ñ‡Ð¸"
                    } else if (e < 12) {
                        return "ÑƒÑ‚Ñ€Ð°"
                    } else if (e < 17) {
                        return "Ð´Ð½Ñ"
                    } else {
                        return "Ð²ÐµÑ‡ÐµÑ€Ð°"
                    }
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                            return e + "-Ð¹";
                        case "D":
                            return e + "-Ð³Ð¾";
                        case "w":
                        case "W":
                            return e + "-Ñ";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = ["Ø¬Ù†ÙˆØ±ÙŠ", "ÙÙŠØ¨Ø±ÙˆØ±ÙŠ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÙŠÙ„", "Ù…Ø¦ÙŠ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¡Ù", "Ø¢Ú¯Ø³Ù½", "Ø³ÙŠÙ¾Ù½Ù…Ø¨Ø±", "Ø¢ÚªÙ½ÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "ÚŠØ³Ù…Ø¨Ø±"],
                n = ["Ø¢Ú†Ø±", "Ø³ÙˆÙ…Ø±", "Ø§Ú±Ø§Ø±Ùˆ", "Ø§Ø±Ø¨Ø¹", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹", "Ú‡Ù†Ú‡Ø±"],
                a;
            e.defineLocale("sd", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ddddØŒ D MMMM YYYY HH:mm"
                },
                meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
                isPM: function (e) {
                    return "Ø´Ø§Ù…" === e
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "ØµØ¨Ø­"
                    }
                    return "Ø´Ø§Ù…"
                },
                calendar: {
                    sameDay: "[Ø§Ú„] LT",
                    nextDay: "[Ø³Ú€Ø§Ú»ÙŠ] LT",
                    nextWeek: "dddd [Ø§Ú³ÙŠÙ† Ù‡ÙØªÙŠ ØªÙŠ] LT",
                    lastDay: "[ÚªØ§Ù„Ù‡Ù‡] LT",
                    lastWeek: "[Ú¯Ø²Ø±ÙŠÙ„ Ù‡ÙØªÙŠ] dddd [ØªÙŠ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s Ù¾ÙˆØ¡",
                    past: "%s Ø§Ú³",
                    s: "Ú†Ù†Ø¯ Ø³ÙŠÚªÙ†ÚŠ",
                    ss: "%d Ø³ÙŠÚªÙ†ÚŠ",
                    m: "Ù‡Úª Ù…Ù†Ù½",
                    mm: "%d Ù…Ù†Ù½",
                    h: "Ù‡Úª ÚªÙ„Ø§Úª",
                    hh: "%d ÚªÙ„Ø§Úª",
                    d: "Ù‡Úª ÚÙŠÙ†Ù‡Ù†",
                    dd: "%d ÚÙŠÙ†Ù‡Ù†",
                    M: "Ù‡Úª Ù…Ù‡ÙŠÙ†Ùˆ",
                    MM: "%d Ù…Ù‡ÙŠÙ†Ø§",
                    y: "Ù‡Úª Ø³Ø§Ù„",
                    yy: "%d Ø³Ø§Ù„"
                },
                preparse: function (e) {
                    return e.replace(/ØŒ/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "ØŒ")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("se", {
                months: "oÄ‘Ä‘ajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅ‹omÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu".split("_"),
                monthsShort: "oÄ‘Ä‘j_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov".split("_"),
                weekdays: "sotnabeaivi_vuossÃ¡rga_maÅ‹Å‹ebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat".split("_"),
                weekdaysShort: "sotn_vuos_maÅ‹_gask_duor_bear_lÃ¡v".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geaÅ¾es",
                    past: "maÅ‹it %s",
                    s: "moadde sekunddat",
                    ss: "%d sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta mÃ¡nnu",
                    MM: "%d mÃ¡nut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("si", {
                months: "à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š".split("_"),
                monthsShort: "à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·".split("_"),
                weekdays: "à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·".split("_"),
                weekdaysShort: "à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±".split("_"),
                weekdaysMin: "à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[à¶…à¶¯] LT[à¶§]",
                    nextDay: "[à·„à·™à¶§] LT[à¶§]",
                    nextWeek: "dddd LT[à¶§]",
                    lastDay: "[à¶Šà¶ºà·š] LT[à¶§]",
                    lastWeek: "[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sà¶šà·’à¶±à·Š",
                    past: "%sà¶šà¶§ à¶´à·™à¶»",
                    s: "à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º",
                    ss: "à¶­à¶­à·Šà¶´à¶» %d",
                    m: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€",
                    mm: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d",
                    h: "à¶´à·à¶º",
                    hh: "à¶´à·à¶º %d",
                    d: "à¶¯à·’à¶±à¶º",
                    dd: "à¶¯à·’à¶± %d",
                    M: "à¶¸à·à·ƒà¶º",
                    MM: "à¶¸à·à·ƒ %d",
                    y: "à·€à·ƒà¶»",
                    yy: "à·€à·ƒà¶» %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2} à·€à·à¶±à·’/,
                ordinal: function (e) {
                    return e + " à·€à·à¶±à·’"
                },
                meridiemParse: /à¶´à·™à¶» à·€à¶»à·”|à¶´à·ƒà·Š à·€à¶»à·”|à¶´à·™.à·€|à¶´.à·€./,
                isPM: function (e) {
                    return e === "à¶´.à·€." || e === "à¶´à·ƒà·Š à·€à¶»à·”"
                },
                meridiem: function (e, t, n) {
                    if (e > 11) {
                        return n ? "à¶´.à·€." : "à¶´à·ƒà·Š à·€à¶»à·”"
                    } else {
                        return n ? "à¶´à·™.à·€." : "à¶´à·™à¶» à·€à¶»à·”"
                    }
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"),
                n = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_"),
                a;

            function s(e) {
                return e > 1 && e < 5
            }

            function r(e, t, n, a) {
                var r = e + " ";
                switch (n) {
                    case "s":
                        return t || a ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
                    case "ss":
                        if (t || a) {
                            return r + (s(e) ? "sekundy" : "sekÃºnd")
                        } else {
                            return r + "sekundami"
                        }
                    case "m":
                        return t ? "minÃºta" : a ? "minÃºtu" : "minÃºtou";
                    case "mm":
                        if (t || a) {
                            return r + (s(e) ? "minÃºty" : "minÃºt")
                        } else {
                            return r + "minÃºtami"
                        }
                    case "h":
                        return t ? "hodina" : a ? "hodinu" : "hodinou";
                    case "hh":
                        if (t || a) {
                            return r + (s(e) ? "hodiny" : "hodÃ­n")
                        } else {
                            return r + "hodinami"
                        }
                    case "d":
                        return t || a ? "deÅˆ" : "dÅˆom";
                    case "dd":
                        if (t || a) {
                            return r + (s(e) ? "dni" : "dnÃ­")
                        } else {
                            return r + "dÅˆami"
                        }
                    case "M":
                        return t || a ? "mesiac" : "mesiacom";
                    case "MM":
                        if (t || a) {
                            return r + (s(e) ? "mesiace" : "mesiacov")
                        } else {
                            return r + "mesiacmi"
                        }
                    case "y":
                        return t || a ? "rok" : "rokom";
                    case "yy":
                        if (t || a) {
                            return r + (s(e) ? "roky" : "rokov")
                        } else {
                            return r + "rokmi"
                        }
                }
            }

            e.defineLocale("sk", {
                months: t,
                monthsShort: n,
                weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeÄ¾u o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo Å¡tvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[vÄera o] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[minulÃº nedeÄ¾u o] LT";
                            case 1:
                            case 2:
                                return "[minulÃ½] dddd [o] LT";
                            case 3:
                                return "[minulÃº stredu o] LT";
                            case 4:
                            case 5:
                                return "[minulÃ½] dddd [o] LT";
                            case 6:
                                return "[minulÃº sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: r,
                    ss: r,
                    m: r,
                    mm: r,
                    h: r,
                    hh: r,
                    d: r,
                    dd: r,
                    M: r,
                    MM: r,
                    y: r,
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function t(e, t, n, a) {
                var r = e + " ";
                switch (n) {
                    case "s":
                        return t || a ? "nekaj sekund" : "nekaj sekundami";
                    case "ss":
                        if (e === 1) {
                            r += t ? "sekundo" : "sekundi"
                        } else if (e === 2) {
                            r += t || a ? "sekundi" : "sekundah"
                        } else if (e < 5) {
                            r += t || a ? "sekunde" : "sekundah"
                        } else {
                            r += "sekund"
                        }
                        return r;
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        if (e === 1) {
                            r += t ? "minuta" : "minuto"
                        } else if (e === 2) {
                            r += t || a ? "minuti" : "minutama"
                        } else if (e < 5) {
                            r += t || a ? "minute" : "minutami"
                        } else {
                            r += t || a ? "minut" : "minutami"
                        }
                        return r;
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        if (e === 1) {
                            r += t ? "ura" : "uro"
                        } else if (e === 2) {
                            r += t || a ? "uri" : "urama"
                        } else if (e < 5) {
                            r += t || a ? "ure" : "urami"
                        } else {
                            r += t || a ? "ur" : "urami"
                        }
                        return r;
                    case "d":
                        return t || a ? "en dan" : "enim dnem";
                    case "dd":
                        if (e === 1) {
                            r += t || a ? "dan" : "dnem"
                        } else if (e === 2) {
                            r += t || a ? "dni" : "dnevoma"
                        } else {
                            r += t || a ? "dni" : "dnevi"
                        }
                        return r;
                    case "M":
                        return t || a ? "en mesec" : "enim mesecem";
                    case "MM":
                        if (e === 1) {
                            r += t || a ? "mesec" : "mesecem"
                        } else if (e === 2) {
                            r += t || a ? "meseca" : "mesecema"
                        } else if (e < 5) {
                            r += t || a ? "mesece" : "meseci"
                        } else {
                            r += t || a ? "mesecev" : "meseci"
                        }
                        return r;
                    case "y":
                        return t || a ? "eno leto" : "enim letom";
                    case "yy":
                        if (e === 1) {
                            r += t || a ? "leto" : "letom"
                        } else if (e === 2) {
                            r += t || a ? "leti" : "letoma"
                        } else if (e < 5) {
                            r += t || a ? "leta" : "leti"
                        } else {
                            r += t || a ? "let" : "leti"
                        }
                        return r
                }
            }

            var n;
            e.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: true,
                weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[vÄeraj ob] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[prejÅ¡njo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejÅ¡njo] [sredo] [ob] LT";
                            case 6:
                                return "[prejÅ¡njo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejÅ¡nji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Äez %s",
                    past: "pred %s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"),
                weekdays: "E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"),
                weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"),
                weekdaysParseExact: true,
                meridiemParse: /PD|MD/,
                isPM: function (e) {
                    return e.charAt(0) === "M"
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot nÃ«] LT",
                    nextDay: "[NesÃ«r nÃ«] LT",
                    nextWeek: "dddd [nÃ«] LT",
                    lastDay: "[Dje nÃ«] LT",
                    lastWeek: "dddd [e kaluar nÃ«] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nÃ« %s",
                    past: "%s mÃ« parÃ«",
                    s: "disa sekonda",
                    ss: "%d sekonda",
                    m: "njÃ« minutÃ«",
                    mm: "%d minuta",
                    h: "njÃ« orÃ«",
                    hh: "%d orÃ«",
                    d: "njÃ« ditÃ«",
                    dd: "%d ditÃ«",
                    M: "njÃ« muaj",
                    MM: "%d muaj",
                    y: "njÃ« vit",
                    yy: "%d vite"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var r = {
                    words: {
                        ss: ["sekunda", "sekunde", "sekundi"],
                        m: ["jedan minut", "jedne minute"],
                        mm: ["minut", "minute", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mesec", "meseca", "meseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function (e, t) {
                        return e === 1 ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function (e, t, n) {
                        var a = r.words[n];
                        if (n.length === 1) {
                            return t ? a[0] : a[1]
                        } else {
                            return e + " " + r.correctGrammaticalCase(e, a)
                        }
                    }
                },
                t;
            e.defineLocale("sr", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: true,
                weekdays: "nedelja_ponedeljak_utorak_sreda_Äetvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sre._Äet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juÄe u] LT",
                    lastWeek: function () {
                        var e = ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    ss: r.translate,
                    m: r.translate,
                    mm: r.translate,
                    h: r.translate,
                    hh: r.translate,
                    d: "dan",
                    dd: r.translate,
                    M: "mesec",
                    MM: r.translate,
                    y: "godinu",
                    yy: r.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var r = {
                    words: {
                        ss: ["ÑÐµÐºÑƒÐ½Ð´Ð°", "ÑÐµÐºÑƒÐ½Ð´Ðµ", "ÑÐµÐºÑƒÐ½Ð´Ð¸"],
                        m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],
                        mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],
                        h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],
                        hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"],
                        dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"],
                        MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"],
                        yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"]
                    },
                    correctGrammaticalCase: function (e, t) {
                        return e === 1 ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function (e, t, n) {
                        var a = r.words[n];
                        if (n.length === 1) {
                            return t ? a[0] : a[1]
                        } else {
                            return e + " " + r.correctGrammaticalCase(e, a)
                        }
                    }
                },
                t;
            e.defineLocale("sr-cyrl", {
                months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€_Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€_Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€_Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€_Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€".split("_"),
                monthsShort: "Ñ˜Ð°Ð½._Ñ„ÐµÐ±._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³._ÑÐµÐ¿._Ð¾ÐºÑ‚._Ð½Ð¾Ð²._Ð´ÐµÑ†.".split("_"),
                monthsParseExact: true,
                weekdays: "Ð½ÐµÐ´ÐµÑ™Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº_ÑƒÑ‚Ð¾Ñ€Ð°Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº_Ð¿ÐµÑ‚Ð°Ðº_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                weekdaysShort: "Ð½ÐµÐ´._Ð¿Ð¾Ð½._ÑƒÑ‚Ð¾._ÑÑ€Ðµ._Ñ‡ÐµÑ‚._Ð¿ÐµÑ‚._ÑÑƒÐ±.".split("_"),
                weekdaysMin: "Ð½Ðµ_Ð¿Ð¾_ÑƒÑ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_ÑÑƒ".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",
                    nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
                            case 3:
                                return "[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
                            case 6:
                                return "[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Ñƒ] dddd [Ñƒ] LT"
                        }
                    },
                    lastDay: "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",
                    lastWeek: function () {
                        var e = ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ð·Ð° %s",
                    past: "Ð¿Ñ€Ðµ %s",
                    s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                    ss: r.translate,
                    m: r.translate,
                    mm: r.translate,
                    h: r.translate,
                    hh: r.translate,
                    d: "Ð´Ð°Ð½",
                    dd: r.translate,
                    M: "Ð¼ÐµÑÐµÑ†",
                    MM: r.translate,
                    y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                    yy: r.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("ss", {
                months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Namuhla nga] LT",
                    nextDay: "[Kusasa nga] LT",
                    nextWeek: "dddd [nga] LT",
                    lastDay: "[Itolo nga] LT",
                    lastWeek: "dddd [leliphelile] [nga] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nga %s",
                    past: "wenteka nga %s",
                    s: "emizuzwana lomcane",
                    ss: "%d mzuzwana",
                    m: "umzuzu",
                    mm: "%d emizuzu",
                    h: "lihora",
                    hh: "%d emahora",
                    d: "lilanga",
                    dd: "%d emalanga",
                    M: "inyanga",
                    MM: "%d tinyanga",
                    y: "umnyaka",
                    yy: "%d iminyaka"
                },
                meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                meridiem: function (e, t, n) {
                    if (e < 11) {
                        return "ekuseni"
                    } else if (e < 15) {
                        return "emini"
                    } else if (e < 19) {
                        return "entsambama"
                    } else {
                        return "ebusuku"
                    }
                },
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "ekuseni") {
                        return e
                    } else if (t === "emini") {
                        return e >= 11 ? e : e + 12
                    } else if (t === "entsambama" || t === "ebusuku") {
                        if (e === 0) {
                            return 0
                        }
                        return e + 12
                    }
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: "%d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),
                weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
                weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[IgÃ¥r] LT",
                    nextWeek: "[PÃ¥] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "fÃ¶r %s sedan",
                    s: "nÃ¥gra sekunder",
                    ss: "%d sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en mÃ¥nad",
                    MM: "%d mÃ¥nader",
                    y: "ett Ã¥r",
                    yy: "%d Ã¥r"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? ":e" : t === 1 ? ":a" : t === 2 ? ":a" : t === 3 ? ":e" : ":e";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "hh:mm A",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    ss: "sekunde %d",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "siku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = {
                    1: "à¯§",
                    2: "à¯¨",
                    3: "à¯©",
                    4: "à¯ª",
                    5: "à¯«",
                    6: "à¯¬",
                    7: "à¯­",
                    8: "à¯®",
                    9: "à¯¯",
                    0: "à¯¦"
                },
                n = {
                    "à¯§": "1",
                    "à¯¨": "2",
                    "à¯©": "3",
                    "à¯ª": "4",
                    "à¯«": "5",
                    "à¯¬": "6",
                    "à¯­": "7",
                    "à¯®": "8",
                    "à¯¯": "9",
                    "à¯¦": "0"
                },
                a;
            e.defineLocale("ta", {
                months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
                monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
                weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),
                weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),
                weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, HH:mm",
                    LLLL: "dddd, D MMMM YYYY, HH:mm"
                },
                calendar: {
                    sameDay: "[à®‡à®©à¯à®±à¯] LT",
                    nextDay: "[à®¨à®¾à®³à¯ˆ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT",
                    lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s à®‡à®²à¯",
                    past: "%s à®®à¯à®©à¯",
                    s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
                    ss: "%d à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
                    m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",
                    mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",
                    h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
                    hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
                    d: "à®’à®°à¯ à®¨à®¾à®³à¯",
                    dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯",
                    M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯",
                    MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯",
                    y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",
                    yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"
                },
                dayOfMonthOrdinalParse: /\d{1,2}à®µà®¤à¯/,
                ordinal: function (e) {
                    return e + "à®µà®¤à¯"
                },
                preparse: function (e) {
                    return e.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, function (e) {
                        return n[e]
                    })
                },
                postformat: function (e) {
                    return e.replace(/\d/g, function (e) {
                        return t[e]
                    })
                },
                meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/,
                meridiem: function (e, t, n) {
                    if (e < 2) {
                        return " à®¯à®¾à®®à®®à¯"
                    } else if (e < 6) {
                        return " à®µà¯ˆà®•à®±à¯ˆ"
                    } else if (e < 10) {
                        return " à®•à®¾à®²à¯ˆ"
                    } else if (e < 14) {
                        return " à®¨à®£à¯à®ªà®•à®²à¯"
                    } else if (e < 18) {
                        return " à®Žà®±à¯à®ªà®¾à®Ÿà¯"
                    } else if (e < 22) {
                        return " à®®à®¾à®²à¯ˆ"
                    } else {
                        return " à®¯à®¾à®®à®®à¯"
                    }
                },
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à®¯à®¾à®®à®®à¯") {
                        return e < 2 ? e : e + 12
                    } else if (t === "à®µà¯ˆà®•à®±à¯ˆ" || t === "à®•à®¾à®²à¯ˆ") {
                        return e
                    } else if (t === "à®¨à®£à¯à®ªà®•à®²à¯") {
                        return e >= 10 ? e : e + 12
                    } else {
                        return e + 12
                    }
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("te", {
                months: "à°œà°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±‡_à°œà±‚à°¨à±_à°œà±à°²à±ˆ_à°†à°—à°¸à±à°Ÿà±_à°¸à±†à°ªà±à°Ÿà±†à°‚à°¬à°°à±_à°…à°•à±à°Ÿà±‹à°¬à°°à±_à°¨à°µà°‚à°¬à°°à±_à°¡à°¿à°¸à±†à°‚à°¬à°°à±".split("_"),
                monthsShort: "à°œà°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿._à°®à±‡_à°œà±‚à°¨à±_à°œà±à°²à±ˆ_à°†à°—._à°¸à±†à°ªà±._à°…à°•à±à°Ÿà±‹._à°¨à°µ._à°¡à°¿à°¸à±†.".split("_"),
                monthsParseExact: true,
                weekdays: "à°†à°¦à°¿à°µà°¾à°°à°‚_à°¸à±‹à°®à°µà°¾à°°à°‚_à°®à°‚à°—à°³à°µà°¾à°°à°‚_à°¬à±à°§à°µà°¾à°°à°‚_à°—à±à°°à±à°µà°¾à°°à°‚_à°¶à±à°•à±à°°à°µà°¾à°°à°‚_à°¶à°¨à°¿à°µà°¾à°°à°‚".split("_"),
                weekdaysShort: "à°†à°¦à°¿_à°¸à±‹à°®_à°®à°‚à°—à°³_à°¬à±à°§_à°—à±à°°à±_à°¶à±à°•à±à°°_à°¶à°¨à°¿".split("_"),
                weekdaysMin: "à°†_à°¸à±‹_à°®à°‚_à°¬à±_à°—à±_à°¶à±_à°¶".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[à°¨à±‡à°¡à±] LT",
                    nextDay: "[à°°à±‡à°ªà±] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[à°¨à°¿à°¨à±à°¨] LT",
                    lastWeek: "[à°—à°¤] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s à°²à±‹",
                    past: "%s à°•à±à°°à°¿à°¤à°‚",
                    s: "à°•à±Šà°¨à±à°¨à°¿ à°•à±à°·à°£à°¾à°²à±",
                    ss: "%d à°¸à±†à°•à°¨à±à°²à±",
                    m: "à°’à°• à°¨à°¿à°®à°¿à°·à°‚",
                    mm: "%d à°¨à°¿à°®à°¿à°·à°¾à°²à±",
                    h: "à°’à°• à°—à°‚à°Ÿ",
                    hh: "%d à°—à°‚à°Ÿà°²à±",
                    d: "à°’à°• à°°à±‹à°œà±",
                    dd: "%d à°°à±‹à°œà±à°²à±",
                    M: "à°’à°• à°¨à±†à°²",
                    MM: "%d à°¨à±†à°²à°²à±",
                    y: "à°’à°• à°¸à°‚à°µà°¤à±à°¸à°°à°‚",
                    yy: "%d à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°²à±"
                },
                dayOfMonthOrdinalParse: /\d{1,2}à°µ/,
                ordinal: "%dà°µ",
                meridiemParse: /à°°à°¾à°¤à±à°°à°¿|à°‰à°¦à°¯à°‚|à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚|à°¸à°¾à°¯à°‚à°¤à±à°°à°‚/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "à°°à°¾à°¤à±à°°à°¿") {
                        return e < 4 ? e : e + 12
                    } else if (t === "à°‰à°¦à°¯à°‚") {
                        return e
                    } else if (t === "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚") {
                        return e >= 10 ? e : e + 12
                    } else if (t === "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "à°°à°¾à°¤à±à°°à°¿"
                    } else if (e < 10) {
                        return "à°‰à°¦à°¯à°‚"
                    } else if (e < 17) {
                        return "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚"
                    } else if (e < 20) {
                        return "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚"
                    } else {
                        return "à°°à°¾à°¤à±à°°à°¿"
                    }
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("tet", {
                months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_JuÃ±u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
                weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
                weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ohin iha] LT",
                    nextDay: "[Aban iha] LT",
                    nextWeek: "dddd [iha] LT",
                    lastDay: "[Horiseik iha] LT",
                    lastWeek: "dddd [semana kotuk] [iha] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "iha %s",
                    past: "%s liuba",
                    s: "segundu balun",
                    ss: "segundu %d",
                    m: "minutu ida",
                    mm: "minutu %d",
                    h: "oras ida",
                    hh: "oras %d",
                    d: "loron ida",
                    dd: "loron %d",
                    M: "fulan ida",
                    MM: "fulan %d",
                    y: "tinan ida",
                    yy: "tinan %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var a = {
                    0: "-ÑƒÐ¼",
                    1: "-ÑƒÐ¼",
                    2: "-ÑŽÐ¼",
                    3: "-ÑŽÐ¼",
                    4: "-ÑƒÐ¼",
                    5: "-ÑƒÐ¼",
                    6: "-ÑƒÐ¼",
                    7: "-ÑƒÐ¼",
                    8: "-ÑƒÐ¼",
                    9: "-ÑƒÐ¼",
                    10: "-ÑƒÐ¼",
                    12: "-ÑƒÐ¼",
                    13: "-ÑƒÐ¼",
                    20: "-ÑƒÐ¼",
                    30: "-ÑŽÐ¼",
                    40: "-ÑƒÐ¼",
                    50: "-ÑƒÐ¼",
                    60: "-ÑƒÐ¼",
                    70: "-ÑƒÐ¼",
                    80: "-ÑƒÐ¼",
                    90: "-ÑƒÐ¼",
                    100: "-ÑƒÐ¼"
                },
                t;
            e.defineLocale("tg", {
                months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
                monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
                weekdays: "ÑÐºÑˆÐ°Ð½Ð±Ðµ_Ð´ÑƒÑˆÐ°Ð½Ð±Ðµ_ÑÐµÑˆÐ°Ð½Ð±Ðµ_Ñ‡Ð¾Ñ€ÑˆÐ°Ð½Ð±Ðµ_Ð¿Ð°Ð½Ò·ÑˆÐ°Ð½Ð±Ðµ_Ò·ÑƒÐ¼ÑŠÐ°_ÑˆÐ°Ð½Ð±Ðµ".split("_"),
                weekdaysShort: "ÑÑˆÐ±_Ð´ÑˆÐ±_ÑÑˆÐ±_Ñ‡ÑˆÐ±_Ð¿ÑˆÐ±_Ò·ÑƒÐ¼_ÑˆÐ½Ð±".split("_"),
                weekdaysMin: "ÑÑˆ_Ð´Ñˆ_ÑÑˆ_Ñ‡Ñˆ_Ð¿Ñˆ_Ò·Ð¼_ÑˆÐ±".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ð˜Ð¼Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
                    nextDay: "[ÐŸÐ°Ð³Ð¾Ò³ ÑÐ¾Ð°Ñ‚Ð¸] LT",
                    lastDay: "[Ð”Ð¸Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT",
                    nextWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð¾ÑÐ½Ð´Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
                    lastWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð³ÑƒÐ·Ð°ÑˆÑ‚Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ð±Ð°ÑŠÐ´Ð¸ %s",
                    past: "%s Ð¿ÐµÑˆ",
                    s: "ÑÐºÑ‡Ð°Ð½Ð´ ÑÐ¾Ð½Ð¸Ñ",
                    m: "ÑÐº Ð´Ð°Ò›Ð¸Ò›Ð°",
                    mm: "%d Ð´Ð°Ò›Ð¸Ò›Ð°",
                    h: "ÑÐº ÑÐ¾Ð°Ñ‚",
                    hh: "%d ÑÐ¾Ð°Ñ‚",
                    d: "ÑÐº Ñ€Ó¯Ð·",
                    dd: "%d Ñ€Ó¯Ð·",
                    M: "ÑÐº Ð¼Ð¾Ò³",
                    MM: "%d Ð¼Ð¾Ò³",
                    y: "ÑÐº ÑÐ¾Ð»",
                    yy: "%d ÑÐ¾Ð»"
                },
                meridiemParse: /ÑˆÐ°Ð±|ÑÑƒÐ±Ò³|Ñ€Ó¯Ð·|Ð±ÐµÐ³Ð¾Ò³/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "ÑˆÐ°Ð±") {
                        return e < 4 ? e : e + 12
                    } else if (t === "ÑÑƒÐ±Ò³") {
                        return e
                    } else if (t === "Ñ€Ó¯Ð·") {
                        return e >= 11 ? e : e + 12
                    } else if (t === "Ð±ÐµÐ³Ð¾Ò³") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "ÑˆÐ°Ð±"
                    } else if (e < 11) {
                        return "ÑÑƒÐ±Ò³"
                    } else if (e < 16) {
                        return "Ñ€Ó¯Ð·"
                    } else if (e < 19) {
                        return "Ð±ÐµÐ³Ð¾Ò³"
                    } else {
                        return "ÑˆÐ°Ð±"
                    }
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ÑƒÐ¼|ÑŽÐ¼)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = e >= 100 ? 100 : null;
                    return e + (a[e] || a[t] || a[n])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("th", {
                months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),
                monthsShort: "à¸¡.à¸„._à¸.à¸ž._à¸¡à¸µ.à¸„._à¹€à¸¡.à¸¢._à¸ž.à¸„._à¸¡à¸´.à¸¢._à¸.à¸„._à¸ª.à¸„._à¸.à¸¢._à¸•.à¸„._à¸ž.à¸¢._à¸˜.à¸„.".split("_"),
                monthsParseExact: true,
                weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
                weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
                weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm",
                    LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm"
                },
                meridiemParse: /à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡|à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡/,
                isPM: function (e) {
                    return e === "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
                    } else {
                        return "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
                    }
                },
                calendar: {
                    sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                    nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                    nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",
                    lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                    lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "à¸­à¸µà¸ %s",
                    past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",
                    s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",
                    ss: "%d à¸§à¸´à¸™à¸²à¸—à¸µ",
                    m: "1 à¸™à¸²à¸—à¸µ",
                    mm: "%d à¸™à¸²à¸—à¸µ",
                    h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                    hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                    d: "1 à¸§à¸±à¸™",
                    dd: "%d à¸§à¸±à¸™",
                    M: "1 à¹€à¸”à¸·à¸­à¸™",
                    MM: "%d à¹€à¸”à¸·à¸­à¸™",
                    y: "1 à¸›à¸µ",
                    yy: "%d à¸›à¸µ"
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var s = {
                    1: "'inji",
                    5: "'inji",
                    8: "'inji",
                    70: "'inji",
                    80: "'inji",
                    2: "'nji",
                    7: "'nji",
                    20: "'nji",
                    50: "'nji",
                    3: "'Ã¼nji",
                    4: "'Ã¼nji",
                    100: "'Ã¼nji",
                    6: "'njy",
                    9: "'unjy",
                    10: "'unjy",
                    30: "'unjy",
                    60: "'ynjy",
                    90: "'ynjy"
                },
                t;
            e.defineLocale("tk", {
                months: "Ãanwar_Fewral_Mart_Aprel_MaÃ½_IÃ½un_IÃ½ul_Awgust_SentÃ½abr_OktÃ½abr_NoÃ½abr_Dekabr".split("_"),
                monthsShort: "Ãan_Few_Mar_Apr_MaÃ½_IÃ½n_IÃ½l_Awg_Sen_Okt_NoÃ½_Dek".split("_"),
                weekdays: "ÃekÅŸenbe_DuÅŸenbe_SiÅŸenbe_Ã‡arÅŸenbe_PenÅŸenbe_Anna_Åženbe".split("_"),
                weekdaysShort: "Ãek_DuÅŸ_SiÅŸ_Ã‡ar_Pen_Ann_Åžen".split("_"),
                weekdaysMin: "Ãk_DÅŸ_SÅŸ_Ã‡r_Pn_An_Åžn".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugÃ¼n sagat] LT",
                    nextDay: "[ertir sagat] LT",
                    nextWeek: "[indiki] dddd [sagat] LT",
                    lastDay: "[dÃ¼Ã½n] LT",
                    lastWeek: "[geÃ§en] dddd [sagat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s soÅˆ",
                    past: "%s Ã¶Åˆ",
                    s: "birnÃ¤Ã§e sekunt",
                    m: "bir minut",
                    mm: "%d minut",
                    h: "bir sagat",
                    hh: "%d sagat",
                    d: "bir gÃ¼n",
                    dd: "%d gÃ¼n",
                    M: "bir aÃ½",
                    MM: "%d aÃ½",
                    y: "bir Ã½yl",
                    yy: "%d Ã½yl"
                },
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "Do":
                        case "DD":
                            return e;
                        default:
                            if (e === 0) {
                                return e + "'unjy"
                            }
                            var n = e % 10,
                                a = e % 100 - n,
                                r = e >= 100 ? 100 : null;
                            return e + (s[n] || s[a] || s[r])
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function (e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var s = "pagh_waâ€™_chaâ€™_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"),
                t;

            function n(e) {
                var t = e;
                t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "leS" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "waQ" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "nem" : t + " pIq";
                return t
            }

            function a(e) {
                var t = e;
                t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "Huâ€™" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "wen" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "ben" : t + " ret";
                return t
            }

            function r(e, t, n, a) {
                var r = i(e);
                switch (n) {
                    case "ss":
                        return r + " lup";
                    case "mm":
                        return r + " tup";
                    case "hh":
                        return r + " rep";
                    case "dd":
                        return r + " jaj";
                    case "MM":
                        return r + " jar";
                    case "yy":
                        return r + " DIS"
                }
            }

            function i(e) {
                var t = Math.floor(e % 1e3 / 100),
                    n = Math.floor(e % 100 / 10),
                    a = e % 10,
                    r = "";
                if (t > 0) {
                    r += s[t] + "vatlh"
                }
                if (n > 0) {
                    r += (r !== "" ? " " : "") + s[n] + "maH"
                }
                if (a > 0) {
                    r += (r !== "" ? " " : "") + s[a]
                }
                return r === "" ? "pagh" : r
            }

            e.defineLocale("tlh", {
                months: "teraâ€™ jar waâ€™_teraâ€™ jar chaâ€™_teraâ€™ jar wej_teraâ€™ jar loS_teraâ€™ jar vagh_teraâ€™ jar jav_teraâ€™ jar Soch_teraâ€™ jar chorgh_teraâ€™ jar Hut_teraâ€™ jar waâ€™maH_teraâ€™ jar waâ€™maH waâ€™_teraâ€™ jar waâ€™maH chaâ€™".split("_"),
                monthsShort: "jar waâ€™_jar chaâ€™_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar waâ€™maH_jar waâ€™maH waâ€™_jar waâ€™maH chaâ€™".split("_"),
                monthsParseExact: true,
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[waâ€™leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[waâ€™Huâ€™] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: n,
                    past: a,
                    s: "puS lup",
                    ss: r,
                    m: "waâ€™ tup",
                    mm: r,
                    h: "waâ€™ rep",
                    hh: r,
                    d: "waâ€™ jaj",
                    dd: r,
                    M: "waâ€™ jar",
                    MM: r,
                    y: "waâ€™ DIS",
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var s = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'Ã¼ncÃ¼",
                    4: "'Ã¼ncÃ¼",
                    100: "'Ã¼ncÃ¼",
                    6: "'ncÄ±",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'Ä±ncÄ±",
                    90: "'Ä±ncÄ±"
                },
                t;
            e.defineLocale("tr", {
                months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),
                monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return n ? "Ã¶Ã¶" : "Ã–Ã–"
                    } else {
                        return n ? "Ã¶s" : "Ã–S"
                    }
                },
                meridiemParse: /Ã¶Ã¶|Ã–Ã–|Ã¶s|Ã–S/,
                isPM: function (e) {
                    return e === "Ã¶s" || e === "Ã–S"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugÃ¼n saat] LT",
                    nextDay: "[yarÄ±n saat] LT",
                    nextWeek: "[gelecek] dddd [saat] LT",
                    lastDay: "[dÃ¼n] LT",
                    lastWeek: "[geÃ§en] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s Ã¶nce",
                    s: "birkaÃ§ saniye",
                    ss: "%d saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gÃ¼n",
                    dd: "%d gÃ¼n",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yÄ±l",
                    yy: "%d yÄ±l"
                },
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "Do":
                        case "DD":
                            return e;
                        default:
                            if (e === 0) {
                                return e + "'Ä±ncÄ±"
                            }
                            var n = e % 10,
                                a = e % 100 - n,
                                r = e >= 100 ? 100 : null;
                            return e + (s[n] || s[a] || s[r])
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;

            function n(e, t, n, a) {
                var r = {
                    s: ["viensas secunds", "'iensas secunds"],
                    ss: [e + " secunds", "" + e + " secunds"],
                    m: ["'n mÃ­ut", "'iens mÃ­ut"],
                    mm: [e + " mÃ­uts", "" + e + " mÃ­uts"],
                    h: ["'n Ã¾ora", "'iensa Ã¾ora"],
                    hh: [e + " Ã¾oras", "" + e + " Ã¾oras"],
                    d: ["'n ziua", "'iensa ziua"],
                    dd: [e + " ziuas", "" + e + " ziuas"],
                    M: ["'n mes", "'iens mes"],
                    MM: [e + " mesen", "" + e + " mesen"],
                    y: ["'n ar", "'iens ar"],
                    yy: [e + " ars", "" + e + " ars"]
                };
                return a ? r[n][0] : t ? r[n][0] : r[n][1]
            }

            e.defineLocale("tzl", {
                months: "Januar_Fevraglh_MarÃ§_AvrÃ¯u_Mai_GÃ¼n_Julia_Guscht_Setemvar_ListopÃ¤ts_Noemvar_Zecemvar".split("_"),
                monthsShort: "Jan_Fev_Mar_Avr_Mai_GÃ¼n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                weekdays: "SÃºladi_LÃºneÃ§i_Maitzi_MÃ¡rcuri_XhÃºadi_ViÃ©nerÃ§i_SÃ¡turi".split("_"),
                weekdaysShort: "SÃºl_LÃºn_Mai_MÃ¡r_XhÃº_ViÃ©_SÃ¡t".split("_"),
                weekdaysMin: "SÃº_LÃº_Ma_MÃ¡_Xh_Vi_SÃ¡".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM [dallas] YYYY",
                    LLL: "D. MMMM [dallas] YYYY HH.mm",
                    LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                },
                meridiemParse: /d\'o|d\'a/i,
                isPM: function (e) {
                    return "d'o" === e.toLowerCase()
                },
                meridiem: function (e, t, n) {
                    if (e > 11) {
                        return n ? "d'o" : "D'O"
                    } else {
                        return n ? "d'a" : "D'A"
                    }
                },
                calendar: {
                    sameDay: "[oxhi Ã ] LT",
                    nextDay: "[demÃ  Ã ] LT",
                    nextWeek: "dddd [Ã ] LT",
                    lastDay: "[ieiri Ã ] LT",
                    lastWeek: "[sÃ¼r el] dddd [lasteu Ã ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "osprei %s",
                    past: "ja%s",
                    s: n,
                    ss: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("tzm", {
                months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
                monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
                weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
                weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
                weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[â´°âµ™â´·âµ… â´´] LT",
                    nextDay: "[â´°âµ™â´½â´° â´´] LT",
                    nextWeek: "dddd [â´´] LT",
                    lastDay: "[â´°âµšâ´°âµâµœ â´´] LT",
                    lastWeek: "dddd [â´´] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s",
                    past: "âµ¢â´°âµ %s",
                    s: "âµ‰âµŽâµ‰â´½",
                    ss: "%d âµ‰âµŽâµ‰â´½",
                    m: "âµŽâµ‰âµâµ“â´º",
                    mm: "%d âµŽâµ‰âµâµ“â´º",
                    h: "âµ™â´°âµ„â´°",
                    hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ",
                    d: "â´°âµ™âµ™",
                    dd: "%d oâµ™âµ™â´°âµ",
                    M: "â´°âµ¢oâµ“âµ”",
                    MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ",
                    y: "â´°âµ™â´³â´°âµ™",
                    yy: "%d âµ‰âµ™â´³â´°âµ™âµ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("tzm-latn", {
                months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    ss: "%d imik",
                    m: "minuá¸",
                    mm: "%d minuá¸",
                    h: "saÉ›a",
                    hh: "%d tassaÉ›in",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js language configuration
            var t;
            e.defineLocale("ug-cn", {
                months: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
                monthsShort: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
                weekdays: "ÙŠÛ•ÙƒØ´Û•Ù†Ø¨Û•_Ø¯ÛˆØ´Û•Ù†Ø¨Û•_Ø³Û•ÙŠØ´Û•Ù†Ø¨Û•_Ú†Ø§Ø±Ø´Û•Ù†Ø¨Û•_Ù¾Û•ÙŠØ´Û•Ù†Ø¨Û•_Ø¬ÛˆÙ…Û•_Ø´Û•Ù†Ø¨Û•".split("_"),
                weekdaysShort: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
                weekdaysMin: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰",
                    LLL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm",
                    LLLL: "ddddØŒ YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm"
                },
                meridiemParse: /ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•|Ø³Û•Ú¾Û•Ø±|Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†|Ú†ÛˆØ´|Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†|ÙƒÛ•Ú†/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" || t === "Ø³Û•Ú¾Û•Ø±" || t === "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†") {
                        return e
                    } else if (t === "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" || t === "ÙƒÛ•Ú†") {
                        return e + 12
                    } else {
                        return e >= 11 ? e : e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    var a = e * 100 + t;
                    if (a < 600) {
                        return "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•"
                    } else if (a < 900) {
                        return "Ø³Û•Ú¾Û•Ø±"
                    } else if (a < 1130) {
                        return "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†"
                    } else if (a < 1230) {
                        return "Ú†ÛˆØ´"
                    } else if (a < 1800) {
                        return "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†"
                    } else {
                        return "ÙƒÛ•Ú†"
                    }
                },
                calendar: {
                    sameDay: "[Ø¨ÛˆÚ¯ÛˆÙ† Ø³Ø§Ø¦Û•Øª] LT",
                    nextDay: "[Ø¦Û•ØªÛ• Ø³Ø§Ø¦Û•Øª] LT",
                    nextWeek: "[ÙƒÛÙ„Û•Ø±ÙƒÙ‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
                    lastDay: "[ØªÛ†Ù†ÛˆÚ¯ÛˆÙ†] LT",
                    lastWeek: "[Ø¦Ø§Ù„Ø¯Ù‰Ù†Ù‚Ù‰] dddd [Ø³Ø§Ø¦Û•Øª] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ÙƒÛÙŠÙ‰Ù†",
                    past: "%s Ø¨Û‡Ø±Û‡Ù†",
                    s: "Ù†Û•Ú†Ú†Û• Ø³ÛÙƒÙˆÙ†Øª",
                    ss: "%d Ø³ÛÙƒÙˆÙ†Øª",
                    m: "Ø¨Ù‰Ø± Ù…Ù‰Ù†Û‡Øª",
                    mm: "%d Ù…Ù‰Ù†Û‡Øª",
                    h: "Ø¨Ù‰Ø± Ø³Ø§Ø¦Û•Øª",
                    hh: "%d Ø³Ø§Ø¦Û•Øª",
                    d: "Ø¨Ù‰Ø± ÙƒÛˆÙ†",
                    dd: "%d ÙƒÛˆÙ†",
                    M: "Ø¨Ù‰Ø± Ø¦Ø§ÙŠ",
                    MM: "%d Ø¦Ø§ÙŠ",
                    y: "Ø¨Ù‰Ø± ÙŠÙ‰Ù„",
                    yy: "%d ÙŠÙ‰Ù„"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(-ÙƒÛˆÙ†Ù‰|-Ø¦Ø§ÙŠ|-Ú¾Û•Ù¾ØªÛ•)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "-ÙƒÛˆÙ†Ù‰";
                        case "w":
                        case "W":
                            return e + "-Ú¾Û•Ù¾ØªÛ•";
                        default:
                            return e
                    }
                },
                preparse: function (e) {
                    return e.replace(/ØŒ/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "ØŒ")
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";

            //! moment.js locale configuration
            function r(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }

            function t(e, t, n) {
                var a = {
                    ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´",
                    mm: t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",
                    hh: t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",
                    dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",
                    MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",
                    yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"
                };
                if (n === "m") {
                    return t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ"
                } else if (n === "h") {
                    return t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ"
                } else {
                    return e + " " + r(a[n], +e)
                }
            }

            function n(e, t) {
                var n = {
                        nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                        accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
                        genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")
                    },
                    a;
                if (e === true) {
                    return n["nominative"].slice(1, 7).concat(n["nominative"].slice(0, 1))
                }
                if (!e) {
                    return n["nominative"]
                }
                a = /(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
                return n[a][e.day()]
            }

            function a(e) {
                return function () {
                    return e + "Ð¾" + (this.hours() === 11 ? "Ð±" : "") + "] LT"
                }
            }

            var s;
            e.defineLocale("uk", {
                months: {
                    format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"),
                    standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_")
                },
                monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
                weekdays: n,
                weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY Ñ€.",
                    LLL: "D MMMM YYYY Ñ€., HH:mm",
                    LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm"
                },
                calendar: {
                    sameDay: a("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
                    nextDay: a("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
                    lastDay: a("[Ð’Ñ‡Ð¾Ñ€Ð° "),
                    nextWeek: a("[Ð£] dddd ["),
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return a("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return a("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ð·Ð° %s",
                    past: "%s Ñ‚Ð¾Ð¼Ñƒ",
                    s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",
                    ss: t,
                    m: t,
                    mm: t,
                    h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                    hh: t,
                    d: "Ð´ÐµÐ½ÑŒ",
                    dd: t,
                    M: "Ð¼Ñ–ÑÑÑ†ÑŒ",
                    MM: t,
                    y: "Ñ€Ñ–Ðº",
                    yy: t
                },
                meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
                isPM: function (e) {
                    return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(e)
                },
                meridiem: function (e, t, n) {
                    if (e < 4) {
                        return "Ð½Ð¾Ñ‡Ñ–"
                    } else if (e < 12) {
                        return "Ñ€Ð°Ð½ÐºÑƒ"
                    } else if (e < 17) {
                        return "Ð´Ð½Ñ"
                    } else {
                        return "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
                    }
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e + "-Ð¹";
                        case "D":
                            return e + "-Ð³Ð¾";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t = ["Ø¬Ù†ÙˆØ±ÛŒ", "ÙØ±ÙˆØ±ÛŒ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÛŒÙ„", "Ù…Ø¦ÛŒ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¦ÛŒ", "Ø§Ú¯Ø³Øª", "Ø³ØªÙ…Ø¨Ø±", "Ø§Ú©ØªÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "Ø¯Ø³Ù…Ø¨Ø±"],
                n = ["Ø§ØªÙˆØ§Ø±", "Ù¾ÛŒØ±", "Ù…Ù†Ú¯Ù„", "Ø¨Ø¯Ú¾", "Ø¬Ù…Ø¹Ø±Ø§Øª", "Ø¬Ù…Ø¹Û", "ÛÙØªÛ"],
                a;
            e.defineLocale("ur", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ddddØŒ D MMMM YYYY HH:mm"
                },
                meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
                isPM: function (e) {
                    return "Ø´Ø§Ù…" === e
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return "ØµØ¨Ø­"
                    }
                    return "Ø´Ø§Ù…"
                },
                calendar: {
                    sameDay: "[Ø¢Ø¬ Ø¨ÙˆÙ‚Øª] LT",
                    nextDay: "[Ú©Ù„ Ø¨ÙˆÙ‚Øª] LT",
                    nextWeek: "dddd [Ø¨ÙˆÙ‚Øª] LT",
                    lastDay: "[Ú¯Ø°Ø´ØªÛ Ø±ÙˆØ² Ø¨ÙˆÙ‚Øª] LT",
                    lastWeek: "[Ú¯Ø°Ø´ØªÛ] dddd [Ø¨ÙˆÙ‚Øª] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s Ø¨Ø¹Ø¯",
                    past: "%s Ù‚Ø¨Ù„",
                    s: "Ú†Ù†Ø¯ Ø³ÛŒÚ©Ù†Úˆ",
                    ss: "%d Ø³ÛŒÚ©Ù†Úˆ",
                    m: "Ø§ÛŒÚ© Ù…Ù†Ù¹",
                    mm: "%d Ù…Ù†Ù¹",
                    h: "Ø§ÛŒÚ© Ú¯Ú¾Ù†Ù¹Û",
                    hh: "%d Ú¯Ú¾Ù†Ù¹Û’",
                    d: "Ø§ÛŒÚ© Ø¯Ù†",
                    dd: "%d Ø¯Ù†",
                    M: "Ø§ÛŒÚ© Ù…Ø§Û",
                    MM: "%d Ù…Ø§Û",
                    y: "Ø§ÛŒÚ© Ø³Ø§Ù„",
                    yy: "%d Ø³Ø§Ù„"
                },
                preparse: function (e) {
                    return e.replace(/ØŒ/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "ØŒ")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("uz", {
                months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
                monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
                weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"),
                weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"),
                weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                    nextDay: "[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]",
                    nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                    lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                    lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°",
                    past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½",
                    s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚",
                    ss: "%d Ñ„ÑƒÑ€ÑÐ°Ñ‚",
                    m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°",
                    mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°",
                    h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚",
                    hh: "%d ÑÐ¾Ð°Ñ‚",
                    d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½",
                    dd: "%d ÐºÑƒÐ½",
                    M: "Ð±Ð¸Ñ€ Ð¾Ð¹",
                    MM: "%d Ð¾Ð¹",
                    y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»",
                    yy: "%d Ð¹Ð¸Ð»"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("uz-latn", {
                months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Bugun soat] LT [da]",
                    nextDay: "[Ertaga] LT [da]",
                    nextWeek: "dddd [kuni soat] LT [da]",
                    lastDay: "[Kecha soat] LT [da]",
                    lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Yaqin %s ichida",
                    past: "Bir necha %s oldin",
                    s: "soniya",
                    ss: "%d soniya",
                    m: "bir daqiqa",
                    mm: "%d daqiqa",
                    h: "bir soat",
                    hh: "%d soat",
                    d: "bir kun",
                    dd: "%d kun",
                    M: "bir oy",
                    MM: "%d oy",
                    y: "bir yil",
                    yy: "%d yil"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("vi", {
                months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),
                monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
                monthsParseExact: true,
                weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: true,
                meridiemParse: /sa|ch/i,
                isPM: function (e) {
                    return /^ch$/i.test(e)
                },
                meridiem: function (e, t, n) {
                    if (e < 12) {
                        return n ? "sa" : "SA"
                    } else {
                        return n ? "ch" : "CH"
                    }
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [nÄƒm] YYYY",
                    LLL: "D MMMM [nÄƒm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [nÄƒm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[HÃ´m nay lÃºc] LT",
                    nextDay: "[NgÃ y mai lÃºc] LT",
                    nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT",
                    lastDay: "[HÃ´m qua lÃºc] LT",
                    lastWeek: "dddd [tuáº§n trÆ°á»›c lÃºc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tá»›i",
                    past: "%s trÆ°á»›c",
                    s: "vÃ i giÃ¢y",
                    ss: "%d giÃ¢y",
                    m: "má»™t phÃºt",
                    mm: "%d phÃºt",
                    h: "má»™t giá»",
                    hh: "%d giá»",
                    d: "má»™t ngÃ y",
                    dd: "%d ngÃ y",
                    M: "má»™t thÃ¡ng",
                    MM: "%d thÃ¡ng",
                    y: "má»™t nÄƒm",
                    yy: "%d nÄƒm"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function (e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("x-pseudo", {
                months: "J~Ã¡Ã±ÃºÃ¡~rÃ½_F~Ã©brÃº~Ã¡rÃ½_~MÃ¡rc~h_Ãp~rÃ­l_~MÃ¡Ã½_~JÃºÃ±Ã©~_JÃºl~Ã½_ÃÃº~gÃºst~_SÃ©p~tÃ©mb~Ã©r_Ã“~ctÃ³b~Ã©r_Ã‘~Ã³vÃ©m~bÃ©r_~DÃ©cÃ©~mbÃ©r".split("_"),
                monthsShort: "J~Ã¡Ã±_~FÃ©b_~MÃ¡r_~Ãpr_~MÃ¡Ã½_~JÃºÃ±_~JÃºl_~ÃÃºg_~SÃ©p_~Ã“ct_~Ã‘Ã³v_~DÃ©c".split("_"),
                monthsParseExact: true,
                weekdays: "S~ÃºÃ±dÃ¡~Ã½_MÃ³~Ã±dÃ¡Ã½~_TÃºÃ©~sdÃ¡Ã½~_WÃ©d~Ã±Ã©sd~Ã¡Ã½_T~hÃºrs~dÃ¡Ã½_~FrÃ­d~Ã¡Ã½_S~Ã¡tÃºr~dÃ¡Ã½".split("_"),
                weekdaysShort: "S~ÃºÃ±_~MÃ³Ã±_~TÃºÃ©_~WÃ©d_~ThÃº_~FrÃ­_~SÃ¡t".split("_"),
                weekdaysMin: "S~Ãº_MÃ³~_TÃº_~WÃ©_T~h_Fr~_SÃ¡".split("_"),
                weekdaysParseExact: true,
                longDateFormat: {
                    LT: "HH:mm",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[T~Ã³dÃ¡~Ã½ Ã¡t] LT",
                    nextDay: "[T~Ã³mÃ³~rrÃ³~w Ã¡t] LT",
                    nextWeek: "dddd [Ã¡t] LT",
                    lastDay: "[Ã~Ã©st~Ã©rdÃ¡~Ã½ Ã¡t] LT",
                    lastWeek: "[L~Ã¡st] dddd [Ã¡t] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Ã­~Ã± %s",
                    past: "%s Ã¡~gÃ³",
                    s: "Ã¡ ~fÃ©w ~sÃ©cÃ³~Ã±ds",
                    ss: "%d s~Ã©cÃ³Ã±~ds",
                    m: "Ã¡ ~mÃ­Ã±~ÃºtÃ©",
                    mm: "%d m~Ã­Ã±Ãº~tÃ©s",
                    h: "Ã¡~Ã± hÃ³~Ãºr",
                    hh: "%d h~Ã³Ãºrs",
                    d: "Ã¡ ~dÃ¡Ã½",
                    dd: "%d d~Ã¡Ã½s",
                    M: "Ã¡ ~mÃ³Ã±~th",
                    MM: "%d m~Ã³Ã±t~hs",
                    y: "Ã¡ ~Ã½Ã©Ã¡r",
                    yy: "%d Ã½~Ã©Ã¡rs"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var t = e % 10,
                        n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("yo", {
                months: "Sáº¹Ìráº¹Ì_EÌ€reÌ€leÌ€_áº¸ráº¹Ì€naÌ€_IÌ€gbeÌ_EÌ€bibi_OÌ€kuÌ€du_Agáº¹mo_OÌ€guÌn_Owewe_á»ŒÌ€waÌ€raÌ€_BeÌluÌ_á»ŒÌ€páº¹Ì€Ì€".split("_"),
                monthsShort: "Sáº¹Ìr_EÌ€rl_áº¸rn_IÌ€gb_EÌ€bi_OÌ€kuÌ€_Agáº¹_OÌ€guÌ_Owe_á»ŒÌ€waÌ€_BeÌl_á»ŒÌ€páº¹Ì€Ì€".split("_"),
                weekdays: "AÌ€iÌ€kuÌ_AjeÌ_IÌ€sáº¹Ìgun_á»Œjá»ÌruÌ_á»Œjá»Ìbá»_áº¸tiÌ€_AÌ€baÌmáº¹Ìta".split("_"),
                weekdaysShort: "AÌ€iÌ€k_AjeÌ_IÌ€sáº¹Ì_á»Œjr_á»Œjb_áº¸tiÌ€_AÌ€baÌ".split("_"),
                weekdaysMin: "AÌ€iÌ€_Aj_IÌ€s_á»Œr_á»Œb_áº¸t_AÌ€b".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[OÌ€niÌ€ ni] LT",
                    nextDay: "[á»ŒÌ€la ni] LT",
                    nextWeek: "dddd [á»Œsáº¹Ì€ toÌn'bá»] [ni] LT",
                    lastDay: "[AÌ€na ni] LT",
                    lastWeek: "dddd [á»Œsáº¹Ì€ toÌlá»Ì] [ni] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "niÌ %s",
                    past: "%s ká»jaÌ",
                    s: "iÌ€sáº¹juÌ aayaÌ die",
                    ss: "aayaÌ %d",
                    m: "iÌ€sáº¹juÌ kan",
                    mm: "iÌ€sáº¹juÌ %d",
                    h: "waÌkati kan",
                    hh: "waÌkati %d",
                    d: "á»já»Ì kan",
                    dd: "á»já»Ì %d",
                    M: "osuÌ€ kan",
                    MM: "osuÌ€ %d",
                    y: "á»duÌn kan",
                    yy: "á»duÌn %d"
                },
                dayOfMonthOrdinalParse: /á»já»Ì\s\d{1,2}/,
                ordinal: "á»já»Ì %d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("zh-cn", {
                months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
                monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
                weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
                weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),
                weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYYå¹´MæœˆDæ—¥",
                    LLL: "YYYYå¹´MæœˆDæ—¥Ahç‚¹mmåˆ†",
                    LLLL: "YYYYå¹´MæœˆDæ—¥ddddAhç‚¹mmåˆ†",
                    l: "YYYY/M/D",
                    ll: "YYYYå¹´MæœˆDæ—¥",
                    lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                    llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
                },
                meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "å‡Œæ™¨" || t === "æ—©ä¸Š" || t === "ä¸Šåˆ") {
                        return e
                    } else if (t === "ä¸‹åˆ" || t === "æ™šä¸Š") {
                        return e + 12
                    } else {
                        return e >= 11 ? e : e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    var a = e * 100 + t;
                    if (a < 600) {
                        return "å‡Œæ™¨"
                    } else if (a < 900) {
                        return "æ—©ä¸Š"
                    } else if (a < 1130) {
                        return "ä¸Šåˆ"
                    } else if (a < 1230) {
                        return "ä¸­åˆ"
                    } else if (a < 1800) {
                        return "ä¸‹åˆ"
                    } else {
                        return "æ™šä¸Š"
                    }
                },
                calendar: {
                    sameDay: "[ä»Šå¤©]LT",
                    nextDay: "[æ˜Žå¤©]LT",
                    nextWeek: function (e) {
                        if (e.week() !== this.week()) {
                            return "[ä¸‹]dddLT"
                        } else {
                            return "[æœ¬]dddLT"
                        }
                    },
                    lastDay: "[æ˜¨å¤©]LT",
                    lastWeek: function (e) {
                        if (this.week() !== e.week()) {
                            return "[ä¸Š]dddLT"
                        } else {
                            return "[æœ¬]dddLT"
                        }
                    },
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|å‘¨)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "æ—¥";
                        case "M":
                            return e + "æœˆ";
                        case "w":
                        case "W":
                            return e + "å‘¨";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%såŽ",
                    past: "%så‰",
                    s: "å‡ ç§’",
                    ss: "%d ç§’",
                    m: "1 åˆ†é’Ÿ",
                    mm: "%d åˆ†é’Ÿ",
                    h: "1 å°æ—¶",
                    hh: "%d å°æ—¶",
                    d: "1 å¤©",
                    dd: "%d å¤©",
                    M: "1 ä¸ªæœˆ",
                    MM: "%d ä¸ªæœˆ",
                    y: "1 å¹´",
                    yy: "%d å¹´"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("zh-hk", {
                months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
                monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
                weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
                weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
                weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYYå¹´MæœˆDæ—¥",
                    LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                    LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYYå¹´MæœˆDæ—¥",
                    lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                    llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
                },
                meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "å‡Œæ™¨" || t === "æ—©ä¸Š" || t === "ä¸Šåˆ") {
                        return e
                    } else if (t === "ä¸­åˆ") {
                        return e >= 11 ? e : e + 12
                    } else if (t === "ä¸‹åˆ" || t === "æ™šä¸Š") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    var a = e * 100 + t;
                    if (a < 600) {
                        return "å‡Œæ™¨"
                    } else if (a < 900) {
                        return "æ—©ä¸Š"
                    } else if (a < 1200) {
                        return "ä¸Šåˆ"
                    } else if (a === 1200) {
                        return "ä¸­åˆ"
                    } else if (a < 1800) {
                        return "ä¸‹åˆ"
                    } else {
                        return "æ™šä¸Š"
                    }
                },
                calendar: {
                    sameDay: "[ä»Šå¤©]LT",
                    nextDay: "[æ˜Žå¤©]LT",
                    nextWeek: "[ä¸‹]ddddLT",
                    lastDay: "[æ˜¨å¤©]LT",
                    lastWeek: "[ä¸Š]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "æ—¥";
                        case "M":
                            return e + "æœˆ";
                        case "w":
                        case "W":
                            return e + "é€±";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%så¾Œ",
                    past: "%så‰",
                    s: "å¹¾ç§’",
                    ss: "%d ç§’",
                    m: "1 åˆ†é˜",
                    mm: "%d åˆ†é˜",
                    h: "1 å°æ™‚",
                    hh: "%d å°æ™‚",
                    d: "1 å¤©",
                    dd: "%d å¤©",
                    M: "1 å€‹æœˆ",
                    MM: "%d å€‹æœˆ",
                    y: "1 å¹´",
                    yy: "%d å¹´"
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("zh-mo", {
                months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
                monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
                weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
                weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
                weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "YYYYå¹´MæœˆDæ—¥",
                    LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                    LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                    l: "D/M/YYYY",
                    ll: "YYYYå¹´MæœˆDæ—¥",
                    lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                    llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
                },
                meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "å‡Œæ™¨" || t === "æ—©ä¸Š" || t === "ä¸Šåˆ") {
                        return e
                    } else if (t === "ä¸­åˆ") {
                        return e >= 11 ? e : e + 12
                    } else if (t === "ä¸‹åˆ" || t === "æ™šä¸Š") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    var a = e * 100 + t;
                    if (a < 600) {
                        return "å‡Œæ™¨"
                    } else if (a < 900) {
                        return "æ—©ä¸Š"
                    } else if (a < 1130) {
                        return "ä¸Šåˆ"
                    } else if (a < 1230) {
                        return "ä¸­åˆ"
                    } else if (a < 1800) {
                        return "ä¸‹åˆ"
                    } else {
                        return "æ™šä¸Š"
                    }
                },
                calendar: {
                    sameDay: "[ä»Šå¤©] LT",
                    nextDay: "[æ˜Žå¤©] LT",
                    nextWeek: "[ä¸‹]dddd LT",
                    lastDay: "[æ˜¨å¤©] LT",
                    lastWeek: "[ä¸Š]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "æ—¥";
                        case "M":
                            return e + "æœˆ";
                        case "w":
                        case "W":
                            return e + "é€±";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%så…§",
                    past: "%så‰",
                    s: "å¹¾ç§’",
                    ss: "%d ç§’",
                    m: "1 åˆ†é˜",
                    mm: "%d åˆ†é˜",
                    h: "1 å°æ™‚",
                    hh: "%d å°æ™‚",
                    d: "1 å¤©",
                    dd: "%d å¤©",
                    M: "1 å€‹æœˆ",
                    MM: "%d å€‹æœˆ",
                    y: "1 å¹´",
                    yy: "%d å¹´"
                }
            })
        }(n(0))
    }, function (e, t, n) {
        !function (e) {
            "use strict";
            //! moment.js locale configuration
            var t;
            e.defineLocale("zh-tw", {
                months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
                monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
                weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
                weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
                weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYYå¹´MæœˆDæ—¥",
                    LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                    LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYYå¹´MæœˆDæ—¥",
                    lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
                    llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm"
                },
                meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
                meridiemHour: function (e, t) {
                    if (e === 12) {
                        e = 0
                    }
                    if (t === "å‡Œæ™¨" || t === "æ—©ä¸Š" || t === "ä¸Šåˆ") {
                        return e
                    } else if (t === "ä¸­åˆ") {
                        return e >= 11 ? e : e + 12
                    } else if (t === "ä¸‹åˆ" || t === "æ™šä¸Š") {
                        return e + 12
                    }
                },
                meridiem: function (e, t, n) {
                    var a = e * 100 + t;
                    if (a < 600) {
                        return "å‡Œæ™¨"
                    } else if (a < 900) {
                        return "æ—©ä¸Š"
                    } else if (a < 1130) {
                        return "ä¸Šåˆ"
                    } else if (a < 1230) {
                        return "ä¸­åˆ"
                    } else if (a < 1800) {
                        return "ä¸‹åˆ"
                    } else {
                        return "æ™šä¸Š"
                    }
                },
                calendar: {
                    sameDay: "[ä»Šå¤©] LT",
                    nextDay: "[æ˜Žå¤©] LT",
                    nextWeek: "[ä¸‹]dddd LT",
                    lastDay: "[æ˜¨å¤©] LT",
                    lastWeek: "[ä¸Š]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "æ—¥";
                        case "M":
                            return e + "æœˆ";
                        case "w":
                        case "W":
                            return e + "é€±";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%så¾Œ",
                    past: "%så‰",
                    s: "å¹¾ç§’",
                    ss: "%d ç§’",
                    m: "1 åˆ†é˜",
                    mm: "%d åˆ†é˜",
                    h: "1 å°æ™‚",
                    hh: "%d å°æ™‚",
                    d: "1 å¤©",
                    dd: "%d å¤©",
                    M: "1 å€‹æœˆ",
                    MM: "%d å€‹æœˆ",
                    y: "1 å¹´",
                    yy: "%d å¹´"
                }
            })
        }(n(0))
    }, function (e, t, n) {
        "use strict";

        function a(e) {
            var t, n, a, r, s, i, o, d, u = l(e, !1);
            if ("string" == typeof u && 2 < u.length)
                if (43 === (t = (u = y(u)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                    switch (u.charCodeAt(1)) {
                        case 66:
                        case 98:
                            a = 2, r = 49;
                            break;
                        case 79:
                        case 111:
                            a = 8, r = 55;
                            break;
                        default:
                            return +u
                    }
                    for (i = (s = u.slice(2)).length, o = 0; o < i; o++)
                        if ((d = s.charCodeAt(o)) < 48 || r < d) return NaN;
                    return parseInt(s, a)
                }
            return +u
        }

        var r = n(5),
            s = n(4),
            i = n(57),
            o = n(15),
            d = n(6),
            u = n(19),
            _ = n(237),
            l = n(23),
            c = n(2),
            m = n(39),
            f = n(27).f,
            h = n(16).f,
            M = n(7).f,
            y = n(72).trim,
            p = "Number",
            L = s[p],
            v = L.prototype,
            Y = u(m(v)) == p;
        if (i(p, !L(" 0o1") || !L("0b1") || L("+0x1"))) {
            for (var k, g = function (e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof g && (Y ? c(function () {
                    v.valueOf.call(n)
                }) : u(n) != p) ? _(new L(a(t)), n, g) : a(t)
            }, D = r ? f(L) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), T = 0; D.length > T; T++) d(L, k = D[T]) && !d(g, k) && M(g, k, h(L, k));
            (g.prototype = v).constructor = g, o(s, p, g)
        }
    }, function (e, t, n) {
        var s = n(9),
            i = n(97);
        e.exports = function (e, t, n) {
            var a, r;
            return i && "function" == typeof (a = t.constructor) && a !== n && s(r = a.prototype) && r !== n.prototype && i(e, r), e
        }
    }, function (e, t) {
        var n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t, n) {
        var a = n(4),
            r = n(77),
            s = a.WeakMap;
        e.exports = "function" == typeof s && /native code/.test(r(s))
    }, function (e, t, n) {
        var a = n(5),
            i = n(7),
            o = n(8),
            d = n(40);
        e.exports = a ? Object.defineProperties : function (e, t) {
            o(e);
            for (var n, a = d(t), r = a.length, s = 0; s < r;) i.f(e, n = a[s++], t[n]);
            return e
        }
    }, function (e, t, n) {
        var a = n(26);
        e.exports = a("document", "documentElement")
    }, function (e, t, n) {
        var a = n(12),
            r = n(27).f,
            s = {}.toString,
            i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function (e) {
            return i && "[object Window]" == s.call(e) ? function (e) {
                try {
                    return r(e)
                } catch (e) {
                    return i.slice()
                }
            }(e) : r(a(e))
        }
    }, function (e, t, n) {
        var a = n(26);
        e.exports = a("navigator", "userAgent") || ""
    }, function (e, t, n) {
        "use strict";
        var a = n(3),
            r = n(29).find,
            s = n(90),
            i = n(17),
            o = "find",
            d = !0,
            u = i(o);
        o in [] && Array(1).find(function () {
            d = !1
        }), a({
            target: "Array",
            proto: !0,
            forced: d || !u
        }, {
            find: function (e, t) {
                return r(this, e, 1 < arguments.length ? t : void 0)
            }
        }), s(o)
    }, function (e, t, n) {
        "use strict";
        var M = n(87),
            y = n(13),
            p = n(246),
            L = n(247),
            v = n(11),
            Y = n(31),
            k = n(248);
        e.exports = function (e, t, n) {
            var a, r, s, i, o, d, u = y(e),
                _ = "function" == typeof this ? this : Array,
                l = arguments.length,
                c = 1 < l ? t : void 0,
                m = void 0 !== c,
                f = k(u),
                h = 0;
            if (m && (c = M(c, 2 < l ? n : void 0, 2)), null == f || _ == Array && L(f))
                for (r = new _(a = v(u.length)); h < a; h++) d = m ? c(u[h], h) : u[h], Y(r, h, d);
            else
                for (o = (i = f.call(u)).next, r = new _; !(s = o.call(i)).done; h++) d = m ? p(i, c, [s.value, h], !0) : s.value, Y(r, h, d);
            return r.length = h, r
        }
    }, function (e, t, n) {
        var s = n(8);
        e.exports = function (t, e, n, a) {
            try {
                return a ? e(s(n)[0], n[1]) : e(n)
            } catch (e) {
                var r = t.return;
                throw void 0 !== r && s(r.call(t)), e
            }
        }
    }, function (e, t, n) {
        var a = n(1),
            r = n(33),
            s = a("iterator"),
            i = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (r.Array === e || i[s] === e)
        }
    }, function (e, t, n) {
        var a = n(93),
            r = n(33),
            s = n(1)("iterator");
        e.exports = function (e) {
            if (null != e) return e[s] || e["@@iterator"] || r[a(e)]
        }
    }, function (e, t, n) {
        var r = n(1)("iterator"),
            s = !1;
        try {
            var a = 0,
                i = {
                    next: function () {
                        return {
                            done: !!a++
                        }
                    },
                    return: function () {
                        s = !0
                    }
                };
            i[r] = function () {
                return this
            }, Array.from(i, function () {
                throw 2
            })
        } catch (e) {
        }
        e.exports = function (e, t) {
            if (!t && !s) return !1;
            var n = !1;
            try {
                var a = {};
                a[r] = function () {
                    return {
                        next: function () {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(a)
            } catch (e) {
            }
            return n
        }
    }, function (e, t, n) {
        "use strict";

        function r() {
            return this
        }

        var s = n(95).IteratorPrototype,
            i = n(39),
            o = n(22),
            d = n(59),
            u = n(33);
        e.exports = function (e, t, n) {
            var a = t + " Iterator";
            return e.prototype = i(s, {
                next: o(1, n)
            }), d(e, a, !1, !0), u[a] = r, e
        }
    }, function (e, t, n) {
        var a = n(2);
        e.exports = !a(function () {
            function e() {
            }

            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })
    }, function (e, t, n) {
        var a = n(9);
        e.exports = function (e) {
            if (!a(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        }
    }, function (e, t, n) {
        "use strict";
        var a = n(3),
            r = n(29).map,
            s = n(32),
            i = n(17),
            o = s("map"),
            d = i("map");
        a({
            target: "Array",
            proto: !0,
            forced: !o || !d
        }, {
            map: function (e, t) {
                return r(this, e, 1 < arguments.length ? t : void 0)
            }
        })
    }, function (e, t, n) {
        "use strict";
        var a = n(3),
            c = n(54),
            m = n(28),
            f = n(11),
            h = n(13),
            M = n(60),
            y = n(31),
            r = n(32),
            s = n(17),
            i = r("splice"),
            o = s("splice", {
                ACCESSORS: !0,
                0: 0,
                1: 2
            }),
            p = Math.max,
            L = Math.min;
        a({
            target: "Array",
            proto: !0,
            forced: !i || !o
        }, {
            splice: function (e, t) {
                var n, a, r, s, i, o, d = h(this),
                    u = f(d.length),
                    _ = c(e, u),
                    l = arguments.length;
                if (0 === l ? n = a = 0 : a = 1 === l ? (n = 0, u - _) : (n = l - 2, L(p(m(t), 0), u - _)), 9007199254740991 < u + n - a) throw TypeError("Maximum allowed length exceeded");
                for (r = M(d, a), s = 0; s < a; s++) (i = _ + s) in d && y(r, s, d[i]);
                if (n < (r.length = a)) {
                    for (s = _; s < u - a; s++) o = s + n, (i = s + a) in d ? d[o] = d[i] : delete d[o];
                    for (s = u; u - a + n < s; s--) delete d[s - 1]
                } else if (a < n)
                    for (s = u - a; _ < s; s--) o = s + n - 1, (i = s + a - 1) in d ? d[o] = d[i] : delete d[o];
                for (s = 0; s < n; s++) d[s + _] = arguments[s + 2];
                return d.length = u - a + n, r
            }
        })
    }, function (e, t, n) {
        "use strict";
        var a = n(63),
            r = n(93);
        e.exports = a ? {}.toString : function () {
            return "[object " + r(this) + "]"
        }
    }, function (e, t, n) {
        var r = n(8),
            s = n(88),
            i = n(1)("species");
        e.exports = function (e, t) {
            var n, a = r(e).constructor;
            return void 0 === a || null == (n = r(a)[i]) ? t : s(n)
        }
    }, function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function (e, t, n) {
        var a = {
            "./af": 103,
            "./af.js": 103,
            "./ar": 104,
            "./ar-dz": 105,
            "./ar-dz.js": 105,
            "./ar-kw": 106,
            "./ar-kw.js": 106,
            "./ar-ly": 107,
            "./ar-ly.js": 107,
            "./ar-ma": 108,
            "./ar-ma.js": 108,
            "./ar-sa": 109,
            "./ar-sa.js": 109,
            "./ar-tn": 110,
            "./ar-tn.js": 110,
            "./ar.js": 104,
            "./az": 111,
            "./az.js": 111,
            "./be": 112,
            "./be.js": 112,
            "./bg": 113,
            "./bg.js": 113,
            "./bm": 114,
            "./bm.js": 114,
            "./bn": 115,
            "./bn.js": 115,
            "./bo": 116,
            "./bo.js": 116,
            "./br": 117,
            "./br.js": 117,
            "./bs": 118,
            "./bs.js": 118,
            "./ca": 119,
            "./ca.js": 119,
            "./cs": 120,
            "./cs.js": 120,
            "./cv": 121,
            "./cv.js": 121,
            "./cy": 122,
            "./cy.js": 122,
            "./da": 123,
            "./da.js": 123,
            "./de": 124,
            "./de-at": 125,
            "./de-at.js": 125,
            "./de-ch": 126,
            "./de-ch.js": 126,
            "./de.js": 124,
            "./dv": 127,
            "./dv.js": 127,
            "./el": 128,
            "./el.js": 128,
            "./en-au": 129,
            "./en-au.js": 129,
            "./en-ca": 130,
            "./en-ca.js": 130,
            "./en-gb": 131,
            "./en-gb.js": 131,
            "./en-ie": 132,
            "./en-ie.js": 132,
            "./en-il": 133,
            "./en-il.js": 133,
            "./en-in": 134,
            "./en-in.js": 134,
            "./en-nz": 135,
            "./en-nz.js": 135,
            "./en-sg": 136,
            "./en-sg.js": 136,
            "./eo": 137,
            "./eo.js": 137,
            "./es": 138,
            "./es-do": 139,
            "./es-do.js": 139,
            "./es-us": 140,
            "./es-us.js": 140,
            "./es.js": 138,
            "./et": 141,
            "./et.js": 141,
            "./eu": 142,
            "./eu.js": 142,
            "./fa": 143,
            "./fa.js": 143,
            "./fi": 144,
            "./fi.js": 144,
            "./fil": 145,
            "./fil.js": 145,
            "./fo": 146,
            "./fo.js": 146,
            "./fr": 147,
            "./fr-ca": 148,
            "./fr-ca.js": 148,
            "./fr-ch": 149,
            "./fr-ch.js": 149,
            "./fr.js": 147,
            "./fy": 150,
            "./fy.js": 150,
            "./ga": 151,
            "./ga.js": 151,
            "./gd": 152,
            "./gd.js": 152,
            "./gl": 153,
            "./gl.js": 153,
            "./gom-deva": 154,
            "./gom-deva.js": 154,
            "./gom-latn": 155,
            "./gom-latn.js": 155,
            "./gu": 156,
            "./gu.js": 156,
            "./he": 157,
            "./he.js": 157,
            "./hi": 158,
            "./hi.js": 158,
            "./hr": 159,
            "./hr.js": 159,
            "./hu": 160,
            "./hu.js": 160,
            "./hy-am": 161,
            "./hy-am.js": 161,
            "./id": 162,
            "./id.js": 162,
            "./is": 163,
            "./is.js": 163,
            "./it": 164,
            "./it-ch": 165,
            "./it-ch.js": 165,
            "./it.js": 164,
            "./ja": 166,
            "./ja.js": 166,
            "./jv": 167,
            "./jv.js": 167,
            "./ka": 168,
            "./ka.js": 168,
            "./kk": 169,
            "./kk.js": 169,
            "./km": 170,
            "./km.js": 170,
            "./kn": 171,
            "./kn.js": 171,
            "./ko": 172,
            "./ko.js": 172,
            "./ku": 173,
            "./ku.js": 173,
            "./ky": 174,
            "./ky.js": 174,
            "./lb": 175,
            "./lb.js": 175,
            "./lo": 176,
            "./lo.js": 176,
            "./lt": 177,
            "./lt.js": 177,
            "./lv": 178,
            "./lv.js": 178,
            "./me": 179,
            "./me.js": 179,
            "./mi": 180,
            "./mi.js": 180,
            "./mk": 181,
            "./mk.js": 181,
            "./ml": 182,
            "./ml.js": 182,
            "./mn": 183,
            "./mn.js": 183,
            "./mr": 184,
            "./mr.js": 184,
            "./ms": 185,
            "./ms-my": 186,
            "./ms-my.js": 186,
            "./ms.js": 185,
            "./mt": 187,
            "./mt.js": 187,
            "./my": 188,
            "./my.js": 188,
            "./nb": 189,
            "./nb.js": 189,
            "./ne": 190,
            "./ne.js": 190,
            "./nl": 191,
            "./nl-be": 192,
            "./nl-be.js": 192,
            "./nl.js": 191,
            "./nn": 193,
            "./nn.js": 193,
            "./oc-lnc": 194,
            "./oc-lnc.js": 194,
            "./pa-in": 195,
            "./pa-in.js": 195,
            "./pl": 196,
            "./pl.js": 196,
            "./pt": 197,
            "./pt-br": 198,
            "./pt-br.js": 198,
            "./pt.js": 197,
            "./ro": 199,
            "./ro.js": 199,
            "./ru": 200,
            "./ru.js": 200,
            "./sd": 201,
            "./sd.js": 201,
            "./se": 202,
            "./se.js": 202,
            "./si": 203,
            "./si.js": 203,
            "./sk": 204,
            "./sk.js": 204,
            "./sl": 205,
            "./sl.js": 205,
            "./sq": 206,
            "./sq.js": 206,
            "./sr": 207,
            "./sr-cyrl": 208,
            "./sr-cyrl.js": 208,
            "./sr.js": 207,
            "./ss": 209,
            "./ss.js": 209,
            "./sv": 210,
            "./sv.js": 210,
            "./sw": 211,
            "./sw.js": 211,
            "./ta": 212,
            "./ta.js": 212,
            "./te": 213,
            "./te.js": 213,
            "./tet": 214,
            "./tet.js": 214,
            "./tg": 215,
            "./tg.js": 215,
            "./th": 216,
            "./th.js": 216,
            "./tk": 217,
            "./tk.js": 217,
            "./tl-ph": 218,
            "./tl-ph.js": 218,
            "./tlh": 219,
            "./tlh.js": 219,
            "./tr": 220,
            "./tr.js": 220,
            "./tzl": 221,
            "./tzl.js": 221,
            "./tzm": 222,
            "./tzm-latn": 223,
            "./tzm-latn.js": 223,
            "./tzm.js": 222,
            "./ug-cn": 224,
            "./ug-cn.js": 224,
            "./uk": 225,
            "./uk.js": 225,
            "./ur": 226,
            "./ur.js": 226,
            "./uz": 227,
            "./uz-latn": 228,
            "./uz-latn.js": 228,
            "./uz.js": 227,
            "./vi": 229,
            "./vi.js": 229,
            "./x-pseudo": 230,
            "./x-pseudo.js": 230,
            "./yo": 231,
            "./yo.js": 231,
            "./zh-cn": 232,
            "./zh-cn.js": 232,
            "./zh-hk": 233,
            "./zh-hk.js": 233,
            "./zh-mo": 234,
            "./zh-mo.js": 234,
            "./zh-tw": 235,
            "./zh-tw.js": 235
        };

        function r(e) {
            var t = s(e);
            return n(t)
        }

        function s(e) {
            if (n.o(a, e)) return a[e];
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }

        r.keys = function () {
            return Object.keys(a)
        }, r.resolve = s, (e.exports = r).id = 258
    }, function (e, t, n) {
        var a = n(3),
            r = n(260);
        a({
            target: "Number",
            stat: !0,
            forced: Number.parseFloat != r
        }, {
            parseFloat: r
        })
    }, function (e, t, n) {
        var a = n(4),
            r = n(72).trim,
            s = n(73),
            i = a.parseFloat,
            o = 1 / i(s + "-0") != -1 / 0;
        e.exports = o ? function (e) {
            var t = r(String(e)),
                n = i(t);
            return 0 === n && "-" == t.charAt(0) ? -0 : n
        } : i
    }, function (e, t, n) {
        var a = n(5),
            r = n(4),
            s = n(57),
            o = n(237),
            i = n(7).f,
            d = n(27).f,
            u = n(68),
            _ = n(65),
            l = n(100),
            c = n(15),
            m = n(2),
            f = n(24).set,
            h = n(262),
            M = n(1)("match"),
            y = r.RegExp,
            p = y.prototype,
            L = /a/g,
            v = /a/g,
            Y = new y(L) !== L,
            k = l.UNSUPPORTED_Y;
        if (a && s("RegExp", !Y || k || m(function () {
            return v[M] = !1, y(L) != L || y(v) == v || "/a/i" != y(L, "i")
        }))) {
            for (var g = function (e, t) {
                var n, a = this instanceof g,
                    r = u(e),
                    s = void 0 === t;
                if (!a && r && e.constructor === g && s) return e;
                Y ? r && !s && (e = e.source) : e instanceof g && (s && (t = _.call(e)), e = e.source), k && (n = !!t && -1 < t.indexOf("y")) && (t = t.replace(/y/g, ""));
                var i = o(Y ? new y(e, t) : y(e, t), a ? this : p, g);
                return k && n && f(i, {
                    sticky: n
                }), i
            }, D = d(y), T = 0; D.length > T;) !function (t) {
                t in g || i(g, t, {
                    configurable: !0,
                    get: function () {
                        return y[t]
                    },
                    set: function (e) {
                        y[t] = e
                    }
                })
            }(D[T++]);
            (p.constructor = g).prototype = p, c(r, "RegExp", g)
        }
        h("RegExp")
    }, function (e, t, n) {
        "use strict";
        var a = n(26),
            r = n(7),
            s = n(1),
            i = n(5),
            o = s("species");
        e.exports = function (e) {
            var t = a(e),
                n = r.f;
            i && t && !t[o] && n(t, o, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    }, function (e, t, n) {
        "use strict";
        var a = n(67),
            l = n(8),
            c = n(11),
            r = n(14),
            m = n(69),
            f = n(70);
        a("match", 1, function (a, u, _) {
            return [function (e) {
                var t = r(this),
                    n = null == e ? void 0 : e[a];
                return void 0 !== n ? n.call(e, t) : new RegExp(e)[a](String(t))
            }, function (e) {
                var t = _(u, e, this);
                if (t.done) return t.value;
                var n = l(e),
                    a = String(this);
                if (!n.global) return f(n, a);
                for (var r, s = n.unicode, i = [], o = n.lastIndex = 0; null !== (r = f(n, a));) {
                    var d = String(r[0]);
                    "" === (i[o] = d) && (n.lastIndex = m(a, c(n.lastIndex), s)), o++
                }
                return 0 === o ? null : i
            }]
        })
    }, function (e, t, n) {
        "use strict";
        var a = n(3),
            r = n(72).trim;
        a({
            target: "String",
            proto: !0,
            forced: n(265)("trim")
        }, {
            trim: function () {
                return r(this)
            }
        })
    }, function (e, t, n) {
        var a = n(2),
            r = n(73);
        e.exports = function (e) {
            return a(function () {
                return !!r[e]() || "â€‹Â…á Ž" != "â€‹Â…á Ž" [e]() || r[e].name !== e
            })
        }
    }, function (e, t, n) {
        "use strict";
        var a = n(3),
            r = n(83).indexOf,
            s = n(92),
            i = n(17),
            o = [].indexOf,
            d = !!o && 1 / [1].indexOf(1, -0) < 0,
            u = s("indexOf"),
            _ = i("indexOf", {
                ACCESSORS: !0,
                1: 0
            });
        a({
            target: "Array",
            proto: !0,
            forced: d || !u || !_
        }, {
            indexOf: function (e, t) {
                return d ? o.apply(this, arguments) || 0 : r(this, e, 1 < arguments.length ? t : void 0)
            }
        })
    }, function (e, t, n) {
        var a = n(3),
            r = n(268);
        a({
            target: "Object",
            stat: !0,
            forced: Object.assign !== r
        }, {
            assign: r
        })
    }, function (e, t, n) {
        "use strict";
        var c = n(5),
            a = n(2),
            m = n(40),
            f = n(56),
            h = n(49),
            M = n(13),
            y = n(50),
            r = Object.assign,
            s = Object.defineProperty;
        e.exports = !r || a(function () {
            if (c && 1 !== r({
                b: 1
            }, r(s({}, "a", {
                enumerable: !0,
                get: function () {
                    s(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                a = "abcdefghijklmnopqrst";
            return e[n] = 7, a.split("").forEach(function (e) {
                t[e] = e
            }), 7 != r({}, e)[n] || m(r({}, t)).join("") != a
        }) ? function (e, t) {
            for (var n = M(e), a = arguments.length, r = 1, s = f.f, i = h.f; r < a;)
                for (var o, d = y(arguments[r++]), u = s ? m(d).concat(s(d)) : m(d), _ = u.length, l = 0; l < _;) o = u[l++], c && !i.call(d, o) || (n[o] = d[o]);
            return n
        } : r
    }, function (e, t, n) {
        "use strict";
        var a, r = n(3),
            s = n(16).f,
            i = n(11),
            o = n(270),
            d = n(14),
            u = n(271),
            _ = n(25),
            l = "".startsWith,
            c = Math.min,
            m = u("startsWith");
        r({
            target: "String",
            proto: !0,
            forced: !!(_ || m || (!(a = s(String.prototype, "startsWith")) || a.writable)) && !m
        }, {
            startsWith: function (e, t) {
                var n = String(d(this));
                o(e);
                var a = i(c(1 < arguments.length ? t : void 0, n.length)),
                    r = String(e);
                return l ? l.call(n, r, a) : n.slice(a, a + r.length) === r
            }
        })
    }, function (e, t, n) {
        var a = n(68);
        e.exports = function (e) {
            if (a(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        }
    }, function (e, t, n) {
        var a = n(1)("match");
        e.exports = function (t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[a] = !1, "/./" [t](n)
                } catch (e) {
                }
            }
            return !1
        }
    }, , function (e, t, n) {
        "use strict";
        n.r(t);
        n(18), n(30), n(61), n(20), n(62), n(244), n(41), n(42), n(43), n(253), n(44), n(254), n(64), n(98), n(99), n(45), n(34), n(21), n(35), n(47), n(66), n(48), n(71);

        function a(i, o, d) {
            Object.keys(d).forEach(function (e) {
                var t, n, a = d[e],
                    r = o[e],
                    s = r && ((n = r)[0] || n).nodeType ? "element" : null == (t = r) ? "".concat(t) : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(a).test(s)) throw new Error("".concat(i.toUpperCase(), ": ") + 'Option "'.concat(e, '" provided type "').concat(s, '" ') + 'but expected type "'.concat(a, '".'))
            })
        }

        function r() {
            var e = window.jQuery;
            return e && !document.body.hasAttribute("data-mdb-no-jquery") ? e : null
        }

        function u(e) {
            return document.createElement(e)
        }

        var s, i, o, d, _ = n(0),
            l = n.n(_),
            c = (n(236), n(259), n(261), n(263), n(264), function (e) {
                for (; e += Math.floor(1e6 * Math.random()), document.getElementById(e);) ;
                return e
            }),
            m = (document.documentElement.dir, s = {}, i = 1, {
                set: function (e, t, n) {
                    void 0 === e[t] && (e[t] = {
                        key: t,
                        id: i
                    }, i++), s[e[t].id] = n
                },
                get: function (e, t) {
                    if (!e || void 0 === e[t]) return null;
                    var n = e[t];
                    return n.key === t ? s[n.id] : null
                },
                delete: function (e, t) {
                    var n;
                    void 0 === e[t] || (n = e[t]).key === t && (delete s[n.id], delete e[t])
                }
            }),
            f = {
                setData: function (e, t, n) {
                    m.set(e, t, n)
                },
                getData: function (e, t) {
                    return m.get(e, t)
                },
                removeData: function (e, t) {
                    m.delete(e, t)
                }
            },
            h = (n(266), n(74), Element.prototype.querySelectorAll),
            M = Element.prototype.querySelector,
            y = (o = new CustomEvent("Bootstrap", {
                cancelable: !0
            }), (d = document.createElement("div")).addEventListener("Bootstrap", function () {
                return null
            }), o.preventDefault(), d.dispatchEvent(o), o.defaultPrevented),
            p = /:scope\b/;
        !function () {
            var e = document.createElement("div");
            try {
                e.querySelectorAll(":scope *")
            } catch (e) {
                return !1
            }
            return !0
        }() && (h = function (e) {
            if (!p.test(e)) return this.querySelectorAll(e);
            var t = Boolean(this.id);
            t || (this.id = c("scope"));
            var n = null;
            try {
                e = e.replace(p, "#".concat(this.id)), n = this.querySelectorAll(e)
            } finally {
                t || this.removeAttribute("id")
            }
            return n
        }, M = function (e) {
            if (!p.test(e)) return this.querySelector(e);
            var t = L.call(this, e);
            return void 0 !== t[0] ? t[0] : null
        });
        var L = h,
            v = M;

        function Y(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                    a = !0,
                    r = !1,
                    s = void 0;
                try {
                    for (var i, o = e[Symbol.iterator](); !(a = (i = o.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0) ;
                } catch (e) {
                    r = !0, s = e
                } finally {
                    try {
                        a || null == o.return || o.return()
                    } finally {
                        if (r) throw s
                    }
                }
                return n
            }(e, t) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return k(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(e, t)
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function k(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }

        var g = r(),
            D = /[^.]*(?=\..*)\.|.*/,
            T = /\..*/,
            w = /::\d+$/,
            b = {},
            S = 1,
            H = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            j = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];

        function E(e, t) {
            return t && "".concat(t, "::").concat(S++) || e.uidEvent || S++
        }

        function x(e) {
            var t = E(e);
            return e.uidEvent = t, b[t] = b[t] || {}, b[t]
        }

        function O(e, t, n) {
            for (var a = 2 < arguments.length && void 0 !== n ? n : null, r = Object.keys(e), s = 0, i = r.length; s < i; s++) {
                var o = e[r[s]];
                if (o.originalHandler === t && o.delegationSelector === a) return o
            }
            return null
        }

        function P(e, t, n) {
            var a = "string" == typeof t,
                r = a ? n : t,
                s = e.replace(T, ""),
                i = H[s];
            return i && (s = i), -1 < j.indexOf(s) || (s = e), [a, r, s]
        }

        function A(e, t, n, a, r) {
            var s, i, o, d, u, _, l, c, m, f, h, M, y, p;
            "string" == typeof t && e && (n || (n = a, a = null), i = (s = Y(P(t, n, a), 3))[0], o = s[1], d = s[2], (l = O(_ = (u = x(e))[d] || (u[d] = {}), o, i ? n : null)) ? l.oneOff = l.oneOff && r : (c = E(o, t.replace(D, "")), (m = i ? (M = e, y = n, p = a, function e(t) {
                for (var n = M.querySelectorAll(y), a = t.target; a && a !== this; a = a.parentNode)
                    for (var r = n.length; r--;)
                        if (n[r] === a) return e.oneOff && F.off(M, t.type, p), p.apply(a, [t]);
                return null
            }) : (f = e, h = n, function e(t) {
                return e.oneOff && F.off(f, t.type, h), h.apply(f, [t])
            })).delegationSelector = i ? n : null, m.originalHandler = o, m.oneOff = r, _[m.uidEvent = c] = m, e.addEventListener(d, m, i)))
        }

        function W(e, t, n, a, r) {
            var s = O(t[n], a, r);
            s && (e.removeEventListener(n, s, Boolean(r)), delete t[n][s.uidEvent])
        }

        var F = {
                on: function (e, t, n, a) {
                    A(e, t, n, a, !1)
                },
                one: function (e, t, n, a) {
                    A(e, t, n, a, !0)
                },
                off: function (o, d, e, t) {
                    if ("string" == typeof d && o) {
                        var n = Y(P(d, e, t), 3),
                            a = n[0],
                            r = n[1],
                            s = n[2],
                            i = s !== d,
                            u = x(o),
                            _ = "." === d.charAt(0);
                        if (void 0 === r) {
                            _ && Object.keys(u).forEach(function (e) {
                                var n, a, r, s, i;
                                n = o, a = u, r = e, s = d.slice(1), i = a[r] || {}, Object.keys(i).forEach(function (e) {
                                    var t;
                                    -1 < e.indexOf(s) && W(n, a, r, (t = i[e]).originalHandler, t.delegationSelector)
                                })
                            });
                            var l = u[s] || {};
                            Object.keys(l).forEach(function (e) {
                                var t, n = e.replace(w, "");
                                (!i || -1 < d.indexOf(n)) && W(o, u, s, (t = l[e]).originalHandler, t.delegationSelector)
                            })
                        } else {
                            if (!u || !u[s]) return;
                            W(o, u, s, r, a ? e : null)
                        }
                    }
                },
                trigger: function (e, t, n) {
                    if ("string" != typeof t || !e) return null;
                    var a, r = t.replace(T, ""),
                        s = t !== r,
                        i = -1 < j.indexOf(r),
                        o = !0,
                        d = !0,
                        u = !1,
                        _ = null;
                    return s && g && (a = g.Event(t, n), g(e).trigger(a), o = !a.isPropagationStopped(), d = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), i ? (_ = document.createEvent("HTMLEvents")).initEvent(r, o, !0) : _ = new CustomEvent(t, {
                        bubbles: o,
                        cancelable: !0
                    }), void 0 !== n && Object.keys(n).forEach(function (e) {
                        Object.defineProperty(_, e, {
                            get: function () {
                                return n[e]
                            }
                        })
                    }), u && (_.preventDefault(), y || Object.defineProperty(_, "defaultPrevented", {
                        get: function () {
                            return !0
                        }
                    })), d && e.dispatchEvent(_), _.defaultPrevented && void 0 !== a && a.preventDefault(), _
                }
            },
            C = F;
        n(267), n(269);

        function N(t, e) {
            var n, a = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, n)), a
        }

        function I(r) {
            for (var e = 1; e < arguments.length; e++) {
                var s = null != arguments[e] ? arguments[e] : {};
                e % 2 ? N(Object(s), !0).forEach(function (e) {
                    var t, n, a;
                    t = r, a = s[n = e], n in t ? Object.defineProperty(t, n, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = a
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : N(Object(s)).forEach(function (e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
                })
            }
            return r
        }

        function z(e) {
            return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
        }

        function R(e) {
            return e.replace(/[A-Z]/g, function (e) {
                return "-".concat(e.toLowerCase())
            })
        }

        var J = {
            setDataAttribute: function (e, t, n) {
                e.setAttribute("data-mdb-".concat(R(t)), n)
            },
            removeDataAttribute: function (e, t) {
                e.removeAttribute("data-mdb-".concat(R(t)))
            },
            getDataAttributes: function (e) {
                if (!e) return {};
                var n = I({}, e.dataset);
                return Object.keys(n).filter(function (e) {
                    return e.startsWith("mdb")
                }).forEach(function (e) {
                    var t = (t = e.replace(/^mdb/, "")).charAt(0).toLowerCase() + t.slice(1, t.length);
                    n[t] = z(n[e])
                }), n
            },
            getDataAttribute: function (e, t) {
                return z(e.getAttribute("data-mdb-".concat(R(t))))
            },
            offset: function (e) {
                var t = e.getBoundingClientRect();
                return {
                    top: t.top + document.body.scrollTop,
                    left: t.left + document.body.scrollLeft
                }
            },
            position: function (e) {
                return {
                    top: e.offsetTop,
                    left: e.offsetLeft
                }
            },
            style: function (e, t) {
                Object.assign(e.style, t)
            },
            toggleClass: function (e, t) {
                e && (e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t))
            },
            addClass: function (e, t) {
                e.classList.contains(t) || e.classList.add(t)
            },
            addStyle: function (t, n) {
                Object.keys(n).forEach(function (e) {
                    t.style[e] = n[e]
                })
            },
            removeClass: function (e, t) {
                e.classList.contains(t) && e.classList.remove(t)
            },
            hasClass: function (e, t) {
                return e.classList.contains(t)
            }
        };

        function B(e) {
            return function (e) {
                if (Array.isArray(e)) return U(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return U(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return U(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function U(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }

        var G = {
            closest: function (e, t) {
                return e.closest(t)
            },
            matches: function (e, t) {
                return e.matches(t)
            },
            find: function (e, t) {
                var n, a = 1 < arguments.length && void 0 !== t ? t : document.documentElement;
                return (n = []).concat.apply(n, B(L.call(a, e)))
            },
            findOne: function (e, t) {
                var n = 1 < arguments.length && void 0 !== t ? t : document.documentElement;
                return v.call(n, e)
            },
            children: function (e, t) {
                var n, a = (n = []).concat.apply(n, B(e.children));
                return a.filter(function (e) {
                    return e.matches(t)
                })
            },
            parents: function (e, t) {
                for (var n = [], a = e.parentNode; a && a.nodeType === Node.ELEMENT_NODE && 3 !== a.nodeType;) this.matches(a, t) && n.push(a), a = a.parentNode;
                return n
            },
            prev: function (e, t) {
                for (var n = e.previousElementSibling; n;) {
                    if (n.matches(t)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next: function (e, t) {
                for (var n = e.nextElementSibling; n;) {
                    if (this.matches(n, t)) return [n];
                    n = n.nextElementSibling
                }
                return []
            }
        };

        function V(e) {
            var t = e.start.dateTime.isSame(e.end.dateTime, "day") && e.start.dateTime.isSame(e.end.dateTime, "time") && "12:00 AM" === e.start.dateTime.format("hh:mm A") ? "one-day-event" : e.start.dateTime.isSame(e.end.dateTime, "day") && !e.start.dateTime.isSame(e.end.dateTime, "time") ? "short-event" : e.start.dateTime.isSame(e.end.dateTime, "day") || "12:00 AM" !== e.start.dateTime.format("hh:mm A") ? "long-event-with-time" : "long-event";
            return t
        }

        function $(e, t) {
            var n;
            return "long-event" === V(e) ? n = "".concat(e.start.dateTime.format(t.date), " -\n    ").concat(e.end.dateTime.format(t.date)) : "long-event-with-time" === V(e) ? n = "".concat(e.start.dateTime.format(t.dateTime), " -\n    ").concat(e.end.dateTime.format(t.dateTime)) : "one-day-event" === V(e) ? n = "".concat(e.start.dateTime.format(t.date)) : "short-event" === V(e) && (n = "".concat(e.start.dateTime.format(t.date), " <br>\n    ").concat(e.start.dateTime.format(t.time), " - ").concat(e.end.dateTime.format(t.time))), n
        }

        function q(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        var K = function () {
            function a(e, t, n) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), this._element = e, this._event = t, this._formats = n, this._content = "", this.init()
            }

            var e, t, n;
            return e = a, (t = [{
                key: "init",
                value: function () {
                    this._setContent(), this._initTooltip()
                }
            }, {
                key: "_setContent",
                value: function () {
                    this._setSummary(), this._setDescription(), this._setTime()
                }
            }, {
                key: "_setSummary",
                value: function () {
                    var e = "<h6><strong>".concat(this._event.summary, "</strong></h6>");
                    this._content += e
                }
            },{
                key: "_setDescription",
                value: function () {
                    var e;
                    void 0 !== this._event.description && (e = "<p><small><em>".concat(this._event.description, "</em></small></p>"), this._content += e)
                }
            }, {
                key: "_setTime",
                value: function () {
                    var e = '<p class="mb-0"><small>\n    <i class="fas fa-calendar-alt pr-1"></i>\n    '.concat($(this._event, this._formats), "</small></p>");
                    this._content += e
                }
            }, {
                key: "_initTooltip",
                value: function () {
                    J.setDataAttribute(this._element, "toggle", "tooltip"), J.setDataAttribute(this._element, "offset", [0, 10]), J.setDataAttribute(this._element, "html", !0), this._element.setAttribute("title", this._content)
                }
            }]) && q(e.prototype, t), n && q(e, n), a
        }();

        function Z(e) {
            return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Q(t, e) {
            var n, a = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, n)), a
        }

        function X(r) {
            for (var e = 1; e < arguments.length; e++) {
                var s = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Q(Object(s), !0).forEach(function (e) {
                    var t, n, a;
                    t = r, a = s[n = e], n in t ? Object.defineProperty(t, n, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = a
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Q(Object(s)).forEach(function (e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
                })
            }
            return r
        }

        function ee(e) {
            return function (e) {
                if (Array.isArray(e)) return te(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return te(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return te(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function te(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }

        function ne(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        var ae, re = "calendar",
            se = "mdb.calendar",
            ie = "events-wrapper",
            oe = "active",
            de = "td.".concat(oe),
            ue = ".calendar-long-events-checkbox",
            _e = {
                weekdays: "(array|string)",
                months: "(array|string)",
                monthsShort: "(array|string)",
                mondayFirst: "boolean",
                defaultView: "string",
                twelveHour: "boolean",
                defaultDate: "(object|string)",
                readonly: "boolean",
                todayCaption: "string",
                monthCaption: "string",
                weekCaption: "string",
                listCaption: "string",
                allDayCaption: "string",
                noEventsCaption: "string",
                summaryCaption: "string",
                descriptionCaption: "string",
                startCaption: "string",
                endCaption: "string",
                addCaption: "string",
                deleteCaption: "string",
                editCaption: "string",
                closeCaption: "string",
                addEventModalCaption: "string",
                editEventModalCaption: "string",
                events: "array",
                reminderDateCaption: "string",
                reminderTimeCaption: "string"
            },
            le = {
                weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                mondayFirst: !1,
                defaultView: "month",
                twelveHour: !1,
                defaultDate: l()().format("DD/MM/YYYY"),
                readonly: !1,
                todayCaption: "today",
                monthCaption: "month",
                weekCaption: "week",
                allDayCaption: "All day event",
                listCaption: "SCHEDULE",
                noEventsCaption: "No events",
                summaryCaption: "Summary",
                descriptionCaption: "Description",
                startCaption: "Start Date",
                startTimeCaption: "Start Time",
                endCaption: "End Date",
                endTimeCaption: "End Time",
                addCaption: "Add appointment",
                deleteCaption: "Remove",
                editCaption: "Save",
                closeCaption: "Close",
                addEventModalCaption: "Add new appointment",
                editEventModalCaption: "Edit an appointment",
                reminderDateCaption: "Reminder Date",
                reminderTimeCaption: "Reminder Time",
                events: []
            },
            ce = function () {
                function r(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), this._element = e, this._options = t, this.formats = {
                        date: "DD/MM/YYYY",
                        dateTime: this.options.twelveHour ? "DD/MM/YYYY hh:mm A" : "DD/MM/YYYY HH:mm",
                        time: this.options.twelveHour ? "hh:mm A" : "HH:mm"
                    }, this.view = this.options.defaultView, this.weekdays = ee(this.options.weekdays), this.activeMoment = l()(this.options.defaultDate, this.formats.date), this.events = this._formatEvents(), this._newEvent = {}, this._activeEvent = {}, this._addModalId = c("addModal"), this._editModalId = c("editModal"), this._table = null, this._tHead = null, this._tBody = null, this._addEventModal = null, this._editEventModal = null, this._tools = null, this._arrowLeft = null, this._arrowRight = null, this._pickedStartDate = null, this._addEventModalInstance = null, this._editEventModalInstance = null, this._inputInstances = [], this._tooltips = [], this._element && f.setData(e, se, this), this.init()
                }

                var e, t, n;
                return e = r, n = [{
                    key: "getInstance",
                    value: function (e) {
                        return f.getData(e, se)
                    }
                }, {
                    key: "jQueryInterface",
                    value: function (n, a) {
                        return this.each(function () {
                            var e = f.getData(this, se),
                                t = "object" === Z(n) && n;
                            if ((e || !/dispose/.test(n)) && (e = e || new r(this, t), "string" == typeof n)) {
                                if (void 0 === e[n]) throw new TypeError('No method named "'.concat(n, '"'));
                                e[n](a)
                            }
                        })
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return re
                    }
                }, {
                    key: "moment",
                    get: function () {
                        return l()()
                    }
                }], (t = [{
                    key: "init",
                    value: function () {
                        this._appendTemplate(), this._sortEvents(), this._addEventsKeys(), this._setEvents(), this._orderEvents(), this._setLongEventCaptions(), this._addListeners(), this._initTooltips(), this.options.readonly || (this._createAddEventModal(), this._createEditEventModal())
                    }
                }, {
                    key: "prev",
                    value: function () {
                        switch (this.view) {
                            case "month":
                                this.activeMoment.startOf("month").subtract(1, "month");
                                break;
                            case "week":
                            case "list":
                                this.activeMoment.subtract(1, "week"), this._setTHeadCaptions();
                                break;
                            default:
                                return
                        }
                        this._refreshTable(), this._triggerEvent("prev")
                    }
                }, {
                    key: "next",
                    value: function () {
                        switch (this.view) {
                            case "month":
                                this.activeMoment.startOf("month").add(1, "month"), this._setTBody();
                                break;
                            case "week":
                            case "list":
                                this.activeMoment.add(1, "week"), this._setTHeadCaptions();
                                break;
                            default:
                                return
                        }
                        this._refreshTable(), this._triggerEvent("next")
                    }
                }, {
                    key: "today",
                    value: function () {
                        switch (this.activeMoment = l()(), this._setHeading(), this.view) {
                            case "month":
                                this._setTBody();
                                break;
                            case "week":
                            case "list":
                                this._setTHeadCaptions();
                                break;
                            default:
                                return
                        }
                        this._refreshTable(), this._triggerEvent("today")
                    }
                }, {
                    key: "changeView",
                    value: function (e) {
                        this.view = e, this._setTHeadCaptions(), this._setHeading(), this._refreshTable(), this._triggerEvent("viewChange")
                    }
                }, {
                    key: "refresh",
                    value: function () {
                        this._clearEvents(), this._sortEvents(), this._addEventsKeys(), this._setTBody(), this._setEvents(), this._orderEvents(), this._setLongEventCaptions(), this._initTooltips(), this._triggerEvent("update")
                    }
                }, {
                    key: "addEvents",
                    value: function (e) {
                        this.events = this._formatEvents([].concat(ee(this.events), ee(e))), this.refresh()
                    }
                }, {
                    key: "removeEvents",
                    value: function () {
                        this.events = [], this.refresh()
                    }
                }, {
                    key: "dispose",
                    value: function () {
                        this.removeEvents(), this._removeListeners(), this._disposeModals(), f.removeData(this._element, se), this._element.innerHTML = null
                    }
                }, {
                    key: "_formatEvents",
                    value: function (e) {
                        var t = this;
                        return (0 < arguments.length && void 0 !== e ? e : this.options.events).map(function (e) {
                            return (e = X({}, e)).created = e.created && l()(e.created, t.formats.dateTime), e.start.date = e.start.date && l()(e.start.date, t.formats.date), e.start.dateTime = e.start.dateTime ? l()(e.start.dateTime, t.formats.dateTime) : l()(e.start.date, t.formats.date), e.end.date = e.end.date && l()(e.end.date, t.formats.date), e.end.dateTime = e.end.dateTime ? l()(e.end.dateTime, t.formats.dateTime) : l()(e.end.date, t.formats.date), e.color = e.color || {}, e
                        })
                    }
                }, {
                    key: "_appendTemplate",
                    value: function () {
                        this._appendTools(), this._appendTable(), this.options.mondayFirst && this.weekdays.push(this.weekdays.shift()), this._setTHeadCaptions(), this._setTBody()
                    }
                }, {
                    key: "_appendTable",
                    value: function () {
                        this._table = u("table"), this._element.append(this._table), this._tHead = u("thead"), this._table.append(this._tHead), this._tBody = u("tbody"), this._table.append(this._tBody);

                        var e = u("tr");
                        this._tHead.append(e)
                    }
                }, {
                    key: "_appendTools",
                    value: function () {
                        var t = this;
                        this._tools = u("div");
                        var e = u("div"),
                            n = u("div");
                        //console.log("month button",u("button"));
                        this._arrowLeft = u("button"), this._arrowRight = u("button"), 
                        this._todayBtn = u("button"), 
                        this._heading = u("span"), 
                        this._monthBtn = u("button"), 
                        this._weekBtn = u("button"), 
                        this._listBtn = u("button"), 
                        J.addClass(this._tools, "calendar-tools"), 
                        J.addClass(this._heading, "calendar-heading"), 
                        J.addClass(e, "btn-group"), 
                        J.addClass(e, "btn-group-sm"), 
                        J.addClass(e, "shadow-0"), 
                        J.addClass(n, "btn-group"), 
                        J.addClass(n, "btn-group-sm"), 
                        J.addClass(n, "shadow-0"), 
                        [this._arrowLeft, this._arrowRight, this._todayBtn, this._monthBtn, 
                        this._weekBtn, this._listBtn].forEach(function (e) {
                            J.setDataAttribute(e, "ripple-color", "dark")
                        }), this._arrowLeft.innerHTML = '<i class="fas fa-chevron-left"></i>', 
                        this._arrowRight.innerHTML = '<i class="fas fa-chevron-right calendar-month-lasts" id="calendar-month-lasts"></i>', 
                        this._todayBtn.innerHTML = this.options.todayCaption, 
                        this._monthBtn.innerHTML = this.options.monthCaption, 
                        this._weekBtn.innerHTML = this.options.weekCaption, 
                        this._listBtn.innerHTML = this.options.listCaption, ["btn", "btn-outline-primary"].forEach(function (e) {
                        //}), this._arrowLeft.innerHTML = '<i class="fas fa-chevron-left"></i>', this._arrowRight.innerHTML = '<i class="fas fa-chevron-right"></i>', this._todayBtn.innerHTML = this.options.todayCaption, this._monthBtn.innerHTML = this.options.monthCaption, this._weekBtn.innerHTML = this.options.weekCaption, this._listBtn.innerHTML = this.options.listCaption, ["btn", "btn-outline-primary"].forEach(function (e) {
                            J.addClass(t._arrowLeft, e), 
                            J.addClass(t._arrowRight, e), 
                            J.addClass(t._todayBtn, e), 
                            // console.log("month button new",t._monthBtn);
                            // console.log("e",e);
                            J.addClass(t._monthBtn, e), 
                            //J.addClass(t._monthBtn, "ripple-surface-dark"), 
                            J.addClass(t._weekBtn, e), 
                            J.addClass(t._listBtn, e)
                        }), this._setHeading(), e.append(this._arrowLeft), e.append(this._arrowRight), e.append(this._todayBtn), n.append(this._monthBtn), n.append(this._weekBtn), n.append(this._listBtn), this._tools.append(e), this._tools.append(this._heading), this._tools.append(n), this._element.append(this._tools)
                    }
                }, {
                    key: "_setTHeadCaptions",
                    value: function () {
                        var n = G.findOne("tr", this._tHead);
                        if (n.innerHTML = "", "month" === this.view) this.weekdays.forEach(function (e) {
                            var t = u("th");
                            t.innerHTML = e, n.append(t)
                        });
                        else if ("week" === this.view) {
                            var e = u("th");
                            n.append(e);
                            for (var t = 0; t < 7; t++) {
                                var a = u("th");
                                this.options.mondayFirst ? a.innerHTML = "".concat(this.weekdays[t], " ").concat(this.activeMomentCopy.startOf("week").add(t + 1, "day").format("DD/MM")) : a.innerHTML = "".concat(this.weekdays[t], " ").concat(this.activeMomentCopy.startOf("week").add(t, "day").format("DD/MM")), n.append(a)
                            }
                        }
                    }
                }, {
                    key: "_setTBody",
                    value: function () {
                        switch (this._clearTBody(), J.addClass(this._table, this.view), this.view) {
                            case "month":
                                this._appendWeekRows(), this._appendPrevMonthDays(), this._appendCurrentMonthDays(), this._appendNextMonthDays();
                                break;  
                            case "week":
                                this._appendLongEventSection(), this._appendHoursSection();
                                break;
                            default:
                                return
                        }
                    }
                }, {
                    key: "_appendWeekRows",
                    value: function () {
                        for (var e = 0; e < 6; e++) {
                            var t = u("tr");
                            this._tBody.append(t)
                        }
                    }
                }, {
                    key: "_appendPrevMonthDays",
                    value: function () {
                        var t = this,
                            e = this.activeMomentCopy.startOf("month").day(),
                            n = this._getArrayFromNumber(this.activeMomentCopy.subtract(1, "months").daysInMonth()),
                            a = this.options.mondayFirst ? 0 === e ? n.reverse().splice(0, 6).reverse() : n.reverse().splice(0, e - 1).reverse() : n.reverse().splice(0, e).reverse();
                        a.forEach(function (e) {
                            t._appendPrevMonthDayFields(e)
                        })
                    }
                }, {
                    key: "_appendPrevMonthDayFields",
                    value: function (e) {
                        var t = u("div"),
                            n = u("td"),
                            a = u("div");
                        J.addClass(t, ie), J.addClass(n, "disabled"), J.addClass(a, "day-field"), n.append(a), n.append(t);
                        var r = "".concat(e + 1, "/").concat(this.activeMomentCopy.startOf("month").subtract(1, "month").month() + 1, "/").concat(this.activeMomentCopy.startOf("month").subtract(1, "month").year());
                        n.dataset.date = r, a.innerHTML = e + 1, 
                        G.findOne("tr", this._tBody).append(n), this.options.readonly || this._addDayFieldListeners(n, r)
                    }
                }, {
                    key: "_addDayFieldListeners",
                    value: function (e, t) {
                        var n = this;
                        C.on(e, "mousedown", function () {
                            return n._setStartDate(t)
                        }), C.on(e, "mouseenter", function () {
                            return n._highlightLongEventField(t)
                        }), C.on(e, "mouseup", function (e) {
                            return n._toggleAddEventModal(e, t)
                        }), C.on(e, "dragenter", function (e) {
                            return n._handleDragEnter(e)
                        }), C.on(e, "dragover", function (e) {
                            return n._handleDragOver(e)
                        }), C.on(e, "dragleave", function (e) {
                            return n._handleDragLeave(e)
                        }), C.on(e, "drop", function (e) {
                            return n._handleDrop(e, t)
                        })
                    }
                }, {
                    key: "_setStartDate",
                    value: function (e) {
                        this._pickedStartDate = e
                    }
                }, {
                    key: "_highlightLongEventField",
                    value: function (r) {
                        var s = this;
                        this._pickedStartDate && G.find("td", this._tBody).forEach(function (e) {
                            var t = l()(s._pickedStartDate, s.formats.dateTime),
                                n = l()(r, s.formats.dateTime),
                                a = l()(e.dataset.dateTime || e.dataset.date, s.formats.dateTime);
                            a.isBefore(n) && a.isAfter(t) || a.isAfter(n) && a.isBefore(t) ? J.addClass(e, oe) : J.removeClass(e, oe)
                        })
                    }
                }, {
                    key: "_clearHighlight",
                    value: function () {
                        G.find(de, this._tBody).forEach(function (e) {
                            J.removeClass(e, oe)
                        })
                    }
                }, {
                    key: "_toggleAddEventModal",
                    value: function (e, t) {
                        var UserDate = t;
                        var ToDate = new Date();
                        // var ToDate = new Date();
                        const dfrags = UserDate.split("/");
                        if (new Date(dfrags["2"],parseInt(dfrags["1"]) - 1,parseInt(dfrags["0"])+1).getTime() >= ToDate.getTime()) {
                              console.log("L");
                              var n, a, r = this;
                            3 !== e.which && (this._newEvent = {}, a = {}, (n = {}).date = l.a.min([l()(this._pickedStartDate, this.formats.date), l()(t, this.formats.date)]).startOf("day"), a.date = l.a.max([l()(this._pickedStartDate, this.formats.date), l()(t, this.formats.date)]).startOf("day"), n.dateTime = l.a.min([l()(this._pickedStartDate, this.formats.dateTime), l()(t, this.formats.dateTime)]), a.dateTime = l.a.max([l()(this._pickedStartDate, this.formats.dateTime), l()(t, this.formats.dateTime)]), "12:00 AM" !== n.dateTime.format("hh:mm A") && a.dateTime.add(1, "hour"), this._setNewEvent(n, a), this._updateAddEventModalContent(), this._addEventModalInstance || (this._addEventModalInstance = new mdb.Modal(this._addEventModal)), this._addEventModalInstance.show(), this._initInputs(), this._initPickers(), this._addInputsListeners(), this._clearSelection(), setTimeout(function () {
                                G.findOne(".calendar-summary-input", r._addEventModal)
                            }, 500))

                         }
                        
                      
                      
                    }
                }, {
                    key: "_setNewEvent",
                    value: function (e, t) {
                        this._newEvent = {
                            summary: "",
                            description: "",
                            location:"",
                            start: {
                                date: e.date,
                                dateTime: e.dateTime
                            },
                            end: {
                                date: t.date,
                                dateTime: t.dateTime
                            },
                            color: {
                                background: "#1266f1",
                                foreground: "white"
                            },
                            eventType : ""
                        }
                    }
                }, {
                    key: "_clearSelection",
                    value: function () {
                        window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty(), this._pickedStartDate = null, this._clearHighlight()
                    }
                }, {
                    key: "_initInputs",
                    value: function () {
                        var e;
                        this._inputInstances = G.find(".form-outline", this._addEventModal).map(function (e) {
                            var t = new mdb.Input(e);
                            return t.init(), t
                        }), (e = this._inputInstances).push.apply(e, ee(G.find(".form-outline", this._editEventModal).map(function (e) {
                            var t = new mdb.Input(e);
                            return t.init(), t
                        })))
                    }
                }, {
                    key: "_updateInputs",
                    value: function () {
                        this._inputInstances.forEach(function (e) {
                            return e.update()
                        })
                    }
                }, {
                    key: "_initPickers",
                    value: function () {
                        var n = this;
                        G.find(".datepicker", this._addEventModal).forEach(function (e) {
                            new mdb.Datepicker(e)
                        }), G.find(".datepicker", this._editEventModal).forEach(function (e) {
                            new mdb.Datepicker(e)
                        }), G.find(".timepicker", this._addEventModal).forEach(function (e) {
                            var t = G.findOne("input", e).value;
                            new mdb.Timepicker(e, {
                                defaultTime: t,
                                format24: !n.options.twelveHour
                            })
                        }), G.find(".timepicker", this._editEventModal).forEach(function (e) {
                            var t = G.findOne("input", e).value;
                            new mdb.Timepicker(e, {
                                defaultTime: t,
                                format24: !n.options.twelveHour
                            })
                        })
                    }
                }, {
                    key: "_addInputsListeners",
                    value: function () {
                        var a = this;
                        G.find("input", this._addEventModal).forEach(function (e) {
                            C.on(e, "input", function (e) {
                                return a._newEventUpdateData(e)
                            })
                        }), G.find("input", this._editEventModal).forEach(function (e) {
                            C.on(e, "input", function (e) {
                                return a._editActiveEventData(e)
                            })
                        }), G.find("textarea", this._addEventModal).forEach(function (e) {
                            C.on(e, "input", function (e) {
                                return a._newEventUpdateData(e)
                            })
                        }), G.find("textarea", this._editEventModal).forEach(function (e) {
                            C.on(e, "input", function (e) {
                                return a._editActiveEventData(e)
                            })
                        }), G.find(".datepicker", this._addEventModal).forEach(function (e) {
                            var t = {},
                                n = G.findOne(".datepicker-toggle-button", e);
                            t.target = G.findOne("input", e), C.on(e, "dateChange.mdb.datepicker", function () {
                                a._newEventUpdateData(t)
                            }), C.on(n, "click", function (e) {
                                return e.preventDefault()
                            })
                        }), G.find(".timepicker", this._addEventModal).forEach(function (e) {
                            var t = {};
                            t.target = G.findOne("input", e), C.on(e, "input.mdb.timepicker", function () {
                                a._newEventUpdateData(t)
                            })
                        }), G.find(".datepicker", this._editEventModal).forEach(function (e) {
                            var t = {},
                                n = G.findOne(".datepicker-toggle-button", e);
                            t.target = G.findOne("input", e), C.on(e, "dateChange.mdb.datepicker", function () {
                                a._editActiveEventData(t)
                            }), C.on(n, "click", function (e) {
                                return e.preventDefault()
                            })
                        }), G.find(".timepicker", this._editEventModal).forEach(function (e) {
                            var t = {};
                            t.target = G.findOne("input", e), C.on(e, "input.mdb.timepicker", function () {
                                a._editActiveEventData(t)
                            })
                        })
                    }
                }, {
                    key: "_newEventUpdateData",
                    value: function (e) {
                        switch (e.target.name) {
                            case "summary":
                                console.log("summary")
                                this._newEvent.summary = e.target.value;
                                break;
                            case "description":
                                this._newEvent.description = e.target.value;
                                break;
                            case "location" :
                                this._newEvent.location = e.target.value;
                                break;
                            case "start.date":
                                this._newEvent.start.date = l()(e.target.value, this.formats.date), this._newEvent.start.dateTime = l()("".concat(e.target.value, " ").concat(this._newEvent.start.dateTime.format(this.formats.date)), this.formats.date);
                                break;
                            case "end.date":
                                this._newEvent.end.date = l()(e.target.value, this.formats.date), this._newEvent.end.dateTime = l()("".concat(e.target.value, " ").concat(this._newEvent.end.dateTime.format(this.formats.date)), this.formats.date);
                                break;
                            case "start.time":
                                this._newEvent.start.dateTime = l()("".concat(this._newEvent.start.date.format(this.formats.date), " ").concat(e.target.value), this.formats.dateTime);
                                break;
                            case "end.time":
                                this._newEvent.end.dateTime = l()("".concat(this._newEvent.end.date.format(this.formats.date), " ").concat(e.target.value), this.formats.dateTime);
                                break;
                            case "color.background":
                                this._newEvent.color || (this._newEvent.color = {}), this._newEvent.color.background = e.target.value;
                                break;
                            default:
                                return
                        }
                        this._clearValidation()
                    }
                }, {
                    key: "_editActiveEventData",
                    value: function (e) {
                        switch (e.target.name) {
                            case "summary":
                                this._activeEvent.summary = e.target.value;
                                break;
                            case "description":
                                this._activeEvent.description = e.target.value;
                                break;
                            case "location" :
                                this._activeEvent.location = e.target.value;
                                break;
                            case "start.date":
                                this._activeEvent.start.date = l()(e.target.value, this.formats.date), this._activeEvent.start.dateTime = l()("".concat(e.target.value, " ").concat(this._activeEvent.start.dateTime.format(this.formats.date)), this.formats.date);
                                break;
                            case "end.date":
                                this._activeEvent.end.date = l()(e.target.value, this.formats.date), this._activeEvent.end.dateTime = l()("".concat(e.target.value, " ").concat(this._activeEvent.end.dateTime.format(this.formats.date)), this.formats.date);
                                break;
                            case "start.time":
                                this._activeEvent.start.dateTime = l()("".concat(this._activeEvent.start.date.format(this.formats.date), " ").concat(e.target.value), this.formats.dateTime);
                                break;
                            case "end.time":
                                this._activeEvent.end.dateTime = l()("".concat(this._activeEvent.end.date.format(this.formats.date), " ").concat(e.target.value), this.formats.dateTime);
                                break;
                            case "color.background":
                                this._activeEvent.color || (this._activeEvent.color = {}), this._activeEvent.color.background = e.target.value;
                                break;
                            default:
                                return
                        }
                        this._clearValidation()
                    }
                }, {
                    key: "_toggleInfoEventModal",
                    value: function (e) {
                        e.stopPropagation()
                    }
                }, {
                    key: "_toggleEditEventModal",
                    value: function (e, t) {
                        this._clearSelection(), e.stopPropagation(), 3 !== e.which && (this._setActiveEvent(t), this._updateEditEventModalContent(), this._editEventModalInstance || (this._editEventModalInstance = new mdb.Modal(this._editEventModal)), this._editEventModalInstance.show(), this._initInputs(), this._initPickers(), this._addInputsListeners())
                    }
                }, {
                    key: "_setActiveEvent",
                    value: function (e) {
                        this._activeEvent = X(X({}, e), {}, {
                            start: X({}, e.start),
                            end: X({}, e.end),
                            color: X({}, e.color)
                        })
                    }
                }, {
                    key: "_appendCurrentMonthDays",
                    value: function () {
                        var e = this.activeMomentCopy.startOf("month").day(),
                            t = this._getArrayFromNumber(this.activeMomentCopy.daysInMonth()),
                            n = [];
                        if (this.options.mondayFirst) {
                            0 === e ? (n.push(t.slice(0, 1)), n.push(t.slice(1, 8 - e))) : n.push(t.slice(0, 8 - e));
                            for (var a = 7; a <= 35; a += 7) n.push(t.slice(8 - e + a - 7, 8 - e + a))
                        } else {
                            n.push(t.slice(0, 7 - e));
                            for (var r = 7; r <= 35; r += 7) n.push(t.slice(7 - e + r - 7, 7 - e + r))
                        }
                        this._createCurrentMonthDayFields(n)
                    }
                }, {
                    key: "_createCurrentMonthDayFields",
                    value: function (e) {
                        for (var t = 0; t < 6; t++)
                            for (var n = 0; n < e[t].length; n++) {
                                var a = u("td"),
                                    r = u("div"),
                                    s = u("div");
                                J.addClass(r, ie), J.addClass(s, "day-field");
                                var i = e[t][n] + 1;
                                s.innerHTML = i;
                                var o = "".concat(i, "/").concat(this.activeMoment.month() + 1, "/").
                                concat(this.activeMoment.year());
                                var ToDate = new Date();
                                if(ToDate.getDate() > i){
                                    J.addClass(a, "disabled");
                                }
                                a.dataset.date = o, l()(o, this.formats.date).isSame(l()(), "day") && J.addClass(a, "today"), a.append(s), 
                                a.append(r), 
                                G.find("tr", this._tBody)[t].append(a), 
                                this.options.readonly || this._addDayFieldListeners(a, o)
                            }
                    }
                }, {
                    key: "_sortEvents",
                    value: function () {
                        this.events.sort(function (e, t) {
                            return l()(e.start.dateTime).diff(t.start.dateTime)
                        })
                    }
                }, {
                    key: "_addEventsKeys",
                    value: function () {
                        this.events.forEach(function (e, t) {
                            return e.key = t + 1
                        })
                    }
                }, {
                    key: "_setEvents",
                    value: function () {
                        var n = this;
                        this.events.forEach(function (e, t) {
                            n._appendEvent(e, t)
                        }), "list" === this.view && this._appendEmptyList()
                    }
                }, {
                    key: "_appendEvent",
                    value: function (e) {
                        switch (this.view) {
                            case "month":
                                this._appendMonthEvent(e);
                                break;
                            case "week":
                                this._appendWeekEvent(e);
                                break;
                            case "list":
                                this._appendListEvent(e);
                                break;
                            default:
                                return
                        }
                    }
                }, {
                    key: "_appendMonthEvent",
                    value: function (a) {
                        
                        var r = this;
                       
                        G.find("td", this._tBody).forEach(function (e) {
                            var t = l()(e.dataset.date, r.formats.date),
                                n = u("div");
                           
                            l()(a.start.date).isSame(t) ? r._appendEventFirstDay(n, a, e) : l()(a.start.dateTime).isBefore(t) && l()(a.end.dateTime).isSameOrAfter(t) && r._appendEventContinuation(n, a, e), r.options.readonly ? J.addClass(n, "event-readonly") : (n.setAttribute("draggable", !0), r._appendMonthListeners(n, a)), new K(n, a, r.formats)
                        })
                    }
                }, {
                    key: "_appendEventFirstDay",
                    value: function (e, t, n) {
                        var a;
                        t.order = G.find(".event", n).length, J.style(e, {
                            order: t.key
                        }), J.addClass(e, "event"), J.addClass(e, "event-".concat(t.key)), J.setDataAttribute(e, "event-key", t.key), J.setDataAttribute(e, "event-order", t.order), t.start.dateTime.isSame(t.end.dateTime, "day") && !t.start.dateTime.isSame(t.end.dateTime, "time") ? (a = u("i"), ["fas", "fa-circle", "pe-1", "event-circle"].forEach(function (e) {
                            J.addClass(a, e)
                        }), J.addClass(e, "event-short"), J.style(a, {
                            color: t.color && t.color.background
                        }), e.append(a)) : J.style(e, {
                            background: t.color && t.color.background,
                            color: t.color && t.color.foreground
                        }), e.append(t.summary), G.findOne(".".concat(ie), n).append(e)
                    }
                }, {
                    key: "_appendEventContinuation",
                    value: function (t, e, n) {
                        t.innerHTML = "&nbsp;", J.style(t, {
                            order: e.key,
                            background: e.color && e.color.background,
                            color: e.color && e.color.foreground
                        }), J.setDataAttribute(t, "event-key", e.key), J.setDataAttribute(t, "event-order", e.order), ["event", "event-".concat(e.key), "event-long"].forEach(function (e) {
                            J.addClass(t, e)
                        }), G.findOne(".".concat(ie), n).append(t)
                    }
                }, {
                    key: "_appendMonthListeners",
                    value: function (e, t) {
                        var n = this;
                        C.on(e, "dragstart", function (e) {
                            return n._handleDragStart(e, t)
                        }), C.on(e, "dragend", function (e) {
                            return n._handleDragEnd(e, t)
                        }), C.on(e, "mouseup", function (e) {
                            return n._toggleEditEventModal(e, t)
                        }), C.on(e, "mouseenter", function () {
                            return n._markEvent(t)
                        }), C.on(e, "mouseleave", function () {
                            return n._unmarkEvent(t)
                        })
                    }
                }, {
                    key: "_markEvent",
                    value: function (e) {
                        G.find(".event-".concat(e.key), this._tBody).forEach(function (e) {
                            J.addClass(e, oe)
                        })
                    }
                }, {
                    key: "_unmarkEvent",
                    value: function (e) {
                        G.find(".event-".concat(e.key), this._tBody).forEach(function (e) {
                            J.removeClass(e, oe)
                        })
                    }
                }, {
                    key: "_handleDragStart",
                    value: function (e, t) {
                        this._hideTooltip(e), this._clearSelection(), G.find(".event-".concat(t.key), this._tBody).forEach(function (e) {
                            J.addClass(e, "dragging")
                        }), e.dataTransfer.setData("text/plain", t.key)
                    }
                }, {
                    key: "_handleDragEnd",
                    value: function (e, t) {
                        G.find(".event-".concat(t.key), this._tBody).forEach(function (e) {
                            J.removeClass(e, "dragging")
                        })
                    }
                }, {
                    key: "_handleDragOver",
                    value: function (e) {
                        return e.preventDefault && e.preventDefault(), !1
                    }
                }, {
                    key: "_handleDragEnter",
                    value: function (e) {
                        J.addClass(e.target, "dragenter")
                    }
                }, {
                    key: "_handleDragLeave",
                    value: function (e) {
                        J.removeClass(e.target, "dragenter")
                    }
                }, {
                    key: "_handleDrop",
                    value: function (e, t) {
                        var n = parseInt(e.dataTransfer.getData("text/plain"), 10),
                            a = this.events[n - 1],
                            r = l()(a.start.dateTime, this.formats.dateTime),
                            s = l()(a.start.dateTime).format(this.formats.time),
                            i = l()(a.end.dateTime, this.formats.dateTime).diff(r);
                        a.start = {
                            date: l()(t, this.formats.date),
                            dateTime: l()("".concat(t, " ").concat(s), this.formats.dateTime)
                        }, a.end = {
                            date: l()(t, this.formats.date).add(i),
                            dateTime: l()("".concat(t, " ").concat(s), this.formats.dateTime).add(i)
                        }, this.refresh()
                    }
                }, {
                    key: "_orderEvents",
                    value: function () {
                        var s = this;
                        G.find(".".concat(ie), this._tBody).forEach(function (e) {
                            for (var t = G.find(".event", e), n = 0; n <= t.length; n++) {
                                if (!t[n]) return;
                                for (var a = s._getAllPrevEl(t[n]).length < parseInt(t[n].dataset.mdbEventOrder, 10); a;) {
                                    var r = u("div");
                                    r.innerHTML = "&nbsp;", J.style(r, {
                                        order: t[n].dataset.mdbEventOrder
                                    }), J.addClass(r, "fake-event"), e.insertBefore(r, t[n]), G.find("div", e).forEach(function (e, t) {
                                        e.dataset.mdbEventOrder < t && G.find(".event-".concat(e.dataset.mdbEventKey), s._tBody).forEach(function (e) {
                                            return e.dataset.mdbEventOrder = t
                                        })
                                    }), a = s._getAllPrevEl(t[n]).length < parseInt(t[n].dataset.mdbEventOrder, 10)
                                }
                            }
                        })
                    }
                }, {
                    key: "_appendNextMonthDays",
                    value: function () {
                        var e = G.find("tr", this._tBody),
                            t = 7 - G.find("td", e[4]).length,
                            n = 7 - G.find("td", e[5]).length;
                        0 < t && this._appendEventsInRow(e[4], t), 0 < n && this._appendEventsInRow(e[5], n, t)
                    }
                }, {
                    key: "_appendEventsInRow",
                    value: function (e, t, n) {
                        for (var a = 2 < arguments.length && void 0 !== n ? n : 0, r = 0; r < t; r++) {
                            var s = u("div"),
                                i = u("td"),
                                o = u("div");
                            J.addClass(s, ie), J.addClass(i, "disabled"), J.addClass(o, "day-field"), 
                            o.innerHTML = r + 1 + a;
                            var d = "".concat(r + 1 + a, "/").concat(this.activeMomentCopy.startOf("month").add(1, "month").month() + 1, "/").concat(this.activeMomentCopy.startOf("month").add(1, "month").year());
                            i.dataset.date = d, i.append(o), i.append(s), e.append(i), this.options.readonly || this._addDayFieldListeners(i, d)
                        }
                    }
                }, {
                    key: "_appendWeekEvent",
                    value: function (e) {
                        this._appendLongWeekEvent(e), this._appendDateTimeWeekEvent(e)
                    }
                }, {
                    key: "_appendLongWeekEvent",
                    value: function (s) {
                        var i = this;
                        G.find("tr.long-event-row td", this._tBody).forEach(function (e, t) {
                            var n,
                                a = i.options.mondayFirst ? i.activeMomentCopy.startOf("week").add(t, "day").add(1, "day") : i.activeMomentCopy.startOf("week").add(t, "day"),
                                r = u("div");
                            l()(s.start.date).isSame(a) && (J.style(r, {
                                order: s.key
                            }), s.order = G.find(".event", e).length, J.addClass(r, "event"), J.addClass(r, "event-".concat(s.key)), J.setDataAttribute(r, "event-key", s.key), J.setDataAttribute(r, "event-order", s.order), s.start.dateTime.isSame(s.end.dateTime, "day") && !s.start.dateTime.isSame(s.end.dateTime, "time") ? (n = u("i"), ["fas", "fa-circle", "pe-1", "event-circle"].forEach(function (e) {
                                J.addClass(n, e)
                            }), J.addClass(r, "event-short"), J.style(n, {
                                color: s.color && s.color.background
                            }), r.append(n)) : J.style(r, {
                                background: s.color && s.color.background,
                                color: s.color && s.color.foreground
                            }), r.append(s.summary), G.findOne(".".concat(ie), e).append(r), i.options.readonly ? J.addClass(r, "event-readonly") : (r.setAttribute("draggable", !0), i._appendMonthListeners(r, s))), l()(s.start.dateTime).isBefore(a) && l()(s.end.dateTime).isSameOrAfter(a) && (r.innerHTML = "&nbsp;", J.style(r, {
                                order: s.key,
                                background: s.color && s.color.background,
                                color: s.color && s.color.foreground
                            }), J.setDataAttribute(r, "event-key", s.key), J.setDataAttribute(r, "event-order", s.order), ["event", "event-".concat(s.key), "event-long"].forEach(function (e) {
                                J.addClass(r, e)
                            }), G.findOne(".".concat(ie), e).append(r), i.options.readonly ? J.addClass(r, "event-readonly") : (r.setAttribute("draggable", !0), i._appendMonthListeners(r, s))), new K(r, s, i.formats)
                        })
                    }
                }, {
                    key: "_appendDateTimeWeekEvent",
                    value: function (a) {
                        var r = this;
                        a.start.dateTime.isSame(a.end.dateTime, "day") && !a.start.dateTime.isSame(a.end.dateTime, "time") && G.find("tr:not(.long-event-row) td", this._tBody).forEach(function (e) {
                            var t, n = l()(e.dataset.dateTime, r.formats.dateTime);
                            l()(a.start.dateTime, r.formats.dateTime).isSameOrBefore(n) && !l()(a.end.dateTime, r.formats.dateTime).isSameOrBefore(n) && (t = u("div"), ["event", "event-short", "event-".concat(a.key)].forEach(function (e) {
                                J.addClass(t, e)
                            }), t.innerHTML = '<i class="fas fa-circle event-circle pe-1" style="color: '.concat(a.color.background, '"></i>').concat(a.summary), e.append(t), r.options.readonly ? J.addClass(t, "event-readonly") : (t.setAttribute("draggable", !0), r._appendMonthListeners(t, a)), new K(t, a, r.formats))
                        })
                    }
                }, {
                    key: "_appendEmptyList",
                    value: function () {
                        var e, t;
                        G.find("td", this._tBody).length || (e = u("tr"), (t = u("th")).innerHTML = this.options.noEventsCaption, e.append(t), this._tBody.append(e))
                    }
                }, {
                    key: "_appendListEvent",
                    value: function (t) {
                        var space = '&nbsp &nbsp &nbsp &nbsp &nbsp';
                        var type='';
                        var allDay='All day';
                        var days = [
                            "SUN",
                            "MON",
                            "TUE",
                            "WED",
                            "THU",
                            "FRI",
                            "SAT"
                        ];

                        var dayName = days[new Date(t.start.date).getDay()];
                        if (t['type']=='all_day') {
                            type= '<div class="schedule-date" style="text-align: left; margin: 20px; padding font-family=Roboto,Helvetica,Arial,sans-serif;" data-date="'+t.start.date._i+'" data-day="'+ dayName +'" data-title="'+t.summary+'"> '+formatDate(t.start.date)+ dayName + space +'<i class="pe-2 fas fa-circle"  style=" color: '+t.color.background+'"></i>'+ allDay + space +'<strong>'.concat( t.summary, "</strong></div>");
                        } else {
                            type= '<div class="schedule-date" style="text-align: left; margin: 20px; padding font-family=Roboto,Helvetica,Arial,sans-serif;" data-date="'+t.start.date._i+'" data-day="'+ dayName +'" data-title="'+t.summary+'"> '+formatDate(t.start.date)+ dayName+space +'<i class="pe-2 fas fa-circle" style=" color: '+t.color.background+'"></i>'+ extractTime(t.start.dateTime) + extractTime(t.end.dateTime) + space  +'<strong>'.concat( t.summary, "</strong></div>");

                        }
                        var e, n, a, r, s, i = this,
                            o = this.activeMomentCopy.startOf("week"),
                            d = this.activeMomentCopy.endOf("week");
                        this.options.mondayFirst && (o.add(1, "day"), d.add(1, "day")), l()(t.start.dateTime).isBefore(d) && l()(t.end.dateTime).isAfter(o) && (e = u("tr"), n = u("tr"), a = u("th"), r = u("td"), a.innerHTML = $(t, this.formats), s = t.color.background || "#1266F1", r.innerHTML = type, e.append(a), n.append(r),  this._tBody.append(n), t.description && this._addListEventDescription(r, ' '), this.options.readonly ? J.addClass(r, "td-readonly") : C.on(r, "mouseup", function (e) {
                            return i._toggleEditEventModal(e, t)
                        }))
                    }
                }, {
                    key: "_addListEventDescription",
                    value: function (e, t) {
                        var n = u("p");
                        J.addClass(n, "mb-0"), n.innerHTML = "<small>".concat(t, "</small>"), e.append(n)
                    }
                }, {
                    key: "_appendLongEventSection",
                    value: function () {
                        var e = u("tr");
                        J.addClass(e, "long-event-row");
                        var t = u("th");
                        e.append(t);
                        for (var n = 0; n < 7; n++) {
                            var a = u("td"),
                                r = u("div");
                            J.addClass(r, ie), a.append(r), e.append(a);
                            var s = this.options.mondayFirst ? this.activeMomentCopy.startOf("week").add(n + 1, "day").format(this.formats.date) : this.activeMomentCopy.startOf("week").add(n, "day").format(this.formats.date);
                            a.dataset.date = s, l()(s, this.formats.date).isSame(l()(), "day") && J.addClass(a, "today"), this.options.readonly || this._addDayFieldListeners(a, s)
                        }
                        this._tBody.append(e)
                    }
                }, {
                    key: "_appendHoursSection",
                    value: function () {
                        for (var e = 0; e < 23; e++) {
                            var t = u("tr"),
                                n = u("th");
                            J.addClass(n, "hour-field"), this.options.twelveHour ? n.innerHTML = 11 < e ? "".concat(e - 11, ":00 pm") : "".concat(e + 1, 11 === e ? ":00 pm" : ":00 am") : n.innerHTML = "".concat(e + 1, ":00"), t.append(n);
                            for (var a = 0; a < 7; a++) {
                                var r = u("td"),
                                    s = this.options.mondayFirst ? this.activeMomentCopy.startOf("week").add(a + 1, "day").add(e + 1, "hour").format(this.formats.dateTime) : this.activeMomentCopy.startOf("week").add(a, "day").add(e + 1, "hour").format(this.formats.dateTime);
                                r.dataset.dateTime = s, t.append(r), this.options.readonly || this._addDayFieldListeners(r, s)
                            }
                            this._tBody.append(t)
                        }
                    }
                }, {
                    key: "_setHeading",
                    value: function () {
                        switch (this._heading.innerHTML = "", this.view) {
                            case "month":
                                this._heading.innerHTML = "".concat(this.options.months[this.activeMomentCopy.month()], " ").concat(this.activeMomentCopy.year());
                                break;
                            case "week":
                            case "list":
                                this._setWeekAndListHeading();
                                break;
                            default:
                                return
                        }
                    }
                }, {
                    key: "_setWeekAndListHeading",
                    value: function () {
                        var e = this.options.mondayFirst ? this.activeMomentCopy.startOf("week").add(1, "day") : this.activeMomentCopy.startOf("week"),
                            t = this.options.mondayFirst ? this.activeMomentCopy.endOf("week").add(1, "day") : this.activeMomentCopy.endOf("week"),
                            n = this.options.monthsShort[e.month()],
                            a = e.date(),
                            r = this.options.monthsShort[t.month()],
                            s = t.date();
                        this._heading.innerHTML = "".concat(n, " ").concat(a, " - ").concat(r, " ").concat(s, ", ").concat(e.year())
                    }
                }, {
                    key: "_clearTBody",
                    value: function () {
                        this._tBody.innerHTML = "", this._table.className = ""
                    }
                }, {
                    key: "_addListeners",
                    value: function () {
                        var e = this;
                        C.on(this._arrowLeft, "click", function () {
                            return prevMonthShow();
                            return e.prev()
                        }), C.on(this._arrowRight, "click", function () {
                            return nextMonthShow();
                            return e.next()
                        }), C.on(this._todayBtn, "click", function () {
                            todayDate();
                            return e.today()
                        }), C.on(this._monthBtn, "click", function () {
                            return e.changeView("month")
                        }), C.on(this._weekBtn, "click", function () {
                            return e.changeView("week")
                        }), C.on(this._listBtn, "click", function () {
                            return e.changeView("list")
                        }), C.on(this._table, "mouseup", function () {
                            return e._clearSelection()
                        })
                    }
                }, {
                    key: "_removeListeners",
                    value: function () {
                        C.off(this._arrowLeft, "click", this.prev), C.off(this._arrowRight, "click", this.next), C.off(this._todayBtn, "click", this.today), C.off(this._monthBtn, "click", this.changeView), C.off(this._weekBtn, "click", this.changeView), C.off(this._listBtn, "click", this.changeView), C.off(this._table, "mouseup", this._clearSelection)
                    }
                }, {
                    key: "_getArrayFromNumber",
                    value: function (e) {
                        return Array.from(Array(e).keys())
                    }
                }, {
                    key: "_getAllPrevEl",
                    value: function (e) {
                        for (var t = [], n = e.previousElementSibling; n;) t.push(e), n = n.previousElementSibling;
                        return t
                    }
                }, {
                    key: "_setLongEventCaptions",
                    value: function () {
                        var n = this;
                        "list" !== this.view && G.find("tr", this._tBody).forEach(function (e) {
                            var t = G.findOne("td", e);
                            G.find(".event", t).forEach(function (e) {
                                "&nbsp;" === e.innerHTML && (e.innerHTML = n.events[parseInt(e.dataset.mdbEventKey, 10) - 1].summary, J.style(e, {
                                    paddingLeft: "7px"
                                }))
                            })
                        })
                    }
                }, {
                    key: "_initTooltips",
                    value: function () {
                        this._tooltips = ee(this._element.querySelectorAll('[data-mdb-toggle="tooltip"]')).map(function (e) {
                            return new mdb.Tooltip(e)
                        })
                    }
                }, {
                    key: "_hideTooltip",
                    value: function (e) {
                        mdb.Tooltip.getInstance(e.target).hide()
                    }
                }, {
                    key: "_refreshTable",
                    value: function () {
                        this._setTBody(), this._setHeading(), this._setEvents(), this._orderEvents(), this._setLongEventCaptions(), this._initTooltips()
                    }
                }, {
                    key: "_createAddEventModal",
                    value: function () {
                        
                        this._addEventModal = u("div"),
                        this._addEventModal.setAttribute("id", "newAppointmentModal"), 
                        J.addClass(this._addEventModal, "modal"), 
                        J.addClass(this._addEventModal, "fade"), 
                        J.addClass(this._addEventModal, "small-model"), 
                        //this._addEventModal.setAttribute("tabindex", "-1"), 
                        this._addEventModal.setAttribute("aria-hidden", "true"), 
                        this._addEventModal.setAttribute("data-mdb-backdrop","static");
                        this._addEventModal.setAttribute("data-mdb-keyboard","false");
                        
                        document.body.appendChild(this._addEventModal)
                    }
                }, {
                    key: "_updateAddEventModalContent",
                    value: function () {
                        var e, t, n, a, r = this;
                        const serviceOptions = [];
                        const clientOptions = [];

                        this._addEventModal.innerHTML = (e = this.options, t = this._newEvent, n = this.formats, a = this._addModalId,
                        '\n '

                        + ' <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" id="newAppointment">\n'
                        + '	<form >\n'
                        + '		<div class="modal-content">\n'
                        + '			<div class="modal-body pt-0">\n'
                        + '				<div class="userapp"> \n'
                        + '					<div class="userfull"> \n'
                        + '						<div class="userpic"> \n <img src="https://rosnyc.com/admin/images/logo.png" height="70px" width="75px"> \n </div> \n'
                        + '						<div class="userdet"> \n'
                        + '							<h3 class="u_title">' + username + '</h3> \n'
                        + '							<p>' + email + '</p> \n '
                        + '                     </div> \n'
                        + '						<div class="usernote"> \n <a id="add_note" class="btn btn-primary addnote"> \n <i class="fa fa-book"></i> Add note</a> \n '
                        + '                     </div> \n '
                        + '                 </div> \n'
                        + '					<div class="usernt"> \n'
                        + '				         <div class="form-outline my-2"> \n'
                        + '							  <textarea type="text" style="color:#fff;" id="user-note" name="user_note" class="form-control" spellcheck="false"></textarea> \n'
                        + '							  <label class="form-label" for="form6"> User note </label> \n '
                        + '                     </div> \n '
                        + '                 </div> \n '
                        + '             </div> \n'
                        + '				<div class="box box mt-4 box-tab selectIdOne" id="selectIdOne">'
                        + '                 <div class="appoinment-dark"> \n'
                        + '				         <button type="button" onClick="fnCloseModal()" class="close action action--close" data-mdb-dismiss="modal" aria-label="Close">\n <span aria-hidden="true">✕</span>\n </button>\n'
                        + '                      <div class="d-sm-flex align-items-center automate-your justify-content-between"> \n'
                        + '                             <label class="form-label">Automate your</label> \n'  
                        + '					            <select class="select form-outlineInitSelect calendar-summary-input" name="service_id" data-mdb-filter="true" data-mdb-container="#newAppointmentModal" id="service_id" onChange="fnService()"> \n'
                        + '                                 <option value="add-service" data-name="">Add service</option>  \n'
                        + '                             </select> \n'
                        + '				         </div> \n'
                        + '						<div class="form-outline editservc mt-3" style="display: none;">'
                        + '                         <input type="text" id="formAddService" name="service_name_add" onBlur="fnServiceAdd()" class="form-control" />\n <label class="form-label" for="formAddService">Add service</label> \n '
                        + '                     </div>\n'
                        + '                  </div>\n'
                        + '                  <div class="tab-content" id="ex1-content">\n'
                        + '                     <div class="tab-pane fade show active" id="add-ex1-tabs-1" role="tabpanel" aria-labelledby="add-ex1-tab-1">\n'
                        + '                         <h3 class="sub-title" id="dvTimeTitle"><img src="https://rosnyc.com/admin/images/icon-wall-clock.png"> Appointment time</h3>\n'
                        + '					        <div class="form-check">\n'
                        + '						       <input\n class="form-check-input calendar-long-events-checkbox calendar-invalid-input" name="type"  \n type="checkbox" \n \n id="' + a + 'longEventsCheckbox" \n />\n'
                        + '						       <label class="form-check-label" for="' + a + 'longEventsCheckbox">\n ' + e.allDayCaption + '\n </label>\n <label class="form-check-label" id="lblCustomDate"></label>'
                        + '                         </div>\n'
                        + '					        <section class="long-event-section" style="display:none">\n'
                        + '						        <div class="form-outline datepicker my-3 uiuiui datepickerStartaddall" >\n'
                        + '							          <input type="text" id="' + a + 'addEventStartDate" name="start.date" data-mdb-toggle="datepicker" class="form-control calendar-date-input" \n value="' + l()(t.start.date).format("dddd, MMMM DD") + '" />\n'
                        + '							          <label class="form-label" for="' + a + 'addEventStartDate">\n ' + e.startCaption + '\n </label>\n '
                        + '                             </div>\n '
                        + '                         </section>\n'
                        + '					        <section class="date-time-section" style="display: block">\n'
                        + '						       <div class="row mt-3">\n'
                        + '							      <div class="col-6">\n'
                        + '								     <div class="form-outline datepicker datepickerStartadd" >\n'
                        + '									    <input type="text" id="' + a + 'addEventStartDate2" name="startDate" data-mdb-toggle="datepicker" data-mdb-toggle="datepicker" class="form-control calendar-date-input" \n value="' + l()(t.start.dateTime).format("dddd, MMMM DD") + '" />\n'
                        + '									    <label class="form-label" for="' + a + 'addEventStartDate2">\n ' + e.startCaption + '\n </label>\n '
                        + '                                  </div>\n '
                        + '                                </div>\n'
                        + '							       <div class="col-6">\n'
                        + '								         <div class="form-outline timepicker timepickerstartadd">\n'
                        + '									        <input type="text" id="' + a + 'addEventStartDateTime" name="startTime" data-mdb-toggle="datepicker" class="form-control calendar-date-input" \n value="" \n />\n'
                        + '									        <label class="form-label" for="' + a + 'addEventStartDateTime">\n ' + e.startTimeCaption + '\n </label>\n '
                        + '                                     </div>\n '
                        + '                                 </div>\n '
                        + '                             </div>\n '
                        + '                         </section>\n'
                        + '					        <section class="long-event-section" style="display:none">\n'
                        + '						       <div class="form-outline datepicker my-3 datepickerEndadd">\n'
                        + '							      <input type="text" id="' + a + 'addEventEndDate" name="end.date" data-mdb-toggle="datepicker" class="form-control calendar-date-input" \n value="' + l()(t.end.date).format("dddd, MMMM DD") + '" />\n'
                        + '							      <label class="form-label" for="' + a + 'addEventEndDate">\n ' + e.endCaption + '\n </label>\n '
                        +  '                            </div>\n' 
                        + '                         </section>\n'
                        + '                         <section class="date-time-section"> \n'
                        + '                             <div class="row">\n'
                        + '                                 <div class="col-6 mt-3" id="dvCustomDate" style="display:none">\n'
                        + '                                     <select class="select" id="customDate" name="customDate">\n'
                        +'                                          <option value=""></option>\n'
                        +'                                          <option value="15">15 Minutes</option>\n'
                        +'                                          <option value="30">30 Minutes</option>\n'
                        +'                                          <option value="45">45 Minutes</option>\n'
                        +'                                          <option value="60">1 Hour</option>\n'
                        +'                                          <option value="custom">Custom</option>\n'
                        +'                                      </select>\n'
                        +'                                      <label class="form-label select-label">End Time</label>\n'
                        +'                                  </div>\n' 
                        +'                                  <div class="col-6 mt-3" id="dvWithoutCustom" style="display: none">\n'
                        +'                                      <div class="form-outline">\n'
                        + '                                         <input type="text" id="endTimeWithoutCustom" name="endTimeWithoutCustom" class="form-control active" \n value="" \n />\n'
                        + '                                         <label class="form-label" for="endTimeWithoutCustom">\n End Time \n </label>\n '
                        + '                                     </div>\n'
                        +'                                  </div>\n' 
                        +'                                 </div>\n' 
                        + '                             </section> \n' 
                        + '					            <section id="endDate" class="date-time-section-endcustom" style="display: none">\n'
                        + '						           <div class="two-column d-flex flex-wrap justify-content-between my-3">\n'
                        + '								         <div class="form-outline datepicker datepickerEndaddCustom mb-3 mb-sm-0" >\n'
                        + '									        <input type="text" id="' + a + 'addEventEndDate2" name="end.datecustom" data-mdb-toggle="datepicker" class="form-control calendar-date-input" \n value="' + l()(t.end.dateTime).format("dddd, MMMM DD") + '" />\n'
                        + '									        <label class="form-label" for="' + a + 'addEventEndDate2">\n ' + e.endCaption + '\n </label>\n '
                        + '                                     </div>\n'
                        + '								        <div class="form-outline timepicker timepickerAdd">\n'
                        + '									        <input type="text" id="addEventEndDateTimeText" name="end.time" data-mdb-toggle="datepicker" class="form-control calendar-date-input" \n value="' + l()(t.end.dateTime).format(n.time) + '" \n />\n'
                        + '									        <label class="form-label" for="' + a + 'addEventEndDateTime">\n ' + e.endTimeCaption + '\n </label>\n '
                        + '                                     </div>\n '
                        + '                                 </div>\n' 
                        + '                            </section>\n'
                        + '                             <input type="hidden" name="txtUser" id="txtUser">\n' 
                        + '                             <hr class="line">'
                        + '                             <h3 class="sub-title"> <span><img src="https://rosnyc.com/admin/images/icon-user.png"> Client information </span><a class="add-btn add-team-btn" href="javascript:;"><span>+ add team</span></a> <a href="javascript:;" class="add-btn add-client-btn"><span>+ add client</span></a></h3>\n'                           
                        + '                             <div id="addClient">'
                        + '					            <div class="add-client form-wrap-add-user two-column d-flex flex-wrap justify-content-between w-100" > \n'
                        + '						           <div class="form-outline add_user mb-3 addclnt"> \n'
                        + '							          <input type="text" id="form2"   name="client_name_new[]" class="form-control " /> \n'
                        + '							          <label class="form-label"  for="form2"><svg focusable="false" width="20" height="20" viewBox="0 0 24 24" class=" NMm5M"><path d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"></path></svg>Enter client name</label> \n '
                        + '                                 </div> \n'
                        + '						           <div class="form-outline add_user mb-3 addclnt"> \n'
                        + '							          <input type="text" id="form3"   name="client_email_new[]" class="form-control" /> \n'
                        + '							          <label class="form-label" for="form3"><i class="fa fa-envelope-o"></i>Enter client email</label> \n '
                        + '                                 </div> \n'
                        + '						           <div class="form-outline add_user addclnt mb-3 mb-sm-0"> \n'
                        + '							          <input type="text" id="form4"   name="client_number_new[]" class="form-control" /> \n'
                        + '							          <label class="form-label" for="form4"><i class="fa fa-exclamation-circle"></i>Enter client number</label> \n '
                        + '                                 </div> \n'
                        + '                                 <div class="form-outline add_user location-user">\n'
                        + '                                     <input type="text" id="addlocation" autocomplete="off" spellcheck="false" dir="auto" onFocus="geolocate()" name="location_new[]" class="form-control autocomplete" style="z-index:2;"/> \n'
                        + '                                     <label class="form-label" for="' + a + 'location"><svg focusable="false" width="20" height="20" viewBox="0 0 24 24" class="NMm5M location"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>  Location </label>\n' 
                        + '                                 </div>\n'
                        + '					            </div> \n'
                        + '                             </div> \n'
                        + '                             <div class="add-client" style="display: none;"> \n'
                        
                        + '                             </div>\n'
                        + '                             <div class="add-p-user" style="display: none;">\n'
                        + '                                 <h6>You will get the event link in last step</h6>\n'
                        + '                             </div>\n'
                        + '                             <hr class="line">\n'
                        + '                             <div class="add-team" style="display: none;">\n'
                        + '                             <div class="add-search-bar"> \n'
                        + '                                 <input type="search" placeholder="Search" maxlength="100" id="agent_search" autocomplete="off" aria-label="Search" value="">\n'
                        + '                                 <a href="javascript:;" class="add-search-icon"></a>\n'
                        + '                             </div>\n'
                        + '                             </div>\n'
                        + '                         </div>\n'
                        + '                     <div class="tab-pane fade show active" id="add-ex1-tabs-2" role="tabpanel" aria-labelledby="add-ex1-tabs-2">\n'
                        + '                         <div class="notification-box"> \n'
                        + '                                     <div class="notification-item invitee_sms_followup">\n'
                        + '                             <div class="notify-icon">\n'
                        + '                             </div>\n'
                        + '                                         <strong>Text Followup</strong>\n'
                        + '                                         <div class="adaptive d-flex">\n'
                        + '                                             <div class="adaptive-text">\n'
                        + '                                             <p>Request a review or prompt next steps with an automated text sent after the event is over.</p>\n'
                        + '                                         </div>\n'
                        + '                                         <div class="state-and-enabler d-flex justify-content-between">\n'
                        + '                                             <div class="state-or-action">\n'
                        + '                                                 <a href="javascript:;" id="aTextFollowup">Personalize</a>\n'
                        + '                                             </div>\n'
                        + '                                             <div class="form-check form-switch">\n'
                        + '                                                 <input class="form-check-input" type="checkbox" role="switch" name="flexSwitchCheckDefaultTextFollowup" checked="checked" id="flexSwitchCheckDefaultTextFollowup" />\n'
                        + '                                                 <label class="form-check-label" for="flexSwitchCheckDefaultTextFollowup"></label>\n'
                        + '                                             </div>\n'
                        + '                                         </div>\n'
                        + '                                      </div>\n'
                        + '                                     <div id="folloup-textarea" class="form-outline mb-4">\n'
                        + '                                     <div class="ql-wrap">\n'
                        + '                                     </div>\n'
                        
                        + '                                         <br><div class="form-wrap time-wrap-column">\n'
                        + '                                             <div class="custom-section" id="addTextFollowup">\n'
                        + '                                                 <h6>Timing</h6>\n'
                        + '                                                 <section class="form-row d-flex flex-wrap mb-2">\n'
                        + '                                                     <div class="column-number clTextReminder">\n'
                        + '                                                         <div class="form-outline form-outlineInit" id="clDateTimeFollowup_1">\n'
                        + '                                                             <input class="form-control calendar-date-input" name="timingFollowup[]" id="timingFollowup_1" type="number">\n'
                        + '                                                             <label class="form-label" >Time</label>\n'
                        + '                                                         </div>\n'
                        + '                                                         <div class="form-outline form-outlineInit" id="clDateTimeCustomFollowup_1" style="display:none">\n'
                        + '                                                             <input class="form-control calendar-date-input" name="timingCustomFollowup[]" id="timingCustomFollowup_1" type="text">\n'
                        + '                                                             <label class="form-label">Time</label>\n'
                        + '                                                         </div>\n'
                        + '                                                     </div>\n'
                        + '                                                     <div class="column-hour">\n'
                        + '                                                         <div class="form-group_">\n'
                        + '                                                             <select name="selecttimeFollowup[]" id="lstTimingFollowup_1" class="customselect form-outlineInitSelect fnChangeTimingFollowup" onChange="fnChangeTimingFollowup(this)">\n'
                        + '                                                                 <option value=""></option>\n'
                        + '                                                                 <option value="day">day(s) after</option>\n'
                        + '                                                                 <option value="hour">hour(s) after</option>\n'
                        + '                                                                 <option value="minute">minute(s) after</option>\n'
                        + '                                                                 <option value="custom">Custom</option>\n'
                        + '                                                             </select>\n'
                        + '                                                             <label class="form-label select-label">Select Time</label>\n'
                        + '                                                         </div>\n'
                        + '                                                     </div>\n'
                        + '                                                     <div class="btn_remv">\n'
                        + '                                                         <a href="javascript:void(0)" class="btnRemoveRenterFollowup"><i class="fas fa-times-circle"></i></a>\n'
                        + '                                                     </div>\n'
                        + '                                                 </section>\n'
                        + '                                             </div>\n'
                        + '                                             <button id="btnTextFollowup" type="button" class="add-reminder-link">+ Add Another Reminder</button>\n'
                        + '                                         </div>\n'
                        + '                                     </div>\n'
                        + '                                 </div>\n'
                        + '                             </div>\n'
                        + '                          </div>\n'
                        + '                        </div>\n'
                        + '                     </div>\n'
                        
                        + '					        <div class="form-outline addservc"> \n'
                        + '						       <input type="text" id="form1"   name="service_name" class="form-control" /> \n'
                        + '						       <label class="form-label" for="form1">Add service</label> \n </div> \n'
                        + '					           <div class="cmn-select mt-4 selectIdTwo d-none" id="selectIdTwo">'
                        + '						           <h4>Select client</h4>'
                        + '						           <select class="select sel_02" name="client_id" id="sel_02" data-mdb-filter="true" data-mdb-container="#exampleModal"> \n'
                        + '							          <option></option> \n'
                        + '							          <option value="add-client" id="butsave">Add client</option> \n'
                        + '                                 </select>  \n'
                        + '					                <section class="date-time-section" style="display: block">\n'
                        + '						               <div class="row my-3">\n'
                        + '							              <div class="col-6">\n'
                        + '								             <div class="form-outline datepicker">\n'
                        + '									            <input type="text" id="' + a + 'addCustReminderDate2" name="reminder.date" class="form-control calendar-date-input" \n value="' + l()(t.end.dateTime).format(n.date) + '" />\n'
                        + '									            <label class="form-label" for="' + a + 'addCustReminderDate">\n ' + e.reminderDateCaption + '\n </label>\n '
                        + '                                          </div>\n '
                        + '                                       </div>\n'
                        + '							              <div class="col-6">\n'
                        + '								             <div class="form-outline timepicker">\n'
                        + '									            <input type="text" id="' + a + 'addCustReminderTime" name="reminder.time" class="form-control calendar-date-input" \n value="' + l()(t.end.dateTime).format(n.time) + '" \n />\n'
                        + '									            <label class="form-label" for="' + a + 'addCustReminderTime">\n ' + e.reminderTimeCaption + '\n </label>\n '
                        + '                                          </div>\n '
                        + '                                       </div>\n '
                        + '                                    </div>\n' 
                        + '                                 </section>\n'
                        + '			                        <div class="modal-footer">\n'
                        + '				                         <button type="button" class="btn btn-primary btn-add-event">\n ' + e.addCaption + "\n </button>\n "
                        + "                                 </div>\n "

                        + "                              </div>\n "
                        + "                              </div>\n "
                        + '                        <div class="modal-footer">\n'
                        + '                             <button type="button" class="btn btn-primary btn-add-event">\n ' + e.addCaption + '\n </button>\n'
                        + '                         </div>\n'
                        + "                           </form>\n " 
                        + "                         </div>");


                        var s = G.findOne(ue, this._addEventModal);
                        C.on(s, "change", function (e) {
                            return r._toggleLongEventMode(e)
                        }), this._editAddModalIfLongEvent(this._newEvent, s);
                        var i = G.findOne("form", this._addEventModal);
                        C.on(i, "submit", function (e) {
                            var arr = {
                                'summary': t.summary,
                                'description': t.description,
                                'background': t.color.background,
                                'end_time': t.end.dateTime._i,
                                "start_time": t.start.dateTime._i
                            };
                            fnStoreEvent(arr);
                            r._addEvent(e), r._triggerEvent("addEvent")
                        })

                    }
                }, {
                    key: "_toggleLongEventMode",
                    value: function (e) {
                        var t = e.target.checked,
                            n = G.find(".long-event-section", this._addEventModal),
                            a = G.find(".date-time-section", this._addEventModal);
                        t ? (n.forEach(function (e) {
                            return e.style.display = "block"
                        }), a.forEach(function (e) {
                            return e.style.display = "none"
                        })) : (n.forEach(function (e) {
                            return e.style.display = "none"
                        }), a.forEach(function (e) {
                            return e.style.display = "block"
                        })), this._updateInputs()
                    }
                }, {
                    key: "_toggleLongEventModeInEditModal",
                    value: function (e) {
                        var t = this,
                            n = e.target.checked,
                            a = G.find(".long-event-section", this._editEventModal),
                            r = G.find(".date-time-section", this._editEventModal);
                        n ? (a.forEach(function (e) {
                            return e.style.display = "block"
                        }), r.forEach(function (e) {
                            G.find(".timepicker-input", e).forEach(function (e) {
                                e.value = "00:00", t._activeEvent.start.dateTime = l()(t._activeEvent.start.dateTime).startOf("day"), t._activeEvent.end.dateTime = l()(t._activeEvent.end.dateTime).startOf("day")
                            }), e.style.display = "none"
                        })) : (a.forEach(function (e) {
                            return e.style.display = "none"
                        }), r.forEach(function (e) {
                            return e.style.display = "block"
                        })), this._updateInputs()
                    }
                }, {
                    key: "_createEditEventModal",
                    value: function () {
                        this._editEventModal = u("div"),this._editEventModal.setAttribute("id", "editAppointmentModal")
                        , J.addClass(this._editEventModal, "modal"), 
                        J.addClass(this._editEventModal, "small-model"), 
                        J.addClass(this._editEventModal, "fade"), 
                        //this._editEventModal.setAttribute("tabindex", "-1"), 
                        this._editEventModal.setAttribute("aria-hidden", "true"), 
                        this._editEventModal.setAttribute("data-mdb-backdrop","static");
                        this._editEventModal.setAttribute("data-mdb-keyboard","false");
                        document.body.appendChild(this._editEventModal)
                    }
                }, {
                    key: "_updateEditEventModalContent",
                    value: function () {
                        var e, t, n, a, r = this;
                        this._editEventModal.innerHTML = (e = this.options, t = this._activeEvent, n = this.formats, a = this._editModalId, '\n  ' +
                        '\n'
                        );

                        var s = G.findOne(ue, this._editEventModal);
                        C.on(s, "change", function (e) {
                            return r._toggleLongEventModeInEditModal(e)
                        }), this._editModalIfLongEvent(this._activeEvent, s);
                        var i = G.findOne('input[value="'.concat(this._activeEvent.color.background, '"]'), this._editEventModal);
                        i ? i.checked = !0 : G.findOne('input[type="radio"]', this._editEventModal).checked = !0;
                        var o = G.findOne(".btn-edit-event", this._editEventModal),
                            d = G.findOne(".btn-delete-event", this._editEventModal);
                        var iss = G.findOne("form", this._editEventModal);
                        C.on(iss, "submit", function (e) {
                            var arr = {
                                'summary': t.summary,
                                'description': t.description,
                                'background': t.color.background,
                                'end_time': t.end.dateTime._i,
                                "start_time": t.start.dateTime._i
                            };
                            //fnStoreEvent(arr);
                            r._addEvent(e),r._triggerEvent("addEvent")
                            return false;
                        })

                        C.on(o, "click", function () {
                            var arr = {
                                'summary': t.summary,
                                'description': t.description,
                                'background': t.color.background,
                                'end_time': t.end.dateTime._i,
                                "start_time": t.start.dateTime._i
                            };
                            fnStoreEvent(arr);
                            r._editEvent(), r._triggerEvent("editEvent")
                        }),
                            C.on(d, "click", function () {
                                r._deleteEvent(), r._triggerEvent("deleteEvent")
                            })
                    }
                }, {
                    key: "_editAddModalIfLongEvent",
                    value: function (e, t) {
                        // alert(e);
                        var n, a;
                        "short-event" !== V(e) && "long-event-with-time" !== V(e) || (t.checked = !1, n = G.find(".long-event-section", this._addEventModal), a = G.find(".date-time-section", this._addEventModal), n.forEach(function (e) {
                            return e.style.display = "none"
                        }), a.forEach(function (e) {
                            return e.style.display = "block"
                        }))
                    }
                }, {
                    key: "_editModalIfLongEvent",
                    value: function (e, t) {
                        var n, a;
                        "short-event" !== V(e) && "long-event-with-time" !== V(e) || (t.checked = !1, n = G.find(".long-event-section", this._editEventModal), a = G.find(".date-time-section", this._editEventModal), n.forEach(function (e) {
                            return e.style.display = "none"
                        }), a.forEach(function (e) {
                            return e.style.display = "block"
                        }))
                    }
                }, {
                    key: "_addEvent",
                    value: function (e) {
                        //console.log("this._newEvent",this._newEvent);
                        console.log('_addEvent');
                        console.log(this);
                        e.preventDefault(), this._validateEvent(this._newEvent) ? (this.events.push({
                            summary: this._newEvent.summary,
                            start: this._newEvent.start,
                            end: this._newEvent.end,
                            color: this._newEvent.color || {},
                            description: this._newEvent.description || "",
                            location: this._newEvent.location || ""
                        }), C.trigger(this._element, "addEvent.mdb.calendar", this._newEvent), this.refresh(), this._addEventModalInstance.hide()) : this._setInputsInvalid(this._newEvent)
                    }
                }, {
                    key: "_validateEvent",
                    value: function (e) {
                        setTimeout(function () {
                        }, 5000);
                        //return !(!e.start.dateTime.isSameOrBefore(e.end.dateTime) || !e.summary || !e.description)
                        return !(!e.summary || !e.description)
                    }
                }, {
                    key: "_setInputsInvalid",
                    value: function (e) {
                        if(e.end || e.summary || e.start){
                            e.end.dateTime.isSameOrBefore(e.start.dateTime) && G.find(".calendar-date-input").forEach(function (e) {
                                J.addClass(e, "calendar-invalid-input"), J.addClass(e.parentNode.parentNode, "was-validated")
                            }), "" === e.summary  && G.find(".calendar-summary-input").forEach(function (e) {
                                J.addClass(e, "calendar-invalid-input"), J.addClass(e.parentNode.parentNode, "was-validated")
                            }), "" === e.description  && G.find(".calendar-description-input").forEach(function (e) {
                                J.addClass(e, "calendar-invalid-input"), J.addClass(e.parentNode.parentNode, "was-validated")
                            })
                        }
                        
                        // , "" === e.location  && G.find(".calendar-location-input").forEach(function (e) {
                        //     J.addClass(e, "calendar-invalid-input"), J.addClass(e.parentNode.parentNode, "was-validated")
                        // })
                    }
                }, {
                    key: "_clearValidation",
                    value: function () {
                        G.find(".calendar-date-input").forEach(function (e) {
                            J.removeClass(e, "calendar-invalid-input"), J.removeClass(e.parentNode.parentNode, "was-validated")
                        }),
                        G.find(".calendar-summary-input").forEach(function (e) {
                            if(e.value != ""){
                                J.removeClass(e, "calendar-invalid-input"),
                                J.removeClass(e.parentNode.parentNode, "was-validated")
                            }
                        }),
                        G.find(".calendar-description-input").forEach(function (e) {
                            if(e.value != ""){
                                J.removeClass(e, "calendar-invalid-input"), 
                                J.removeClass(e.parentNode.parentNode, "was-validated")
                            }
                        })
                        //,
                        // G.find(".calendar-location-input").forEach(function (e) {
                        //     if(e.value != ""){
                        //         J.removeClass(e, "calendar-invalid-input"), 
                        //         J.removeClass(e.parentNode.parentNode, "was-validated")
                        //     }
                        // })
                    }
                }, {
                    key: "_editEvent",
                    value: function () {
                        console.log('_editEvent');
                        console.log(this);
                        this._validateEvent(this._activeEvent) ? 
                        (this.events[this.activeEventIndex].summary = this._activeEvent.summary, 
                        this.events[this.activeEventIndex].start.date = this._activeEvent.start.date, 
                        this.events[this.activeEventIndex].start.dateTime = this._activeEvent.start.dateTime, 
                        this.events[this.activeEventIndex].end.date = this._activeEvent.end.date, 
                        this.events[this.activeEventIndex].end.dateTime = this._activeEvent.end.dateTime, 
                        this.events[this.activeEventIndex].description = this._activeEvent.description, 
                        this.events[this.activeEventIndex].location = this._activeEvent.location, 
                        this.events[this.activeEventIndex].color.background = this._activeEvent.color 
                        && this._activeEvent.color.background, 
                        C.trigger(this._element, "editEvent.mdb.calendar", this._activeEvent), 
                        this.refresh(), this._editEventModalInstance.hide()) : this._setInputsInvalid(this._activeEvent)
                    }
                }, {
                    key: "_deleteEvent",
                    value: function () {
                        C.trigger(this._element, "deleteEvent.mdb.calendar", this.events[this.activeEventIndex]), this.events.splice(this.activeEventIndex, 1), this.refresh(), this._editEventModalInstance.hide()
                    }
                }, {
                    key: "_clearEvents",
                    value: function () {
                        G.find(".event", this._element).forEach(function (e) {
                            e.remove()
                        })
                    }
                }, {
                    key: "_triggerEvent",
                    value: function (e) {
                        C.trigger(this._element, "".concat(e, ".calendar"))
                    }
                }, {
                    key: "_disposeModals",
                    value: function () {
                        this._addEventModalInstance && this._addEventModalInstance.dispose(), this._addEventModal && this._addEventModal.remove(), this._editEventModalInstance && this._editEventModalInstance.dispose(), this._editEventModal && this._editEventModal.remove()
                    }
                }, {
                    key: "options",
                    get: function () {
                        var e = X(X(X({}, le), J.getDataAttributes(this._element)), this._options);
                        return a(re, e, _e), "string" == typeof e.weekdays && (e.weekdays = e.weekdays.split(", ")), "string" == typeof e.months && (e.months = e.months.split(", ")), "string" == typeof e.monthsShort && (e.monthsShort = e.monthsShort.split(", ")), e
                    }
                }, {
                    key: "activeMomentCopy",
                    get: function () {
                        return l()(this.activeMoment)
                    }
                }, {
                    key: "activeEventIndex",
                    get: function () {
                        return this._activeEvent.key - 1
                    }
                }]) && ne(e.prototype, t), n && ne(e, n), r
            }();
        ae = function () {
            var e, t = r();
            t && (e = t.fn[re], t.fn[re] = ce.jQueryInterface, t.fn[re].Constructor = ce, t.fn[re].noConflict = function () {
                return t.fn[re] = e, ce.jQueryInterface
            })
        }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", ae) : ae(), G.find(".".concat("calendar")).forEach(function (e) {
            return new ce(e)
        });
        t.default = ce
    }], r.c = a, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var a in t) r.d(n, a, function (e) {
                return t[e]
            }.bind(null, a));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 273).default;

    function r(e) {
        if (a[e]) return a[e].exports;
        var t = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }

    var n, a
});

//# sourceMappingURL=calendar.min.js.map


//   const displayValueAutocomplete = document.querySelector('#displayValue');
// const data = [
//   { title: 'One', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit' },
//   { title: 'Two', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit' },
//   { title: 'Three', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit' },
//   { title: 'Four', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit' },
//   { title: 'Five', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit' }
// ];
// const dataFilter = (value) => {
//   return data.filter((item) => {
//     return item.title.toLowerCase().startsWith(value.toLowerCase());
//   });
// };

// new mdb.Autocomplete(displayValueAutocomplete, {
//   filter: dataFilter,
//   displayValue: (value) => value.title,
// });








function formatDate(d)
{
    var date = new Date(d);

    if ( isNaN( date .getTime() ) )
    {
        return d;
    }
    else
    {

        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sept";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

        day = date.getDate();

        if(day < 10)
        {
            day = "0"+day;
        }

        return  "<span style='font-size:20px;'>"+day+"</span>"  + " &nbsp; " +month[date.getMonth()] + ", ";
    }

}


function extractTime(d){
    let preDateTime = new Date(d);
    let newTime = preDateTime.toLocaleTimeString('en-US');
    let hour = newTime.split(":")[0];
    let amPm = newTime.split(" ")[1];
    let seconds = newTime.split(":")[2].replace(amPm,'');;


    let noSeconds = newTime.replace(":"+seconds,' ');

    if(parseInt(hour)<9){

        noSeconds= "0"+noSeconds

    }

    return noSeconds;
} 