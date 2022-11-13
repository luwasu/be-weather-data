async function getMeteoData() {
    const url = 'https://data.geo.admin.ch/ch.meteoschweiz.messwerte-niederschlag-1d/ch.meteoschweiz.messwerte-niederschlag-1d_de.json';
    const response = await fetch(url);

    // output status and satus text to the console
    console.log(response.status); // 200 or 404
    console.log(response.statusText); // OK or Not Found

    // if the response status is not 200 then return this
    if (response.status === 200) {
        console.log("Successfully got data!")
        // resolve response as a JSON. Can also be text by replacing ".json" with ".text" 
        let jsonData = await response.json();
        
        // iterate over the JSON response for an ID with 'BER'
        jsonData.features.forEach(item => {
            if (item.id === 'BER') {
                return console.log(item);
            }
        })
    }
    // if the response status is not 200 then return this
    return console.log('Something went wrong while making an API call')
}

















