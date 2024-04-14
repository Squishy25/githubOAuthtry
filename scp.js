function searchUsers() {
    var username = document.getElementById('usernameInput').value.trim();

    if (username === '') {
        alert('Please enter a GitHub username.');
        return;
    }

    fetch(`https://api.github.com/search/users?q=${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displaySearchResults(data.items))
        .catch(error => console.error('Error searching users:', error));
}

function displaySearchResults(users) {
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    if (users.length === 0) {
        searchResultsContainer.innerHTML = '<p>No users found.</p>';
        return;
    }

    var userList = document.createElement('ul');
    users.forEach(user => {
        var listItem = document.createElement('li');
        var userLink = document.createElement('a');
        userLink.href = user.html_url;
        userLink.textContent = user.login;
        userLink.target = '_blank';
        listItem.appendChild(userLink);
        userList.appendChild(listItem);
    });
    searchResultsContainer.appendChild(userList);
}
