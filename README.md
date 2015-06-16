Sunlight Email Templates
===============

This is a gulp-based workflow to create email templates for the Sunlight Foundation and various products/tools. Stable, ready-to-use templates live in the `dist` directory of the master branch. Raw templates and partials live in `src`.

#Install

1. Clone this repo.
2. Run `npm install` to install package dependencies. If npm isn't installed, follow [these instructions](https://docs.npmjs.com/getting-started/installing-node) to do so.
3. Run `npm install -g gulp `.
4. Run `gem install premailer` to install [Premailer](https://github.com/premailer/premailer). (You'll need a compatible version of ruby installed for this. You might have to use `sudo` also.)
5. Run `cp aws.json.example aws.json`

#Development
1. Run `gulp watch`. This will start a server and also watch for changes. The first time you run this task, it will create a build directory where local files will be served from.
2. In your browser, go to `localhost:3000/template/{template.html}` where {template.html} is the filename of the template you want to work on.
3. Edit files in the `src` directory to your liking. (You should be working on a new branch for each individual template, so that master always maintains clean, stable versions of templates.)
4. When you're ready to inline your template, run `gulp build`, followed by `gulp publish`. This will build and inline your source files, and output them to the `dist` directory.
5. Create a pull request to master when the template is tested and stable.

###Images
If you have any relative paths to images, `gulp publish` will replace them with an absolute URL for you. If you need to update the location of these paths, configure the variables in [/gulp/tasks/publish.js](/gulp/tasks/publish.js).

To upload images to AWS:

1. Make sure you have valid S3 credentials in your aws.json file.
2. Run `gulp build` to optimize all source images.
3. Run `gulp uploadImg` to push them to AWS. This will override existing images. (Asset fingerprinting is a to-do.)
