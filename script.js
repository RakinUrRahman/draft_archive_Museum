// Example search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.querySelector('.search-box input').value;
    if(query) {
        alert('Searching for: ' + query);
        // Here you can connect to a real search API
    } else {
        alert('Please enter a search query');
    }
});
