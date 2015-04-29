Sunlight Email Templates
===============

This is a workflow to create email templates for the Sunlight Foundation and various products/tools. Stable, ready-to-use templates live in the `dist/` directory of the master branch.

#Development

1. Clone this repo.
2. Run `npm install` to install package dependencies. If npm isn't installed, follow [these instructions](https://docs.npmjs.com/getting-started/installing-node) to do so.
3. Run `npm install -g gulp `.
4. Run `gem install premailer` to install [Premailer](https://github.com/premailer/premailer). (You'll need a compatible version of ruby installed for this. You might have to use `sudo` also.)
5. Run `cp aws.json.example aws.json`
6. Run `gulp watch` to start the server and watch for changes. The first time you run this task, it will create a build directory where local files will be served from.
7. Open `localhost:3000/template/{template-name.html}` where {template-name.html} is the name of the template you want to work on.
8. Edit files in the `src` directory to your liking. (You should be working on a new branch for each individual template, so that master always maintains clean, stable versions of templates.)
9. When you're ready to inline your template, run `gulp publish`. This will build and inline your source files, and output them to the `dist` directory.
10. If you have any relative paths to images, the publish task will replace the URLs for you. (If not, skip this step.) To make your images available on the internet, run `gulp build`, then `gulp uploadImg`. This requires valid S3 credentials in your aws.json file.
11. Create a pull request to master when the template is tested and stable.
