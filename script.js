document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownBtn.addEventListener("click", function(event) {
        dropdownContent.classList.toggle("show");
        event.stopPropagation(); // Prevents event bubbling issues
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function(event) {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});
