
/*
    Joe Ostrander
    2025.06.10

    How to use:

    1) use "Save Page WE" Chrome extension to scrape the rendered Page
    2) add script tag to end of <body> of each html file:
        <script src="nav.js"></script>
    3) use Chrome DevTools to inspect the page and find the id of the element you want to make a button out of
    4) modify nav.js and html files as needed - you may need to rename some elements, like cdsClientObject_1_2_1_2_1 --> home_cdsClientObject_1_2_1_2_1
*/

// Add sidebar button event listeners
addLoadEvent("cdsClientObject_1_1_1_1_3", "home-dashboard");
addLoadEvent("cdsClientObject_1_1_2_1_3", "reports-alarms");
addLoadEvent("cdsClientObject_1_1_3_1_3", "recipe");
addLoadEvent("cdsClientObject_1_1_5_1_3", "diag");
addLoadEvent("cdsClientObject_1_1_4_1_3", "settings-system");
addLoadEvent("cdsClientObjectContainer_1_1_7", ""); // TODO: remote-enabled

// Add home button event listeners
addLoadEvent("home_cdsClientObject_1_2_1_1_1", "home-dashboard");
addLoadEvent("home_cdsClientObject_1_2_1_2_1", "home-operation");

// Add reports button event listeners
addLoadEvent("reports_cdsClientObject_1_2_1_1_1", "reports-alarms");
addLoadEvent("reports_cdsClientObject_1_2_1_2_1", "reports-events");
addLoadEvent("reports_cdsClientObject_1_2_1_3_1", "reports-jobs");
addLoadEvent("reports_cdsClientObject_1_2_1_4_1", ""); // TODO: reports-materials

// Add Settings button event listeners
addLoadEvent("settings_cdsClientObject_1_2_1_1_1", "settings-system");
addLoadEvent("settings_cdsClientObject_1_2_1_2_1", "settings-hardware");
addLoadEvent("settings_cdsClientObject_1_2_1_3_1", "settings-advanced");
addLoadEvent("settings_cdsClientObject_1_2_1_4_1", "");    //TODO settings-materials
addLoadEvent("settings_cdsClientObject_1_2_1_4_1", "settings-calibration");

function loadpage(page) {
    if (!page) {
        console.error("No page specified to load.");
        return;
    }
    console.log(`Loading page: ${page}`);
    let url = `${page}.html`;
    window.location.href = url;
}

function addLoadEvent(id, page) {
    let element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", function() {
            loadpage(page);
        });
    } else {
        console.warn(`Element not found for ID: ${id}`);
    }
}