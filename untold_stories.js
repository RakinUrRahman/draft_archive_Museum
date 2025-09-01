const stories = [
    {
        title: "Freedom Fighter A",
        text: "During the Liberation War, Freedom Fighter A risked everything to protect innocent lives. With unwavering courage, he/she led a small group to rescue villagers from enemy attacks, often moving through dangerous terrain at night. Their heroic deeds became a symbol of hope and resistance."
    },
    {
        title: "Freedom Fighter B",
        text: "Freedom Fighter B worked behind the scenes, gathering crucial information about enemy movements. Risking capture, he/she relayed messages between rebel groups and coordinated supply lines, turning the tide in key battles."
    },
    {
        title: "Freedom Fighter C",
        text: "Freedom Fighter C started as a young student who joined the liberation movement. From organizing local resistance to assisting wounded soldiers, every action showcased immense bravery and inspired others to fight for independence."
    }
];

let utterance; // global TTS variable

function openStory(index) {
    const story = stories[index];
    document.getElementById('storyTitle').innerText = story.title;
    document.getElementById('storyText').innerText = story.text;

    // Stop previous speech
    if (utterance) speechSynthesis.cancel();

    // Create new utterance
    utterance = new SpeechSynthesisUtterance(story.text);
    utterance.rate = 1;      // speed (0.1 - 10)
    utterance.pitch = 1;     // pitch (0 - 2)
    utterance.lang = 'en-US';

    speechSynthesis.speak(utterance); // start TTS

    document.getElementById('storyModal').style.display = 'flex';
}

function closeStory() {
    document.getElementById('storyModal').style.display = 'none';
    speechSynthesis.cancel(); // stop TTS
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById('storyModal');
    if (event.target === modal) {
        closeStory();
    }
};
