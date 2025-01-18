document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tablink');
    const contents = document.querySelectorAll('.content');

    function activateTab(tab) {
        // Find the corresponding tab content by matching the tab's data-tab with the id
        const activeTab = tab.getAttribute('data-tab');
        contents.forEach(content => {
            content.classList.remove('active');
            if (content.id === activeTab) {
                content.classList.add('active');
            }
        });

        // Update tab activation
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            activateTab(tab);
        });
    });

    // Activate the first tab by default
    activateTab(tabs[0]);
});




