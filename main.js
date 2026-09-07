(function () {
    "use strict";

    var filters = document.querySelectorAll(".filter");
    var projects = document.querySelectorAll(".project");
    var navLinks = document.querySelectorAll(".top-navigation a");
    var themeToggle = document.querySelector(".theme-toggle");

    filters.forEach(function (button) {
        button.addEventListener("click", function () {
            var filter = button.getAttribute("data-filter");

            filters.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            projects.forEach(function (project) {
                var category = project.getAttribute("data-category");
                project.hidden = filter !== "all" && category !== filter;
            });
        });
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    if (localStorage.getItem("portfolio-theme") === "dark") {
        document.body.classList.add("dark");
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        localStorage.setItem(
            "portfolio-theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
    });
}());
