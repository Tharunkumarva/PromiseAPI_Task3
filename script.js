document.addEventListener('DOMContentLoaded', function () {
    const seafoodContent = document.getElementById('seafoodContent');

    // Function to fetch content from the NOAA page
    function fetchSeafoodContent() {
        fetch('https://www.fisheries.noaa.gov/topic/sustainable-seafood')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            displaySeafoodContent(html);
        })
        .catch(error => {
            console.error('Error fetching seafood content:', error);
        });
    }

    // Function to display content
    function displaySeafoodContent(html) {
        seafoodContent.innerHTML = html;
    }

    // Fetch seafood content when the page is loaded
    fetchSeafoodContent();
});
