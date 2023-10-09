$(document).ready(function () {
    class FlexUploader {
        constructor(containerId, inputId, imgViewId) {
            this.container = $("#" + containerId);
            this.inputFile = $("#" + inputId);
            this.imageView = $("#" + imgViewId);

            this.inputFile.on("change", this.uploadImage.bind(this));

            this.container.on("dragover", this.handleDragOver.bind(this));
            this.container.on("dragleave", this.handleDragLeave.bind(this));
            this.container.on("drop", this.handleDrop.bind(this));
        }

        uploadImage() {
            let imgLink = URL.createObjectURL(this.inputFile[0].files[0]);

            const tempImg = new Image();
            tempImg.src = imgLink;

            tempImg.onload = () => {
                this.imageView.css({
                    width: tempImg.width + "px",
                    height: tempImg.height + "px",
                    backgroundImage: `url('${imgLink}')`,
                    textContent: "",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                });
            };
        }

        handleDragOver(e) {
            e.preventDefault();
            this.container.addClass("drag-over");
        }

        handleDragLeave(e) {
            this.container.removeClass("drag-over");
        }

        handleDrop(e) {
            e.preventDefault();

            this.container.removeClass("drag-over");

            if (e.originalEvent.dataTransfer.files.length > 0) {
                this.inputFile[0].files = e.originalEvent.dataTransfer.files;
                this.uploadImage();
            }
        }
    }

    const flexUploader = new FlexUploader("your-container-id", "your-input-id", "your-img-view-id");
});
