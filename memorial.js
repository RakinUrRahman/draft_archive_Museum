// script.js
document.addEventListener('DOMContentLoaded', () => {
    const memorialList = document.getElementById('memorial-list');

    const memorials = [
        {
            name: 'George L. Abbott',
            image: 'https://www.navysealmuseum.org/sites/default/files/styles/large/public/2021-05/George%20L.%20Abbott.jpg',
            branch: 'USN',
            rank: 'BM1c',
            unit: 'Scouts & Raiders',
            station: '6th Naval Beach Battalion',
            fallen: '06 Jun 1944',
            location: 'Omaha/Normandy',
            era: 'WWII',
            campaign: 'D-Day Invasion',
            medals: 'Purple Heart',
            hometown: 'Unknown'
        },
        {
            name: 'Glenn Curtis “Sea Cow” Acker',
            image: 'https://www.navysealmuseum.org/sites/default/files/styles/large/public/2021-05/Glenn%20Curtis%20Acker.jpg',
            branch: 'USN',
            rank: 'SN, BM1',
            unit: 'ST-1, NSWU-1',
            station: 'US Naval Facility Subic Bay, Philippines',
            fallen: '05 Sep 1987',
            location: 'Subic Bay, Philippines',
            era: 'Cold War',
            campaign: 'Training',
            medals: 'N/A',
            hometown: 'Pasadena, CA'
        }
        // Add more memorials as needed
    ];

    memorials.forEach(memorial => {
        const entry = document.createElement('div');
        entry.classList.add('memorial-entry');

        entry.innerHTML = `
            <img src="${memorial.image}" alt="${memorial.name}">
            <div class="memorial-details">
                <h3>${memorial.name}</h3>
                <p><strong>Branch:</strong> ${memorial.branch}</p>
                <p><strong>Rank:</strong> ${memorial.rank}</p>
                <p><strong>Unit:</strong> ${memorial.unit}</p>
                <p><strong>Station:</strong> ${memorial.station}</p>
                <p><strong>Fallen:</strong> ${memorial.fallen}</p>
                <p><strong>Location:</strong> ${memorial.location}</p>
                <p><strong>Era:</strong> ${memorial.era}</p>
                <p><strong>Campaign:</strong> ${memorial.campaign}</p>
                <p><strong>Medals:</strong> ${memorial.medals}</p>
                <p><strong>Hometown:</strong> ${memorial.hometown}</p>
            </div>
        `;

        memorialList.appendChild(entry);
    });
});
