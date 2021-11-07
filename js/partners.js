const renderItems = (data) => {
    console.log(data);
}

fetch('https://test-9fd04-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })