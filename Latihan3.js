<script>
    // Fungsi untuk mengubah tema
    function ubahTema(event) {
        const isDarkMode = event.target.checked;
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.querySelector('.tulisan').classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Memuat tema saat halaman dimuat
    document.addEventListener('DOMContentLoaded', () => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.body.classList.add('dark-mode');
            document.querySelector('.tulisan').classList.add('dark-mode');
            document.querySelector('.switch input').checked = true;
        }
    });
</script>