let fileUploaded = false;

function closeModal(id){
    let modal = document.getElementById(id);
    modal.style.display = "none";
}

function handleFiles(files){
    if (window.FileReader){
        FileReader.readAsText(files[0]);
    }
}

