const faqs = document.querySelectorAll(".accordion ");

function showpanel () {
    this.classList.toggle("active");
}

faqs.forEach(faq => faq.addEventListener("click", showpanel));
