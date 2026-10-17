"use strict";

const downloadLinks = {
    windows: "./shell.exe",
    mac: "downloads/NOVA-macOS.dmg"
};

document.querySelectorAll(".download-btn").forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();

        const platform = button.dataset.platform;
        const file = downloadLinks[platform];

        if (!file) return;

        const link = document.createElement("a");
        link.href = file;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        link.remove();
    });
});
