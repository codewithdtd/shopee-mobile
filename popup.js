document.getElementById("openShopee").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "openShopee" });
});
