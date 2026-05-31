/* @license MIT https://raw.githubusercontent.com/jquery/jquery/3.7.1/LICENSE.txt */
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(ie, e) {
    "use strict";
    var oe = [],
        r = Object.getPrototypeOf,
        ae = oe.slice,
        g = oe.flat ? function(e) {
            return oe.flat.call(e)
        } : function(e) {
            return oe.concat.apply([], e)
        },
        s = oe.push,
        se = oe.indexOf,
        n = {},
        i = n.toString,
        ue = n.hasOwnProperty,
        o = ue.toString,
        a = o.call(Object),
        le = {},
        v = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        y = function(e) {
            return null != e && e === e.window
        },
        C = ie.document,
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t)
            for (r in u)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }
    var t = "3.7.1",
        l = /HTML$/i,
        ce = function(e, t) {
            return new ce.fn.init(e, t)
        };

    function c(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function fe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    ce.fn = ce.prototype = {
        jquery: t,
        constructor: ce,
        length: 0,
        toArray: function() {
            return ae.call(this)
        },
        get: function(e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ce.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return ce.each(this, e)
        },
        map: function(n) {
            return this.pushStack(ce.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(ce.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: oe.sort,
        splice: oe.splice
    }, ce.extend = ce.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, ce.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (c(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        text: function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                while (t = e[r++]) n += ce.text(t);
            return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !l.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (c(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: le
    }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = oe.pop,
        de = oe.sort,
        he = oe.splice,
        ge = "[\\x20\\t\\r\\n\\f]",
        ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
    ce.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    };
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function p(e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    ce.escapeSelector = function(e) {
        return (e + "").replace(f, p)
    };
    var ye = C,
        me = s;
    ! function() {
        var e, b, w, o, a, T, r, C, d, i, k = me,
            S = ce.expando,
            E = 0,
            n = 0,
            s = W(),
            c = W(),
            u = W(),
            h = W(),
            l = function(e, t) {
                return e === t && (a = !0), 0
            },
            f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
            g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
            v = new RegExp(ge + "+", "g"),
            y = new RegExp("^" + ge + "*," + ge + "*"),
            m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
            x = new RegExp(ge + "|>"),
            j = new RegExp(g),
            A = new RegExp("^" + t + "$"),
            D = {
                ID: new RegExp("^#(" + t + ")"),
                CLASS: new RegExp("^\\.(" + t + ")"),
                TAG: new RegExp("^(" + t + "|[*])"),
                ATTR: new RegExp("^" + p),
                PSEUDO: new RegExp("^" + g),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + f + ")$", "i"),
                needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
            },
            N = /^(?:input|select|textarea|button)$/i,
            q = /^h\d$/i,
            L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            H = /[+~]/,
            O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
            P = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            M = function() {
                V()
            },
            R = J(function(e) {
                return !0 === e.disabled && fe(e, "fieldset")
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType
        } catch (e) {
            k = {
                apply: function(e, t) {
                    me.apply(e, ae.call(t))
                },
                call: function(e) {
                    me.apply(e, ae.call(arguments, 1))
                }
            }
        }

        function I(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (V(e), e = e || T, C)) {
                if (11 !== p && (u = L.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return k.call(n, a), n
                        } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n
                    } else {
                        if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n
                    }
                if (!(h[t + " "] || d && d.test(t))) {
                    if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
                        (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return k.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        h(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return re(t.replace(ve, "$1"), e, n, r)
        }

        function W() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function F(e) {
            return e[S] = !0, e
        }

        function $(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function B(t) {
            return function(e) {
                return fe(e, "input") && e.type === t
            }
        }

        function _(t) {
            return function(e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t
            }
        }

        function z(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function X(a) {
            return F(function(o) {
                return o = +o, F(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function U(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function V(e) {
            var t, n = e ? e.ownerDocument || e : ye;
            return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function(e) {
                return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length
            }), le.disconnectedMatch = $(function(e) {
                return i.call(e, "*")
            }), le.scope = $(function() {
                return T.querySelectorAll(":scope")
            }), le.cssHas = $(function() {
                try {
                    return T.querySelector(":has(*,:jqfake)"), !1
                } catch (e) {
                    return !0
                }
            }), le.getById ? (b.filter.ID = function(e) {
                var t = e.replace(O, P);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function(e) {
                var n = e.replace(O, P);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }, b.find.CLASS = function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e)
            }, d = [], $(function(e) {
                var t;
                r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
            }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function(e, t) {
                if (e === t) return a = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1)
            }), T
        }
        for (e in I.matches = function(e, t) {
                return I(e, null, null, t)
            }, I.matchesSelector = function(e, t) {
                if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
                    var n = i.call(e, t);
                    if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    h(t, !0)
                }
                return 0 < I(t, T, null, [e]).length
            }, I.contains = function(e, t) {
                return (e.ownerDocument || e) != T && V(e), ce.contains(e, t)
            }, I.attr = function(e, t) {
                (e.ownerDocument || e) != T && V(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== r ? r : e.getAttribute(t)
            }, I.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ce.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) he.call(e, n[r], 1)
                }
                return o = null, e
            }, ce.fn.uniqueSort = function() {
                return this.pushStack(ce.uniqueSort(ae.apply(this)))
            }, (b = ce.expr = {
                cacheLength: 50,
                createPseudo: F,
                match: D,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(O, P).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return fe(e, t)
                        }
                    },
                    CLASS: function(e) {
                        var t = s[e + " "];
                        return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = I.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(d, e, t, h, g) {
                        var v = "nth" !== d.slice(0, 3),
                            y = "last" !== d.slice(-4),
                            m = "of-type" === e;
                        return 1 === h && 0 === g ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling",
                                l = e.parentNode,
                                c = m && e.nodeName.toLowerCase(),
                                f = !n && !m,
                                p = !1;
                            if (l) {
                                if (v) {
                                    while (u) {
                                        o = e;
                                        while (o = o[u])
                                            if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                                        s = u = "only" === d && !s && "nextSibling"
                                    }
                                    return !0
                                }
                                if (s = [y ? l.firstChild : l.lastChild], y && f) {
                                    p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if (1 === o.nodeType && ++p && o === e) {
                                            i[d] = [E, a, p];
                                            break
                                        }
                                } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p)
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
                                return (p -= g) === h || p % h == 0 && 0 <= p / h
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: F(function(e) {
                        var r = [],
                            i = [],
                            s = ne(e.replace(ve, "$1"));
                        return s[S] ? F(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: F(function(t) {
                        return function(e) {
                            return 0 < I(t, e).length
                        }
                    }),
                    contains: F(function(t) {
                        return t = t.replace(O, P),
                            function(e) {
                                return -1 < (e.textContent || ce.text(e)).indexOf(t)
                            }
                    }),
                    lang: F(function(n) {
                        return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = ie.location && ie.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === r
                    },
                    focus: function(e) {
                        return e === function() {
                            try {
                                return T.activeElement
                            } catch (e) {}
                        }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: z(!1),
                    disabled: z(!0),
                    checked: function(e) {
                        return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return q.test(e.nodeName)
                    },
                    input: function(e) {
                        return N.test(e.nodeName)
                    },
                    button: function(e) {
                        return fe(e, "input") && "button" === e.type || fe(e, "button")
                    },
                    text: function(e) {
                        var t;
                        return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: X(function() {
                        return [0]
                    }),
                    last: X(function(e, t) {
                        return [t - 1]
                    }),
                    eq: X(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: X(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: X(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: X(function(e, t, n) {
                        var r;
                        for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: X(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = B(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = _(e);

        function G() {}

        function Y(e, t) {
            var n, r, i, o, a, s, u, l = c[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(ve, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
        }

        function Q(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function J(a, e, t) {
            var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = n++;
            return e.first ? function(e, t, n) {
                while (e = e[s])
                    if (1 === e.nodeType || c) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o = [E, f];
                if (n) {
                    while (e = e[s])
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    while (e = e[s])
                        if (1 === e.nodeType || c)
                            if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;
                            else {
                                if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
                                if ((i[l] = o)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function K(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Z(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function ee(d, h, g, v, y, e) {
            return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function(e, t, n, r) {
                var i, o, a, s, u = [],
                    l = [],
                    c = t.length,
                    f = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    p = !d || !e && h ? f : Z(f, u, d, n, r);
                if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
                    i = Z(s, l), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = s.length;
                            while (o--)(a = s[o]) && i.push(p[o] = a);
                            y(null, s = [], i, r)
                        }
                        o = s.length;
                        while (o--)(a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s)
            })
        }

        function te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function(e) {
                    return e === i
                }, a, !0), l = J(function(e) {
                    return -1 < se.call(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [J(K(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e))
                    }
                    c.push(t)
                }
            return K(c)
        }

        function ne(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = u[e + " "];
            if (!a) {
                t || (t = Y(e)), n = t.length;
                while (n--)(a = te(t[n]))[S] ? i.push(a) : o.push(a);
                (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = E += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == T || (V(o), n = !C);
                            while (s = v[a++])
                                if (s(o, t || T, n)) {
                                    k.call(r, o);
                                    break
                                }
                            i && (E = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = pe.call(r));
                            f = Z(f)
                        }
                        k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
                    }
                    return i && (E = h, w = p), c
                }, m ? F(r) : r))).selector = e
            }
            return a
        }

        function re(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && Y(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = D.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n
        }
        G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort
    }();
    var d = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && ce(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        h = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        b = ce.expr.match.needsContext,
        w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function T(e, n, r) {
        return v(n) ? ce.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? ce.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? ce.grep(e, function(e) {
            return -1 < se.call(n, e) !== r
        }) : ce.filter(n, e, r)
    }
    ce.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ce.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (ce.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
            return 1 < r ? ce.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length
        }
    });
    var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ce.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || k, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t))
                    for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this)
    }).prototype = ce.fn, k = ce(C);
    var E = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    ce.fn.extend({
        has: function(e) {
            var t = ce(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ce.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && ce(e);
            if (!b.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ce.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return d(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return d(e, "nextSibling")
        },
        prevAll: function(e) {
            return d(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function(e) {
            return h((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return h(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes))
        }
    }, function(r, i) {
        ce.fn[r] = function(e, t) {
            var n = ce.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var D = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function L(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    ce.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function(e, t) {
            n[t] = !0
        }), n) : ce.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        ce.each(e, function(e, t) {
                            v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return ce.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < ce.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, ce.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
                    ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return ce.Deferred(function(r) {
                            ce.each(o, function(e, t) {
                                var n = v(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t))
                            }
                        }
                        return ce.Deferred(function(e) {
                            o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ce.extend(e, a) : a
                    }
                },
                s = {};
            return ce.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = ae.call(arguments),
                o = ce.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
            while (t--) L(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ce.Deferred.exceptionHook = function(e, t) {
        ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, ce.readyException = function(e) {
        ie.setTimeout(function() {
            throw e
        })
    };
    var O = ce.Deferred();

    function P() {
        C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready()
    }
    ce.fn.ready = function(e) {
        return O.then(e)["catch"](function(e) {
            ce.readyException(e)
        }), this
    }, ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce])
        }
    }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
    var M = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n))
                for (s in i = !0, n) M(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(ce(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        R = /^-ms-/,
        I = /-([a-z])/g;

    function W(e, t) {
        return t.toUpperCase()
    }

    function F(e) {
        return e.replace(R, "ms-").replace(I, W)
    }
    var $ = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function B() {
        this.expando = ce.expando + B.uid++
    }
    B.uid = 1, B.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[F(t)] = n;
            else
                for (r in t) i[F(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ce.isEmptyObject(t)
        }
    };
    var _ = new B,
        z = new B,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        U = /[A-Z]/g;

    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                z.set(e, t, n)
            } else n = void 0;
        return n
    }
    ce.extend({
        hasData: function(e) {
            return z.hasData(e) || _.hasData(e)
        },
        data: function(e, t, n) {
            return z.access(e, t, n)
        },
        removeData: function(e, t) {
            z.remove(e, t)
        },
        _data: function(e, t, n) {
            return _.access(e, t, n)
        },
        _removeData: function(e, t) {
            _.remove(e, t)
        }
    }), ce.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
                    _.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                z.set(this, n)
            }) : M(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                this.each(function() {
                    z.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                z.remove(this, e)
            })
        }
    }), ce.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ce.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ce._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                ce.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return _.get(e, n) || _.access(e, n, {
                empty: ce.Callbacks("once memory").add(function() {
                    _.remove(e, [t + "queue", n])
                })
            })
        }
    }), ce.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ce.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = ce.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
        Q = ["Top", "Right", "Bottom", "Left"],
        J = C.documentElement,
        K = function(e) {
            return ce.contains(e.ownerDocument, e)
        },
        Z = {
            composed: !0
        };
    J.getRootNode && (K = function(e) {
        return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
    });
    var ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display")
    };

    function te(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return ce.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, ce.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ne = {};

    function re(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    ce.fn.extend({
        show: function() {
            return re(this, !0)
        },
        hide: function() {
            return re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? ce(this).show() : ce(this).hide()
            })
        }
    });
    var xe, be, we = /^(?:checkbox|radio)$/i,
        Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i;
    xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
    var ke = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function Se(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
    }

    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
    }
    ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
    var je = /<|&#?\w+;/;

    function Ae(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
                else if (je.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            ce.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < ce.inArray(o, r)) i && i.push(o);
            else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
            c = 0;
            while (o = a[c++]) Ce.test(o.type || "") && n.push(o)
        }
        return f
    }
    var De = /^([^.]*)(?:\.(.+)|)/;

    function Ne() {
        return !0
    }

    function qe() {
        return !1
    }

    function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return ce().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = ce.guid++)), e.each(function() {
            ce.event.add(this, t, i, r, n)
        })
    }

    function He(e, r, t) {
        t ? (_.set(e, r, !1), ce.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n = _.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n)(ce.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
                } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne)
            }
        })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
    }
    ce.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t);
            if ($(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(D) || [""]).length;
                while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ce.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(D) || [""]).length;
                while (l--)
                    if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
                ce.isEmptyObject(u) && _.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = ce.event.fix(e),
                l = (_.get(this, "events") || Object.create(null))[u.type] || [],
                c = ce.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = ce.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[ce.expando] ? e : new ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ce.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ce.Event = function(e, t) {
        if (!(this instanceof ce.Event)) return new ce.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0
    }, ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: qe,
        isPropagationStopped: qe,
        isImmediatePropagationStopped: qe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ce.event.addProp), ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(r, i) {
        function o(e) {
            if (C.documentMode) {
                var t = _.get(this, "handle"),
                    n = ce.event.fix(e);
                n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n)
            } else ce.event.simulate(i, e.target, ce.event.fix(e))
        }
        ce.event.special[r] = {
            setup: function() {
                var e;
                if (He(this, r, !0), !C.documentMode) return !1;
                (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1)
            },
            trigger: function() {
                return He(this, r), !0
            },
            teardown: function() {
                var e;
                if (!C.documentMode) return !1;
                (e = _.get(this, i) - 1) ? _.set(this, i, e): (this.removeEventListener(i, o), _.remove(this, i))
            },
            _default: function(e) {
                return _.get(e.target, r)
            },
            delegateType: i
        }, ce.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = _.get(t, i);
                n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = _.get(t, i) - 1;
                n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i))
            }
        }
    }), ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        ce.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), ce.fn.extend({
        on: function(e, t, n, r) {
            return Le(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Le(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function() {
                ce.event.remove(this, e, n, t)
            })
        }
    });
    var Oe = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function Re(e, t) {
        return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
    }

    function Ie(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function We(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Fe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (s = _.get(e).events))
                for (i in _.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
            z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a))
        }
    }

    function $e(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = v(d);
        if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o)
        });
        if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : m(u.textContent.replace(Me, ""), u, l))
        }
        return n
    }

    function Be(e, t, n) {
        for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    ce.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = K(e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);
                else Fe(e, c);
            return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if (t = n[_.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                        n[_.expando] = void 0
                    }
                    n[z.expando] && (n[z.expando] = void 0)
                }
        }
    }), ce.fn.extend({
        detach: function(e) {
            return Be(this, e, !0)
        },
        remove: function(e) {
            return Be(this, e)
        },
        text: function(e) {
            return M(this, function(e) {
                return void 0 === e ? ce.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return $e(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Re(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ce.clone(this, e, t)
            })
        },
        html: function(e) {
            return M(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return $e(this, arguments, function(e) {
                var t = this.parentNode;
                ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        ce.fn[e] = function(e) {
            for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
        ze = /^--/,
        Xe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = ie), t.getComputedStyle(e)
        },
        Ue = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ve = new RegExp(Q.join("|"), "i");

    function Ge(e, t, n) {
        var r, i, o, a, s = ze.test(t),
            u = e.style;
        return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Ye(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = C.createElement("div"),
            l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"],
        Je = C.createElement("div").style,
        Ke = {};

    function Ze(e) {
        var t = ce.cssProps[e] || Ke[e];
        return t || (e in Je ? e : Ke[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
            while (n--)
                if ((e = Qe[n] + t) in Je) return e
        }(e) || e)
    }
    var et = /^(none|table(?!-c[ea]).+)/,
        tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        nt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function rt(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
    }

    function ot(e, t, n) {
        var r = Xe(e),
            i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
            o = i,
            a = Ge(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function at(e, t, n, r, i) {
        return new at.prototype.init(e, t, n, r, i)
    }
    ce.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ge(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = F(t),
                    u = ze.test(t),
                    l = e.style;
                if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = F(t);
            return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), ce.each(["height", "width"], function(e, u) {
        ce.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function() {
                    return ot(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Xe(e),
                    o = !le.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
                    s = n ? it(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s)
            }
        }
    }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        ce.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (ce.cssHooks[i + o].set = rt)
    }), ce.fn.extend({
        css: function(e, t) {
            return M(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((ce.Tween = at).prototype = {
        constructor: at,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
        }
    }).init.prototype = at.prototype, (at.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ce.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ce.fx = at.prototype.init, ce.fx.step = {};
    var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;

    function dt() {
        ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick())
    }

    function ht() {
        return ie.setTimeout(function() {
            st = void 0
        }), st = Date.now()
    }

    function gt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function vt(e, t, n) {
        for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function yt(o, e, t) {
        var n, a, r = 0,
            i = yt.prefilters.length,
            s = ce.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: ce.extend({}, e),
                opts: ce.extend(!0, {
                    specialEasing: {},
                    easing: ce.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: st || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, Y.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            v(e) ? (t = e, e = ["*"]) : e = e.match(D);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ee(e),
                v = _.get(e, "fxshow");
            for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ft.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || ce.style(e, r)
                }
            if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && re([e], !0), p.done(function() {
                    for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r])
                })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }), ce.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ce.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
        }, r
    }, ce.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = ce.isEmptyObject(t),
                o = ce.speed(e, n, r),
                a = function() {
                    var e = yt(this, ce.extend({}, t), o);
                    (i || _.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = ce.timers,
                    r = _.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || ce.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = _.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = ce.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), ce.each(["toggle", "show", "hide"], function(e, r) {
        var i = ce.fn[r];
        ce.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }), ce.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        ce.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), ce.timers = [], ce.fx.tick = function() {
        var e, t = 0,
            n = ce.timers;
        for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ce.fx.stop(), st = void 0
    }, ce.fx.timer = function(e) {
        ce.timers.push(e), ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function() {
        ut || (ut = !0, dt())
    }, ce.fx.stop = function() {
        ut = null
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fn.delay = function(r, e) {
        return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = ie.setTimeout(e, r);
            t.stop = function() {
                ie.clearTimeout(n)
            }
        })
    }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
    var mt, xt = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function(e, t) {
            return M(this, ce.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ce.removeAttr(this, e)
            })
        }
    }), ce.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.radioValue && "radio" === t && fe(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(D);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), mt = {
        set: function(e, t, n) {
            return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = xt[t] || ce.find.attr;
        xt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;

    function Tt(e) {
        return (e.match(D) || []).join(" ")
    }

    function Ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
    }
    ce.fn.extend({
        prop: function(e, t) {
            return M(this, ce.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ce.propFix[e] || e]
            })
        }
    }), ce.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), le.optSelected || (ce.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ce.propFix[this.toLowerCase()] = this
    }), ce.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).addClass(t.call(this, e, Ct(this)))
            }) : (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = Tt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ce(this).removeClass(t.call(this, e, Ct(this)))
            }) : arguments.length ? (e = kt(t)).length ? this.each(function() {
                if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = Tt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t,
                s = "string" === a || Array.isArray(t);
            return v(t) ? this.each(function(e) {
                ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function() {
                if (s)
                    for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var St = /\r/g;
    ce.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = v(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ce.find.attr(e, "value");
                    return null != t ? t : Tt(ce.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                            if (t = ce(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = ce.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ce.each(["radio", "checkbox"], function() {
        ce.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t)
            }
        }, le.checkOn || (ce.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Et = ie.location,
        jt = {
            guid: Date.now()
        },
        At = /\?/;
    ce.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new ie.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Dt = /^(?:focusinfocus|focusoutblur)$/,
        Nt = function(e) {
            e.stopPropagation()
        };
    ce.extend(ce.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || C],
                d = ue.call(e, "type") ? e.type : e,
                h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !y(n)) {
                    for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = ce.extend(new ce.Event, n, {
                type: e,
                isSimulated: !0
            });
            ce.event.trigger(r, null, t)
        }
    }), ce.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ce.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ce.event.trigger(e, t, n, !0)
        }
    });
    var qt = /\[\]$/,
        Lt = /\r?\n/g,
        Ht = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;

    function Pt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) ce.each(e, function(e, t) {
            r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== x(e)) i(n, e);
        else
            for (t in e) Pt(n + "[" + t + "]", e[t], r, i)
    }
    ce.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Pt(n, e[n], t, i);
        return r.join("&")
    }, ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ce.prop(this, "elements");
                return e ? ce.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = ce(this).val();
                return null == n ? null : Array.isArray(n) ? ce.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Mt = /%20/g,
        Rt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:GET|HEAD)$/,
        $t = /^\/\//,
        Bt = {},
        _t = {},
        zt = "*/".concat("*"),
        Xt = C.createElement("a");

    function Ut(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(D) || [];
            if (v(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Vt(t, i, o, a) {
        var s = {},
            u = t === _t;

        function l(e) {
            var r;
            return s[e] = !0, ce.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Gt(e, t) {
        var n, r, i = ce.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ce.extend(!0, e, r), e
    }
    Xt.href = Et.href, ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
        },
        ajaxPrefilter: Ut(Bt),
        ajaxTransport: Ut(_t),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
                x = ce.Deferred(),
                b = ce.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
            for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = ie.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return ce.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ce.get(e, void 0, t, "script")
        }
    }), ce.each(["get", "post"], function(e, i) {
        ce[i] = function(e, t, n, r) {
            return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, ce.isPlainObject(e) && e))
        }
    }), ce.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), ce._evalUrl = function(e, t, n) {
        return ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                ce.globalEval(e, t, n)
            }
        })
    }, ce.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                ce(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = ce(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                ce(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ce(this).replaceWith(this.childNodes)
            }), this
        }
    }), ce.expr.pseudos.hidden = function(e) {
        return !ce.expr.pseudos.visible(e)
    }, ce.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ce.ajaxSettings.xhr = function() {
        try {
            return new ie.XMLHttpRequest
        } catch (e) {}
    };
    var Yt = {
            0: 200,
            1223: 204
        },
        Qt = ce.ajaxSettings.xhr();
    le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i) {
        var o, a;
        if (le.cors || Qt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && ie.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), ce.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ce.globalEval(e), e
            }
        }
    }), ce.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ce.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = ce("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Jt, Kt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || ce.expando + "_" + jt.guid++;
            return this[e] = !0, e
        }
    }), ce.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || ce.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0
        }), "script"
    }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
        var r, i, o
    }, ce.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, ce.expr.pseudos.animated = function(t) {
        return ce.grep(ce.timers, function(e) {
            return t === e.elem
        }).length
    }, ce.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = ce.css(e, "position"),
                c = ce(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, ce.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ce.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - ce.css(r, "marginTop", !0),
                    left: t.left - i.left - ce.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
                return e || J
            })
        }
    }), ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        ce.fn[t] = function(e) {
            return M(this, function(e, t, n) {
                var r;
                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), ce.each(["top", "left"], function(e, n) {
        ce.cssHooks[n] = Ye(le.pixelPosition, function(e, t) {
            if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t
        })
    }), ce.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        ce.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            ce.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return M(this, function(e, t, n) {
                    var r;
                    return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ce.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ce.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }
    }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        ce.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    ce.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(ae.call(arguments)))
        }).guid = e.guid = e.guid || ce.guid++, i
    }, ce.holdReady = function(e) {
        e ? ce.readyWait++ : ce.ready(!0)
    }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e) {
        var t = ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, ce.trim = function(e) {
        return null == e ? "" : (e + "").replace(en, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ce
    });
    var tn = ie.jQuery,
        nn = ie.$;
    return ce.noConflict = function(e) {
        return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
    }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});;
/* @license GPL-2.0-or-later https://git.drupalcode.org/project/once/-/raw/v1.0.1/LICENSE.md */
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once = function() {
    "use strict";
    var n = /[\11\12\14\15\40]+/,
        e = "data-once",
        t = document;

    function r(n, t, r) {
        return n[t + "Attribute"](e, r)
    }

    function o(e) {
        if ("string" != typeof e) throw new TypeError("once ID must be a string");
        if ("" === e || n.test(e)) throw new RangeError("once ID must not be empty or contain spaces");
        return '[data-once~="' + e + '"]'
    }

    function u(n) {
        if (!(n instanceof Element)) throw new TypeError("The element must be an instance of Element");
        return !0
    }

    function i(n, e) {
        void 0 === e && (e = t);
        var r = n;
        if (null === n) r = [];
        else {
            if (!n) throw new TypeError("Selector must not be empty");
            "string" != typeof n || e !== t && !u(e) ? n instanceof Element && (r = [n]) : r = e.querySelectorAll(n)
        }
        return Array.prototype.slice.call(r)
    }

    function c(n, e, t) {
        return e.filter((function(e) {
            var r = u(e) && e.matches(n);
            return r && t && t(e), r
        }))
    }

    function f(e, t) {
        var o = t.add,
            u = t.remove,
            i = [];
        r(e, "has") && r(e, "get").trim().split(n).forEach((function(n) {
            i.indexOf(n) < 0 && n !== u && i.push(n)
        })), o && i.push(o);
        var c = i.join(" ");
        r(e, "" === c ? "remove" : "set", c)
    }

    function a(n, e, t) {
        return c(":not(" + o(n) + ")", i(e, t), (function(e) {
            return f(e, {
                add: n
            })
        }))
    }
    return a.remove = function(n, e, t) {
        return c(o(n), i(e, t), (function(e) {
            return f(e, {
                remove: n
            })
        }))
    }, a.filter = function(n, e, t) {
        return c(o(n), i(e, t))
    }, a.find = function(n, e) {
        return i(n ? o(n) : "[data-once]", e)
    }, a
}();

;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function() {
    const settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
    window.drupalSettings = {};
    if (settingsElement !== null) window.drupalSettings = JSON.parse(settingsElement.textContent);
})();;
window.Drupal = {
    behaviors: {},
    locale: {}
};
(function(Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
    Drupal.throwError = function(error) {
        setTimeout(() => {
            throw error;
        }, 0);
    };
    Drupal.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || drupalSettings;
        const behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach((i) => {
            if (typeof behaviors[i].attach === 'function') try {
                behaviors[i].attach(context, settings);
            } catch (e) {
                Drupal.throwError(e);
            }
        });
    };
    Drupal.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || drupalSettings;
        trigger = trigger || 'unload';
        const behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach((i) => {
            if (typeof behaviors[i].detach === 'function') try {
                behaviors[i].detach(context, settings, trigger);
            } catch (e) {
                Drupal.throwError(e);
            }
        });
    };
    Drupal.checkPlain = function(str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return str;
    };
    Drupal.formatString = function(str, args) {
        const processedArgs = {};
        Object.keys(args || {}).forEach((key) => {
            switch (key.charAt(0)) {
                case '@':
                    processedArgs[key] = Drupal.checkPlain(args[key]);
                    break;
                case '!':
                    processedArgs[key] = args[key];
                    break;
                default:
                    processedArgs[key] = Drupal.theme('placeholder', args[key]);
                    break;
            }
        });
        return Drupal.stringReplace(str, processedArgs, null);
    };
    Drupal.stringReplace = function(str, args, keys) {
        if (str.length === 0) return str;
        if (!Array.isArray(keys)) {
            keys = Object.keys(args || {});
            keys.sort((a, b) => a.length - b.length);
        }
        if (keys.length === 0) return str;
        const key = keys.pop();
        const fragments = str.split(key);
        if (keys.length) {
            for (let i = 0; i < fragments.length; i++) fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
        }
        return fragments.join(args[key]);
    };
    Drupal.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) str = drupalTranslations.strings[options.context][str];
        if (args) str = Drupal.formatString(str, args);
        return str;
    };
    Drupal.url = function(path) {
        return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
    };
    Drupal.url.toAbsolute = function(url) {
        const urlParsingNode = document.createElement('a');
        try {
            url = decodeURIComponent(url);
        } catch (e) {}
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href;
    };
    Drupal.url.isLocal = function(url) {
        let absoluteUrl = Drupal.url.toAbsolute(url);
        let {
            protocol
        } = window.location;
        if (protocol === 'http:' && absoluteUrl.startsWith('https:')) protocol = 'https:';
        let baseUrl = `${protocol}//${window.location.host}${drupalSettings.path.baseUrl.slice(0,-1)}`;
        try {
            absoluteUrl = decodeURIComponent(absoluteUrl);
        } catch (e) {}
        try {
            baseUrl = decodeURIComponent(baseUrl);
        } catch (e) {}
        return absoluteUrl === baseUrl || absoluteUrl.startsWith(`${baseUrl}/`);
    };
    Drupal.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        const pluralDelimiter = drupalSettings.pluralDelimiter;
        const translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
        let index = 0;
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
        else {
            if (args['@count'] !== 1) index = 1;
        }
        return translations[index];
    };
    Drupal.encodePath = function(item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/');
    };
    Drupal.deprecationError = ({
        message
    }) => {
        if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) console.warn(`[Deprecation] ${message}`);
    };
    Drupal.deprecatedProperty = ({
        target,
        deprecatedProperty,
        message
    }) => {
        if (!Proxy || !Reflect) return target;
        return new Proxy(target, {
            get: (target, key, ...rest) => {
                if (key === deprecatedProperty) Drupal.deprecationError({
                    message
                });
                return Reflect.get(target, key, ...rest);
            }
        });
    };
    Drupal.theme = function(func, ...args) {
        if (func in Drupal.theme) return Drupal.theme[func](...args);
    };
    Drupal.theme.placeholder = function(str) {
        return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;
    };
    Drupal.elementIsVisible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    Drupal.elementIsHidden = function(elem) {
        return !Drupal.elementIsVisible(elem);
    };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
if (window.jQuery) jQuery.noConflict();
document.documentElement.className += ' js';
(function(Drupal, drupalSettings) {
    const domReady = (callback) => {
        const listener = () => {
            callback();
            document.removeEventListener('DOMContentLoaded', listener);
        };
        if (document.readyState !== 'loading') setTimeout(callback, 0);
        else document.addEventListener('DOMContentLoaded', listener);
    };
    domReady(() => {
        Drupal.attachBehaviors(document, drupalSettings);
    });
})(Drupal, window.drupalSettings);;
(function($, Drupal) {
    'use strict';
    Drupal.FieldGroup = Drupal.FieldGroup || {};
    Drupal.FieldGroup.Effects = Drupal.FieldGroup.Effects || {};
    Drupal.behaviors.horizontalTabs = {
        attach: function(context) {
            var width = drupalSettings.widthBreakpoint || 640;
            var mq = '(max-width: ' + width + 'px)';
            if (window.matchMedia(mq).matches) return;
            $(once('horizontal-tabs', '[data-horizontal-tabs]', context)).each(function() {
                var horizontal_tabs_clearfix = this;
                $(this).find('> [data-horizontal-tabs-panes]').each(function() {
                    var $this = $(this).addClass('horizontal-tabs-panes');
                    var focusID = $(':hidden.horizontal-tabs-active-tab', this).val();
                    var tab_focus;
                    var $details = $this.find('> details');
                    if ($details.length === 0) return;
                    var tab_list = $(horizontal_tabs_clearfix).find('> [data-horizontal-tabs-list]');
                    tab_list.removeClass('visually-hidden');
                    $details.each(function(i) {
                        var $this = $(this);
                        var summaryElement = $this.find('> summary');
                        var detailsTitle = summaryElement.first().find('.details-title');
                        if (detailsTitle.length) var summaryText = detailsTitle.find('> span:last-child').text().trim();
                        else var summaryText = summaryElement.clone().children().remove().end().text().trim() || summaryElement.find('> span:first-child').text().trim();
                        var horizontal_tab = new Drupal.horizontalTab({
                            title: summaryText,
                            details: $this
                        });
                        horizontal_tab.item.addClass('horizontal-tab-button-' + i);
                        horizontal_tab.item.attr('data-horizontalTabButton', i);
                        tab_list.append(horizontal_tab.item);
                        $this.removeClass('collapsed').attr('open', true).addClass('horizontal-tabs-pane').data('horizontalTab', horizontal_tab);
                        if (this.id === focusID) tab_focus = $this;
                    });
                    $(tab_list).find('> li:first').addClass('first');
                    $(tab_list).find('> li:last').addClass('last');
                    if (!tab_focus) {
                        var hash = window.location.hash.replace(/[=%;,\/]/g, '');
                        if (hash !== '#' && $(hash, this).length) tab_focus = $(hash, this).closest('.horizontal-tabs-pane');
                        else tab_focus = $this.find('> .horizontal-tabs-pane:first');
                    }
                    if (tab_focus.length) tab_focus.data('horizontalTab').focus();
                });
            });
        }
    };
    Drupal.horizontalTab = function(settings) {
        var self = this;
        $.extend(this, settings, Drupal.theme('horizontalTab', settings));
        this.link.attr('href', '#' + settings.details.attr('id'));
        this.link.on('click', function(e) {
            e.preventDefault();
            self.focus();
        });
        this.link.on('keydown', function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                self.focus();
                $('.horizontal-tabs-pane :input:visible:enabled:first').trigger('focus');
            }
        });
        if (this.details.drupalGetSummary) this.details.on('summaryUpdated', function() {
            self.updateSummary();
        }).trigger('summaryUpdated');
    };
    Drupal.horizontalTab.prototype = {
        focus: function() {
            this.details.removeClass('horizontal-tab-hidden').siblings('.horizontal-tabs-pane').each(function() {
                var tab = $(this).data('horizontalTab');
                tab.details.addClass('horizontal-tab-hidden');
                tab.details.hide();
                tab.item.removeClass('selected');
            }).end().show().siblings(':hidden.horizontal-tabs-active-tab').val(this.details.attr('id'));
            this.item.addClass('selected');
            $('#active-horizontal-tab').remove();
            this.link.append('<span id="active-horizontal-tab" class="visually-hidden">' + Drupal.t('(active tab)') + '</span>');
        },
        updateSummary: function() {
            this.summary.html(this.details.drupalGetSummary());
        },
        tabShow: function() {
            this.item.removeClass('horizontal-tab-hidden');
            this.item.show();
            this.item.parent().children('.horizontal-tab-button').removeClass('first').filter(':visible:first').addClass('first');
            this.details.removeClass('horizontal-tab-hidden');
            this.focus();
            return this;
        },
        tabHide: function() {
            this.item.addClass('horizontal-tab-hidden');
            this.item.hide();
            this.item.parent().children('.horizontal-tab-button').removeClass('first').filter(':visible:first').addClass('first');
            this.details.addClass('horizontal-tab-hidden');
            var $firstTab = this.details.siblings('.horizontal-tabs-pane:not(.horizontal-tab-hidden):first');
            if ($firstTab.length) $firstTab.data('horizontalTab').focus();
            else this.item.closest('.form-type-horizontal-tabs').hide();
            return this;
        }
    };
    Drupal.theme.horizontalTab = function(settings) {
        var tab = {};
        var idAttr = settings.details.attr('id');
        tab.item = $('<li class="horizontal-tab-button" tabindex="-1"></li>').append(tab.link = $('<a href="#' + idAttr + '"></a>').append(tab.title = $('<strong></strong>').text(settings.title)));
        if (settings.details.drupalGetSummary) tab.link.append(tab.summary = $('<span class="summary"></span>'));
        return tab;
    };
})(jQuery, Drupal);;
/* @license MIT https://raw.githubusercontent.com/focus-trap/tabbable/v6.2.0/LICENSE */
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self, function() {
        var n = t.tabbable,
            o = t.tabbable = {};
        e(o), o.noConflict = function() {
            return t.tabbable = n, o
        }
    }())
}(this, (function(t) {
    "use strict";
    var e = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
        n = e.join(","),
        o = "undefined" == typeof Element,
        r = o ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        i = !o && Element.prototype.getRootNode ? function(t) {
            var e;
            return null == t || null === (e = t.getRootNode) || void 0 === e ? void 0 : e.call(t)
        } : function(t) {
            return null == t ? void 0 : t.ownerDocument
        },
        a = function t(e, n) {
            var o;
            void 0 === n && (n = !0);
            var r = null == e || null === (o = e.getAttribute) || void 0 === o ? void 0 : o.call(e, "inert");
            return "" === r || "true" === r || n && e && t(e.parentNode)
        },
        l = function(t, e, o) {
            if (a(t)) return [];
            var i = Array.prototype.slice.apply(t.querySelectorAll(n));
            return e && r.call(t, n) && i.unshift(t), i = i.filter(o)
        },
        u = function t(e, o, i) {
            for (var l = [], u = Array.from(e); u.length;) {
                var d = u.shift();
                if (!a(d, !1))
                    if ("SLOT" === d.tagName) {
                        var c = d.assignedElements(),
                            f = t(c.length ? c : d.children, !0, i);
                        i.flatten ? l.push.apply(l, f) : l.push({
                            scopeParent: d,
                            candidates: f
                        })
                    } else {
                        r.call(d, n) && i.filter(d) && (o || !e.includes(d)) && l.push(d);
                        var s = d.shadowRoot || "function" == typeof i.getShadowRoot && i.getShadowRoot(d),
                            p = !a(s, !1) && (!i.shadowRootFilter || i.shadowRootFilter(d));
                        if (s && p) {
                            var h = t(!0 === s ? d.children : s.children, !0, i);
                            i.flatten ? l.push.apply(l, h) : l.push({
                                scopeParent: d,
                                candidates: h
                            })
                        } else u.unshift.apply(u, d.children)
                    }
            }
            return l
        },
        d = function(t) {
            return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
        },
        c = function(t) {
            if (!t) throw new Error("No node provided");
            return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || function(t) {
                var e, n = null == t || null === (e = t.getAttribute) || void 0 === e ? void 0 : e.call(t, "contenteditable");
                return "" === n || "true" === n
            }(t)) && !d(t) ? 0 : t.tabIndex
        },
        f = function(t, e) {
            return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
        },
        s = function(t) {
            return "INPUT" === t.tagName
        },
        p = function(t) {
            return function(t) {
                return s(t) && "radio" === t.type
            }(t) && ! function(t) {
                if (!t.name) return !0;
                var e, n = t.form || i(t),
                    o = function(t) {
                        return n.querySelectorAll('input[type="radio"][name="' + t + '"]')
                    };
                if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) e = o(window.CSS.escape(t.name));
                else try {
                    e = o(t.name)
                } catch (t) {
                    return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", t.message), !1
                }
                var r = function(t, e) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n].checked && t[n].form === e) return t[n]
                }(e, t.form);
                return !r || r === t
            }(t)
        },
        h = function(t) {
            var e = t.getBoundingClientRect(),
                n = e.width,
                o = e.height;
            return 0 === n && 0 === o
        },
        v = function(t, e) {
            var n = e.displayCheck,
                o = e.getShadowRoot;
            if ("hidden" === getComputedStyle(t).visibility) return !0;
            var a = r.call(t, "details>summary:first-of-type") ? t.parentElement : t;
            if (r.call(a, "details:not([open]) *")) return !0;
            if (n && "full" !== n && "legacy-full" !== n) {
                if ("non-zero-area" === n) return h(t)
            } else {
                if ("function" == typeof o) {
                    for (var l = t; t;) {
                        var u = t.parentElement,
                            d = i(t);
                        if (u && !u.shadowRoot && !0 === o(u)) return h(t);
                        t = t.assignedSlot ? t.assignedSlot : u || d === t.ownerDocument ? u : d.host
                    }
                    t = l
                }
                if (function(t) {
                        var e, n, o, r, a = t && i(t),
                            l = null === (e = a) || void 0 === e ? void 0 : e.host,
                            u = !1;
                        if (a && a !== t)
                            for (u = !!(null !== (n = l) && void 0 !== n && null !== (o = n.ownerDocument) && void 0 !== o && o.contains(l) || null != t && null !== (r = t.ownerDocument) && void 0 !== r && r.contains(t)); !u && l;) {
                                var d, c, f;
                                u = !(null === (c = l = null === (d = a = i(l)) || void 0 === d ? void 0 : d.host) || void 0 === c || null === (f = c.ownerDocument) || void 0 === f || !f.contains(l))
                            }
                        return u
                    }(t)) return !t.getClientRects().length;
                if ("legacy-full" !== n) return !0
            }
            return !1
        },
        b = function(t, e) {
            return !(e.disabled || a(e) || function(t) {
                return s(t) && "hidden" === t.type
            }(e) || v(e, t) || function(t) {
                return "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some((function(t) {
                    return "SUMMARY" === t.tagName
                }))
            }(e) || function(t) {
                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
                    for (var e = t.parentElement; e;) {
                        if ("FIELDSET" === e.tagName && e.disabled) {
                            for (var n = 0; n < e.children.length; n++) {
                                var o = e.children.item(n);
                                if ("LEGEND" === o.tagName) return !!r.call(e, "fieldset[disabled] *") || !o.contains(t)
                            }
                            return !0
                        }
                        e = e.parentElement
                    }
                return !1
            }(e))
        },
        m = function(t, e) {
            return !(p(e) || c(e) < 0 || !b(t, e))
        },
        g = function(t) {
            var e = parseInt(t.getAttribute("tabindex"), 10);
            return !!(isNaN(e) || e >= 0)
        },
        y = function t(e) {
            var n = [],
                o = [];
            return e.forEach((function(e, r) {
                var i = !!e.scopeParent,
                    a = i ? e.scopeParent : e,
                    l = function(t, e) {
                        var n = c(t);
                        return n < 0 && e && !d(t) ? 0 : n
                    }(a, i),
                    u = i ? t(e.candidates) : a;
                0 === l ? i ? n.push.apply(n, u) : n.push(a) : o.push({
                    documentOrder: r,
                    tabIndex: l,
                    item: e,
                    isScope: i,
                    content: u
                })
            })), o.sort(f).reduce((function(t, e) {
                return e.isScope ? t.push.apply(t, e.content) : t.push(e.content), t
            }), []).concat(n)
        },
        w = e.concat("iframe").join(",");
    t.focusable = function(t, e) {
        return (e = e || {}).getShadowRoot ? u([t], e.includeContainer, {
            filter: b.bind(null, e),
            flatten: !0,
            getShadowRoot: e.getShadowRoot
        }) : l(t, e.includeContainer, b.bind(null, e))
    }, t.getTabIndex = c, t.isFocusable = function(t, e) {
        if (e = e || {}, !t) throw new Error("No node provided");
        return !1 !== r.call(t, w) && b(e, t)
    }, t.isTabbable = function(t, e) {
        if (e = e || {}, !t) throw new Error("No node provided");
        return !1 !== r.call(t, n) && m(e, t)
    }, t.tabbable = function(t, e) {
        var n;
        return n = (e = e || {}).getShadowRoot ? u([t], e.includeContainer, {
            filter: m.bind(null, e),
            flatten: !1,
            getShadowRoot: e.getShadowRoot,
            shadowRootFilter: g
        }) : l(t, e.includeContainer, m.bind(null, e)), y(n)
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));

;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($, Drupal, drupalSettings) {
    'use strict';
    Drupal.extlink = Drupal.extlink || {};
    Drupal.extlink.attach = function(context, drupalSettings) {
        if (typeof drupalSettings.data === 'undefined' || !drupalSettings.data.hasOwnProperty('extlink')) return;
        var extIconPlacement = 'append';
        if (drupalSettings.data.extlink.extIconPlacement && drupalSettings.data.extlink.extIconPlacement != '0') extIconPlacement = drupalSettings.data.extlink.extIconPlacement;
        var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
        var host = window.location.host.replace(pattern, '$2$3$6');
        var subdomain = window.location.host.replace(host, '');
        var subdomains;
        if (drupalSettings.data.extlink.extSubdomains) subdomains = '([^/]*\\.)?';
        else if (subdomain === 'www.' || subdomain === '') subdomains = '(www\\.)?';
        else subdomains = subdomain.replace('.', '\\.');
        var whitelistedDomains = false;
        if (drupalSettings.data.extlink.whitelistedDomains) {
            whitelistedDomains = [];
            for (var i = 0; i < drupalSettings.data.extlink.whitelistedDomains.length; i++) whitelistedDomains.push(new RegExp('^https?:\\/\\/' + drupalSettings.data.extlink.whitelistedDomains[i].replace(/(\r\n|\n|\r)/gm, '') + '.*$', 'i'));
        }
        var internal_link = new RegExp('^https?://([^@]*@)?' + subdomains + host, 'i');
        var extInclude = false;
        if (drupalSettings.data.extlink.extInclude) extInclude = new RegExp(drupalSettings.data.extlink.extInclude.replace(/\\/, '\\'), 'i');
        var extExclude = false;
        if (drupalSettings.data.extlink.extExclude) extExclude = new RegExp(drupalSettings.data.extlink.extExclude.replace(/\\/, '\\'), 'i');
        var extCssExclude = false;
        if (drupalSettings.data.extlink.extCssExclude) extCssExclude = drupalSettings.data.extlink.extCssExclude;
        var extCssExplicit = false;
        if (drupalSettings.data.extlink.extCssExplicit) extCssExplicit = drupalSettings.data.extlink.extCssExplicit;
        var external_links = [];
        var mailto_links = [];
        $('a:not([data-extlink]), area:not([data-extlink])', context).each(function(el) {
            try {
                var url = '';
                if (typeof this.href == 'string') url = this.href.toLowerCase();
                else {
                    if (typeof this.href == 'object') url = this.href.baseVal;
                }
                if (url.indexOf('http') === 0 && ((!internal_link.test(url) && !(extExclude && extExclude.test(url))) || (extInclude && extInclude.test(url))) && !(extCssExclude && $(this).is(extCssExclude)) && !(extCssExclude && $(this).parents(extCssExclude).length > 0) && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
                    var match = false;
                    if (whitelistedDomains)
                        for (var i = 0; i < whitelistedDomains.length; i++)
                            if (whitelistedDomains[i].test(url)) {
                                match = true;
                                break;
                            }
                    if (!match) external_links.push(this);
                } else {
                    if (this.tagName !== 'AREA' && url.indexOf('mailto:') === 0 && !(extCssExclude && $(this).parents(extCssExclude).length > 0) && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) mailto_links.push(this);
                }
            } catch (error) {
                return false;
            }
        });
        if (drupalSettings.data.extlink.extClass !== '0' && drupalSettings.data.extlink.extClass !== '') Drupal.extlink.applyClassAndSpan(external_links, drupalSettings.data.extlink.extClass, extIconPlacement);
        if (drupalSettings.data.extlink.mailtoClass !== '0' && drupalSettings.data.extlink.mailtoClass !== '') Drupal.extlink.applyClassAndSpan(mailto_links, drupalSettings.data.extlink.mailtoClass, extIconPlacement);
        if (drupalSettings.data.extlink.extTarget) {
            $(external_links).filter(function() {
                return !(drupalSettings.data.extlink.extTargetNoOverride && $(this).is('a[target]'));
            }).attr({
                target: '_blank'
            });
            $(external_links).attr('rel', function(i, val) {
                if (val === null || typeof val === 'undefined') return 'noopener';
                if (val.indexOf('noopener') > -1)
                    if (val.indexOf('noopener') === -1) return val + ' noopener';
                    else return val;
                else return val + ' noopener';
            });
        }
        if (drupalSettings.data.extlink.extNofollow) $(external_links).attr('rel', function(i, val) {
            if (val === null || typeof val === 'undefined') return 'nofollow';
            var target = 'nofollow';
            if (drupalSettings.data.extlink.extFollowNoOverride) target = 'follow';
            if (val.indexOf(target) === -1) return val + ' nofollow';
            return val;
        });
        if (drupalSettings.data.extlink.extNoreferrer) $(external_links).attr('rel', function(i, val) {
            if (val === null || typeof val === 'undefined') return 'noreferrer';
            if (val.indexOf('noreferrer') === -1) return val + ' noreferrer';
            return val;
        });
        Drupal.extlink = Drupal.extlink || {};
        Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function() {
            if (drupalSettings.data.extlink.extAlert) return confirm(drupalSettings.data.extlink.extAlertText);
        };
        $(external_links).off("click.extlink");
        $(external_links).on("click.extlink", function(e) {
            return Drupal.extlink.popupClickHandler(e, this);
        });
    };
    Drupal.extlink.applyClassAndSpan = function(links, class_name, icon_placement) {
        var $links_to_process;
        if (drupalSettings.data.extlink.extImgClass) $links_to_process = $(links);
        else {
            var links_with_images = $(links).find('img, svg').parents('a');
            $links_to_process = $(links).not(links_with_images);
        }
        if (class_name !== '0') $links_to_process.addClass(class_name);
        $links_to_process.attr('data-extlink', '');
        var i;
        var length = $links_to_process.length;
        for (i = 0; i < length; i++) {
            var $link = $($links_to_process[i]);
            if (drupalSettings.data.extlink.extUseFontAwesome)
                if (class_name === drupalSettings.data.extlink.mailtoClass) $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaMailtoClasses + '" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '"></span></span>');
                else $link[icon_placement]('<span class="fa-' + class_name + ' extlink"><span class="' + drupalSettings.data.extlink.extFaLinkClasses + '" aria-label="' + drupalSettings.data.extlink.extLabel + '"></span></span>');
            else if (class_name === drupalSettings.data.extlink.mailtoClass) $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.mailtoLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 70 20"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.mailtoLabel + '</title><path d="M56 14H8c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h48c1.1 0 2-0.9 2-2V16C58 14.9 57.1 14 56 14zM50.5 18L32 33.4 13.5 18H50.5zM10 46V20.3l20.7 17.3C31.1 37.8 31.5 38 32 38s0.9-0.2 1.3-0.5L54 20.3V46H10z"/></svg>');
            else $link[icon_placement]('<svg focusable="false" class="' + class_name + '" role="img" aria-label="' + drupalSettings.data.extlink.extLabel + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>' + drupalSettings.data.extlink.extLabel + '</title><path d="M48 26c-1.1 0-2 0.9-2 2v26H10V18h26c1.1 0 2-0.9 2-2s-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v40c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2V28C50 26.9 49.1 26 48 26z"/><path d="M56 6H44c-1.1 0-2 0.9-2 2s0.9 2 2 2h7.2L30.6 30.6c-0.8 0.8-0.8 2 0 2.8C31 33.8 31.5 34 32 34s1-0.2 1.4-0.6L54 12.8V20c0 1.1 0.9 2 2 2s2-0.9 2-2V8C58 6.9 57.1 6 56 6z"/></svg>');
        }
    };
    Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
    Drupal.behaviors.extlink.attach = function(context, drupalSettings) {
        if (typeof extlinkAttach === 'function') extlinkAttach(context);
        else Drupal.extlink.attach(context, drupalSettings);
    };
})(jQuery, Drupal, drupalSettings);;
Drupal.debounce = function(func, wait, immediate) {
    let timeout;
    let result;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) result = func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(context, args);
        return result;
    };
};;
(function($, Drupal, debounce) {
    $.fn.drupalGetSummary = function() {
        const callback = this.data('summaryCallback');
        if (!this[0] || !callback) return '';
        const result = callback(this[0]);
        return result ? result.trim() : '';
    };
    $.fn.drupalSetSummary = function(callback) {
        const self = this;
        if (typeof callback !== 'function') {
            const val = callback;
            callback = function() {
                return val;
            };
        }
        return (this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', () => {
            self.trigger('summaryUpdated');
        }).trigger('summaryUpdated'));
    };
    Drupal.behaviors.formSingleSubmit = {
        attach() {
            function onFormSubmit(e) {
                const $form = $(e.currentTarget);
                const formValues = new URLSearchParams(new FormData(e.target)).toString();
                const previousValues = $form.attr('data-drupal-form-submit-last');
                if (previousValues === formValues) e.preventDefault();
                else $form.attr('data-drupal-form-submit-last', formValues);
            }
            $(once('form-single-submit', 'body')).on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
        }
    };

    function triggerFormUpdated(element) {
        $(element).trigger('formUpdated');
    }

    function fieldsList(form) {
        return [].map.call(form.querySelectorAll('[name][id]'), (el) => el.id);
    }
    Drupal.behaviors.formUpdated = {
        attach(context) {
            const $context = $(context);
            const contextIsForm = context.tagName === 'FORM';
            const $forms = $(once('form-updated', contextIsForm ? $context : $context.find('form')));
            let formFields;
            if ($forms.length) $.makeArray($forms).forEach((form) => {
                const events = 'change.formUpdated input.formUpdated ';
                const eventHandler = debounce((event) => {
                    triggerFormUpdated(event.target);
                }, 300);
                formFields = fieldsList(form).join(',');
                form.setAttribute('data-drupal-form-fields', formFields);
                $(form).on(events, eventHandler);
            });
            if (contextIsForm) {
                formFields = fieldsList(context).join(',');
                const currentFields = $(context).attr('data-drupal-form-fields');
                if (formFields !== currentFields) triggerFormUpdated(context);
            }
        },
        detach(context, settings, trigger) {
            const $context = $(context);
            const contextIsForm = context.tagName === 'FORM';
            if (trigger === 'unload') once.remove('form-updated', contextIsForm ? $context : $context.find('form')).forEach((form) => {
                form.removeAttribute('data-drupal-form-fields');
                $(form).off('.formUpdated');
            });
        }
    };
    Drupal.behaviors.fillUserInfoFromBrowser = {
        attach(context, settings) {
            const userInfo = ['name', 'mail', 'homepage'];
            const $forms = $(once('user-info-from-browser', '[data-user-info-from-browser]'));
            if ($forms.length) userInfo.forEach((info) => {
                const $element = $forms.find(`[name=${info}]`);
                const browserData = localStorage.getItem(`Drupal.visitor.${info}`);
                if (!$element.length) return;
                const emptyValue = $element[0].value === '';
                const defaultValue = $element.attr('data-drupal-default-value') === $element[0].value;
                if (browserData && (emptyValue || defaultValue)) $element.each(function(index, item) {
                    item.value = browserData;
                });
            });
            $forms.on('submit', () => {
                userInfo.forEach((info) => {
                    const $element = $forms.find(`[name=${info}]`);
                    if ($element.length) localStorage.setItem(`Drupal.visitor.${info}`, $element[0].value);
                });
            });
        }
    };
    const handleFragmentLinkClickOrHashChange = (e) => {
        let url;
        if (e.type === 'click') url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
        else url = window.location;
        const hash = url.hash.substring(1);
        if (hash) {
            const $target = $(`#${hash}`);
            $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
            setTimeout(() => $target.trigger('focus'), 300);
        }
    };
    const debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
    $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
    $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
(($, Drupal) => {
    function DetailsSummarizedContent(node) {
        this.$node = $(node);
        this.setupSummary();
    }
    $.extend(DetailsSummarizedContent, {
        instances: []
    });
    $.extend(DetailsSummarizedContent.prototype, {
        setupSummary() {
            this.$detailsSummarizedContentWrapper = $(Drupal.theme('detailsSummarizedContentWrapper'));
            this.$node.on('summaryUpdated', this.onSummaryUpdated.bind(this)).trigger('summaryUpdated').find('> summary').append(this.$detailsSummarizedContentWrapper);
        },
        onSummaryUpdated() {
            const text = this.$node.drupalGetSummary();
            this.$detailsSummarizedContentWrapper.html(Drupal.theme('detailsSummarizedContentText', text));
        }
    });
    Drupal.behaviors.detailsSummary = {
        attach(context) {
            DetailsSummarizedContent.instances = DetailsSummarizedContent.instances.concat(once('details', 'details', context).map((details) => new DetailsSummarizedContent(details)));
        }
    };
    Drupal.DetailsSummarizedContent = DetailsSummarizedContent;
    Drupal.theme.detailsSummarizedContentWrapper = () => `<span class="summary"></span>`;
    Drupal.theme.detailsSummarizedContentText = (text) => text ? ` (${text})` : '';
})(jQuery, Drupal);;
(function($, Drupal) {
    Drupal.behaviors.detailsAria = {
        attach() {
            $(once('detailsAria', 'body')).on('click.detailsAria', 'summary', (event) => {
                const $summary = $(event.currentTarget);
                const open = $(event.currentTarget.parentNode).attr('open') === 'open' ? 'false' : 'true';
                $summary.attr({
                    'aria-expanded': open
                });
            });
        }
    };
})(jQuery, Drupal);;
(function($) {
    const handleFragmentLinkClickOrHashChange = (e, $target) => {
        $target.parents('details').not('[open]').find('> summary').trigger('click');
    };
    $('body').on('formFragmentLinkClickOrHashChange.details', handleFragmentLinkClickOrHashChange);
    window.addEventListener('invalid', (event) => {
        if (event.target.matches('details input[required]')) handleFragmentLinkClickOrHashChange(event, $(event.target));
    }, {
        capture: true
    });
})(jQuery);;
(function($, Drupal, drupalSettings) {
    Drupal.behaviors.ViewsAjaxView = {};
    Drupal.behaviors.ViewsAjaxView.attach = function(context, settings) {
        if (settings && settings.views && settings.views.ajaxViews) {
            const {
                views: {
                    ajaxViews
                }
            } = settings;
            Object.keys(ajaxViews || {}).forEach((i) => {
                Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
            });
        }
    };
    Drupal.behaviors.ViewsAjaxView.detach = (context, settings, trigger) => {
        if (trigger === 'unload')
            if (settings && settings.views && settings.views.ajaxViews) {
                const {
                    views: {
                        ajaxViews
                    }
                } = settings;
                Object.keys(ajaxViews || {}).forEach((i) => {
                    const selector = `.js-view-dom-id-${ajaxViews[i].view_dom_id}`;
                    if ($(selector, context).length) {
                        delete Drupal.views.instances[i];
                        delete settings.views.ajaxViews[i];
                    }
                });
            }
    };
    Drupal.views = {};
    Drupal.views.instances = {};
    Drupal.views.ajaxView = function(settings) {
        const selector = `.js-view-dom-id-${settings.view_dom_id}`;
        this.$view = $(selector);
        let ajaxPath = drupalSettings.views.ajax_path;
        if (ajaxPath.constructor.toString().includes('Array')) ajaxPath = ajaxPath[0];
        let queryString = window.location.search || '';
        if (queryString !== '') {
            queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
            if (queryString !== '') queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
        }
        this.element_settings = {
            url: ajaxPath + queryString,
            submit: settings,
            httpMethod: 'GET',
            setClick: true,
            event: 'click',
            selector,
            progress: {
                type: 'fullscreen'
            }
        };
        this.settings = settings;
        this.$exposed_form = $(`form#views-exposed-form-${settings.view_name.replace(/_/g,'-')}-${settings.view_display_id.replace(/_/g,'-')}`);
        once('exposed-form', this.$exposed_form).forEach(this.attachExposedFormAjax.bind(this));
        once('ajax-pager', this.$view.filter(this.filterNestedViews.bind(this))).forEach(this.attachPagerAjax.bind(this));
        const selfSettings = $.extend({}, this.element_settings, {
            event: 'RefreshView',
            base: this.selector,
            httpMethod: 'GET',
            element: this.$view.get(0)
        });
        this.refreshViewAjax = Drupal.ajax(selfSettings);
    };
    Drupal.views.ajaxView.prototype.attachExposedFormAjax = function() {
        const that = this;
        this.exposedFormAjax = [];
        $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function(index) {
            const selfSettings = $.extend({}, that.element_settings, {
                base: $(this).attr('id'),
                element: this
            });
            that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
        });
    };
    Drupal.views.ajaxView.prototype.filterNestedViews = function() {
        return !this.$view.parents('.view').length;
    };
    Drupal.views.ajaxView.prototype.attachPagerAjax = function() {
        this.$view.find('.js-pager__items a, th.views-field a, .attachment .views-summary a').each(this.attachPagerLinkAjax.bind(this));
    };
    Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function(id, link) {
        const $link = $(link);
        const viewData = {};
        const href = $link.attr('data-parameters');
        $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));
        const selfSettings = $.extend({}, this.element_settings, {
            submit: viewData,
            base: false,
            element: link,
            httpMethod: 'GET'
        });
        this.pagerAjax = Drupal.ajax(selfSettings);
    };
    if (Drupal.AjaxCommands) Drupal.AjaxCommands.prototype.viewsScrollTop = function(ajax, response) {
        Drupal.AjaxCommands.prototype.scrollTop(ajax, response);
    };
})(jQuery, Drupal, drupalSettings);;
! function() {
    var e, t, n, i, o, a, r = {
            1311: function(e, t, n) {
                "use strict";
                n(8449);
                var i = jQuery;
                t.Z = function() {
                    i("[class*=linelip]").map((function(e, t) {
                        var n = i(t).attr("class").split("-"),
                            o = Number(n[n.length - 1]) || "auto";
                        return i(t).data("linelip") && i(t).attr("style", ""), $clamp(t, {
                            clamp: o
                        }), i(t).data("linelip", !0), e;
                    }));
                };
            },
            748: function() {
                ! function(e, t) {
                    e(".contact-message").length && (t.yusen_contact_us_form = t.yusen_contact_us_form || {}, t.behaviors.formErrorCommon = {
                        attach: function() {
                            t.yusen_contact_us_form.isError();
                        }
                    }, t.yusen_contact_us_form.isError = function() {
                        e(".form-item--error-message").length ? e(".all-error-message").removeClass("hide") : e(".all-error-message").addClass("hide");
                    });
                }(jQuery, Drupal);
            },
            8913: function() {
                var e = Drupal.t("Back job search page");
                ! function(t, n) {
                    t(".page-node-type-find-a-job").length && (n.behaviors.yusenLogisticsFindAJobDetail = {
                        attach: function(n) {
                            ! function(n) {
                                var i = document.referrer,
                                    o = i.split("?")[0].includes("/about-us/careers/find-a-job") ? i : "".concat(window.location.origin).concat(drupalSettings.path.baseUrl, "find-a-job"),
                                    a = t(".back-to-previous-btn").length > 0;
                                if (o && !a) {
                                    var r = t(".block-system-breadcrumb-block", n),
                                        s = t('<div class="back-to-previous-btn"><a href=\''.concat(o, "'>").concat(e, "</a></div>"));
                                    r.append(s);
                                }
                            }(n);
                        }
                    });
                }(jQuery, Drupal);
            },
            4478: function() {
                ! function(e, t) {
                    e(".page-find-a-job-hr").length && (t.behaviors.yusenLogisticsFindAJobHR = {
                        attach: function(e) {
                            var n = t.behaviors.yusenLogisticsFindAJobHR;
                            n.handleFiltersToggle(e), n.pagerHandler(e);
                        },
                        handleFiltersToggle: function() {
                            e(".page-find-a-job-hr").find(".layout__region .form--inline").find("fieldset").each((function() {
                                var t = e(this),
                                    n = t.find("legend");
                                n.length && n.click((function() {
                                    e(this).toggleClass("expanded"), t.find(".fieldset-wrapper").slideToggle();
                                }));
                            }));
                        },
                        pagerHandler: function() {
                            e(".item-per-page .selector-input-val").text(e(".form-item-items-per-page select").val()), e(document).on("ajaxComplete", (function() {
                                e("html, body").animate({
                                    scrollTop: 0
                                }, 0);
                            }));
                        }
                    });
                }(jQuery, Drupal);
            },
            5385: function() {
                ! function(e, t, n) {
                    if (e(".find-an-office-results").length) {
                        var i = function() {
                                var t = e(".find-an-office-regions"),
                                    n = e('fieldset[data-drupal-selector="edit-field-office-country"]');
                                t.append(n);
                            },
                            o = function(t) {
                                var n = e('fieldset[data-drupal-selector="edit-field-office-country"]'),
                                    o = n.find(".fieldset-wrapper .form-checkboxes.bef-checkboxes > .form-item"),
                                    a = e(t),
                                    r = e(t).children("input.form-radio").val();
                                o.each((function(t, n) {
                                    var i = e(n).children("input.form-checkbox").data("regionId");
                                    Number(i) !== Number(r) ? (e(n).hide(), e(n).removeClass("active"), e(n).children("input.form-checkbox").prop("checked", "").removeAttr("checked")) : (e(n).show(), e(n).addClass("active"));
                                })), n.find(".fieldset-wrapper .form-checkboxes.bef-checkboxes > .form-item.active").length <= 1 ? (a.parent(".form-radios").children(".form-item").removeClass("active"), n.removeClass("active")) : (a.addClass("active").siblings().removeClass("active"), n.addClass("active"), a.append(n)), i();
                            };
                        e(window).on("resize", (function() {
                            e('fieldset[data-drupal-selector="edit-field-office-region"] > .fieldset-wrapper .fieldgroup.form-radios > .form-radios > .form-item > input.form-radio[checked]:not([value="All"])').parent(".form-item"), i();
                        })), t.behaviors.yusenFindAnOffice = {
                            attach: function(i) {
                                var a = e('fieldset[data-drupal-selector="edit-field-office-region"] > .fieldset-wrapper .fieldgroup.form-radios > .form-radios > .form-item > input.form-radio[checked]:not([value="All"])', i).parent(".form-item");
                                ! function(t) {
                                    e('fieldset[data-drupal-selector="edit-field-office-region"] .form-item.form-item-field-office-region', t).each((function(t, i) {
                                        e(n("findAnOfficeRegion", i)).click((function(t) {
                                            t.preventDefault(), e(this).children("input").prop("checked") ? (e(this).children("input").prop("checked", ""), e(this).siblings().children("input").prop("checked", ""), e(this).siblings(":first").children("input:radio").click()) : (e(this).children("input").prop("checked", "checked"), e(this).siblings().children("input").prop("checked", ""), o(e(this)));
                                        }));
                                    }));
                                }(i), o(a), t.AjaxCommands.prototype.viewsScrollTop = function() {};
                            }
                        };
                    }
                }(jQuery, Drupal, once);
            },
            6613: function(e, t, n) {
                "use strict";
                n.r(t);
                var i = n(3609),
                    o = n.n(i),
                    a = n(5030);

                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                    }
                }
                var s = new(function() {
                    function e(t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.headerClass = t, this.isHref = !0, this.isMobile = !1, this.scrollTop = 0, this.menuClass = ".main-navigation-li", this.submenuClass = ".main-navigation-submenu", this.dropdownClass = ".dropdown-toggle", this.searchIconClass = ".search-block-form", this.menuFoldIconClass = ".menu-fold-icon", this.regionAction = ".region-header-actions", this.footerClass = "footer", this.headerWidthDesktop = 1105, this.breakpointsLg = 1440, this.headerBigLogoWidth = 184.32, this.mdWidth = 991, this.scrollStart = 200, this.scrollPosition = 0, this.init();
                    }
                    var t, n;
                    return t = e, (n = [{
                        key: "init",
                        value: function() {
                            this.judgeBreakpoints(), this.eventsBind(), this.renderSvgWithoutIE(), this.calculateMaincontentSize();
                        }
                    }, {
                        key: "renderSvgWithoutIE",
                        value: function() {
                            if (!a.ZP.isIEFunc()) {
                                var e = o()("#block-header-logo").find("img").attr("src"),
                                    t = o()("#block-header-logo").find("img").parent();
                                o()("#block-header-logo").find("img").remove(), t.append('<object data="'.concat(e, '" typeof="foaf:Image"></object>'));
                            }
                        }
                    }, {
                        key: "showOverlay",
                        value: function() {
                            this.scrollPosition = o()(document).scrollTop(), o()("body").addClass("show-overlay");
                        }
                    }, {
                        key: "removeOverlay",
                        value: function() {
                            o()("body").removeClass("show-overlay"), window.scrollTo(0, this.scrollPosition);
                        }
                    }, {
                        key: "calculateMaincontentSize",
                        value: function() {
                            var e = this,
                                t = o()(this.footerClass).outerHeight(),
                                n = o()(window).outerHeight() - t - 19;
                            o()(".page-container").css("minHeight", n), o()(window).on("load resize", (function() {
                                e.resetCountrySwitcherHeight(), o()(".page-container").css("paddingTop", o()(e.headerClass).outerHeight());
                            }));
                        }
                    }, {
                        key: "judgeBreakpoints",
                        value: function() {
                            o()(window).outerWidth() <= this.mdWidth ? (this.isMobile = !0, o()(this.regionAction).addClass("expand")) : (this.isMobile = !1, o()(this.regionAction).removeClass("expand"));
                        }
                    }, {
                        key: "eventsBind",
                        value: function() {
                            this.clickDocument(), this.handleDropdownEvents(), this.isMobile ? (this.handleMenuEvents(), this.handleMenuFoldIconEvents()) : (this.handleSearchIocnEvents(), this.handleScrollEvents());
                        }
                    }, {
                        key: "clickDocument",
                        value: function() {
                            var e = this;
                            o()(document).on("click", (function(t) {
                                if (e.hasHref(t.target), e.hasHref) {
                                    var n = o()(".dropdown-menu");
                                    n.is(t.target) || 0 !== n.has(t.target).length || e.resetStatus();
                                }
                            }));
                        }
                    }, {
                        key: "handleMenuEvents",
                        value: function() {
                            var e = this;
                            o()(e.menuClass).off("click").on("click", (function(t) {
                                t.stopPropagation();
                                var n = o()(window).outerWidth(),
                                    i = .11 * n;
                                if (n - t.pageX < i) return o()(this).siblings().find(".field--name-link").removeClass("flip"), o()(this).find(e.submenuClass).find(".field--name-link").removeClass("flip"), o()(this).find(".field--name-link").first().toggleClass("flip"), o()(this).siblings().find(e.submenuClass).slideUp(), o()(this).find(e.submenuClass).each((function(e) {
                                    e > 0 && o()(this).slideUp();
                                })), o()(this).find(e.submenuClass).first().slideToggle(), !1;
                            }));
                        }
                    }, {
                        key: "handleMenuFoldIconEvents",
                        value: function() {
                            var e = this,
                                t = o()(".dropdown-menu");
                            o()(this.menuFoldIconClass).off("click").on("click", (function() {
                                t.hasClass("show") && !t.hasClass("show right") || (o()(this).toggleClass("show"), o()(".header-content").toggleClass("show"), o()(".header-content-container").toggleClass("show"), o()(".header-content").hasClass("show") ? e.showOverlay() : e.removeOverlay());
                            }));
                        }
                    }, {
                        key: "handleTrankingBackEvents",
                        value: function() {
                            var e = this;
                            o()(e.dropdownClass).each((function() {
                                o()(this).hasClass("show") && o()(this).hasClass("left") && o()(this).parent().find("p.mobile").off("click").on("click", (function() {
                                    e.resetDropdown();
                                }));
                            }));
                        }
                    }, {
                        key: "handleDropdownEvents",
                        value: function() {
                            var e = this;
                            o()(this.headerClass).off("click").on("click", e.dropdownClass, (function(t) {
                                var n = window.innerHeight - o()(".header-top").height();
                                t.stopPropagation();
                                var i = o()(this).attr("data-direction");
                                o()(this).parent().children().hasClass("show") ? (o()(this).parent().children().removeClass("show").addClass("hide"), o()(".header-content-container").removeClass("show-overlay")) : (e.resetStatus(), o()(this).parent().children().removeClass("hide").addClass("show"), e.isMobile && (o()(this).parent(".country-switcher").children(".dropdown-menu").height("".concat(n, "px")), o()(".header-content-container").addClass("show-overlay")), "row" === i && (o()(this).parent().children().removeClass("right").addClass("left"), e.handleTrankingBackEvents()));
                            }));
                        }
                    }, {
                        key: "handleScrollEvents",
                        value: function() {
                            if (this.isMobile) o()(this.headerClass).removeClass("scrollDown");
                            else {
                                if (o()(this.headerClass).length) {
                                    var e = this,
                                        t = o()(window).scrollTop();
                                    t > e.scrollTop && t > e.scrollStart ? o()(this.headerClass).parent().addClass("scrollDown") : o()(this.headerClass).parent().removeClass("scrollDown"), e.scrollTop = t;
                                }
                            }
                        }
                    }, {
                        key: "handleSearchIocnEvents",
                        value: function() {
                            var e = this;
                            o()(e.searchIconClass).off("click").on("click", (function(t) {
                                var n = o()(e.regionAction).hasClass("expand"),
                                    i = o()(t.target).hasClass("form-search"),
                                    a = o()(t.target).hasClass("icon-box-icon");
                                if (o()(e.regionAction).addClass("expand"), i || e.searchFormAnimation(), a && !n || !a && n) return !1;
                            }));
                        }
                    }, {
                        key: "searchFormAnimation",
                        value: function() {
                            var e = o()(this.regionAction).outerWidth(),
                                t = o()(".language-switcher-language-url"),
                                n = o()(".block-yusen-country-switcher-block"),
                                i = 0,
                                a = 0,
                                r = 0,
                                s = 0;
                            n.length && (a = n.width()), t.length && (i = t.width()), (r = e - i - a - 30) < 372 && (s = 372 - r, r = 372, n.length && t.length ? t.css("marginRight", "".concat(s, "px")) : n && n.css("marginRight", "".concat(s, "px"))), o()(".region-header-actions.expand .icon-container.block-search .icon-box").width(r);
                        }
                    }, {
                        key: "resetStatus",
                        value: function() {
                            this.resetDropdown(), this.resetSearchIcon(), this.isMobile && this.resetMenuStatus(), o()(".header-content-container").removeClass("show-overlay");
                        }
                    }, {
                        key: "resetDropdown",
                        value: function() {
                            var e = null;
                            o()(".dropdown-menu").hasClass("show left") && (e = "row"), "row" === e ? o()(this.dropdownClass).parent().parent().children().children().removeClass("left").addClass("right") : o()(this.dropdownClass).parent().parent().children().children().removeClass("show").addClass("hide");
                        }
                    }, {
                        key: "resetSearchIcon",
                        value: function() {
                            if (!this.isMobile) {
                                o()(this.regionAction).removeClass("expand"), o()(".region-header-actions .icon-container.block-search .icon-box").css("width", "30px");
                                var e = o()(".language-switcher-language-url"),
                                    t = o()(".block-yusen-country-switcher-block");
                                e.css("marginRight", "0px"), t.css("marginRight", "0px");
                            }
                        }
                    }, {
                        key: "resetMenuStatus",
                        value: function() {
                            o()(this.dropdownClass).parent().children().removeClass("show"), o()(this.menuClass).find("a").removeClass("flip"), o()(this.submenuClass).hide();
                        }
                    }, {
                        key: "hasHref",
                        value: function(e) {
                            var t = o()(e).attr("href");
                            this.isHref = o()(e).hasClass(this.dropdownClass.substring(1)) ? t : !t;
                        }
                    }, {
                        key: "resetCountrySwitcherHeight",
                        value: function() {
                            var e = o()(".header-box .region.region-header .header-content-container"),
                                t = window.innerHeight - o()(".header-top").height();
                            window.matchMedia("(max-width: ".concat(this.mdWidth, "px)")).matches ? (e.css("height", window.innerHeight), e.find(".header-content").css("min-height", window.innerHeight), o()(".language-switcher-language-url .dropdown ul.dropdown-menu").css("height", t)) : (e.removeAttr("style"), o()(".country-switcher ul.dropdown-menu").removeAttr("style"), e.find(".header-content").css("min-height", "auto"), o()(".language-switcher-language-url .dropdown ul.dropdown-menu").removeAttr("style"));
                        }
                    }]) && r(t.prototype, n), e;
                }())(".region-header");
                t.default = s;
            },
            2287: function() {
                ! function(e, t) {
                    e(".yusen-logistics-hot-topic").length && (t.behaviors.yusenLogisticsHotTopic = {
                        attach: function(t) {
                            var n = e(".yusen-logistics-hot-topic", t);
                            n.each((function(t, n) {
                                var i = e(n).data("id");
                                sessionStorage.getItem("hide_".concat(i)) || e(n).show();
                            })), n.find(".panes-card-close").click((function() {
                                var t = e(this).parents(".yusen-logistics-hot-topic"),
                                    n = t.data("id");
                                t.hide(), sessionStorage.setItem("hide_".concat(n), !0);
                            }));
                        }
                    });
                }(jQuery, Drupal);
            },
            7152: function() {
                ! function(e, t) {
                    e(".vantage-icon-container").length && (t.yusen_vantage_icon = t.yusen_vantage_icon || {}, t.behaviors.yusenVantageIocnCommon = {
                        attach: function() {
                            t.yusen_vantage_icon.yusenVantageIconIntersectionObserver.observe(e(".vantage-icon-container")[0]), t.yusen_vantage_icon.yusenVantageIconInsertStyle();
                        }
                    }, t.yusen_vantage_icon.yusenVantageIconInsertStyle = function() {
                        e(".vantage-icon-container").hasClass("vertical-icon") ? e(".vantage-icon-container").find(".field--name-field-paragraph").children().each((function(t) {
                            t > 0 && (e(this).find(".mask").css({
                                "transition-delay": "".concat(.8 * t, "s")
                            }), e(this).find(".icon-set-content").css({
                                "transition-delay": "".concat(.8 * t + .2, "s")
                            }), e(this).find(".icon-set-item-icons").css({
                                "transition-delay": "".concat(.8 * t + .2, "s")
                            }));
                        })) : e(".vantage-icon-container").find(".field--name-field-paragraph").children().each((function(t) {
                            t > 0 && e(this).css({
                                "transition-delay": "".concat(.4 * t, "s")
                            });
                        }));
                    }, t.yusen_vantage_icon.yusenVantageIconIntersectionObserver = new IntersectionObserver((function(n) {
                        n.forEach((function(n) {
                            var i = n.target,
                                o = n.intersectionRatio,
                                a = e(i);
                            o > .3 && !a.hasClass("intersection") ? (a.addClass("intersection"), t.yusen_vantage_icon.yusenVantageIconInsertStyle()) : 0 === o && a.hasClass("intersection") && (a.removeClass("intersection"), a.find(".mask").css({
                                "transition-delay": "0s"
                            }), a.find(".icon-set-content").css({
                                "transition-delay": "0s"
                            }), a.find(".icon-set-item-icons").css({
                                "transition-delay": "0s"
                            }));
                        }));
                    }), {
                        threshold: function() {
                            for (var e = [], t = 0; t <= 1; t += .1) e.push(t);
                            return e;
                        }()
                    }), e(".vantage-icon-container").each((function() {
                        t.yusen_vantage_icon.yusenVantageIconIntersectionObserver.observe(e(this)[0]);
                    })));
                }(jQuery, Drupal);
            },
            2009: function() {
                ! function(e, t, n) {
                    t.behaviors.yusenMpegPlayer = {
                        attach: function(e) {
                            t.behaviors.yusenMpegPlayer.handlePlayerEvents(e);
                        },
                        handlePlayerEvents: function(n) {
                            var i = t.behaviors.yusenMpegPlayer;
                            e(".mpeg-player").each((function(e, t) {
                                i.renderPlayer(t, n);
                            }));
                        },
                        renderPlayer: function(t, i) {
                            var o = e(t).parents(".top-kv").data("id");
                            e(n(o, t, i)).each((function() {
                                var n = t.getAttribute("src"),
                                    i = new JSMpeg.Player(n, {
                                        canvas: t,
                                        decodeFirstFrame: !0,
                                        disableWebAssembly: !0,
                                        throttled: !1,
                                        chunkSize: 1048576,
                                        disableGl: !0,
                                        audio: !1,
                                        autoplay: !1,
                                        loop: !0,
                                        onSourceEstablished: function() {
                                            e(t).fadeIn(1500), i.play();
                                        }
                                    });
                            }));
                        }
                    };
                }(jQuery, Drupal, once);
            },
            2975: function(e, t, n) {
                "use strict";
                n.d(t, {
                    W: function() {
                        return r;
                    }
                });
                var i = n(5030),
                    o = jQuery,
                    a = function(e, t) {
                        for (var n = e.length - 1; n >= 0; n--)
                            if (t.text(e.slice(n, e.length)), t.width() >= 50) {
                                t.text("".concat(e.slice(0, n), "..."));
                                break;
                            }
                    },
                    r = function(e) {
                        var t = e.find("time").text(),
                            n = e.find(".news-list-item-date .field--name-field-date").text();
                        t && i.ZP.getTimeDiff(t) <= 14 && e.find(".new-badge").show(), n && i.ZP.getTimeDiff(n) <= 14 && e.find(".new-badge").show();
                    };
                t.Z = function() {
                    var e = o(".block-views-blocksolr-news-news-filter-list .item-list ul li");
                    e.length && e.each((function() {
                        ! function(e) {
                            var t = e.find(".btn").parent().attr("href"),
                                n = e.find("h3"),
                                r = n.text();
                            if (o(window).on("load resize", (function() {
                                    n.text(r);
                                    var e = n.height(),
                                        t = n.height(),
                                        i = null;
                                    if (t > e)
                                        for (var o = 0; o <= r.length; o++)
                                            if (n.text(r.slice(0, o)), (t = n.height()) > e) {
                                                i = r.slice(0, o - 1), a(i, n);
                                                break;
                                            }
                                })), t) {
                                var s = window.location.host,
                                    c = i.ZP.getPartUrl(t, "host");
                                "pdf" === t.substring(t.lastIndexOf(".") + 1, t.length) && n.addClass("comPdf"), s !== c && c && n.addClass("comExt");
                            }
                        }(o(this)), r(o(this));
                    }));
                };
            },
            6848: function() {
                ! function(e, t) {
                    var n = function(t) {
                        var n = e("nav.pager", t);
                        if (n.length && e(window).outerWidth() <= 991) {
                            var i = n.find("ul"),
                                o = i.children("li.is-active"),
                                a = o.prev(),
                                r = o.next();
                            0 === o.index() && r.next().addClass("show"), o.index() === i.children("li").length - 1 && r.prev().addClass("show"), a.addClass("show"), r.addClass("show");
                        }
                    };
                    e(window).on("resize", (function() {
                        n();
                    })), t.behaviors.yusenLogisticPager = {
                        attach: function(e) {
                            n(e);
                        }
                    };
                }(jQuery, Drupal);
            },
            3950: function(e, t, n) {
                "use strict";
                var i = n(3609),
                    o = n.n(i);
                t.Z = function(e, t, n) {
                    if (o()(e).length && o()(t).length && o()(n).length) {
                        var i = o()(window).scrollTop(),
                            a = o()(e).height(),
                            r = o()(e).offset().top - i,
                            s = o()(t).first().offset().top - i;
                        s <= a + r + 30 ? o()(n).css("top", "".concat(a + r + 30, "px")).show() : o()(n).css("top", "".concat(s, "px")).show();
                    }
                };
            },
            59: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Z: function() {
                        return o;
                    }
                });
                var i = jQuery;

                function o(e) {
                    var t = i(".selector-input", e);
                    t.length && t.each((function(n, o) {
                        var a = i(o),
                            r = a.find(".selector-input-options", e),
                            s = a.find("input.selector-input-val", e),
                            c = i(".form-item-items-per-page").find("select"),
                            l = a.parent(".selector-container").next("select.form-select");
                        r.length && !r.find("a").attr("href") && r.find("li").click((function() {
                            var e = i(this),
                                o = e.text(),
                                a = e.parent().parent().parent(".selector-container"),
                                s = e.index();
                            return e.parent().prev().attr("aria-label") && e.parent().prev().attr("aria-label").includes("Location") && e.text().includes("Other") && t.eq(n + 1).find(".selector-input-val").val(""), l.length ? (l.find("option").eq(s).prop("selected", !0), l.trigger("change")) : a.parent().attr("class").indexOf("item-per-page") > -1 && (c.find("option").eq(s).attr("selected", !0), c.trigger("change"), e.parent(".selector-input-options").siblings(".selector-input-val").text(o)), e.parent(".selector-input-options").siblings(".selector-input-val").val(o), a.find(".selector-input").removeClass("show"), r.children("li").each((function(e, t) {
                                i(t).html(i(t).html().replaceAll(/<span class="active">/g, "").replaceAll(/<\/span>/g, ""));
                            })), r.children().show(), !1;
                        })), s.length && (s.on("focus", (function() {
                            i(this).parent().addClass("show");
                        })), s.on("input propertychange", (function() {
                            i(this).parent().addClass("show");
                            var e = i(this).val(),
                                t = i(this).val().toLowerCase();
                            l.find("option").eq(0).prop("selected", !0), l.trigger("change"), r.children("li").each((function(n, o) {
                                var a = i(o),
                                    r = a.children("a").length > 0 ? a.children("a") : a,
                                    s = r.text();
                                if (r.text().toLowerCase().includes(t)) {
                                    var c = new RegExp(e, "gi"),
                                        l = s.replace(c, "<span class='active'>$&</span>");
                                    r.html(l), a.show();
                                } else a.hide();
                            }));
                        })));
                    }));
                }
            },
            7273: function(e, t, n) {
                "use strict";
                var i = n(59),
                    o = n(7134);
                ! function(e, t) {
                    t.behaviors.yusenSelectCommon = {
                        attach: function(e) {
                            t.behaviors.yusenSelectCommon.excuteOnce(e);
                        },
                        excuteOnce: function(e) {
                            (0, o.Z)(e), (0, i.Z)(e);
                        }
                    };
                }(jQuery, Drupal);
            },
            7134: function(e, t, n) {
                "use strict";
                n.d(t, {
                    Z: function() {
                        return o;
                    }
                });
                var i = jQuery;

                function o(e) {
                    i(".selector-input", e).each((function() {
                        var e = i(this);
                        e.off("click").click((function(e) {
                            e.target !== document.activeElement && i(this).toggleClass("show");
                        })), i(document).click((function(t) {
                            e.is(t.target) || 0 !== e.has(t.target).length || e.removeClass("show");
                        }));
                    }));
                }
            },
            1357: function(e, t, n) {
                "use strict";
                var i = n(2975);
                ! function(e, t) {
                    e(".site-search-body").length && (t.behaviors.yusenLogisticsSiteSearch = {
                        attach: function(e) {
                            var n = t.behaviors.yusenLogisticsSiteSearch;
                            n.clearButton(e), n.moveFilter(e), n.handleFiltersToggle(e), n.displayNewTag(e), n.handleTagsClickEvents(e), n.applyFilters(e), n.searchKeywords(e, n), n.pagerHandler(e);
                        },
                        handleFiltersToggle: function() {
                            e(".site-search-body").find(".layout__region .form--inline").find("fieldset").each((function() {
                                var t = e(this),
                                    n = t.find("legend");
                                n.length && n.click((function() {
                                    e(this).toggleClass("expanded"), t.find(".fieldset-wrapper").slideToggle();
                                }));
                            }));
                        },
                        moveFilter: function() {
                            var t = e(".layout__region.layout__region--top"),
                                n = e(".layout__region.layout__region--first"),
                                i = e(".view-site-search form");
                            n.length && n.remove();
                            var o = e("<div>").addClass("layout__region layout__region--first").attr("role", "region");
                            o.prepend(i.clone()), t.after(o);
                        },
                        applyFilters: function() {
                            e(".layout__region--first .form--inline fieldset .form-item").each((function() {
                                e(this).click((function(t) {
                                    t.preventDefault();
                                    var n = e(this).find("input").attr("id");
                                    e(".layout__region--second #".concat(n)).click();
                                }));
                            }));
                        },
                        clearButton: function() {
                            var t = e('.layout__region--second .form-actions .js-form-submit[name="reset"]');
                            e(".layout__region--second  .view-empty").length && t.addClass("hidden");
                        },
                        displayNewTag: function(t) {
                            var n = e(".search-result-data-item-with-img", t);
                            n.length && n.each((function() {
                                (0, i.W)(e(this));
                            }));
                        },
                        searchKeywords: function(n) {
                            var i = e('.search-result-search input[type="text"]', n);
                            i.length > 0 && e(".search-result-total .search-result-keywords").text(i.val() ? t.t('for "@keywords"', {
                                "@keywords": i.val()
                            }) : t.t("found"));
                        },
                        handleTagsClickEvents: function(t) {
                            e(".site-search-data-list .view-content .views-row").find("[data-sort]", t).each((function() {
                                e(this).click((function() {
                                    var t = e(this).attr("data-id"),
                                        n = e(this).attr("data-sort");
                                    "tags" === n && e('.layout__region--second [data-drupal-selector="edit-field-tags-'.concat(t, '"],\n              .layout__region--second [data-drupal-selector*="edit-field-tags-').concat(t, '-"]')).click(), "category" === n && e('.layout__region--second [data-drupal-selector="edit-field-content-category-'.concat(t, '"], \n  .layout__region--second [data-drupal-selector*="edit-field-content-category-').concat(t, '-"]')).click();
                                }));
                            }));
                        },
                        pagerHandler: function() {
                            e(".item-per-page .selector-input-val").text(e(".layout__region--second .search-result-search .form-item-items-per-page select").val()), e(document).on("ajaxComplete", (function() {
                                e("html, body").animate({
                                    scrollTop: 0
                                }, 0);
                            }));
                        }
                    });
                }(jQuery, Drupal);
            },
            8449: function() {
                window.$clamp = function(e, t) {
                    function n(e, t) {
                        return c.getComputedStyle || (c.getComputedStyle = function(e, t) {
                            return this.el = e, this.getPropertyValue = function(t) {
                                var n = /(\-([a-z]){1})/g;
                                return "float" == t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, (function(e, t, n) {
                                    return n.toUpperCase();
                                }))), e.currentStyle && e.currentStyle[t] ? e.currentStyle[t] : null;
                            }, this;
                        }), c.getComputedStyle(e, null).getPropertyValue(t);
                    }

                    function i(t) {
                        t = t || e.clientHeight;
                        var n = o(e);
                        return Math.max(Math.floor(t / n), 0);
                    }

                    function o(e) {
                        var t = n(e, "line-height");
                        return "normal" == t && (t = 1.2 * parseInt(n(e, "font-size"))), parseInt(t);
                    }

                    function a(t) {
                        return t.lastChild.children && 0 < t.lastChild.children.length ? a(Array.prototype.slice.call(t.children).pop()) : t.lastChild && t.lastChild.nodeValue && "" != t.lastChild.nodeValue && t.lastChild.nodeValue != l.truncationChar ? t.lastChild : (t.lastChild.parentNode.removeChild(t.lastChild), a(e));
                    }

                    function r(e, t) {
                        e.nodeValue = t + l.truncationChar;
                    }
                    t = t || {};
                    var s, c = window,
                        l = {
                            clamp: t.clamp || 2,
                            useNativeClamp: void 0 === t.useNativeClamp || t.useNativeClamp,
                            splitOnChars: t.splitOnChars || [".", "-", "–", "—", " "],
                            animate: t.animate || !1,
                            truncationChar: t.truncationChar || "…",
                            truncationHTML: t.truncationHTML
                        },
                        u = e.style,
                        d = e.innerHTML,
                        h = void 0 !== e.style.webkitLineClamp,
                        f = l.clamp,
                        g = f.indexOf && (-1 < f.indexOf("px") || -1 < f.indexOf("em"));
                    l.truncationHTML && ((s = document.createElement("span")).innerHTML = l.truncationHTML);
                    var p, v, m, b, y = l.splitOnChars.slice(0),
                        w = y[0];
                    return "auto" == f ? f = i() : g && (f = i(parseInt(f))), h && l.useNativeClamp ? (u.overflow = "hidden", u.textOverflow = "ellipsis", u.webkitBoxOrient = "vertical", u.display = "-webkit-box", u.webkitLineClamp = f, g && (u.height = l.clamp + "px")) : (b = f, (u = o(e) * b) <= e.clientHeight && (m = function t(n, i) {
                        if (i) {
                            var o = n.nodeValue.replace(l.truncationChar, "");
                            if (p || (w = 0 < y.length ? y.shift() : "", p = o.split(w)), 1 < p.length ? (v = p.pop(), r(n, p.join(w))) : p = null, s && (n.nodeValue = n.nodeValue.replace(l.truncationChar, ""), e.innerHTML = n.nodeValue + " " + s.innerHTML + l.truncationChar), p) {
                                if (e.clientHeight <= i) {
                                    if (!(0 <= y.length && "" != w)) return e.innerHTML;
                                    r(n, p.join(w) + w + v), p = null;
                                }
                            } else "" == w && (r(n, ""), n = a(e), y = l.splitOnChars.slice(0), w = y[0], v = p = null);
                            if (!l.animate) return t(n, i);
                            setTimeout((function() {
                                t(n, i);
                            }), !0 === l.animate ? 10 : l.animate);
                        }
                    }(a(e), u))), {
                        original: d,
                        clamped: m
                    };
                };
            },
            3574: function(e, t, n) {
                "use strict";
                n.r(t);
                var i = n(5030),
                    o = n(1311),
                    a = (n(2009), n(5385), n(6613)),
                    r = n(3950),
                    s = n(2975);
                n(7273), n(1357), n(748), n(7152), n(6848), n(2287), n(4478), n(8913), n.p = "/themes/custom/yusen/dist/",
                    function(e, t, c) {
                        function l() {
                            a.default.handleScrollEvents(), (0, r.Z)(".region-header", ".align-social-box", ".social-icon-box");
                        }
                        i.ZP.isTouchDevice() ? e("body").addClass("is-touch") : e("body").addClass("no-touch"), t.behaviors.yusenCommon = {
                            attach: function(e) {
                                var n = t.behaviors.yusenCommon;
                                n.excuteOnce(e), n.excuteMulti();
                            },
                            excuteOnce: function() {
                                var t = e(c("yusenCommon", "body"));
                                (0, s.Z)(), t.each((function() {
                                    e(window).scroll((function() {
                                        l();
                                    })), e(window).on("load resize", (function() {
                                        (0, o.Z)(), l(), a.default.judgeBreakpoints(), a.default.eventsBind();
                                    }));
                                }));
                            },
                            excuteMulti: function() {}
                        }, e((function() {
                            e(".layout-builder").length && n.e(714).then(n.t.bind(n, 9989, 23)), e(".latest-news-swiper-container").length && Promise.all([n.e(587), n.e(493)]).then(n.bind(n, 9493)), e(".region-header").length && Promise.resolve().then(n.bind(n, 6613)), e(".block-views-blocksolr-news-news-filter-list").length && n.e(664).then(n.t.bind(n, 1538, 23)), e(".share").length && n.e(478).then(n.bind(n, 9869)), e(".cta-tracking-submit").length && n.e(985).then(n.t.bind(n, 8217, 23)), e(".node-preview-container").length && n.e(952).then(n.bind(n, 3841)), e(".highlights-swiper-container").length && Promise.all([n.e(587), n.e(317)]).then(n.bind(n, 7271)), e(".iv-icon-set-container").length && Promise.all([n.e(587), n.e(25)]).then(n.bind(n, 6985)), e(".find-an-office-results").length && Promise.resolve().then(n.t.bind(n, 5385, 23)), e(".top-kv").length && n.e(883).then(n.t.bind(n, 3063, 23)), e(".video-library-list").length && n.e(8).then(n.t.bind(n, 3843, 23)), e(".call-to-action").length && n.e(895).then(n.t.bind(n, 9540, 23)), e(".yusen-logistics-carousel").length && Promise.all([n.e(587), n.e(369)]).then(n.bind(n, 8984)), e(".digital-solutions-img").length && n.e(744).then(n.t.bind(n, 9107, 23)), e(".pager").length && Promise.resolve().then(n.t.bind(n, 6848, 23)), e(".our-values-content-container").length && n.e(712).then(n.t.bind(n, 1515, 23)), e(".geo-recommend").length && n.e(780).then(n.t.bind(n, 3880, 23)), e(".yusen-logistics-accordion-item").length && n.e(410).then(n.t.bind(n, 3112, 23)), e(".menu-switch-wrapper").length && n.e(586).then(n.t.bind(n, 2491, 23)), e(".anchor-link-wrapper, .anchor-link-tab").length && n.e(278).then(n.t.bind(n, 9182, 23)), e(".component-with-title-line").length && n.e(144).then(n.t.bind(n, 6498, 23)), e(".contact-message-find-a-job-form").length && n.e(700).then(n.bind(n, 3873)), n.e(995).then(n.t.bind(n, 587, 23)), e(".ebooking").length && n.e(612).then(n.t.bind(n, 7141, 23)), e(".contact-message-contact-us-form .button--primary").length && n.e(707).then(n.t.bind(n, 2864, 23)), e(".question-list__item-title").length && n.e(410).then(n.t.bind(n, 1304, 23)), e(".block-field-blocknodepagefield-image article").length && n.e(156).then(n.t.bind(n, 6374, 23));
                        }));
                    }(jQuery, Drupal, once);
            },
            5030: function(e, t, n) {
                "use strict";

                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i;
                }
                var o = function(e) {
                        if (null == e || "" === e) return "";
                        var t = new Date(e),
                            n = t.getFullYear(),
                            i = t.getMonth() + 1 < 10 ? "0".concat(t.getMonth() + 1) : t.getMonth() + 1,
                            o = t.getDate() < 10 ? "0".concat(t.getDate()) : t.getDate(),
                            a = t.getHours() < 10 ? "0".concat(t.getHours()) : t.getHours(),
                            r = t.getMinutes() < 10 ? "0".concat(t.getMinutes()) : t.getMinutes(),
                            s = t.getSeconds() < 10 ? "0".concat(t.getSeconds()) : t.getSeconds();
                        return "".concat(n, "/").concat(i, "/").concat(o, " ").concat(a, ":").concat(r, ":").concat(s);
                    },
                    a = {
                        updateQueryStringParameter: function(e, t, n) {
                            if (!n && 0 !== Number(n)) return e;
                            var i = new RegExp("([?&])".concat(t, "=.*?(&|$)"), "i"),
                                o = -1 !== e.indexOf("?") ? "&" : "?";
                            return e.match(i) ? e.replace(i, "$1".concat(t, "=").concat(n, "$2")) : "".concat(e).concat(o).concat(t, "=").concat(n);
                        },
                        parseURLParameters: function(e) {
                            var t = e.slice(e.indexOf("?") + 1).split("&"),
                                n = {};
                            return t.forEach((function(e) {
                                var t, o, a = (t = e.split("="), o = 2, function(e) {
                                        if (Array.isArray(e)) return e;
                                    }(t) || function(e, t) {
                                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != n) {
                                            var i, o, a = [],
                                                r = !0,
                                                s = !1;
                                            try {
                                                for (n = n.call(e); !(r = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); r = !0);
                                            } catch (e) {
                                                s = !0, o = e;
                                            } finally {
                                                try {
                                                    r || null == n.return || n.return();
                                                } finally {
                                                    if (s) throw o;
                                                }
                                            }
                                            return a;
                                        }
                                    }(t, o) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return i(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
                                        }
                                    }(t, o) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }()),
                                    r = a[0],
                                    s = a[1];
                                if (r = decodeURIComponent(r), s = decodeURIComponent(s), r.indexOf("[") > -1) {
                                    var c = r.match(/^([^\[]+)\[([^\]]+)\]$/);
                                    r = void 0 === c[1] ? r : c[1], void 0 === n[r] && (n[r] = []), n[r].push(s);
                                } else n[r] = s;
                            })), n;
                        },
                        getUrlParam: function(e) {
                            var t = new RegExp("(^|&)".concat(e, "=([^&]*)(&|$)")),
                                n = window.location.search.substr(1).match(t);
                            return null != n ? unescape(n[2]) : null;
                        },
                        getPartUrl: function(e, t) {
                            var n = e.match(/^http(s)?:\/\/([^\\/?#]*)(.*$)/);
                            if ("host" === t) {
                                if (e) return n ? n[2] : null;
                            } else {
                                if (e) return n ? n[3] : null;
                            }
                        },
                        isIEFunc: function() {
                            var e = navigator.userAgent.indexOf("compatible") > -1 && navigator.userAgent.indexOf("MSIE") > -1,
                                t = navigator.userAgent.indexOf("Trident") > -1 && navigator.userAgent.indexOf("rv:11.0") > -1;
                            if (!e && !t) return !1;
                        },
                        formatDate: o,
                        getTimeDiff: function(e) {
                            e = o(e);
                            var t = Date.parse(new Date(e));
                            return (Date.now() - t) / 864e5;
                        },
                        getCookie: function(e) {
                            var t = "",
                                n = "";
                            return document.cookie.length > 0 && -1 !== (t = document.cookie.indexOf("".concat(e, "="))) ? (t = t + e.length + 1, -1 === (n = document.cookie.indexOf(";", t)) && (n = document.cookie.length), unescape(document.cookie.substring(t, n))) : "";
                        },
                        setCookie: function(e, t, n) {
                            var i = (new Date()).getTime(),
                                o = new Date(i + 864e5 * n).toUTCString(),
                                a = "";
                            a += "".concat(e, "=").concat(escape(t)), a += "; path=/", a += n ? "; expires=".concat(o, "; ") : "; ", document.cookie = a;
                        },
                        isTouchDevice: function() {
                            return 1 == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
                        }
                    };
                t.ZP = a;
            },
            4213: function(e, t, n) {
                "use strict";
                n.r(t);
            },
            3609: function(e) {
                "use strict";
                e.exports = jQuery;
            }
        },
        s = {};

    function c(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var n = s[e] = {
            exports: {}
        };
        return r[e].call(n.exports, n, n.exports, c), n.exports;
    }
    c.m = r, c.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return c.d(t, {
                a: t
            }), t;
        }, t = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e);
        } : function(e) {
            return e.__proto__;
        }, c.t = function(n, i) {
            if (1 & i && (n = this(n)), 8 & i) return n;
            if ("object" == typeof n && n) {
                if (4 & i && n.__esModule) return n;
                if (16 & i && "function" == typeof n.then) return n;
            }
            var o = Object.create(null);
            c.r(o);
            var a = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var r = 2 & i && n;
                "object" == typeof r && !~e.indexOf(r); r = t(r)) Object.getOwnPropertyNames(r).forEach((function(e) {
                a[e] = function() {
                    return n[e];
                };
            }));
            return a.default = function() {
                return n;
            }, c.d(o, a), o;
        }, c.d = function(e, t) {
            for (var n in t) c.o(t, n) && !c.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            });
        }, c.f = {}, c.e = function(e) {
            return Promise.all(Object.keys(c.f).reduce((function(t, n) {
                return c.f[n](e, t), t;
            }), []));
        }, c.u = function(e) {
            return ({
                8: "videoLibraryList",
                25: "industryVertical",
                144: "alternateTitleLine",
                156: "videoAutoplay",
                278: "anchorLink",
                317: "highlightsSlider",
                369: "carousel",
                410: "Accordion",
                478: "socialSharing",
                493: "newsSlider",
                586: "menuSwitch",
                612: "ebooking",
                664: "newsListFilters",
                700: "findAJobForm",
                707: "contactSubmitFix",
                712: "ourValues",
                714: "layoutBuilder",
                744: "vantage",
                780: "geoRecommend",
                883: "topKV",
                895: "callToAction",
                952: "preview",
                985: "ctaTrcking",
                995: "moveToTop"
            }[e] || e) + "." + {
                8: "a49209ef871e748a767d",
                25: "ae5157bc43016f9438a6",
                144: "098b90514d0b6add7594",
                156: "2adddbdf0412b8687ba2",
                278: "4641219d7c35f4da8e83",
                317: "426c891df0bb35b497f4",
                369: "8cd3cc2b568e6c4e0b1d",
                410: "b84d8a02857441d8d49a",
                478: "d65398fab564d5b5f3bd",
                493: "0b8c9cbf9882dbba9c9c",
                586: "b7fe228a83a9d64457ec",
                587: "d6ef36b7abdfbb32cdb1",
                612: "c2238f04920a6727d94d",
                664: "6b2d0944a2400cd78e31",
                700: "f703b2bf2c92c57e5148",
                707: "c11e6e668388c5181769",
                712: "2449308959db30064b71",
                714: "c44db8e10f1a97ad0114",
                744: "76f620b527ca67286a12",
                780: "0b62f57cedcb175dc3c8",
                883: "d4918f41b1cc3204f846",
                895: "35bde76289dded304d51",
                952: "7c7872fe1b2c32d98862",
                985: "9570b591c23769ea2aaf",
                995: "74af506e42b1cd68585e"
            }[e] + ".js";
        }, c.miniCssF = function(e) {
            return e + ".css";
        }, c.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        }(), c.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n = {}, i = "yusen:", c.l = function(e, t, o, a) {
            if (n[e]) n[e].push(t);
            else {
                var r, s;
                if (void 0 !== o)
                    for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                        var d = l[u];
                        if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == i + o) {
                            r = d;
                            break;
                        }
                    }
                r || (s = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, c.nc && r.setAttribute("nonce", c.nc), r.setAttribute("data-webpack", i + o), r.src = e), n[e] = [t];
                var h = function(t, i) {
                        r.onerror = r.onload = null, clearTimeout(f);
                        var o = n[e];
                        if (delete n[e], r.parentNode && r.parentNode.removeChild(r), o && o.forEach((function(e) {
                                return e(i);
                            })), t) return t(i);
                    },
                    f = setTimeout(h.bind(null, void 0, {
                        type: "timeout",
                        target: r
                    }), 12e4);
                r.onerror = h.bind(null, r.onerror), r.onload = h.bind(null, r.onload), s && document.head.appendChild(r);
            }
        }, c.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        },
        function() {
            var e;
            c.g.importScripts && (e = c.g.location + "");
            var t = c.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var n = t.getElementsByTagName("script");
                n.length && (e = n[n.length - 1].src);
            }
            if (!e) throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), c.p = e;
        }(), o = function(e) {
            return new Promise((function(t, n) {
                var i = c.miniCssF(e),
                    o = c.p + i;
                if (function(e, t) {
                        for (var n = document.getElementsByTagName("link"), i = 0; i < n.length; i++) {
                            var o = (r = n[i]).getAttribute("data-href") || r.getAttribute("href");
                            if ("stylesheet" === r.rel && (o === e || o === t)) return r;
                        }
                        var a = document.getElementsByTagName("style");
                        for (i = 0; i < a.length; i++) {
                            var r;
                            if ((o = (r = a[i]).getAttribute("data-href")) === e || o === t) return r;
                        }
                    }(i, o)) return t();
                ! function(e, t, n, i) {
                    var o = document.createElement("link");
                    o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = function(a) {
                        if (o.onerror = o.onload = null, "load" === a.type) n();
                        else {
                            var r = a && ("load" === a.type ? "missing" : a.type),
                                s = a && a.target && a.target.href || t,
                                c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                            c.code = "CSS_CHUNK_LOAD_FAILED", c.type = r, c.request = s, o.parentNode.removeChild(o), i(c);
                        }
                    }, o.href = t, document.head.appendChild(o);
                }(e, o, t, n);
            }));
        }, a = {
            826: 0
        }, c.f.miniCss = function(e, t) {
            a[e] ? t.push(a[e]) : 0 !== a[e] && {
                25: 1,
                317: 1,
                369: 1,
                493: 1
            }[e] && t.push(a[e] = o(e).then((function() {
                a[e] = 0;
            }), (function(t) {
                throw delete a[e], t;
            })));
        },
        function() {
            var e = {
                826: 0
            };
            c.f.j = function(t, n) {
                var i = c.o(e, t) ? e[t] : void 0;
                if (0 !== i)
                    if (i) n.push(i[2]);
                    else {
                        var o = new Promise((function(n, o) {
                            i = e[t] = [n, o];
                        }));
                        n.push(i[2] = o);
                        var a = c.p + c.u(t),
                            r = new Error();
                        c.l(a, (function(n) {
                            if (c.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                                var o = n && ("load" === n.type ? "missing" : n.type),
                                    a = n && n.target && n.target.src;
                                r.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", r.name = "ChunkLoadError", r.type = o, r.request = a, i[1](r);
                            }
                        }), "chunk-" + t, t);
                    }
            };
            var t = function(t, n) {
                    var i, o, a = n[0],
                        r = n[1],
                        s = n[2],
                        l = 0;
                    for (i in r) c.o(r, i) && (c.m[i] = r[i]);
                    for (s && s(c), t && t(n); l < a.length; l++) o = a[l], c.o(e, o) && e[o] && e[o][0](), e[a[l]] = 0;
                },
                n = self.webpackChunkyusen = self.webpackChunkyusen || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n));
        }(), c(4213), c(3574);
}();;
var JSMpeg = {
    Player: null,
    VideoElement: null,
    BitBuffer: null,
    Source: {},
    Demuxer: {},
    Decoder: {},
    Renderer: {},
    AudioOutput: {},
    Now: function() {
        return window.performance ? window.performance.now() / 1e3 : Date.now() / 1e3;
    },
    CreateVideoElements: function() {
        var elements = document.querySelectorAll(".jsmpeg");
        for (var i = 0; i < elements.length; i++) new JSMpeg.VideoElement(elements[i]);
    },
    Fill: function(array, value) {
        if (array.fill) array.fill(value);
        else
            for (var i = 0; i < array.length; i++) array[i] = value;
    },
    Base64ToArrayBuffer: function(base64) {
        var binary = window.atob(base64);
        var length = binary.length;
        var bytes = new Uint8Array(length);
        for (var i = 0; i < length; i++) bytes[i] = binary.charCodeAt(i);
        return bytes.buffer;
    },
    WASM_BINARY_INLINED: null
};
if (document.readyState === "complete") JSMpeg.CreateVideoElements();
else document.addEventListener("DOMContentLoaded", JSMpeg.CreateVideoElements);
JSMpeg.VideoElement = function() {
    "use strict";
    var VideoElement = function(element) {
        var url = element.dataset.url;
        if (!url) throw "VideoElement has no `data-url` attribute";
        var addStyles = function(element, styles) {
            for (var name in styles) element.style[name] = styles[name];
        };
        this.container = element;
        addStyles(this.container, {
            display: "inline-block",
            position: "relative",
            minWidth: "80px",
            minHeight: "80px"
        });
        this.canvas = document.createElement("canvas");
        this.canvas.width = 960;
        this.canvas.height = 540;
        addStyles(this.canvas, {
            display: "block",
            width: "100%"
        });
        this.container.appendChild(this.canvas);
        this.playButton = document.createElement("div");
        this.playButton.innerHTML = VideoElement.PLAY_BUTTON;
        addStyles(this.playButton, {
            zIndex: 2,
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            maxWidth: "75px",
            maxHeight: "75px",
            margin: "auto",
            opacity: "0.7",
            cursor: "pointer"
        });
        this.container.appendChild(this.playButton);
        var options = {
            canvas: this.canvas
        };
        for (var option in element.dataset) try {
            options[option] = JSON.parse(element.dataset[option]);
        } catch (err) {
            options[option] = element.dataset[option];
        }
        this.player = new JSMpeg.Player(url, options);
        element.playerInstance = this.player;
        if (options.poster && !options.autoplay && !this.player.options.streaming) {
            options.decodeFirstFrame = false;
            this.poster = new Image();
            this.poster.src = options.poster;
            this.poster.addEventListener("load", this.posterLoaded);
            addStyles(this.poster, {
                display: "block",
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            });
            this.container.appendChild(this.poster);
        }
        if (!this.player.options.streaming) this.container.addEventListener("click", this.onClick.bind(this));
        if (options.autoplay || this.player.options.streaming) this.playButton.style.display = "none";
        if (this.player.audioOut && !this.player.audioOut.unlocked) {
            var unlockAudioElement = this.container;
            if (options.autoplay || this.player.options.streaming) {
                this.unmuteButton = document.createElement("div");
                this.unmuteButton.innerHTML = VideoElement.UNMUTE_BUTTON;
                addStyles(this.unmuteButton, {
                    zIndex: 2,
                    position: "absolute",
                    bottom: "10px",
                    right: "20px",
                    width: "75px",
                    height: "75px",
                    margin: "auto",
                    opacity: "0.7",
                    cursor: "pointer"
                });
                this.container.appendChild(this.unmuteButton);
                unlockAudioElement = this.unmuteButton;
            }
            this.unlockAudioBound = this.onUnlockAudio.bind(this, unlockAudioElement);
            unlockAudioElement.addEventListener("touchstart", this.unlockAudioBound, false);
            unlockAudioElement.addEventListener("click", this.unlockAudioBound, true);
        }
    };
    VideoElement.prototype.onUnlockAudio = function(element, ev) {
        if (this.unmuteButton) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        this.player.audioOut.unlock(function() {
            if (this.unmuteButton) this.unmuteButton.style.display = "none";
            element.removeEventListener("touchstart", this.unlockAudioBound);
            element.removeEventListener("click", this.unlockAudioBound);
        }.bind(this));
    };
    VideoElement.prototype.onClick = function(ev) {
        if (this.player.isPlaying) {
            this.player.pause();
            this.playButton.style.display = "block";
        } else {
            this.player.play();
            this.playButton.style.display = "none";
            if (this.poster) this.poster.style.display = "none";
        }
    };
    VideoElement.PLAY_BUTTON = '<svg style="max-width: 75px; max-height: 75px;" ' + 'viewBox="0 0 200 200" alt="Play video">' + '<circle cx="100" cy="100" r="90" fill="none" ' + 'stroke-width="15" stroke="#fff"/>' + '<polygon points="70, 55 70, 145 145, 100" fill="#fff"/>' + "</svg>";
    VideoElement.UNMUTE_BUTTON = '<svg style="max-width: 75px; max-height: 75px;" viewBox="0 0 75 75">' + '<polygon class="audio-speaker" stroke="none" fill="#fff" ' + 'points="39,13 22,28 6,28 6,47 21,47 39,62 39,13"/>' + '<g stroke="#fff" stroke-width="5">' + '<path d="M 49,50 69,26"/>' + '<path d="M 69,50 49,26"/>' + "</g>" + "</svg>";
    return VideoElement;
}();
JSMpeg.Player = function() {
    "use strict";
    var Player = function(url, options) {
        this.options = options || {};
        if (options.source) {
            this.source = new options.source(url, options);
            options.streaming = !!this.source.streaming;
        } else if (url.match(/^wss?:\/\//)) {
            this.source = new JSMpeg.Source.WebSocket(url, options);
            options.streaming = true;
        } else if (options.progressive !== false) {
            this.source = new JSMpeg.Source.AjaxProgressive(url, options);
            options.streaming = false;
        } else {
            this.source = new JSMpeg.Source.Ajax(url, options);
            options.streaming = false;
        }
        this.maxAudioLag = options.maxAudioLag || .25;
        this.loop = options.loop !== false;
        this.autoplay = !!options.autoplay || options.streaming;
        this.demuxer = new JSMpeg.Demuxer.TS(options);
        this.source.connect(this.demuxer);
        if (!options.disableWebAssembly && JSMpeg.WASMModule.IsSupported()) {
            this.wasmModule = JSMpeg.WASMModule.GetModule();
            options.wasmModule = this.wasmModule;
        }
        if (options.video !== false) {
            this.video = options.wasmModule ? new JSMpeg.Decoder.MPEG1VideoWASM(options) : new JSMpeg.Decoder.MPEG1Video(options);
            this.renderer = !options.disableGl && JSMpeg.Renderer.WebGL.IsSupported() ? new JSMpeg.Renderer.WebGL(options) : new JSMpeg.Renderer.Canvas2D(options);
            this.demuxer.connect(JSMpeg.Demuxer.TS.STREAM.VIDEO_1, this.video);
            this.video.connect(this.renderer);
        }
        if (options.audio !== false && JSMpeg.AudioOutput.WebAudio.IsSupported()) {
            this.audio = options.wasmModule ? new JSMpeg.Decoder.MP2AudioWASM(options) : new JSMpeg.Decoder.MP2Audio(options);
            this.audioOut = new JSMpeg.AudioOutput.WebAudio(options);
            this.demuxer.connect(JSMpeg.Demuxer.TS.STREAM.AUDIO_1, this.audio);
            this.audio.connect(this.audioOut);
        }
        Object.defineProperty(this, "currentTime", {
            get: this.getCurrentTime,
            set: this.setCurrentTime
        });
        Object.defineProperty(this, "volume", {
            get: this.getVolume,
            set: this.setVolume
        });
        this.paused = true;
        this.unpauseOnShow = false;
        if (options.pauseWhenHidden !== false) document.addEventListener("visibilitychange", this.showHide.bind(this));
        if (this.wasmModule)
            if (this.wasmModule.ready) this.startLoading();
            else if (JSMpeg.WASM_BINARY_INLINED) {
            var wasm = JSMpeg.Base64ToArrayBuffer(JSMpeg.WASM_BINARY_INLINED);
            this.wasmModule.loadFromBuffer(wasm, this.startLoading.bind(this));
        } else this.wasmModule.loadFromFile("jsmpeg.wasm", this.startLoading.bind(this));
        else this.startLoading();
    };
    Player.prototype.startLoading = function() {
        this.source.start();
        if (this.autoplay) this.play();
    };
    Player.prototype.showHide = function(ev) {
        if (document.visibilityState === "hidden") {
            this.unpauseOnShow = this.wantsToPlay;
            this.pause();
        } else {
            if (this.unpauseOnShow) this.play();
        }
    };
    Player.prototype.play = function(ev) {
        if (this.animationId) return;
        this.animationId = requestAnimationFrame(this.update.bind(this));
        this.wantsToPlay = true;
        this.paused = false;
    };
    Player.prototype.pause = function(ev) {
        if (this.paused) return;
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
        this.wantsToPlay = false;
        this.isPlaying = false;
        this.paused = true;
        if (this.audio && this.audio.canPlay) {
            this.audioOut.stop();
            this.seek(this.currentTime);
        }
        if (this.options.onPause) this.options.onPause(this);
    };
    Player.prototype.getVolume = function() {
        return this.audioOut ? this.audioOut.volume : 0;
    };
    Player.prototype.setVolume = function(volume) {
        if (this.audioOut) this.audioOut.volume = volume;
    };
    Player.prototype.stop = function(ev) {
        this.pause();
        this.seek(0);
        if (this.video && this.options.decodeFirstFrame !== false) this.video.decode();
    };
    Player.prototype.destroy = function() {
        this.pause();
        this.source.destroy();
        this.video && this.video.destroy();
        this.renderer && this.renderer.destroy();
        this.audio && this.audio.destroy();
        this.audioOut && this.audioOut.destroy();
    };
    Player.prototype.seek = function(time) {
        var startOffset = this.audio && this.audio.canPlay ? this.audio.startTime : this.video.startTime;
        if (this.video) this.video.seek(time + startOffset);
        if (this.audio) this.audio.seek(time + startOffset);
        this.startTime = JSMpeg.Now() - time;
    };
    Player.prototype.getCurrentTime = function() {
        return this.audio && this.audio.canPlay ? this.audio.currentTime - this.audio.startTime : this.video.currentTime - this.video.startTime;
    };
    Player.prototype.setCurrentTime = function(time) {
        this.seek(time);
    };
    Player.prototype.update = function() {
        this.animationId = requestAnimationFrame(this.update.bind(this));
        if (!this.source.established) {
            if (this.renderer) this.renderer.renderProgress(this.source.progress);
            return;
        }
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.startTime = JSMpeg.Now() - this.currentTime;
            if (this.options.onPlay) this.options.onPlay(this);
        }
        if (this.options.streaming) this.updateForStreaming();
        else this.updateForStaticFile();
    };
    Player.prototype.updateForStreaming = function() {
        if (this.video) this.video.decode();
        if (this.audio) {
            var decoded = false;
            do {
                if (this.audioOut.enqueuedTime > this.maxAudioLag) {
                    this.audioOut.resetEnqueuedTime();
                    this.audioOut.enabled = false;
                }
                decoded = this.audio.decode();
            } while (decoded);
            this.audioOut.enabled = true;
        }
    };
    Player.prototype.nextFrame = function() {
        if (this.source.established && this.video) return this.video.decode();
        return false;
    };
    Player.prototype.updateForStaticFile = function() {
        var notEnoughData = false,
            headroom = 0;
        if (this.audio && this.audio.canPlay) {
            while (!notEnoughData && this.audio.decodedTime - this.audio.currentTime < .25) notEnoughData = !this.audio.decode();
            if (this.video && this.video.currentTime < this.audio.currentTime) notEnoughData = !this.video.decode();
            headroom = this.demuxer.currentTime - this.audio.currentTime;
        } else {
            if (this.video) {
                var targetTime = JSMpeg.Now() - this.startTime + this.video.startTime,
                    lateTime = targetTime - this.video.currentTime,
                    frameTime = 1 / this.video.frameRate;
                if (this.video && lateTime > 0) {
                    if (lateTime > frameTime * 2) this.startTime += lateTime;
                    notEnoughData = !this.video.decode();
                }
                headroom = this.demuxer.currentTime - targetTime;
            }
        }
        this.source.resume(headroom);
        if (notEnoughData && this.source.completed)
            if (this.loop) this.seek(0);
            else {
                this.pause();
                if (this.options.onEnded) this.options.onEnded(this);
            }
        else {
            if (notEnoughData && this.options.onStalled) this.options.onStalled(this);
        }
    };
    return Player;
}();
JSMpeg.BitBuffer = function() {
    "use strict";
    var BitBuffer = function(bufferOrLength, mode) {
        if (typeof bufferOrLength === "object") {
            this.bytes = bufferOrLength instanceof Uint8Array ? bufferOrLength : new Uint8Array(bufferOrLength);
            this.byteLength = this.bytes.length;
        } else {
            this.bytes = new Uint8Array(bufferOrLength || 1024 * 1024);
            this.byteLength = 0;
        }
        this.mode = mode || BitBuffer.MODE.EXPAND;
        this.index = 0;
    };
    BitBuffer.prototype.resize = function(size) {
        var newBytes = new Uint8Array(size);
        if (this.byteLength !== 0) {
            this.byteLength = Math.min(this.byteLength, size);
            newBytes.set(this.bytes, 0, this.byteLength);
        }
        this.bytes = newBytes;
        this.index = Math.min(this.index, this.byteLength << 3);
    };
    BitBuffer.prototype.evict = function(sizeNeeded) {
        var bytePos = this.index >> 3,
            available = this.bytes.length - this.byteLength;
        if (this.index === this.byteLength << 3 || sizeNeeded > available + bytePos) {
            this.byteLength = 0;
            this.index = 0;
            return;
        } else {
            if (bytePos === 0) return;
        }
        if (this.bytes.copyWithin) this.bytes.copyWithin(0, bytePos, this.byteLength);
        else this.bytes.set(this.bytes.subarray(bytePos, this.byteLength));
        this.byteLength = this.byteLength - bytePos;
        this.index -= bytePos << 3;
        return;
    };
    BitBuffer.prototype.write = function(buffers) {
        var isArrayOfBuffers = typeof buffers[0] === "object",
            totalLength = 0,
            available = this.bytes.length - this.byteLength;
        if (isArrayOfBuffers) {
            var totalLength = 0;
            for (var i = 0; i < buffers.length; i++) totalLength += buffers[i].byteLength;
        } else totalLength = buffers.byteLength;
        if (totalLength > available)
            if (this.mode === BitBuffer.MODE.EXPAND) {
                var newSize = Math.max(this.bytes.length * 2, totalLength - available);
                this.resize(newSize);
            } else this.evict(totalLength);
        if (isArrayOfBuffers)
            for (var i = 0; i < buffers.length; i++) this.appendSingleBuffer(buffers[i]);
        else this.appendSingleBuffer(buffers);
        return totalLength;
    };
    BitBuffer.prototype.appendSingleBuffer = function(buffer) {
        buffer = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
        this.bytes.set(buffer, this.byteLength);
        this.byteLength += buffer.length;
    };
    BitBuffer.prototype.findNextStartCode = function() {
        for (var i = this.index + 7 >> 3; i < this.byteLength; i++)
            if (this.bytes[i] == 0 && this.bytes[i + 1] == 0 && this.bytes[i + 2] == 1) {
                this.index = i + 4 << 3;
                return this.bytes[i + 3];
            }
        this.index = this.byteLength << 3;
        return -1;
    };
    BitBuffer.prototype.findStartCode = function(code) {
        var current = 0;
        while (true) {
            current = this.findNextStartCode();
            if (current === code || current === -1) return current;
        }
        return -1;
    };
    BitBuffer.prototype.nextBytesAreStartCode = function() {
        var i = this.index + 7 >> 3;
        return i >= this.byteLength || this.bytes[i] == 0 && this.bytes[i + 1] == 0 && this.bytes[i + 2] == 1;
    };
    BitBuffer.prototype.peek = function(count) {
        var offset = this.index;
        var value = 0;
        while (count) {
            var currentByte = this.bytes[offset >> 3],
                remaining = 8 - (offset & 7),
                read = remaining < count ? remaining : count,
                shift = remaining - read,
                mask = 255 >> 8 - read;
            value = value << read | (currentByte & mask << shift) >> shift;
            offset += read;
            count -= read;
        }
        return value;
    };
    BitBuffer.prototype.read = function(count) {
        var value = this.peek(count);
        this.index += count;
        return value;
    };
    BitBuffer.prototype.skip = function(count) {
        return this.index += count;
    };
    BitBuffer.prototype.rewind = function(count) {
        this.index = Math.max(this.index - count, 0);
    };
    BitBuffer.prototype.has = function(count) {
        return (this.byteLength << 3) - this.index >= count;
    };
    BitBuffer.MODE = {
        EVICT: 1,
        EXPAND: 2
    };
    return BitBuffer;
}();
JSMpeg.Source.Ajax = function() {
    "use strict";
    var AjaxSource = function(url, options) {
        this.url = url;
        this.destination = null;
        this.request = null;
        this.streaming = false;
        this.completed = false;
        this.established = false;
        this.progress = 0;
        this.onEstablishedCallback = options.onSourceEstablished;
        this.onCompletedCallback = options.onSourceCompleted;
    };
    AjaxSource.prototype.connect = function(destination) {
        this.destination = destination;
    };
    AjaxSource.prototype.start = function() {
        this.request = new XMLHttpRequest();
        this.request.onreadystatechange = function() {
            if (this.request.readyState === this.request.DONE && this.request.status === 200) this.onLoad(this.request.response);
        }.bind(this);
        this.request.onprogress = this.onProgress.bind(this);
        this.request.open("GET", this.url);
        this.request.responseType = "arraybuffer";
        this.request.send();
    };
    AjaxSource.prototype.resume = function(secondsHeadroom) {};
    AjaxSource.prototype.destroy = function() {
        this.request.abort();
    };
    AjaxSource.prototype.onProgress = function(ev) {
        this.progress = ev.loaded / ev.total;
    };
    AjaxSource.prototype.onLoad = function(data) {
        this.established = true;
        this.completed = true;
        this.progress = 1;
        if (this.onEstablishedCallback) this.onEstablishedCallback(this);
        if (this.onCompletedCallback) this.onCompletedCallback(this);
        if (this.destination) this.destination.write(data);
    };
    return AjaxSource;
}();
JSMpeg.Source.Fetch = function() {
    "use strict";
    var FetchSource = function(url, options) {
        this.url = url;
        this.destination = null;
        this.request = null;
        this.streaming = true;
        this.completed = false;
        this.established = false;
        this.progress = 0;
        this.aborted = false;
        this.onEstablishedCallback = options.onSourceEstablished;
        this.onCompletedCallback = options.onSourceCompleted;
    };
    FetchSource.prototype.connect = function(destination) {
        this.destination = destination;
    };
    FetchSource.prototype.start = function() {
        var params = {
            method: "GET",
            headers: new Headers(),
            cache: "default"
        };
        self.fetch(this.url, params).then(function(res) {
            if (res.ok && (res.status >= 200 && res.status <= 299)) {
                this.progress = 1;
                this.established = true;
                return this.pump(res.body.getReader());
            } else {}
        }.bind(this)).catch(function(err) {
            throw err;
        });
    };
    FetchSource.prototype.pump = function(reader) {
        return reader.read().then(function(result) {
            if (result.done) this.completed = true;
            else {
                if (this.aborted) return reader.cancel();
                if (this.destination) this.destination.write(result.value.buffer);
                return this.pump(reader);
            }
        }.bind(this)).catch(function(err) {
            throw err;
        });
    };
    FetchSource.prototype.resume = function(secondsHeadroom) {};
    FetchSource.prototype.abort = function() {
        this.aborted = true;
    };
    return FetchSource;
}();
JSMpeg.Source.AjaxProgressive = function() {
    "use strict";
    var AjaxProgressiveSource = function(url, options) {
        this.url = url;
        this.destination = null;
        this.request = null;
        this.streaming = false;
        this.completed = false;
        this.established = false;
        this.progress = 0;
        this.fileSize = 0;
        this.loadedSize = 0;
        this.chunkSize = options.chunkSize || 1024 * 1024;
        this.isLoading = false;
        this.loadStartTime = 0;
        this.throttled = options.throttled !== false;
        this.aborted = false;
        this.onEstablishedCallback = options.onSourceEstablished;
        this.onCompletedCallback = options.onSourceCompleted;
    };
    AjaxProgressiveSource.prototype.connect = function(destination) {
        this.destination = destination;
    };
    AjaxProgressiveSource.prototype.start = function() {
        this.request = new XMLHttpRequest();
        this.request.onreadystatechange = function() {
            if (this.request.readyState === this.request.DONE) {
                this.fileSize = parseInt(this.request.getResponseHeader("Content-Length"));
                this.loadNextChunk();
            }
        }.bind(this);
        this.request.onprogress = this.onProgress.bind(this);
        this.request.open("HEAD", this.url);
        this.request.send();
    };
    AjaxProgressiveSource.prototype.resume = function(secondsHeadroom) {
        if (this.isLoading || !this.throttled) return;
        var worstCaseLoadingTime = this.loadTime * 8 + 2;
        if (worstCaseLoadingTime > secondsHeadroom) this.loadNextChunk();
    };
    AjaxProgressiveSource.prototype.destroy = function() {
        this.request.abort();
        this.aborted = true;
    };
    AjaxProgressiveSource.prototype.loadNextChunk = function() {
        var start = this.loadedSize,
            end = Math.min(this.loadedSize + this.chunkSize - 1, this.fileSize - 1);
        if (start >= this.fileSize || this.aborted) {
            this.completed = true;
            if (this.onCompletedCallback) this.onCompletedCallback(this);
            return;
        }
        this.isLoading = true;
        this.loadStartTime = JSMpeg.Now();
        this.request = new XMLHttpRequest();
        this.request.onreadystatechange = function() {
            if (this.request.readyState === this.request.DONE && this.request.status >= 200 && this.request.status < 300) this.onChunkLoad(this.request.response);
            else {
                if (this.request.readyState === this.request.DONE)
                    if (this.loadFails++ < 3) this.loadNextChunk();
            }
        }.bind(this);
        if (start === 0) this.request.onprogress = this.onProgress.bind(this);
        this.request.open("GET", this.url + "?" + start + "-" + end);
        this.request.setRequestHeader("Range", "bytes=" + start + "-" + end);
        this.request.responseType = "arraybuffer";
        this.request.send();
    };
    AjaxProgressiveSource.prototype.onProgress = function(ev) {
        this.progress = ev.loaded / ev.total;
    };
    AjaxProgressiveSource.prototype.onChunkLoad = function(data) {
        var isFirstChunk = !this.established;
        this.established = true;
        this.progress = 1;
        this.loadedSize += data.byteLength;
        this.loadFails = 0;
        this.isLoading = false;
        if (isFirstChunk && this.onEstablishedCallback) this.onEstablishedCallback(this);
        if (this.destination) this.destination.write(data);
        this.loadTime = JSMpeg.Now() - this.loadStartTime;
        if (!this.throttled) this.loadNextChunk();
    };
    return AjaxProgressiveSource;
}();
JSMpeg.Source.WebSocket = function() {
    "use strict";
    var WSSource = function(url, options) {
        this.url = url;
        this.options = options;
        this.socket = null;
        this.streaming = true;
        this.callbacks = {
            connect: [],
            data: []
        };
        this.destination = null;
        this.reconnectInterval = options.reconnectInterval !== undefined ? options.reconnectInterval : 5;
        this.shouldAttemptReconnect = !!this.reconnectInterval;
        this.completed = false;
        this.established = false;
        this.progress = 0;
        this.reconnectTimeoutId = 0;
        this.onEstablishedCallback = options.onSourceEstablished;
        this.onCompletedCallback = options.onSourceCompleted;
    };
    WSSource.prototype.connect = function(destination) {
        this.destination = destination;
    };
    WSSource.prototype.destroy = function() {
        clearTimeout(this.reconnectTimeoutId);
        this.shouldAttemptReconnect = false;
        this.socket.close();
    };
    WSSource.prototype.start = function() {
        this.shouldAttemptReconnect = !!this.reconnectInterval;
        this.progress = 0;
        this.established = false;
        this.socket = new WebSocket(this.url, this.options.protocols || null);
        this.socket.binaryType = "arraybuffer";
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onerror = this.onClose.bind(this);
        this.socket.onclose = this.onClose.bind(this);
    };
    WSSource.prototype.resume = function(secondsHeadroom) {};
    WSSource.prototype.onOpen = function() {
        this.progress = 1;
    };
    WSSource.prototype.onClose = function() {
        if (this.shouldAttemptReconnect) {
            clearTimeout(this.reconnectTimeoutId);
            this.reconnectTimeoutId = setTimeout(function() {
                this.start();
            }.bind(this), this.reconnectInterval * 1e3);
        }
    };
    WSSource.prototype.onMessage = function(ev) {
        var isFirstChunk = !this.established;
        this.established = true;
        if (isFirstChunk && this.onEstablishedCallback) this.onEstablishedCallback(this);
        if (this.destination) this.destination.write(ev.data);
    };
    return WSSource;
}();
JSMpeg.Demuxer.TS = function() {
    "use strict";
    var TS = function(options) {
        this.bits = null;
        this.leftoverBytes = null;
        this.guessVideoFrameEnd = true;
        this.pidsToStreamIds = {};
        this.pesPacketInfo = {};
        this.startTime = 0;
        this.currentTime = 0;
    };
    TS.prototype.connect = function(streamId, destination) {
        this.pesPacketInfo[streamId] = {
            destination,
            currentLength: 0,
            totalLength: 0,
            pts: 0,
            buffers: []
        };
    };
    TS.prototype.write = function(buffer) {
        if (this.leftoverBytes) {
            var totalLength = buffer.byteLength + this.leftoverBytes.byteLength;
            this.bits = new JSMpeg.BitBuffer(totalLength);
            this.bits.write([this.leftoverBytes, buffer]);
        } else this.bits = new JSMpeg.BitBuffer(buffer);
        while (this.bits.has(188 << 3) && this.parsePacket()) {}
        var leftoverCount = this.bits.byteLength - (this.bits.index >> 3);
        this.leftoverBytes = leftoverCount > 0 ? this.bits.bytes.subarray(this.bits.index >> 3) : null;
    };
    TS.prototype.parsePacket = function() {
        if (this.bits.read(8) !== 71)
            if (!this.resync()) return false;
        var end = (this.bits.index >> 3) + 187;
        var transportError = this.bits.read(1),
            payloadStart = this.bits.read(1),
            transportPriority = this.bits.read(1),
            pid = this.bits.read(13),
            transportScrambling = this.bits.read(2),
            adaptationField = this.bits.read(2),
            continuityCounter = this.bits.read(4);
        var streamId = this.pidsToStreamIds[pid];
        if (payloadStart && streamId) {
            var pi = this.pesPacketInfo[streamId];
            if (pi && pi.currentLength) this.packetComplete(pi);
        }
        if (adaptationField & 1) {
            if (adaptationField & 2) {
                var adaptationFieldLength = this.bits.read(8);
                this.bits.skip(adaptationFieldLength << 3);
            }
            if (payloadStart && this.bits.nextBytesAreStartCode()) {
                this.bits.skip(24);
                streamId = this.bits.read(8);
                this.pidsToStreamIds[pid] = streamId;
                var packetLength = this.bits.read(16);
                this.bits.skip(8);
                var ptsDtsFlag = this.bits.read(2);
                this.bits.skip(6);
                var headerLength = this.bits.read(8);
                var payloadBeginIndex = this.bits.index + (headerLength << 3);
                var pi = this.pesPacketInfo[streamId];
                if (pi) {
                    var pts = 0;
                    if (ptsDtsFlag & 2) {
                        this.bits.skip(4);
                        var p32_30 = this.bits.read(3);
                        this.bits.skip(1);
                        var p29_15 = this.bits.read(15);
                        this.bits.skip(1);
                        var p14_0 = this.bits.read(15);
                        this.bits.skip(1);
                        pts = (p32_30 * 1073741824 + p29_15 * 32768 + p14_0) / 9e4;
                        this.currentTime = pts;
                        if (this.startTime === -1) this.startTime = pts;
                    }
                    var payloadLength = packetLength ? packetLength - headerLength - 3 : 0;
                    this.packetStart(pi, pts, payloadLength);
                }
                this.bits.index = payloadBeginIndex;
            }
            if (streamId) {
                var pi = this.pesPacketInfo[streamId];
                if (pi) {
                    var start = this.bits.index >> 3;
                    var complete = this.packetAddData(pi, start, end);
                    var hasPadding = !payloadStart && adaptationField & 2;
                    if (complete || this.guessVideoFrameEnd && hasPadding) this.packetComplete(pi);
                }
            }
        }
        this.bits.index = end << 3;
        return true;
    };
    TS.prototype.resync = function() {
        if (!this.bits.has(188 * 6 << 3)) return false;
        var byteIndex = this.bits.index >> 3;
        for (var i = 0; i < 187; i++)
            if (this.bits.bytes[byteIndex + i] === 71) {
                var foundSync = true;
                for (var j = 1; j < 5; j++)
                    if (this.bits.bytes[byteIndex + i + 188 * j] !== 71) {
                        foundSync = false;
                        break;
                    }
                if (foundSync) {
                    this.bits.index = byteIndex + i + 1 << 3;
                    return true;
                }
            }
        console.warn("JSMpeg: Possible garbage data. Skipping.");
        this.bits.skip(187 << 3);
        return false;
    };
    TS.prototype.packetStart = function(pi, pts, payloadLength) {
        pi.totalLength = payloadLength;
        pi.currentLength = 0;
        pi.pts = pts;
    };
    TS.prototype.packetAddData = function(pi, start, end) {
        pi.buffers.push(this.bits.bytes.subarray(start, end));
        pi.currentLength += end - start;
        var complete = pi.totalLength !== 0 && pi.currentLength >= pi.totalLength;
        return complete;
    };
    TS.prototype.packetComplete = function(pi) {
        pi.destination.write(pi.pts, pi.buffers);
        pi.totalLength = 0;
        pi.currentLength = 0;
        pi.buffers = [];
    };
    TS.STREAM = {
        PACK_HEADER: 186,
        SYSTEM_HEADER: 187,
        PROGRAM_MAP: 188,
        PRIVATE_1: 189,
        PADDING: 190,
        PRIVATE_2: 191,
        AUDIO_1: 192,
        VIDEO_1: 224,
        DIRECTORY: 255
    };
    return TS;
}();
JSMpeg.Decoder.Base = function() {
    "use strict";
    var BaseDecoder = function(options) {
        this.destination = null;
        this.canPlay = false;
        this.collectTimestamps = !options.streaming;
        this.bytesWritten = 0;
        this.timestamps = [];
        this.timestampIndex = 0;
        this.startTime = 0;
        this.decodedTime = 0;
        Object.defineProperty(this, "currentTime", {
            get: this.getCurrentTime
        });
    };
    BaseDecoder.prototype.destroy = function() {};
    BaseDecoder.prototype.connect = function(destination) {
        this.destination = destination;
    };
    BaseDecoder.prototype.bufferGetIndex = function() {
        return this.bits.index;
    };
    BaseDecoder.prototype.bufferSetIndex = function(index) {
        this.bits.index = index;
    };
    BaseDecoder.prototype.bufferWrite = function(buffers) {
        return this.bits.write(buffers);
    };
    BaseDecoder.prototype.write = function(pts, buffers) {
        if (this.collectTimestamps) {
            if (this.timestamps.length === 0) {
                this.startTime = pts;
                this.decodedTime = pts;
            }
            this.timestamps.push({
                index: this.bytesWritten << 3,
                time: pts
            });
        }
        this.bytesWritten += this.bufferWrite(buffers);
        this.canPlay = true;
    };
    BaseDecoder.prototype.seek = function(time) {
        if (!this.collectTimestamps) return;
        this.timestampIndex = 0;
        for (var i = 0; i < this.timestamps.length; i++) {
            if (this.timestamps[i].time > time) break;
            this.timestampIndex = i;
        }
        var ts = this.timestamps[this.timestampIndex];
        if (ts) {
            this.bufferSetIndex(ts.index);
            this.decodedTime = ts.time;
        } else {
            this.bufferSetIndex(0);
            this.decodedTime = this.startTime;
        }
    };
    BaseDecoder.prototype.decode = function() {
        this.advanceDecodedTime(0);
    };
    BaseDecoder.prototype.advanceDecodedTime = function(seconds) {
        if (this.collectTimestamps) {
            var newTimestampIndex = -1;
            var currentIndex = this.bufferGetIndex();
            for (var i = this.timestampIndex; i < this.timestamps.length; i++) {
                if (this.timestamps[i].index > currentIndex) break;
                newTimestampIndex = i;
            }
            if (newTimestampIndex !== -1 && newTimestampIndex !== this.timestampIndex) {
                this.timestampIndex = newTimestampIndex;
                this.decodedTime = this.timestamps[this.timestampIndex].time;
                return;
            }
        }
        this.decodedTime += seconds;
    };
    BaseDecoder.prototype.getCurrentTime = function() {
        return this.decodedTime;
    };
    return BaseDecoder;
}();
JSMpeg.Decoder.MPEG1Video = function() {
    "use strict";
    var MPEG1 = function(options) {
        JSMpeg.Decoder.Base.call(this, options);
        this.onDecodeCallback = options.onVideoDecode;
        var bufferSize = options.videoBufferSize || 512 * 1024;
        var bufferMode = options.streaming ? JSMpeg.BitBuffer.MODE.EVICT : JSMpeg.BitBuffer.MODE.EXPAND;
        this.bits = new JSMpeg.BitBuffer(bufferSize, bufferMode);
        this.customIntraQuantMatrix = new Uint8Array(64);
        this.customNonIntraQuantMatrix = new Uint8Array(64);
        this.blockData = new Int32Array(64);
        this.currentFrame = 0;
        this.decodeFirstFrame = options.decodeFirstFrame !== false;
    };
    MPEG1.prototype = Object.create(JSMpeg.Decoder.Base.prototype);
    MPEG1.prototype.constructor = MPEG1;
    MPEG1.prototype.write = function(pts, buffers) {
        JSMpeg.Decoder.Base.prototype.write.call(this, pts, buffers);
        if (!this.hasSequenceHeader) {
            if (this.bits.findStartCode(MPEG1.START.SEQUENCE) === -1) return false;
            this.decodeSequenceHeader();
            if (this.decodeFirstFrame) this.decode();
        }
    };
    MPEG1.prototype.decode = function() {
        var startTime = JSMpeg.Now();
        if (!this.hasSequenceHeader) return false;
        if (this.bits.findStartCode(MPEG1.START.PICTURE) === -1) {
            var bufferedBytes = this.bits.byteLength - (this.bits.index >> 3);
            return false;
        }
        this.decodePicture();
        this.advanceDecodedTime(1 / this.frameRate);
        var elapsedTime = JSMpeg.Now() - startTime;
        if (this.onDecodeCallback) this.onDecodeCallback(this, elapsedTime);
        return true;
    };
    MPEG1.prototype.readHuffman = function(codeTable) {
        var state = 0;
        do state = codeTable[state + this.bits.read(1)]; while (state >= 0 && codeTable[state] !== 0);
        return codeTable[state + 2];
    };
    MPEG1.prototype.frameRate = 30;
    MPEG1.prototype.decodeSequenceHeader = function() {
        var newWidth = this.bits.read(12),
            newHeight = this.bits.read(12);
        this.bits.skip(4);
        this.frameRate = MPEG1.PICTURE_RATE[this.bits.read(4)];
        this.bits.skip(18 + 1 + 10 + 1);
        if (newWidth !== this.width || newHeight !== this.height) {
            this.width = newWidth;
            this.height = newHeight;
            this.initBuffers();
            if (this.destination) this.destination.resize(newWidth, newHeight);
        }
        if (this.bits.read(1)) {
            for (var i = 0; i < 64; i++) this.customIntraQuantMatrix[MPEG1.ZIG_ZAG[i]] = this.bits.read(8);
            this.intraQuantMatrix = this.customIntraQuantMatrix;
        }
        if (this.bits.read(1)) {
            for (var i = 0; i < 64; i++) {
                var idx = MPEG1.ZIG_ZAG[i];
                this.customNonIntraQuantMatrix[idx] = this.bits.read(8);
            }
            this.nonIntraQuantMatrix = this.customNonIntraQuantMatrix;
        }
        this.hasSequenceHeader = true;
    };
    MPEG1.prototype.initBuffers = function() {
        this.intraQuantMatrix = MPEG1.DEFAULT_INTRA_QUANT_MATRIX;
        this.nonIntraQuantMatrix = MPEG1.DEFAULT_NON_INTRA_QUANT_MATRIX;
        this.mbWidth = this.width + 15 >> 4;
        this.mbHeight = this.height + 15 >> 4;
        this.mbSize = this.mbWidth * this.mbHeight;
        this.codedWidth = this.mbWidth << 4;
        this.codedHeight = this.mbHeight << 4;
        this.codedSize = this.codedWidth * this.codedHeight;
        this.halfWidth = this.mbWidth << 3;
        this.halfHeight = this.mbHeight << 3;
        this.currentY = new Uint8ClampedArray(this.codedSize);
        this.currentY32 = new Uint32Array(this.currentY.buffer);
        this.currentCr = new Uint8ClampedArray(this.codedSize >> 2);
        this.currentCr32 = new Uint32Array(this.currentCr.buffer);
        this.currentCb = new Uint8ClampedArray(this.codedSize >> 2);
        this.currentCb32 = new Uint32Array(this.currentCb.buffer);
        this.forwardY = new Uint8ClampedArray(this.codedSize);
        this.forwardY32 = new Uint32Array(this.forwardY.buffer);
        this.forwardCr = new Uint8ClampedArray(this.codedSize >> 2);
        this.forwardCr32 = new Uint32Array(this.forwardCr.buffer);
        this.forwardCb = new Uint8ClampedArray(this.codedSize >> 2);
        this.forwardCb32 = new Uint32Array(this.forwardCb.buffer);
    };
    MPEG1.prototype.currentY = null;
    MPEG1.prototype.currentCr = null;
    MPEG1.prototype.currentCb = null;
    MPEG1.prototype.pictureType = 0;
    MPEG1.prototype.forwardY = null;
    MPEG1.prototype.forwardCr = null;
    MPEG1.prototype.forwardCb = null;
    MPEG1.prototype.fullPelForward = false;
    MPEG1.prototype.forwardFCode = 0;
    MPEG1.prototype.forwardRSize = 0;
    MPEG1.prototype.forwardF = 0;
    MPEG1.prototype.decodePicture = function(skipOutput) {
        this.currentFrame++;
        this.bits.skip(10);
        this.pictureType = this.bits.read(3);
        this.bits.skip(16);
        if (this.pictureType <= 0 || this.pictureType >= MPEG1.PICTURE_TYPE.B) return;
        if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
            this.fullPelForward = this.bits.read(1);
            this.forwardFCode = this.bits.read(3);
            if (this.forwardFCode === 0) return;
            this.forwardRSize = this.forwardFCode - 1;
            this.forwardF = 1 << this.forwardRSize;
        }
        var code = 0;
        do code = this.bits.findNextStartCode(); while (code === MPEG1.START.EXTENSION || code === MPEG1.START.USER_DATA);
        while (code >= MPEG1.START.SLICE_FIRST && code <= MPEG1.START.SLICE_LAST) {
            this.decodeSlice(code & 255);
            code = this.bits.findNextStartCode();
        }
        if (code !== -1) this.bits.rewind(32);
        if (this.destination) this.destination.render(this.currentY, this.currentCr, this.currentCb, true);
        if (this.pictureType === MPEG1.PICTURE_TYPE.INTRA || this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
            var tmpY = this.forwardY,
                tmpY32 = this.forwardY32,
                tmpCr = this.forwardCr,
                tmpCr32 = this.forwardCr32,
                tmpCb = this.forwardCb,
                tmpCb32 = this.forwardCb32;
            this.forwardY = this.currentY;
            this.forwardY32 = this.currentY32;
            this.forwardCr = this.currentCr;
            this.forwardCr32 = this.currentCr32;
            this.forwardCb = this.currentCb;
            this.forwardCb32 = this.currentCb32;
            this.currentY = tmpY;
            this.currentY32 = tmpY32;
            this.currentCr = tmpCr;
            this.currentCr32 = tmpCr32;
            this.currentCb = tmpCb;
            this.currentCb32 = tmpCb32;
        }
    };
    MPEG1.prototype.quantizerScale = 0;
    MPEG1.prototype.sliceBegin = false;
    MPEG1.prototype.decodeSlice = function(slice) {
        this.sliceBegin = true;
        this.macroblockAddress = (slice - 1) * this.mbWidth - 1;
        this.motionFwH = this.motionFwHPrev = 0;
        this.motionFwV = this.motionFwVPrev = 0;
        this.dcPredictorY = 128;
        this.dcPredictorCr = 128;
        this.dcPredictorCb = 128;
        this.quantizerScale = this.bits.read(5);
        while (this.bits.read(1)) this.bits.skip(8);
        do this.decodeMacroblock(); while (!this.bits.nextBytesAreStartCode());
    };
    MPEG1.prototype.macroblockAddress = 0;
    MPEG1.prototype.mbRow = 0;
    MPEG1.prototype.mbCol = 0;
    MPEG1.prototype.macroblockType = 0;
    MPEG1.prototype.macroblockIntra = false;
    MPEG1.prototype.macroblockMotFw = false;
    MPEG1.prototype.motionFwH = 0;
    MPEG1.prototype.motionFwV = 0;
    MPEG1.prototype.motionFwHPrev = 0;
    MPEG1.prototype.motionFwVPrev = 0;
    MPEG1.prototype.decodeMacroblock = function() {
        var increment = 0,
            t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);
        while (t === 34) t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);
        while (t === 35) {
            increment += 33;
            t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);
        }
        increment += t;
        if (this.sliceBegin) {
            this.sliceBegin = false;
            this.macroblockAddress += increment;
        } else {
            if (this.macroblockAddress + increment >= this.mbSize) return;
            if (increment > 1) {
                this.dcPredictorY = 128;
                this.dcPredictorCr = 128;
                this.dcPredictorCb = 128;
                if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
                    this.motionFwH = this.motionFwHPrev = 0;
                    this.motionFwV = this.motionFwVPrev = 0;
                }
            }
            while (increment > 1) {
                this.macroblockAddress++;
                this.mbRow = this.macroblockAddress / this.mbWidth | 0;
                this.mbCol = this.macroblockAddress % this.mbWidth;
                this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb);
                increment--;
            }
            this.macroblockAddress++;
        }
        this.mbRow = this.macroblockAddress / this.mbWidth | 0;
        this.mbCol = this.macroblockAddress % this.mbWidth;
        var mbTable = MPEG1.MACROBLOCK_TYPE[this.pictureType];
        this.macroblockType = this.readHuffman(mbTable);
        this.macroblockIntra = this.macroblockType & 1;
        this.macroblockMotFw = this.macroblockType & 8;
        if ((this.macroblockType & 16) !== 0) this.quantizerScale = this.bits.read(5);
        if (this.macroblockIntra) {
            this.motionFwH = this.motionFwHPrev = 0;
            this.motionFwV = this.motionFwVPrev = 0;
        } else {
            this.dcPredictorY = 128;
            this.dcPredictorCr = 128;
            this.dcPredictorCb = 128;
            this.decodeMotionVectors();
            this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb);
        }
        var cbp = (this.macroblockType & 2) !== 0 ? this.readHuffman(MPEG1.CODE_BLOCK_PATTERN) : this.macroblockIntra ? 63 : 0;
        for (var block = 0, mask = 32; block < 6; block++) {
            if ((cbp & mask) !== 0) this.decodeBlock(block);
            mask >>= 1;
        }
    };
    MPEG1.prototype.decodeMotionVectors = function() {
        var code, d, r = 0;
        if (this.macroblockMotFw) {
            code = this.readHuffman(MPEG1.MOTION);
            if (code !== 0 && this.forwardF !== 1) {
                r = this.bits.read(this.forwardRSize);
                d = (Math.abs(code) - 1 << this.forwardRSize) + r + 1;
                if (code < 0) d = -d;
            } else d = code;
            this.motionFwHPrev += d;
            if (this.motionFwHPrev > (this.forwardF << 4) - 1) this.motionFwHPrev -= this.forwardF << 5;
            else {
                if (this.motionFwHPrev < -this.forwardF << 4) this.motionFwHPrev += this.forwardF << 5;
            }
            this.motionFwH = this.motionFwHPrev;
            if (this.fullPelForward) this.motionFwH <<= 1;
            code = this.readHuffman(MPEG1.MOTION);
            if (code !== 0 && this.forwardF !== 1) {
                r = this.bits.read(this.forwardRSize);
                d = (Math.abs(code) - 1 << this.forwardRSize) + r + 1;
                if (code < 0) d = -d;
            } else d = code;
            this.motionFwVPrev += d;
            if (this.motionFwVPrev > (this.forwardF << 4) - 1) this.motionFwVPrev -= this.forwardF << 5;
            else {
                if (this.motionFwVPrev < -this.forwardF << 4) this.motionFwVPrev += this.forwardF << 5;
            }
            this.motionFwV = this.motionFwVPrev;
            if (this.fullPelForward) this.motionFwV <<= 1;
        } else {
            if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
                this.motionFwH = this.motionFwHPrev = 0;
                this.motionFwV = this.motionFwVPrev = 0;
            }
        }
    };
    MPEG1.prototype.copyMacroblock = function(motionH, motionV, sY, sCr, sCb) {
        var width, scan, H, V, oddH, oddV, src, dest, last;
        var dY = this.currentY32,
            dCb = this.currentCb32,
            dCr = this.currentCr32;
        width = this.codedWidth;
        scan = width - 16;
        H = motionH >> 1;
        V = motionV >> 1;
        oddH = (motionH & 1) === 1;
        oddV = (motionV & 1) === 1;
        src = ((this.mbRow << 4) + V) * width + (this.mbCol << 4) + H;
        dest = this.mbRow * width + this.mbCol << 2;
        last = dest + (width << 2);
        var x, y1, y2, y;
        if (oddH)
            if (oddV)
                while (dest < last) {
                    y1 = sY[src] + sY[src + width];
                    src++;
                    for (x = 0; x < 4; x++) {
                        y2 = sY[src] + sY[src + width];
                        src++;
                        y = y1 + y2 + 2 >> 2 & 255;
                        y1 = sY[src] + sY[src + width];
                        src++;
                        y |= y1 + y2 + 2 << 6 & 65280;
                        y2 = sY[src] + sY[src + width];
                        src++;
                        y |= y1 + y2 + 2 << 14 & 16711680;
                        y1 = sY[src] + sY[src + width];
                        src++;
                        y |= y1 + y2 + 2 << 22 & 4278190080;
                        dY[dest++] = y;
                    }
                    dest += scan >> 2;
                    src += scan - 1;
                } else
                    while (dest < last) {
                        y1 = sY[src++];
                        for (x = 0; x < 4; x++) {
                            y2 = sY[src++];
                            y = y1 + y2 + 1 >> 1 & 255;
                            y1 = sY[src++];
                            y |= y1 + y2 + 1 << 7 & 65280;
                            y2 = sY[src++];
                            y |= y1 + y2 + 1 << 15 & 16711680;
                            y1 = sY[src++];
                            y |= y1 + y2 + 1 << 23 & 4278190080;
                            dY[dest++] = y;
                        }
                        dest += scan >> 2;
                        src += scan - 1;
                    } else if (oddV)
                        while (dest < last) {
                            for (x = 0; x < 4; x++) {
                                y = sY[src] + sY[src + width] + 1 >> 1 & 255;
                                src++;
                                y |= sY[src] + sY[src + width] + 1 << 7 & 65280;
                                src++;
                                y |= sY[src] + sY[src + width] + 1 << 15 & 16711680;
                                src++;
                                y |= sY[src] + sY[src + width] + 1 << 23 & 4278190080;
                                src++;
                                dY[dest++] = y;
                            }
                            dest += scan >> 2;
                            src += scan;
                        } else
                            while (dest < last) {
                                for (x = 0; x < 4; x++) {
                                    y = sY[src];
                                    src++;
                                    y |= sY[src] << 8;
                                    src++;
                                    y |= sY[src] << 16;
                                    src++;
                                    y |= sY[src] << 24;
                                    src++;
                                    dY[dest++] = y;
                                }
                                dest += scan >> 2;
                                src += scan;
                            }
        width = this.halfWidth;
        scan = width - 8;
        H = motionH / 2 >> 1;
        V = motionV / 2 >> 1;
        oddH = (motionH / 2 & 1) === 1;
        oddV = (motionV / 2 & 1) === 1;
        src = ((this.mbRow << 3) + V) * width + (this.mbCol << 3) + H;
        dest = this.mbRow * width + this.mbCol << 1;
        last = dest + (width << 1);
        var cr1, cr2, cr, cb1, cb2, cb;
        if (oddH)
            if (oddV)
                while (dest < last) {
                    cr1 = sCr[src] + sCr[src + width];
                    cb1 = sCb[src] + sCb[src + width];
                    src++;
                    for (x = 0; x < 2; x++) {
                        cr2 = sCr[src] + sCr[src + width];
                        cb2 = sCb[src] + sCb[src + width];
                        src++;
                        cr = cr1 + cr2 + 2 >> 2 & 255;
                        cb = cb1 + cb2 + 2 >> 2 & 255;
                        cr1 = sCr[src] + sCr[src + width];
                        cb1 = sCb[src] + sCb[src + width];
                        src++;
                        cr |= cr1 + cr2 + 2 << 6 & 65280;
                        cb |= cb1 + cb2 + 2 << 6 & 65280;
                        cr2 = sCr[src] + sCr[src + width];
                        cb2 = sCb[src] + sCb[src + width];
                        src++;
                        cr |= cr1 + cr2 + 2 << 14 & 16711680;
                        cb |= cb1 + cb2 + 2 << 14 & 16711680;
                        cr1 = sCr[src] + sCr[src + width];
                        cb1 = sCb[src] + sCb[src + width];
                        src++;
                        cr |= cr1 + cr2 + 2 << 22 & 4278190080;
                        cb |= cb1 + cb2 + 2 << 22 & 4278190080;
                        dCr[dest] = cr;
                        dCb[dest] = cb;
                        dest++;
                    }
                    dest += scan >> 2;
                    src += scan - 1;
                } else
                    while (dest < last) {
                        cr1 = sCr[src];
                        cb1 = sCb[src];
                        src++;
                        for (x = 0; x < 2; x++) {
                            cr2 = sCr[src];
                            cb2 = sCb[src++];
                            cr = cr1 + cr2 + 1 >> 1 & 255;
                            cb = cb1 + cb2 + 1 >> 1 & 255;
                            cr1 = sCr[src];
                            cb1 = sCb[src++];
                            cr |= cr1 + cr2 + 1 << 7 & 65280;
                            cb |= cb1 + cb2 + 1 << 7 & 65280;
                            cr2 = sCr[src];
                            cb2 = sCb[src++];
                            cr |= cr1 + cr2 + 1 << 15 & 16711680;
                            cb |= cb1 + cb2 + 1 << 15 & 16711680;
                            cr1 = sCr[src];
                            cb1 = sCb[src++];
                            cr |= cr1 + cr2 + 1 << 23 & 4278190080;
                            cb |= cb1 + cb2 + 1 << 23 & 4278190080;
                            dCr[dest] = cr;
                            dCb[dest] = cb;
                            dest++;
                        }
                        dest += scan >> 2;
                        src += scan - 1;
                    } else if (oddV)
                        while (dest < last) {
                            for (x = 0; x < 2; x++) {
                                cr = sCr[src] + sCr[src + width] + 1 >> 1 & 255;
                                cb = sCb[src] + sCb[src + width] + 1 >> 1 & 255;
                                src++;
                                cr |= sCr[src] + sCr[src + width] + 1 << 7 & 65280;
                                cb |= sCb[src] + sCb[src + width] + 1 << 7 & 65280;
                                src++;
                                cr |= sCr[src] + sCr[src + width] + 1 << 15 & 16711680;
                                cb |= sCb[src] + sCb[src + width] + 1 << 15 & 16711680;
                                src++;
                                cr |= sCr[src] + sCr[src + width] + 1 << 23 & 4278190080;
                                cb |= sCb[src] + sCb[src + width] + 1 << 23 & 4278190080;
                                src++;
                                dCr[dest] = cr;
                                dCb[dest] = cb;
                                dest++;
                            }
                            dest += scan >> 2;
                            src += scan;
                        } else
                            while (dest < last) {
                                for (x = 0; x < 2; x++) {
                                    cr = sCr[src];
                                    cb = sCb[src];
                                    src++;
                                    cr |= sCr[src] << 8;
                                    cb |= sCb[src] << 8;
                                    src++;
                                    cr |= sCr[src] << 16;
                                    cb |= sCb[src] << 16;
                                    src++;
                                    cr |= sCr[src] << 24;
                                    cb |= sCb[src] << 24;
                                    src++;
                                    dCr[dest] = cr;
                                    dCb[dest] = cb;
                                    dest++;
                                }
                                dest += scan >> 2;
                                src += scan;
                            }
    };
    MPEG1.prototype.dcPredictorY = 0;
    MPEG1.prototype.dcPredictorCr = 0;
    MPEG1.prototype.dcPredictorCb = 0;
    MPEG1.prototype.blockData = null;
    MPEG1.prototype.decodeBlock = function(block) {
        var n = 0,
            quantMatrix;
        if (this.macroblockIntra) {
            var predictor, dctSize;
            if (block < 4) {
                predictor = this.dcPredictorY;
                dctSize = this.readHuffman(MPEG1.DCT_DC_SIZE_LUMINANCE);
            } else {
                predictor = block === 4 ? this.dcPredictorCr : this.dcPredictorCb;
                dctSize = this.readHuffman(MPEG1.DCT_DC_SIZE_CHROMINANCE);
            }
            if (dctSize > 0) {
                var differential = this.bits.read(dctSize);
                if ((differential & 1 << dctSize - 1) !== 0) this.blockData[0] = predictor + differential;
                else this.blockData[0] = predictor + (-1 << dctSize | differential + 1);
            } else this.blockData[0] = predictor;
            if (block < 4) this.dcPredictorY = this.blockData[0];
            else if (block === 4) this.dcPredictorCr = this.blockData[0];
            else this.dcPredictorCb = this.blockData[0];
            this.blockData[0] <<= 3 + 5;
            quantMatrix = this.intraQuantMatrix;
            n = 1;
        } else quantMatrix = this.nonIntraQuantMatrix;
        var level = 0;
        while (true) {
            var run = 0,
                coeff = this.readHuffman(MPEG1.DCT_COEFF);
            if (coeff === 1 && n > 0 && this.bits.read(1) === 0) break;
            if (coeff === 65535) {
                run = this.bits.read(6);
                level = this.bits.read(8);
                if (level === 0) level = this.bits.read(8);
                else if (level === 128) level = this.bits.read(8) - 256;
                else {
                    if (level > 128) level = level - 256;
                }
            } else {
                run = coeff >> 8;
                level = coeff & 255;
                if (this.bits.read(1)) level = -level;
            }
            n += run;
            var dezigZagged = MPEG1.ZIG_ZAG[n];
            n++;
            level <<= 1;
            if (!this.macroblockIntra) level += level < 0 ? -1 : 1;
            level = level * this.quantizerScale * quantMatrix[dezigZagged] >> 4;
            if ((level & 1) === 0) level -= level > 0 ? 1 : -1;
            if (level > 2047) level = 2047;
            else {
                if (level < -2048) level = -2048;
            }
            this.blockData[dezigZagged] = level * MPEG1.PREMULTIPLIER_MATRIX[dezigZagged];
        }
        var destArray, destIndex, scan;
        if (block < 4) {
            destArray = this.currentY;
            scan = this.codedWidth - 8;
            destIndex = this.mbRow * this.codedWidth + this.mbCol << 4;
            if ((block & 1) !== 0) destIndex += 8;
            if ((block & 2) !== 0) destIndex += this.codedWidth << 3;
        } else {
            destArray = block === 4 ? this.currentCb : this.currentCr;
            scan = (this.codedWidth >> 1) - 8;
            destIndex = (this.mbRow * this.codedWidth << 2) + (this.mbCol << 3);
        }
        if (this.macroblockIntra)
            if (n === 1) {
                MPEG1.CopyValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
                this.blockData[0] = 0;
            } else {
                MPEG1.IDCT(this.blockData);
                MPEG1.CopyBlockToDestination(this.blockData, destArray, destIndex, scan);
                JSMpeg.Fill(this.blockData, 0);
            }
        else if (n === 1) {
            MPEG1.AddValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
            this.blockData[0] = 0;
        } else {
            MPEG1.IDCT(this.blockData);
            MPEG1.AddBlockToDestination(this.blockData, destArray, destIndex, scan);
            JSMpeg.Fill(this.blockData, 0);
        }
        n = 0;
    };
    MPEG1.CopyBlockToDestination = function(block, dest, index, scan) {
        for (var n = 0; n < 64; n += 8, index += scan + 8) {
            dest[index + 0] = block[n + 0];
            dest[index + 1] = block[n + 1];
            dest[index + 2] = block[n + 2];
            dest[index + 3] = block[n + 3];
            dest[index + 4] = block[n + 4];
            dest[index + 5] = block[n + 5];
            dest[index + 6] = block[n + 6];
            dest[index + 7] = block[n + 7];
        }
    };
    MPEG1.AddBlockToDestination = function(block, dest, index, scan) {
        for (var n = 0; n < 64; n += 8, index += scan + 8) {
            dest[index + 0] += block[n + 0];
            dest[index + 1] += block[n + 1];
            dest[index + 2] += block[n + 2];
            dest[index + 3] += block[n + 3];
            dest[index + 4] += block[n + 4];
            dest[index + 5] += block[n + 5];
            dest[index + 6] += block[n + 6];
            dest[index + 7] += block[n + 7];
        }
    };
    MPEG1.CopyValueToDestination = function(value, dest, index, scan) {
        for (var n = 0; n < 64; n += 8, index += scan + 8) {
            dest[index + 0] = value;
            dest[index + 1] = value;
            dest[index + 2] = value;
            dest[index + 3] = value;
            dest[index + 4] = value;
            dest[index + 5] = value;
            dest[index + 6] = value;
            dest[index + 7] = value;
        }
    };
    MPEG1.AddValueToDestination = function(value, dest, index, scan) {
        for (var n = 0; n < 64; n += 8, index += scan + 8) {
            dest[index + 0] += value;
            dest[index + 1] += value;
            dest[index + 2] += value;
            dest[index + 3] += value;
            dest[index + 4] += value;
            dest[index + 5] += value;
            dest[index + 6] += value;
            dest[index + 7] += value;
        }
    };
    MPEG1.IDCT = function(block) {
        var b1, b3, b4, b6, b7, tmp1, tmp2, m0, x0, x1, x2, x3, x4, y3, y4, y5, y6, y7;
        for (var i = 0; i < 8; ++i) {
            b1 = block[4 * 8 + i];
            b3 = block[2 * 8 + i] + block[6 * 8 + i];
            b4 = block[5 * 8 + i] - block[3 * 8 + i];
            tmp1 = block[1 * 8 + i] + block[7 * 8 + i];
            tmp2 = block[3 * 8 + i] + block[5 * 8 + i];
            b6 = block[1 * 8 + i] - block[7 * 8 + i];
            b7 = tmp1 + tmp2;
            m0 = block[0 * 8 + i];
            x4 = (b6 * 473 - b4 * 196 + 128 >> 8) - b7;
            x0 = x4 - ((tmp1 - tmp2) * 362 + 128 >> 8);
            x1 = m0 - b1;
            x2 = ((block[2 * 8 + i] - block[6 * 8 + i]) * 362 + 128 >> 8) - b3;
            x3 = m0 + b1;
            y3 = x1 + x2;
            y4 = x3 + b3;
            y5 = x1 - x2;
            y6 = x3 - b3;
            y7 = -x0 - (b4 * 473 + b6 * 196 + 128 >> 8);
            block[0 * 8 + i] = b7 + y4;
            block[1 * 8 + i] = x4 + y3;
            block[2 * 8 + i] = y5 - x0;
            block[3 * 8 + i] = y6 - y7;
            block[4 * 8 + i] = y6 + y7;
            block[5 * 8 + i] = x0 + y5;
            block[6 * 8 + i] = y3 - x4;
            block[7 * 8 + i] = y4 - b7;
        }
        for (var i = 0; i < 64; i += 8) {
            b1 = block[4 + i];
            b3 = block[2 + i] + block[6 + i];
            b4 = block[5 + i] - block[3 + i];
            tmp1 = block[1 + i] + block[7 + i];
            tmp2 = block[3 + i] + block[5 + i];
            b6 = block[1 + i] - block[7 + i];
            b7 = tmp1 + tmp2;
            m0 = block[0 + i];
            x4 = (b6 * 473 - b4 * 196 + 128 >> 8) - b7;
            x0 = x4 - ((tmp1 - tmp2) * 362 + 128 >> 8);
            x1 = m0 - b1;
            x2 = ((block[2 + i] - block[6 + i]) * 362 + 128 >> 8) - b3;
            x3 = m0 + b1;
            y3 = x1 + x2;
            y4 = x3 + b3;
            y5 = x1 - x2;
            y6 = x3 - b3;
            y7 = -x0 - (b4 * 473 + b6 * 196 + 128 >> 8);
            block[0 + i] = b7 + y4 + 128 >> 8;
            block[1 + i] = x4 + y3 + 128 >> 8;
            block[2 + i] = y5 - x0 + 128 >> 8;
            block[3 + i] = y6 - y7 + 128 >> 8;
            block[4 + i] = y6 + y7 + 128 >> 8;
            block[5 + i] = x0 + y5 + 128 >> 8;
            block[6 + i] = y3 - x4 + 128 >> 8;
            block[7 + i] = y4 - b7 + 128 >> 8;
        }
    };
    MPEG1.PICTURE_RATE = [0, 23.976, 24, 25, 29.97, 30, 50, 59.94, 60, 0, 0, 0, 0, 0, 0, 0];
    MPEG1.ZIG_ZAG = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
    MPEG1.DEFAULT_INTRA_QUANT_MATRIX = new Uint8Array([8, 16, 19, 22, 26, 27, 29, 34, 16, 16, 22, 24, 27, 29, 34, 37, 19, 22, 26, 27, 29, 34, 34, 38, 22, 22, 26, 27, 29, 34, 37, 40, 22, 26, 27, 29, 32, 35, 40, 48, 26, 27, 29, 32, 35, 40, 48, 58, 26, 27, 29, 34, 38, 46, 56, 69, 27, 29, 35, 38, 46, 56, 69, 83]);
    MPEG1.DEFAULT_NON_INTRA_QUANT_MATRIX = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]);
    MPEG1.PREMULTIPLIER_MATRIX = new Uint8Array([32, 44, 42, 38, 32, 25, 17, 9, 44, 62, 58, 52, 44, 35, 24, 12, 42, 58, 55, 49, 42, 33, 23, 12, 38, 52, 49, 44, 38, 30, 20, 10, 32, 44, 42, 38, 32, 25, 17, 9, 25, 35, 33, 30, 25, 20, 14, 7, 17, 24, 23, 20, 17, 14, 9, 5, 9, 12, 12, 10, 9, 7, 5, 2]);
    MPEG1.MACROBLOCK_ADDRESS_INCREMENT = new Int16Array([1 * 3, 2 * 3, 0, 3 * 3, 4 * 3, 0, 0, 0, 1, 5 * 3, 6 * 3, 0, 7 * 3, 8 * 3, 0, 9 * 3, 10 * 3, 0, 11 * 3, 12 * 3, 0, 0, 0, 3, 0, 0, 2, 13 * 3, 14 * 3, 0, 15 * 3, 16 * 3, 0, 0, 0, 5, 0, 0, 4, 17 * 3, 18 * 3, 0, 19 * 3, 20 * 3, 0, 0, 0, 7, 0, 0, 6, 21 * 3, 22 * 3, 0, 23 * 3, 24 * 3, 0, 25 * 3, 26 * 3, 0, 27 * 3, 28 * 3, 0, -1, 29 * 3, 0, -1, 30 * 3, 0, 31 * 3, 32 * 3, 0, 33 * 3, 34 * 3, 0, 35 * 3, 36 * 3, 0, 37 * 3, 38 * 3, 0, 0, 0, 9, 0, 0, 8, 39 * 3, 40 * 3, 0, 41 * 3, 42 * 3, 0, 43 * 3, 44 * 3, 0, 45 * 3, 46 * 3, 0, 0, 0, 15, 0, 0, 14, 0, 0, 13, 0, 0, 12, 0, 0, 11, 0, 0, 10, 47 * 3, -1, 0, -1, 48 * 3, 0, 49 * 3, 50 * 3, 0, 51 * 3, 52 * 3, 0, 53 * 3, 54 * 3, 0, 55 * 3, 56 * 3, 0, 57 * 3, 58 * 3, 0, 59 * 3, 60 * 3, 0, 61 * 3, -1, 0, -1, 62 * 3, 0, 63 * 3, 64 * 3, 0, 65 * 3, 66 * 3, 0, 67 * 3, 68 * 3, 0, 69 * 3, 70 * 3, 0, 71 * 3, 72 * 3, 0, 73 * 3, 74 * 3, 0, 0, 0, 21, 0, 0, 20, 0, 0, 19, 0, 0, 18, 0, 0, 17, 0, 0, 16, 0, 0, 35, 0, 0, 34, 0, 0, 33, 0, 0, 32, 0, 0, 31, 0, 0, 30, 0, 0, 29, 0, 0, 28, 0, 0, 27, 0, 0, 26, 0, 0, 25, 0, 0, 24, 0, 0, 23, 0, 0, 22]);
    MPEG1.MACROBLOCK_TYPE_INTRA = new Int8Array([1 * 3, 2 * 3, 0, -1, 3 * 3, 0, 0, 0, 1, 0, 0, 17]);
    MPEG1.MACROBLOCK_TYPE_PREDICTIVE = new Int8Array([1 * 3, 2 * 3, 0, 3 * 3, 4 * 3, 0, 0, 0, 10, 5 * 3, 6 * 3, 0, 0, 0, 2, 7 * 3, 8 * 3, 0, 0, 0, 8, 9 * 3, 10 * 3, 0, 11 * 3, 12 * 3, 0, -1, 13 * 3, 0, 0, 0, 18, 0, 0, 26, 0, 0, 1, 0, 0, 17]);
    MPEG1.MACROBLOCK_TYPE_B = new Int8Array([1 * 3, 2 * 3, 0, 3 * 3, 5 * 3, 0, 4 * 3, 6 * 3, 0, 8 * 3, 7 * 3, 0, 0, 0, 12, 9 * 3, 10 * 3, 0, 0, 0, 14, 13 * 3, 14 * 3, 0, 12 * 3, 11 * 3, 0, 0, 0, 4, 0, 0, 6, 18 * 3, 16 * 3, 0, 15 * 3, 17 * 3, 0, 0, 0, 8, 0, 0, 10, -1, 19 * 3, 0, 0, 0, 1, 20 * 3, 21 * 3, 0, 0, 0, 30, 0, 0, 17, 0, 0, 22, 0, 0, 26]);
    MPEG1.MACROBLOCK_TYPE = [null, MPEG1.MACROBLOCK_TYPE_INTRA, MPEG1.MACROBLOCK_TYPE_PREDICTIVE, MPEG1.MACROBLOCK_TYPE_B];
    MPEG1.CODE_BLOCK_PATTERN = new Int16Array([2 * 3, 1 * 3, 0, 3 * 3, 6 * 3, 0, 4 * 3, 5 * 3, 0, 8 * 3, 11 * 3, 0, 12 * 3, 13 * 3, 0, 9 * 3, 7 * 3, 0, 10 * 3, 14 * 3, 0, 20 * 3, 19 * 3, 0, 18 * 3, 16 * 3, 0, 23 * 3, 17 * 3, 0, 27 * 3, 25 * 3, 0, 21 * 3, 28 * 3, 0, 15 * 3, 22 * 3, 0, 24 * 3, 26 * 3, 0, 0, 0, 60, 35 * 3, 40 * 3, 0, 44 * 3, 48 * 3, 0, 38 * 3, 36 * 3, 0, 42 * 3, 47 * 3, 0, 29 * 3, 31 * 3, 0, 39 * 3, 32 * 3, 0, 0, 0, 32, 45 * 3, 46 * 3, 0, 33 * 3, 41 * 3, 0, 43 * 3, 34 * 3, 0, 0, 0, 4, 30 * 3, 37 * 3, 0, 0, 0, 8, 0, 0, 16, 0, 0, 44, 50 * 3, 56 * 3, 0, 0, 0, 28, 0, 0, 52, 0, 0, 62, 61 * 3, 59 * 3, 0, 52 * 3, 60 * 3, 0, 0, 0, 1, 55 * 3, 54 * 3, 0, 0, 0, 61, 0, 0, 56, 57 * 3, 58 * 3, 0, 0, 0, 2, 0, 0, 40, 51 * 3, 62 * 3, 0, 0, 0, 48, 64 * 3, 63 * 3, 0, 49 * 3, 53 * 3, 0, 0, 0, 20, 0, 0, 12, 80 * 3, 83 * 3, 0, 0, 0, 63, 77 * 3, 75 * 3, 0, 65 * 3, 73 * 3, 0, 84 * 3, 66 * 3, 0, 0, 0, 24, 0, 0, 36, 0, 0, 3, 69 * 3, 87 * 3, 0, 81 * 3, 79 * 3, 0, 68 * 3, 71 * 3, 0, 70 * 3, 78 * 3, 0, 67 * 3, 76 * 3, 0, 72 * 3, 74 * 3, 0, 86 * 3, 85 * 3, 0, 88 * 3, 82 * 3, 0, -1, 94 * 3, 0, 95 * 3, 97 * 3, 0, 0, 0, 33, 0, 0, 9, 106 * 3, 110 * 3, 0, 102 * 3, 116 * 3, 0, 0, 0, 5, 0, 0, 10, 93 * 3, 89 * 3, 0, 0, 0, 6, 0, 0, 18, 0, 0, 17, 0, 0, 34, 113 * 3, 119 * 3, 0, 103 * 3, 104 * 3, 0, 90 * 3, 92 * 3, 0, 109 * 3, 107 * 3, 0, 117 * 3, 118 * 3, 0, 101 * 3, 99 * 3, 0, 98 * 3, 96 * 3, 0, 100 * 3, 91 * 3, 0, 114 * 3, 115 * 3, 0, 105 * 3, 108 * 3, 0, 112 * 3, 111 * 3, 0, 121 * 3, 125 * 3, 0, 0, 0, 41, 0, 0, 14, 0, 0, 21, 124 * 3, 122 * 3, 0, 120 * 3, 123 * 3, 0, 0, 0, 11, 0, 0, 19, 0, 0, 7, 0, 0, 35, 0, 0, 13, 0, 0, 50, 0, 0, 49, 0, 0, 58, 0, 0, 37, 0, 0, 25, 0, 0, 45, 0, 0, 57, 0, 0, 26, 0, 0, 29, 0, 0, 38, 0, 0, 53, 0, 0, 23, 0, 0, 43, 0, 0, 46, 0, 0, 42, 0, 0, 22, 0, 0, 54, 0, 0, 51, 0, 0, 15, 0, 0, 30, 0, 0, 39, 0, 0, 47, 0, 0, 55, 0, 0, 27, 0, 0, 59, 0, 0, 31]);
    MPEG1.MOTION = new Int16Array([1 * 3, 2 * 3, 0, 4 * 3, 3 * 3, 0, 0, 0, 0, 6 * 3, 5 * 3, 0, 8 * 3, 7 * 3, 0, 0, 0, -1, 0, 0, 1, 9 * 3, 10 * 3, 0, 12 * 3, 11 * 3, 0, 0, 0, 2, 0, 0, -2, 14 * 3, 15 * 3, 0, 16 * 3, 13 * 3, 0, 20 * 3, 18 * 3, 0, 0, 0, 3, 0, 0, -3, 17 * 3, 19 * 3, 0, -1, 23 * 3, 0, 27 * 3, 25 * 3, 0, 26 * 3, 21 * 3, 0, 24 * 3, 22 * 3, 0, 32 * 3, 28 * 3, 0, 29 * 3, 31 * 3, 0, -1, 33 * 3, 0, 36 * 3, 35 * 3, 0, 0, 0, -4, 30 * 3, 34 * 3, 0, 0, 0, 4, 0, 0, -7, 0, 0, 5, 37 * 3, 41 * 3, 0, 0, 0, -5, 0, 0, 7, 38 * 3, 40 * 3, 0, 42 * 3, 39 * 3, 0, 0, 0, -6, 0, 0, 6, 51 * 3, 54 * 3, 0, 50 * 3, 49 * 3, 0, 45 * 3, 46 * 3, 0, 52 * 3, 47 * 3, 0, 43 * 3, 53 * 3, 0, 44 * 3, 48 * 3, 0, 0, 0, 10, 0, 0, 9, 0, 0, 8, 0, 0, -8, 57 * 3, 66 * 3, 0, 0, 0, -9, 60 * 3, 64 * 3, 0, 56 * 3, 61 * 3, 0, 55 * 3, 62 * 3, 0, 58 * 3, 63 * 3, 0, 0, 0, -10, 59 * 3, 65 * 3, 0, 0, 0, 12, 0, 0, 16, 0, 0, 13, 0, 0, 14, 0, 0, 11, 0, 0, 15, 0, 0, -16, 0, 0, -12, 0, 0, -14, 0, 0, -15, 0, 0, -11, 0, 0, -13]);
    MPEG1.DCT_DC_SIZE_LUMINANCE = new Int8Array([2 * 3, 1 * 3, 0, 6 * 3, 5 * 3, 0, 3 * 3, 4 * 3, 0, 0, 0, 1, 0, 0, 2, 9 * 3, 8 * 3, 0, 7 * 3, 10 * 3, 0, 0, 0, 0, 12 * 3, 11 * 3, 0, 0, 0, 4, 0, 0, 3, 13 * 3, 14 * 3, 0, 0, 0, 5, 0, 0, 6, 16 * 3, 15 * 3, 0, 17 * 3, -1, 0, 0, 0, 7, 0, 0, 8]);
    MPEG1.DCT_DC_SIZE_CHROMINANCE = new Int8Array([2 * 3, 1 * 3, 0, 4 * 3, 3 * 3, 0, 6 * 3, 5 * 3, 0, 8 * 3, 7 * 3, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 10 * 3, 9 * 3, 0, 0, 0, 3, 12 * 3, 11 * 3, 0, 0, 0, 4, 14 * 3, 13 * 3, 0, 0, 0, 5, 16 * 3, 15 * 3, 0, 0, 0, 6, 17 * 3, -1, 0, 0, 0, 7, 0, 0, 8]);
    MPEG1.DCT_COEFF = new Int32Array([1 * 3, 2 * 3, 0, 4 * 3, 3 * 3, 0, 0, 0, 1, 7 * 3, 8 * 3, 0, 6 * 3, 5 * 3, 0, 13 * 3, 9 * 3, 0, 11 * 3, 10 * 3, 0, 14 * 3, 12 * 3, 0, 0, 0, 257, 20 * 3, 22 * 3, 0, 18 * 3, 21 * 3, 0, 16 * 3, 19 * 3, 0, 0, 0, 513, 17 * 3, 15 * 3, 0, 0, 0, 2, 0, 0, 3, 27 * 3, 25 * 3, 0, 29 * 3, 31 * 3, 0, 24 * 3, 26 * 3, 0, 32 * 3, 30 * 3, 0, 0, 0, 1025, 23 * 3, 28 * 3, 0, 0, 0, 769, 0, 0, 258, 0, 0, 1793, 0, 0, 65535, 0, 0, 1537, 37 * 3, 36 * 3, 0, 0, 0, 1281, 35 * 3, 34 * 3, 0, 39 * 3, 38 * 3, 0, 33 * 3, 42 * 3, 0, 40 * 3, 41 * 3, 0, 52 * 3, 50 * 3, 0, 54 * 3, 53 * 3, 0, 48 * 3, 49 * 3, 0, 43 * 3, 45 * 3, 0, 46 * 3, 44 * 3, 0, 0, 0, 2049, 0, 0, 4, 0, 0, 514, 0, 0, 2305, 51 * 3, 47 * 3, 0, 55 * 3, 57 * 3, 0, 60 * 3, 56 * 3, 0, 59 * 3, 58 * 3, 0, 61 * 3, 62 * 3, 0, 0, 0, 2561, 0, 0, 3329, 0, 0, 6, 0, 0, 259, 0, 0, 5, 0, 0, 770, 0, 0, 2817, 0, 0, 3073, 76 * 3, 75 * 3, 0, 67 * 3, 70 * 3, 0, 73 * 3, 71 * 3, 0, 78 * 3, 74 * 3, 0, 72 * 3, 77 * 3, 0, 69 * 3, 64 * 3, 0, 68 * 3, 63 * 3, 0, 66 * 3, 65 * 3, 0, 81 * 3, 87 * 3, 0, 91 * 3, 80 * 3, 0, 82 * 3, 79 * 3, 0, 83 * 3, 86 * 3, 0, 93 * 3, 92 * 3, 0, 84 * 3, 85 * 3, 0, 90 * 3, 94 * 3, 0, 88 * 3, 89 * 3, 0, 0, 0, 515, 0, 0, 260, 0, 0, 7, 0, 0, 1026, 0, 0, 1282, 0, 0, 4097, 0, 0, 3841, 0, 0, 3585, 105 * 3, 107 * 3, 0, 111 * 3, 114 * 3, 0, 104 * 3, 97 * 3, 0, 125 * 3, 119 * 3, 0, 96 * 3, 98 * 3, 0, -1, 123 * 3, 0, 95 * 3, 101 * 3, 0, 106 * 3, 121 * 3, 0, 99 * 3, 102 * 3, 0, 113 * 3, 103 * 3, 0, 112 * 3, 116 * 3, 0, 110 * 3, 100 * 3, 0, 124 * 3, 115 * 3, 0, 117 * 3, 122 * 3, 0, 109 * 3, 118 * 3, 0, 120 * 3, 108 * 3, 0, 127 * 3, 136 * 3, 0, 139 * 3, 140 * 3, 0, 130 * 3, 126 * 3, 0, 145 * 3, 146 * 3, 0, 128 * 3, 129 * 3, 0, 0, 0, 2050, 132 * 3, 134 * 3, 0, 155 * 3, 154 * 3, 0, 0, 0, 8, 137 * 3, 133 * 3, 0, 143 * 3, 144 * 3, 0, 151 * 3, 138 * 3, 0, 142 * 3, 141 * 3, 0, 0, 0, 10, 0, 0, 9, 0, 0, 11, 0, 0, 5377, 0, 0, 1538, 0, 0, 771, 0, 0, 5121, 0, 0, 1794, 0, 0, 4353, 0, 0, 4609, 0, 0, 4865, 148 * 3, 152 * 3, 0, 0, 0, 1027, 153 * 3, 150 * 3, 0, 0, 0, 261, 131 * 3, 135 * 3, 0, 0, 0, 516, 149 * 3, 147 * 3, 0, 172 * 3, 173 * 3, 0, 162 * 3, 158 * 3, 0, 170 * 3, 161 * 3, 0, 168 * 3, 166 * 3, 0, 157 * 3, 179 * 3, 0, 169 * 3, 167 * 3, 0, 174 * 3, 171 * 3, 0, 178 * 3, 177 * 3, 0, 156 * 3, 159 * 3, 0, 164 * 3, 165 * 3, 0, 183 * 3, 182 * 3, 0, 175 * 3, 176 * 3, 0, 0, 0, 263, 0, 0, 2562, 0, 0, 2306, 0, 0, 5633, 0, 0, 5889, 0, 0, 6401, 0, 0, 6145, 0, 0, 1283, 0, 0, 772, 0, 0, 13, 0, 0, 12, 0, 0, 14, 0, 0, 15, 0, 0, 517, 0, 0, 6657, 0, 0, 262, 180 * 3, 181 * 3, 0, 160 * 3, 163 * 3, 0, 196 * 3, 199 * 3, 0, 0, 0, 27, 203 * 3, 185 * 3, 0, 202 * 3, 201 * 3, 0, 0, 0, 19, 0, 0, 22, 197 * 3, 207 * 3, 0, 0, 0, 18, 191 * 3, 192 * 3, 0, 188 * 3, 190 * 3, 0, 0, 0, 20, 184 * 3, 194 * 3, 0, 0, 0, 21, 186 * 3, 193 * 3, 0, 0, 0, 23, 204 * 3, 198 * 3, 0, 0, 0, 25, 0, 0, 24, 200 * 3, 205 * 3, 0, 0, 0, 31, 0, 0, 30, 0, 0, 28, 0, 0, 29, 0, 0, 26, 0, 0, 17, 0, 0, 16, 189 * 3, 206 * 3, 0, 187 * 3, 195 * 3, 0, 218 * 3, 211 * 3, 0, 0, 0, 37, 215 * 3, 216 * 3, 0, 0, 0, 36, 210 * 3, 212 * 3, 0, 0, 0, 34, 213 * 3, 209 * 3, 0, 221 * 3, 222 * 3, 0, 219 * 3, 208 * 3, 0, 217 * 3, 214 * 3, 0, 223 * 3, 220 * 3, 0, 0, 0, 35, 0, 0, 267, 0, 0, 40, 0, 0, 268, 0, 0, 266, 0, 0, 32, 0, 0, 264, 0, 0, 265, 0, 0, 38, 0, 0, 269, 0, 0, 270, 0, 0, 33, 0, 0, 39, 0, 0, 7937, 0, 0, 6913, 0, 0, 7681, 0, 0, 4098, 0, 0, 7425, 0, 0, 7169, 0, 0, 271, 0, 0, 274, 0, 0, 273, 0, 0, 272, 0, 0, 1539, 0, 0, 2818, 0, 0, 3586, 0, 0, 3330, 0, 0, 3074, 0, 0, 3842]);
    MPEG1.PICTURE_TYPE = {
        INTRA: 1,
        PREDICTIVE: 2,
        B: 3
    };
    MPEG1.START = {
        SEQUENCE: 179,
        SLICE_FIRST: 1,
        SLICE_LAST: 175,
        PICTURE: 0,
        EXTENSION: 181,
        USER_DATA: 178
    };
    return MPEG1;
}();
JSMpeg.Decoder.MPEG1VideoWASM = function() {
    "use strict";
    var MPEG1WASM = function(options) {
        JSMpeg.Decoder.Base.call(this, options);
        this.onDecodeCallback = options.onVideoDecode;
        this.module = options.wasmModule;
        this.bufferSize = options.videoBufferSize || 512 * 1024;
        this.bufferMode = options.streaming ? JSMpeg.BitBuffer.MODE.EVICT : JSMpeg.BitBuffer.MODE.EXPAND;
        this.decodeFirstFrame = options.decodeFirstFrame !== false;
        this.hasSequenceHeader = false;
    };
    MPEG1WASM.prototype = Object.create(JSMpeg.Decoder.Base.prototype);
    MPEG1WASM.prototype.constructor = MPEG1WASM;
    MPEG1WASM.prototype.initializeWasmDecoder = function() {
        if (!this.module.instance) {
            console.warn("JSMpeg: WASM module not compiled yet");
            return;
        }
        this.instance = this.module.instance;
        this.functions = this.module.instance.exports;
        this.decoder = this.functions._mpeg1_decoder_create(this.bufferSize, this.bufferMode);
    };
    MPEG1WASM.prototype.destroy = function() {
        if (!this.decoder) return;
        this.functions._mpeg1_decoder_destroy(this.decoder);
    };
    MPEG1WASM.prototype.bufferGetIndex = function() {
        if (!this.decoder) return;
        return this.functions._mpeg1_decoder_get_index(this.decoder);
    };
    MPEG1WASM.prototype.bufferSetIndex = function(index) {
        if (!this.decoder) return;
        this.functions._mpeg1_decoder_set_index(this.decoder, index);
    };
    MPEG1WASM.prototype.bufferWrite = function(buffers) {
        if (!this.decoder) this.initializeWasmDecoder();
        var totalLength = 0;
        for (var i = 0; i < buffers.length; i++) totalLength += buffers[i].length;
        var ptr = this.functions._mpeg1_decoder_get_write_ptr(this.decoder, totalLength);
        for (var i = 0; i < buffers.length; i++) {
            this.instance.heapU8.set(buffers[i], ptr);
            ptr += buffers[i].length;
        }
        this.functions._mpeg1_decoder_did_write(this.decoder, totalLength);
        return totalLength;
    };
    MPEG1WASM.prototype.write = function(pts, buffers) {
        JSMpeg.Decoder.Base.prototype.write.call(this, pts, buffers);
        if (!this.hasSequenceHeader && this.functions._mpeg1_decoder_has_sequence_header(this.decoder)) this.loadSequnceHeader();
    };
    MPEG1WASM.prototype.loadSequnceHeader = function() {
        this.hasSequenceHeader = true;
        this.frameRate = this.functions._mpeg1_decoder_get_frame_rate(this.decoder);
        this.codedSize = this.functions._mpeg1_decoder_get_coded_size(this.decoder);
        if (this.destination) {
            var w = this.functions._mpeg1_decoder_get_width(this.decoder);
            var h = this.functions._mpeg1_decoder_get_height(this.decoder);
            this.destination.resize(w, h);
        }
        if (this.decodeFirstFrame) this.decode();
    };
    MPEG1WASM.prototype.decode = function() {
        var startTime = JSMpeg.Now();
        if (!this.decoder) return false;
        var didDecode = this.functions._mpeg1_decoder_decode(this.decoder);
        if (!didDecode) return false;
        if (this.destination) {
            var ptrY = this.functions._mpeg1_decoder_get_y_ptr(this.decoder),
                ptrCr = this.functions._mpeg1_decoder_get_cr_ptr(this.decoder),
                ptrCb = this.functions._mpeg1_decoder_get_cb_ptr(this.decoder);
            var dy = this.instance.heapU8.subarray(ptrY, ptrY + this.codedSize);
            var dcr = this.instance.heapU8.subarray(ptrCr, ptrCr + (this.codedSize >> 2));
            var dcb = this.instance.heapU8.subarray(ptrCb, ptrCb + (this.codedSize >> 2));
            this.destination.render(dy, dcr, dcb, false);
        }
        this.advanceDecodedTime(1 / this.frameRate);
        var elapsedTime = JSMpeg.Now() - startTime;
        if (this.onDecodeCallback) this.onDecodeCallback(this, elapsedTime);
        return true;
    };
    return MPEG1WASM;
}();
JSMpeg.Decoder.MP2Audio = function() {
    "use strict";
    var MP2 = function(options) {
        JSMpeg.Decoder.Base.call(this, options);
        this.onDecodeCallback = options.onAudioDecode;
        var bufferSize = options.audioBufferSize || 128 * 1024;
        var bufferMode = options.streaming ? JSMpeg.BitBuffer.MODE.EVICT : JSMpeg.BitBuffer.MODE.EXPAND;
        this.bits = new JSMpeg.BitBuffer(bufferSize, bufferMode);
        this.left = new Float32Array(1152);
        this.right = new Float32Array(1152);
        this.sampleRate = 44100;
        this.D = new Float32Array(1024);
        this.D.set(MP2.SYNTHESIS_WINDOW, 0);
        this.D.set(MP2.SYNTHESIS_WINDOW, 512);
        this.V = [new Float32Array(1024), new Float32Array(1024)];
        this.U = new Int32Array(32);
        this.VPos = 0;
        this.allocation = [new Array(32), new Array(32)];
        this.scaleFactorInfo = [new Uint8Array(32), new Uint8Array(32)];
        this.scaleFactor = [new Array(32), new Array(32)];
        this.sample = [new Array(32), new Array(32)];
        for (var j = 0; j < 2; j++)
            for (var i = 0; i < 32; i++) {
                this.scaleFactor[j][i] = [0, 0, 0];
                this.sample[j][i] = [0, 0, 0];
            }
    };
    MP2.prototype = Object.create(JSMpeg.Decoder.Base.prototype);
    MP2.prototype.constructor = MP2;
    MP2.prototype.decode = function() {
        var startTime = JSMpeg.Now();
        var pos = this.bits.index >> 3;
        if (pos >= this.bits.byteLength) return false;
        var decoded = this.decodeFrame(this.left, this.right);
        this.bits.index = pos + decoded << 3;
        if (!decoded) return false;
        if (this.destination) this.destination.play(this.sampleRate, this.left, this.right);
        this.advanceDecodedTime(this.left.length / this.sampleRate);
        var elapsedTime = JSMpeg.Now() - startTime;
        if (this.onDecodeCallback) this.onDecodeCallback(this, elapsedTime);
        return true;
    };
    MP2.prototype.getCurrentTime = function() {
        var enqueuedTime = this.destination ? this.destination.enqueuedTime : 0;
        return this.decodedTime - enqueuedTime;
    };
    MP2.prototype.decodeFrame = function(left, right) {
        var sync = this.bits.read(11),
            version = this.bits.read(2),
            layer = this.bits.read(2),
            hasCRC = !this.bits.read(1);
        if (sync !== MP2.FRAME_SYNC || version !== MP2.VERSION.MPEG_1 || layer !== MP2.LAYER.II) return 0;
        var bitrateIndex = this.bits.read(4) - 1;
        if (bitrateIndex > 13) return 0;
        var sampleRateIndex = this.bits.read(2);
        var sampleRate = MP2.SAMPLE_RATE[sampleRateIndex];
        if (sampleRateIndex === 3) return 0;
        if (version === MP2.VERSION.MPEG_2) {
            sampleRateIndex += 4;
            bitrateIndex += 14;
        }
        var padding = this.bits.read(1),
            privat = this.bits.read(1),
            mode = this.bits.read(2);
        var bound = 0;
        if (mode === MP2.MODE.JOINT_STEREO) bound = this.bits.read(2) + 1 << 2;
        else {
            this.bits.skip(2);
            bound = mode === MP2.MODE.MONO ? 0 : 32;
        }
        this.bits.skip(4);
        if (hasCRC) this.bits.skip(16);
        var bitrate = MP2.BIT_RATE[bitrateIndex],
            sampleRate = MP2.SAMPLE_RATE[sampleRateIndex],
            frameSize = 144e3 * bitrate / sampleRate + padding | 0;
        var tab3 = 0;
        var sblimit = 0;
        if (version === MP2.VERSION.MPEG_2) {
            tab3 = 2;
            sblimit = 30;
        } else {
            var tab1 = mode === MP2.MODE.MONO ? 0 : 1;
            var tab2 = MP2.QUANT_LUT_STEP_1[tab1][bitrateIndex];
            tab3 = MP2.QUANT_LUT_STEP_2[tab2][sampleRateIndex];
            sblimit = tab3 & 63;
            tab3 >>= 6;
        }
        if (bound > sblimit) bound = sblimit;
        for (var sb = 0; sb < bound; sb++) {
            this.allocation[0][sb] = this.readAllocation(sb, tab3);
            this.allocation[1][sb] = this.readAllocation(sb, tab3);
        }
        for (var sb = bound; sb < sblimit; sb++) this.allocation[0][sb] = this.allocation[1][sb] = this.readAllocation(sb, tab3);
        var channels = mode === MP2.MODE.MONO ? 1 : 2;
        for (var sb = 0; sb < sblimit; sb++) {
            for (ch = 0; ch < channels; ch++)
                if (this.allocation[ch][sb]) this.scaleFactorInfo[ch][sb] = this.bits.read(2);
            if (mode === MP2.MODE.MONO) this.scaleFactorInfo[1][sb] = this.scaleFactorInfo[0][sb];
        }
        for (var sb = 0; sb < sblimit; sb++) {
            for (var ch = 0; ch < channels; ch++)
                if (this.allocation[ch][sb]) {
                    var sf = this.scaleFactor[ch][sb];
                    switch (this.scaleFactorInfo[ch][sb]) {
                        case 0:
                            sf[0] = this.bits.read(6);
                            sf[1] = this.bits.read(6);
                            sf[2] = this.bits.read(6);
                            break;
                        case 1:
                            sf[0] = sf[1] = this.bits.read(6);
                            sf[2] = this.bits.read(6);
                            break;
                        case 2:
                            sf[0] = sf[1] = sf[2] = this.bits.read(6);
                            break;
                        case 3:
                            sf[0] = this.bits.read(6);
                            sf[1] = sf[2] = this.bits.read(6);
                            break;
                    }
                }
            if (mode === MP2.MODE.MONO) {
                this.scaleFactor[1][sb][0] = this.scaleFactor[0][sb][0];
                this.scaleFactor[1][sb][1] = this.scaleFactor[0][sb][1];
                this.scaleFactor[1][sb][2] = this.scaleFactor[0][sb][2];
            }
        }
        var outPos = 0;
        for (var part = 0; part < 3; part++)
            for (var granule = 0; granule < 4; granule++) {
                for (var sb = 0; sb < bound; sb++) {
                    this.readSamples(0, sb, part);
                    this.readSamples(1, sb, part);
                }
                for (var sb = bound; sb < sblimit; sb++) {
                    this.readSamples(0, sb, part);
                    this.sample[1][sb][0] = this.sample[0][sb][0];
                    this.sample[1][sb][1] = this.sample[0][sb][1];
                    this.sample[1][sb][2] = this.sample[0][sb][2];
                }
                for (var sb = sblimit; sb < 32; sb++) {
                    this.sample[0][sb][0] = 0;
                    this.sample[0][sb][1] = 0;
                    this.sample[0][sb][2] = 0;
                    this.sample[1][sb][0] = 0;
                    this.sample[1][sb][1] = 0;
                    this.sample[1][sb][2] = 0;
                }
                for (var p = 0; p < 3; p++) {
                    this.VPos = this.VPos - 64 & 1023;
                    for (var ch = 0; ch < 2; ch++) {
                        MP2.MatrixTransform(this.sample[ch], p, this.V[ch], this.VPos);
                        JSMpeg.Fill(this.U, 0);
                        var dIndex = 512 - (this.VPos >> 1);
                        var vIndex = this.VPos % 128 >> 1;
                        while (vIndex < 1024) {
                            for (var i = 0; i < 32; ++i) this.U[i] += this.D[dIndex++] * this.V[ch][vIndex++];
                            vIndex += 128 - 32;
                            dIndex += 64 - 32;
                        }
                        vIndex = 128 - 32 + 1024 - vIndex;
                        dIndex -= 512 - 32;
                        while (vIndex < 1024) {
                            for (var i = 0; i < 32; ++i) this.U[i] += this.D[dIndex++] * this.V[ch][vIndex++];
                            vIndex += 128 - 32;
                            dIndex += 64 - 32;
                        }
                        var outChannel = ch === 0 ? left : right;
                        for (var j = 0; j < 32; j++) outChannel[outPos + j] = this.U[j] / 2147418112;
                    }
                    outPos += 32;
                }
            }
        this.sampleRate = sampleRate;
        return frameSize;
    };
    MP2.prototype.readAllocation = function(sb, tab3) {
        var tab4 = MP2.QUANT_LUT_STEP_3[tab3][sb];
        var qtab = MP2.QUANT_LUT_STEP4[tab4 & 15][this.bits.read(tab4 >> 4)];
        return qtab ? MP2.QUANT_TAB[qtab - 1] : 0;
    };
    MP2.prototype.readSamples = function(ch, sb, part) {
        var q = this.allocation[ch][sb],
            sf = this.scaleFactor[ch][sb][part],
            sample = this.sample[ch][sb],
            val = 0;
        if (!q) {
            sample[0] = sample[1] = sample[2] = 0;
            return;
        }
        if (sf === 63) sf = 0;
        else {
            var shift = sf / 3 | 0;
            sf = MP2.SCALEFACTOR_BASE[sf % 3] + (1 << shift >> 1) >> shift;
        }
        var adj = q.levels;
        if (q.group) {
            val = this.bits.read(q.bits);
            sample[0] = val % adj;
            val = val / adj | 0;
            sample[1] = val % adj;
            sample[2] = val / adj | 0;
        } else {
            sample[0] = this.bits.read(q.bits);
            sample[1] = this.bits.read(q.bits);
            sample[2] = this.bits.read(q.bits);
        }
        var scale = 65536 / (adj + 1) | 0;
        adj = (adj + 1 >> 1) - 1;
        val = (adj - sample[0]) * scale;
        sample[0] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
        val = (adj - sample[1]) * scale;
        sample[1] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
        val = (adj - sample[2]) * scale;
        sample[2] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
    };
    MP2.MatrixTransform = function(s, ss, d, dp) {
        var t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33;
        t01 = s[0][ss] + s[31][ss];
        t02 = (s[0][ss] - s[31][ss]) * .500602998235;
        t03 = s[1][ss] + s[30][ss];
        t04 = (s[1][ss] - s[30][ss]) * .505470959898;
        t05 = s[2][ss] + s[29][ss];
        t06 = (s[2][ss] - s[29][ss]) * .515447309923;
        t07 = s[3][ss] + s[28][ss];
        t08 = (s[3][ss] - s[28][ss]) * .53104259109;
        t09 = s[4][ss] + s[27][ss];
        t10 = (s[4][ss] - s[27][ss]) * .553103896034;
        t11 = s[5][ss] + s[26][ss];
        t12 = (s[5][ss] - s[26][ss]) * .582934968206;
        t13 = s[6][ss] + s[25][ss];
        t14 = (s[6][ss] - s[25][ss]) * .622504123036;
        t15 = s[7][ss] + s[24][ss];
        t16 = (s[7][ss] - s[24][ss]) * .674808341455;
        t17 = s[8][ss] + s[23][ss];
        t18 = (s[8][ss] - s[23][ss]) * .744536271002;
        t19 = s[9][ss] + s[22][ss];
        t20 = (s[9][ss] - s[22][ss]) * .839349645416;
        t21 = s[10][ss] + s[21][ss];
        t22 = (s[10][ss] - s[21][ss]) * .972568237862;
        t23 = s[11][ss] + s[20][ss];
        t24 = (s[11][ss] - s[20][ss]) * 1.16943993343;
        t25 = s[12][ss] + s[19][ss];
        t26 = (s[12][ss] - s[19][ss]) * 1.48416461631;
        t27 = s[13][ss] + s[18][ss];
        t28 = (s[13][ss] - s[18][ss]) * 2.05778100995;
        t29 = s[14][ss] + s[17][ss];
        t30 = (s[14][ss] - s[17][ss]) * 3.40760841847;
        t31 = s[15][ss] + s[16][ss];
        t32 = (s[15][ss] - s[16][ss]) * 10.1900081235;
        t33 = t01 + t31;
        t31 = (t01 - t31) * .502419286188;
        t01 = t03 + t29;
        t29 = (t03 - t29) * .52249861494;
        t03 = t05 + t27;
        t27 = (t05 - t27) * .566944034816;
        t05 = t07 + t25;
        t25 = (t07 - t25) * .64682178336;
        t07 = t09 + t23;
        t23 = (t09 - t23) * .788154623451;
        t09 = t11 + t21;
        t21 = (t11 - t21) * 1.06067768599;
        t11 = t13 + t19;
        t19 = (t13 - t19) * 1.72244709824;
        t13 = t15 + t17;
        t17 = (t15 - t17) * 5.10114861869;
        t15 = t33 + t13;
        t13 = (t33 - t13) * .509795579104;
        t33 = t01 + t11;
        t01 = (t01 - t11) * .601344886935;
        t11 = t03 + t09;
        t09 = (t03 - t09) * .899976223136;
        t03 = t05 + t07;
        t07 = (t05 - t07) * 2.56291544774;
        t05 = t15 + t03;
        t15 = (t15 - t03) * .541196100146;
        t03 = t33 + t11;
        t11 = (t33 - t11) * 1.30656296488;
        t33 = t05 + t03;
        t05 = (t05 - t03) * .707106781187;
        t03 = t15 + t11;
        t15 = (t15 - t11) * .707106781187;
        t03 += t15;
        t11 = t13 + t07;
        t13 = (t13 - t07) * .541196100146;
        t07 = t01 + t09;
        t09 = (t01 - t09) * 1.30656296488;
        t01 = t11 + t07;
        t07 = (t11 - t07) * .707106781187;
        t11 = t13 + t09;
        t13 = (t13 - t09) * .707106781187;
        t11 += t13;
        t01 += t11;
        t11 += t07;
        t07 += t13;
        t09 = t31 + t17;
        t31 = (t31 - t17) * .509795579104;
        t17 = t29 + t19;
        t29 = (t29 - t19) * .601344886935;
        t19 = t27 + t21;
        t21 = (t27 - t21) * .899976223136;
        t27 = t25 + t23;
        t23 = (t25 - t23) * 2.56291544774;
        t25 = t09 + t27;
        t09 = (t09 - t27) * .541196100146;
        t27 = t17 + t19;
        t19 = (t17 - t19) * 1.30656296488;
        t17 = t25 + t27;
        t27 = (t25 - t27) * .707106781187;
        t25 = t09 + t19;
        t19 = (t09 - t19) * .707106781187;
        t25 += t19;
        t09 = t31 + t23;
        t31 = (t31 - t23) * .541196100146;
        t23 = t29 + t21;
        t21 = (t29 - t21) * 1.30656296488;
        t29 = t09 + t23;
        t23 = (t09 - t23) * .707106781187;
        t09 = t31 + t21;
        t31 = (t31 - t21) * .707106781187;
        t09 += t31;
        t29 += t09;
        t09 += t23;
        t23 += t31;
        t17 += t29;
        t29 += t25;
        t25 += t09;
        t09 += t27;
        t27 += t23;
        t23 += t19;
        t19 += t31;
        t21 = t02 + t32;
        t02 = (t02 - t32) * .502419286188;
        t32 = t04 + t30;
        t04 = (t04 - t30) * .52249861494;
        t30 = t06 + t28;
        t28 = (t06 - t28) * .566944034816;
        t06 = t08 + t26;
        t08 = (t08 - t26) * .64682178336;
        t26 = t10 + t24;
        t10 = (t10 - t24) * .788154623451;
        t24 = t12 + t22;
        t22 = (t12 - t22) * 1.06067768599;
        t12 = t14 + t20;
        t20 = (t14 - t20) * 1.72244709824;
        t14 = t16 + t18;
        t16 = (t16 - t18) * 5.10114861869;
        t18 = t21 + t14;
        t14 = (t21 - t14) * .509795579104;
        t21 = t32 + t12;
        t32 = (t32 - t12) * .601344886935;
        t12 = t30 + t24;
        t24 = (t30 - t24) * .899976223136;
        t30 = t06 + t26;
        t26 = (t06 - t26) * 2.56291544774;
        t06 = t18 + t30;
        t18 = (t18 - t30) * .541196100146;
        t30 = t21 + t12;
        t12 = (t21 - t12) * 1.30656296488;
        t21 = t06 + t30;
        t30 = (t06 - t30) * .707106781187;
        t06 = t18 + t12;
        t12 = (t18 - t12) * .707106781187;
        t06 += t12;
        t18 = t14 + t26;
        t26 = (t14 - t26) * .541196100146;
        t14 = t32 + t24;
        t24 = (t32 - t24) * 1.30656296488;
        t32 = t18 + t14;
        t14 = (t18 - t14) * .707106781187;
        t18 = t26 + t24;
        t24 = (t26 - t24) * .707106781187;
        t18 += t24;
        t32 += t18;
        t18 += t14;
        t26 = t14 + t24;
        t14 = t02 + t16;
        t02 = (t02 - t16) * .509795579104;
        t16 = t04 + t20;
        t04 = (t04 - t20) * .601344886935;
        t20 = t28 + t22;
        t22 = (t28 - t22) * .899976223136;
        t28 = t08 + t10;
        t10 = (t08 - t10) * 2.56291544774;
        t08 = t14 + t28;
        t14 = (t14 - t28) * .541196100146;
        t28 = t16 + t20;
        t20 = (t16 - t20) * 1.30656296488;
        t16 = t08 + t28;
        t28 = (t08 - t28) * .707106781187;
        t08 = t14 + t20;
        t20 = (t14 - t20) * .707106781187;
        t08 += t20;
        t14 = t02 + t10;
        t02 = (t02 - t10) * .541196100146;
        t10 = t04 + t22;
        t22 = (t04 - t22) * 1.30656296488;
        t04 = t14 + t10;
        t10 = (t14 - t10) * .707106781187;
        t14 = t02 + t22;
        t02 = (t02 - t22) * .707106781187;
        t14 += t02;
        t04 += t14;
        t14 += t10;
        t10 += t02;
        t16 += t04;
        t04 += t08;
        t08 += t14;
        t14 += t28;
        t28 += t10;
        t10 += t20;
        t20 += t02;
        t21 += t16;
        t16 += t32;
        t32 += t04;
        t04 += t06;
        t06 += t08;
        t08 += t18;
        t18 += t14;
        t14 += t30;
        t30 += t28;
        t28 += t26;
        t26 += t10;
        t10 += t12;
        t12 += t20;
        t20 += t24;
        t24 += t02;
        d[dp + 48] = -t33;
        d[dp + 49] = d[dp + 47] = -t21;
        d[dp + 50] = d[dp + 46] = -t17;
        d[dp + 51] = d[dp + 45] = -t16;
        d[dp + 52] = d[dp + 44] = -t01;
        d[dp + 53] = d[dp + 43] = -t32;
        d[dp + 54] = d[dp + 42] = -t29;
        d[dp + 55] = d[dp + 41] = -t04;
        d[dp + 56] = d[dp + 40] = -t03;
        d[dp + 57] = d[dp + 39] = -t06;
        d[dp + 58] = d[dp + 38] = -t25;
        d[dp + 59] = d[dp + 37] = -t08;
        d[dp + 60] = d[dp + 36] = -t11;
        d[dp + 61] = d[dp + 35] = -t18;
        d[dp + 62] = d[dp + 34] = -t09;
        d[dp + 63] = d[dp + 33] = -t14;
        d[dp + 32] = -t05;
        d[dp + 0] = t05;
        d[dp + 31] = -t30;
        d[dp + 1] = t30;
        d[dp + 30] = -t27;
        d[dp + 2] = t27;
        d[dp + 29] = -t28;
        d[dp + 3] = t28;
        d[dp + 28] = -t07;
        d[dp + 4] = t07;
        d[dp + 27] = -t26;
        d[dp + 5] = t26;
        d[dp + 26] = -t23;
        d[dp + 6] = t23;
        d[dp + 25] = -t10;
        d[dp + 7] = t10;
        d[dp + 24] = -t15;
        d[dp + 8] = t15;
        d[dp + 23] = -t12;
        d[dp + 9] = t12;
        d[dp + 22] = -t19;
        d[dp + 10] = t19;
        d[dp + 21] = -t20;
        d[dp + 11] = t20;
        d[dp + 20] = -t13;
        d[dp + 12] = t13;
        d[dp + 19] = -t24;
        d[dp + 13] = t24;
        d[dp + 18] = -t31;
        d[dp + 14] = t31;
        d[dp + 17] = -t02;
        d[dp + 15] = t02;
        d[dp + 16] = 0;
    };
    MP2.FRAME_SYNC = 2047;
    MP2.VERSION = {
        MPEG_2_5: 0,
        MPEG_2: 2,
        MPEG_1: 3
    };
    MP2.LAYER = {
        III: 1,
        II: 2,
        I: 3
    };
    MP2.MODE = {
        STEREO: 0,
        JOINT_STEREO: 1,
        DUAL_CHANNEL: 2,
        MONO: 3
    };
    MP2.SAMPLE_RATE = new Uint16Array([44100, 48e3, 32e3, 0, 22050, 24e3, 16e3, 0]);
    MP2.BIT_RATE = new Uint16Array([32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]);
    MP2.SCALEFACTOR_BASE = new Uint32Array([33554432, 26632170, 21137968]);
    MP2.SYNTHESIS_WINDOW = new Float32Array([0, -.5, -.5, -.5, -.5, -.5, -.5, -1, -1, -1, -1, -1.5, -1.5, -2, -2, -2.5, -2.5, -3, -3.5, -3.5, -4, -4.5, -5, -5.5, -6.5, -7, -8, -8.5, -9.5, -10.5, -12, -13, -14.5, -15.5, -17.5, -19, -20.5, -22.5, -24.5, -26.5, -29, -31.5, -34, -36.5, -39.5, -42.5, -45.5, -48.5, -52, -55.5, -58.5, -62.5, -66, -69.5, -73.5, -77, -80.5, -84.5, -88, -91.5, -95, -98, -101, -104, 106.5, 109, 111, 112.5, 113.5, 114, 114, 113.5, 112, 110.5, 107.5, 104, 100, 94.5, 88.5, 81.5, 73, 63.5, 53, 41.5, 28.5, 14.5, -1, -18, -36, -55.5, -76.5, -98.5, -122, -147, -173.5, -200.5, -229.5, -259.5, -290.5, -322.5, -355.5, -389.5, -424, -459.5, -495.5, -532, -568.5, -605, -641.5, -678, -714, -749, -783.5, -817, -849, -879.5, -908.5, -935, -959.5, -981, -1000.5, -1016, -1028.5, -1037.5, -1042.5, -1043.5, -1040, -1031.5, 1018.5, 1e3, 976, 946.5, 911, 869.5, 822, 767.5, 707, 640, 565.5, 485, 397, 302.5, 201, 92.5, -22.5, -144, -272.5, -407, -547.5, -694, -846, -1003, -1165, -1331.5, -1502, -1675.5, -1852.5, -2031.5, -2212.5, -2394, -2576.5, -2758.5, -2939.5, -3118.5, -3294.5, -3467.5, -3635.5, -3798.5, -3955, -4104.5, -4245.5, -4377.5, -4499, -4609.5, -4708, -4792.5, -4863.5, -4919, -4958, -4979.5, -4983, -4967.5, -4931.5, -4875, -4796, -4694.5, -4569.5, -4420, -4246, -4046, -3820, -3567, 3287, 2979.5, 2644, 2280.5, 1888, 1467.5, 1018.5, 541, 35, -499, -1061, -1650, -2266.5, -2909, -3577, -4270, -4987.5, -5727.5, -6490, -7274, -8077.5, -8899.5, -9739, -10594.5, -11464.5, -12347, -13241, -14144.5, -15056, -15973.5, -16895.5, -17820, -18744.5, -19668, -20588, -21503, -22410.5, -23308.5, -24195, -25068.5, -25926.5, -26767, -27589, -28389, -29166.5, -29919, -30644.5, -31342, -32009.5, -32645, -33247, -33814.5, -34346, -34839.5, -35295, -35710, -36084.5, -36417.5, -36707.5, -36954, -37156.5, -37315, -37428, -37496, 37519, 37496, 37428, 37315, 37156.5, 36954, 36707.5, 36417.5, 36084.5, 35710, 35295, 34839.5, 34346, 33814.5, 33247, 32645, 32009.5, 31342, 30644.5, 29919, 29166.5, 28389, 27589, 26767, 25926.5, 25068.5, 24195, 23308.5, 22410.5, 21503, 20588, 19668, 18744.5, 17820, 16895.5, 15973.5, 15056, 14144.5, 13241, 12347, 11464.5, 10594.5, 9739, 8899.5, 8077.5, 7274, 6490, 5727.5, 4987.5, 4270, 3577, 2909, 2266.5, 1650, 1061, 499, -35, -541, -1018.5, -1467.5, -1888, -2280.5, -2644, -2979.5, 3287, 3567, 3820, 4046, 4246, 4420, 4569.5, 4694.5, 4796, 4875, 4931.5, 4967.5, 4983, 4979.5, 4958, 4919, 4863.5, 4792.5, 4708, 4609.5, 4499, 4377.5, 4245.5, 4104.5, 3955, 3798.5, 3635.5, 3467.5, 3294.5, 3118.5, 2939.5, 2758.5, 2576.5, 2394, 2212.5, 2031.5, 1852.5, 1675.5, 1502, 1331.5, 1165, 1003, 846, 694, 547.5, 407, 272.5, 144, 22.5, -92.5, -201, -302.5, -397, -485, -565.5, -640, -707, -767.5, -822, -869.5, -911, -946.5, -976, -1e3, 1018.5, 1031.5, 1040, 1043.5, 1042.5, 1037.5, 1028.5, 1016, 1000.5, 981, 959.5, 935, 908.5, 879.5, 849, 817, 783.5, 749, 714, 678, 641.5, 605, 568.5, 532, 495.5, 459.5, 424, 389.5, 355.5, 322.5, 290.5, 259.5, 229.5, 200.5, 173.5, 147, 122, 98.5, 76.5, 55.5, 36, 18, 1, -14.5, -28.5, -41.5, -53, -63.5, -73, -81.5, -88.5, -94.5, -100, -104, -107.5, -110.5, -112, -113.5, -114, -114, -113.5, -112.5, -111, -109, 106.5, 104, 101, 98, 95, 91.5, 88, 84.5, 80.5, 77, 73.5, 69.5, 66, 62.5, 58.5, 55.5, 52, 48.5, 45.5, 42.5, 39.5, 36.5, 34, 31.5, 29, 26.5, 24.5, 22.5, 20.5, 19, 17.5, 15.5, 14.5, 13, 12, 10.5, 9.5, 8.5, 8, 7, 6.5, 5.5, 5, 4.5, 4, 3.5, 3.5, 3, 2.5, 2.5, 2, 2, 1.5, 1.5, 1, 1, 1, 1, .5, .5, .5, .5, .5, .5]);
    MP2.QUANT_LUT_STEP_1 = [
        [0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2]
    ];
    MP2.QUANT_TAB = {
        A: 27 | 64,
        B: 30 | 64,
        C: 8,
        D: 12
    };
    MP2.QUANT_LUT_STEP_2 = [
        [MP2.QUANT_TAB.C, MP2.QUANT_TAB.C, MP2.QUANT_TAB.D],
        [MP2.QUANT_TAB.A, MP2.QUANT_TAB.A, MP2.QUANT_TAB.A],
        [MP2.QUANT_TAB.B, MP2.QUANT_TAB.A, MP2.QUANT_TAB.B]
    ];
    MP2.QUANT_LUT_STEP_3 = [
        [68, 68, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52],
        [67, 67, 67, 66, 66, 66, 66, 66, 66, 66, 66, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 32, 32, 32, 32, 32, 32, 32],
        [69, 69, 69, 69, 52, 52, 52, 52, 52, 52, 52, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36]
    ];
    MP2.QUANT_LUT_STEP4 = [
        [0, 1, 2, 17],
        [0, 1, 2, 3, 4, 5, 6, 17],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17],
        [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    ];
    MP2.QUANT_TAB = [{
        levels: 3,
        group: 1,
        bits: 5
    }, {
        levels: 5,
        group: 1,
        bits: 7
    }, {
        levels: 7,
        group: 0,
        bits: 3
    }, {
        levels: 9,
        group: 1,
        bits: 10
    }, {
        levels: 15,
        group: 0,
        bits: 4
    }, {
        levels: 31,
        group: 0,
        bits: 5
    }, {
        levels: 63,
        group: 0,
        bits: 6
    }, {
        levels: 127,
        group: 0,
        bits: 7
    }, {
        levels: 255,
        group: 0,
        bits: 8
    }, {
        levels: 511,
        group: 0,
        bits: 9
    }, {
        levels: 1023,
        group: 0,
        bits: 10
    }, {
        levels: 2047,
        group: 0,
        bits: 11
    }, {
        levels: 4095,
        group: 0,
        bits: 12
    }, {
        levels: 8191,
        group: 0,
        bits: 13
    }, {
        levels: 16383,
        group: 0,
        bits: 14
    }, {
        levels: 32767,
        group: 0,
        bits: 15
    }, {
        levels: 65535,
        group: 0,
        bits: 16
    }];
    return MP2;
}();
JSMpeg.Decoder.MP2AudioWASM = function() {
    "use strict";
    var MP2WASM = function(options) {
        JSMpeg.Decoder.Base.call(this, options);
        this.onDecodeCallback = options.onAudioDecode;
        this.module = options.wasmModule;
        this.bufferSize = options.audioBufferSize || 128 * 1024;
        this.bufferMode = options.streaming ? JSMpeg.BitBuffer.MODE.EVICT : JSMpeg.BitBuffer.MODE.EXPAND;
        this.sampleRate = 0;
    };
    MP2WASM.prototype = Object.create(JSMpeg.Decoder.Base.prototype);
    MP2WASM.prototype.constructor = MP2WASM;
    MP2WASM.prototype.initializeWasmDecoder = function() {
        if (!this.module.instance) {
            console.warn("JSMpeg: WASM module not compiled yet");
            return;
        }
        this.instance = this.module.instance;
        this.functions = this.module.instance.exports;
        this.decoder = this.functions._mp2_decoder_create(this.bufferSize, this.bufferMode);
    };
    MP2WASM.prototype.destroy = function() {
        if (!this.decoder) return;
        this.functions._mp2_decoder_destroy(this.decoder);
    };
    MP2WASM.prototype.bufferGetIndex = function() {
        if (!this.decoder) return;
        return this.functions._mp2_decoder_get_index(this.decoder);
    };
    MP2WASM.prototype.bufferSetIndex = function(index) {
        if (!this.decoder) return;
        this.functions._mp2_decoder_set_index(this.decoder, index);
    };
    MP2WASM.prototype.bufferWrite = function(buffers) {
        if (!this.decoder) this.initializeWasmDecoder();
        var totalLength = 0;
        for (var i = 0; i < buffers.length; i++) totalLength += buffers[i].length;
        var ptr = this.functions._mp2_decoder_get_write_ptr(this.decoder, totalLength);
        for (var i = 0; i < buffers.length; i++) {
            this.instance.heapU8.set(buffers[i], ptr);
            ptr += buffers[i].length;
        }
        this.functions._mp2_decoder_did_write(this.decoder, totalLength);
        return totalLength;
    };
    MP2WASM.prototype.decode = function() {
        var startTime = JSMpeg.Now();
        if (!this.decoder) return false;
        var decodedBytes = this.functions._mp2_decoder_decode(this.decoder);
        if (decodedBytes === 0) return false;
        if (!this.sampleRate) this.sampleRate = this.functions._mp2_decoder_get_sample_rate(this.decoder);
        if (this.destination) {
            var leftPtr = this.functions._mp2_decoder_get_left_channel_ptr(this.decoder),
                rightPtr = this.functions._mp2_decoder_get_right_channel_ptr(this.decoder);
            var leftOffset = leftPtr / Float32Array.BYTES_PER_ELEMENT,
                rightOffset = rightPtr / Float32Array.BYTES_PER_ELEMENT;
            var left = this.instance.heapF32.subarray(leftOffset, leftOffset + MP2WASM.SAMPLES_PER_FRAME),
                right = this.instance.heapF32.subarray(rightOffset, rightOffset + MP2WASM.SAMPLES_PER_FRAME);
            this.destination.play(this.sampleRate, left, right);
        }
        this.advanceDecodedTime(MP2WASM.SAMPLES_PER_FRAME / this.sampleRate);
        var elapsedTime = JSMpeg.Now() - startTime;
        if (this.onDecodeCallback) this.onDecodeCallback(this, elapsedTime);
        return true;
    };
    MP2WASM.prototype.getCurrentTime = function() {
        var enqueuedTime = this.destination ? this.destination.enqueuedTime : 0;
        return this.decodedTime - enqueuedTime;
    };
    MP2WASM.SAMPLES_PER_FRAME = 1152;
    return MP2WASM;
}();
JSMpeg.Renderer.WebGL = function() {
    "use strict";
    var WebGLRenderer = function(options) {
        this.canvas = options.canvas || document.createElement("canvas");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.enabled = true;
        this.hasTextureData = {};
        var contextCreateOptions = {
            preserveDrawingBuffer: !!options.preserveDrawingBuffer,
            alpha: false,
            depth: false,
            stencil: false,
            antialias: false,
            premultipliedAlpha: false
        };
        this.gl = this.canvas.getContext("webgl", contextCreateOptions) || this.canvas.getContext("experimental-webgl", contextCreateOptions);
        if (!this.gl) throw new Error("Failed to get WebGL Context");
        var gl = this.gl;
        var vertexAttr = null;
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        this.vertexBuffer = gl.createBuffer();
        var vertexCoords = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertexCoords, gl.STATIC_DRAW);
        this.program = this.createProgram(WebGLRenderer.SHADER.VERTEX_IDENTITY, WebGLRenderer.SHADER.FRAGMENT_YCRCB_TO_RGBA);
        vertexAttr = gl.getAttribLocation(this.program, "vertex");
        gl.enableVertexAttribArray(vertexAttr);
        gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0);
        this.textureY = this.createTexture(0, "textureY");
        this.textureCb = this.createTexture(1, "textureCb");
        this.textureCr = this.createTexture(2, "textureCr");
        this.loadingProgram = this.createProgram(WebGLRenderer.SHADER.VERTEX_IDENTITY, WebGLRenderer.SHADER.FRAGMENT_LOADING);
        vertexAttr = gl.getAttribLocation(this.loadingProgram, "vertex");
        gl.enableVertexAttribArray(vertexAttr);
        gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0);
        this.shouldCreateUnclampedViews = !this.allowsClampedTextureData();
    };
    WebGLRenderer.prototype.destroy = function() {
        var gl = this.gl;
        this.deleteTexture(gl.TEXTURE0, this.textureY);
        this.deleteTexture(gl.TEXTURE1, this.textureCb);
        this.deleteTexture(gl.TEXTURE2, this.textureCr);
        gl.useProgram(null);
        gl.deleteProgram(this.program);
        gl.deleteProgram(this.loadingProgram);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.deleteBuffer(this.vertexBuffer);
        gl.getExtension("WEBGL_lose_context").loseContext();
        this.canvas.remove();
    };
    WebGLRenderer.prototype.resize = function(width, height) {
        this.width = width | 0;
        this.height = height | 0;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.gl.useProgram(this.program);
        var codedWidth = this.width + 15 >> 4 << 4;
        this.gl.viewport(0, 0, codedWidth, this.height);
    };
    WebGLRenderer.prototype.createTexture = function(index, name) {
        var gl = this.gl;
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.uniform1i(gl.getUniformLocation(this.program, name), index);
        return texture;
    };
    WebGLRenderer.prototype.createProgram = function(vsh, fsh) {
        var gl = this.gl;
        var program = gl.createProgram();
        gl.attachShader(program, this.compileShader(gl.VERTEX_SHADER, vsh));
        gl.attachShader(program, this.compileShader(gl.FRAGMENT_SHADER, fsh));
        gl.linkProgram(program);
        gl.useProgram(program);
        return program;
    };
    WebGLRenderer.prototype.compileShader = function(type, source) {
        var gl = this.gl;
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
        return shader;
    };
    WebGLRenderer.prototype.allowsClampedTextureData = function() {
        var gl = this.gl;
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, 1, 1, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, new Uint8ClampedArray([0]));
        return gl.getError() === 0;
    };
    WebGLRenderer.prototype.renderProgress = function(progress) {
        var gl = this.gl;
        gl.useProgram(this.loadingProgram);
        var loc = gl.getUniformLocation(this.loadingProgram, "progress");
        gl.uniform1f(loc, progress);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    WebGLRenderer.prototype.render = function(y, cb, cr, isClampedArray) {
        if (!this.enabled) return;
        var gl = this.gl;
        var w = this.width + 15 >> 4 << 4,
            h = this.height,
            w2 = w >> 1,
            h2 = h >> 1;
        if (isClampedArray && this.shouldCreateUnclampedViews) y = new Uint8Array(y.buffer), cb = new Uint8Array(cb.buffer), cr = new Uint8Array(cr.buffer);
        gl.useProgram(this.program);
        this.updateTexture(gl.TEXTURE0, this.textureY, w, h, y);
        this.updateTexture(gl.TEXTURE1, this.textureCb, w2, h2, cb);
        this.updateTexture(gl.TEXTURE2, this.textureCr, w2, h2, cr);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    WebGLRenderer.prototype.updateTexture = function(unit, texture, w, h, data) {
        var gl = this.gl;
        gl.activeTexture(unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        if (this.hasTextureData[unit]) gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
        else {
            this.hasTextureData[unit] = true;
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, w, h, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
        }
    };
    WebGLRenderer.prototype.deleteTexture = function(unit, texture) {
        var gl = this.gl;
        gl.activeTexture(unit);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.deleteTexture(texture);
    };
    WebGLRenderer.IsSupported = function() {
        try {
            if (!window.WebGLRenderingContext) return false;
            var canvas = document.createElement("canvas");
            return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
        } catch (err) {
            return false;
        }
    };
    WebGLRenderer.SHADER = {
        FRAGMENT_YCRCB_TO_RGBA: ["precision mediump float;", "uniform sampler2D textureY;", "uniform sampler2D textureCb;", "uniform sampler2D textureCr;", "varying vec2 texCoord;", "mat4 rec601 = mat4(", "1.16438,  0.00000,  1.59603, -0.87079,", "1.16438, -0.39176, -0.81297,  0.52959,", "1.16438,  2.01723,  0.00000, -1.08139,", "0, 0, 0, 1", ");", "void main() {", "float y = texture2D(textureY, texCoord).r;", "float cb = texture2D(textureCb, texCoord).r;", "float cr = texture2D(textureCr, texCoord).r;", "gl_FragColor = vec4(y, cr, cb, 1.0) * rec601;", "}"].join("\n"),
        FRAGMENT_LOADING: ["precision mediump float;", "uniform float progress;", "varying vec2 texCoord;", "void main() {", "float c = ceil(progress-(1.0-texCoord.y));", "gl_FragColor = vec4(c,c,c,1);", "}"].join("\n"),
        VERTEX_IDENTITY: ["attribute vec2 vertex;", "varying vec2 texCoord;", "void main() {", "texCoord = vertex;", "gl_Position = vec4((vertex * 2.0 - 1.0) * vec2(1, -1), 0.0, 1.0);", "}"].join("\n")
    };
    return WebGLRenderer;
}();
JSMpeg.Renderer.Canvas2D = function() {
    "use strict";
    var CanvasRenderer = function(options) {
        this.canvas = options.canvas || document.createElement("canvas");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.enabled = true;
        this.context = this.canvas.getContext("2d");
    };
    CanvasRenderer.prototype.destroy = function() {};
    CanvasRenderer.prototype.resize = function(width, height) {
        this.width = width | 0;
        this.height = height | 0;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.imageData = this.context.getImageData(0, 0, this.width, this.height);
        JSMpeg.Fill(this.imageData.data, 255);
    };
    CanvasRenderer.prototype.renderProgress = function(progress) {
        var w = this.canvas.width,
            h = this.canvas.height,
            ctx = this.context;
        ctx.fillStyle = "#222";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, h - h * progress, w, h * progress);
    };
    CanvasRenderer.prototype.render = function(y, cb, cr) {
        this.YCbCrToRGBA(y, cb, cr, this.imageData.data);
        this.context.putImageData(this.imageData, 0, 0);
    };
    CanvasRenderer.prototype.YCbCrToRGBA = function(y, cb, cr, rgba) {
        if (!this.enabled) return;
        var w = this.width + 15 >> 4 << 4,
            w2 = w >> 1;
        var yIndex1 = 0,
            yIndex2 = w,
            yNext2Lines = w + (w - this.width);
        var cIndex = 0,
            cNextLine = w2 - (this.width >> 1);
        var rgbaIndex1 = 0,
            rgbaIndex2 = this.width * 4,
            rgbaNext2Lines = this.width * 4;
        var cols = this.width >> 1,
            rows = this.height >> 1;
        var ccb, ccr, r, g, b;
        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                ccb = cb[cIndex];
                ccr = cr[cIndex];
                cIndex++;
                r = ccb + (ccb * 103 >> 8) - 179;
                g = (ccr * 88 >> 8) - 44 + (ccb * 183 >> 8) - 91;
                b = ccr + (ccr * 198 >> 8) - 227;
                var y1 = y[yIndex1++];
                var y2 = y[yIndex1++];
                rgba[rgbaIndex1] = y1 + r;
                rgba[rgbaIndex1 + 1] = y1 - g;
                rgba[rgbaIndex1 + 2] = y1 + b;
                rgba[rgbaIndex1 + 4] = y2 + r;
                rgba[rgbaIndex1 + 5] = y2 - g;
                rgba[rgbaIndex1 + 6] = y2 + b;
                rgbaIndex1 += 8;
                var y3 = y[yIndex2++];
                var y4 = y[yIndex2++];
                rgba[rgbaIndex2] = y3 + r;
                rgba[rgbaIndex2 + 1] = y3 - g;
                rgba[rgbaIndex2 + 2] = y3 + b;
                rgba[rgbaIndex2 + 4] = y4 + r;
                rgba[rgbaIndex2 + 5] = y4 - g;
                rgba[rgbaIndex2 + 6] = y4 + b;
                rgbaIndex2 += 8;
            }
            yIndex1 += yNext2Lines;
            yIndex2 += yNext2Lines;
            rgbaIndex1 += rgbaNext2Lines;
            rgbaIndex2 += rgbaNext2Lines;
            cIndex += cNextLine;
        }
    };
    return CanvasRenderer;
}();
JSMpeg.AudioOutput.WebAudio = function() {
    "use strict";
    var WebAudioOut = function(options) {
        this.context = WebAudioOut.CachedContext = WebAudioOut.CachedContext || new(window.AudioContext || window.webkitAudioContext)();
        this.gain = this.context.createGain();
        this.destination = this.gain;
        this.gain.connect(this.context.destination);
        this.context._connections = (this.context._connections || 0) + 1;
        this.startTime = 0;
        this.buffer = null;
        this.wallclockStartTime = 0;
        this.volume = 1;
        this.enabled = true;
        this.unlocked = !WebAudioOut.NeedsUnlocking();
        Object.defineProperty(this, "enqueuedTime", {
            get: this.getEnqueuedTime
        });
    };
    WebAudioOut.prototype.destroy = function() {
        this.gain.disconnect();
        this.context._connections--;
        if (this.context._connections === 0) {
            this.context.close();
            WebAudioOut.CachedContext = null;
        }
    };
    WebAudioOut.prototype.play = function(sampleRate, left, right) {
        if (!this.enabled) return;
        if (!this.unlocked) {
            var ts = JSMpeg.Now();
            if (this.wallclockStartTime < ts) this.wallclockStartTime = ts;
            this.wallclockStartTime += left.length / sampleRate;
            return;
        }
        this.gain.gain.value = this.volume;
        var buffer = this.context.createBuffer(2, left.length, sampleRate);
        buffer.getChannelData(0).set(left);
        buffer.getChannelData(1).set(right);
        var source = this.context.createBufferSource();
        source.buffer = buffer;
        source.connect(this.destination);
        var now = this.context.currentTime;
        var duration = buffer.duration;
        if (this.startTime < now) {
            this.startTime = now;
            this.wallclockStartTime = JSMpeg.Now();
        }
        source.start(this.startTime);
        this.startTime += duration;
        this.wallclockStartTime += duration;
    };
    WebAudioOut.prototype.stop = function() {
        this.gain.gain.value = 0;
    };
    WebAudioOut.prototype.getEnqueuedTime = function() {
        return Math.max(this.wallclockStartTime - JSMpeg.Now(), 0);
    };
    WebAudioOut.prototype.resetEnqueuedTime = function() {
        this.startTime = this.context.currentTime;
        this.wallclockStartTime = JSMpeg.Now();
    };
    WebAudioOut.prototype.unlock = function(callback) {
        if (this.unlocked) {
            if (callback) callback();
            return;
        }
        this.unlockCallback = callback;
        var buffer = this.context.createBuffer(1, 1, 22050);
        var source = this.context.createBufferSource();
        source.buffer = buffer;
        source.connect(this.destination);
        source.start(0);
        setTimeout(this.checkIfUnlocked.bind(this, source, 0), 0);
    };
    WebAudioOut.prototype.checkIfUnlocked = function(source, attempt) {
        if (source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE) {
            this.unlocked = true;
            if (this.unlockCallback) {
                this.unlockCallback();
                this.unlockCallback = null;
            }
        } else {
            if (attempt < 10) setTimeout(this.checkIfUnlocked.bind(this, source, attempt + 1), 100);
        }
    };
    WebAudioOut.NeedsUnlocking = function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    };
    WebAudioOut.IsSupported = function() {
        return window.AudioContext || window.webkitAudioContext;
    };
    WebAudioOut.CachedContext = null;
    return WebAudioOut;
}();
JSMpeg.WASMModule = function() {
    "use strict";
    var WASM = function() {
        this.stackSize = 5 * 1024 * 1024;
        this.pageSize = 64 * 1024;
        this.onInitCallback = null;
        this.ready = false;
    };
    WASM.prototype.write = function(buffer) {
        this.loadFromBuffer(buffer, this.onInitCallback);
    };
    WASM.prototype.loadFromFile = function(url, callback) {
        this.onInitCallback = callback;
        var ajax = new JSMpeg.Source.Ajax(url, {});
        ajax.connect(this);
        ajax.start();
    };
    WASM.prototype.loadFromBuffer = function(buffer, callback) {
        this.moduleInfo = this.readDylinkSection(buffer);
        if (!this.moduleInfo) {
            this.callback && this.callback(null);
            return;
        }
        this.memory = new WebAssembly.Memory({
            initial: 256
        });
        var env = {
            memory: this.memory,
            memoryBase: 0,
            __memory_base: 0,
            table: new WebAssembly.Table({
                initial: this.moduleInfo.tableSize,
                element: "anyfunc"
            }),
            tableBase: 0,
            __table_base: 0,
            abort: this.c_abort.bind(this),
            ___assert_fail: this.c_assertFail.bind(this),
            _sbrk: this.c_sbrk.bind(this)
        };
        this.brk = this.align(this.moduleInfo.memorySize + this.stackSize);
        WebAssembly.instantiate(buffer, {
            env
        }).then(function(results) {
            this.instance = results.instance;
            if (this.instance.exports.__post_instantiate) this.instance.exports.__post_instantiate();
            this.createHeapViews();
            this.ready = true;
            callback && callback(this);
        }.bind(this));
    };
    WASM.prototype.createHeapViews = function() {
        this.instance.heapU8 = new Uint8Array(this.memory.buffer);
        this.instance.heapU32 = new Uint32Array(this.memory.buffer);
        this.instance.heapF32 = new Float32Array(this.memory.buffer);
    };
    WASM.prototype.align = function(addr) {
        var a = Math.pow(2, this.moduleInfo.memoryAlignment);
        return Math.ceil(addr / a) * a;
    };
    WASM.prototype.c_sbrk = function(size) {
        var previousBrk = this.brk;
        this.brk += size;
        if (this.brk > this.memory.buffer.byteLength) {
            var bytesNeeded = this.brk - this.memory.buffer.byteLength;
            var pagesNeeded = Math.ceil(bytesNeeded / this.pageSize);
            this.memory.grow(pagesNeeded);
            this.createHeapViews();
        }
        return previousBrk;
    };
    WASM.prototype.c_abort = function(size) {
        console.warn("JSMPeg: WASM abort", arguments);
    };
    WASM.prototype.c_assertFail = function(size) {
        console.warn("JSMPeg: WASM ___assert_fail", arguments);
    };
    WASM.prototype.readDylinkSection = function(buffer) {
        var bytes = new Uint8Array(buffer);
        var next = 0;
        var readVarUint = function() {
            var ret = 0;
            var mul = 1;
            while (1) {
                var byte = bytes[next++];
                ret += (byte & 127) * mul;
                mul *= 128;
                if (!(byte & 128)) return ret;
            }
        };
        var matchNextBytes = function(expected) {
            for (var i = 0; i < expected.length; i++) {
                var b = typeof expected[i] === "string" ? expected[i].charCodeAt(0) : expected[i];
                if (bytes[next++] !== b) return false;
            }
            return true;
        };
        if (!matchNextBytes([0, "a", "s", "m"])) {
            console.warn("JSMpeg: WASM header not found");
            return null;
        }
        var next = 9;
        var sectionSize = readVarUint();
        if (!matchNextBytes([6, "d", "y", "l", "i", "n", "k"])) {
            console.warn("JSMpeg: No dylink section found in WASM");
            return null;
        }
        return {
            memorySize: readVarUint(),
            memoryAlignment: readVarUint(),
            tableSize: readVarUint(),
            tableAlignment: readVarUint()
        };
    };
    WASM.IsSupported = function() {
        return !!window.WebAssembly;
    };
    WASM.GetModule = function() {
        WASM.CACHED_MODULE = WASM.CACHED_MODULE || new WASM();
        return WASM.CACHED_MODULE;
    };
    return WASM;
}();
JSMpeg.WASM_BINARY_INLINED = "AGFzbQEAAAAADwZkeWxpbmuA0MACBAAAAAE0CWAEf39/fwBgAX8Bf2ACf38Bf2ABfwBgAn9/AGABfwF9YAZ/f39/f38AYAN/f38Bf2AAAAJGBANlbnYOX19fYXNzZXJ0X2ZhaWwAAANlbnYFX3NicmsAAQNlbnYNX19tZW1vcnlfYmFzZQN/AANlbnYGbWVtb3J5AgCAAgM9PAIDAgEEBAMBBQEBAQEBAQEDBAMGAwQAAwAAAAIDAgEEBAEBAQEBAAACAwIBAgECAQEBAQMEAwMCBwcHCAYLAn8BQQALfwFBAAsHggYfEl9fcG9zdF9pbnN0YW50aWF0ZQA9BV9mcmVlADgHX21hbGxvYwAxB19tZW1jcHkAOghfbWVtbW92ZQA7B19tZW1zZXQAPBNfbXAyX2RlY29kZXJfY3JlYXRlAB0TX21wMl9kZWNvZGVyX2RlY29kZQAmFF9tcDJfZGVjb2Rlcl9kZXN0cm95AB4WX21wMl9kZWNvZGVyX2RpZF93cml0ZQAiFl9tcDJfZGVjb2Rlcl9nZXRfaW5kZXgAICFfbXAyX2RlY29kZXJfZ2V0X2xlZnRfY2hhbm5lbF9wdHIAJCJfbXAyX2RlY29kZXJfZ2V0X3JpZ2h0X2NoYW5uZWxfcHRyACUcX21wMl9kZWNvZGVyX2dldF9zYW1wbGVfcmF0ZQAjGl9tcDJfZGVjb2Rlcl9nZXRfd3JpdGVfcHRyAB8WX21wMl9kZWNvZGVyX3NldF9pbmRleAAhFV9tcGVnMV9kZWNvZGVyX2NyZWF0ZQACFV9tcGVnMV9kZWNvZGVyX2RlY29kZQARFl9tcGVnMV9kZWNvZGVyX2Rlc3Ryb3kAAxhfbXBlZzFfZGVjb2Rlcl9kaWRfd3JpdGUABxlfbXBlZzFfZGVjb2Rlcl9nZXRfY2JfcHRyABAdX21wZWcxX2RlY29kZXJfZ2V0X2NvZGVkX3NpemUACxlfbXBlZzFfZGVjb2Rlcl9nZXRfY3JfcHRyAA8dX21wZWcxX2RlY29kZXJfZ2V0X2ZyYW1lX3JhdGUAChlfbXBlZzFfZGVjb2Rlcl9nZXRfaGVpZ2h0AA0YX21wZWcxX2RlY29kZXJfZ2V0X2luZGV4AAUYX21wZWcxX2RlY29kZXJfZ2V0X3dpZHRoAAwcX21wZWcxX2RlY29kZXJfZ2V0X3dy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BQJ/IANBzQBHDQIgACgCgAFBBhAwIQMCQAJAIAAoAoABQQgQMCIEIgYEQCAGQYABRgRADAIFDAMLAAsgACgCgAFBCBAwDAILIAAoAoABQQgQMEGAfmoMAQsgBEGAfmogBCAEQYABShsLCyEEDAELIAZB/wFxIgNBACADayAAKAKAAUEBEDBFGyEEIAZBCHUhAwsgAiADaiIGIwBBQGtqLQAAIgMgBWotAAAgACgCREEAIARBAXQiAkEfdUEBciAAKAJcGyACamxsIgJBBHVBAEEBQX8gAkEPShsgAkEQcRtrIgJBgHAgAkGAcEobIQIgAEGcAWogA0ECdGogAyMAQZA1amotAAAgAkH/DyACQf8PSBtsNgIAIAZBAWohAgwBCwsgAUEESARAIABBhAFqIQUgAUEDdEEIcSAAKAJUIAAoAhgiAyAAKAJQbGpBBHRyIANBA3RBACABQQJxG2ohBAUgAEGMAWogAEGIAWogAUEERhshBSAAKAJQIAAoAhgiAUECdGwgACgCVEEDdGohBCABQQF1IQMLIANBeGohAyAFKAIAIQUgAkEBRiECIABBnAFqIQEgACgCXARAIAIEQCABKAIAQYABakEIdSAFIAQgAxAYIAFBADYCAAUgARAZIAEgBSAEIAMQGiABQQBBgAIQPBoLBSACBEAgASgCAEGAAWpBCHUgBSAEIAMQGyABQQA2AgAFIAEQGSABIAUgBCADEBwgAUEAQYACEDwaCwsL7AYAIAEgAmogAEEAIABBAEobIgBB/wEgAEH/AUgbQf8BcSIAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAACABIAIgA0EIaiIDaiICaiAAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAACABIAIgA2oiAmogADoAACABIAJBAWpqIAA6AAAgASACQQJqaiAAOgAAIAEgAkEDamogADoAACABIAJBBGpqIAA6AAAgASACQQVqaiAAOgAAIAEgAkEGamogADoAACABIAJBB2pqIAA6AAAgASACIANqIgJqIAA6AAAgASACQQFqaiAAOgAAIAEgAkECamogADoAACABIAJBA2pqIAA6AAAgASACQQRqaiAAOgAAIAEgAkEFamogADoAACABIAJBBmpqIAA6AAAgASACQQdqaiAAOgAAIAEgAiADaiICaiAAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAACABIAIgA2oiAmogADoAACABIAJBAWpqIAA6AAAgASACQQJqaiAAOgAAIAEgAkEDamogADoAACABIAJBBGpqIAA6AAAgASACQQVqaiAAOgAAIAEgAkEGamogADoAACABIAJBB2pqIAA6AAAgASACIANqIgJqIAA6AAAgASACQQFqaiAAOgAAIAEgAkECamogADoAACABIAJBA2pqIAA6AAAgASACQQRqaiAAOgAAIAEgAkEFamogADoAACABIAJBBmpqIAA6AAAgASACQQdqaiAAOgAAIAEgAiADaiICaiAAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAAAubBgEUfwNAIAFBEGpBAnQgAGoiBygCACIGIAFBMGpBAnQgAGoiDSgCACIJaiEFIAFBCGpBAnQgAGoiDigCACICIAFBOGpBAnQgAGoiDygCACIDaiEEIAIgA2siEEHZA2wgAUEoakECdCAAaiIKKAIAIgIgAUEYakECdCAAaiIRKAIAIgNrIgtBvH5sQYABampBCHUgBCACIANqIghqIgJrIgMgBCAIa0HqAmxBgAFqQQh1ayEEIAFBAnQgAGoiCCgCACIMIAFBIGpBAnQgAGoiEigCACITayIUIAYgCWtB6gJsQYABakEIdSAFayIJaiEGIAggAiAMIBNqIgggBWoiDGo2AgAgDiADIAZqNgIAIAcgFCAJayIHIARrNgIAIBEgC0HZA2xBgAFqIBBBxAFsakEIdSAEaiIJIAggBWsiBWo2AgAgEiAFIAlrNgIAIAogBCAHajYCACANIAYgA2s2AgAgDyAMIAJr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aiABQQxsaiAAKAIIQQYQMCICNgLUAiAAIANBgANsaiABQQxsaiACNgLQAiAFIAI2AgAMAgsgBSAAKAIIQQYQMDYCACAAIANBgANsaiABQQxsaiAAKAIIQQYQMCICNgLUAiAAIANBgANsaiABQQxsaiACNgLQAgsLCyADQQFqIgMgCEkNAAsgAUEBaiIBIAtHDQALCwsLaiALQSBJIRsgAEHMtgFqIQQgAEHMCGohHCAAQcz2AGohHSAAQcwLaiEeIABBzJYBaiEfA0BBACEWIBQhAwNAIBgEQEEAIQEDQCAAQQAgASAOECggAEEBIAEgDhAoIAFBAWoiASANSA0ACwsgGQRAIA0hAQNAIABBACABIA4QKCAAQcwLaiABQQxsaiAAQcwIaiABQQxsaigCADYCACAAIAFBDGxqQdALaiAAIAFBDGxqQdAIaigCADYCACAAIAFBDGxqQdQLaiAAIAFBDGxqQdQIaigCADYCACABQQFqIgEgC0gNAAsLIBsEQCALIQEDQCAAQcwIaiABQQxsakEANgIAIAAgAUEMbGpB0AhqQQA2AgAgACABQQxsakHUCGpBADYCACAAQcwLaiABQQxsakEANgIAIAAgAUEMbGpB0AtqQQA2AgAgACABQQxsakHUC2pBADYCACABQQFqIgFBIEcNAAsLIAAoAgQhASADIRFBACESA0AgACABQcAHakH/B3EiATYCBCAcIBIgHSABECkgBEIANwIAIARCADcCCCAEQgA3AhAgBEIANwIYIARCADcCICAEQgA3AiggBEIANwIwIARCADcCOCAEQUBrQgA3AgAgBEIANwJIIARCADcCUCAEQgA3AlggBEIANwJgIARCADcCaCAEQgA3AnAgBEIANwJ4IAAoAgQiD0EBdSETQf8HIA9BgAFvQQF1IgxrIgFBgH9xIRUgAUEHdkEGdEHABGohEEGABCATayEGIAwhAQNAIAYhB0EAIQkgASECA0AgB0EBaiEIIAJBAWohBSAAQcy2AWogCUECdGoiCiAAQczWAGogB0ECdGoqAgAgAEHM9gBqIAJBAnRqKgIAlCAKKAIAspKoNgIAIAlBAWoiCUEgRwRAIAghByAFIQIMAQsLIAFBgAFqIQIgBkFAayEGIAFBgAdIBEAgAiEBDAELC0HgByAMIBVqayIBQYAISARAIBAgE2tBoHxqIQYD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IkogWCBLk7tEujBFka7n9D+itiJLk7tEuEt/Zp6g5j+itiI6kiEqIANBMGpBAnQgAmogTSA8kow4AgAgA0EvakECdCACaiApICiSIEwgSZIgJJIiKJKMIik4AgAgA0ExakECdCACaiApOAIAIANBLmpBAnQgAmogRiBFkiAjkowiKTgCACADQTJqQQJ0IAJqICk4AgAgA0EtakECdCACaiAwIC2SIEAgPpIgJpIiKZIiPCAokowiKDgCACADQTNqQQJ0IAJqICg4AgAgA0EsakECdCACaiA2IE+SIFEgUJIgNZIiKJKMIjY4AgAgA0E0akECdCACaiA2OAIAIANBK2pBAnQgAmogPCA/IDiSIDOSIjwgJJIiJJKMIjY4AgAgA0E1akECdCACaiA2OAIAIANBKmpBAnQgAmogPSBSkiA7kiI9ICOSjCIjOAIAIANBNmpBAnQgAmogIzgCACADQSlqQQJ0IAJqIEsgSpIgOpIiIyAkkowiJDgCACADQTdqQQJ0IAJqICQ4AgAgA0EoakECdCACaiBIIE6SIDGSjCIkOAIAIANBOGpBAnQgAmogJDgCACADQSdqQQJ0IAJqICMgPCArkiIjkowiJDgCACADQTlqQQJ0IAJqICQ4AgAgA0EmakECdCACaiA9ICeSjCIkOAIAIANBOmpBAnQgAmogJDgCACADQSVqQQJ0IAJqICkgLSAwk7tEuEt/Zp6g5j+itiIpkiItICOSjCIjOAIAIANBO2pBAnQgAmogIzgCACADQSRqQQJ0IAJqICggR5KMIiM4AgAgA0E8akECdCACaiAjOAIAIANBI2pBAnQgAmogLSArIDKSIiOSjCIoOAIAIANBPWpBAnQgAmogKDgCACADQSJqQQJ0IAJqICcgU5KMIic4AgAgA0E+akECdCACaiAnOAIAIANBIWpBAnQgAmogIyBCkowiIzgCACADQT9qQQJ0IAJqICM4AgAgA0EgakECdCACaiA0jDgCACADQQJ0IAJqIDQ4AgAgA0EfakECdCACaiAsjDgCACADQQFqQQJ0IAJqICw4AgAgA0EeakECdCACaiA5jDgCACADQQJqQQJ0IAJqIDk4AgAgA0EdakECdCACaiApICaSIjQgQZIiI4w4AgAgA0EDakECdCACaiAjOAIAIANBHGpBAnQgAmogL4w4AgAgA0EEakECdCACaiAvOAIAIANBG2pBAnQgAmogNCA3IDOSIjSSIi+MOAIAIANBBWpBAnQgAmogLzgCACADQRpqQQJ0IAJqIEQgO5IiL4w4AgAgA0EGakECdCACaiAvOAIAIANBGWpBAnQgAmogNCA6kiI0jDgCACADQQdqQQJ0IAJqIDQ4AgAgA0EYakECdCACaiAxjDgCACADQQhqQQJ0IAJqIDE4AgAgA0EXakECdCACaiAqjDgCACADQQlqQQJ0IAJqICo4AgAgA0EWakECdCACaiA7IC6SIjGMOAIAIANBCmpBAnQgAmogMTgCACADQRVqQQJ0IAJqIEMgJpIiMYw4AgAgA0ELakECdCACaiAxOAIAIANBFGpBAnQgAmogNYw4AgAgA0EMakECdCACaiA1OAIAIANBE2pBAnQgAmogJiAlkiImjDgCACADQQ1qQQJ0IAJqICY4AgAgA0ESakECdCACaiAujDgCACADQQ5qQQJ0IAJqIC44AgAgA0ERakECdCACaiAljDgCACADQQ9qQQJ0IAJqICU4AgAgA0EQakECdCACakMAAAAAOAIACy8BAX9BFBAxIgIgATYCECACIAAQMTYCACACIAA2AgggAkEANgIMIAJBADYCBCACCw0AIAAoAgAQOCAAEDgL6QEBBH8gACgCCCIDIAAoAgwiAmsiBCABSQRAAkAgACgCEEECRgRAIAAgACgCACABIARrIANBAXQiAiACIARqIAFJGyIBEDk2AgAgACABNgIIIAAoAgQgACgCDCIBQQN0IgJNDQEgACACNgIEDAELIAIgACgCBCIFQQN2IgNGIAMgBGogAUlyBEAgAEEANgIMIABBADYCBEEAIQEMAQsgAwRAIAAoAgAiASABIANqIAIgA2sQOxogACAAKAIMIANrIgE2AgwgACAAKAIEIAVBeHFrNgIEBSACIQELCwUgAiEBCyAAKAIAIAFqC40BAQR/IAAoAgRBB2pBA3YiASAAKAIMIgRJBEACQCAAKAIAIQIDQAJAIAFBAWohAyABIAJqLAAARQRAIAIgA2osAABFBEAgAiABQQJqaiwAAEEBRg0CCwsgAyAETw0CIAMhAQwBCwsgACABQQN0QSBqNgIEIAIgAUEDamotAAAPCwsgACAEQQN0NgIEQX8LqQEBBH8gACgCBEEHakEDdiICIAAoAgwiBUkEQAJAIAAoAgAh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aiIGQRBLDQALIAMgCWohAyAIayECIQEMAgsgAyABKAIAIgU6AAAgAyABLAABOgABIAJBbGpBcHEiCEESaiIJIAFqIAJBbmogA0ECaiEEIAJBfmohBiABQQJqIQIgBSEBA0AgBCACKAICIgVBEHQgAUEQdnI2AgAgBCACKAIGIgFBEHQgBUEQdnI2AgQgBCACKAIKIgVBEHQgAUEQdnI2AgggBCACKAIOIgFBEHQgBUEQdnI2AgwgAkEQaiECIARBEGohBCAGQXBqIgZBEUsNAAsgAyAJaiEDIAhrIQIhAQwBCyADIAEoAgAiBToAACACQWxqQXBxIghBEWoiCSABaiACQW9qIANBAWohBCACQX9qIQYgAUEBaiECIAUhAQNAIAQgAigCAyIFQRh0IAFBCHZyNgIAIAQgAigCByIBQRh0IAVBCHZyNgIEIAQgAigCCyIFQRh0IAFBCHZyNgIIIAQgAigCDyIBQRh0IAVBCHZyNgIMIAJBEGohAiAEQRBqIQQgBkFwaiIGQRJLDQALIAMgCWohAyAIayECIQELCyACQRBxBEAgAyABLAAAOgAAIAMgASwAAToAASADIAEsAAI6AAIgAyABLAADOgADIAMgASwABDoABCADIAEsAAU6AAUgAyABLAAGOgAGIAMgASwABzoAByADIAEsAAg6AAggAyABLAAJOgAJIAMgASwACjoACiADIAEsAAs6AAsgAyABLAAMOgAMIAMgASwADToADSADIAEsAA46AA4gAyABLAAPOgAPIANBEGohAyABQRBqIQELIAJBCHEEQCADIAEsAAA6AAAgAyABLAABOgABIAMgASwAAjoAAiADIAEsAAM6AAMgAyABLAAEOgAEIAMgASwABToABSADIAEsAAY6AAYgAyABLAAHOgAHIANBCGohAyABQQhqIQELIAJBBHEEQCADIAEsAAA6AAAgAyABLAABOgABIAMgASwAAjoAAiADIAEsAAM6AAMgA0EEaiEDIAFBBGohAQsgAkECcQRAIAMgASwAADoAACADIAEsAAE6AAEgA0ECaiEDIAFBAmohAQsgAkEBcUUEQCAADwsgAyABLAAAOgAAIAALwAMBBn8gACABRgRAIAAPCyABIAJqIABLIAAgAmoiBSABS3FFBEAgACABIAIQOhogAA8LIAEgACIDc0EDcUUhBCADIAFJBH8g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JCQkJCQkJCQkJCQkJCQkJCQAAAABAhEAAAAAAAAAAAAAAAAAAQIDBAUGEQAAAAAAAAAAAAECAwQFBgcICQoLDA0OEQABAwUGBwgJCgsMDQ4PEBEAAQIEBQYHCAkKCwwNDg8RAAECAwQFBgcICQoLDA0ODwMAAQUFAAEHBwAAAwkAAQoPAAAEHwAABT8AAAZ/AAAH/wAACP8BAAn/AwAK/wcAC/8PAAz/HwAN/z8ADv9/AA///wAQAAAAAAAAAAAAAAAAAAAAAupflgEwikIBCAgMW1tbXltec2l6ZSA+IDAAL2hvbWUvZG9taW5pYy9wcm9qZWN0cy9lbXNkay9mYXN0Y29tcC9lbXNjcmlwdGVuLy9zeXN0ZW0vbGliL2VtbWFsbG9jLmNwcABnZXRGcmVlTGlzdEluZGV4AE1JTl9GUkVFTElTVF9JTkRFWCA8PSBpbmRleCAmJiBpbmRleCA8IE1BWF9GUkVFTElTVF9JTkRFWABnZXRBZnRlcihyZWdpb24pIDw9IHNicmsoMCkAZW1tYWxsb2NfbWFsbG9jAHJlZ2lvbi0+Z2V0VXNlZCgpAGdldFBheWxvYWQAKGNoYXIqKWV4dHJhUHRyID09IChjaGFyKilwdHIgKyBzYnJrU2l6ZQBhbGxvY2F0ZVJlZ2lvbgAhbGFzdFJlZ2lvbgAhZmlyc3RSZWdpb24AZmlyc3RSZWdpb24AcHRyID09IGdldEFmdGVyKGxhc3RSZWdpb24pAGV4dGVuZExhc3RSZWdpb24AYWRkVG9GcmVlTGlzdABnZXRCaWdFbm91Z2hGcmVlTGlzdEluZGV4AHBheWxvYWRTaXplID49IHNpemUAcG9zc2libHlTcGxpdFJlbWFpbmRlcgBleHRyYSA+PSBNSU5fUkVHSU9OX1NJWkUAdG90YWxTcGxpdFNpemUgPj0gTUlOX1JFR0lPTl9TSVpFAG1lcmdlSW50b0V4aXN0aW5nRnJlZVJlZ2lvbgByZWdpb24gPT0gbGFzdFJlZ2lvbgBlbW1hbGxvY19yZWFsbG9j";;
(function($, Drupal) {
    Drupal.theme.progressBar = function(id) {
        const escapedId = Drupal.checkPlain(id);
        return (`<div id="${escapedId}" class="progress" aria-live="polite">` + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>');
    };
    Drupal.ProgressBar = function(id, updateCallback, method, errorCallback) {
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;
        this.element = $(Drupal.theme('progressBar', id));
    };
    $.extend(Drupal.ProgressBar.prototype, {
        setProgress(percentage, message, label) {
            if (percentage >= 0 && percentage <= 100) {
                $(this.element).find('div.progress__bar').each(function() {
                    this.style.width = `${percentage}%`;
                });
                $(this.element).find('div.progress__percentage').html(`${percentage}%`);
            }
            $('div.progress__description', this.element).html(message);
            $('div.progress__label', this.element).html(label);
            if (this.updateCallback) this.updateCallback(percentage, message, this);
        },
        startMonitoring(uri, delay) {
            this.delay = delay;
            this.uri = uri;
            this.sendPing();
        },
        stopMonitoring() {
            clearTimeout(this.timer);
            this.uri = null;
        },
        sendPing() {
            if (this.timer) clearTimeout(this.timer);
            if (this.uri) {
                const pb = this;
                let uri = this.uri;
                if (!uri.includes('?')) uri += '?';
                else uri += '&';
                uri += '_format=json';
                $.ajax({
                    type: this.method,
                    url: uri,
                    data: '',
                    dataType: 'json',
                    success(progress) {
                        if (progress.status === 0) {
                            pb.displayError(progress.data);
                            return;
                        }
                        pb.setProgress(progress.percentage, progress.message, progress.label);
                        pb.timer = setTimeout(() => {
                            pb.sendPing();
                        }, pb.delay);
                    },
                    error(xmlhttp) {
                        const e = new Drupal.AjaxError(xmlhttp, pb.uri);
                        pb.displayError(`<pre>${e.message}</pre>`);
                    }
                });
            }
        },
        displayError(string) {
            const error = $('<div class="messages messages--error"></div>').html(string);
            $(this.element).before(error).hide();
            if (this.errorCallback) this.errorCallback(this);
        }
    });
})(jQuery, Drupal);;
/* @license MIT https://raw.githubusercontent.com/muicss/loadjs/4.3.0/LICENSE.txt */
loadjs = function() {
    var h = function() {},
        o = {},
        c = {},
        f = {};

    function u(e, n) {
        if (e) {
            var t = f[e];
            if (c[e] = n, t)
                for (; t.length;) t[0](e, n), t.splice(0, 1)
        }
    }

    function l(e, n) {
        e.call && (e = {
            success: e
        }), n.length ? (e.error || h)(n) : (e.success || h)(e)
    }

    function p(t, r, i, s) {
        var o, e, u, n = document,
            c = i.async,
            f = (i.numRetries || 0) + 1,
            l = i.before || h,
            a = t.replace(/[\?|#].*$/, ""),
            d = t.replace(/^(css|img|module|nomodule)!/, "");
        if (s = s || 0, /(^css!|\.css$)/.test(a))(u = n.createElement("link")).rel = "stylesheet", u.href = d, (o = "hideFocus" in u) && u.relList && (o = 0, u.rel = "preload", u.as = "style");
        else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(a))(u = n.createElement("img")).src = d;
        else if ((u = n.createElement("script")).src = d, u.async = void 0 === c || c, e = "noModule" in u, /^module!/.test(a)) {
            if (!e) return r(t, "l");
            u.type = "module"
        } else if (/^nomodule!/.test(a) && e) return r(t, "l");
        !(u.onload = u.onerror = u.onbeforeload = function(e) {
            var n = e.type[0];
            if (o) try {
                u.sheet.cssText.length || (n = "e")
            } catch (e) {
                18 != e.code && (n = "e")
            }
            if ("e" == n) {
                if ((s += 1) < f) return p(t, r, i, s)
            } else if ("preload" == u.rel && "style" == u.as) return u.rel = "stylesheet";
            r(t, n, e.defaultPrevented)
        }) !== l(t, u) && n.head.appendChild(u)
    }

    function t(e, n, t) {
        var r, i;
        if (n && n.trim && (r = n), i = (r ? t : n) || {}, r) {
            if (r in o) throw "LoadJS";
            o[r] = !0
        }

        function s(n, t) {
            ! function(e, r, n) {
                var t, i, s = (e = e.push ? e : [e]).length,
                    o = s,
                    u = [];
                for (t = function(e, n, t) {
                        if ("e" == n && u.push(e), "b" == n) {
                            if (!t) return;
                            u.push(e)
                        }--s || r(u)
                    }, i = 0; i < o; i++) p(e[i], t, n)
            }(e, function(e) {
                l(i, e), n && l({
                    success: n,
                    error: t
                }, e), u(r, e)
            }, i)
        }
        if (i.returnPromise) return new Promise(s);
        s()
    }
    return t.ready = function(e, n) {
        return function(e, t) {
            e = e.push ? e : [e];
            var n, r, i, s = [],
                o = e.length,
                u = o;
            for (n = function(e, n) {
                    n.length && s.push(e), --u || t(s)
                }; o--;) r = e[o], (i = c[r]) ? n(r, i) : (f[r] = f[r] || []).push(n)
        }(e, function(e) {
            l(n, e)
        }), t
    }, t.done = function(e) {
        u(e, [])
    }, t.reset = function() {
        o = {}, c = {}, f = {}
    }, t.isDefined = function(e) {
        return e in o
    }, t
}();;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function(Drupal, debounce) {
    let liveElement;
    const announcements = [];
    Drupal.behaviors.drupalAnnounce = {
        attach(context) {
            if (!liveElement) {
                liveElement = document.createElement('div');
                liveElement.id = 'drupal-live-announce';
                liveElement.className = 'visually-hidden';
                liveElement.setAttribute('aria-live', 'polite');
                liveElement.setAttribute('aria-busy', 'false');
                document.body.appendChild(liveElement);
            }
        }
    };

    function announce() {
        const text = [];
        let priority = 'polite';
        let announcement;
        const il = announcements.length;
        for (let i = 0; i < il; i++) {
            announcement = announcements.pop();
            text.unshift(announcement.text);
            if (announcement.priority === 'assertive') priority = 'assertive';
        }
        if (text.length) {
            liveElement.innerHTML = '';
            liveElement.setAttribute('aria-busy', 'true');
            liveElement.setAttribute('aria-live', priority);
            liveElement.innerHTML = text.join('\n');
            liveElement.setAttribute('aria-busy', 'false');
        }
    }
    Drupal.announce = function(text, priority) {
        announcements.push({
            text,
            priority
        });
        return debounce(announce, 200)();
    };
})(Drupal, Drupal.debounce);;
((Drupal) => {
    Drupal.Message = class {
        constructor(messageWrapper = null) {
            if (!messageWrapper) this.messageWrapper = Drupal.Message.defaultWrapper();
            else this.messageWrapper = messageWrapper;
        }
        static defaultWrapper() {
            let wrapper = document.querySelector('[data-drupal-messages]') || document.querySelector('[data-drupal-messages-fallback]');
            if (!wrapper) {
                wrapper = document.createElement('div');
                document.body.appendChild(wrapper);
            }
            if (wrapper.hasAttribute('data-drupal-messages-fallback')) {
                wrapper.removeAttribute('data-drupal-messages-fallback');
                wrapper.classList.remove('hidden');
            }
            wrapper.setAttribute('data-drupal-messages', '');
            return wrapper.innerHTML === '' ? Drupal.Message.messageInternalWrapper(wrapper) : wrapper.firstElementChild;
        }
        static getMessageTypeLabels() {
            return {
                status: Drupal.t('Status message'),
                error: Drupal.t('Error message'),
                warning: Drupal.t('Warning message')
            };
        }
        add(message, options = {}) {
            if (!options.hasOwnProperty('type')) options.type = 'status';
            if (typeof message !== 'string') throw new Error('Message must be a string.');
            Drupal.Message.announce(message, options);
            options.id = options.id ? String(options.id) : `${options.type}-${Math.random().toFixed(15).replace('0.','')}`;
            if (!Drupal.Message.getMessageTypeLabels().hasOwnProperty(options.type)) {
                const {
                    type
                } = options;
                throw new Error(`The message type, ${type}, is not present in Drupal.Message.getMessageTypeLabels().`);
            }
            this.messageWrapper.appendChild(Drupal.theme('message', {
                text: message
            }, options));
            return options.id;
        }
        select(id) {
            return this.messageWrapper.querySelector(`[data-drupal-message-id^="${id}"]`);
        }
        remove(id) {
            return this.messageWrapper.removeChild(this.select(id));
        }
        clear() {
            Array.prototype.forEach.call(this.messageWrapper.querySelectorAll('[data-drupal-message-id]'), (message) => {
                this.messageWrapper.removeChild(message);
            });
        }
        static announce(message, options) {
            if (!options.priority && (options.type === 'warning' || options.type === 'error')) options.priority = 'assertive';
            if (options.announce !== '') Drupal.announce(options.announce || message, options.priority);
        }
        static messageInternalWrapper(messageWrapper) {
            const innerWrapper = document.createElement('div');
            innerWrapper.setAttribute('class', 'messages__wrapper');
            messageWrapper.insertAdjacentElement('afterbegin', innerWrapper);
            return innerWrapper;
        }
    };
    Drupal.theme.message = ({
        text
    }, {
        type,
        id
    }) => {
        const messagesTypes = Drupal.Message.getMessageTypeLabels();
        const messageWrapper = document.createElement('div');
        messageWrapper.setAttribute('class', `messages messages--${type}`);
        messageWrapper.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
        messageWrapper.setAttribute('data-drupal-message-id', id);
        messageWrapper.setAttribute('data-drupal-message-type', type);
        messageWrapper.setAttribute('aria-label', messagesTypes[type]);
        messageWrapper.innerHTML = `${text}`;
        return messageWrapper;
    };
})(Drupal);;
(function($, window, Drupal, drupalSettings, loadjs, {
    isFocusable,
    tabbable
}) {
    Drupal.behaviors.AJAX = {
        attach(context, settings) {
            function loadAjaxBehavior(base) {
                const elementSettings = settings.ajax[base];
                if (typeof elementSettings.selector === 'undefined') elementSettings.selector = `#${base}`;
                once('drupal-ajax', $(elementSettings.selector)).forEach((el) => {
                    elementSettings.element = el;
                    elementSettings.base = base;
                    Drupal.ajax(elementSettings);
                });
            }
            Object.keys(settings.ajax || {}).forEach(loadAjaxBehavior);
            Drupal.ajax.bindAjaxLinks(document.body);
            once('ajax', '.use-ajax-submit').forEach((el) => {
                const elementSettings = {};
                elementSettings.url = $(el.form).attr('action');
                elementSettings.setClick = true;
                elementSettings.event = 'click';
                elementSettings.progress = {
                    type: 'throbber'
                };
                elementSettings.base = el.id;
                elementSettings.element = el;
                Drupal.ajax(elementSettings);
            });
        },
        detach(context, settings, trigger) {
            if (trigger === 'unload') Drupal.ajax.expired().forEach((instance) => {
                Drupal.ajax.instances[instance.instanceIndex] = null;
            });
        }
    };
    Drupal.AjaxError = function(xmlhttp, uri, customMessage) {
        let statusCode;
        let statusText;
        let responseText;
        if (xmlhttp.status) statusCode = `\n${Drupal.t('An AJAX HTTP error occurred.')}\n${Drupal.t('HTTP Result Code: !status',{'!status':xmlhttp.status})}`;
        else statusCode = `\n${Drupal.t('An AJAX HTTP request terminated abnormally.')}`;
        statusCode += `\n${Drupal.t('Debugging information follows.')}`;
        const pathText = `\n${Drupal.t('Path: !uri',{'!uri':uri})}`;
        statusText = '';
        try {
            statusText = `\n${Drupal.t('StatusText: !statusText',{'!statusText':xmlhttp.statusText.trim()})}`;
        } catch (e) {}
        responseText = '';
        try {
            responseText = `\n${Drupal.t('ResponseText: !responseText',{'!responseText':xmlhttp.responseText.trim()})}`;
        } catch (e) {}
        responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
        responseText = responseText.replace(/[\n]+\s+/g, '\n');
        const readyStateText = xmlhttp.status === 0 ? `\n${Drupal.t('ReadyState: !readyState',{'!readyState':xmlhttp.readyState})}` : '';
        customMessage = customMessage ? `\n${Drupal.t('CustomMessage: !customMessage',{'!customMessage':customMessage})}` : '';
        this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
        this.name = 'AjaxError';
        if (!Drupal.AjaxError.messages) Drupal.AjaxError.messages = new Drupal.Message();
        Drupal.AjaxError.messages.add(Drupal.t("Oops, something went wrong. Check your browser's developer console for more details."), {
            type: 'error'
        });
    };
    Drupal.AjaxError.prototype = new Error();
    Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;
    Drupal.ajax = function(settings) {
        if (arguments.length !== 1) throw new Error('Drupal.ajax() function must be called with one configuration object only');
        const base = settings.base || false;
        const element = settings.element || false;
        delete settings.base;
        delete settings.element;
        if (!settings.progress && !element) settings.progress = false;
        const ajax = new Drupal.Ajax(base, element, settings);
        ajax.instanceIndex = Drupal.ajax.instances.length;
        Drupal.ajax.instances.push(ajax);
        return ajax;
    };
    Drupal.ajax.instances = [];
    Drupal.ajax.expired = function() {
        return Drupal.ajax.instances.filter((instance) => instance && instance.element !== false && !document.body.contains(instance.element));
    };
    Drupal.ajax.bindAjaxLinks = (element) => {
        once('ajax', '.use-ajax', element).forEach((ajaxLink) => {
            const $linkElement = $(ajaxLink);
            const elementSettings = {
                progress: {
                    type: 'throbber'
                },
                dialogType: $linkElement.data('dialog-type'),
                dialog: $linkElement.data('dialog-options'),
                dialogRenderer: $linkElement.data('dialog-renderer'),
                base: $linkElement.attr('id'),
                element: ajaxLink
            };
            const href = $linkElement.attr('href');
            if (href) {
                elementSettings.url = href;
                elementSettings.event = 'click';
            }
            const httpMethod = $linkElement.data('ajax-http-method');
            if (httpMethod) elementSettings.httpMethod = httpMethod;
            Drupal.ajax(elementSettings);
        });
    };
    Drupal.Ajax = function(base, element, elementSettings) {
        const defaults = {
            httpMethod: 'POST',
            event: element ? 'mousedown' : null,
            keypress: true,
            selector: base ? `#${base}` : null,
            effect: 'none',
            speed: 'none',
            method: 'replaceWith',
            progress: {
                type: 'throbber',
                message: Drupal.t('Processing...')
            },
            submit: {
                js: true
            }
        };
        $.extend(this, defaults, elementSettings);
        this.commands = new Drupal.AjaxCommands();
        this.instanceIndex = false;
        if (this.wrapper) this.wrapper = `#${this.wrapper}`;
        this.element = element;
        this.preCommandsFocusedElementSelector = null;
        this.elementSettings = elementSettings;
        if (this.element && this.element.form) this.$form = $(this.element.form);
        if (!this.url) {
            const $element = $(this.element);
            if (this.element.tagName === 'A') this.url = $element.attr('href');
            else {
                if (this.element && element.form) this.url = this.$form.attr('action');
            }
        }
        const originalUrl = this.url;
        this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
        if (drupalSettings.ajaxTrustedUrl[originalUrl]) drupalSettings.ajaxTrustedUrl[this.url] = true;
        const ajax = this;
        ajax.options = {
            url: ajax.url,
            data: ajax.submit,
            isInProgress() {
                return ajax.ajaxing;
            },
            beforeSerialize(elementSettings, options) {
                return ajax.beforeSerialize(elementSettings, options);
            },
            beforeSubmit(formValues, elementSettings, options) {
                ajax.ajaxing = true;
                ajax.preCommandsFocusedElementSelector = null;
                return ajax.beforeSubmit(formValues, elementSettings, options);
            },
            beforeSend(xmlhttprequest, options) {
                ajax.ajaxing = true;
                return ajax.beforeSend(xmlhttprequest, options);
            },
            success(response, status, xmlhttprequest) {
                ajax.preCommandsFocusedElementSelector = document.activeElement.getAttribute('data-drupal-selector');
                if (typeof response === 'string') response = $.parseJSON(response);
                if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url])
                    if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
                        const customMessage = Drupal.t('The response failed verification so will not be processed.');
                        return ajax.error(xmlhttprequest, ajax.url, customMessage);
                    }
                return (Promise.resolve(ajax.success(response, status)).then(() => {
                    ajax.ajaxing = false;
                    $(document).trigger('ajaxSuccess', [xmlhttprequest, this]);
                    $(document).trigger('ajaxComplete', [xmlhttprequest, this]);
                    if (--$.active === 0) $(document).trigger('ajaxStop');
                }));
            },
            error(xmlhttprequest, status, error) {
                ajax.ajaxing = false;
            },
            complete(xmlhttprequest, status) {
                if (status === 'error' || status === 'parsererror') return ajax.error(xmlhttprequest, ajax.url);
            },
            dataType: 'json',
            jsonp: false,
            method: ajax.httpMethod
        };
        if (elementSettings.dialog) ajax.options.data.dialogOptions = elementSettings.dialog;
        if (!ajax.options.url.includes('?')) ajax.options.url += '?';
        else ajax.options.url += '&';
        let wrapper = `drupal_${elementSettings.dialogType||'ajax'}`;
        if (elementSettings.dialogRenderer) wrapper += `.${elementSettings.dialogRenderer}`;
        ajax.options.url += `${Drupal.ajax.WRAPPER_FORMAT}=${wrapper}`;
        $(ajax.element).on(elementSettings.event, function(event) {
            if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
                '!url': ajax.url
            }));
            return ajax.eventResponse(this, event);
        });
        if (elementSettings.keypress) $(ajax.element).on('keypress', function(event) {
            return ajax.keypressResponse(this, event);
        });
        if (elementSettings.prevent) $(ajax.element).on(elementSettings.prevent, false);
    };
    Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
    Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';
    Drupal.Ajax.prototype.execute = function() {
        if (this.ajaxing) return;
        try {
            this.beforeSerialize(this.element, this.options);
            return $.ajax(this.options);
        } catch (e) {
            this.ajaxing = false;
            window.alert(`An error occurred while attempting to process ${this.options.url}: ${e.message}`);
            return $.Deferred().reject();
        }
    };
    Drupal.Ajax.prototype.keypressResponse = function(element, event) {
        const ajax = this;
        if (event.which === 13 || (event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number')) {
            event.preventDefault();
            event.stopPropagation();
            $(element).trigger(ajax.elementSettings.event);
        }
    };
    Drupal.Ajax.prototype.eventResponse = function(element, event) {
        event.preventDefault();
        event.stopPropagation();
        const ajax = this;
        if (ajax.ajaxing) return;
        try {
            if (ajax.$form) {
                if (ajax.setClick) element.form.clk = element;
                ajax.$form.ajaxSubmit(ajax.options);
            } else {
                ajax.beforeSerialize(ajax.element, ajax.options);
                $.ajax(ajax.options);
            }
        } catch (e) {
            ajax.ajaxing = false;
            window.alert(`An error occurred while attempting to process ${ajax.options.url}: ${e.message}`);
        }
    };
    Drupal.Ajax.prototype.beforeSerialize = function(element, options) {
        if (this.$form && document.body.contains(this.$form.get(0))) {
            const settings = this.settings || drupalSettings;
            Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
        }
        options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
        const pageState = drupalSettings.ajaxPageState;
        options.data['ajax_page_state[theme]'] = pageState.theme;
        options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
        options.data['ajax_page_state[libraries]'] = pageState.libraries;
    };
    Drupal.Ajax.prototype.beforeSubmit = function(formValues, element, options) {};
    Drupal.Ajax.prototype.beforeSend = function(xmlhttprequest, options) {
        if (this.$form) {
            options.extraData = options.extraData || {};
            options.extraData.ajax_iframe_upload = '1';
            const v = $.fieldValue(this.element);
            if (v !== null) options.extraData[this.element.name] = v;
        }
        $(this.element).prop('disabled', true);
        if (!this.progress || !this.progress.type) return;
        const progressIndicatorMethod = `setProgressIndicator${this.progress.type.slice(0,1).toUpperCase()}${this.progress.type.slice(1).toLowerCase()}`;
        if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') this[progressIndicatorMethod].call(this);
    };
    Drupal.theme.ajaxProgressThrobber = (message) => {
        const messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
        const throbber = '<div class="throbber">&nbsp;</div>';
        return `<div class="ajax-progress ajax-progress-throbber">${throbber}${messageMarkup}</div>`;
    };
    Drupal.theme.ajaxProgressIndicatorFullscreen = () => '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
    Drupal.theme.ajaxProgressMessage = (message) => `<div class="message">${message}</div>`;
    Drupal.theme.ajaxProgressBar = ($element) => $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
    Drupal.Ajax.prototype.setProgressIndicatorBar = function() {
        const progressBar = new Drupal.ProgressBar(`ajax-progress-${this.element.id}`, $.noop, this.progress.method, $.noop);
        if (this.progress.message) progressBar.setProgress(-1, this.progress.message);
        if (this.progress.url) progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
        this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
        this.progress.object = progressBar;
        $(this.element).after(this.progress.element);
    };
    Drupal.Ajax.prototype.setProgressIndicatorThrobber = function() {
        this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
        if ($(this.element).closest('[data-drupal-ajax-container]').length) $(this.element).closest('[data-drupal-ajax-container]').after(this.progress.element);
        else $(this.element).after(this.progress.element);
    };
    Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function() {
        this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
        $('body').append(this.progress.element);
    };
    Drupal.Ajax.prototype.commandExecutionQueue = function(response, status) {
        const ajaxCommands = this.commands;
        return Object.keys(response || {}).reduce((executionQueue, key) => executionQueue.then(() => {
            const {
                command
            } = response[key];
            if (command && ajaxCommands[command]) return ajaxCommands[command](this, response[key], status);
        }), Promise.resolve());
    };
    Drupal.Ajax.prototype.success = function(response, status) {
        if (this.progress.element) $(this.progress.element).remove();
        if (this.progress.object) this.progress.object.stopMonitoring();
        $(this.element).prop('disabled', false);
        const elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
        const focusChanged = Object.keys(response || {}).some((key) => {
            const {
                command,
                method
            } = response[key];
            return (command === 'focusFirst' || command === 'openDialog' || (command === 'invoke' && method === 'focus'));
        });
        return (this.commandExecutionQueue(response, status).then(() => {
            if (!focusChanged) {
                let target = false;
                if (this.element) {
                    if ($(this.element).data('refocus-blur') && this.preCommandsFocusedElementSelector) target = document.querySelector(`[data-drupal-selector="${this.preCommandsFocusedElementSelector}"]`);
                    if (!target && !$(this.element).data('disable-refocus')) {
                        for (let n = elementParents.length - 1; !target && n >= 0; n--) target = document.querySelector(`[data-drupal-selector="${elementParents[n].getAttribute('data-drupal-selector')}"]`);
                    }
                }
                if (target) $(target).trigger('focus');
            }
            if (this.$form && document.body.contains(this.$form.get(0))) {
                const settings = this.settings || drupalSettings;
                Drupal.attachBehaviors(this.$form.get(0), settings);
            }
            this.settings = null;
        }).catch((error) => console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error', {
            '!error': error
        }))));
    };
    Drupal.Ajax.prototype.getEffect = function(response) {
        const type = response.effect || this.effect;
        const speed = response.speed || this.speed;
        const effect = {};
        if (type === 'none') {
            effect.showEffect = 'show';
            effect.hideEffect = 'hide';
            effect.showSpeed = '';
        } else if (type === 'fade') {
            effect.showEffect = 'fadeIn';
            effect.hideEffect = 'fadeOut';
            effect.showSpeed = speed;
        } else {
            effect.showEffect = `${type}Toggle`;
            effect.hideEffect = `${type}Toggle`;
            effect.showSpeed = speed;
        }
        return effect;
    };
    Drupal.Ajax.prototype.error = function(xmlhttprequest, uri, customMessage) {
        if (this.progress.element) $(this.progress.element).remove();
        if (this.progress.object) this.progress.object.stopMonitoring();
        $(this.wrapper).show();
        $(this.element).prop('disabled', false);
        if (this.$form && document.body.contains(this.$form.get(0))) {
            const settings = this.settings || drupalSettings;
            Drupal.attachBehaviors(this.$form.get(0), settings);
        }
        throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
    };
    Drupal.theme.ajaxWrapperNewContent = ($newContent, ajax, response) => (response.effect || ajax.effect) !== 'none' && $newContent.filter((i) => !(($newContent[i].nodeName === '#comment' || ($newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent))))).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
    Drupal.theme.ajaxWrapperMultipleRootElements = ($elements) => $('<div></div>').append($elements);
    Drupal.AjaxCommands = function() {};
    Drupal.AjaxCommands.prototype = {
        insert(ajax, response) {
            const $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
            const method = response.method || ajax.method;
            const effect = ajax.getEffect(response);
            const settings = response.settings || ajax.settings || drupalSettings;
            const parseHTML = (htmlString) => {
                const fragment = document.createDocumentFragment();
                const template = fragment.appendChild(document.createElement('template'));
                template.innerHTML = htmlString;
                return template.content.childNodes;
            };
            let $newContent = $(parseHTML(response.data));
            $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);
            switch (method) {
                case 'html':
                case 'replaceWith':
                case 'replaceAll':
                case 'empty':
                case 'remove':
                    Drupal.detachBehaviors($wrapper.get(0), settings);
                    break;
                default:
                    break;
            }
            $wrapper[method]($newContent);
            if (effect.showEffect !== 'show') $newContent.hide();
            const $ajaxNewContent = $newContent.find('.ajax-new-content');
            if ($ajaxNewContent.length) {
                $ajaxNewContent.hide();
                $newContent.show();
                $ajaxNewContent[effect.showEffect](effect.showSpeed);
            } else {
                if (effect.showEffect !== 'show') $newContent[effect.showEffect](effect.showSpeed);
            }
            $newContent.each((index, element) => {
                if (element.nodeType === Node.ELEMENT_NODE && document.documentElement.contains(element)) Drupal.attachBehaviors(element, settings);
            });
        },
        remove(ajax, response, status) {
            const settings = response.settings || ajax.settings || drupalSettings;
            $(response.selector).each(function() {
                Drupal.detachBehaviors(this, settings);
            }).remove();
        },
        changed(ajax, response, status) {
            const $element = $(response.selector);
            if (!$element.hasClass('ajax-changed')) {
                $element.addClass('ajax-changed');
                if (response.asterisk) $element.find(response.asterisk).append(` <abbr class="ajax-changed" title="${Drupal.t('Changed')}">*</abbr> `);
            }
        },
        alert(ajax, response, status) {
            window.alert(response.text);
        },
        announce(ajax, response) {
            if (response.priority) Drupal.announce(response.text, response.priority);
            else Drupal.announce(response.text);
        },
        redirect(ajax, response, status) {
            window.location = response.url;
        },
        css(ajax, response, status) {
            $(response.selector).css(response.argument);
        },
        settings(ajax, response, status) {
            const ajaxSettings = drupalSettings.ajax;
            if (ajaxSettings) Drupal.ajax.expired().forEach((instance) => {
                if (instance.selector) {
                    const selector = instance.selector.replace('#', '');
                    if (selector in ajaxSettings) delete ajaxSettings[selector];
                }
            });
            if (response.merge) $.extend(true, drupalSettings, response.settings);
            else ajax.settings = response.settings;
        },
        data(ajax, response, status) {
            $(response.selector).data(response.name, response.value);
        },
        focusFirst(ajax, response, status) {
            let focusChanged = false;
            const container = document.querySelector(response.selector);
            if (container) {
                const tabbableElements = tabbable(container);
                if (tabbableElements.length) {
                    tabbableElements[0].focus();
                    focusChanged = true;
                } else {
                    if (isFocusable(container)) {
                        container.focus();
                        focusChanged = true;
                    }
                }
            }
            if (ajax.hasOwnProperty('element') && !focusChanged) ajax.element.focus();
        },
        invoke(ajax, response, status) {
            const $element = $(response.selector);
            $element[response.method](...response.args);
        },
        restripe(ajax, response, status) {
            $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
        },
        update_build_id(ajax, response, status) {
            document.querySelectorAll(`input[name="form_build_id"][value="${response.old}"]`).forEach((item) => {
                item.value = response.new;
            });
        },
        add_css(ajax, response, status) {
            if (typeof response.data === 'string') {
                Drupal.deprecationError({
                    message: 'Passing a string to the Drupal.ajax.add_css() method is deprecated in 10.1.0 and is removed from drupal:11.0.0. See https://www.drupal.org/node/3154948.'
                });
                $('head').prepend(response.data);
                return;
            }
            const allUniqueBundleIds = response.data.map(function(style) {
                const uniqueBundleId = style.href;
                if (!loadjs.isDefined(uniqueBundleId)) loadjs(`css!${style.href}`, uniqueBundleId, {
                    before(path, styleEl) {
                        Object.keys(style).forEach((attributeKey) => {
                            styleEl.setAttribute(attributeKey, style[attributeKey]);
                        });
                    }
                });
                return uniqueBundleId;
            });
            return new Promise((resolve, reject) => {
                loadjs.ready(allUniqueBundleIds, {
                    success() {
                        resolve();
                    },
                    error(depsNotFound) {
                        const message = Drupal.t(`The following files could not be loaded: @dependencies`, {
                            '@dependencies': depsNotFound.join(', ')
                        });
                        reject(message);
                    }
                });
            });
        },
        message(ajax, response) {
            const messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
            if (response.clearPrevious) messages.clear();
            messages.add(response.message, response.messageOptions);
        },
        add_js(ajax, response, status) {
            const parentEl = document.querySelector(response.selector || 'body');
            const settings = ajax.settings || drupalSettings;
            const allUniqueBundleIds = response.data.map((script) => {
                const uniqueBundleId = script.src;
                if (!loadjs.isDefined(uniqueBundleId)) loadjs(script.src, uniqueBundleId, {
                    async: false,
                    before(path, scriptEl) {
                        Object.keys(script).forEach((attributeKey) => {
                            scriptEl.setAttribute(attributeKey, script[attributeKey]);
                        });
                        parentEl.appendChild(scriptEl);
                        return false;
                    }
                });
                return uniqueBundleId;
            });
            return new Promise((resolve, reject) => {
                loadjs.ready(allUniqueBundleIds, {
                    success() {
                        Drupal.attachBehaviors(parentEl, settings);
                        resolve();
                    },
                    error(depsNotFound) {
                        const message = Drupal.t(`The following files could not be loaded: @dependencies`, {
                            '@dependencies': depsNotFound.join(', ')
                        });
                        reject(message);
                    }
                });
            });
        },
        scrollTop(ajax, response) {
            const offset = $(response.selector).offset();
            let scrollTarget = response.selector;
            while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) scrollTarget = $(scrollTarget).parent();
            if (offset.top - 10 < $(scrollTarget).scrollTop()) scrollTarget.get(0).scrollTo({
                top: offset.top - 10,
                behavior: 'smooth'
            });
        }
    };
    const stopEvent = (xhr, settings) => {
        return (xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' && settings.isInProgress && settings.isInProgress());
    };
    $.extend(true, $.event.special, {
        ajaxSuccess: {
            trigger(event, xhr, settings) {
                if (stopEvent(xhr, settings)) return false;
            }
        },
        ajaxComplete: {
            trigger(event, xhr, settings) {
                if (stopEvent(xhr, settings)) {
                    $.active++;
                    return false;
                }
            }
        }
    });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);;
(function($, Drupal, once) {
    'use strict';
    let beforeSend = Drupal.Ajax.prototype.beforeSend;
    Drupal.Ajax.prototype.beforeSend = function(xmlhttprequest, options) {
        options.url = removeDuplicatedParameters(options.url);
        beforeSend.apply(this, arguments);
    };

    function removeDuplicatedParameters(url) {
        if (url.indexOf('?') < 0) return url;
        const regex = /\?(.*)/;
        const urlInfo = regex.exec(url);
        if (!urlInfo[1]) return url;
        const oldParams = new URLSearchParams(urlInfo[1]);
        let newParams = new URLSearchParams();
        oldParams.forEach(function(value, key) {
            newParams.set(key, value);
        });
        return url.split('?')[0] + '?' + newParams.toString();
    }
})(jQuery, Drupal, once);;