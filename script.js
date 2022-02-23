var customLabels = {
    "N": {
        "full": "North", //used in tooltip
        "short": "N", //used in small breakpoint
        "ap": "N", //label format used in larger breakpoints. Can be renamed from "ap" if option `labelStyle` is changed to match or not included if `labelStyle` is set to "full" or "short".
    },
    "E": {
        "full": "East",
        "short": "E",
    },
    "S": {
        "full": "South",
        "short": "S",
    },
    "W": {
        "full": "West",
        "short": "W",
    },
    "Aadit": {
        "full": "AAAADIT",
        "short": "AT",
    },
    "Tambe": {
        "full": "TAMBE",
        "short": "TA",
    },
    "Data": {
        "full": "DATA",
        "short": "ATAD",
    }
}

var customData = {
    "N": {
        "Direction": "Longitude",
        "Fun fact": "Compasses love me",
        "note": "Also, the north star.",
        "x": 1,
        "y": 0
    },
    "E": {
        "Direction": "Latitude",
        "Fun fact": "Where the sun rises"
    },
    "S": {
        "Direction": "Longitude",
        "Fun fact": "Come to me for penguins"
    },
    "W": {
        "Direction": "Latitude",
        "Fun fact": "Where the sun sets"
    }
};

var test = [
    { "name": "N", "x": 1, "y": 0 },
    { "name": "E", "x": 2, "y": 1 },
    { "name": "S", "x": 1, "y": 2 },
    { "name": "W", "x": 0, "y": 1 }
]
console.log(test)
var customMap = new Squaire(customData, {
    el: "#custom-layout",
    layout: "Aadit,N, ,\n" +
        "W,Tambe,E\n" +
        " ,S,Data\n",
    labels: customLabels,
    labelStyle: "full",
    index: "Direction",
    indexType: "string",
    colors: d3.scale.ordinal(["Longitude", "Latitude"]).range(["#c9e2f5", "#c6e2ba"]),
    tooltip: {
        enabled: true,
        mode: "static",
        el: "#custom-layout-toolbox",
        whitelist: ["Fun fact"],
        noteIndex: "note"
    },
    breakpoints: {
        "small": 300
    }
});

