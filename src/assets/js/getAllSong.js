async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/songs', {
            // method: 'GET',
            // headers: {
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*'
            cors: {
                origin: 'http://localhost:3000',
            },
        });

        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

async function displayData() {
    // const dataContainer = document.getElementById('data');
    // const data = await fetchData();
    console.log(data);

    // if (data) {
    //     data.forEach(song => {
    //         const listItem = document.createElement('li');
    //         listItem.textContent = song.title;
    //         dataContainer.appendChild(listItem);
    //     });
    // } else {
    //     dataContainer.textContent = 'Failed to fetch data.';
    // }
}

window.onload = displayData;