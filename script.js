document.getElementById('selengkapnya').addEventListener('click', function() {
    const moreInfo = document.querySelector('.more-info');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = "Baca Lebih Sedikit";
    } else {
        moreInfo.classList.add('hidden');
        this.textContent = "Baca Lebih Lengkap";
    }
});

