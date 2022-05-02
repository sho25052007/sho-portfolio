export const indenter = {
    bind: (el, binding) => {

        const indentObserver = new IntersectionObserver((entries) => {
            const order = binding.value
            entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        el.style.transitionDelay = `${order * 0.8}s`
                        el.classList.add('indent')
                    } else {
                        el.style.transitionDelay = "0s"
                        el.classList.remove('indent')
                    }
                })
            }, {rootMargin: '20px'})

            indentObserver.observe(el)
        }
    }

