;(() => {
  'use strict'
  var e, t, n, s, o, l, i, c, r
  for (
    s = (e = document.getElementsByClassName('custom-select')).length, t = 0;
    t < s;
    t++
  ) {
    for (
      o = (l = e[t].getElementsByTagName('select')[0]).length,
        (i = document.createElement('DIV')).setAttribute(
          'class',
          'select-selected',
        ),
        i.innerHTML = l.options[l.selectedIndex].innerHTML,
        e[t].appendChild(i),
        (c = document.createElement('DIV')).setAttribute(
          'class',
          'select-items select-hide',
        ),
        n = 1;
      n < o;
      n++
    )
      ((r = document.createElement('DIV')).innerHTML = l.options[n].innerHTML),
        r.addEventListener('click', function (e) {
          var t, n, s, o, l, i, c
          for (
            i = (o = this.parentNode.parentNode.getElementsByTagName(
              'select',
            )[0]).length,
              l = this.parentNode.previousSibling,
              n = 0;
            n < i;
            n++
          )
            if (o.options[n].innerHTML == this.innerHTML) {
              for (
                o.selectedIndex = n,
                  l.innerHTML = this.innerHTML,
                  c = (t = this.parentNode.getElementsByClassName(
                    'same-as-selected',
                  )).length,
                  s = 0;
                s < c;
                s++
              )
                t[s].removeAttribute('class')
              this.setAttribute('class', 'same-as-selected')
              break
            }
          l.click()
        }),
        c.appendChild(r)
    e[t].appendChild(c),
      i.addEventListener('click', function (e) {
        e.stopPropagation(),
          d(this),
          this.nextSibling.classList.toggle('select-hide'),
          this.classList.toggle('select-arrow-active')
      })
  }
  function d(e) {
    var t,
      n,
      s,
      o,
      l,
      i = []
    for (
      t = document.getElementsByClassName('select-items'),
        n = document.getElementsByClassName('select-selected'),
        o = t.length,
        l = n.length,
        s = 0;
      s < l;
      s++
    )
      e == n[s] ? i.push(s) : n[s].classList.remove('select-arrow-active')
    for (s = 0; s < o; s++) i.indexOf(s) && t[s].classList.add('select-hide')
  }
  document.addEventListener('click', d)
  const a = document.querySelectorAll('._inim-items')
  if (a.length > 0) {
    function L() {
      for (let e = 0; e < a.length; e++) {
        const t = a[e],
          n = t.offsetHeight,
          s = w(t).top,
          o = 4
        let l = window.innerHeight - n / o
        n > window.innerHeight &&
          (l = window.innerHeight - window.innerHeight / o),
          pageYOffset > s - l && pageYOffset < s + n
            ? t.classList.add('loaded')
            : t.classList.contains('_inim-no-hide') ||
              t.classList.remove('loaded')
      }
    }
    function w(e) {
      const t = e.getBoundingClientRect(),
        n = window.pageXOffset || document.documentElement.scrollLeft,
        s = window.pageYOffset || document.documentElement.scrollTop
      return { top: t.top + s, left: t.left + n }
    }
    window.addEventListener('scroll', L),
      setTimeout(() => {
        L()
      }, 300)
  }
  !(function (e) {
    let t = new Image()
    ;(t.onload = t.onerror = function () {
      !(function (e) {
        let t = !0 === e ? 'webp' : 'no-webp'
        document.documentElement.classList.add(t)
      })(2 == t.height)
    }),
      (t.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA')
  })()
  const m = document.querySelector('.icon-menu')
  if (m) {
    const A = document.querySelector('.menu-body')
    m.addEventListener('click', function (e) {
      m.classList.toggle('menu-open'), A.classList.toggle('menu-open')
    })
  }
  const u = document.querySelectorAll('a[href*="#"]')
  for (let v of u)
    v.addEventListener('click', function (e) {
      e.preventDefault()
      const t = v.getAttribute('href').substr(1)
      m.classList.contains('_active') &&
        (m.classList.remove('_active'), menuBody.classList.remove('_active')),
        document
          .getElementById(t)
          .scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  let g = window.scrollY
  const f = document.querySelector('.header-home')
  window.addEventListener('scroll', function () {
    ;(g = window.scrollY),
      g >= 1 ? f.classList.add('scroll') : f.classList.remove('scroll')
  })
  let h = document.querySelector('.load-more'),
    p = 3
  h.onclick = () => {
    let e = [...document.querySelectorAll('.porfolio__body .box')]
    for (var t = p; t < p + 3; t++) e[t].style.display = 'inline-block'
    ;(p += 3), p >= e.length && (h.style.display = 'none')
  }
})()
