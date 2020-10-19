//////////////////////////////////////////////////////////////////////
// Object2VR studio 3.1.8/10781 Object Player                       //
// License: Petshopper from CGPersia                                //
// (c) 2017, Garden Gnome Software, http://ggnome.com               //
//////////////////////////////////////////////////////////////////////

var mc =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (A, U, m) {
          A != Array.prototype && A != Object.prototype && (A[U] = m.value);
        },
  nc =
    "undefined" != typeof window && window === this
      ? this
      : "undefined" != typeof global && null != global
      ? global
      : this;
function oc(A) {
  if (A) {
    for (
      var U = nc, m = ["Array", "prototype", "fill"], z = 0;
      z < m.length - 1;
      z++
    ) {
      var Q = m[z];
      Q in U || (U[Q] = {});
      U = U[Q];
    }
    m = m[m.length - 1];
    z = U[m];
    A = A(z);
    A != z &&
      null != A &&
      mc(U, m, { configurable: !0, writable: !0, value: A });
  }
}
oc(function (A) {
  return A
    ? A
    : function (A, m, z) {
        var Q = this.length || 0;
        0 > m && (m = Math.max(0, Q + m));
        if (null == z || z > Q) z = Q;
        z = Number(z);
        0 > z && (z = Math.max(0, Q + z));
        for (m = Number(m || 0); m < z; m++) this[m] = A;
        return this;
      };
});
function object2vrPlayer(A) {
  function U() {
    K = document.createElement("div");
    K.innerHTML = pc(
      "PGRpdiBzdHlsZT0icG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAwcHg7IHJpZ2h0OiAwcHg7IHRvcDogNDAlOyBib3R0b206IDYwJTsgbWFyZ2luOiBhdXRvOyB3aWR0aDogMThlbTsgaGVpZ2h0OiA0ZW07IGJvcmRlcjogM3B4IHNvbGlkICM1NTU7IGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjMzMzOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgZGlzcGxheTogdGFibGU7IGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDEwcHQ7IG9wYWNpdHk6IDAuOTU7IGJvcmRlci1yYWRpdXM6IDE1cHg7Ij48cCBzdHlsZT0idGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAiPkNyZWF0ZWQgd2l0aCA8YSBocmVmPSJodHRwOi8vb2JqZWN0MnZyLmNvbS8iIHRhcmdldD0iX2JsYW5rIj5PYmplY3QyVlI8L2E+PC9wPjwvZGl2Pg=="
    );
    var a =
      "top:\t0px;left: 0px;width: 100px;height: 100px;overflow: hidden;z-index: 5000;position:relative;";
    "-webkit-" == N && (a += N + "transform: translateZ(99999999999999px);");
    K.setAttribute("style", a);
    c.b.insertBefore(K, c.b.firstChild);
    K.style.width = 0 + H + cb + D + "px";
    K.style.height = 0 + I + db + E + "px";
    K.onclick = function () {
      K && (c.b.removeChild(K), (K = null));
    };
    K.oncontextmenu = K.onclick;
  }
  function m() {
    setTimeout(function () {
      c.setFullscreen(0);
    }, 10);
    setTimeout(function () {
      c.setFullscreen(0);
    }, 100);
  }
  function z() {
    Db
      ? setTimeout(function () {
          z();
        }, 1e3 / 60)
      : Eb(function () {
          z();
        });
    eb = 0;
    if (0 <= r) {
      if (2 == fb) {
        var a = V - gb,
          e = W - hb;
        ib((a * ra) / 300, (e * ra) / 300);
      } else if (3 == fb) {
        e = ia();
        if (X) {
          a = (V - e.x) / D;
          var b = (W - e.y) / E;
        } else (b = (V - e.x) / D), (a = (W - e.y) / E);
        jb && (b = 1 - b);
        kb && (a = 1 - a);
        e = Math.floor((1 - b) * f.c);
        a = Math.floor((1 - a) * f.j);
        0 > e && (e = 0);
        e >= f.c && (e = f.c - 1);
        0 > a && (a = 0);
        a >= f.j && (a = f.j - 1);
        c.showObjectImage(e, a);
      } else
        (Y = 0.4 * (V - lb)),
          (Z = 0.4 * (W - mb)),
          (lb += Y),
          (mb += Z),
          ib((Y * ra) / 10, (Z * ra) / 10),
          Fb && c.changeFov(0.4 * -(100 * n));
      c.a = !0;
    }
    if (0 != ja)
      switch (ja) {
        case 16:
          c.changeFovLog(-1, !0);
          c.a = !0;
          break;
        case 17:
        case 18:
        case 91:
          c.changeFovLog(1, !0), (c.a = !0);
      }
    nb &&
      (0 != Y || 0 != Z) &&
      0 > r &&
      ((Y *= 0.9),
      (Z *= 0.9),
      0.1 > Y * Y + Z * Z ? (Z = Y = 0) : (ib(Y, Z), (c.a = !0)));
    if (!c.isLoaded && c.hasConfig) {
      for (a = e = 0; a < c.checkLoaded.length; a++)
        c.checkLoaded[a].complete &&
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC" !=
            c.checkLoaded[a].src &&
          e++;
      Gb && (Gb = !1);
      e == c.checkLoaded.length
        ? ((ob = 1),
          (c.isLoaded = !0),
          c.divSkin && c.divSkin.ggLoaded && c.divSkin.ggLoaded())
        : (ob = e / (1 * c.checkLoaded.length));
    }
    if (sa) {
      f.g = va - f.x;
      f.o = wa - f.y;
      R = (pb - 100 * n) / 10;
      a = Math.sqrt(f.g * f.g + f.o * f.o + R * R);
      10 * a < xa
        ? ((sa = !1),
          (f.g = 0),
          (R = f.o = 0),
          (f.x = Number(va)),
          (f.y = Number(wa)),
          (n = pb / 100))
        : ((a = a > 5 * xa ? xa / a : 0.2), (f.g *= a), (f.o *= a), (R *= a));
      f.x += f.g;
      f.y += f.o;
      f.x >= f.c && ((f.x -= f.c), (va -= f.c));
      0 > f.x && ((f.x += f.c), (va += f.c));
      f.y >= f.j && ((f.y -= f.j), (wa -= f.j));
      0 > f.y && ((f.y += f.j), (wa += f.j));
      n += R / 10;
      if (0 < da && 0.5 > R) {
        b = 0.5 - B / f.width;
        var g = 0.5 - C / f.height;
        a = (Hb - b) / da;
        e = (Ib - g) / da;
        B = (0.5 - b - a) * f.width;
        C = (0.5 - g - e) * f.height;
        da--;
        da && (sa = !0);
      }
      a = new Date();
      qb = a.getTime();
      c.a = !0;
    } else
      ea
        ? ((f.g = 0.95 * f.g + 0.05 * la),
          (f.x += f.g),
          rb &&
            (0 > f.x || f.x >= f.c) &&
            ((la = -la), (f.g = -f.g), (f.x += 2 * f.g)),
          (c.a = !0))
        : (ma &&
            ((a = new Date()),
            (a = a.getTime() - qb),
            0 > r &&
              0 < Ja &&
              a > 1e3 * Ja &&
              ((ea = !0), (f.g = 0), (f.o = 0))),
          nb &&
            0 == ja &&
            0 > r &&
            (0 != f.g || 0 != f.o || 0 != R) &&
            ((f.g *= 0.9),
            (f.o *= 0.9),
            (R *= 0.9),
            (f.x += f.g),
            (f.y += f.o),
            c.changeFovLog(R),
            1e-4 > f.g * f.g + f.o * f.o && ((f.g = 0), (R = f.o = 0)),
            (c.a = !0)));
    if (0 < h.mode) {
      if (2 == h.mode)
        for (a = 0; a < G.length; a++)
          (e = G[a]),
            "poly" == e.hstype &&
              e.m != e.f &&
              (e.m > e.f
                ? ((e.f += h.ba), e.m < e.f && (e.f = e.m))
                : ((e.f -= h.ba), e.m > e.f && (e.f = e.m)),
              (c.a = !0));
      3 == h.mode &&
        h.m != h.f &&
        (h.m > h.f
          ? ((h.f += h.ba), h.m < h.f && (h.f = h.m))
          : ((h.f -= h.ba), h.m > h.f && (h.f = h.m)),
        (c.a = !0));
    }
    c.a && ((c.a = !1), c.updateObject(), ya && qc());
  }
  function Q() {
    setTimeout(function () {
      Q();
    }, 200);
    5 < eb &&
      ((Eb = function () {
        return function (a) {
          window.setTimeout(a, 10);
        };
      }),
      (Db = !0),
      z());
    eb++;
  }
  function Jb(a) {
    showSideBar(a.id, a.title);

    //  console.log(a);
    // alert("Fff");
    // c.skinObj &&
    //   c.skinObj.hotspotProxyClick &&
    //   c.skinObj.hotspotProxyClick(a.id);
    // "" != a.url && (c.openUrl(a.url, a.target), Ka(-1, -1));
  }
  function Kb() {
    0 < k.A &&
      (c.openUrl(c.hotspot.url, c.hotspot.target),
      c.skinObj && c.skinObj.hotspotProxyClick(k.A));
  }
  function sb(a, e) {
    var b = -1;
    a = ((a - H - 0.5 * D) / (t * n) - B) / f.width + 0.5;
    e = ((e - I - 0.5 * E) / (t * n) - C) / f.height + 0.5;
    for (var c = 0; c < G.length; c++) {
      var y = G[c];
      if ("poly" == y.hstype && y.T && 0 <= h.mode)
        for (var tb = 0; tb < y.T.length; tb++) {
          var k = y.T[tb];
          if (
            (k.fa == f.I || y.reuse & 1) &&
            (k.ga == f.J || y.reuse & 2) &&
            (k.state == f.K || y.reuse & 4)
          )
            for (var l = 0; l < k.Y.length; l++) {
              var p = k.Y[l];
              if (0 < p.F.length) {
                var na;
                var u = !1;
                var q = 0;
                for (na = p.F.length - 1; q < p.F.length; na = q++) {
                  var x = p.F[q];
                  na = p.F[na];
                  x.y > e != na.y > e &&
                    a < ((na.x - x.x) * (e - x.y)) / (na.y - x.y) + x.x &&
                    (u = !u);
                }
                u && (b = c);
              }
            }
        }
    }
    return 0 <= b ? G[b] : !1;
  }
  function qc() {
    if (
      c.s &&
      (h.oa != h.mode &&
        ((h.oa = h.mode),
        (c.s.style.visibility = 0 < h.mode ? "inherit" : "hidden")),
      0 < h.mode)
    ) {
      if (!J)
        try {
          J = c.s.getContext("2d");
        } catch (Ac) {}
      if (J) {
        if (J.width != D || J.height != E) (J.width = D), (J.height = E);
        J.clear ? J.clear() : J.clearRect(0, 0, c.s.width, c.s.height);
        var a = 1;
        3 == h.mode && (a = h.f);
        for (var e = 0; e < G.length; e++) {
          var b = G[e];
          if ("poly" == b.hstype)
            for (var g = 0; g < b.T.length; g++) {
              var y = b.T[g];
              if (
                (y.fa == f.I || b.reuse & 1) &&
                (y.ga == f.J || b.reuse & 2) &&
                (y.state == f.K || b.reuse & 4)
              )
                for (var k = 0; k < y.Y.length; k++) {
                  var l = y.Y[k];
                  2 == h.mode && (a = b.f);
                  J.fillStyle = S(b.B, b.G * a);
                  J.strokeStyle = S(b.C, b.H * a);
                  if (0 < l.F.length) {
                    J.beginPath();
                    for (var La = 0; La < l.F.length; La++) {
                      v = l.F[La];
                      var p = t * n * (B + (v.x - 0.5) * f.width) + 0.5 * D;
                      var u = t * n * (C + (v.y - 0.5) * f.height) + 0.5 * E;
                      0 == La ? J.moveTo(p, u) : J.lineTo(p, u);
                    }
                    J.closePath();
                    J.stroke();
                    J.fill();
                  }
                }
            }
        }
      }
    }
  }
  function Ma(a, e) {
    if (k.enabled && null != fa && oa && oa.getContext) {
      var b = ia();
      a = a - b.x - D / 2;
      a = a / n / t - B + f.width / 2;
      e = e - b.y - E / 2;
      e = e / n / t - C + f.height / 2;
      d = oa.getContext("2d").getImageData(a, e, 1, 1);
      k.A = d.data[2];
      k.ca != k.A &&
        (0 < k.ca &&
          c.skinObj &&
          c.skinObj.hotspotProxyOut &&
          c.skinObj.hotspotProxyOut(k.ca),
        (c.hotspot = 0 < k.A && k.V[k.A] ? k.V[k.A] : c.emptyHotspot),
        0 < k.A &&
          c.skinObj &&
          c.skinObj.hotspotProxyOver &&
          c.skinObj.hotspotProxyOver(k.A),
        (k.ca = k.A));
    }
  }
  function ub(a, e, b, c, y, k) {
    var g = f.l.length - 1 - c,
      h = f.pa;
    h = za(h, "c", (a % f.c) + ((e % f.j) + (b % f.L) * f.j) * f.c);
    h = za(h, "r", c);
    h = za(h, "l", g);
    h = za(h, "x", y);
    h = za(h, "y", k);
    return Na(h);
  }
  function za(a, e, b) {
    var c = new RegExp("%0*" + e, "i").exec(a.toString());
    if (c) {
      c = c.toString();
      var f = b.toString();
      for (
        c.charAt(c.length - 1) != e && (f = (1 + b).toString());
        f.length < c.length - 1;

      )
        f = "0" + f;
      a = a.replace(c, f);
    }
    return a;
  }
  function vb(a, e, b) {
    return Na(f.path + "/img_" + b + "_" + e + "_" + a + "." + f.ext);
  }
  function Oa(a) {
    kb && (a = -a);
    f.y += a;
    Aa();
  }
  function Pa(a) {
    jb && (a = -a);
    f.x += a;
    Aa();
  }
  function Aa() {
    if (Lb) {
      for (; 0 > f.x; ) f.x += f.c;
      for (; f.x >= f.c; ) f.x -= f.c;
    } else 0 > f.x && (f.x = 0), f.x >= f.c && (f.x = f.c - 1);
    if (Mb) {
      for (; 0 > f.y; ) f.y += f.j;
      for (; f.y >= f.j; ) f.y -= f.j;
    } else 0 > f.y && (f.y = 0), f.y >= f.j && (f.y = f.j - 1);
    f.state >= f.L && (f.state = f.L - 1);
    0 > f.state && (f.state = 0);
    n = Math.max(Qa, Math.min(Ra, n));
    wb && (aa = 1.05 < n);
    if (D >= t * n * f.width) B = 0;
    else {
      var a = (f.width * t * n - D) / (n * t * 2);
      B = Math.max(-a, B);
      B = Math.min(+a, B);
    }
    E >= t * n * f.height
      ? (C = 0)
      : ((a = (f.height * t * n - E) / (n * t * 2)),
        (C = Math.max(-a, C)),
        (C = Math.min(+a, C)));
  }
  function Nb() {
    ja = 0;
    Ba || q();
  }
  function Ob() {
    ja = 0;
    Ba || q();
  }
  function Pb(a) {
    if (!Ba) {
      a = a ? a : window.event;
      ja = a.keyCode;
      if (0 != ja) {
        switch (ja) {
          case 37:
            aa ? (B += 10 / n) : c.changePan(1, !0);
            break;
          case 38:
            aa ? (C += 10 / n) : c.changeTilt(1, !0);
            break;
          case 39:
            aa ? (B += -10 / n) : c.changePan(-1, !0);
            break;
          case 40:
            aa ? (C -= 10 / n) : c.changeTilt(-1, !0);
            break;
          case 43:
          case 107:
          case 187:
            c.changeFovLog(-1, !0);
            break;
          case 109:
          case 45:
          case 189:
            c.changeFovLog(1, !0);
        }
        c.a = !0;
      }
      q();
    }
  }
  function Qb(a) {
    L ||
      ((Fb = !1),
      ba(a.target) && (a.preventDefault(), q(), pa && pa.reset && pa.reset()));
  }
  function rc(a) {
    if (!L && ba(a.target)) {
      a.preventDefault();
      var e = n;
      c.setZoom(a.scale * ta);
      a = 1 / (t * n) - 1 / (t * e);
      B += (c.mouse.x - H - 0.5 * D) * a;
      C += (c.mouse.y - I - 0.5 * E) * a;
      q();
    }
  }
  function Rb(a) {
    xb = !0;
    Sa = 1;
    a || (a = window.event);
    var e = ia();
    a.pageX &&
      ((c.mouse.x = a.pageX - e.x + H), (c.mouse.y = a.pageY - e.y + I));
    L ||
      (a.touches
        ? ((c.D = a.touches.target),
          c.D == c.control && (a.preventDefault(), (ta = n), q()))
        : (a.preventDefault(), (ta = n), q()));
  }
  function Sb(a) {
    window.MSGesture &&
      (pa || ((pa = new MSGesture()), (pa.target = c.control)),
      pa.addPointer(a.pointerId));
  }
  function sc(a) {
    L || (a.preventDefault(), (r = -1));
  }
  function tc(a) {
    if (!L) {
      0 <= r && (a.preventDefault(), q());
      var e = new Date().getTime(),
        b = -1;
      b = Math.abs(Tb - Ca) + Math.abs(Ub - Da);
      if (0 <= b && 20 > b && ba(a.target)) {
        var f = !1;
        if (c.D)
          for (b = c.D; b && b != c.control; )
            b.onclick && !f && (b.onclick(), (f = !0)), (b = b.parentNode);
        (b = sb(c.mouse.x, c.mouse.y)) && !f && (Jb(b), (f = !0));
        k.enabled && !f && Kb();
        f && a.preventDefault();
        b = Math.abs(Vb - Ca) + Math.abs(Wb - Da);
        if (700 > e - c.X && 0 <= b && 20 > b && !f) {
          c.D == c.control &&
            yb &&
            setTimeout(function () {
              c.toggleFullscreen();
            }, 10);
          if (c.D) {
            b = c.D;
            for (f = !1; b && b != c.control; )
              b.ondblclick && !f && (b.ondblclick(), (f = !0)),
                (b = b.parentNode);
            f && a.preventDefault();
          }
          c.X = 0;
        } else c.X = e;
        Vb = Ca;
        Wb = Da;
      }
      if (c.D) {
        b = c.D;
        for (f = !1; b && a != c.control; ) {
          if (b.onmouseout) b.onmouseout();
          a.onmouseup && !f && (b.onmouseup(), (f = !0));
          b = b.parentNode;
        }
        f && a.preventDefault();
      }
      c.D = null;
      r = -1;
    }
  }
  function uc(a) {
    a || (a = window.event);
    var e = a.touches,
      b = ia();
    c.mouse.x = e[0].pageX - b.x + H;
    c.mouse.y = e[0].pageY - b.y + I;
    if (!L) {
      if (
        1 == e.length &&
        e[0] &&
        ((Ca = e[0].pageX), (Da = e[0].pageY), 0 <= r)
      ) {
        a.preventDefault();
        for (b = 0; b < e.length; b++)
          if (Math.abs(e[b].identifier) == r) {
            var f = e[b].pageY;
            Ta = e[b].pageX;
            Ua = f;
            V = Ta;
            W = Ua;
            break;
          }
        q();
        Ma(e[0].pageX, e[0].pageY);
      }
      2 == e.length &&
        e[0] &&
        e[1] &&
        ((r = -1),
        xb ||
          ((Xb = Math.sqrt(
            (e[0].pageX - e[1].pageX) * (e[0].pageX - e[1].pageX) +
              (e[0].pageY - e[1].pageY) * (e[0].pageY - e[1].pageY)
          )),
          (e = n),
          c.setZoom((ta / Yb) * Xb),
          (e = 1 / (t * n) - 1 / (t * e)),
          (B += (c.mouse.x - H - 0.5 * D) * e),
          (C += (c.mouse.y - I - 0.5 * E) * e),
          a.preventDefault()));
    }
  }
  function vc(a) {
    a || (a = window.event);
    var e = a.touches,
      b = ia();
    c.mouse.x = e[0].pageX - b.x + H;
    c.mouse.y = e[0].pageY - b.y + I;
    if (!L) {
      console.log("Touch start...");
      if (1 == e.length && 0 > r && e[0]) {
        Va = new Date().getTime();
        Tb = e[0].pageX;
        Ub = e[0].pageY;
        Ca = e[0].pageX;
        Da = e[0].pageY;
        c.D = e[0].target;
        ba(e[0].target) &&
          (a.preventDefault(),
          zb(e[0].pageX, e[0].pageY),
          (r = Math.abs(e[0].identifier)),
          q());
        if (c.D) {
          b = c.D;
          for (flag = !1; b && !ba(b); ) {
            if (b.onmouseover) b.onmouseover();
            b.onmousedown && !flag && (b.onmousedown(), (flag = !0));
            b = b.parentNode;
          }
          flag && a.preventDefault();
        }
        Ma(e[0].pageX, e[0].pageY);
      }
      1 < e.length && (r = -1);
      !xb &&
        2 == e.length &&
        e[0] &&
        e[1] &&
        ((Yb = Math.sqrt(
          (e[0].pageX - e[1].pageX) * (e[0].pageX - e[1].pageX) +
            (e[0].pageY - e[1].pageY) * (e[0].pageY - e[1].pageY)
        )),
        (ta = n));
    }
  }
  function Ea(a) {
    if (!Zb && ((a = a ? a : window.event), (a = Fa(a)), ba(a.target))) {
      var e = a.detail ? -1 * a.detail : a.wheelDelta / 40;
      $b && (e = -e);
      if (0 != e) {
        var b = c.mouse.x - H - 0.5 * D,
          f = c.mouse.y - I - 0.5 * E,
          y = n;
        c.changeFovLog((0 < e ? 1 : -1) * ac, !0);
        e = 1 / (t * n) - 1 / (t * y);
        B += b * e;
        C += f * e;
        c.a = !0;
        a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
        q();
      }
    }
  }
  function bc(a) {
    if (!L && ((a = a ? a : window.event), (a = Fa(a)), 0 <= r)) {
      q();
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
      r = -1;
      var e = new Date().getTime(),
        b = -1;
      b = Math.abs(gb - V) + Math.abs(hb - W);
      if (400 > e - Va && 0 <= b && 20 > b && ba(a.target)) {
        b = Math.abs(cc - V) + Math.abs(dc - W);
        var f = sb(c.mouse.x, c.mouse.y);
        cc = V;
        dc = W;
        k.enabled && (Ma(a.pageX, a.pageY), Kb());
        f
          ? Jb(f)
          : 700 > e - c.X && 0 <= b && 20 > b
          ? (yb &&
              setTimeout(function () {
                c.toggleFullscreen();
              }, 10),
            (c.X = 0))
          : (c.X = e);
      }
    }
  }
  function Ga(a) {
    var e = ia();
    a = a ? a : window.event;
    1 == Sa &&
      ((a = Fa(a)),
      Wa()
        ? ((c.mouse.x = a.pageX - H), (c.mouse.y = a.pageY - I))
        : ((c.mouse.x = a.pageX - e.x + H), (c.mouse.y = a.pageY - e.y + I)),
      !L &&
        (0 <= r &&
          ((e = a.pageY),
          (Ta = a.pageX),
          (Ua = e),
          (V = Ta),
          (W = Ua),
          q(),
          hideSideBar(),
          a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
        k.enabled && ba(a.target)
          ? (Ma(a.pageX, a.pageY), 0 < k.A && Ka(c.mouse.x - H, c.mouse.y - I))
          : (k.A = 0),
        (0 == k.A && c.hotspot == c.emptyHotspot) ||
          "poly" == c.hotspot.hstype)) &&
      ((e = c.emptyHotspot),
      ba(a.target) && (e = sb(c.mouse.x, c.mouse.y)),
      c.hotspot != e &&
        (c.hotspot != c.emptyHotspot &&
          (0 < h.mode && (c.hotspot.m = 0),
          c.skinObj &&
            c.skinObj.hotspotProxyOut &&
            c.skinObj.hotspotProxyOut(c.hotspot.id)),
        e
          ? ((c.hotspot = e),
            c.skinObj &&
              c.skinObj.hotspotProxyOver &&
              c.skinObj.hotspotProxyOver(c.hotspot.id),
            (P.style.cursor = "pointer"),
            0 < h.mode && ((h.m = 1), (c.hotspot.m = 1), (c.a = !0)))
          : ((c.hotspot = c.emptyHotspot),
            (P.style.cursor = "auto"),
            0 < h.mode && ((h.m = 0), (c.a = !0)))),
      Ka(c.mouse.x - H, c.mouse.y - I));
  }
  function Ka(a, e) {
    var b = h.v;
    b.enabled &&
      (c.hotspot != c.emptyHotspot && 0 <= a && 0 <= e && "" != c.hotspot.title
        ? ((l.innerHTML = c.hotspot.title),
          (l.style.color = S(b.U, b.ea)),
          b.background
            ? (l.style.backgroundColor = S(b.B, b.G))
            : (l.style.backgroundColor = "transparent"),
          (l.style.border = "solid " + S(b.C, b.H) + " " + b.S + "px"),
          (l.style.borderRadius = b.R + "px"),
          (l.style.textAlign = "center"),
          0 < b.width
            ? ((l.style.left = a - b.width / 2 + "px"),
              (l.style.width = b.width + "px"))
            : ((l.style.width = "auto"),
              (l.style.left = a - l.offsetWidth / 2 + "px")),
          (l.style.height = 0 < b.height ? b.height + "px" : "auto"),
          (l.style.top = e + 25 + "px"),
          (l.style.visibility = "inherit"),
          (l.style.overflow = "hidden"))
        : ((l.style.visibility = "hidden"), (l.innerHTML = "")));
  }
  function wc(a) {
    if (K) K.onclick();
    L ||
      ((a = a ? a : window.event),
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
      zb(a.screenX, a.screenY),
      (r = 1),
      (Va = new Date().getTime()),
      q());
  }
  function Xa(a) {
    if (K) K.onclick();
    L ||
      ((a = a ? a : window.event),
      (a = Fa(a)),
      (a.which && 0 != a.which && 1 != a.which) ||
        !ba(a.target) ||
        (zb(a.pageX, a.pageY),
        (r = 1),
        (Va = new Date().getTime()),
        q(),
        a.preventDefault ? a.preventDefault() : (a.returnValue = !1)));
  }
  function Fa(a) {
    null == a.pageX &&
      null != a.clientX &&
      ((a.pageX =
        a.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft),
      (a.pageY =
        a.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop));
    return a;
  }
  function ba(a) {
    return a == u ||
      a == M ||
      a == x ||
      a == T ||
      a == c.control ||
      a == c.s ||
      (a.ggType && "container" == a.ggType)
      ? !0
      : !1;
  }
  function q() {
    ea && ((ea = !1), (f.g = 0), (f.o = 0));
    sa && ((sa = !1), (f.g = 0), (f.o = 0));
    qb = new Date().getTime();
  }
  function ib(a, e) {
    aa
      ? ((B += a / (n * t)), (C += e / (n * t)))
      : ((a = -a / 20), X ? Oa(a) : Pa(a), (e = -e / 20), X ? Pa(e) : Oa(e));
    Aa();
  }
  function zb(a, e) {
    gb = a;
    hb = e;
    V = a;
    W = e;
    lb = a;
    mb = e;
  }
  function ec() {
    switch (fc) {
      case 1:
        t = Math.min(D / f.width, E / f.height);
        break;
      case 2:
        t = Math.max(D / f.width, E / f.height);
        break;
      case 3:
        t = D / f.width;
        break;
      case 4:
        t = E / f.height;
        break;
      default:
        t = 1;
    }
    var a = t * n * (B - f.width / 2) + D / 2;
    var e = t * n * (C - f.height / 2) + E / 2;
    a = Math.round(a);
    e = Math.round(e);
    var b = Math.round(f.width * t * n);
    var g = Math.round(f.height * t * n);
    if (ca) {
      if (((ya = !1), 0 <= f.I && 0 <= f.J)) {
        (b < D || g < E) &&
          Ha > n &&
          (O.clear ? O.clear() : O.clearRect(0, 0, x.width, x.height),
          O != qa &&
            1 < f.L &&
            Ab &&
            ((Ab = !1),
            qa.clear ? qa.clear() : qa.clearRect(0, 0, x.width, x.height)));
        if (0 < f.l.length) {
          var y = 0,
            h;
          for (
            pwb = b * Math.sqrt(window.devicePixelRatio || 1);
            f.l.length >= y + 2 && f.l[y + 1].width > pwb;

          )
            y++;
          for (var k = y, l = !1; !l; ) {
            l = !0;
            var p = f.l[k];
            var q = (-a / b) * (p.width / f.u);
            var m = (-e / g) * (p.height / f.u);
            var z = ((-a + D) / b) * (p.width / f.u),
              A = ((-e + E) / g) * (p.height / f.u);
            q = Math.min(Math.max(0, Math.floor(q)), p.M - 1);
            m = Math.min(Math.max(0, Math.floor(m)), p.aa - 1);
            z = Math.min(Math.max(0, Math.floor(z)), p.M - 1);
            A = Math.min(Math.max(0, Math.floor(A)), p.aa - 1);
            for (h = m; h <= A; h++)
              for (m = q; m <= z; m++) {
                var F = m + h * p.M,
                  r = p.N[F];
                r && r.i ? r.i.complete || (l = !1) : (l = !1);
              }
            l || (k + 1 < f.l.length ? k++ : (l = !0));
          }
          for (; k >= y; ) {
            p = f.l[k];
            q = (-a / b) * (p.width / f.u);
            m = (-e / g) * (p.height / f.u);
            z = ((-a + D) / b) * (p.width / f.u);
            A = ((-e + E) / g) * (p.height / f.u);
            q = Math.min(Math.max(0, Math.floor(q)), p.M - 1);
            m = Math.min(Math.max(0, Math.floor(m)), p.aa - 1);
            z = Math.min(Math.max(0, Math.floor(z)), p.M - 1);
            A = Math.min(Math.max(0, Math.floor(A)), p.aa - 1);
            for (h = m; h <= A; h++)
              for (m = q; m <= z; m++)
                (F = m + h * p.M),
                  (r = p.N[F]) || (r = p.N[F] = {}),
                  !r.i &&
                    5 > ha &&
                    ((r.i = new Image()),
                    r.i.setAttribute("src", ub(f.I, f.J, f.K, k, m, h)),
                    (r.i.onload = xc),
                    (r.i.onerror = gc),
                    (r.i.onabort = gc),
                    0 == ha &&
                      c.divSkin &&
                      c.divSkin.ggReLoadedLevels &&
                      c.divSkin.ggReLoadedLevels(),
                    ha++),
                  r.i &&
                    r.i.complete &&
                    (O.drawImage(
                      r.i,
                      a + ((-f.ja + f.u * m) * b) / p.width,
                      e + ((-f.ja + f.u * h) * g) / p.height,
                      (r.i.width * b) / p.width,
                      (r.i.height * g) / p.height
                    ),
                    (ya = !0));
            k--;
          }
          Ha = n;
          Ya = B;
          Za = C;
        } else
          "" != u.src && u.complete
            ? (O.clear ? O.clear() : O.clearRect(0, 0, x.width, x.height),
              O.drawImage(u, a, e, b, g),
              (Ha = n),
              (Ya = B),
              (Za = C),
              (ya = !0))
            : (c.a = !0);
        if (ya)
          for (a = 0; a < G.length; a++)
            if (((e = G[a]), "point" == e.hstype)) {
              y = !1;
              for (p = g = b = 0; p < e.locations.length; p++)
                (k = e.locations[p]),
                  k.column == f.I &&
                    k.row == f.J &&
                    k.state == f.K &&
                    ((y = !0),
                    (b = t * n * (B + k.x * f.width - f.width / 2) + D / 2),
                    (g = t * n * (C + k.y * f.height - f.height / 2) + E / 2));
              e.obj &&
                e.obj.__div &&
                ((e.obj.__div.style[Ia] = "none"),
                y
                  ? ((e.obj.__div.style.left = H + b + "px"),
                    (e.obj.__div.style.top = I + g + "px"),
                    (e.obj.__div.style.visibility = "visible"))
                  : ((e.obj.__div.style.left = "-100px"),
                    (e.obj.__div.style.top = "-100px"),
                    (e.obj.__div.style.visibility = "hidden")));
            }
      }
    } else
      u.setAttribute("width", f.width),
        u.setAttribute("height", f.height),
        M.setAttribute("width", f.width),
        M.setAttribute("height", f.height),
        (u.style.left = a + "px"),
        (u.style.top = e + "px"),
        (u.style.width = b + "px"),
        (u.style.height = g + "px"),
        (M.style.left = a + "px"),
        (M.style.top = e + "px"),
        (M.style.width = b + "px"),
        (M.style.height = g + "px"),
        (Ha = n),
        (Ya = B),
        (Za = C);
  }
  function gc() {
    ha && ha--;
    0 == ha &&
      c.divSkin &&
      c.divSkin.ggLoadedLevels &&
      c.divSkin.ggLoadedLevels();
  }
  function xc() {
    c.a = !0;
    c.O = !0;
    ha && ha--;
    0 == ha &&
      c.divSkin &&
      c.divSkin.ggLoadedLevels &&
      c.divSkin.ggLoadedLevels();
  }
  function ia() {
    var a = { x: 0, y: 0 },
      e = F;
    if (e.offsetParent) {
      do (a.x += e.offsetLeft), (a.y += e.offsetTop);
      while ((e = e.offsetParent));
    }
    return a;
  }
  function $a() {
    c.isFullscreen &&
      (Wa() || c.exitFullscreen(),
      Wa() && ((c.b.style.left = "0px"), (c.b.style.top = "0px")));
  }
  function Wa() {
    return (
      document.webkitIsFullScreen ||
      document.mozFullScreen ||
      (document.msFullscreenElement && null != document.msFullscreenElement) ||
      document.fullScreen
    );
  }
  function ua() {
    c.setViewerSize(c.W.offsetWidth, c.W.offsetHeight);
  }
  function Na(a) {
    return "/" == a.charAt(0) || 0 < a.indexOf("://") ? a : Bb + a;
  }
  function hc(a) {
    a = Number(a).toString(16);
    return (a = "#000000".substr(0, 7 - a.length) + a);
  }
  function S(a, e) {
    a = Number(a);
    return ab && 8 >= ab
      ? hc(a)
      : "rgba(" +
          ((a >> 16) & 255) +
          "," +
          ((a >> 8) & 255) +
          "," +
          (a & 255) +
          "," +
          e +
          ")";
  }
  function yc(a, e) {
    var b = this;
    b.qa = a;
    b.hotspot = e;
    b.__div = document.createElement("div");
    b.i = document.createElement("img");
    b.i.setAttribute(
      "src",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNqclmlIVFEUx997TjrplFQW2WKBBSYtRFlpWUILSSsRZRQIBdGHCFqIoKIvQRsUFRJC9LEgaSFbMMpcWi1pLzOLsjItKms0U5t5/c/wH7nc5o2jF374xrv87z33nHOPaRsRtbFgDpgJxoD+wATfwDNQDK6CyrCr5OcbhgiGIRsUAZt4QTWoIFXgp9JfAhY7rgdBl8NeBoLDYBloA+dBOagFTcDHcVEgDgwBGWA+OAcugvXgvb5wKMGJoAAMp9BpUA96EBf/Btsf8BI8AWfAErAcpHHDZeriliY2AVwDg8AucAQ0Ag+I4XhTm2Oxz8PT46KMbTx5EZjuJDgAnAVusJUm9DhYwalFcc59sIXXIaceFkowDySBPTRPL20xm+b7zYXa+N3CPrWJ6GuwGySA40HLBHc/GywFhbS5R1lEBrZy7FQwiSaX9pmnqeAYt+KUcew7BVZw/QKTq0ocpYPVvDOXItZCk2xgDIZqL8BR8Ab0VDbr4yZOgLeIwzQx6WiQxcCt1+6sld66L4yYtFSwF4yg2dU7/cEwGW9YVkAwmycp1dzdpvgm0DcCh4kHmxWzBls0uBX4qqmZJ4KzePm1IeJLgjmlC16aDKZpp5Q168B3o6wsSwTHgU+MIUs74RSj6y1d+212HKimJlUE+tFRfJpYtOKNXWmJTASqWf2Bu/R6+4TKHOrOzG4IhptjWgHbGkZvepQ6SQK7oRuCXzjX1DJavBEX1ygfT8FgBqpfm1zRDcEKbR2bsZlkJCdXieB1ZhZ5YtqVgXIPN+m9kbY6hpdb+d9fPncJRmZmqQheZkemJmgxyxykl3XWJEkcAl7N21s7PDcl5ZJ0PAa3wVwmWtVbZafPwQ7wLozYB7ATPNJO56d/LAikP9u+66KNJS1d4IOZp7wU0hfLukUyzgwm70T2N/DOxIy/eFdqawa5DL2NEGwP5k15Ja4woz9glvcomd9NzyvkFcQo5gomaLfm5c0svnKZ2k7q7+FauvR2MJKZR3+sY5WgtvkdG6JyELGhNHMTXyGfLviRJ5Tcd4Dlhle7086Sgp8CqVxDkn4OqHaqacr5ekjy3Q/W0FRNNGmoMtamdzdxsytZC0lqXKhEgWPVVgImg2NgFT1MHOoOk3yLEtgWN5TEOYvoIFI1rGM19//2wpAD7imF7lfwENwAxaASNCj90pcLLKdC2Iyw1M9gnEplMEp5kOU1f8WwKGJm8oUr9f8JMAAVMDM6HSDa9QAAAABJRU5ErkJggg%3D%3D"
    );
    b.i.setAttribute("style", "position: absolute;top: -14px;left: -14px;");
    b.__div.appendChild(b.i);
    a = "position:absolute;" + (N + "user-select: none;");
    b.__div.setAttribute("style", a);
    b.__div.onclick = function () {
      b.qa.openUrl(e.url, e.target);
    };
    var c = h.v;
    c.enabled &&
      ((b.text = document.createElement("div")),
      (a = "position:absolute;" + ("left: -" + c.width / 2 + "px;")),
      (a = a + "top:\t 20px;" + ("width: " + c.width + "px;")),
      (a =
        0 == e.h ? a + "height: auto;" : a + ("height: " + c.height + "px;")),
      e.wordwrap
        ? (a = a + "white-space: pre-wrap;" + ("width: " + c.width + "px;"))
        : ((a =
            0 == c.height
              ? a + "width: auto;"
              : a + ("width: " + c.width + "px;")),
          (a += "white-space: nowrap;")),
      (a += N + "transform-origin: 50% 50%;"),
      b.text.setAttribute(
        "style",
        a +
          "visibility: hidden;border: 1px solid #000000;background-color: #ffffff;text-align: center;overflow: hidden;padding: 0px 1px 0px 1px;"
      ),
      (b.text.style.color = S(c.U, c.ea)),
      c.background
        ? (b.text.style.backgroundColor = S(c.B, c.G))
        : (b.text.style.backgroundColor = "transparent"),
      (b.text.style.border = "solid " + S(c.C, c.H) + " " + c.S + "px"),
      (b.text.style.borderRadius = c.R + "px"),
      (b.text.style.textAlign = "center"),
      (b.text.style.width = 0 < c.width ? c.width + "px" : "auto"),
      (b.text.style.height = 0 < c.height ? c.height + "px" : "auto"),
      (b.text.style.overflow = "hidden"),
      (b.text.innerHTML = e.title),
      (b.__div.onmouseover = function () {
        0 == c.height &&
          ((w = b.text.offsetWidth), (b.text.style.left = -w / 2 + "px"));
        b.text.style.visibility = "inherit";
      }),
      (b.__div.onmouseout = function () {
        b.text.style.visibility = "hidden";
      }),
      b.__div.appendChild(b.text));
  }
  function pc(a) {
    var e = "",
      b = 0;
    a = a.replace(/[^A-Za-z0-9\+\/=]/g, "");
    do {
      var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
        a.charAt(b++)
      );
      var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
        a.charAt(b++)
      );
      var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
        a.charAt(b++)
      );
      var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
        a.charAt(b++)
      );
      c = (c << 2) | (f >> 4);
      f = ((f & 15) << 4) | (h >> 2);
      var l = ((h & 3) << 6) | k;
      e += String.fromCharCode(c);
      64 != h && (e += String.fromCharCode(f));
      64 != k && (e += String.fromCharCode(l));
    } while (b < a.length);
    return e;
  }
  var c = this;
  c.transitionsDisabled = !1;
  var R = 0,
    D = 320,
    E = 480,
    n = 1,
    Cb = 1,
    Qa = 1,
    Ra = 1,
    Ha = -1,
    B = 0,
    C = 0,
    Ya = 0,
    Za = 0,
    t = 1,
    fc = 1,
    Yb,
    ta,
    Xb,
    gb = 0,
    hb = 0,
    V = 0,
    W = 0,
    cc = 0,
    dc = 0,
    Ta = 0,
    Ua = 0,
    r = -1,
    Tb = 0,
    Ub = 0,
    Ca = 0,
    Da = 0,
    Vb = 0,
    Wb = 0,
    Va,
    nb = !0,
    lb = 0,
    mb = 0,
    Y = 0,
    Z = 0,
    Fb = !1,
    k = {
      enabled: !1,
      A: 0,
      ca: 0,
      v: {
        enabled: !0,
        width: 180,
        height: 20,
        U: 0,
        background: !0,
        B: 16777215,
        C: 0,
        R: 1,
        S: 1,
        wordwrap: !0,
      },
      V: [],
    },
    G = [];
  G2 = [];
  G3 = [];
  c.emptyHotspot = {
    pan: 0,
    tilt: 0,
    title: "",
    url: "",
    target: "",
    id: "",
    skinid: "",
    w: 100,
    h: 20,
    wordwrap: !1,
    obj: null,
  };
  c.hotspot = c.emptyHotspot;
  c.mouse = { x: 0, y: 0 };
  var ja = 0,
    F = null,
    P = null,
    u = null,
    M = null,
    ka = null,
    x = null,
    T = null,
    ca = null,
    qa = null,
    O = null,
    fa = null,
    oa = null,
    l = null;
  c.control = null;
  c.checkLoaded = [];
  c.isFullscreen = !1;
  c.divSkin = null;
  c.isLoaded = !1;
  c.hasConfig = !1;
  var ob = 0,
    Gb = !1,
    ma = !1,
    Ja = 5,
    ea = !1,
    la = 0.4,
    rb = !1,
    sa = !1,
    xa = 0.1,
    va = 0,
    wa = 0,
    da = 0,
    pb,
    Hb,
    Ib,
    qb;
  c.skinObj = null;
  c.a = !1;
  var Ab = (c.O = !1);
  c.userdata = {
    title: "",
    description: "",
    author: "",
    datetime: "",
    copyright: "",
    source: "",
    information: "",
    comment: "",
  };
  var H = 0,
    I = 0,
    cb = 0,
    db = 0,
    fb = 3,
    Ba = !1,
    L = !1,
    Zb = !1,
    wb = !0,
    aa = !1,
    $b = !1,
    ac = 1,
    yb = !0,
    Lb = !1,
    Mb = !1,
    jb = !1,
    kb = !1,
    X = !1,
    ra = 10,
    f = {
      x: 0,
      y: 0,
      g: 0,
      o: 0,
      width: 100,
      height: 100,
      state: 0,
      I: -1,
      J: -1,
      K: -1,
      c: 1,
      j: 1,
      L: 1,
      Z: 0,
      $: 0,
      da: 0,
      path: "images/",
      ext: "jpg",
      u: 512,
      ta: 1,
      ka: 0,
      ia: function () {
        return (f.I % f.c) + ((f.J % f.c) + (f.K % f.L) * f.j) * f.c;
      },
    },
    ic = !0,
    jc = 0,
    N = "",
    Ia = "transition",
    xb = !1,
    Bb = "",
    h = {
      mode: 1,
      f: 0,
      m: 0,
      ba: 0.05,
      C: 255,
      H: 1,
      B: 255,
      G: 0.3,
      v: {
        enabled: !0,
        width: 180,
        height: 20,
        U: 0,
        ea: 1,
        background: !0,
        B: 16777215,
        G: 1,
        C: 0,
        H: 1,
        R: 3,
        S: 1,
        wordwrap: !0,
      },
    },
    kc = navigator.userAgent.toLowerCase(),
    ab = -1 != kc.indexOf("msie") ? parseInt(kc.split("msie")[1]) : !1,
    zc = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1,
    Db = !1,
    Eb = (function () {
      var a =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      return zc || !a
        ? function (a) {
            window.setTimeout(a, 10);
          }
        : a;
    })();
  c.detectBrowser = function () {
    var a = ["Webkit", "Moz", "O", "ms", "Ms"],
      e;
    N = "";
    Ia = "transition";
    for (e = 0; e < a.length; e++)
      "undefined" !==
        typeof document.documentElement.style[a[e] + "Transform"] &&
        ((N = "-" + a[e].toLowerCase() + "-"), (Ia = a[e] + "Transition"));
  };
  c.setBasePath = function (a) {
    Bb = a;
  };
  c.getPercentLoaded = function () {
    return ob;
  };
  var lc = !0;
  c.setViewerSize = function (a, e) {
    c.isFullscreen &&
      ("number" == typeof window.innerWidth
        ? ((a = window.innerWidth), (e = window.innerHeight))
        : document.documentElement &&
          (document.documentElement.clientWidth ||
            document.documentElement.clientHeight)
        ? ((a = document.documentElement.clientWidth),
          (e = document.documentElement.clientHeight))
        : document.body &&
          (document.body.clientWidth || document.body.clientHeight) &&
          ((a = document.body.clientWidth), (e = document.body.clientHeight)));
    var b = a - H - cb,
      f = e - I - db;
    D = b;
    E = f;
    F.style.width = b + "px";
    F.style.height = f + "px";
    F.style.left = H + "px";
    F.style.top = I + "px";
    ec();
    P.style.width = a + "px";
    P.style.height = e + "px";
    c.s.style.width = a + "px";
    c.s.style.height = e + "px";
    c.s.width = a;
    c.s.height = e;
    c.s.style.left = H + "px";
    c.s.style.top = I + "px";
    x.style.width = a + "px";
    x.style.height = e + "px";
    T.style.width = a + "px";
    T.style.height = e + "px";
    if (lc) {
      if (!ca)
        try {
          (qa = T.getContext("2d")), (O = ca = x.getContext("2d"));
        } catch (y) {}
      try {
        ca
          ? (F.removeChild(M), F.removeChild(u))
          : (F.removeChild(x), F.removeChild(T));
      } catch (y) {}
      lc = !1;
    }
    ca &&
      ((b = window.devicePixelRatio || 1),
      x.width != Math.round(a * b) || x.height != Math.round(e * b)) &&
      ((x.width = Math.round(a * b)),
      (x.height = Math.round(e * b)),
      (T.width = Math.round(a * b)),
      (T.height = Math.round(e * b)),
      ca.scale(b, b),
      qa.scale(b, b),
      (c.a = !0),
      (c.O = !0));
    c.a = !0;
    c.divSkin && c.divSkin.ggUpdateSize && c.divSkin.ggUpdateSize(a, e);
  };
  var ha = 0,
    ya = !1;
  c.setMargins = function (a, e, b, c) {
    H = a;
    I = e;
    cb = b;
    db = c;
    ua();
  };
  c.changeViewMode = function (a) {
    0 == a && (aa = !1);
    1 == a && (aa = !0);
    2 == a && (aa = aa ? !1 : !0);
    wb = 3 == a;
  };
  c.ua = function () {
    return 1;
  };
  c.changePolygonMode = function (a, e) {
    h.mode = 1 == e && 0 < h.mode ? 0 : Math.round(a);
    c.a = !0;
  };
  c.polygonMode = function () {
    return h.mode;
  };
  c.getPan = function () {
    return X ? f.y : f.x;
  };
  c.getPanN = function () {
    return c.getPan();
  };
  c.getPanNorth = function () {
    return c.getPan();
  };
  c.showObjectImage = function (a, e) {
    f.x = a;
    f.y = e;
    Aa();
    c.a = !0;
  };
  c.setPan = function (a) {
    q();
    isNaN(a) || (X ? (f.y = Number(a)) : (f.x = Number(a)));
    c.a = !0;
  };
  c.changePan = function (a) {
    q();
    isNaN(a) || (X ? Oa(a) : Pa(a));
    c.a = !0;
  };
  c.getTilt = function () {
    return X ? f.x : f.y;
  };
  c.setTilt = function (a) {
    q();
    isNaN(a) || (X ? (f.x = Number(a)) : (f.y = Number(a)));
    c.a = !0;
  };
  c.changeTilt = function (a) {
    q();
    isNaN(a) || (X ? Pa(a) : Oa(a));
    c.a = !0;
  };
  c.changePanLog = function (a, e) {
    c.changePan(a, e);
  };
  c.changeTiltLog = function (a, e) {
    c.changeTilt(a, e);
  };
  c.getFov = function () {
    return 100 * n;
  };
  c.setZoom = function (a) {
    isNaN(a) || (n = a < Qa ? Qa : a > Ra ? Ra : a);
    c.a = !0;
  };
  c.setFov = function (a) {
    q();
    c.setZoom(a / 100);
  };
  c.changeFov = function (a) {
    c.setFov(c.getFov() - 10 * a);
  };
  c.changeFovLog = function (a) {
    c.setFov(c.getFov() * Math.exp(-a / 50));
  };
  c.getX = function () {
    return f.I;
  };
  c.getY = function () {
    return f.J;
  };
  c.getState = function () {
    return f.K;
  };
  c.setCenter = function (a, e) {
    B = (0.5 - a) * f.width;
    C = (0.5 - e) * f.height;
    c.a = !0;
  };
  c.getCenter = function () {
    var a = {};
    a.x = 0.5 - B / f.width;
    a.y = 0.5 - C / f.height;
    return a;
  };
  c.setPanTilt = function (a, e) {
    q();
    isNaN(a) || c.setPan(a);
    isNaN(e) || c.setTilt(e);
    c.a = !0;
  };
  c.setPanTiltFov = function (a, e, b) {
    q();
    isNaN(a) || c.setPan(a);
    isNaN(e) || c.setTilt(e);
    !isNaN(b) && 0 < b && c.setFov(b);
    c.a = !0;
  };
  c.setDefaultView = function () {
    var a = 1;
    a--;
    f.x = f.ra;
    f.y = f.sa;
    c.changeViewState(f.da, a);
    n = Cb;
  };
  c.moveTo = function (a, e, b, c, h, k) {
    q();
    sa = !0;
    var g = a.toString().split("/");
    1 < g.length &&
      ((a = Number(g[0])),
      (c = e),
      (e = Number(g[1])),
      2 < g.length && (b = Number(g[2])));
    va = isNaN(a) ? f.x : Number(a);
    wa = isNaN(e) ? f.y : Number(e);
    pb = !isNaN(b) && 0 < b ? Number(b) : 100 * n;
    xa = !isNaN(c) && 0 < c ? Number(c) : 1;
    h && !isNaN(h) && k && !isNaN(k)
      ? ((Hb = Number(h)),
        (Ib = Number(k)),
        (da = Math.ceil(20 / xa)),
        0 >= da && (da = 1))
      : (da = 0);
  };
  c.moveToDefaultView = function (a) {
    c.moveTo(f.Z, f.$, 100 * Cb, a);
  };
  var pa,
    Sa = 1;
  c.changeViewState = function (a, e) {
    q();
    f.state != a &&
      ((f.state = Number(a)),
      (e = Number(e)),
      0 < e &&
        ((a = 1 / (20 * Number(e))),
        ca
          ? ((T.style.visibility = "inherit"),
            (x.style[Ia] = "opacity " + a + "s linear"),
            O == ca
              ? ((x.style.opacity = "0.0"), (O = qa))
              : ((x.style.opacity = "1.0"), (O = ca), (Ab = !0)))
          : ((M.style.visibility = "inherit"),
            (u.style[Ia] = "opacity " + a + "s linear"),
            ka == u
              ? ((u.style.opacity = "0.0"), (ka = M))
              : ((u.style.opacity = "1.0"), (ka = u))),
        c.updateObject()),
      (c.a = !0));
  };
  c.va = function () {
    return f.state;
  };
  c.updateObject = function () {
    Aa();
    var a = Math.floor(f.x),
      e = Math.floor(f.y),
      b = f.state,
      g = !1;
    if (f.I != a || f.J != e || f.K != b) {
      if (0 < f.l.length)
        for (g = 0; g < f.l.length; g++) {
          var h = f.l[g];
          h.cache ? (h.ha[f.ia()] = h.N) : (h.N = []);
        }
      f.I = a;
      f.J = e;
      f.K = b;
      if (0 < f.l.length && ca)
        for (g = 0; g < f.l.length; g++)
          (h = f.l[g]), h.cache && ((h.N = h.ha[f.ia()]), h.N || (h.N = []));
      else
        0 < f.l.length
          ? ka.setAttribute("src", ub(a, e, b, f.l.length - 1, 0, 0))
          : ka.setAttribute("src", vb(a, e, b)),
          (ka.onload = function () {
            this.na = !0;
            c.a = !0;
            c.O = !0;
          }),
          (ka.na = !1);
      g = !0;
    }
    if (g || c.O || n != Ha || B != Ya || C != Za) ec(), (c.O = !1);
    g &&
      k.enabled &&
      (null == fa &&
        ((fa = new Image()),
        (oa = document.createElement("canvas")),
        (oa.width = f.width),
        (oa.height = f.height),
        fa.addEventListener &&
          fa.addEventListener(
            "load",
            function () {
              oa.getContext("2d").drawImage(fa, 0, 0, f.width, f.height);
            },
            !1
          )),
      8 <= k.P
        ? (k.P & 16 && (a = 0), k.P & 32 && (e = 0), k.P & 64 && (b = 0))
        : (0 < k.P && (b = 0), 1 < k.P && (a = 0), 2 < k.P && (e = 0)),
      fa &&
        fa.src != Na(f.path + "/hs_" + b + "_" + e + "_" + a + ".png") &&
        (fa.src = Na(f.path + "/hs_" + b + "_" + e + "_" + a + ".png")));
  };
  c.preloadImages = function () {
    var a, e, b, g;
    if (0 < f.l.length)
      for (g = 0; g < f.l.length; g++) {
        var h = f.l[g];
        if (h.cache)
          for (b = 0; b < f.L; b++)
            for (e = 0; e < f.j; e++)
              for (a = 0; a < f.c; a++) {
                var k = [],
                  l,
                  n;
                for (n = 0; n < h.aa; n++)
                  for (l = 0; l < h.M; l++) {
                    var p = l + n * h.M;
                    var m = {};
                    m.i = new Image();
                    m.i.setAttribute("src", ub(a, e, b, g, l, n));
                    m.i.onload = function () {
                      c.a = !0;
                      c.O = !0;
                    };
                    k[p] = m;
                    c.checkLoaded.push(m.i);
                  }
                h.ha[a + f.c * (e + b * f.j)] = k;
              }
      }
    else if (f.ka)
      for (g = new Image(), g.src = vb(f.Z, f.$, f.da), b = 0; b < f.L; b++)
        for (e = 0; e < f.j; e++)
          for (a = 0; a < f.c; a++)
            (g = new Image()), (g.src = vb(a, e, b)), c.checkLoaded.push(g);
  };
  var J;
  Ka = function (a, e) {
    var b = h.v;

    b.enabled &&
      (c.hotspot != c.emptyHotspot && 0 <= a && 0 <= e && "" != c.hotspot.title
        ? ((l.style.color = S(b.U, b.ea)),
          $.ajax({
            url:
              "./functions.php?cmd=hotspot&etage_id=" +
              c.hotspot.title +
              "&reference=" +
              c.hotspot.id,
            success: function (html) {
              // console.log(c.hotspot.title+'&reference='+c.hotspot.id);
              l.innerHTML = html;

              //  (( = getMyHotspot(c.hotspot.id,c.hotspot.t)),
            },
          }),
          b.background
            ? (l.style.backgroundColor = S(b.B, b.G))
            : (l.style.backgroundColor = "transparent"),
          (l.style.border = "solid " + S(b.C, b.H) + " " + b.S + "px"),
          (l.style.borderRadius = b.R + "px"),
          (l.style.textAlign = "center"),
          0 < b.width
            ? ((l.style.left = a - b.width / 2 + "px"),
              (l.style.width = b.width + "px"))
            : ((l.style.width = "auto"),
              (l.style.left = a - l.offsetWidth / 2 + "px")),
          (l.style.height = 0 < b.height ? b.height + "px" : "auto"),
          (l.style.top = e + 25 + "px"),
          (l.style.visibility = "inherit"),
          (l.style.overflow = "hidden"))
        : ((l.style.visibility = "hidden"), (l.innerHTML = "")));
  };
  c.ma = function () {
    for (var a = 0; a < G.length; a++)
      if (
        "point" == G[a].hstype &&
        ((G[a].obj =
          c.skinObj && c.skinObj.addSkinHotspot
            ? new c.skinObj.addSkinHotspot(G[a])
            : new yc(this, G[a])),
        G[a].obj && G[a].obj.__div)
      ) {
        var e = P.firstChild;
        e ? P.insertBefore(G[a].obj.__div, e) : P.appendChild(G[a].obj.__div);
      }
  };
  var eb = 0;
  c.assignHandler = function () {
    var a = P;
    c.control = a;
    m();
    setTimeout(function () {
      z();
    }, 10);
    setTimeout(function () {
      Q();
    }, 200);
    setTimeout(function () {
      ua();
      c.updateObject();
    }, 10);
    a.addEventListener
      ? (a.addEventListener("touchstart", vc, !1),
        a.addEventListener("touchmove", uc, !1),
        a.addEventListener("touchend", tc, !1),
        a.addEventListener("touchcancel", sc, !1),
        a.addEventListener(
          "pointerdown",
          function (a) {
            Sb(a);
          },
          !1
        ),
        a.addEventListener(
          "MSPointerDown",
          function (a) {
            Sb(a);
          },
          !1
        ),
        a.addEventListener(
          "MSGestureStart",
          function (a) {
            Rb(a);
          },
          !1
        ),
        a.addEventListener(
          "MSGestureEnd",
          function (a) {
            Qb(a);
          },
          !1
        ),
        a.addEventListener(
          "MSGestureChange",
          function (a) {
            var b = a;
            if (!L) {
              var e = ia();
              b = b ? b : window.event;
              b = Fa(b);
              Wa()
                ? ((a = b.screenX - 0.5 * D), (e = b.screenY - 0.5 * E))
                : ((a = b.pageX - e.x - 0.5 * D),
                  (e = b.pageY - e.y - 0.5 * E));
              b.preventDefault();
              1 != b.scale &&
                ((Sa *= b.scale),
                (b = n),
                c.setZoom(Sa * ta),
                (b = 1 / (t * n) - 1 / (t * b)),
                (B += a * b),
                (C += e * b),
                q());
            }
          },
          !1
        ),
        a.addEventListener("gesturestart", Rb, !1),
        a.addEventListener("gesturechange", rc, !1),
        a.addEventListener("gestureend", Qb, !1),
        a.addEventListener("mousedown", Xa, !1),
        a.addEventListener("mousemove", Ga, !1),
        u.addEventListener("mousedown", Xa, !1),
        u.addEventListener("mousemove", Ga, !1),
        document.addEventListener("mouseup", bc, !1),
        ab &&
          (c.s.addEventListener("mousedown", Xa, !1),
          c.s.addEventListener("mousemove", Ga, !1),
          x.addEventListener("mousedown", Xa, !1),
          x.addEventListener("mousemove", Ga, !1)),
        ab
          ? (u.addEventListener("mousewheel", Ea, !1),
            x.addEventListener("mousewheel", Ea, !1))
          : (a.addEventListener("mousewheel", Ea, !1),
            a.addEventListener("DOMMouseScroll", Ea, !1)),
        document.addEventListener("keydown", Pb, !1),
        document.addEventListener("keyup", Ob, !1),
        window.addEventListener("orientationchange", m, !1),
        window.addEventListener("resize", ua, !1),
        window.addEventListener("blur", Nb, !1),
        c.b.addEventListener("webkitfullscreenchange", $a, !1),
        document.addEventListener("mozfullscreenchange", $a, !1),
        window.addEventListener("webkitfullscreenchange", $a, !1),
        document.addEventListener("MSFullscreenChange", $a, !1))
      : a.attachEvent &&
        (u.attachEvent("onmousedown", wc),
        u.attachEvent("onmousemove", Ga),
        document.attachEvent("onmouseup", bc),
        a.attachEvent("onmousedblclick", c.toggleFullscreen),
        (a.onmousewheel = document.onmousewheel = Ea),
        document.attachEvent("onkeydown", Pb),
        document.attachEvent("onkeyup", Ob),
        window.attachEvent("onresize", ua),
        window.attachEvent("onblur", Nb));
    a.oncontextmenu = function (a) {
      void 0 === a && (a = window.event);
      return a.ctrlKey ||
        ((a = "<<L>>" + String(a.target)),
        (a = a.toUpperCase()),
        "U" == a.charAt(2))
        ? !0
        : (U(), !1);
    };
  };
  c.setFullscreen = function (a) {
    c.isFullscreen != a && ((c.isFullscreen = a), (c.a = !0), (c.O = !0));
    if (c.isFullscreen) {
      try {
        c.b.webkitRequestFullScreen
          ? c.b.webkitRequestFullScreen()
          : c.b.mozRequestFullScreen
          ? c.b.mozRequestFullScreen()
          : c.b.msRequestFullscreen
          ? c.b.msRequestFullscreen()
          : c.b.requestFullScreen
          ? c.b.requestFullScreen()
          : c.b.requestFullscreen && c.b.requestFullscreen();
      } catch (g) {}
      c.b.style.position = "absolute";
      a = ia();
      var e = 0,
        b = 0;
      "number" == typeof window.pageYOffset
        ? ((b = window.pageYOffset), (e = window.pageXOffset))
        : document.body && (document.body.scrollLeft || document.body.scrollTop)
        ? ((b = document.body.scrollTop), (e = document.body.scrollLeft))
        : document.documentElement &&
          (document.documentElement.scrollLeft ||
            document.documentElement.scrollTop) &&
          ((b = document.documentElement.scrollTop),
          (e = document.documentElement.scrollLeft));
      c.b.style.left = Math.round(e - a.x + H) + "px";
      c.b.style.top = Math.round(b - a.y + I) + "px";
      document.body.style.overflow = "hidden";
      c.divSkin && c.divSkin.ggEnterFullscreen && c.divSkin.ggEnterFullscreen();
    } else {
      try {
        document.webkitIsFullScreen
          ? document.webkitCancelFullScreen()
          : document.mozFullScreen
          ? document.mozCancelFullScreen()
          : document.msExitFullscreen
          ? document.msExitFullscreen()
          : document.fullScreen &&
            (document.cancelFullScreen
              ? document.cancelFullScreen()
              : document.exitFullscreen && document.exitFullscreen());
      } catch (g) {}
      c.b.style.position = "relative";
      c.b.style.left = "0px";
      c.b.style.top = "0px";
      document.body.style.overflow = "";
      c.divSkin && c.divSkin.ggExitFullscreen && c.divSkin.ggExitFullscreen();
    }
    ua();
  };
  c.toggleFullscreen = function () {
    c.setFullscreen(!c.isFullscreen);
  };
  c.exitFullscreen = function () {
    c.setFullscreen(!1);
  };
  c.startAutorotate = function (a, c, b) {
    ea = ma = !0;
    a && 0 != a && (la = a);
    c && (Ja = c);
    b && (rb = 1 == b);
  };
  c.stopAutorotate = function () {
    ma = ea = !1;
  };
  c.toggleAutorotate = function () {
    ea = ma = !ea;
  };
  var K;
  c.createLayers = function (a) {
    c.W = document.getElementById(a);
    c.W
      ? ((c.W.innerHTML = ""),
        (c.b = document.createElement("div")),
        c.b.setAttribute(
          "style",
          "top:\t0px;left: 0px;-ms-touch-action: none;touch-action: none;position:relative;max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        c.W.appendChild(c.b),
        (F = document.createElement("div")),
        (a =
          "top:\t0px;left: 0px;overflow: hidden;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (N + "user-select: none;")),
        F.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        c.b.appendChild(F),
        (M = document.createElement("img")),
        M.setAttribute("galleryimg", "false"),
        (a =
          "top:\t0px;left: 0px;position:absolute;visibility: hidden;-ms-touch-action: none;touch-action: none;" +
          (N + "user-select: none;")),
        M.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        F.appendChild(M),
        (u = document.createElement("img")),
        u.setAttribute("galleryimg", "false"),
        (a =
          "top:\t0px;left: 0px;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (N + "user-select: none;")),
        u.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        F.appendChild(u),
        (ka = u),
        (T = document.createElement("canvas")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;visibility: hidden;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (N + "user-select: none;")),
        T.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        F.appendChild(T),
        (x = document.createElement("canvas")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (N + "user-select: none;")),
        x.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        F.appendChild(x),
        (l = document.createElement("div")),
        l.setAttribute(
          "style",
          "top:\t0px;left: 0px;position:absolute;padding: 3px;visibility: hidden;z-index: 1100;"
        ),
        (l.innerHTML = " Hotspot text!"),
        F.appendChild(l),
        (P = document.createElement("div")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 1000;" +
          (N + "user-select: none;")),
        P.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        c.b.appendChild(P),
        (c.s = document.createElement("canvas")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 900;" +
          (N + "user-select: none;")),
        c.s.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        c.b.appendChild(c.s),
        (c.divSkin = P))
      : alert("container not found!");
  };
  c.readConfigString = function (a) {
    window.DOMParser
      ? ((parser = new DOMParser()),
        (xmlDoc = parser.parseFromString(a, "text/xml")))
      : ((xmlDoc = new ActiveXObject("Microsoft.XMLDOM")),
        (xmlDoc.async = "false"),
        xmlDoc.loadXML(a));
    c.readConfigXml(xmlDoc);
  };
  c.readConfigUrl = function (a) {
    try {
      var e;
      window.XMLHttpRequest
        ? (e = new XMLHttpRequest())
        : (e = new ActiveXObject("Microsoft.XMLHTTP"));
      e.open("GET", a, !1);
      e.send(null);
      var b = e.responseXML;
      if (b) {
        var f = a.lastIndexOf("/");
        0 <= f && (Bb = a.substr(0, f + 1));
        c.readConfigXml(b);
      } else alert("Error loading XML");
    } catch (y) {
      alert("Error XML:" + y);
    }
  };
  var bb = !0;
  c.readConfigXml = function (a) {
    var e = a.firstChild;
    a = e.firstChild;
    null == a && (a = e.nextSibling.firstChild);
    for (var b; a; ) {
      if ("view" == a.nodeName)
        for (e = a.firstChild; e; )
          "start" == e.nodeName &&
            ((b = e.getAttributeNode("column")),
            (f.Z = Number(b ? b.nodeValue : 0)),
            (f.x = f.Z),
            (b = e.getAttributeNode("row")),
            (f.$ = Number(b ? b.nodeValue : 0)),
            (f.y = f.$),
            (b = e.getAttributeNode("")),
            (f.da = Number(b ? b.nodeValue : 0)),
            (f.state = f.da)),
            "zoom" == e.nodeName &&
              ((b = e.getAttributeNode("min")),
              (Qa = 1 * (b ? b.nodeValue : 1)),
              (b = e.getAttributeNode("default")),
              (n = Cb = 1 * (b ? b.nodeValue : 1)),
              (b = e.getAttributeNode("max")),
              (Ra = 1 * (b ? b.nodeValue : 1)),
              (b = e.getAttributeNode("centerx")),
              (B = 1 * (b ? b.nodeValue : 0)),
              (b = e.getAttributeNode("centery")),
              (C = 1 * (b ? b.nodeValue : 0))),
            "viewer" == e.nodeName &&
              ((b = e.getAttributeNode("background")) &&
                (ic = 1 == b.nodeValue),
              (b = e.getAttributeNode("backgroundcolor")) &&
                (jc = 1 * b.nodeValue),
              (b = e.getAttributeNode("imagescaling")) &&
                (fc = 1 * b.nodeValue)),
            (e = e.nextSibling);
      "autorotate" == a.nodeName &&
        (bb && (ma = !1),
        (b = a.getAttributeNode("start")) && (ma = 1 == b.nodeValue),
        (b = a.getAttributeNode("pingpong")) && (rb = 1 == b.nodeValue),
        (b = a.getAttributeNode("speed")) && (la = 1 * b.nodeValue),
        (b = a.getAttributeNode("delay")) && (Ja = 1 * b.nodeValue),
        (ea = ma),
        (b = a.getAttributeNode("onlyonce")) &&
          0 < b.nodeValue &&
          ((e = f.Z),
          (e =
            0 < la
              ? e + (b.nodeValue * f.c + 0.5)
              : e - (b.nodeValue * f.c + 0.5)),
          c.moveTo(e, f.$, 0, Math.abs(la))));
      if ("input" == a.nodeName) {
        if ((b = a.getAttributeNode("columns"))) f.c = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("rows"))) f.j = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("states"))) f.L = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("width"))) f.width = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("height"))) f.height = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("fileextension"))) f.ext = b.nodeValue;
        if ((b = a.getAttributeNode("imagepath"))) f.path = b.nodeValue;
        if ((b = a.getAttributeNode("leveltileurl"))) f.pa = b.nodeValue;
        if ((b = a.getAttributeNode("leveltilesize")))
          f.u = Number(b.nodeValue);
        if ((b = a.getAttributeNode("overlap"))) f.ja = b.nodeValue;
        if ((b = a.getAttributeNode("preload"))) f.ka = 1 == b.nodeValue;
        f.l = [];
        for (e = a.firstChild; e; ) {
          if ("level" == e.nodeName) {
            var g = {};
            b = e.getAttributeNode("width");
            g.width = 1 * (b ? b.nodeValue : 1);
            b = e.getAttributeNode("height");
            g.height = 1 * (b ? b.nodeValue : 1);
            b = e.getAttributeNode("preload");
            g.cache = !1;
            b && (g.cache = 1 == b.nodeValue);
            g.M = Math.floor((g.width + f.u - 1) / f.u);
            g.aa = Math.floor((g.height + f.u - 1) / f.u);
            g.N = [];
            g.ha = [];
            f.l.push(g);
          }
          e = e.nextSibling;
        }
      }
      "control" == a.nodeName &&
        bb &&
        ((b = a.getAttributeNode("simulatemass")) && (nb = 1 == b.nodeValue),
        (b = a.getAttributeNode("locked")) && (L = 1 == b.nodeValue),
        b && (Ba = 1 == b.nodeValue),
        (b = a.getAttributeNode("lockedmouse")) && (L = 1 == b.nodeValue),
        (b = a.getAttributeNode("lockedkeyboard")) && (Ba = 1 == b.nodeValue),
        (b = a.getAttributeNode("lockedwheel")) && (Zb = 1 == b.nodeValue),
        (b = a.getAttributeNode("invertwheel")) && ($b = 1 == b.nodeValue),
        (b = a.getAttributeNode("speedwheel")) && (ac = 1 * b.nodeValue),
        (b = a.getAttributeNode("sensitifity")) && (ra = 1 * b.nodeValue),
        (b = a.getAttributeNode("sensitivity")) && (ra = 1 * b.nodeValue),
        (b = a.getAttributeNode("wrapx")) && (Lb = 1 == b.nodeValue),
        (b = a.getAttributeNode("wrapy")) && (Mb = 1 == b.nodeValue),
        (b = a.getAttributeNode("revx")) && (jb = 1 == b.nodeValue),
        (b = a.getAttributeNode("revy")) && (kb = 1 == b.nodeValue),
        (b = a.getAttributeNode("swapxy")) && (X = 1 == b.nodeValue),
        (b = a.getAttributeNode("dblclickfullscreen")) &&
          (yb = 1 == b.nodeValue),
        (b = a.getAttributeNode("automovemode")) && (wb = 1 == b.nodeValue),
        (b = a.getAttributeNode("controller")) && (fb = 1 * b.nodeValue));
      if ("qthotspots" == a.nodeName) {
        if ((b = a.getAttributeNode("reuse"))) k.P = 1 * b.nodeValue;
        if ((b = a.getAttributeNode("enabled"))) k.enabled = 1 == b.nodeValue;
        k.V = [];
        g = { id: 0, title: "", url: "", target: "" };
        k.V[g.id] = g;
        for (e = a.firstChild; e; ) {
          if ("label" == e.nodeName) {
            if ((b = e.getAttributeNode("enabled")))
              k.v.enabled = 1 == b.nodeValue;
            if ((b = e.getAttributeNode("width"))) k.v.width = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("height")))
              k.v.height = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("textcolor"))) k.v.U = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("background")))
              k.v.background = 1 == b.nodeValue;
            if ((b = e.getAttributeNode("backgroundcolor")))
              k.v.B = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("border"))) k.v.S = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("bordercolor")))
              k.v.C = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("borderradius")))
              k.v.R = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("wordwrap")))
              k.v.wordwrap = 1 == b.nodeValue;
          }
          "hotspot" == e.nodeName &&
            ((g = {}),
            (b = e.getAttributeNode("id")),
            (g.id = 1 * (b ? b.nodeValue : 1)),
            (b = e.getAttributeNode("title")),
            (g.title = b ? b.nodeValue.toString() : ""),
            (b = e.getAttributeNode("url")),
            (g.url = b ? b.nodeValue.toString() : ""),
            (b = e.getAttributeNode("target")),
            (g.target = b ? b.nodeValue.toString() : ""),
            (k.V[g.id] = g));
          e = e.nextSibling;
        }
      }
      if ("hotspots" == a.nodeName)
        for (e = a.firstChild; e; ) {
          if ("label" == e.nodeName) {
            g = h.v;
            if ((b = e.getAttributeNode("enabled")))
              g.enabled = 1 == b.nodeValue;
            if ((b = e.getAttributeNode("width"))) g.width = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("height"))) g.height = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("textcolor"))) g.U = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("textalpha"))) g.ea = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("background")))
              g.background = 1 == b.nodeValue;
            if ((b = e.getAttributeNode("backgroundalpha")))
              g.G = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("backgroundcolor")))
              g.B = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("border"))) g.S = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("bordercolor"))) g.C = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("borderalpha"))) g.H = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("borderradius"))) g.R = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("wordwrap")))
              g.wordwrap = 1 == b.nodeValue;
          }
          if ("polystyle" == e.nodeName) {
            if ((b = e.getAttributeNode("mode"))) h.mode = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("bordercolor"))) h.C = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("backgroundcolor")))
              h.B = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("borderalpha"))) h.H = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("backgroundalpha")))
              h.G = 1 * b.nodeValue;
          }
          if ("hotspot" == e.nodeName) {
            g = {
              hstype: "point",
              pan: 0,
              tilt: 0,
              url: "",
              target: "",
              id: "",
              skinid: "",
              w: 100,
              h: 20,
              wordwrap: !1,
              obj: null,
              F: null,
            };
            (b =
              "https://docs.python.org/2/library/xml.etree.elementtree.html") &&
              (g.url =
                "https://docs.python.org/2/library/xml.etree.elementtree.html");
            (b = e.getAttributeNode("target")) &&
              (g.target = b.nodeValue.toString());
            (b = e.getAttributeNode("title")) &&
              (g.title = b.nodeValue.toString());
            (b = e.getAttributeNode("id")) && (g.id = b.nodeValue.toString());
            if ((b = e.getAttributeNode("reuse"))) g.reuse = b.nodeValue;
            (b = e.getAttributeNode("skinid")) &&
              (g.skinid = b.nodeValue.toString());
            (b = a.getAttributeNode("width")) && (g.w = b.nodeValue.toString());
            (b = a.getAttributeNode("height")) &&
              (g.h = b.nodeValue.toString());
            (b = a.getAttributeNode("wordwrap")) &&
              (g.wordwrap = 1 == b.nodeValue);
            g.locations = [];
            for (var l = e.firstChild; l; ) {
              if ("location" == l.nodeName) {
                var m = { column: 0, row: 0, state: 0, x: 0, y: 0 };
                (b = l.getAttributeNode("column")) &&
                  (m.column = Number(b.nodeValue));
                (b = l.getAttributeNode("row")) &&
                  (m.row = Number(b.nodeValue));
                (b = l.getAttributeNode("state")) &&
                  (m.state = Number(b.nodeValue));
                (b = l.getAttributeNode("x")) && (m.x = Number(b.nodeValue));
                (b = l.getAttributeNode("y")) && (m.y = Number(b.nodeValue));
                g.locations.push(m);
              }
              l = l.nextSibling;
            }
            G.push(g);
            G2.push(g);
            G3.push(g);
          }
          if ("polyhotspot" == e.nodeName) {
            g = {
              hstype: "poly",
              url: "",
              target: "",
              id: "",
              skinid: "",
              reuse: 0,
              w: 100,
              h: 20,
              wordwrap: !1,
              obj: null,
              F: null,
              f: 0,
              m: 0,
            };
            (b = e.getAttributeNode("url")) && (g.url = b.nodeValue.toString());
            (b = e.getAttributeNode("target")) &&
              (g.target = b.nodeValue.toString());
            (b = e.getAttributeNode("title")) &&
              (g.title = b.nodeValue.toString());
            (b = e.getAttributeNode("id")) && (g.id = b.nodeValue.toString());
            if ((b = e.getAttributeNode("reuse"))) g.reuse = b.nodeValue;
            g.C = h.C;
            g.B = h.B;
            g.H = h.H;
            g.G = h.G;
            if ((b = e.getAttributeNode("bordercolor"))) g.C = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("backgroundcolor")))
              g.B = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("borderalpha"))) g.H = 1 * b.nodeValue;
            if ((b = e.getAttributeNode("backgroundalpha")))
              g.G = 1 * b.nodeValue;
            g.T = [];
            for (l = e.firstChild; l; ) {
              if ("polygon" == l.nodeName) {
                m = { fa: 0, ga: 0, state: 0, la: "" };
                if ((b = l.getAttributeNode("vertices"))) {
                  m.la = b.nodeValue.toString();
                  b = m.la.split("|");
                  m.Y = [];
                  for (var q = 0; q < b.length; q++) {
                    var r = {},
                      p = b[q].split(";");
                    r.F = [];
                    for (var t = 0; t < p.length; t++) {
                      var u = p[t].split(","),
                        x = {};
                      x.x = 1 * u[0];
                      x.y = 1 * u[1];
                      r.F.push(x);
                    }
                    m.Y.push(r);
                  }
                }
                if ((b = l.getAttributeNode("column"))) m.fa = b.nodeValue;
                if ((b = l.getAttributeNode("state"))) m.ga = b.nodeValue;
                if ((b = l.getAttributeNode("row"))) m.state = b.nodeValue;
                g.T.push(m);
              }
              l = l.nextSibling;
            }
            G.push(g);
            G2.push(g);
            G3.push(g);
          }
          e = e.nextSibling;
        }
      "userdata" == a.nodeName &&
        ((b = a.getAttributeNode("title")),
        (c.userdata.title = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("description")),
        (c.userdata.description = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("author")),
        (c.userdata.author = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("datetime")),
        (c.userdata.datetime = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("copyright")),
        (c.userdata.copyright = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("source")),
        (c.userdata.source = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("info")),
        (c.userdata.information = b ? b.nodeValue.toString() : ""),
        (b = a.getAttributeNode("comment")),
        (c.userdata.comment = b ? b.nodeValue.toString() : ""));
      a = a.nextSibling;
    }
    c.ma();
    c.a = !0;
    bb && c.divSkin && c.divSkin.ggViewerInit && c.divSkin.ggViewerInit();
    bb = !1;
    c.hasConfig = !0;
    ua();
    ic
      ? (F.style.backgroundColor = hc(jc))
      : (F.style.backgroundColor = "transparent");
    c.preloadImages();
  };
  c.openUrl = function (a, c) {
    0 < a.length && window.open(a, c);
  };
  c.detectBrowser();
  c.createLayers(A);
  c.assignHandler();

  c.renitialiser = function () {
    G = G3.filter((el) => {
      el.B = 255;
      el.C = 255;
      return el;
    });

    G2 = G3.filter((el) => {
      el.B = 255;
      el.C = 255;
      return el;
    });
    this.a = !0;
  };

  c.init = function () {
    G2.filter((el) => {
      el.B = 255;
      el.C = 255;
      return el;
    });
  };

  c.showAllFilltred = function (hotspotId, hotspotTitle) {
    G = G2.filter((el) => {
      if ((el.id == hotspotId && el.title == hotspotTitle) || el.B == 0) {
        el.B = 0;
        el.C = 0;
        return el;
      }
    });

    this.a = !0;
  };

  c.showFilltred = function (hotspotId, hotspotTitle) {
    G = G.filter((el) => {
      if (el.id == hotspotId && el.title == hotspotTitle) {
        el.B = 65280;
        el.C = 65280;
        c.changeViewState(el.T[0].state);
        // console.log(el.T[0].state);
        // alert("dfd");
      } else {
        el.B = 0;
        el.C = 0;
      }

      return el;
    });
    this.a = !0;
    // /  hideSideBar();-
     console.log(G);
  };
}
window.object2vrPlayer = object2vrPlayer;
window.ggHasCanvas = function () {
  var A = document.createElement("canvas");
  return !(!A.getContext || !A.getContext("2d"));
};
