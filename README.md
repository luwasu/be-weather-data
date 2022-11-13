# be-weather-data

The function makes a call to 'https://data.geo.admin.ch/ch.meteoschweiz.messwerte-niederschlag-1d/ch.meteoschweiz.messwerte-niederschlag-1d_de.json' and response should be a JSON file like this: 


{
"crs": {
"type":"name",
"properties":{
"name":"EPSG:2056"}
},
"license": "https://www.meteoschweiz.admin.ch/content/dam/meteoswiss/de/service-und-publikationen/produkt/doc/agbgrundangebot.pdf",
"mapname": "ch.meteoschweiz.messwerte-niederschlag-1d",
"map_long_name": "Messwerte Niederschlag, Tagessumme",
"map_short_name": "Niederschlagsumme, 1 Tag",
"map_abstract": "Aktuelle Messwerte Niederschlagsumme, 1 Tag [mm]. Daten werden alle 10 Minuten aktualisiert. Die Daten beziehen sich auf den Zeitraum 7:00 Uhr (Vortag) - 7:00 Uhr (Heute) und die Umstellung auf den nächsten Tag findet jeweils um 8:00 Uhr statt. Der Datensatz enthält alle Messstationen des automatischen und manuellen Niederschlagsmessnetzes von MeteoSchweiz. SwissMetNet, das automatische Messnetz der MeteoSchweiz, umfasst 300 automatische Niederschlagsstationen. Zusätzlich zu diesen automatischen Messstationen betreibt MeteoSchweiz ein manuelles Niederschlagsmessnetz mit rund 280 Stationen. An diesen Stationen werden einmal täglich um 7:00 Uhr Messungen vorgenommen und MeteoSchweiz per SMS übermittelt.",
"creation_time": "13.11.2022 19:15",
"type":"FeatureCollection",
"features":[
{ "type":"Feature",
"geometry":{
"type":"Point",
"coordinates":[2771031.30,1184825.60]},
"id":"ARO",
"properties":{
"station_name":"Arosa",
"station_symbol":1,
"value":0.0,
"unit": "mm",
"reference_ts": "2022-11-12T00:00:00Z",
"altitude": "1880.00",
"measurement_height": "2.00 m",
"description":"<table><tbody><tr><td class='text-nowrap'><strong>Stationsname</strong></td><td>Arosa (ARO)</td></tr><tr><td class='text-nowrap'><strong>Stationstyp</strong></td><td>Wetterstation</td></tr><tr><td class='text-nowrap'><strong>Eigentümer</strong></td><td>MeteoSchweiz</td></tr><tr><td><strong>Niederschlag</strong></td><td>0.0 mm (12.11.2022)</td></tr><tr><td class='text-nowrap'><strong>Messhöhe</strong></td><td>1880.00 m (Höhe ü. Boden: 2.00 m)</td></tr><tr><td class='text-nowrap'><strong>Link</strong></td><td><a target=\"_blank\" href=\"https://www.meteoschweiz.admin.ch/home/messwerte.html?param=messwerte-niederschlag-1d&station=ARO\">Informationen zu dieser Station</a></td></tr></tbody></table>"}
}
,{ "type":"Feature",
"geometry":{
"type":"Point",
"coordinates":[2756908.09,1209340.65]},
"id":"RAG",
"properties":{
"station_name":"Bad Ragaz",
"station_symbol":1,
"value":0.0,
"unit": "mm",
"reference_ts": "2022-11-12T00:00:00Z",
"altitude": "497.50",
"measurement_height": "1.50 m",
"description":"<table><tbody><tr><td class='text-nowrap'><strong>Stationsname</strong></td><td>Bad Ragaz (RAG)</td></tr><tr><td class='text-nowrap'><strong>Stationstyp</strong></td><td>Wetterstation</td></tr><tr><td class='text-nowrap'><strong>Eigentümer</strong></td><td>MeteoSchweiz</td></tr><tr><td><strong>Niederschlag</strong></td><td>0.0 mm (12.11.2022)</td></tr><tr><td class='text-nowrap'><strong>Messhöhe</strong></td><td>497.50 m (Höhe ü. Boden: 1.50 m)</td></tr><tr><td class='text-nowrap'><strong>Link</strong></td><td><a target=\"_blank\" href=\"https://www.meteoschweiz.admin.ch/home/messwerte.html?param=messwerte-niederschlag-1d&station=RAG\">Informationen zu dieser Station</a></td></tr></tbody></table>"}
}
,........


If the call comes back with a status 200 then it will iterate over the JSON file and find the "type":"Feature" with "ID":"BER" and output this on the console. If the API call does not responde with 200 then it will output: 'Something went wrong while making an API call' but will not start over again
