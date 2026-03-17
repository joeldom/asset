! function(e, n, t, o) {
    function a() {
        r(), o.addEventListener("resize", e.throttle(r, 200))
    }

    function i() {
        var e = t.getElementsByClassName("about-services")[0];
        if (c = [].slice.call(t.getElementsByClassName("about-service")), e && c.length) {
            l = new n.Controller;
            var o = new TimelineMax;
            c.forEach(function(e, n) {
                n > 0 && o.fromTo(e, 1, {
                    y: "100%"
                }, {
                    y: "0%"
                })
            });
            new n.Scene({
                triggerElement: e,
                triggerHook: "onLeave",
                duration: 100 * c.length + "%"
            }).setPin(e).setTween(o).addTo(l)
        }
    }

    function s() {
        l = l.destroy(!0), c.forEach(function(e) {
            e.style.transform = ""
        })
    }

    function r() {
        var e = o.matchMedia("(min-width: 60em)").matches;
        e && l || !e && !l || (e ? i() : s())
    }
    var l, c = [];
    t.addEventListener("DOMContentLoaded", a)
}(_, ScrollMagic, document, window),
function(e, n, t) {
    function o(e) {
        return Math.min(Math.max(e, r), l)
    }

    function a() {
        i(), t.addEventListener("resize", e.throttle(i, 200))
    }

    function i() {
        s !== o(t.innerWidth) && (s = o(t.innerWidth), n.body.style.fontSize = s / r * 100 + "%")
    }
    var s, r = 1600,
        l = 3200;
    n.addEventListener("DOMContentLoaded", a)
}(_, document, window),
function(e, n, t, o) {
    function a() {
        var e = t.getElementsByClassName("careers-locations")[0],
            n = o.matchMedia("(hover: none), (hover: on-demand)").matches;
        e && !n && s()
    }

    function i() {
        var e = [].slice.call(t.getElementsByClassName("careers-location"));
        e.length && (r = new n.Controller({
            globalSceneOptions: {
                duration: "200%",
                triggerHook: "onEnter"
            }
        }), e.forEach(function(e) {
            var t = e.getElementsByClassName("careers-location__text")[0],
                o = TweenMax.fromTo(t, 1, {
                    y: "100%"
                }, {
                    y: "0%"
                }),
                a = {
                    triggerElement: e
                };
            r.addScene(new n.Scene(a).setTween(o))
        }))
    }

    function s() {
        r || i()
    }
    var r;
    t.addEventListener("DOMContentLoaded", a)
}(_, ScrollMagic, document, window),
function(e, n) {
    function t() {
        var n = [].slice.call(e.getElementsByClassName("clipboard"));
        n.length && n.forEach(function(e) {
            e.addEventListener("submit", r)
        })
    }

    function o(n) {
        var t = n.getElementsByClassName("clipboard__message")[0];
        return "undefined" == typeof t && (t = e.createElement("p"), t.classList.add("clipboard__message"), n.appendChild(t)), t
    }

    function a(e) {
        e.classList.remove("clipboard__message--visible")
    }

    function i(e) {
        e.classList.add("clipboard__message--visible")
    }

    function s(n) {
        var t;
        n.select();
        try {
            t = e.execCommand("copy")
        } catch (e) {
            t = !1
        }
        return t
    }

    function r(e) {
        e.preventDefault();
        var n = e.target,
            t = n.getElementsByTagName("input")[0],
            r = o(n),
            l = s(t);
        a(r), l ? (t.blur(), r.innerHTML = "Copied.", i(r), setTimeout(function() {
            a(r)
        }, 3e3)) : (t.addEventListener("blur", function() {
            a(r)
        }), r.innerHTML = "Press Ctrl+C (or Cmd+C) to copy.", i(r))
    }
    e.addEventListener("DOMContentLoaded", t)
}(document, window),
function(e, n) {
    function t() {
        var n = e.getElementsByClassName("guides-toggle")[0];
        n && n.addEventListener("click", o)
    }

    function o(n) {
        n.preventDefault();
        var t = e.getElementsByClassName("guides")[0];
        t && t.classList.toggle("guides--visible")
    }
    e.addEventListener("DOMContentLoaded", t)
}(document, window),
function(e, n) {
    function t() {
        a = e.body;
        var n = e.getElementsByClassName("header__menu-toggle")[0];
        n && n.addEventListener("click", o)
    }

    function o(t) {
        t.preventDefault();
        var o = e.getElementsByClassName("header")[0];
        o && o.classList.toggle("header--menu-visible");
        var i, s = o.classList.contains("header--menu-visible");
        s ? (i = a.getBoundingClientRect().top + "px", a.style.top = i, a.style.position = "fixed") : (i = Math.abs(parseInt(a.style.top, 10)), a.style.top = "", a.style.position = "", n.scrollTo(0, i))
    }
    var a;
    e.addEventListener("DOMContentLoaded", t)
}(document, window),
function(e, n, t) {
    function o() {
        i = n.getElementsByClassName("header--overlay")[0];
        var o = n.body.classList.contains("error");
        i && !o && (t.addEventListener("resize", e.throttle(a, 200)), t.addEventListener("scroll", e.throttle(a, 200)), a())
    }

    function a() {
        var e = t.scrollY || t.pageYOffset,
            n = i.getBoundingClientRect().height,
            o = i.classList.contains("header--menu-visible");
        e > n || o ? i.classList.add("header--fill") : i.classList.remove("header--fill")
    }
    var i;
    n.addEventListener("DOMContentLoaded", o)
}(_, document, window),
function(e, n, t, o) {
    function a() {
        var e = t.getElementsByClassName("home-approach")[0],
            n = o.matchMedia("(hover: none), (hover: on-demand)").matches;
        e && !n && r()
    }

    function i() {
        var e = [].slice.call(t.getElementsByClassName("home-approach-item"));
        e.length && (l = new n.Controller({
            globalSceneOptions: {
                duration: "200%",
                triggerHook: "onEnter"
            }
        }), e.forEach(function(e) {
            var t = e.getElementsByClassName("home-approach-item__text")[0],
                o = TweenMax.fromTo(t, 1, {
                    y: "100%"
                }, {
                    y: "0%"
                }),
                a = {
                    triggerElement: e
                };
            l.addScene(new n.Scene(a).setTween(o))
        }))
    }

    function s() {
        var e = [].slice.call(t.getElementsByClassName("home-approach__content"));
        e.length && (c = new n.Controller({
            globalSceneOptions: {
                duration: "100%",
                triggerHook: "onEnter"
            }
        }), e.forEach(function(e) {
            var t = TweenMax.fromTo(e, 1, {
                    y: "2%"
                }, {
                    y: "0%"
                }),
                o = {
                    triggerElement: e
                };
            c.addScene(new n.Scene(o).setTween(t))
        }))
    }

    function r() {
        l || i(), c || s()
    }
    var l, c;
    t.addEventListener("DOMContentLoaded", a)
}(_, ScrollMagic, document, window),
function(e, n, t) {
    function o() {
        e(s.join(", ")).on("enter", a).on("exit", i)
    }

    function a(e) {
        e.classList.add("in-view", "has-viewed")
    }

    function i(e) {
        e.classList.remove("in-view")
    }
    var s = [".home-summary__list .content-item", ".home-summary__buttons"];
    n.addEventListener("DOMContentLoaded", o)
}(inView, document, window),
function(e, n, t, o) {
    function a() {
        i.forEach(function(o) {
            var a = [].slice.call(t.getElementsByClassName(o.className));
            a.length && a.forEach(function(t) {
                var a = new n(t, o.options),
                    i = e(t);
                i.on("progress", function() {
                    a.layout()
                })
            })
        })
    }
    var i = [{
        className: "leadership__grid",
        options: {
            itemSelector: "article",
            columnWidth: ".masonry-column",
            percentPosition: !0
        }
    }, {
        className: "news__grid",
        options: {
            itemSelector: ".abstract",
            columnWidth: ".masonry-column",
            percentPosition: !0
        }
    }, {
        className: "updates__grid",
        options: {
            itemSelector: ".abstract",
            columnWidth: ".masonry-column",
            percentPosition: !0
        }
    }];
    t.addEventListener("DOMContentLoaded", a)
}(imagesLoaded, Masonry, document, window),
function(e, n, t) {
    function o() {
        e("video[loop][muted]").on("enter", a).on("exit", i)
    }

    function a(e) {
        e.play()
    }

    function i(e) {
        e.pause()
    }
    n.addEventListener("DOMContentLoaded", o)
}(inView, document, window),
function(e, n, t, o) {
    function a() {
        r = t.body, e(t).on("click", "[data-video-id]", s), e(t).on("click", ".video-overlay__close, .video-overlay__mask", i)
    }

    function i(e) {
        e && "click" === e.type && e.preventDefault(), l.pause(), setTimeout(function() {
            l.unload()
        }, 400), d.classList.remove("video-overlay--visible");
        var n = Math.abs(parseInt(r.style.top, 10));
        r.style.top = "", r.style.position = "", o.scrollTo(0, n), c = ""
    }

    function s(e) {
        e.preventDefault(), u.id = e.currentTarget.dataset.videoId, "undefined" == typeof l ? (l = new n.Player(m, u), l.on("ended", i), l.play()) : l.loadVideo(u.id).then(function() {
            l.play(), l.setColor(u.color)
        }).catch(function(e) {}), c = e.currentTarget.dataset.videoType, "hero" === c ? d.classList.add("video-overlay--hero") : d.classList.remove("video-overlay--hero"), d.classList.add("video-overlay--visible");
        var t = r.getBoundingClientRect().top + "px";
        r.style.top = t, r.style.position = "fixed"
    }
    var r, l, c, d = t.getElementById("video-overlay"),
        m = d && d.getElementsByClassName("video-overlay__media")[0],
        u = {
            color: "0048ff",
            height: 1080,
            width: 1920
        };
    e(function() {
        a()
    })
}(jQuery, Vimeo, document, window),
function(e, n, t, o) {
    function a() {
        var e = t.getElementsByClassName("work-projects")[0],
            n = o.matchMedia("(hover: none), (hover: on-demand)").matches;
        e && !n && s()
    }

    function i() {
        var e = [].slice.call(t.getElementsByClassName("project-item"));
        e.length && (r = new n.Controller({
            globalSceneOptions: {
                duration: "200%",
                triggerHook: "onEnter"
            }
        }), e.forEach(function(e) {
            var t = e.getElementsByClassName("project-item__text")[0],
                o = TweenMax.fromTo(t, 1, {
                    y: "50%"
                }, {
                    y: "0%"
                }),
                a = {
                    triggerElement: e
                };
            r.addScene(new n.Scene(a).setTween(o))
        }))
    }

    function s() {
        r || i()
    }
    var r;
    t.addEventListener("DOMContentLoaded", a)
}(_, ScrollMagic, document, window);
