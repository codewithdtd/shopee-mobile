document.getElementById("openShopee").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "openShopee" });
});

document.getElementById("disableMobileMode").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "disableMobileMode" });
});
