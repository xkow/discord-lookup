async function copyAllDataToClipboard() {
    const userId = document.getElementById('userIdInput').value;
    const apiUrl = `https://discordlookup.mesavirep.xyz/v1/user/${userId}`;

    try {
        const response = await fetch(apiUrl);
        const userData = await response.json();
        const userDataString = JSON.stringify(userData, null, 4);

        navigator.clipboard.writeText(userDataString)
            .then(() => {
                alert('All data copied to clipboard!');
            })
            .catch(err => {
                console.error('Error copying data to clipboard:', err);
            });
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}


function updateCopyButtonVisibility() {
    const userIdInput = document.getElementById('userIdInput');
    const copyAllDataButton = document.getElementById('copyAllDataButton');

    if (userIdInput.value) {
        copyAllDataButton.classList.add('show');
    } else {
        copyAllDataButton.classList.remove('show');
    }
}


