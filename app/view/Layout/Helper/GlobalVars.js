Ext.define('ES.util.Helper.GlobalVars', {
    statics: {
        countVel: 0, //Count how much time the vehicle has been parked
        lat1: 0, //Latitude from the current address
        lon1: 0, //Longitude from the current address
        lat2: 0, //Latitude from destination address
        lon2: 0,//Longitude from destination address
        vel: 0, //Current speed
        lp: 0, //License plate
        isOffline: false, //Check if page expired or offline
        ws: "ws://10.0.0.144:2518/", //Websocket address
        protocol: "echo-protocol", //websocket protocol
        countPing: 0, //Ping pong
        countTime: 0, //Count how many seconds the car have been parked
        flightPathCoordinates: [], //All route coordinates
        markers: [],
        currentDirection: "", //Vehicles direction
        changedLang: false // Check if user changed the page language
    }
});