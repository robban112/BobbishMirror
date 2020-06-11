/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "sv",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "MMM-NowPlayingOnSpotify",
			position: "top_left",
		  
			config: {
			  clientID: "63b16f0816a24352b4ef81e956ad408e",
			  clientSecret: "aa465210d9d1451493f4b7f0a05c4b1e",
			  accessToken: "BQDJ48VwgaQdxdVb69gJtVysU7rr7FBPbAUUuFKVqy4aNGT1JIdeMYHqxOyl6CkllaS6yTYQy8ygpSj2grlogR2ahygD4E5Dw4fPDS_QnTMBfpYxMeXAqtoMvjbeBSEML0ANYsy6vBfVdGMzZdNXiJrt",
			  refreshToken: "AQDhIzwMLszUxN-DldWCek2sNvzsw4645juv3bV9Goi_IARkkM8sUCfIe-48k4Oc8yWclCfNhq7ZxjqksZr1yruxKKh7kX8egkJ6DUnEDSjUEGqZBYqNgYKMlBJvvfgNbRk"
			}
		},
		{
			module: "clock",
			position: "middle_center",
			displayType: "both"
		},
		// {
		// 	module: "MMM-ResRobot",
		// 	position: "middle_center",
		// 	header: "Departures",
		// 	config: {
		// 		routes: [
		// 			{from: "740098236", to: "740098000"},	// ResRobot Station IDs of starting and destination station(s). At least one route must be defined.
		// 			{from: "740098236", to: "740000055"},	// "from" is required but "to" is optional (set "to" to empty string to indicate all destinations)
		// 		],
		// 		skipMinutes: 0,		// Skip departures that happens within the next <value> minutes.
		// 		maximumEntries: 4,	// Number of departures to show on screen
		// 		truncateAfter: 5,	// A value > 0 will truncate direction name at first space after <value> characters. 0 = no truncation
		// 		apiKey: "ecf6d2f2-448c-447b-a7ee-069d6777985d"		// Your ResRobot apiKey
		// 	}
		// },
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Huddinge",
				locationID: "2704620", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "d2cc7d350effb1c5e4e5f5e7cf5e0960"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Väder prognos",
			config: {
				location: "Huddinge",
				locationID: "2704620", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "d2cc7d350effb1c5e4e5f5e7cf5e0960"
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
