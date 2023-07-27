// const markdownInput = document.getElementById("markdownInput");
// const markdownOutput = document.getElementById("markdownOutput");
// const resizer = document.getElementById("resizer");

// function updatePreview() {
//     const markdownText = markdownInput.value;
//     const convertedHtml = marked(markdownText);
//     markdownOutput.innerHTML = convertedHtml;
// }

// // Initialize the preview with the initial content
// updatePreview();

// // Listen for changes in the input field
// markdownInput.addEventListener("input", updatePreview);

// // Resizable preview pane
// let isResizing = false;
// let startPosition = 0;

// resizer.addEventListener("mousedown", (e) => {
//     e.preventDefault();
//     isResizing = true;
//     startPosition = e.clientX;
// });

// document.addEventListener("mousemove", (e) => {
//     if (!isResizing) return;
    
//     const newPosition = e.clientX;
//     const offset = newPosition - startPosition;
//     const containerWidth = document.querySelector(".container").offsetWidth;
//     const editorWidth = document.querySelector(".editor").offsetWidth;
    
//     const newEditorWidth = Math.max(100, editorWidth + offset);
//     const newPreviewWidth = containerWidth - newEditorWidth - 10;
    
//     document.querySelector(".editor").style.width = newEditorWidth + "px";
//     document.querySelector(".preview").style.width = newPreviewWidth + "px";
    
//     startPosition = newPosition;
// });

// document.addEventListener("mouseup", () => {
//     isResizing = false;
// });

const markdownInput = document.getElementById("markdownInput");
const markdownOutput = document.getElementById("markdownOutput");
const resizer = document.getElementById("resizer");

function updatePreview() {
    const markdownText = markdownInput.value;
    const convertedHtml = marked(markdownText);

    // Adjust line height for headings in the converted HTML
    const modifiedHtml = adjustHeadingLineHeight(convertedHtml);
    markdownOutput.innerHTML = modifiedHtml;
}

// Function to adjust line height for headings in the converted HTML
function adjustHeadingLineHeight(html) {
    const headings = markdownOutput.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
        heading.style.marginTop = "0.5em";
        heading.style.marginBottom = "0.5em";
    });

    return html;
}

// Initialize the preview with the initial content
updatePreview();

// Listen for changes in the input field
markdownInput.addEventListener("input", updatePreview);

// Resizable preview pane (same as before)
let isResizing = false;
let startPosition = 0;

resizer.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isResizing = true;
    startPosition = e.clientX;
});

document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;
    
    const newPosition = e.clientX;
    const offset = newPosition - startPosition;
    const containerWidth = document.querySelector(".container").offsetWidth;
    const editorWidth = document.querySelector(".editor").offsetWidth;
    
    const newEditorWidth = Math.max(100, editorWidth + offset);
    const newPreviewWidth = containerWidth - newEditorWidth - 10;
    
    document.querySelector(".editor").style.width = newEditorWidth + "px";
    document.querySelector(".preview").style.width = newPreviewWidth + "px";
    
    startPosition = newPosition;
});

document.addEventListener("mouseup", () => {
    isResizing = false;
});
