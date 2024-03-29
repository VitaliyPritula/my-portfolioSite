(()=>{
    "use strict";
    var e, t, n, o, s, i, l, c, r;
    for (o = (e = document.getElementsByClassName("custom-select")).length,
    t = 0; t < o; t++) {
        for (s = (i = e[t].getElementsByTagName("select")[0]).length,
        (l = document.createElement("DIV")).setAttribute("class", "select-selected"),
        l.innerHTML = i.options[i.selectedIndex].innerHTML,
        e[t].appendChild(l),
        (c = document.createElement("DIV")).setAttribute("class", "select-items select-hide"),
        n = 1; n < s; n++)
            (r = document.createElement("DIV")).innerHTML = i.options[n].innerHTML,
            r.addEventListener("click", (function(e) {
                var t, n, o, s, i, l, c;
                for (l = (s = this.parentNode.parentNode.getElementsByTagName("select")[0]).length,
                i = this.parentNode.previousSibling,
                n = 0; n < l; n++)
                    if (s.options[n].innerHTML == this.innerHTML) {
                        for (s.selectedIndex = n,
                        i.innerHTML = this.innerHTML,
                        c = (t = this.parentNode.getElementsByClassName("same-as-selected")).length,
                        o = 0; o < c; o++)
                            t[o].removeAttribute("class");
                        this.setAttribute("class", "same-as-selected");
                        break
                    }
                i.click()
            }
            )),
            c.appendChild(r);
        e[t].appendChild(c),
        l.addEventListener("click", (function(e) {
            e.stopPropagation(),
            a(this),
            this.nextSibling.classList.toggle("select-hide"),
            this.classList.toggle("select-arrow-active")
        }
        ))
    }
    function a(e) {
        var t, n, o, s, i, l = [];
        for (t = document.getElementsByClassName("select-items"),
        n = document.getElementsByClassName("select-selected"),
        s = t.length,
        i = n.length,
        o = 0; o < i; o++)
            e == n[o] ? l.push(o) : n[o].classList.remove("select-arrow-active");
        for (o = 0; o < s; o++)
            l.indexOf(o) && t[o].classList.add("select-hide")
    }
    document.addEventListener("click", a);
    const d = document.querySelectorAll("._inim-items");
    if (d.length > 0) {
        function v() {
            for (let e = 0; e < d.length; e++) {
                const t = d[e]
                  , n = t.offsetHeight
                  , o = y(t).top
                  , s = 4;
                let i = window.innerHeight - n / s;
                n > window.innerHeight && (i = window.innerHeight - window.innerHeight / s),
                pageYOffset > o - i && pageYOffset < o + n ? t.classList.add("_active") : t.classList.contains("_inim-no-hide") || t.classList.remove("_active")
            }
        }
        function y(e) {
            const t = e.getBoundingClientRect()
              , n = window.pageXOffset || document.documentElement.scrollLeft
              , o = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: t.top + o,
                left: t.left + n
            }
        }
        window.addEventListener("scroll", v),
        setTimeout((()=>{
            v()
        }
        ), 300)
    }
    document.addEventListener("DOMContentLoaded", (function() {
        const e = document.getElementById("form");
        function t(e) {
            e.parentElement.classList.add("_error"),
            e.classList.add("_error")
        }
        function n(e) {
            e.parentElement.classList.remove("_error"),
            e.classList.remove("_error")
        }
        function o(e) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)
        }
        e.addEventListener("submit", (async function(s) {
            if (s.preventDefault(),
            0 === function(e) {
                let s = 0
                  , i = document.querySelectorAll("._req");
                for (let e = 0; e < i.length; e++) {
                    const l = i[e];
                    n(l),
                    l.classList.contains("_email") ? o(l) && (t(l),
                    s++) : ("checkbox" === l.getAttribute("type") && !1 === l.checked || "" === l.value) && (t(l),
                    s++)
                }
                return s
            }()) {
                e.classList.add("everythingok");
                let t = await fetch("../files/sendmail.php", {
                    method: "POST",
                    body: formData
                });
                if (t.ok) {
                    let n = await t.json();
                    alert(n.message),
                    formPreview.innerHTML = "",
                    e.reset(),
                    e.classList.remove("everythingok")
                } else
                    alert("Ошибка"),
                    e.classList.remove("everythingok")
            } else
                alert("Заколните обязательные поля")
        }
        ))
    }
    ));
    const m = document.querySelectorAll("._inim-items");
    if (m.length > 0) {
        function A() {
            for (let e = 0; e < m.length; e++) {
                const t = m[e]
                  , n = t.offsetHeight
                  , o = E(t).top
                  , s = 4;
                let i = window.innerHeight - n / s;
                n > window.innerHeight && (i = window.innerHeight - window.innerHeight / s),
                pageYOffset > o - i && pageYOffset < o + n ? t.classList.add("loaded") : t.classList.contains("_inim-no-hide") || t.classList.remove("loaded")
            }
        }
        function E(e) {
            const t = e.getBoundingClientRect()
              , n = window.pageXOffset || document.documentElement.scrollLeft
              , o = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: t.top + o,
                left: t.left + n
            }
        }
        window.addEventListener("scroll", A),
        setTimeout((()=>{
            A()
        }
        ), 300)
    }
    !function(e) {
        let t = new Image;
        t.onload = t.onerror = function() {
            !function(e) {
                let t = !0 === e ? "webp" : "no-webp";
                document.documentElement.classList.add(t)
            }(2 == t.height)
        }
        ,
        t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }();
    const u = document.querySelector(".icon-menu");
    if (u) {
        const b = document.querySelector(".menu-body");
        u.addEventListener("click", (function(e) {
            document.body.classList.toggle("lock"),
            u.classList.toggle("menu-open"),
            b.classList.toggle("menu-open")
        }
        ))
    }
    const f = document.querySelectorAll('a[href*="#"]');
    for (let k of f)
        k.addEventListener("click", (function(e) {
            e.preventDefault();
            const t = k.getAttribute("href").substr(1);
            u.classList.contains("_active") && (u.classList.remove("_active"),
            menuBody.classList.remove("_active")),
            document.getElementById(t).scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
        ));
    let g = document.querySelectorAll("*[data-modal-btn]");
    for (let _ = 0; _ < g.length; _++)
        g[_].addEventListener("click", (function() {
            let e = g[_].getAttribute("data-modal-btn")
              , t = document.querySelector("[data-modal-window='" + e + "']");
            t.classList.toggle("_active"),
            t.querySelector(".pop-up__close").addEventListener("click", (function(e) {
                t.classList.remove("_active")
            }
            ))
        }
        ));
    window.onclick = function(e) {
        if (e.target.hasAttribute("data-modal-window")) {
            let e = document.querySelectorAll("*[data-modal-window]");
            for (let t = 0; t < e.length; t++)
                e[t].classList.remove("_active")
        }
    }
    ;
    let h = window.scrollY;
    const w = document.querySelector(".header-home");
    window.addEventListener("scroll", (function() {
        h = window.scrollY,
        h >= 1 ? w.classList.add("scroll") : w.classList.remove("scroll")
    }
    ));
    let L = document.querySelector(".load-more")
      , p = 3;
    L.onclick = ()=>{
        let e = [...document.querySelectorAll(".porfolio__body .box")];
        for (var t = p; t < p + 3; t++)
            e[t].style.display = "inline-block";
        p += 3,
        p >= e.length && (L.style.display = "none")
    }
}
)();
