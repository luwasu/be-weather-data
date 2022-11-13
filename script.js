async function getMeteoData() {
    const url = 'https://data.geo.admin.ch/ch.meteoschweiz.messwerte-niederschlag-1d/ch.meteoschweiz.messwerte-niederschlag-1d_de.json';
    const response = await fetch(url);

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        console.log("Successfully got data!")
        let jsonData = await response.json();

        jsonData.features.forEach(item => {
            if (item.id === 'BER') {
                return console.log(item);
            }
        })
    }
    return console.log('Something went wrong while making an API call')
}

















