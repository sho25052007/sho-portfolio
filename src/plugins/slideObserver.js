export const slider = {
    bind: (el) => {
            const slideObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        el.classList.add('slide')
                    } else {
                        el.classList.remove('slide')
                    }
                })
            }, {rootMargin: '20px'})

            // const observingElement = binding.value
            // console.log(typeof(observingElement))
            slideObserver.observe(el)
        }
    }




