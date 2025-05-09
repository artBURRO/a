document.getElementById('search').addEventListener('keyup', async function(e) {
    if (e.key === 'Enter' || e.key === 'Enter') { // Garantir que ao apertar "Enter" a busca é feita
        const query = e.target.value.toLowerCase();
        const info = document.getElementById('pokemon-info');
        info.innerHTML = 'Loading...';

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            if (!res.ok) throw new Error('Not found');
            const data = await res.json();

            const types = data.types.map(t => t.type.name).join(', ');
            const stats = data.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join('<br>');

            info.innerHTML = `
                <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Type:</strong> ${types}</p>
                <p><strong>Height:</strong> ${data.height / 10} m</p>
                <p><strong>Weight:</strong> ${data.weight / 10} kg</p>
                <p><strong>Stats:</strong><br>${stats}</p>
            `;
        } catch (err) {
            info.innerHTML = '<p>Pokémon not found. Try again!</p>';
        }
    }
});
