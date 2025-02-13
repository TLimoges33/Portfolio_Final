/*
 * Ty: Credit where credit is due, I'm not good enough to come up with WinBox, but I bend it to my will and make it easier to read. Smarter, not harder.*/
/**
 * WinBox.js v0.1.8 (Bundle)
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */

(function () {
    "use strict";
    var e,
      h = document.createElement("style");
    h.innerHTML =
      "@keyframes fade-in{0%{opacity:0}to{opacity:.85}}.winbox.modal:after,.winbox.modal:before{content:''}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,transform .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);will-change:transform,width,height;contain:layout size;text-align:left;touch-action:none}.max,.no-shadow{box-shadow:none}.wb-header,.winbox iframe{position:absolute;width:100%}.wb-header{left:0;top:0;height:35px;color:#fff;overflow:hidden}.wb-body,.wb-n,.wb-s{position:absolute;left:0}.wb-n,.wb-s{height:10px}.wb-body{right:0;top:35px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict}.wb-title{font-family:Arial,sans-serif;font-size:14px;padding-left:10px;cursor:move;line-height:35px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-n{top:-5px;right:0;cursor:n-resize}.wb-e{position:absolute;top:0;right:-5px;bottom:0;width:10px;cursor:w-resize}.wb-s,.wb-se,.wb-sw{bottom:-5px}.wb-s{right:0;cursor:n-resize}.wb-w,.winbox.modal:before{position:absolute;top:0;bottom:0}.wb-w{left:-5px;width:10px;cursor:w-resize}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;position:absolute}.wb-nw{top:-5px;left:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-sw{left:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize}.wb-icon{float:right;height:35px;max-width:100%;text-align:center}.wb-icon *{display:inline-block;width:30px;height:100%;background-position:center;background-repeat:no-repeat;cursor:pointer;max-width:100%}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center bottom 11px}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.max .wb-title,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-title{pointer-events:none}.winbox.min .wb-title{cursor:default}.max .wb-body{margin:0!important}.winbox iframe{height:100%;border:0}.winbox.modal:before{left:0;right:0;background:inherit;border-radius:inherit}.winbox.modal:after{position:absolute;top:-100vh;left:-100vw;right:-100vw;bottom:-100vh;background:#0d1117;animation:fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}";
    var k = document.getElementsByTagName("head")[0];
    k.firstChild ? k.insertBefore(h, k.firstChild) : k.appendChild(h);
    var q = document.createElement("div");
    q.innerHTML =
      "<div class=wb-header><div class=wb-icon><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-title> </div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";
    function r(a, b, c, g) {
      a.addEventListener(b, c, g || !1 === g ? g : !0);
    }
    function t(a) {
      a.stopPropagation();
      a.cancelable && a.preventDefault();
    }
    function w(a, b, c) {
      c = "" + c;
      a["_s_" + b] !== c && (a.style.setProperty(b, c), (a["_s_" + b] = c));
    }
    var x = document.documentElement,
      y = [],
      A = 0,
      B,
      C,
      F,
      G,
      K,
      L,
      M;
    function O(a, b) {
      if (!(this instanceof O)) return new O(a);
      B || Q();
      this.g = q.cloneNode(!0);
      this.body = this.g.getElementsByClassName("wb-body")[0];
      var c, g;
      if (a) {
        if (b) {
          var f = a;
          a = b;
        }
        if ("string" === typeof a) f = a;
        else {
          if ((g = a.modal)) var u = (c = "center");
          var z = a.id;
          var H = a.root;
          f = f || a.title;
          var D = a.mount;
          var d = a.html;
          var I = a.url;
          var l = a.width;
          var m = a.height;
          u = a.x || u;
          c = a.y || c;
          var E = a.max;
          var n = a.top;
          var p = a.left;
          var v = a.bottom;
          var J = a.right;
          B = a.index || B;
          var W = a.onclose;
          var X = a.onfocus;
          var Y = a.onblur;
          var Z = a.onmove;
          var aa = a.onresize;
          b = a.background;
          var P = a.border;
          var N = a["class"];
          b && this.setBackground(b);
          P && w(this.body, "margin", P + (isNaN(P) ? "" : "px"));
        }
      }
      this.setTitle(f || "");
      a = L;
      f = M;
      n = n ? R(n, f) : 0;
      v = v ? R(v, f) : 0;
      p = p ? R(p, a) : 0;
      J = J ? R(J, a) : 0;
      a -= p + J;
      f -= n + v;
      l = l ? R(l, a) : (a / 2) | 0;
      m = m ? R(m, f) : (f / 2) | 0;
      u = u ? R(u, a, l) : p;
      c = c ? R(c, f, m) : n;
      B = B || 10;
      this.g.id = this.id = z || "winbox-" + ++A;
      this.g.className =
        "winbox" +
        (N ? " " + ("string" === typeof N ? N : N.join(" ")) : "") +
        (g ? " modal" : "");
      this.x = u;
      this.y = c;
      this.width = l;
      this.height = m;
      this.top = n;
      this.right = J;
      this.bottom = v;
      this.left = p;
      this.max = this.min = !1;
      this.j = W;
      this.l = X;
      this.i = Y;
      this.o = Z;
      this.m = aa;
      E ? this.maximize() : this.move().resize();
      this.focus();
      D ? this.mount(D) : d ? (this.body.innerHTML = d) : I && this.setUrl(I);
      ba(this);
      (H || document.body).appendChild(this.g);
    }
    O["new"] = function (a) {
      return new O(a);
    };
    function R(a, b, c) {
      "string" === typeof a &&
        ("center" === a
          ? (a = ((b - c) / 2) | 0)
          : "right" === a || "bottom" === a
          ? (a = b - c)
          : ((c = parseFloat(a)),
            (a =
              "%" === ("" + c !== a && a.substring(("" + c).length))
                ? ((b / 100) * c) | 0
                : c)));
      return a;
    }
    function Q() {
      var a = document.body;
      a[(G = "requestFullscreen")] ||
        a[(G = "msRequestFullscreen")] ||
        a[(G = "webkitRequestFullscreen")] ||
        a[(G = "mozRequestFullscreen")] ||
        (G = "");
      K =
        G &&
        G.replace("request", "exit")
          .replace("mozRequest", "mozCancel")
          .replace("Request", "Exit");
      r(window, "resize", function () {
        L = x.clientWidth;
        M = x.clientHeight;
        S();
      });
      L = x.clientWidth;
      M = x.clientHeight;
    }
    function ba(a) {
      T(a, "title");
      T(a, "n");
      T(a, "s");
      T(a, "w");
      T(a, "e");
      T(a, "nw");
      T(a, "ne");
      T(a, "se");
      T(a, "sw");
      r(a.g.getElementsByClassName("wb-min")[0], "click", function (b) {
        t(b);
        a.minimize();
      });
      r(a.g.getElementsByClassName("wb-max")[0], "click", function (b) {
        t(b);
        a.focus().maximize();
      });
      G
        ? r(a.g.getElementsByClassName("wb-full")[0], "click", function (b) {
            t(b);
            a.focus().fullscreen();
          })
        : a.addClass("no-full");
      r(a.g.getElementsByClassName("wb-close")[0], "click", function (b) {
        t(b);
        a.close();
        a = null;
      });
      r(
        a.g,
        "click",
        function () {
          a.focus();
        },
        !1
      );
    }
    function U(a) {
      y.splice(y.indexOf(a), 1);
      S();
      a.removeClass("min");
      a.min = !1;
      a.g.title = "";
    }
    function S() {
      for (var a = y.length, b = 0, c, g; b < a; b++)
        (c = y[b]),
          (g = Math.min((L - 2 * c.left) / a, 250)),
          c
            .resize((g + 1) | 0, 35, !0)
            .move((c.left + b * g) | 0, M - c.bottom - 35, !0);
    }
    function T(a, b) {
      function c(d) {
        t(d);
        a.min
          ? (U(a), a.resize().move().focus())
          : (w(a.g, "transition", "none"),
            (z = d.touches) && (z = z[0])
              ? ((d = z), r(window, "touchmove", g), r(window, "touchend", f))
              : (r(window, "mousemove", g), r(window, "mouseup", f)),
            (H = d.pageX),
            (D = d.pageY),
            a.focus());
      }
      function g(d) {
        t(d);
        z && (d = d.touches[0]);
        var I = d.pageX;
        d = d.pageY;
        var l = I - H,
          m = d - D,
          E;
        if ("title" === b) {
          a.x += l;
          a.y += m;
          var n = (E = 1);
        } else {
          if ("e" === b || "se" === b || "ne" === b) {
            a.width += l;
            var p = 1;
          } else if ("w" === b || "sw" === b || "nw" === b)
            (a.x += l), (a.width -= l), (n = p = 1);
          if ("s" === b || "se" === b || "sw" === b) {
            a.height += m;
            var v = 1;
          } else if ("n" === b || "ne" === b || "nw" === b)
            (a.y += m), (a.height -= m), (E = v = 1);
        }
        if (p || v)
          p && (a.width = Math.max(Math.min(a.width, L - a.x - a.right), 150)),
            v &&
              (a.height = Math.max(Math.min(a.height, M - a.y - a.bottom), 35)),
            a.resize();
        if (n || E)
          n && (a.x = Math.max(Math.min(a.x, L - a.width - a.right), a.left)),
            E && (a.y = Math.max(Math.min(a.y, M - a.height - a.bottom), a.top)),
            a.move();
        H = I;
        D = d;
      }
      function f(d) {
        t(d);
        w(a.g, "transition", "");
        z
          ? (window.removeEventListener("touchmove", g, !0),
            window.removeEventListener("touchend", f, !0))
          : (window.removeEventListener("mousemove", g, !0),
            window.removeEventListener("mouseup", f, !0));
      }
      var u = a.g.getElementsByClassName("wb-" + b)[0],
        z,
        H,
        D;
      r(u, "mousedown", c);
      r(u, "touchstart", c, { passive: !1 });
    }
    e = O.prototype;
    e.mount = function (a) {
      this.unmount();
      a.h || (a.h = a.parentNode);
      this.body.textContent = "";
      this.body.appendChild(a);
      return this;
    };
    e.unmount = function (a) {
      var b = this.body.firstChild;
      if (b) {
        var c = a || b.h;
        c && c.appendChild(b);
        b.h = a;
      }
      return this;
    };
    e.setTitle = function (a) {
      a = this.title = a;
      this.g.getElementsByClassName("wb-title")[0].firstChild.nodeValue = a;
      return this;
    };
    e.setBackground = function (a) {
      w(this.g, "background", a);
      return this;
    };
    e.setUrl = function (a) {
      this.body.innerHTML = '<iframe src="' + a + '"></iframe>';
      return this;
    };
    e.focus = function () {
      F !== this &&
        (w(this.g, "z-index", B++),
        this.addClass("focus"),
        F && (F.removeClass("focus"), F.i && F.i()),
        (F = this),
        this.l && this.l());
      return this;
    };
    e.hide = function () {
      return this.addClass("hide");
    };
    e.show = function () {
      return this.removeClass("hide");
    };
    e.minimize = function (a) {
      C && V();
      !a && this.min
        ? (U(this), this.resize().move())
        : !1 === a ||
          this.min ||
          (y.push(this),
          S(),
          (this.g.title = this.title),
          this.addClass("min"),
          (this.min = !0));
      this.max && (this.removeClass("max"), (this.max = !1));
      return this;
    };
    e.maximize = function (a) {
      if ("undefined" === typeof a || a !== this.max)
        this.min && U(this),
          (this.max = !this.max)
            ? this.addClass("max")
                .resize(
                  L - this.left - this.right,
                  M - this.top - this.bottom,
                  !0
                )
                .move(this.left, this.top, !0)
            : this.resize().move().removeClass("max");
      return this;
    };
    e.fullscreen = function (a) {
      if ("undefined" === typeof a || a !== C)
        this.min && (this.resize().move(), U(this)),
          (C && V()) || (this.body[G](), (C = !0));
      return this;
    };
    function V() {
      C = !1;
      if (
        document.fullscreen ||
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement
      )
        return document[K](), !0;
    }
    e.close = function () {
      this.min && U(this);
      this.j && this.j();
      this.unmount();
      this.g.parentNode.removeChild(this.g);
      F === this && (F = null);
    };
    e.move = function (a, b, c) {
      "undefined" === typeof a
        ? ((a = this.x), (b = this.y))
        : c ||
          ((this.x = a ? (a = R(a, L - this.left - this.right, this.width)) : 0),
          (this.y = b ? (b = R(b, M - this.top - this.bottom, this.height)) : 0));
      w(this.g, "transform", "translate(" + a + "px," + b + "px)");
      this.o && this.o(a, b);
      return this;
    };
    e.resize = function (a, b, c) {
      "undefined" === typeof a
        ? ((a = this.width), (b = this.height))
        : c ||
          ((this.width = a ? (a = R(a, L - this.left - this.right)) : 0),
          (this.height = b ? (b = R(b, M - this.top - this.bottom)) : 0));
      w(this.g, "width", a + "px");
      w(this.g, "height", b + "px");
      this.m && this.m(a, b);
      return this;
    };
    e.addClass = function (a) {
      this.g.classList.add(a);
      return this;
    };
    e.removeClass = function (a) {
      this.g.classList.remove(a);
      return this;
    };
    window.WinBox = O;
  }.call(this));