# Flex Uploader

Flex Uploader is a simple file uploader component with a flexible design. It allows users to upload images easily. This README provides an overview of the HTML structure and how to initialize the uploader using JavaScript.

## Usage

1. Include the necessary CSS and JavaScript files in your HTML document:

    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Flex Uploader</title>

        <style>
            body {
                margin: 0;
                padding: 1rem;
                font-family: sans-serif;
            }
        </style>

        <link rel="stylesheet" href="/dist/css/flex-uploader.css">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css">

    </head>

    <body>
        <!-- Your HTML content here -->

        <script src="/dist/js/flex-uploader.js"></script>

        <script>
            // init uploader
            new FlexUploader("drop-area", "input-file", "img-view");
        </script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>

        <script>
            hljs.highlightAll();
        </script>
    </body>

    </html>
    ```

2. Add the following HTML structure for the file uploader:

    ```html
    <p>Example:</p>
    <label for="input-file" id="drop-area" class="drop-area">
        <input type="file" name="image" id="input-file" accept="image/*" hidden>
        <div id="img-view" class="img-view">
            <img src="../dist/images/gallery-export.svg" id="img" width="50">
            <p id="img-info">Choose Image To Upload</p>
        </div>
    </label>
    ```

3. Include the following HTML snippet for reference in your documentation:

    ```html
    <p>HTML:</p>
    <pre><code class="html">&lt;label for="input-file" id="change-this-drop-area" class="drop-area"&gt;
        &lt;input type="file" name="image" id="change-this-input-file" accept="image/*" hidden&gt;
        &lt;div id="change-this-img-view" class="img-view"&gt;
            &lt;img src="../dist/images/gallery-export.svg" id="img" width="50"&gt;
            &lt;p id="img-info"&gt;Choose Image To Upload&lt;/p&gt;
        &lt;/div&gt;
    &lt;/label&gt;</code></pre>
    ```

4. Initialize the Flex Uploader in your JavaScript:

    ```html
    <p>JS:</p>
    <pre><code class="js">new FlexUploader("drop-area", "input-file", "img-view");</code></pre>
    ```

## License

This project is licensed under the [MIT License](LICENSE).
