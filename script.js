// ===== Expansão das experiências profissionais =====
const toggleExperiences = document.getElementById('toggle-experiences');
const professionalTimeline = document.getElementById('professional-timeline');
const trafficExperience = document.querySelector('.traffic-experience');
const trafficToggle = document.querySelector('.traffic-toggle');

if (trafficToggle && trafficExperience) {
    trafficToggle.addEventListener('click', (event) => {
        event.stopPropagation();

        const isCollapsed = trafficExperience.classList.toggle('is-collapsed');
        trafficToggle.setAttribute('aria-expanded', String(!isCollapsed));
        trafficToggle.textContent = isCollapsed
            ? 'Ver detalhes'
            : 'Diminuir detalhes';
    });
}

if (toggleExperiences && professionalTimeline) {
    toggleExperiences.addEventListener('click', () => {
        const showOlder = professionalTimeline.classList.toggle('show-older');

        toggleExperiences.setAttribute('aria-expanded', String(showOlder));
        toggleExperiences.textContent = showOlder
            ? 'Ocultar experiências anteriores'
            : 'Ver experiências anteriores';
    });
}

const familyPhotoSlots = [1, 2].map((slotNumber) => ({
    preview: document.getElementById(`family-photo-preview-${slotNumber}`),
    placeholder: document.getElementById(`family-photo-placeholder-${slotNumber}`)
}));

familyPhotoSlots.forEach(({ preview, placeholder }) => {
    if (!preview || !placeholder) return;

    preview.addEventListener('load', () => {
        preview.hidden = false;
        placeholder.hidden = true;
    });

    preview.addEventListener('error', () => {
        preview.hidden = true;
        placeholder.hidden = false;
    });

});
