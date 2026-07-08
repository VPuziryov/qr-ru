function trackQR(id) {
    fbq('trackCustom', 'QRPage', {
        qr: id
    });
}

function trackVideo(id) {
    fbq('trackCustom', 'VideoStart', {
        video: id
    });
}

function trackPDF(id) {
    fbq('trackCustom', 'PDFDownload', {
        file: id
    });
}