document.getElementById('genBtn').addEventListener('click', () => {
    const num = parseInt(document.getElementById('numInput').value);
    if (isNaN(num)) return;

    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    for (let i = 1; i <= 9; i++) {
        tbody.innerHTML += `<tr><td>${num} x ${i}</td><td>${num * i}</td></tr>`;
    }
    document.getElementById('tableWrapper').classList.remove('d-none');
});