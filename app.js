const tools = document.querySelector('[data-people-tools]');
if (tools) {
  tools.hidden = false;
  const search = document.querySelector('#people-search');
  const filter = document.querySelector('#people-filter');
  const cards = [...document.querySelectorAll('[data-person]')];
  const status = document.querySelector('#people-status');
  const empty = document.querySelector('#people-empty');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function updatePeople() {
    const query = normalize(search.value.trim());
    let visible = 0;
    for (const card of cards) {
      card.hidden = !(normalize(card.dataset.person).includes(query) && (filter.value === 'all' || card.dataset.evidence === filter.value));
      if (!card.hidden) visible++;
    }
    status.textContent = `${visible} van de ${cards.length} namen zichtbaar.`;
    empty.hidden = visible !== 0;
  }
  search.addEventListener('input', updatePeople);
  filter.addEventListener('change', updatePeople);
  updatePeople();
}
