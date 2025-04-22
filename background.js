chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openShopee") {
        chrome.windows.create({
            url: "https://shopee.vn",
            type: "popup",
            width: 414,
            height: 896
        });
    } else if (message.action === "disableMobileMode") {
        chrome.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds: ["1"]
        }, () => {
            console.log("Mobile mode disabled.");
        });
    }
});
