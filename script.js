var customLabels = {
    "Maryland": {
        "full": "Maryland state", //used in tooltip
        "short": "MD", //used in small breakpoint
        "ap": "Md." //label format used in larger breakpoints. Can be renamed from "ap" if option `labelStyle` is changed to match or not included if `labelStyle` is set to "full" or "short".
    },
    "New York": {
        "full": "New York state",
        "short": "Ny."
    },
    "Pennsylvania": {
        "full": "Pennsylvania state",
        "short": "Pa."
    },
    "Iowa": {
        "full": "Iowa state",
        "short": "Ia."
    }
}

var data = {
    "Maryland": {
        "count": 100,
        "Direction": "Longitude",
        "Fun fact": "Compasses love me",
        "note": "Also, the north star."
    },
    "New York": {
        "count": 90,
        "Direction": "Latitude",
        "Fun fact": "Where the sun rises"
    },
    "Pennsylvania": {
        "count": 50,
        "Direction": "Longitude",
        "Fun fact": "Come to me for penguins"
    },
    "Iowa": {
        "count": 20,
        "Direction": "Latitude",
        "Fun fact": "Where the sun sets"
    }
};

// var data = {}

var customMap = new Squaire(data, {
    el: "#custom-layout",
    layout: ",Maryland,\n" +
        "New York,,Pennsylvania\n" +
        ",Iowa,\n",
    labels: customLabels,
    labelStyle: "full",
    index: "count",
    indexType: "string",
    colors: d3.scale.linear().domain([100, 20]).range(["#c9e2f5", "#c6e2ba"]),
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