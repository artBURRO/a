async function searchPokemon() {
    const query = document.getElementById('search').value.toLowerCase();
    const info = document.getElementById('pokemon-info');
    if (query === '') {
        info.innerHTML = '';
        return;
    }

    info.innerHTML = 'Loading...';

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!res.ok) throw new Error('Pokémon não encontrado');
        const data = await res.json();

        const types = data.types.map(t => t.type.name).join(', ');
        const stats = data.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join('<br>');

        info.innerHTML = `
            <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Tipo:</strong> ${types}</p>
            <p><strong>Altura:</strong> ${data.height / 10} m</p>
            <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
            <h3>Stats:</h3>
            <p>${stats}</p>
        `;
    } catch (err) {
        info.innerHTML = '<p>Pokémon não encontrado. Tente novamente!</p>';
    }
}
