function loginWithGitHub() {
    var clientID = '874bc1cc58cc2074d225';
    var redirectURI = 'https://squishy25.github.io/githubOAuthtry/redirect.html';
    var githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=user`;

    window.open(githubAuthURL, '_self');
}

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var code = urlParams.get('code');

    if (code) {
        document.getElementById('status').innerText = 'Successfully authenticated with GitHub!';
    }
};
