var data = {
    "Anne Arundel": {
        "2010": "537,656",
        "2020": "588,261",
        "Change": "50,605",
        "Percent Change": 9.4,
        "short": "A. Arundel",
        "full": "Anne Arundel County"
    },
    "Baltimore": {
        "2010": "805,029",
        "2020": "854,535",
        "Change": "49,506",
        "Percent Change": 6.1,
        "short": "Baltimore",
        "full": "Baltimore County"
    },
    "Carroll": {
        "2010": "167,134",
        "2020": "172,891",
        "Change": "5,757",
        "Percent Change": 3.4,
        "short": "Carroll",
        "full": "Carroll County"
    },
    "Harford": {
        "2010": "244,826",
        "2020": "260,924",
        "Change": "16,098",
        "Percent Change": 6.6,
        "short": "Harford",
        "full": "Harford County"
    },
    "Howard": {
        "2010": "287,085",
        "2020": "332,317",
        "Change": "45,232",
        "Percent Change": 15.8,
        "short": "Howard",
        "full": "Howard County"
    },
    "Baltimore City": {
        "2010": "620,961",
        "2020": "585,708",
        "Change": "-35,253",
        "Percent Change": -5.7,
        "short": "Balt. city",
        "full": "Baltimore city"
    },
    "Frederick": {
        "2010": "233,385",
        "2020": "271,717",
        "Change": "38,332",
        "Percent Change": 16.4,
        "short": "Frederick",
        "full": "Frederick County"
    },
    "Montgomery": {
        "2010": "971,777",
        "2020": "1,062,061",
        "Change": "90,284",
        "Percent Change": 9.3,
        "short": "Mont.",
        "full": "Montgomery County"
    },
    "Prince George's": {
        "2010": "863,420",
        "2020": "967,201",
        "Change": "103,781",
        "Percent Change": 12.0,
        "short": "P.G.",
        "full": "Prince George's County"
    },
    "Calvert": {
        "2010": "88,737",
        "2020": "92,783",
        "Change": "4,046",
        "Percent Change": 4.6,
        "short": "Calvert",
        "full": "Calvert County"
    },
    "Charles": {
        "2010": "146,551",
        "2020": "166,617",
        "Change": "20,066",
        "Percent Change": 13.7,
        "short": "Charles",
        "full": "Charles County"
    },
    "St. Mary's": {
        "2010": "105,151",
        "2020": "113,777",
        "Change": "8,626",
        "Percent Change": 8.2,
        "short": "St. Mary's",
        "full": "St. Mary's County"
    },
    "Allegany": {
        "2010": "75,087",
        "2020": "68,106",
        "Change": "-6,981",
        "Percent Change": -9.3,
        "short": "Allegany",
        "full": "Allegany County"
    },
    "Garrett": {
        "2010": "30,097",
        "2020": "28,806",
        "Change": "-1,291",
        "Percent Change": -4.3,
        "short": "Garrett",
        "full": "Garrett County"
    },
    "Washington": {
        "2010": "147,430",
        "2020": "154,705",
        "Change": "7,275",
        "Percent Change": 4.9,
        "short": "Wash.",
        "full": "Washington County"
    },
    "Caroline": {
        "2010": "33,066",
        "2020": "33,293",
        "Change": "227",
        "Percent Change": 0.7,
        "short": "Caroline",
        "full": "Caroline County"
    },
    "Cecil": {
        "2010": "101,108",
        "2020": "103,725",
        "Change": "2,617",
        "Percent Change": 2.6,
        "short": "Cecil",
        "full": "Cecil County"
    },
    "Kent": {
        "2010": "20,197",
        "2020": "19,198",
        "Change": "-999",
        "Percent Change": -4.9,
        "short": "Kent",
        "full": "Kent County"
    },
    "Queen Anne's": {
        "2010": "47,798",
        "2020": "49,874",
        "Change": "2,076",
        "Percent Change": 4.3,
        "short": "Q. Anne's",
        "full": "Queen Anne's County"
    },
    "Talbot": {
        "2010": "37,782",
        "2020": "37,526",
        "Change": "-256",
        "Percent Change": -0.7,
        "short": "Talbot",
        "full": "Talbot County"
    },
    "Dorchester": {
        "2010": "32,618",
        "2020": "32,531",
        "Change": "-87",
        "Percent Change": -0.3,
        "short": "Dorchester",
        "full": "Dorchester County"
    },
    "Somerset": {
        "2010": "26,470",
        "2020": "24,620",
        "Change": "-1,850",
        "Percent Change": -7.0,
        "short": "Somerset",
        "full": "Somerset County"
    },
    "Wicomico": {
        "2010": "98,733",
        "2020": "103,588",
        "Change": "4,855",
        "Percent Change": 4.9,
        "short": "Wicomico",
        "full": "Wicomico County"
    },
    "Worcester": {
        "2010": "51,454",
        "2020": "52,460",
        "Change": "1,006",
        "Percent Change": 2.0,
        "short": "Worcester",
        "full": "Worcester County"
    }
}


var mdLayout = "Garrett,Allegany,Washington,Frederick,Carroll,Baltimore,Harford,Cecil,\n" +
    ",,,Montgomery,Howard,Baltimore City,,Kent,\n" +
    ",,,,Prince George's,Anne Arundel,,Queen Anne's,\n" +
    ",,,,Charles,Calvert,Talbot,Caroline,\n" +
    ",,,,St. Mary's,,,Dorchester,\n" +
    ",,,,,,,Wicomico,Worcester\n" +
    ",,,,,,,Somerset,\n"



var customMap = new Squaire(data, {
    el: "#custom-layout",
    layout: mdLayout,
    labels: data,
    labelStyle: "short",
    index: "Percent Change",
    indexType: "string",
    colors: d3.scale.linear().domain([-10, 17]).range(["#de5826", "#1979b9"]),
    tooltip: {
        enabled: true,
        mode: "static",
        el: "#info",
        layout: infoHTML,
    },
    breakpoints: {
        "small": 300
    }
});
function infoHTML(d) {
    var html;
    if (d.data["Percent Change"] > 0) {
        html = '<hr><span id="tooltip-body"><h4>' + "<span class='inc'>" + d.data.full + "'s</span> population" + " changed " + "<span class='inc'>" + d.data["Percent Change"] + " percent</span>, from " + d.data["2010"] + " residents in 2010 to " + d.data["2020"] + " residents in 2020." + "</h4><hr>"
        // return html;
    } else {
        html = '<hr><span id="tooltip-body"><h4>' + "<span class='dec'>" + d.data.full + "'s</span> population" + " changed " + "<span class='dec'>" + d.data["Percent Change"] + " percent</span>, from " + d.data["2010"] + " residents in 2010 to " + d.data["2020"] + " residents in 2020." + "</h4><hr>"
    }
    return html
}
