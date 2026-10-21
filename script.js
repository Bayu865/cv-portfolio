
/* ========================================
   1. MENYIAPKAN ELEMEN WEBSITE
======================================== */

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    const themeToggle = document.getElementById("theme-toggle");
    const printButton = document.getElementById("print-cv");

    /* ========================================
       2. MENU NAVIGASI MOBILE
    ======================================== */

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.textContent = isOpen
                ? "✕ Tutup Menu"
                : "☰ Menu";
        });

        // Tutup menu setelah salah satu tautan dipilih
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰ Menu";
            });
        });
    }

    /* ========================================
       3. DARK MODE
    ======================================== */

    if (themeToggle) {
        // Memuat tema terakhir yang disimpan browser
        const savedTheme = localStorage.getItem("cv-theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
        }

        // Menyesuaikan tulisan tombol dengan tema aktif
        function updateThemeButton() {
            const isDarkMode =
                document.body.classList.contains("dark-mode");

            themeToggle.textContent = isDarkMode
                ? "☀️ Mode Terang"
                : "🌙 Mode Gelap";

            themeToggle.setAttribute(
                "aria-pressed",
                String(isDarkMode)
            );
        }

        updateThemeButton();

        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const isDarkMode =
                document.body.classList.contains("dark-mode");

            // Menyimpan pilihan tema
            localStorage.setItem(
                "cv-theme",
                isDarkMode ? "dark" : "light"
            );

            updateThemeButton();
        });
    }

    /* ========================================
       4. CETAK / SIMPAN SEBAGAI PDF
    ======================================== */

    if (printButton) {
        printButton.addEventListener("click", function () {
            window.print();
        });
    }
});
