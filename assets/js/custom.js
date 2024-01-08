function downloadCard1Image() {
    const card1 = document.getElementById('card1');
    const name = card1.querySelector('h4');

    // Extract the heading text
    const headingText = name.innerText || name.textContent;

    // Use html2canvas to render the div onto a canvas with higher scale (e.g., 4x)
    html2canvas(card1, { scale: 4, backgroundColor: null, useCORS: true }).then(canvas => {
        // Convert the canvas content to data URL
        const dataUrl = canvas.toDataURL('image/png');

        // Create a link element to trigger the download
        const link = document.createElement('a');
        
        // Use the heading text in the file name
        link.download = `${headingText.trim().replace(/\s+/g, '_')}_card.png`;

        // Set the data URL as the link's href
        link.href = dataUrl;

        // Append the link to the document and trigger the click event
        document.body.appendChild(link);
        link.click();

        // Remove the link element from the document
        document.body.removeChild(link);
    });
}


function downloadCard2Image() {
    const card1 = document.getElementById('card2');
    const name = card1.querySelector('h4');

    // Extract the heading text
    const headingText = name.innerText || name.textContent;

    // Use html2canvas to render the div onto a canvas with higher scale (e.g., 4x)
    html2canvas(card1, { scale: 4, backgroundColor: null, useCORS: true }).then(canvas => {
        // Convert the canvas content to data URL
        const dataUrl = canvas.toDataURL('image/png');

        // Create a link element to trigger the download
        const link = document.createElement('a');
        
        // Use the heading text in the file name
        link.download = `${headingText.trim().replace(/\s+/g, '_')}_card.png`;

        // Set the data URL as the link's href
        link.href = dataUrl;

        // Append the link to the document and trigger the click event
        document.body.appendChild(link);
        link.click();

        // Remove the link element from the document
        document.body.removeChild(link);
    });
}
