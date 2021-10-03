
window.onload = function () {
    sal();

    let observer = null;
    const intersectionObserver = (callBack) => {
        if (observer) return;
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                callBack(entry)
            });
        }, {
            rootMargin: "0px", threshold: .4
        })
    }
    const sections = document.querySelectorAll("section");

    intersectionObserver((entry) => {

        if (entry.isIntersecting) {
            const activeLink = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
            activeLink?.classList?.add("active");

            document.querySelectorAll(`.nav__link:not([href="#${entry.target.id}"])`)
                .forEach(link => {
                    link.classList.remove("active");
                });
        }
    })
    // console.log(navLinks[0].innerText.toLowerCase())
    sections.forEach(section => {
        observer.observe(section);
    });
}
