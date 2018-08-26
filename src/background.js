function scroll(tab) {
    if (!tab) {
        return;
    }

    browser.tabs.executeScript(null, {
        file: 'scroller.js'
    });
}

browser.pageAction.onClicked.addListener(scroll);