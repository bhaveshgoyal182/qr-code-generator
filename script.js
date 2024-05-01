const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();
    clearUI();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert('Please enter a valid url');
    } else {
        showSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url,size);
            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
                createCopyBtn(saveUrl);
            },50);
        }, 1000)
    }

}

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        height: size,
        width: size,
    });
}


const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

const clearUI = () => {
    qr.innerHTML = "";
    const downloadQr = document.getElementById('download-qr'); // to remove the save btn whenever the size of the qr code is changed
    if(downloadQr) downloadQr.remove();
    const copyQr = document.getElementById('copy-qr'); // to remove the save btn whenever the size of the qr code is changed
    if(copyQr) copyQr.remove();
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'download-qr';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold m-auto py-2 w-1/3 my-5 rounded';
    link.href = saveUrl;
    link.download = 'qrcode'; // name with which the image will be downloaded
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}

const createCopyBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'copy-qr';
    link.classList = 'bg-blue-500 hover:bg-blue-700 text-white font-bold m-auto py-2 w-1/3 my-0 rounded';
    link.innerHTML = 'Copy Image';
    link.addEventListener('click', copyImageToClipboard);
    document.getElementById('generated').appendChild(link);
}


const copyImageToClipboard = async () => {
    // Select the QR code image element
    const img = document.querySelector('#qrcode img');
    if (!img) {
        console.error('QR code image not found');
        return;
    }
    try {
        // Fetch the image as Blob
        const response = await fetch(img.src);
        const blob = await response.blob();
        // Use the Clipboard API to copy the Blob data
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        // Feedback or action after copying
        alert('QR copied to clipboard');
        console.log('QR copied to clipboard');
    } catch (error) {
        alert('Unable to copy Qr');
        console.error('Unable to copy Qr to clipboard:', error);
    }
}


hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
