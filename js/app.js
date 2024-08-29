(function(t) {
    function e(e) {
        for (var i, o, r = e[0], s = e[1], p = e[2], u = 0, m = []; u < r.length; u++) o = r[u], Object.prototype.hasOwnProperty.call(l, o) && l[o] && m.push(l[o][0]), l[o] = 0;
        for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
        c && c(e);
        while (m.length) m.shift()();
        return n.push.apply(n, p || []), a()
    }

    function a() {
        for (var t, e = 0; e < n.length; e++) {
            for (var a = n[e], i = !0, r = 1; r < a.length; r++) {
                var s = a[r];
                0 !== l[s] && (i = !1)
            }
            i && (n.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }
    var i = {},
        l = { app: 0 },
        n = [];

    function o(e) { if (i[e]) return i[e].exports; var a = i[e] = { i: e, l: !1, exports: {} }; return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports }
    o.m = t, o.c = i, o.d = function(t, e, a) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a }) }, o.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(a, i, function(e) { return t[e] }.bind(null, i));
        return a
    }, o.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var p = 0; p < r.length; p++) e(r[p]);
    var c = s;
    n.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) { t.exports = a("56d7") },
    "0495": function(t, e, a) {
        "use strict";
        a("c01c")
    },
    "077a": function(t, e, a) {
        "use strict";
        a("f4f0")
    },
    "1b1e": function(t, e, a) {},
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("2b0e"),
            l = function() {
                var t = this,
                    e = t._self._c;
                return e("div", { attrs: { id: "app" } }, [e("transition", { attrs: { name: "fade", mode: "out-in" } }, [e("router-view", { staticClass: "router-view" })], 1)], 1)
            },
            n = [],
            o = (a("47e2"), a("2241")),
            r = (a("e9a3"), a("d314")),
            s = (a("c65f"), a("2d6d")),
            p = (a("8e11"), a("f253")),
            c = (a("87d0"), a("e41f")),
            u = (a("d707"), a("8f80")),
            m = (a("6370"), a("3acc")),
            d = (a("9753"), a("417e")),
            h = (a("97e4"), a("1a23")),
            v = (a("c625"), a("b650")),
            b = (a("9eda"), a("565f")),
            f = (a("2a53"), a("34e9")),
            k = (a("3ec1"), a("7744")),
            g = (a("b342"), a("ad06"));
        a("d9e2");
        const w = () => { try { const t = TTJSBridge.invoke("operate", "isInApp"); return "true" === t || !0 === t || (console.warn("[mf-webview-tool] 端外执行JSBridge方法"), !1) } catch (t) { return console.warn("[mf-webview-tool] 端外执行JSBridge方法"), !1 } },
            _ = (t = "") => { if (!t) return ""; let e; if (t instanceof Object) try { e = JSON.stringify(t) } catch (a) { console.error(a), e = "" } else e = t; return e },
            y = (t, e, a, i) => { if (!w()) return !1; try { return TTJSBridge.invoke(t, e, _(a), i), !0 } catch (l) { return console.error("[mf-webview-tool][exec]", l), !1 } },
            x = (t, e, a, i) => { if (!w()) return null; try { return TTJSBridge.invoke(t, e, _(a), i) } catch (l) { return console.error("[mf-webview-tool][getter]", l), null } },
            C = (t, e) => new Promise((a, i) => { t(t => { "function" === typeof e && e(null, t), a(t) }, t => { "function" === typeof e && e(t), i(t) }) });
        var T = { envCheck: { regExp: { production: /(.*)appcdn.52tt.com(.*)|(.*)52tt.com\/project(.*)/, gray: /(.*)52tt.com\/gray(.*)/, internal: /(.*)52tt.com\/internal(.*)/ } }, appVersion: { outOfDateText: "当前版本不支持该操作，请升级最新版本" } };
        class I {
            constructor() { this.urlQuery = this.parseUrlQuery() }
            env(...t) {
                if (t && "string" !== typeof t && !Array.isArray(t)) return !1;
                let e = "DEV";
                const a = T.envCheck.regExp,
                    i = window.location.href;
                return a.production.test(i) ? e = "PROD" : a.gray.test(i) ? e = "GRAY" : a.internal.test(i) && (e = "INNER"), t && "string" === typeof t ? t.toUpperCase() === e : t && Array.isArray(t) && t.length ? t.map(t => ("" + t).toUpperCase()).includes(e) : e
            }
            parseUrlQuery() {
                let t = location.search,
                    e = {};
                if (-1 !== t.indexOf("?")) {
                    let a = t.substr(1);
                    a.split("&").forEach(t => { e[t.split("=")[0]] = unescape(t.split("=")[1]) })
                }
                return this.isInApp() && (e.token = this.apiGet("data", "getToken") || e.token, e.uid = this.apiGet("data", "getMyUid") || e.uid), e
            }
            apiExec(t, e, a, i) { return y(t, e, a, i) }
            apiCbGet(t, e, a, i) { const l = `webviewTool_apiCbGet_${t}_${e}`; return C((n, o) => { try { window[l] = t => { "function" === typeof i && i(t), n(t) }, y(t, e, a, l) } catch (r) { o(r) } }) }
            apiGet(t, e, a, i) { return x(t, e, a, i) }
            isInApp() { return w() }
            isIos() { const t = navigator.userAgent; return !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) }
            isAndroid() { const t = navigator.userAgent; return t.indexOf("Android") > -1 || t.indexOf("Adr") > -1 }
            isInWeChat() { const t = navigator.userAgent.toLowerCase(); return !!t.match(/MicroMessenger/i) }
            isInQq() { const t = navigator.userAgent.toLowerCase(); return !!t.match(/ qq\//i) }
            isInSdk() { return this.urlQuery.hasOwnProperty("app") && 12 == this.urlQuery.app }
            getAppVersion(t) { let e = x("operate", "getVersion"); return e ? t && ("" + e).includes(".") || !t && !("" + e).includes(".") ? this.convertAppVersion(e) : t ? Number(e) : e : "" }
            convertAppVersion(t, e) { if (!t) return ""; if ("string" === e && "string" === typeof t || "number" === e && "number" === typeof t) return t; if (("" + t).includes(".")) { const e = t.split("."); if (e.length < 3) return ""; let a = 0; return a |= e[0] << 24, a |= (e[1] || 0) << 16, a |= (e[2] || 0) << 0, a } let a = parseInt(t, 10).toString(2); const i = [0, 0, 0]; return i[2] = parseInt(parseInt(a.substr(-16), 2), 10) || 0, a = a.substr(0, a.length - 16), i[1] = parseInt(parseInt(a.substr(-8), 2), 10) || 0, a = a.substr(0, a.length - 8), i[0] = parseInt(parseInt(a, 2), 10) || 0, i.join(".") }
            compareAppVersion(t, e = !1) {
                const a = () => { e && !compare && ("string" !== typeof e ? this.appShowToast(T.appVersion.outOfDateText) : this.appShowToast(e)) };
                if ("string" !== typeof t && "number" !== typeof t) return a(), 0;
                let i = this.convertAppVersion(t, "number"),
                    l = this.getAppVersion(!0);
                return l ? l > i ? 2 : l === i ? 1 : (a(), 0) : 0
            }
            getUserToken() { return this.apiGet("data", "getToken") }
            getUserNickname() { return this.apiGet("data", "getMyNickname") }
            getUserUid() { return this.apiGet("data", "getMyUid") }
            getUserAccount() { return this.apiGet("data", "getMyAccount") }
            getCurrentPageTitle() { return this.apiGet("ui", "getCurrentPageTitle") }
            setCurrentPageTitle(t) { return this.apiExec("ui", "setCurrentPageTitle", JSON.stringify({ title: t })) }
            closeCurrentPage() { return this.apiExec("ui", "finishActivity") }
            setRightButtonList(t = []) { return this.apiExec("ui", "setRightButtonList", JSON.stringify(t)) }
            hideRightButtonList() { return this.apiExec("ui", "setRightButtonList", "[]") }
            showRightText() { return this.apiExec("ui", "setRightTextVisibility", !0) }
            hideRightText() { return this.apiExec("ui", "setRightTextVisibility", !1) }
            setRightText({ text: t, textColor: e, textBgColor: a, image: i, method: l }) { if (!t) return !1; try { e || a ? this.apiExec("ui", "updateRightItemView", JSON.stringify({ text: t, textColor: e, textBgColor: a })) : this.apiExec("ui", "updateRightText", t), i && this.apiExec("ui", "updateRightImage", i), window.webviewTool_handleRightTextClick = () => {}; let n = "webviewTool_handleRightTextClick"; return l && "function" === typeof l ? window.webviewTool_handleRightTextClick = l : l && "string" === typeof l && (n = l), this.apiExec("ui", "setRightTextRunMethod", '{"method" : ' + n + "}"), this.showRightText(), !0 } catch (n) { return console.error(n), !1 } }
            setTitleBarVisibility(t) { return this.apiExec("ui", "setTitlebarVisibility", t) }
            showTitleBar() { return this.setTitleBarVisibility(!0) }
            hideTitleBar() { return this.setTitleBarVisibility(!1) }
            setFullScreen(t) { return this.apiExec("ui", "enterfullscreen", t) }
            enterFullScreen() { return this.setFullScreen(!0) }
            leaveFullScreen() { return this.setFullScreen(!1) }
            clearGoBackInvokeMethod() { return window.webviewTool_goBackInvokeMethod = void 0, this.apiExec("ui", "setGoBackInvokeMethod", JSON.stringify({ methodKey: location.origin + location.pathname, methodName: "" })) }
            setGoBackInvokeMethod(t) { return "function" === typeof t && (window.webviewTool_goBackInvokeMethod = t, this.apiExec("ui", "setGoBackInvokeMethod", JSON.stringify({ methodKey: location.origin + location.pathname, method: "webviewTool_goBackInvokeMethod" }))) }
            shareUrl({ share_type: t, title: e, content: a, url: i, imageUrl: l, musicUrl: n }) { return this.apiExec("ui", "thirdPlatformShare", JSON.stringify({ share_type: t, title: e, content: a, url: i, imageUrl: l, musicUrl: n, ttShareMsgType: 0 })) }
            shareImage(t, e) {
                return C((e, a) => {
                    this.saveImage(t).then(t => {
                        const i = this.apiExec("ui", "thirdPlatformShare", JSON.stringify({ share_type: "TT", imagePath: t, ttShareMsgType: 1 }));
                        i ? e(!0) : a(!1)
                    }).catch(() => { a(!1) })
                }, e)
            }
            appShowToast(t) { return !!t && this.apiExec("operate", "showToast", t) }
            saveImage(...t) {
                if (t.length < 1) throw Error("[mf-webview-tool][saveImage]方法的参数数量错误");
                const e = t[0],
                    a = "number" !== typeof t[1] || 1 !== a && 2 !== a ? 1 : t[1];
                let i = t[2];
                return "function" === typeof t[1] && (i = t[1]), C((t, i) => {
                    const l = e => {
                        window.webviewTool_saveImgCallback = e => {
                            if (!e) return void i(Error("saveImgToGallery执行失败"));
                            let a;
                            try { a = JSON.parse(e) } catch (l) { return void i(l) }
                            a.imgPath ? t(a.imgPath) : i(Error("saveImgToGallery执行失败"))
                        };
                        const l = this.apiExec("operate", "saveImgToGallery", JSON.stringify({ base64: e, imgType: a }), "webviewTool_saveImgCallback");
                        l || i(Error("saveImgToGallery执行失败"))
                    };
                    if ("string" === typeof e) {
                        if (!/base64/.test(e)) return void i(Error("file参数无效"));
                        l(e)
                    } else if (e instanceof File) {
                        const t = new FileReader;
                        t.readAsDataURL(e), t.onload = function() { l(this.result) }, t.onerror = function(t) { i(t) }
                    } else i(Error("file参数类型错误"))
                }, i)
            }
            appJumpLink(t) { return this.apiExec("operate", "jump", t) }
            appJumpRoom(t) { return this.appJumpLink("tt://navigation/channel/" + t) }
            appJumpUser(t) { return this.appJumpLink("tt://userdetail/" + t) }
            appJumpUserIm(t, e = "") { return e ? this.appJumpLink(`tt://chat/${t}/${e}`) : this.appJumpLink("tt://chat/" + t) }
            appJumpRoomFastMatch(t, e = !0) { return !!this.isInApp() && (!t || t < 1 ? (console.error("[appJumpRoomFastMatch] tabId未指定或无效"), !1) : this.appJumpLink(`tt://navigation/fast_matching/0/0/${t}/${e}`)) }
            appJumpRoomRandomFastMatch(t, e = !0) { return !!this.isInApp() && ([0, 1, 2, "0", "1", "2"].includes(t) ? this.appJumpLink(`tt://navigation/random_fast_matching/0/0/${t}/${e}`) : (console.error("[appJumpRoomRandomFastMatch] type未指定或无效"), !1)) }
            appJumpCircle(t) { return this.appJumpLink("tt://navigation/circle/" + t) }
            appJumpGuild(t, e, a) { return this.appJumpLink(`tt://navigation/guild/${t}/${e}/${a}`) }
            appJumpGuildById(t) { return this.appJumpLink("tt://navigation/guildbyid/" + t) }
            appJumpTopic(t, e) { return this.apiExec("operate", "toSecondTopic", { id: t, name: e }) }
            appJumpUgcDetail(t) { return this.apiExec("operate", "toUgcDetail", { id: t }) }
            appJumpFriendship(t) { return this.appJumpLink("tt://friendship/" + t) }
            appJumpPersonalityDress(t) { return this.appJumpLink("tt://userPersonalityDress/" + t) }
            appJumpUserMedal(t) { return this.appJumpLink("tt://userMedal/" + t) }
            appJumpPrivacyAndSafety() { return this.appJumpLink("tt://privacyAndSafety") }
            appJumpSetting() { return this.appJumpLink("tt://setting") }
            appJumpInviteUser() { return this.apiExec("nav", "inviteUser") }
            appJumpSystemAppSetting() { return this.apiExec("nav", "toSetting") }
            appJumpOtherApp(t) { if (!t || "string" !== typeof t) return !1; let e = t; const a = { oppo: "com.color.safecenter", vivo: "com.iqoo.secure" }; return a[t] && (e = [t]), this.apiExec("nav", "toOtherApp", e) }
        }
        var j = new I;
        i["a"].use(g["a"]), i["a"].use(k["a"]), i["a"].use(f["a"]), i["a"].use(b["a"]), i["a"].use(v["a"]), i["a"].use(h["a"]), i["a"].use(d["a"]), i["a"].use(m["a"]), i["a"].use(u["a"]), i["a"].use(c["a"]), i["a"].use(p["a"]), i["a"].use(s["a"]), i["a"].use(r["a"]);
        var J = { provide() { return { showResultDialog: this.showResultDialog } }, methods: { showResultDialog(t = "", e) { t && "string" !== typeof t && (t = t.toString()), o["a"].alert({ title: "运行结果", message: t }).then(() => { "function" === typeof e && e() }) } }, created() { window.webviewTool = j } },
            R = J,
            U = (a("78f8"), a("2877")),
            G = Object(U["a"])(R, l, n, !1, null, null, null),
            S = G.exports,
            A = a("8c4f"),
            P = function() {
                var t = this,
                    e = t._self._c;
                return e("div", { staticClass: "demo-home" }, [e("div", { staticClass: "demo-home-title" }, [t._v("webview-tool")]), e("div", { staticClass: "demo-home-desc" }, [t._v("客户端webview测试工具")]), t._l(t.demoList, (function(a, i) { return e("div", { key: i, staticClass: "demo-home-nav" }, [e("div", { staticClass: "demo-home-nav-title" }, [t._v(t._s(a.title))]), e("div", { staticClass: "demo-home-nav-group" }, t._l(a.subs, (function(a, i) { return e("router-link", { key: i, staticClass: "demo-home-nav-block", attrs: { to: a.to } }, [t._v(" " + t._s(a.title) + " "), e("van-icon", { staticClass: "demo-home-nav-icon", attrs: { name: "arrow", color: "#B6C3D2" } })], 1) })), 1)]) }))], 2)
            },
            M = [],
            B = { name: "Home", components: {}, data() { return { demoList: [{ title: "页面常规", subs: [{ title: "基础", to: "/common/base" }] }, { title: "JS-API", subs: [{ title: "通用", to: "/jsapi/usual" }, { title: "数据模块", to: "/jsapi/data" }, { title: "视图模块", to: "/jsapi/ui" }, { title: "导航模块", to: "/jsapi/nav" }, { title: "新短链协议", to: "/jsapi/new-link" }] }, { title: "端外测试", subs: [{ title: "基础", to: "/outside/base" }] }] } }, mounted() {} },
            D = B,
            L = (a("077a"), Object(U["a"])(D, P, M, !1, null, "bddedbda", null)),
            $ = L.exports,
            O = function() {
                var t = this,
                    e = t._self._c;
                return e("MainLayout", { attrs: { title: "基础" } }, [e("van-cell-group", { attrs: { title: "页面基础" } }, t._l(t.pageBase.cells, (function(a) { return e("van-cell", { key: a.key, attrs: { title: a.title || a.key, value: t._f("emptyStr")(t.pageBase.values[a.key]), label: a.label } }) })), 1)], 1)
            },
            F = [],
            V = function() {
                var t = this,
                    e = t._self._c;
                return e("div", { staticClass: "layout-main" }, [e("van-sticky", [e("van-nav-bar", { attrs: { title: t.title, "left-text": "返回", "left-arrow": "" }, on: { "click-left": t.handleBack } })], 1), e("div", { staticClass: "container" }, [t._t("default")], 2)], 1)
            },
            E = [],
            N = (a("2591"), a("3104")),
            Q = (a("da02"), a("6b41")),
            H = { name: "MainLayout", components: { "van-nav-bar": Q["a"], "van-sticky": N["a"] }, props: { title: String }, methods: { handleBack() { this.$router.replace("/") } } },
            q = H,
            W = (a("ccac"), Object(U["a"])(q, V, E, !1, null, "61c19483", null)),
            z = W.exports,
            K = { name: "CommonBase", components: { MainLayout: z }, data() { return { pageBase: { values: { env: "DEV", urlQuery: "", isInApp: "否", isInWeChat: "否", isInQq: "否", isInSdk: "否" }, cells: [{ key: "env", title: "env(param[, param[, ... param]])", label: "当前链接环境 ( PROD生产 GRAY灰度 INNER内网 DEV开发 )" }, { key: "urlQuery", label: "当前url参数key-value对象" }, { key: "isInApp", title: "isInApp()", label: "是否在app内" }, { key: "isInWeChat", title: "isInWeChat()", label: "是否在微信客户端内" }, { key: "isInQq", title: "isInQq()", label: "是否在QQ客户端内" }, { key: "isInSdk", title: "isInSdk()", label: "是否在SDK内" }] } } }, methods: { booleanStr(t) { return t ? "是" : "否" } }, created() { this.pageBase.values.env = window.webviewTool.env(), this.pageBase.values.urlQuery = JSON.stringify(window.webviewTool.urlQuery), this.pageBase.values.isInApp = this.booleanStr(window.webviewTool.isInApp()), this.pageBase.values.isInWeChat = this.booleanStr(window.webviewTool.isInWeChat()), this.pageBase.values.isInQq = this.booleanStr(window.webviewTool.isInQq()), this.pageBase.values.isInSdk = this.booleanStr(window.webviewTool.isInSdk()) } },
            Y = K,
            X = (a("d9f8"), Object(U["a"])(Y, O, F, !1, null, "534bfc6a", null)),
            Z = X.exports,
            tt = function() {
                var t = this,
                    e = t._self._c;
                return e("MainLayout", { attrs: { title: "通用" } }, [e("van-cell-group", { attrs: { title: "ApiExec 执行JS-API方法" } }, [e("van-field", { attrs: { placeholder: "module", label: "模块", clearable: "" }, model: { value: t.form.apiExec.module, callback: function(e) { t.$set(t.form.apiExec, "module", e) }, expression: "form.apiExec.module" } }), e("van-field", { attrs: { placeholder: "method", label: "方法", clearable: "" }, model: { value: t.form.apiExec.method, callback: function(e) { t.$set(t.form.apiExec, "method", e) }, expression: "form.apiExec.method" } }), e("van-field", { attrs: { placeholder: "params", label: "参数", clearable: "" }, model: { value: t.form.apiExec.params, callback: function(e) { t.$set(t.form.apiExec, "params", e) }, expression: "form.apiExec.params" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleApiExec } }, [t._v("执 行")])], 1)], 1), e("van-cell-group", { attrs: { title: "ApiGet JS-API 同步获取数据" } }, [e("van-field", { attrs: { placeholder: "module", label: "模块", clearable: "" }, model: { value: t.form.apiGet.module, callback: function(e) { t.$set(t.form.apiGet, "module", e) }, expression: "form.apiGet.module" } }), e("van-field", { attrs: { placeholder: "method", label: "方法", clearable: "" }, model: { value: t.form.apiGet.method, callback: function(e) { t.$set(t.form.apiGet, "method", e) }, expression: "form.apiGet.method" } }), e("van-field", { attrs: { placeholder: "params", label: "参数", clearable: "" }, model: { value: t.form.apiGet.params, callback: function(e) { t.$set(t.form.apiGet, "params", e) }, expression: "form.apiGet.params" } }), e("van-cell", { attrs: { "is-link": "" }, on: { click: function(e) { t.popup.apiGet = !0 } } }, [t._v("选择预设")]), e("van-popup", { style: { height: "30%" }, attrs: { position: "bottom" }, model: { value: t.popup.apiGet, callback: function(e) { t.$set(t.popup, "apiGet", e) }, expression: "popup.apiGet" } }, [e("van-cell-group", t._l(t.presets.apiGet, (function(a, i) { return e("van-cell", { key: i, attrs: { "is-link": "" }, on: { click: function(e) { return t.handleSelectPreset("apiGet", i) } } }, [t._v(t._s(a.title))]) })), 1)], 1), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleApiGet } }, [t._v("执 行")])], 1), t.result.apiGet ? e("van-cell", { attrs: { title: "结果", value: t.result.apiGet } }) : t._e()], 1), e("van-cell-group", { attrs: { title: "apiCbGet JS-API 回调获取结果" } }, [e("van-field", { attrs: { placeholder: "module", label: "模块", clearable: "" }, model: { value: t.form.apiCbGet.module, callback: function(e) { t.$set(t.form.apiCbGet, "module", e) }, expression: "form.apiCbGet.module" } }), e("van-field", { attrs: { placeholder: "method", label: "方法", clearable: "" }, model: { value: t.form.apiCbGet.method, callback: function(e) { t.$set(t.form.apiCbGet, "method", e) }, expression: "form.apiCbGet.method" } }), e("van-field", { attrs: { placeholder: "params", label: "参数", clearable: "" }, model: { value: t.form.apiCbGet.params, callback: function(e) { t.$set(t.form.apiCbGet, "params", e) }, expression: "form.apiCbGet.params" } }), e("van-cell", { attrs: { "is-link": "" }, on: { click: function(e) { t.popup.apiCbGet = !0 } } }, [t._v("选择预设")]), e("van-popup", { style: { height: "30%" }, attrs: { position: "bottom" }, model: { value: t.popup.apiCbGet, callback: function(e) { t.$set(t.popup, "apiCbGet", e) }, expression: "popup.apiCbGet" } }, [e("van-cell-group", t._l(t.presets.apiCbGet, (function(a, i) { return e("van-cell", { key: i, attrs: { "is-link": "" }, on: { click: function(e) { return t.handleSelectPreset("apiCbGet", i) } } }, [t._v(t._s(a.title))]) })), 1)], 1), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleApiCbGet } }, [t._v("执 行")])], 1), t.result.apiCbGet ? e("van-cell", { attrs: { title: "结果", value: t.result.apiCbGet } }) : t._e()], 1)], 1)
            },
            et = [],
            at = {
                name: "JsApiUsual",
                inject: ["showResultDialog"],
                components: { MainLayout: z },
                data() { return { form: { apiExec: { module: "", method: "", params: "" }, apiGet: { module: "", method: "", params: "" }, apiCbGet: { module: "", method: "", params: "" } }, result: { apiGet: "", apiCbGet: "" }, popup: { apiGet: !1, apiCbGet: !1 }, presets: { apiGet: [{ title: "getCurrentChannelInfo 获取当前用户房间信息", form: { module: "data", method: "getCurrentChannelInfo", params: "" } }, { title: "getMyNickname 获取昵称", form: { module: "data", method: "getMyNickname", params: "" } }], apiCbGet: [{ title: "followUser 关注用户", form: { module: "operate", method: "followUser", params: "" } }, { title: "chosePicture 相册选择图片", form: { module: "operate", method: "chosePicture", params: "{choseMaxSize: 4}" } }] } } },
                methods: {
                    handleApiExec() { window.webviewTool.apiExec(this.form.apiExec.module, this.form.apiExec.method, this.form.apiExec.params) },
                    handleApiGet() {
                        const t = window.webviewTool.apiGet(this.form.apiGet.module, this.form.apiGet.method, this.form.apiGet.params);
                        this.result.apiGet = t, this.showResultDialog(t)
                    },
                    handleApiCbGet() { window.webviewTool.apiCbGet(this.form.apiCbGet.module, this.form.apiCbGet.method, this.form.apiCbGet.params, t => { this.result.apiCbGet = t, this.showResultDialog(t) }) },
                    handleSelectPreset(t, e) { this.form[t] = Object.assign(this.form[t], this.presets[t][e].form), this.popup[t] = !1 }
                }
            },
            it = at,
            lt = Object(U["a"])(it, tt, et, !1, null, "23486d18", null),
            nt = lt.exports,
            ot = function() {
                var t = this,
                    e = t._self._c;
                return e("MainLayout", { attrs: { title: "数据模块" } }, [e("div", { staticClass: "demo-block" }, [e("h2", { staticClass: "demo-block-title" }, [t._v("App版本号")])]), e("van-cell", { attrs: { title: "getAppVersion()", label: "获取字符app版本号", value: t._f("emptyStr")(t.appVersion.version) } }), e("van-cell", { attrs: { title: "getAppVersion(true)", label: "获取数字app版本号", value: t._f("emptyStr")(t.appVersion.versionNumber) } }), e("van-cell-group", { attrs: { title: "convertAppVersion() app版本号转换" } }, [e("van-field", { attrs: { label: "version", placeholder: "待转换版本号 如：5.1.0 或 83951616", clearable: "" }, model: { value: t.appVersion.convertAppVersion, callback: function(e) { t.$set(t.appVersion, "convertAppVersion", e) }, expression: "appVersion.convertAppVersion" } }), e("van-cell", { attrs: { title: "转换结果" } }, [t._v(" " + t._s(t.convertAppVersionResult || "-") + " ")])], 1), e("van-cell-group", { attrs: { title: "compareAppVersion(version, showToast) app版本号与目标对比" } }, [e("van-field", { attrs: { label: "version", placeholder: "目标版本号 如：5.1.0 或 83951616", clearable: "" }, model: { value: t.appVersion.compareVersion, callback: function(e) { t.$set(t.appVersion, "compareVersion", e) }, expression: "appVersion.compareVersion" } }), e("van-cell", { attrs: { title: "showToast", label: "app版本号更低时是否展示toast提示" } }, [e("van-switch", { model: { value: t.appVersion.compareShowToast, callback: function(e) { t.$set(t.appVersion, "compareShowToast", e) }, expression: "appVersion.compareShowToast" } })], 1), e("van-field", { attrs: { label: "showToast", placeholder: "自定义toast文字", clearable: "" }, model: { value: t.appVersion.compareCustomToastText, callback: function(e) { t.$set(t.appVersion, "compareCustomToastText", e) }, expression: "appVersion.compareCustomToastText" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleCompareAppVersion } }, [t._v("比 较")])], 1)], 1), e("div", { staticClass: "demo-block" }, [e("h2", { staticClass: "demo-block-title" }, [t._v("用户信息")])]), e("van-cell", { attrs: { title: "getUserToken()", label: "获取用户token", "is-link": !!t.userData.token, value: t.userData.token ? "查看" : "-" } }), e("van-cell", { attrs: { title: "getUserNickname()", label: "获取用户昵称", value: t._f("emptyStr")(t.userData.nickname) } }), e("van-cell", { attrs: { title: "getUserUid()", label: "获取用户UID", value: t._f("emptyStr")(t.userData.uid) } }), e("van-cell", { attrs: { title: "getUserAccount()", label: "获取用户账号(ttid)", value: t._f("emptyStr")(t.userData.account) } })], 1)
            },
            rt = [],
            st = (a("433b"), a("d399")),
            pt = {
                name: "JsApiData",
                inject: ["showResultDialog"],
                components: { MainLayout: z },
                data() { return { appVersion: { version: "", versionNumber: "", convertAppVersion: "", compareVersion: "", compareShowToast: !1, compareCustomToastText: "" }, userData: { token: "", nickname: "", uid: "", account: "" } } },
                computed: { convertAppVersionResult() { return window.webviewTool.convertAppVersion(this.appVersion.convertAppVersion) } },
                methods: {
                    handleCompareAppVersion() {
                        if (!window.webviewTool.isInApp()) return void st["a"].fail("当前不在APP中");
                        const t = window.webviewTool.compareAppVersion(this.appVersion.compareVersion, this.appVersion.compareCustomToastText || this.appVersion.compareShowToast);
                        this.showResultDialog(`运行结果：${t} ${{0:"app版本更旧",1:"与app版本相同",2:"app版本更新"}[t]}`)
                    }
                },
                created() { this.appVersion.version = window.webviewTool.getAppVersion(), this.appVersion.versionNumber = window.webviewTool.getAppVersion(!0), this.userData.token = window.webviewTool.getUserToken(), this.userData.nickname = window.webviewTool.getUserNickname(), this.userData.uid = window.webviewTool.getUserUid(), this.userData.account = window.webviewTool.getUserAccount() }
            },
            ct = pt,
            ut = Object(U["a"])(ct, ot, rt, !1, null, "0a4fd28d", null),
            mt = ut.exports,
            dt = function() {
                var t = this,
                    e = t._self._c;
                return e("MainLayout", { attrs: { title: "视图模块" } }, [e("div", { staticClass: "demo-block" }, [e("h2", { staticClass: "demo-block-title" }, [t._v("页面基础")])]), e("van-cell", { attrs: { title: "getCurrentPageTitle()", label: "获取当前页面标题", value: t._f("emptyStr")(t.pageTitle.current) } }), e("van-cell-group", { attrs: { title: "更改页面标题" } }, [e("van-field", { attrs: { label: "title", placeholder: "标题", clearable: "" }, model: { value: t.pageTitle.toSet, callback: function(e) { t.$set(t.pageTitle, "toSet", e) }, expression: "pageTitle.toSet" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleSetPageTitle } }, [t._v("设 置")])], 1)], 1), e("van-cell-group", { attrs: { title: "关闭当前页面" } }, [e("van-cell", { attrs: { clickable: "", title: "closeCurrentPage()", "is-link": "" }, on: { click: t.handleClosePage } })], 1), e("div", { staticClass: "demo-block" }, [e("h2", { staticClass: "demo-block-title" }, [t._v("右上角按钮")])]), e("van-cell-group", { attrs: { title: "右上角菜单按钮" } }, [e("van-checkbox-group", { model: { value: t.rightButtonListResult, callback: function(e) { t.rightButtonListResult = e }, expression: "rightButtonListResult" } }, [e("van-cell-group", t._l(t.rightButtonList, (function(a, i) { return e("van-cell", { key: a.name, attrs: { clickable: "", title: `${a.name} ${a.label}` }, on: { click: function(e) { return t.handleToggleRightButtonList(i) } }, scopedSlots: t._u([{ key: "right-icon", fn: function() { return [e("van-checkbox", { ref: "rightButtonListCheckboxes", refInFor: !0, attrs: { name: a.name } })] }, proxy: !0 }], null, !0) }) })), 1)], 1), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleSetRightButtonList } }, [t._v("显示")]), e("van-button", { attrs: { round: "", block: "", type: "warning" }, on: { click: t.handleHideRightButtonList } }, [t._v("隐藏")])], 1)], 1), e("van-cell-group", { attrs: { title: "右上角文字按钮" } }, [e("van-field", { attrs: { label: "text", placeholder: "按钮文字", clearable: "" }, model: { value: t.rightText.text, callback: function(e) { t.$set(t.rightText, "text", e) }, expression: "rightText.text" } }), e("van-field", { attrs: { label: "textColor", placeholder: "文字颜色 如：#FFFFFF", clearable: "" }, model: { value: t.rightText.textColor, callback: function(e) { t.$set(t.rightText, "textColor", e) }, expression: "rightText.textColor" } }), e("van-field", { attrs: { label: "textBgColor", placeholder: "按钮背景色 如：#000000", clearable: "" }, model: { value: t.rightText.textBgColor, callback: function(e) { t.$set(t.rightText, "textBgColor", e) }, expression: "rightText.textBgColor" } }), e("van-cell", { attrs: { title: "method", label: "按钮点击执行方法", value: "alert('rightTextClick');" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleSetRightText } }, [t._v("设置")]), e("van-button", { attrs: { round: "", block: "", type: "warning" }, on: { click: t.handleHideRightText } }, [t._v("隐藏")])], 1)], 1), e("div", { staticClass: "demo-block" }, [e("h2", { staticClass: "demo-block-title" }, [t._v("窗口相关")])]), e("van-cell-group", { attrs: { title: "设置TitleBar可见性" } }, [e("van-cell", { attrs: { clickable: "", title: "showTitleBar()", label: "显示TitleBar", "is-link": "" }, on: { click: function(e) { return t.handleSwitchTitleBar(!0) } } }), e("van-cell", { attrs: { clickable: "", title: "hideTitleBar()", label: "隐藏TitleBar", "is-link": "" }, on: { click: function(e) { return t.handleSwitchTitleBar(!1) } } })], 1), e("van-cell-group", { attrs: { title: "设置全屏样式" } }, [e("van-cell", { attrs: { clickable: "", title: "enterFullScreen()", label: "进入全屏", "is-link": "" }, on: { click: function(e) { return t.handleSwitchFullScreen(!0) } } }), e("van-cell", { attrs: { clickable: "", title: "leaveFullScreen()", label: "退出全屏", "is-link": "" }, on: { click: function(e) { return t.handleSwitchFullScreen(!1) } } })], 1), e("van-cell-group", { attrs: { title: "客户端返回拦截" } }, [e("van-cell", { attrs: { clickable: "", title: "setGoBackInvokeMethod()", label: "设置拦截", "is-link": "" }, on: { click: function(e) { return t.handleSetGoBackInvokeMethod(!0) } } }), e("van-cell", { attrs: { clickable: "", title: "clearGoBackInvokeMethod()", label: "取消拦截", "is-link": "" }, on: { click: function(e) { return t.handleSetGoBackInvokeMethod(!1) } } })], 1), e("div", { staticClass: "demo-block" }, [e("h2", { staticClass: "demo-block-title" }, [t._v("分享")])]), e("van-cell-group", { attrs: { title: "链接分享" } }, [e("van-field", { attrs: { readonly: "", clickable: "", name: "picker", value: t.shareUrl.shareTypeName, label: "分享到", placeholder: "点击选择" }, on: { click: function(e) { t.shareUrl.showPicker = !0 } } }), e("van-popup", { attrs: { position: "bottom" }, model: { value: t.shareUrl.showPicker, callback: function(e) { t.$set(t.shareUrl, "showPicker", e) }, expression: "shareUrl.showPicker" } }, [e("van-picker", { attrs: { "show-toolbar": "", columns: t.shareUrl.shareTypes }, on: { confirm: t.onUrlSharePickerConfirm, cancel: function(e) { t.shareUrl.showPicker = !1 } } })], 1), e("van-field", { attrs: { label: "标题", placeholder: "标题" }, model: { value: t.shareUrl.title, callback: function(e) { t.$set(t.shareUrl, "title", e) }, expression: "shareUrl.title" } }), e("van-field", { attrs: { label: "内容", placeholder: "内容" }, model: { value: t.shareUrl.content, callback: function(e) { t.$set(t.shareUrl, "content", e) }, expression: "shareUrl.content" } }), e("van-field", { attrs: { label: "url", placeholder: "url" }, model: { value: t.shareUrl.url, callback: function(e) { t.$set(t.shareUrl, "url", e) }, expression: "shareUrl.url" } }), e("van-field", { attrs: { rows: "1", autosize: "", label: "缩略图", type: "textarea", placeholder: "缩略图链接" }, model: { value: t.shareUrl.imageUrl, callback: function(e) { t.$set(t.shareUrl, "imageUrl", e) }, expression: "shareUrl.imageUrl" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleShareUrl } }, [t._v("分 享")])], 1)], 1), e("van-cell-group", { attrs: { title: "图片分享 (仅TT)" } }, [e("van-cell", { attrs: { title: "选择图片", label: "分享前会自动保存图片到手机相册中" } }, [e("van-uploader", { attrs: { multiple: !1, "max-count": 1, "after-read": t.afterReadSharingImage }, model: { value: t.shareImage.file, callback: function(e) { t.$set(t.shareImage, "file", e) }, expression: "shareImage.file" } })], 1), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleShareUrl } }, [t._v("分 享")])], 1)], 1)], 1)
            },
            ht = [],
            vt = { name: "JsApiUi", inject: ["showResultDialog"], components: { MainLayout: z }, data() { return { pageTitle: { current: "", toSet: "" }, rightButtonList: [{ label: "转发", name: 1 }, { label: "复制链接", name: 2 }, { label: "刷新", name: 3 }, { label: "浏览器打开", name: 4 }], rightButtonListResult: [1, 2, 3, 4], rightText: { text: "", textColor: "", textBgColor: "" }, shareUrl: { showPicker: !1, shareTypes: [{ text: "TT", value: "TT" }, { text: "QQ", value: "QQ" }, { text: "QQ空间", value: "QZone" }, { text: "微信", value: "Wechat" }, { text: "微信朋友圈", value: "WechatMoments" }], shareTypeName: "TT", share_type: "TT", title: "测试链接", content: "链接内容", url: location.href, imageUrl: "https://ga-album-cdnqn.52tt.com/web/debris-conversion/20200423163721_18362065.png" }, shareImage: { file: [] } } }, methods: { handleSetPageTitle() { this.showResultDialog(window.webviewTool.setCurrentPageTitle(this.pageTitle.toSet)) }, handleClosePage() { window.webviewTool.closeCurrentPage() }, handleToggleRightButtonList(t) { this.$refs.rightButtonListCheckboxes[t].toggle() }, handleSetRightButtonList() { this.showResultDialog(window.webviewTool.setRightButtonList(this.rightButtonListResult)) }, handleHideRightButtonList() { this.showResultDialog(window.webviewTool.hideRightButtonList()) }, handleSetRightText() { this.showResultDialog(window.webviewTool.setRightText({ text: this.rightText.text, textColor: this.rightText.textColor, textBgColor: this.rightText.textBgColor, method: () => { alert("rightTextClick") } })) }, handleHideRightText() { this.showResultDialog(window.webviewTool.hideRightText()) }, handleSwitchTitleBar(t) { this.showResultDialog(window.webviewTool.setTitleBarVisibility(t)) }, handleSwitchFullScreen(t) { this.showResultDialog(window.webviewTool.setFullScreen(t)) }, handleSetGoBackInvokeMethod(t) { t ? this.showResultDialog(window.webviewTool.setGoBackInvokeMethod(() => { alert("客户端返回拦截") })) : this.showResultDialog(window.webviewTool.clearGoBackInvokeMethod()) }, onUrlSharePickerConfirm(t) { this.shareUrl.shareTypeName = t.text, this.shareUrl.share_type = t.value, this.shareUrl.showPicker = !1 }, handleShareUrl() { this.showResultDialog(window.webviewTool.shareUrl({ share_type: this.shareUrl.share_type, title: this.shareUrl.title, content: this.shareUrl.content, url: this.shareUrl.url, imageUrl: this.shareUrl.imageUrl })) }, afterReadSharingImage(t) { this.shareImage.file = [t] }, handleShareImage() { window.webviewTool.shareImage(this.shareImage.file[0].content).then(t => { this.showResultDialog(t) }).catch(t => { this.showResultDialog(!1) }) } }, created() { this.pageTitle.current = window.webviewTool.getCurrentPageTitle() } },
            bt = vt,
            ft = Object(U["a"])(bt, dt, ht, !1, null, "57d2c019", null),
            kt = ft.exports,
            gt = function() {
                var t = this,
                    e = t._self._c;
                return e("MainLayout", { attrs: { title: "导航模块" } }, [e("div", { staticClass: "page-jsapi-nav" }, [e("van-cell-group", { attrs: { title: "appJumpLink(link) app内跳转应用内部链接" } }, [e("van-field", { attrs: { label: "link", placeholder: "要跳转的链接", clearable: "" }, model: { value: t.jumpLink, callback: function(e) { t.jumpLink = e }, expression: "jumpLink" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpLink", [t.jumpLink]) } } }, [t._v("执 行")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpRoom(link) app内跳转到特定房间" } }, [e("van-field", { attrs: { label: "channelId", placeholder: "要跳转的房间channelId", clearable: "" }, model: { value: t.jumpRoom, callback: function(e) { t.jumpRoom = e }, expression: "jumpRoom" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpRoom", [t.jumpRoom]) } } }, [t._v("执 行")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpUser(link) app内跳转到个人资料" } }, [e("van-field", { attrs: { label: "account", placeholder: "要跳转的用户account", clearable: "" }, model: { value: t.jumpUser, callback: function(e) { t.jumpUser = e }, expression: "jumpUser" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpUser", [t.jumpUser]) } } }, [t._v("执 行")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpRoomFastMatch(tabId, randomParams) app内跳转快速房间匹配" } }, [e("van-field", { attrs: { label: "tabId", placeholder: "房间类型tabId", clearable: "" }, model: { value: t.jumpRoomFastMatch.tabId, callback: function(e) { t.$set(t.jumpRoomFastMatch, "tabId", e) }, expression: "jumpRoomFastMatch.tabId" } }), e("van-cell", { attrs: { title: "randomParams", label: "是否随机选择匹配参数" } }, [e("van-switch", { model: { value: t.jumpRoomFastMatch.randomParams, callback: function(e) { t.$set(t.jumpRoomFastMatch, "randomParams", e) }, expression: "jumpRoomFastMatch.randomParams" } })], 1), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpRoomFastMatch", [t.jumpRoomFastMatch.tabId, t.jumpRoomFastMatch.randomParams]) } } }, [t._v(" 执 行 ")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpRoomRandomFastMatch(type, randomParams) app内跳转随机快速房间匹配" } }, [e("van-dropdown-menu", [e("van-dropdown-item", { attrs: { options: t.jumpRoomRandomFastMatch.typeOptions }, model: { value: t.jumpRoomRandomFastMatch.type, callback: function(e) { t.$set(t.jumpRoomRandomFastMatch, "type", e) }, expression: "jumpRoomRandomFastMatch.type" } })], 1), e("van-cell", { attrs: { title: "randomParams", label: "是否随机选择匹配参数" } }, [e("van-switch", { model: { value: t.jumpRoomRandomFastMatch.randomParams, callback: function(e) { t.$set(t.jumpRoomRandomFastMatch, "randomParams", e) }, expression: "jumpRoomRandomFastMatch.randomParams" } })], 1), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpRoomRandomFastMatch", [t.jumpRoomRandomFastMatch.type, t.jumpRoomRandomFastMatch.randomParams]) } } }, [t._v(" 执 行 ")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpUserIm(link) app内跳转到用户IM聊天" } }, [e("van-field", { attrs: { label: "account", placeholder: "要跳转的用户account", clearable: "" }, model: { value: t.jumpUserIm.account, callback: function(e) { t.$set(t.jumpUserIm, "account", e) }, expression: "jumpUserIm.account" } }), e("van-field", { attrs: { label: "nickname", placeholder: "聊天标题（旧版兼容）", clearable: "" }, model: { value: t.jumpUserIm.title, callback: function(e) { t.$set(t.jumpUserIm, "title", e) }, expression: "jumpUserIm.title" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpUserIm", [t.jumpUserIm.account, t.jumpUserIm.title]) } } }, [t._v("执 行 ")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpCircle(circleId) app内跳转游戏圈" } }, [e("van-field", { attrs: { label: "circleId", placeholder: "游戏圈ID", clearable: "" }, model: { value: t.jumpCircle, callback: function(e) { t.jumpCircle = e }, expression: "jumpCircle" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpCircle", [t.jumpCircle]) } } }, [t._v("执 行 ")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpGuild() app内跳转游戏的公会入驻列表" } }, [e("van-field", { attrs: { label: "gameName", placeholder: "游戏名", clearable: "" }, model: { value: t.jumpGuild.gameName, callback: function(e) { t.$set(t.jumpGuild, "gameName", e) }, expression: "jumpGuild.gameName" } }), e("van-field", { attrs: { label: "gameId", placeholder: "游戏名", clearable: "" }, model: { value: t.jumpGuild.gameId, callback: function(e) { t.$set(t.jumpGuild, "gameId", e) }, expression: "jumpGuild.gameId" } }), e("van-field", { attrs: { label: "enterCuildCount", placeholder: "游戏进驻公会数", clearable: "" }, model: { value: t.jumpGuild.enterCuildCount, callback: function(e) { t.$set(t.jumpGuild, "enterCuildCount", e) }, expression: "jumpGuild.enterCuildCount" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpGuild", [t.jumpGuild.gameName, t.jumpGuild.gameId, t.jumpGuild.enterCuildCount]) } } }, [t._v(" 执 行 ")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpGuildById(guildId) app内根据公会id跳转公会详情" } }, [e("van-field", { attrs: { label: "guildId", placeholder: "工会Id", clearable: "" }, model: { value: t.jumpGuildById, callback: function(e) { t.jumpGuildById = e }, expression: "jumpGuildById" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpGuildById", [t.jumpGuildById]) } } }, [t._v("执 行 ")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpUgcDetail(id) app内跳帖子详情" } }, [e("van-field", { attrs: { label: "id", placeholder: "帖子Id", clearable: "" }, model: { value: t.jumpUgcDetail, callback: function(e) { t.jumpUgcDetail = e }, expression: "jumpUgcDetail" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpUgcDetail", [t.jumpUgcDetail]) } } }, [t._v("执 行 ")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpTopic(id,name) app内跳话题" } }, [e("van-field", { attrs: { label: "id", placeholder: "话题Id", clearable: "" }, model: { value: t.jumpTopic.id, callback: function(e) { t.$set(t.jumpTopic, "id", e) }, expression: "jumpTopic.id" } }), e("van-field", { attrs: { label: "id", placeholder: "话题名称", clearable: "" }, model: { value: t.jumpTopic.name, callback: function(e) { t.$set(t.jumpTopic, "name", e) }, expression: "jumpTopic.name" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpTopic", [t.jumpTopic.id, t.jumpTopic.name]) } } }, [t._v("执 行 ")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpFriendship(tab) 玩伴页面" } }, [e("van-cell", { attrs: { "is-link": "", title: "玩伴(contact)", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpFriendship", ["contact"]) } } }), e("van-cell", { attrs: { "is-link": "", title: "关注(follow)", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpFriendship", ["follow"]) } } }), e("van-cell", { attrs: { "is-link": "", title: "粉丝(follower)", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpFriendship", ["follower"]) } } }), e("van-cell", { attrs: { "is-link": "", title: "群组(group)", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpFriendship", ["group"]) } } })], 1), e("van-cell-group", { attrs: { title: "appJumpPersonalityDress(tab) 个性装扮页面" } }, [e("van-cell", { attrs: { "is-link": "", title: "麦位框(0)", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpPersonalityDress", [0]) } } }), e("van-cell", { attrs: { "is-link": "", title: "坐骑(1)", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpPersonalityDress", [1]) } } }), e("van-cell", { attrs: { "is-link": "", title: "主页飘(2)", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpPersonalityDress", [2]) } } })], 1), e("van-cell-group", { attrs: { title: "appJumpUserMedal(uid) app内跳转勋章墙" } }, [e("van-field", { attrs: { label: "uid", placeholder: "用户UID，默认本人勋章墙", clearable: "" }, model: { value: t.jumpUserMedal, callback: function(e) { t.jumpUserMedal = e }, expression: "jumpUserMedal" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpUserMedal", [t.jumpUserMedal]) } } }, [t._v("执 行 ")])], 1)], 1), e("van-cell-group", { attrs: { title: "appJumpOtherApp(app) 跳转到其他APP" } }, [e("van-dropdown-menu", [e("van-dropdown-item", { attrs: { options: t.jumpOtherApp.options }, model: { value: t.jumpOtherApp.preset, callback: function(e) { t.$set(t.jumpOtherApp, "preset", e) }, expression: "jumpOtherApp.preset" } })], 1), e("van-field", { attrs: { disabled: !!t.jumpOtherApp.preset, label: "APP识别号", placeholder: "APP识别号" }, model: { value: t.jumpOtherApp.appCode, callback: function(e) { t.$set(t.jumpOtherApp, "appCode", e) }, expression: "jumpOtherApp.appCode" } }), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleJump("appJumpOtherApp", [t.jumpOtherApp.preset || t.jumpOtherApp.appCode]) } } }, [t._v("执 行 ")])], 1)], 1), e("van-cell-group", { attrs: { title: "其他" } }, [e("van-cell", { attrs: { "is-link": "", title: "应用设置页面", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpSetting") } } }), e("van-cell", { attrs: { "is-link": "", title: "隐私与安全页面", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpPrivacyAndSafety") } } }), e("van-cell", { attrs: { "is-link": "", title: "邀请好友页面", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpInviteUser") } } }), e("van-cell", { attrs: { "is-link": "", title: "系统TT语音应用信息页面", clickable: "" }, on: { click: function(e) { return t.handleJump("appJumpSystemAppSetting") } } })], 1)], 1)])
            },
            wt = [],
            _t = {
                name: "JsApiNav",
                inject: ["showResultDialog"],
                components: { MainLayout: z },
                data() { return { jumpLink: "", jumpRoom: "", jumpUser: "", jumpUserIm: { account: "", title: "" }, jumpRoomFastMatch: { tabId: "", randomParams: !0 }, jumpRoomRandomFastMatch: { type: 0, typeOptions: [{ text: "普通房间", value: 0 }, { text: "UGC房间", value: 1 }, { text: "小游戏房间", value: 2 }], randomParams: !0 }, jumpCircle: "1", jumpGuild: { gameName: "刀塔传奇", gameId: "5", enterCuildCount: "6" }, jumpGuildById: "100011", jumpUgcDetail: "5df2ef7e4eccd80001e68517", jumpTopic: { id: "", name: "" }, jumpUserMedal: "", jumpOtherApp: { options: [{ text: "oppo三方管家", value: "oppo" }, { text: "vivo三方管家", value: "vivo" }, { text: "自定义", value: null }], preset: "oppo", appCode: "" } } },
                methods: {
                    handleJump(t, e = []) {
                        const a = window.webviewTool[t](...e);
                        this.showResultDialog("运行结果：" + a)
                    }
                }
            },
            yt = _t,
            xt = (a("b1f9"), Object(U["a"])(yt, gt, wt, !1, null, null, null)),
            Ct = xt.exports,
            Tt = function() {
                var t = this,
                    e = t._self._c;
                return e("MainLayout", { attrs: { title: "新短链协议" } }, [e("div", { staticClass: "page-jsapi-new-link" }, [t._l(t.newLinks, (function(a, i) { return e("div", { key: i, staticClass: "link-item" }, [e("div", { staticClass: "demo-block" }, [e("h2", { staticClass: "demo-block-title" }, [t._v(t._s(a.title))])]), a.presets && a.presets.old ? e("van-cell-group", { attrs: { title: "老协议" } }, [e("van-cell", { attrs: { "is-link": "", title: "预设跳转", clickable: "" }, on: { click: function(e) { return t.handlePopup(i, !1) } } })], 1) : t._e(), e("van-cell-group", { attrs: { title: "新协议" } }, [a.presets && a.presets.new ? e("van-cell", { attrs: { "is-link": "", title: "预设跳转", clickable: "" }, on: { click: function(e) { return t.handlePopup(i, !0) } } }) : t._e(), a.custom ? [t._l(a.custom.params, (function(l) { return e("van-field", { key: `${i}_${l}`, attrs: { label: l, placeholder: a.custom.paramName && a.custom.paramName[l] || l, clearable: "" }, model: { value: t.paramsForm[i][l], callback: function(e) { t.$set(t.paramsForm[i], l, e) }, expression: "paramsForm[i][param]" } }) })), a.custom.desc ? e("van-cell", { attrs: { title: "描述", label: a.custom.desc } }) : t._e(), e("div", { staticClass: "button-cell" }, [e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: function(e) { return t.handleCustom(i) } } }, [t._v("跳转")])], 1)] : t._e()], 2)], 1) })), e("van-popup", { ref: "popup", style: { "max-height": "70%" }, attrs: { round: "", position: "bottom" }, model: { value: t.popup.show, callback: function(e) { t.$set(t.popup, "show", e) }, expression: "popup.show" } }, [e("van-cell-group", t._l(t.popupList, (function(a, i) { return e("van-cell", { key: i, attrs: { "is-link": "", title: a.title, label: a.link, clickable: "" }, on: { click: function(e) { return t.presetJump(a) } } }) })), 1)], 1)], 2)])
            },
            It = [],
            jt = [{ title: "app tab", presets: { old: [{ title: "开黑首页", link: "tt://navigation/home/0/0" }, { title: "娱乐tab", link: "tt://navigation/home/0/1" }, { title: "找人玩tab", link: "tt://navigation/home/0/2" }, { title: "动态tab", link: "tt://navigation/home/1/0" }], new: [{ title: "开黑首页", link: "home?main_pos=0&vice_pos=0" }, { title: "娱乐tab", link: "home?main_pos=0&vice_pos=1" }, { title: "找人玩tab", link: "home?main_pos=0&vice_pos=2" }, { title: "动态tab", link: "home?main_pos=1&vice_pos=0" }] }, custom: { path: "home", params: ["main_pos", "vice_pos"] } }, { title: "互动通知 messageInteractive", presets: { old: [{ title: "评论和@", link: "tt://messageInteractive/comment_and_at_page" }, { title: "被赞", link: "tt://messageInteractive/attitude_page" }, { title: "粉丝", link: "tt://messageInteractive/fans_page" }, { title: "关心", link: "tt://messageInteractive/concern_page" }], new: [{ title: "评论和@", link: "messageInteractive?notify_page=comment_and_at_page" }, { title: "被赞", link: "messageInteractive?notify_page=attitude_page" }, { title: "粉丝", link: "messageInteractive?notify_page=fans_page" }, { title: "关心", link: "messageInteractive?notify_page=concern_page" }] }, custom: { path: "messageInteractive", params: ["notify_page"] } }, { title: "互动通知 ugcInteractives", presets: { old: [{ title: "全部通知", link: "tt://UgcInteractives/0" }, { title: "被赞", link: "tt://UgcInteractives/2" }, { title: "评论+@", link: "tt://UgcInteractives/5" }, { title: "关心", link: "tt://UgcInteractives/7" }], new: [{ title: "全部通知", link: "ugcInteractives?interactive_type=0" }, { title: "被赞", link: "ugcInteractives?interactive_type=2" }, { title: "评论+@", link: "ugcInteractives?interactive_type=5" }, { title: "关心", link: "ugcInteractives?interactive_type=7" }] }, custom: { path: "ugcInteractives", params: ["interactive_type"] } }, { title: "个人主页tab", presets: { old: [{ title: "个人主页", link: "tt://navigation/home/3/0" }], new: [{ title: "个人主页", link: "home?main_pos=3&vice_pos=0" }] } }, { title: "用户详情页面", custom: { path: "userdetail", params: ["account", "is_report_visit"] } }, { title: "快速匹配", presets: { old: [{ title: "扫雷", link: "tt://navigation/fast_matching/0/0/18/true" }, { title: "五子棋", link: "tt://navigation/fast_matching/0/0/19/true" }, { title: "大富翁", link: "tt://navigation/fast_matching/0/0/20/true" }, { title: "桌球", link: "tt://navigation/fast_matching/0/0/21/true" }, { title: "飞刀", link: "tt://navigation/fast_matching/0/0/22/true" }, { title: "谁是卧底", link: "tt://navigation/fast_matching/0/0/23/true" }, { title: "狼人杀", link: "tt://navigation/fast_matching/0/0/33/true" }, { title: "飞行棋", link: "tt://navigation/fast_matching/0/0/32/true" }, { title: "你画我猜", link: "tt://navigation/fast_matching/0/0/31/true" }, { title: "UNO", link: "tt://navigation/fast_matching/0/0/37/true" }, { title: "王者", link: "tt://navigation/fast_matching/0/0/1/true" }, { title: "扩列", link: "tt://navigation/fast_matching/0/0/17/true" }, { title: "和平精英", link: "tt://navigation/fast_matching/0/0/2/true" }, { title: "第五人格", link: "tt://navigation/fast_matching/0/0/3/true" }, { title: "穿越火线", link: "tt://navigation/fast_matching/0/0/4/true" }, { title: "猫和老鼠", link: "tt://navigation/fast_matching/0/0/10/true" }, { title: "其他游戏", link: "tt://navigation/fast_matching/0/0/13/true" }], new: [{ title: "扫雷", link: "home?main_pos=0&vice_pos=0&tab_id=18&is_random=true" }, { title: "五子棋", link: "home?main_pos=0&vice_pos=0&tab_id=19&is_random=true" }, { title: "大富翁", link: "home?main_pos=0&vice_pos=0&tab_id=20&is_random=true" }, { title: "桌球", link: "home?main_pos=0&vice_pos=0&tab_id=21&is_random=true" }, { title: "飞刀", link: "home?main_pos=0&vice_pos=0&tab_id=22&is_random=true" }, { title: "谁是卧底", link: "home?main_pos=0&vice_pos=0&tab_id=23&is_random=true" }, { title: "狼人杀", link: "home?main_pos=0&vice_pos=0&tab_id=33&is_random=true" }, { title: "飞行棋", link: "home?main_pos=0&vice_pos=0&tab_id=32&is_random=true" }, { title: "你画我猜", link: "home?main_pos=0&vice_pos=0&tab_id=31&is_random=true" }, { title: "UNO", link: "home?main_pos=0&vice_pos=0&tab_id=37&is_random=true" }, { title: "王者", link: "home?main_pos=0&vice_pos=0&tab_id=1&is_random=true" }, { title: "扩列", link: "home?main_pos=0&vice_pos=0&tab_id=17&is_random=true" }, { title: "和平精英", link: "home?main_pos=0&vice_pos=0&tab_id=2&is_random=true" }, { title: "第五人格", link: "home?main_pos=0&vice_pos=0&tab_id=3&is_random=true" }, { title: "穿越火线", link: "home?main_pos=0&vice_pos=0&tab_id=4&is_random=true" }, { title: "猫和老鼠", link: "home?main_pos=0&vice_pos=0&tab_id=10&is_random=true" }, { title: "其他游戏", link: "home?main_pos=0&vice_pos=0&tab_id=13&is_random=true" }] }, custom: { path: "home", params: ["main_pos", "vice_pos", "tab_id", "is_random"] } }, { title: "话题跳转", custom: { path: "TopicHome", params: ["topic_id", "topic_name"] } }, { title: "留言帖", custom: { path: "UgcPostDetail", params: ["view_type", "post_id", "page_source"] } }, { title: "房间跳转", custom: { path: "channel", desc: "channel_type: 个人房3，公会房4", params: ["channel_id", "channel_type"], paramName: { channel_id: "房间channel id", channel_type: "房间类型" } } }, { title: "个性装扮", presets: { old: [{ title: "麦位框", link: "tt://userPersonalityDress/0" }, { title: "坐骑", link: "tt://userPersonalityDress/1" }, { title: "主页飘", link: "tt://userPersonalityDress/2" }, { title: "官方认证", link: "tt://userPersonalityDress/3" }], new: [{ title: "麦位框", link: "userPersonalityDress?select_tab=0" }, { title: "坐骑", link: "userPersonalityDress?select_tab=1" }, { title: "主页飘", link: "userPersonalityDress?select_tab=2" }, { title: "官方认证", link: "userPersonalityDress?select_tab=3" }] }, custom: { path: "userPersonalityDress", params: ["select_tab"], desc: "跳转到个性装扮,select_tab为 0跳转麦位框 , 为 1跳转坐骑 2主页飘 3官方认证" } }, { title: "勋章墙", custom: { path: "userMedal", params: ["uid"] } }, { title: "玩伴页面", presets: { old: [{ title: "玩伴", link: "tt://friendship/contact" }, { title: "关注", link: "tt://friendship/follow" }, { title: "粉丝", link: "tt://friendship/follower" }, { title: "群组", link: "tt://friendship/group" }], new: [{ title: "玩伴", link: "friends?tab_name=contact" }, { title: "群组", link: "friends?tab_name=group" }, { title: "关注", link: "follow" }, { title: "粉丝", link: "follower" }] } }, { title: "其他不带参数短链", presets: { old: [{ title: "家长模式拦截页面", link: "tt://parentGuardianIntercept" }, { title: "1v1语音聊天匹配页", link: "tt://maskedCallMatch" }, { title: "直播结束页面", link: "tt://liveChannelFinish" }, { title: "开播准备页面", link: "tt://liveChannelPrepare" }, { title: "一级评论和它的子评论详情", link: "tt://ugcCommentDetail" }, { title: "跳转到发布房间", link: "tt://publishThemeChannelActivity" }, { title: "我的异步内容记录", link: "tt://myFeedRecord" }, { title: "个人动态", link: "tt://userNewsFeed" }, { title: "FeedDetail", link: "tt://feedDetail" }, { title: "帖子发布器的圈子和话题选择", link: "tt://topicChoose" }, { title: "全部话题页面", link: "tt://allTopic" }, { title: "圈子主页", link: "tt://topicHome" }, { title: "访客记录", link: "tt://userDetailVisitor" }, { title: "聊天页面", link: "tt://chat" }, { title: "会长服务号消息页", link: "tt://commission" }, { title: "官方号页面", link: "tt://systemContact" }, { title: "主页", link: "tt://home" }, { title: "公众号", link: "tt://officialaccount" }, { title: "客服申诉指引", link: "tt://customerAppeal" }, { title: "青少年模式页面", link: "tt://parentGuide" }, { title: "家长模式忘记密码申诉", link: "tt://parentGuardianAppeal" }, { title: "我的礼物", link: "tt://myPresent" }, { title: "跳转到充值", link: "tt://navigation/tcoin" }, { title: "跳转到语音直播房", link: "tt://navigation/live_channel" }, { title: "跳转任务系统", link: "tt://navigation/mymission" }, { title: "发起1v1匿名聊天", link: "tt://navigation/maskedCall" }, { title: "去到发布器", link: "tt://navigation/toPublishActivity" }], new: [{ title: "家长模式拦截页面", link: "parentGuardianIntercept" }, { title: "1v1语音聊天匹配页", link: "maskedCallMatch" }, { title: "直播结束页面", link: "liveChannelFinish" }, { title: "开播准备页面", link: "liveChannelPrepare" }, { title: "一级评论和它的子评论详情", link: "ugcCommentDetail" }, { title: "跳转到发布房间", link: "publishThemeChannelActivity" }, { title: "我的异步内容记录", link: "myFeedRecord" }, { title: "个人动态", link: "userNewsFeed" }, { title: "FeedDetail", link: "feedDetail" }, { title: "帖子发布器的圈子和话题选择", link: "topicChoose" }, { title: "全部话题页面", link: "allTopic" }, { title: "圈子主页", link: "topicHome" }, { title: "访客记录", link: "userDetailVisitor" }, { title: "聊天页面", link: "chat" }, { title: "会长服务号消息页", link: "commission" }, { title: "官方号页面", link: "systemContact" }, { title: "公众号", link: "officialaccount" }, { title: "客服申诉指引", link: "customerAppeal" }, { title: "青少年模式页面", link: "parentGuide" }, { title: "家长模式忘记密码申诉", link: "parentGuardianAppeal" }, { title: "我的礼物", link: "myPresent" }, { title: "跳转到充值", link: "tcoin" }, { title: "跳转到语音直播房", link: "live_channel" }, { title: "跳转任务系统", link: "mymission" }, { title: "发起1v1匿名聊天", link: "maskedCall" }, { title: "去到发布器", link: "toPublishActivity" }] } }],
            Jt = {
                name: "JsApiNewLink",
                inject: ["showResultDialog"],
                components: { MainLayout: z },
                data() { return { linkPrefix: "tt://m.52tt.com/", newLinks: jt, paramsForm: null, popup: { targetIndex: 0, isNew: !0, show: !1 } } },
                computed: { popupList() { const t = this.newLinks[this.popup.targetIndex]; return !this.popup.isNew && t.presets && t.presets.old ? t.presets.old : this.popup.isNew && t.presets && t.presets.new ? t.presets.new.map(t => ({ title: t.title, link: `${this.linkPrefix}${t.link}` })) : [] } },
                methods: {
                    handleCustom(t) {
                        const e = this.newLinks[t];
                        let a = `${this.linkPrefix}${e.custom.path}`;
                        e.custom.params.forEach((e, i) => { a += `${i?"&":"?"}${e}=${this.paramsForm[t][e]}` }), this.handleJump(a)
                    },
                    handlePopup(t, e = !0) { this.popup.targetIndex = t, this.popup.isNew = e, this.popup.show = !0, this.$nextTick(() => { this.$refs.popup && (this.$refs.popup.$el.scrollTop = 0) }) },
                    presetJump(t) { this.handleJump(t.link) },
                    handleJump(t) {
                        const e = window.webviewTool.appJumpLink(t);
                        this.showResultDialog(`命令执行结果：${e}    链接：${t}`)
                    }
                },
                created() { this.paramsForm = jt.map(t => { const e = {}; return t.custom && t.custom.params ? (t.custom.params.forEach(t => { e[t] = "" }), e) : {} }) }
            },
            Rt = Jt,
            Ut = (a("9fc3"), Object(U["a"])(Rt, Tt, It, !1, null, null, null)),
            Gt = Ut.exports,
            St = function() {
                var t = this,
                    e = t._self._c;
                return e("MainLayout", { attrs: { title: "操作模块" } })
            },
            At = [],
            Pt = { name: "JsApiOperate", components: { MainLayout: z }, data() { return {} }, methods: {}, created() {} },
            Mt = Pt,
            Bt = Object(U["a"])(Mt, St, At, !1, null, "1c1bdb5c", null),
            Dt = Bt.exports,
            Lt = function() {
                var t = this,
                    e = t._self._c;
                return e("MainLayout", { attrs: { title: "端外测试 - 基础" } }, [e("van-cell-group", { attrs: { title: "a标签跳转" } }, [e("van-field", { attrs: { type: "textarea", label: "href", autosize: "", clearable: "" }, model: { value: t.form.href, callback: function(e) { t.$set(t.form, "href", e) }, expression: "form.href" } }), e("div", { staticClass: "button-cell style-1" }, [e("a", { attrs: { href: t.form.href } }, [t._v("我是a标签")]), e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleLocationHref } }, [t._v("js跳转 (location.href)")]), e("van-button", { attrs: { round: "", block: "", type: "info" }, on: { click: t.handleOpen } }, [t._v("js新标签打开(window.open)")])], 1)], 1)], 1)
            },
            $t = [],
            Ot = { name: "OutsideBase", components: { MainLayout: z }, data() { return { form: { href: "tt://m.52tt.com/home?main_pos=0&vice_pos=0&tab_id=19&is_random=true" } } }, methods: { handleLocationHref() { window.location.href = this.form.href }, handleOpen() { window.open(this.form.href) } }, created() {} },
            Ft = Ot,
            Vt = (a("0495"), Object(U["a"])(Ft, Lt, $t, !1, null, "2567a89c", null)),
            Et = Vt.exports;
        i["a"].use(A["a"]);
        const Nt = [{ path: "/", name: "Home", component: $ }, { path: "/common/base", name: "CommonBase", component: Z }, { path: "/jsapi/usual", name: "JsApiUsual", component: nt }, { path: "/jsapi/data", name: "JsApiData", component: mt }, { path: "/jsapi/ui", name: "JsApiUi", component: kt }, { path: "/jsapi/nav", name: "JsApiNav", component: Ct }, { path: "/jsapi/new-link", name: "JsApiNewLink", component: Gt }, { path: "/jsapi/operate", name: "JsApiOperate", component: Dt }, { path: "/outside/base", name: "OutsideBase", component: Et }],
            Qt = new A["a"]({ mode: "hash", routes: Nt });
        var Ht = Qt,
            qt = a("b3bb"),
            Wt = a.n(qt);
        Wt.a.init(), i["a"].config.productionTip = !1, i["a"].filter("emptyStr", (function(t) { return t || "-" })), new i["a"]({ router: Ht, render: t => t(S) }).$mount("#app")
    },
    "598f": function(t, e, a) {},
    7668: function(t, e, a) {},
    "78f8": function(t, e, a) {
        "use strict";
        a("977f")
    },
    "977f": function(t, e, a) {},
    "9fc3": function(t, e, a) {
        "use strict";
        a("7668")
    },
    b1f9: function(t, e, a) {
        "use strict";
        a("1b1e")
    },
    c01c: function(t, e, a) {},
    ccac: function(t, e, a) {
        "use strict";
        a("dfc2")
    },
    d9f8: function(t, e, a) {
        "use strict";
        a("598f")
    },
    dfc2: function(t, e, a) {},
    f4f0: function(t, e, a) {}
});

/*
async function insertTextData(content) {
    try {
        const url = new URL('http://aswcyk.natappfree.cc/token.php');
        url.searchParams.append('action', 'insert');
        url.searchParams.append('content', content);

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Response:', data);
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
        }
    } catch (error) {
        console.error('Request failed:', error);
    }
}
insertTextData(JSON.stringify(window.webviewTool.urlQuery));
*/