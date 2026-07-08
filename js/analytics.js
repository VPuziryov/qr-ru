// iScuba QR Analytics Events

function trackQR(id) {
    if (typeof fbq === "function") {
        fbq("trackCustom", "QRPage", {
            qr: id
        });
    }
}

function trackPDF(file) {
    if (typeof fbq === "function") {
        fbq("trackCustom", "PDFDownload", {
            file: file
        });
    }
}

function trackVideo(video) {
    if (typeof fbq === "function") {
        fbq("trackCustom", "VideoStart", {
            video: video
        });
    }
}

function trackExternalLink(label, url) {
    if (typeof fbq === "function") {
        fbq("trackCustom", "ExternalLinkClick", {
            label: label,
            url: url
        });
    }
}