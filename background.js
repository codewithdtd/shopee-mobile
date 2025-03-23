chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openShopee") {
        chrome.windows.create({
            url: "https://shopee.vn",
            type: "popup",
            width: 414,
            height: 896
        });
    }
});
