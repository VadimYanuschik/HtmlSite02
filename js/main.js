const scrollDowns = gsap.utils.toArray(".scroll-down")

scrollDowns.forEach((scroll) => {
    gsap.from(scroll, {
        opacity: 0,
        y: -70,
        duration: 1.5,
        scrollTrigger: {
            trigger: scroll,
            opacity: 1,
            y: 70,
        },
    })
})

gsap.from(".showLeft", {
    opacity: 0,
    xPercent: -100,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".showLeft",
        opacity: 1,
        xPercent: 0,
    },
})

gsap.from(".showRight", {
    opacity: 0,
    xPercent: 100,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".showRight",
        opacity: 1,
        xPercent: 0,
    },
})

gsap.from(".showTop", {
    opacity: 0,
    yPercent: -100,
    duration: 1.5,
    scrollTrigger: {
        trigger: [".showTop", ".showBottom"],
        opacity: 1,
        yPercent: 0,
    },
})

gsap.from(
    ".showBottom",
    { opacity: 0, yPercent: 100, duration: 1.5 },
    { opacity: 1, yPercent: 0 }
)

gsap.fromTo(
    ".top-down",
    { opacity: 0, y: -70 },
    { opacity: 1, y: 0, duration: 0.5 }
)
gsap.fromTo(".fromRight", { opacity: 0 }, { opacity: 1, duration: 1 })

