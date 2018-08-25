function scroll(tab) {
    if (!tab) {
        return;
    }

    browser.tabs.executeScript(null, {
        file: 'scroller.js'
    });
}

function urlEnabled(url) {
    return !(/^(?:about|data|moz-extension):/i.test(url) || isBlacklistedUrl(url));

}

function isBlacklistedUrl(url) {
    const badDomains = ["addons.mozilla.org", "testpilot.firefox.com"];
    let domain = url.replace(/^https?:\/\//i, "");
    domain = domain.replace(/\/.*/, "").replace(/:.*/, "");
    domain = domain.toLowerCase();
    return badDomains.includes(domain);
}

function toggleAvailability(url, tabId) {
    if (!urlEnabled(url)) {
        browser.pageAction.hide(tabId);
    } else {
        browser.pageAction.show(tabId);
    }
}

function tabActivated(activeInfo) {
    browser.tabs.get(activeInfo.tabId)
        .then(function (tab) {
            toggleAvailability(tab.url, activeInfo.tabId);
        });
}

function tabUpdated(tabId, changeInfo) {
    toggleAvailability(changeInfo.url, tabId);
}

browser.tabs.onUpdated.addListener(tabUpdated);
browser.tabs.onActivated.addListener(tabActivated);
browser.pageAction.onClicked.addListener(scroll);