export const scroller = {
    bind: (el, binding) => {
            el.classList.add('before-enter')

            const scrollObserver = new IntersectionObserver((entries) => {
                const order = binding.value
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.style.transitionDelay = `${order * 0.25}s` //el = entry.target
                        el.classList.add('enter')
                    } else {
                        el.style.transitionDelay = "0s"
                        el.classList.remove('enter')
                    }
                })
            }, {threshold: 0.1, rootMargin: '10px'})

            scrollObserver.observe(el)
        }
    }

