// Timeline browser (explore/timeline) and features chart (views/typewriter-features), from assets/timeline.json.
// Plain SVG, no libraries. Generated data; this file is copied into the site by tools/build_public.py.
(function () {
  "use strict";
  var script = document.currentScript;
  var BASE = script ? script.src.replace(/assets\/timeline\.js.*$/, "") : "../";
  var NS = "http://www.w3.org/2000/svg";
  var COUNTRY_SLOT = { "USA": 1, "Germany": 2, "England": 3 }; // fixed per country; everything else is "other"

  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function h(tag, attrs, parent, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }
  function seriesVar(country) {
    return COUNTRY_SLOT[country] ? "var(--tl-s" + COUNTRY_SLOT[country] + ")" : "var(--tl-other)";
  }
  function page(kind, slug) { return BASE + kind + "/" + encodeURIComponent(slug) + "/"; }

  var tip;
  function showTip(evt, html) {
    if (!tip) { tip = h("div", { "class": "tl-tip", role: "tooltip" }, document.body); }
    tip.innerHTML = html;
    tip.style.display = "block";
    var x = evt.clientX + 14, y = evt.clientY + 14, r = tip.getBoundingClientRect();
    if (x + r.width > window.innerWidth - 8) x = evt.clientX - r.width - 14;
    if (y + r.height > window.innerHeight - 8) y = evt.clientY - r.height - 14;
    tip.style.left = x + "px"; tip.style.top = y + "px";
  }
  function hideTip() { if (tip) tip.style.display = "none"; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function load(cb) {
    fetch(BASE + "assets/timeline.json").then(function (r) { return r.json(); }).then(cb)
      .catch(function () { document.querySelectorAll(".tl-browser,.tl-features").forEach(function (n) { n.textContent = "Could not load the timeline data."; }); });
  }

  // ---------------------------------------------------------------- browser
  function Browser(root, data) {
    var state = { mode: "lanes", kind: "all", from: 1860, to: 1960, year: null };
    if (window.innerWidth < 700) { state.from = 1870; state.to = 1940; }
    var countries = data.countries.filter(function (c) { return c !== "unknown"; });
    var top = countries.slice(0, 7);

    var controls = h("div", { "class": "tl-controls" }, root);
    function group(label) { var g = h("div", { "class": "tl-group", role: "group", "aria-label": label }, controls); h("span", { "class": "tl-label" }, g, label); return g; }
    function seg(g, options, key) {
      options.forEach(function (o) {
        var b = h("button", { type: "button", "class": "tl-seg", "data-v": o[0], "data-k": key }, g, o[1]);
        b.addEventListener("click", function () { state[key] = o[0]; sync(); render(); });
      });
    }
    seg(group("Lanes"), [["lanes", "By country"], ["kinds", "By kind"], ["all", "All together"]], "mode");
    seg(group("Machines"), [["all", "All"], ["index", "Index"], ["type element", "Type element"], ["typebar", "Typebar"]], "kind");
    var rg = group("Years");
    var fromIn = h("input", { type: "number", min: 1820, max: 1990, step: 5, value: state.from, "aria-label": "From year", "class": "tl-year" }, rg);
    h("span", {}, rg, "–");
    var toIn = h("input", { type: "number", min: 1830, max: 2000, step: 5, value: state.to, "aria-label": "To year", "class": "tl-year" }, rg);
    [["1820–1990", 1820, 1990], ["1860–1920", 1860, 1920], ["1900–1960", 1900, 1960]].forEach(function (p) {
      var b = h("button", { type: "button", "class": "tl-seg tl-preset" }, rg, p[0]);
      b.addEventListener("click", function () { state.from = p[1]; state.to = p[2]; fromIn.value = p[1]; toIn.value = p[2]; render(); });
    });
    [fromIn, toIn].forEach(function (inp) {
      inp.addEventListener("change", function () {
        var a = +fromIn.value, b = +toIn.value;
        if (a && b && b - a >= 10) { state.from = a; state.to = b; render(); }
      });
    });
    function sync() {
      controls.querySelectorAll(".tl-seg[data-v]").forEach(function (b) {
        var on = state[b.getAttribute("data-k")] === b.getAttribute("data-v");
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }

    var legend = h("div", { "class": "tl-legend" }, root);
    var wrap = h("div", { "class": "tl-chart" }, root);
    var panel = h("div", { "class": "tl-panel", "aria-live": "polite" }, root);
    h("p", { "class": "tl-hint" }, panel, "Click a year on the chart to list what was made and patented then.");

    function machinesShown() {
      return data.machines.filter(function (m) {
        return m.y >= state.from && m.y <= state.to && (state.kind === "all" || m.k === state.kind);
      });
    }

    function render() {
      sync();
      wrap.innerHTML = ""; legend.innerHTML = "";
      var W = Math.max(wrap.clientWidth || root.clientWidth || 800, 320);
      var left = state.mode === "all" ? 12 : (W < 600 ? 80 : 112), right = 12;
      var span = state.to - state.from + 1;
      var x = function (y) { return left + (y - state.from + 0.5) / span * (W - left - right); };
      var col = (W - left - right) / span;
      var R = Math.max(2.5, Math.min(4, col / 2 - 0.5));
      var step = 2 * R + 1;
      var ms = machinesShown();

      // lanes
      var lanes;
      if (state.mode === "lanes") {
        lanes = top.map(function (c) { return { name: c, items: ms.filter(function (m) { return m.c === c; }) }; });
        lanes.push({ name: "Other", items: ms.filter(function (m) { return top.indexOf(m.c) < 0; }) });
      } else if (state.mode === "kinds") {
        lanes = [["index", "Index"], ["type element", "Type element"], ["typebar", "Typebar"], ["unknown", "Kind unknown"]]
          .map(function (k) { return { name: k[1], kind: k[0], items: ms.filter(function (m) { return m.k === k[0]; }) }; })
          .filter(function (l) { return l.items.length; });
        lanes.forEach(function (l) { l.items.sort(function (a, b) { return (COUNTRY_SLOT[a.c] || 9) - (COUNTRY_SLOT[b.c] || 9); }); });
      } else {
        var order = function (m) { return COUNTRY_SLOT[m.c] || 9; };
        lanes = [{ name: "All", items: ms.slice().sort(function (a, b) { return order(a) - order(b); }) }];
      }
      var cap = 22;
      lanes.forEach(function (l) {
        var per = {};
        l.items.forEach(function (m) { (per[m.y] = per[m.y] || []).push(m); });
        l.per = per;
        var mx = 0; for (var y in per) mx = Math.max(mx, Math.min(per[y].length, cap));
        l.h = Math.max(mx * step + 14, 30);
      });

      var featH = 26 + ((W < 600 ? 4 : 6) + 1) * 13 + 4, patH = 56, axisH = 22, gap = 10;
      // one patents row per office in the data (JP joins once Japanese patents are in the library)
      var offices = [["US", "US patents", 1], ["DE", "German patents", 2], ["JP", "Japanese patents", 3]]
        .filter(function (o) { return data.patents[o[0]]; });
      var nP = state.mode === "kinds" ? 3 : offices.length;
      var H = featH + lanes.reduce(function (s, l) { return s + l.h; }, 0) + gap + nP * patH + axisH + 10;
      var svg = el("svg", { width: W, height: H, viewBox: "0 0 " + W + " " + H, role: "img",
        "aria-label": "Timeline of machines by country, patents per year and typewriter features, " + state.from + " to " + state.to }, wrap);

      // grid by decade
      var gridG = el("g", { "class": "tl-grid" }, svg);
      for (var d = Math.ceil(state.from / 10) * 10; d <= state.to; d += 10) {
        el("line", { x1: x(d) - col / 2, x2: x(d) - col / 2, y1: 0, y2: H - axisH }, gridG);
        var t = el("text", { x: x(d) - col / 2, y: H - 6, "class": "tl-axis", "text-anchor": "middle" }, svg);
        t.textContent = (W < 600 && d % 20) ? "" : d;
      }

      // features lane: first appearance in the patents
      var fy = 0;
      var ft = el("text", { x: 4, y: 12, "class": "tl-lane-label" }, svg); ft.textContent = "Features (first in the patents)";
      var ends = [], ROWS = W < 600 ? 4 : 6;
      data.features.filter(function (f) { return f.first && f.first.y >= state.from && f.first.y <= state.to; })
        .sort(function (a, b) { return a.first.y - b.first.y; })
        .forEach(function (f) {
          var cx = x(f.first.y), wlab = 10 + f.name.length * 6, row = -1;
          for (var r = 0; r < ROWS; r++) { if ((ends[r] || -1e9) < cx - 6) { row = r; break; } }
          var show = row >= 0;
          if (!show) { row = ROWS; } else { ends[row] = cx + wlab; }  // no room: diamond only, in a row of its own
          var cy = 26 + row * 13;
          var g = el("g", { "class": "tl-feat", tabindex: 0 }, svg);
          el("path", { d: "M" + cx + " " + (cy - 5) + "l5 5-5 5-5-5z", "class": "tl-diamond" }, g);
          var lab = el("text", { x: cx + 7, y: cy + 4, "class": "tl-feat-label" }, g); lab.textContent = show ? f.name : "";
          var htm = "<b>" + esc(f.name) + "</b><br>First in the patents here: " + f.first.y + " (" + esc(f.first.id) + ")" +
            (f.machines && f.machines.standard ? "<br>Standard on new machines: " + f.machines.standard + "s" : "") +
            (f.today ? "<br>Today: " + esc(f.today) : "");
          g.addEventListener("mousemove", function (e) { showTip(e, htm); });
          g.addEventListener("mouseleave", hideTip);
          g.addEventListener("focus", function (e) { var r = g.getBoundingClientRect(); showTip({ clientX: r.right, clientY: r.top }, htm); });
          g.addEventListener("blur", hideTip);
          g.addEventListener("click", function () { location.href = BASE + "views/typewriter-features/"; });
        });

      // machine lanes
      var y0 = featH;
      lanes.forEach(function (l) {
        var base = y0 + l.h - 6;
        el("line", { x1: left, x2: W - right, y1: base + 3, y2: base + 3, "class": "tl-baseline" }, svg);
        if (state.mode !== "all") {
          var lt = el("text", { x: 4, y: base - 2, "class": "tl-lane-label" }, svg);
          lt.textContent = l.name + " (" + l.items.length + ")";
        }
        for (var yy in l.per) {
          var list = l.per[yy], cx = x(+yy);
          list.slice(0, cap).forEach(function (m, k) {
            var c = el("circle", { cx: cx, cy: base - R - k * step, r: R, fill: seriesVar(m.c),
              "class": "tl-dot" + (m.k === "index" ? " tl-index" : ""), tabindex: -1 }, svg);
            var htm = "<b>" + esc(m.t) + "</b> (" + m.y + ")<br>" + esc(m.m || "maker unknown") + "<br>" + esc(m.c) +
              " · " + esc(m.k) + (m.car ? " · " + esc(m.car) : "");
            c.addEventListener("mousemove", function (e) { showTip(e, htm); });
            c.addEventListener("mouseleave", hideTip);
            c.addEventListener("click", function (e) { e.stopPropagation(); location.href = page("machines", m.s); });
          });
          if (list.length > cap) {
            var more = el("text", { x: cx, y: base - cap * step - 2, "class": "tl-more", "text-anchor": "middle" }, svg);
            more.textContent = "+" + (list.length - cap);
          }
        }
        y0 += l.h;
      });

      // patents per year, one row per office
      y0 += gap;
      var rowsP = state.mode === "kinds"
        ? [["index", "Index-machine patents", 0], ["type element", "Type-element patents", 0], ["typebar", "Typebar patents", 0]]
        : offices;
      rowsP.forEach(function (o) {
        var counts = (state.mode === "kinds" ? data.patent_kinds : data.patents)[o[0]] || {}, mx = 1;
        for (var yy = state.from; yy <= state.to; yy++) mx = Math.max(mx, counts[yy] || 0);
        var base = y0 + patH - 8;
        var lt = el("text", { x: state.mode === "all" ? left : 4, y: y0 + 10, "class": "tl-lane-label" }, svg);
        lt.textContent = o[1] + " per year (max " + mx + ")";
        for (yy = state.from; yy <= state.to; yy++) {
          var n = counts[yy] || 0; if (!n) continue;
          var bh = Math.max(1, n / mx * (patH - 20)), bw = Math.max(1, col - 2);
          var r = el("rect", { x: x(yy) - bw / 2, y: base - bh, width: bw, height: bh, rx: Math.min(2, bw / 2),
            fill: o[2] ? "var(--tl-s" + o[2] + ")" : "var(--tl-neutral)", "class": "tl-bar" }, svg);
          (function (yy, n) {
            r.addEventListener("mousemove", function (e) { showTip(e, "<b>" + yy + "</b><br>" + n + " " + o[1].toLowerCase()); });
            r.addEventListener("mouseleave", hideTip);
          })(yy, n);
        }
        el("line", { x1: left, x2: W - right, y1: base + 1, y2: base + 1, "class": "tl-baseline" }, svg);
        y0 += patH;
      });

      // crosshair and year click
      var cross = el("line", { y1: 0, y2: H - axisH, "class": "tl-cross", visibility: "hidden" }, svg);
      var crossT = el("text", { y: 10, "class": "tl-cross-label", "text-anchor": "middle", visibility: "hidden" }, svg);
      svg.insertBefore(cross, svg.firstChild);
      function yearAt(evt) {
        var pt = svg.getBoundingClientRect(), px = evt.clientX - pt.left;
        if (px < left || px > W - right) return null;
        return Math.min(state.to, Math.max(state.from, Math.floor(state.from + (px - left) / (W - left - right) * span)));
      }
      svg.addEventListener("mousemove", function (e) {
        var yy = yearAt(e);
        if (yy == null) { cross.setAttribute("visibility", "hidden"); crossT.setAttribute("visibility", "hidden"); return; }
        cross.setAttribute("x1", x(yy)); cross.setAttribute("x2", x(yy)); cross.setAttribute("visibility", "visible");
        crossT.setAttribute("x", x(yy)); crossT.textContent = yy; crossT.setAttribute("visibility", "visible");
      });
      svg.addEventListener("mouseleave", function () { cross.setAttribute("visibility", "hidden"); crossT.setAttribute("visibility", "hidden"); });
      svg.addEventListener("click", function (e) { var yy = yearAt(e); if (yy != null) { state.year = yy; showYear(); } });

      // legend: dots are coloured by country except in "By country", where the lanes already say it
      if (state.mode !== "lanes") {
        ["USA", "Germany", "England", "Other countries"].forEach(function (c) {
          var it = h("span", { "class": "tl-key" }, legend);
          var sw = h("span", { "class": "tl-swatch" }, it); sw.style.background = seriesVar(c);
          it.appendChild(document.createTextNode(c));
        });
      }
      var n = h("span", { "class": "tl-count" }, legend, ms.length + " machines shown · dot = one machine (year introduced); index machines outlined");
      if (state.year) showYear();
    }

    function showYear() {
      var yy = state.year;
      panel.innerHTML = "";
      h("h3", {}, panel, String(yy));
      var ms = data.machines.filter(function (m) { return m.y === yy && (state.kind === "all" || m.k === state.kind); });
      var us = (data.patents.US || {})[yy] || 0, de = (data.patents.DE || {})[yy] || 0, jp = (data.patents.JP || {})[yy] || 0;
      h("p", {}, panel, ms.length + " machine" + (ms.length === 1 ? "" : "s") + " introduced · " + us + " US" +
        (data.patents.JP ? ", " + de + " German and " + jp + " Japanese" : " and " + de + " German") + " patents in the library");
      var feats = data.features.filter(function (f) { return f.first && f.first.y === yy; });
      if (feats.length) {
        var p = h("p", {}, panel); p.appendChild(document.createTextNode("First in the patents: "));
        feats.forEach(function (f, i) {
          if (i) p.appendChild(document.createTextNode(", "));
          h("a", { href: page("patents", f.first.id) }, p, f.name + " (" + f.first.id + ")");
        });
      }
      if (ms.length) {
        var byC = {};
        ms.forEach(function (m) { (byC[m.c] = byC[m.c] || []).push(m); });
        var ul = h("ul", {}, panel);
        Object.keys(byC).sort(function (a, b) { return byC[b].length - byC[a].length; }).forEach(function (c) {
          var li = h("li", {}, ul); h("strong", {}, li, c + ": ");
          byC[c].forEach(function (m, i) {
            if (i) li.appendChild(document.createTextNode(", "));
            h("a", { href: page("machines", m.s) }, li, m.t);
            if (m.m) li.appendChild(document.createTextNode(" (" + m.m + ")"));
          });
        });
      }
      var lm = (data.landmarks || []).filter(function (l) { return +l.year === yy; });
      if (lm.length) {
        var pl = h("p", {}, panel); h("strong", {}, pl, "American landmarks: ");
        lm.forEach(function (l, i) {
          if (i) pl.appendChild(document.createTextNode("; "));
          if (l.slug) h("a", { href: page("machines", l.slug) }, pl, l.event); else pl.appendChild(document.createTextNode(l.event));
        });
        pl.appendChild(document.createTextNode(" ("));
        h("a", { href: BASE + "views/american-timeline/" }, pl, "details and sources");
        pl.appendChild(document.createTextNode(")"));
      }
      var nb = (data.notable || {})[yy];
      if (nb && nb.length) {
        var p2 = h("p", {}, panel); p2.appendChild(document.createTextNode("Read patents of the year: "));
        nb.forEach(function (x, i) {
          if (i) p2.appendChild(document.createTextNode("; "));
          h("a", { href: page("patents", x.id) }, p2, x.id);
          p2.appendChild(document.createTextNode(" " + (x.i ? x.i + ", " : "") + x.t));
        });
      }
    }

    sync(); render();
    var t; window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(render, 150); });
  }

  // ---------------------------------------------------------------- features chart
  function FeaturesChart(root, data) {
    var decades = []; for (var d = 1860; d <= 1950; d += 10) decades.push(d);
    var feats = data.features;
    function render() {
      root.innerHTML = "";
      var W = Math.max(root.clientWidth || 800, 320), left = W < 600 ? 120 : 210, right = 10, rowH = 22, top = 24;
      var H = top + feats.length * rowH + 8;
      var cw = (W - left - right) / decades.length;
      var maxShare = 0;
      feats.forEach(function (f) { for (var k in f.share) maxShare = Math.max(maxShare, f.share[k]); });
      var svg = el("svg", { width: W, height: H, viewBox: "0 0 " + W + " " + H, role: "img",
        "aria-label": "For each typewriter feature, the share of the library's patents per decade that deal with it, its first patent and the decade it became standard" }, root);
      decades.forEach(function (d, i) {
        var t = el("text", { x: left + i * cw + cw / 2, y: 14, "class": "tl-axis", "text-anchor": "middle" }, svg);
        t.textContent = (W < 600 && i % 2) ? "" : d + "s";
      });
      feats.forEach(function (f, r) {
        var y = top + r * rowH;
        var lab = el("text", { x: left - 8, y: y + rowH / 2 + 4, "class": "tl-row-label", "text-anchor": "end" }, svg);
        lab.textContent = f.name;
        // per feature, scaled to its own busiest decade so each row shows its own rise and fall
        var own = 0; for (var k in f.share) own = Math.max(own, f.share[k]);
        decades.forEach(function (d, i) {
          var s = f.share[d] || 0, n = (f.decades || {})[d] || 0;
          var cell = el("rect", { x: left + i * cw + 1, y: y + 2, width: cw - 2, height: rowH - 4, rx: 3,
            "class": "tl-cell", fill: s ? "var(--tl-q" + (n < 3 ? 1 : Math.max(1, Math.round(s / own * 6))) + ")" : "var(--tl-empty)" }, svg);  // 1–2 patents: lightest
          var htm = "<b>" + esc(f.name) + "</b>, " + d + "s<br>" + n + " patents (" + (s * 100).toFixed(1) + "% of the decade's patents here)";
          cell.addEventListener("mousemove", function (e) { showTip(e, htm); });
          cell.addEventListener("mouseleave", hideTip);
        });
        if (f.first) {
          var fx = left + (f.first.y - 1860) / 10 * cw;
          if (fx >= left) {
            var dm = el("path", { d: "M" + fx + " " + (y + rowH / 2 - 6) + "l6 6-6 6-6-6z", "class": "tl-diamond tl-first" }, svg);
            var t1 = "<b>" + esc(f.name) + "</b><br>First in the patents here: " + f.first.y + ", " + esc(f.first.id) + (f.first.inventor ? " (" + esc(f.first.inventor) + ")" : "");
            dm.addEventListener("mousemove", function (e) { showTip(e, t1); });
            dm.addEventListener("mouseleave", hideTip);
            dm.addEventListener("click", function () { location.href = page("patents", f.first.id); });
          }
        }
        if (f.machines && f.machines.standard) {
          var sx = left + (f.machines.standard - 1860) / 10 * cw + cw / 2;
          var ring = el("circle", { cx: sx, cy: y + rowH / 2, r: 5, "class": "tl-standard" }, svg);
          var t2 = "<b>" + esc(f.name) + "</b><br>Standard on new machines from the " + f.machines.standard + "s (" + esc(f.machines.rule) + ")";
          ring.addEventListener("mousemove", function (e) { showTip(e, t2); });
          ring.addEventListener("mouseleave", hideTip);
        }
      });
      var lg = h("div", { "class": "tl-features-legend" }, root);
      var k1 = h("span", { "class": "tl-key" }, lg); var sv1 = el("svg", { width: 14, height: 14 }, k1);
      el("path", { d: "M7 1l6 6-6 6-6-6z", "class": "tl-diamond" }, sv1); k1.appendChild(document.createTextNode("first patent here"));
      var k2 = h("span", { "class": "tl-key" }, lg); var sv2 = el("svg", { width: 14, height: 14 }, k2);
      el("circle", { cx: 7, cy: 7, r: 5, "class": "tl-standard" }, sv2); k2.appendChild(document.createTextNode("standard on new machines"));
      var k3 = h("span", { "class": "tl-key" }, lg); var ramp = h("span", { "class": "tl-ramp" }, k3);
      for (var q = 1; q <= 6; q++) { var sw = h("span", {}, ramp); sw.style.background = "var(--tl-q" + q + ")"; }
      k3.appendChild(document.createTextNode("share of the decade's patents dealing with it (each row scaled to its own peak; 1–2 patents lightest)"));
    }
    render();
    var t; window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(render, 150); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelector(".tl-browser"), f = document.querySelector(".tl-features");
    if (!b && !f) return;
    load(function (data) {
      if (b) Browser(b, data);
      if (f) FeaturesChart(f, data);
    });
  });
})();
