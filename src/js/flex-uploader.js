class FlexUploader {
    constructor(containerId, inputId, imgViewId) {
        this.container = document.getElementById(containerId);
        this.inputFile = document.getElementById(inputId);
        this.imageView = document.getElementById(imgViewId);

        this.inputFile.addEventListener("change", this.uploadImage.bind(this));

        this.container.addEventListener("dragover", this.handleDragOver.bind(this));
        this.container.addEventListener("dragleave", this.handleDragLeave.bind(this));
        this.container.addEventListener("drop", this.handleDrop.bind(this));
    }

    uploadImage() {
        let imgLink = URL.createObjectURL(this.inputFile.files[0]);

        const tempImg = new Image();
        tempImg.src = imgLink;

        tempImg.onload = () => {
            this.imageView.style.width = tempImg.width + "px";
            this.imageView.style.height = tempImg.height + "px";

            this.imageView.style.backgroundImage = `url('${imgLink}')`;
            this.imageView.textContent = "";
            this.imageView.style.backgroundSize = "cover";
            this.imageView.style.backgroundPosition = "center";
            this.imageView.style.backgroundRepeat = "no-repeat";
        };
    }

    handleDragOver(e) {
        e.preventDefault();
        this.container.classList.add("drag-over");
    }

    handleDragLeave(e) {
        this.container.classList.remove("drag-over");
    }

    handleDrop(e) {
        e.preventDefault();

        this.container.classList.remove("drag-over");

        if (e.dataTransfer.files.length > 0) {
            this.inputFile.files = e.dataTransfer.files;
            this.uploadImage();
        }
    }
}


