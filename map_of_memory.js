// Initialize map centered on Bangladesh
var map = L.map('map').setView([23.6850, 90.3563], 7);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// All 11 Sector HQs (example coordinates & details)
var sectors = [
    {name:"Sector 1 HQ", coords:[26.0, 88.0], commander:"Major Ziaur Rahman", year:"1971", description:"Sector 1 covered the Rangpur region."},
    {name:"Sector 2 HQ", coords:[24.1500, 91.0000], commander:"Major Khaled Mosharraf", year:"1971", description:"Sector 2 covered Dhaka and surrounding areas."},
    {name:"Sector 3 HQ", coords:[24.0, 90.5], commander:"Major A. N. M. Nuruzzaman", year:"1971", description:"Sector 3 covered Comilla region."},
    {name:"Sector 4 HQ", coords:[23.0, 90.0], commander:"Major Mir Shawkat Ali", year:"1971", description:"Sector 4 covered Jessore and Khulna."},
    {name:"Sector 5 HQ", coords:[23.5, 91.5], commander:"Major C. R. Dutta", year:"1971", description:"Sector 5 covered Barisal and Patuakhali."},
    {name:"Sector 6 HQ", coords:[22.5, 91.8], commander:"Major Abdul Halim", year:"1971", description:"Sector 6 covered Chittagong region."},
    {name:"Sector 7 HQ", coords:[22.0, 92.0], commander:"Major Shafaat Jamil", year:"1971", description:"Sector 7 covered Sylhet and Mymensingh."},
    {name:"Sector 8 HQ", coords:[23.0, 89.5], commander:"Major Abu Osman Chowdhury", year:"1971", description:"Sector 8 covered Khulna and Jessore border areas."},
    {name:"Sector 9 HQ", coords:[25.0, 89.5], commander:"Major M. A. G. Osmani", year:"1971", description:"Sector 9 covered Dinajpur and Thakurgaon."},
    {name:"Sector 10 HQ", coords:[24.5, 90.0], commander:"Major Mir Shawkat Ali", year:"1971", description:"Sector 10 covered Bogura and Rajshahi."},
    {name:"Sector 11 HQ", coords:[23.8, 90.3], commander:"Major Khaled Mosharraf", year:"1971", description:"Sector 11 covered Dhaka city and suburbs."},
];

// Add sector markers with stylish popups
sectors.forEach(sector => {
    var popupContent = `
        <div class="popup-card">
            <h3>${sector.name}</h3>
            <p><strong>Commander:</strong> ${sector.commander}</p>
            <p><strong>Year:</strong> ${sector.year}</p>
            <p>${sector.description}</p>
        </div>
    `;
    L.marker(sector.coords).addTo(map).bindPopup(popupContent);
});
