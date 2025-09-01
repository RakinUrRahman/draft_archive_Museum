const galleryBtn = document.getElementById('galleryBtn');
const timelineBtn = document.getElementById('timelineBtn');
const galleryView = document.getElementById('galleryView');
const timelineView = document.getElementById('timelineView');

galleryBtn.addEventListener('click', () => {
    galleryView.classList.remove('hidden');
    timelineView.classList.add('hidden');
    galleryBtn.classList.add('active');
    timelineBtn.classList.remove('active');
});

timelineBtn.addEventListener('click', () => {
    galleryView.classList.add('hidden');
    timelineView.classList.remove('hidden');
    timelineBtn.classList.add('active');
    galleryBtn.classList.remove('active');
});
