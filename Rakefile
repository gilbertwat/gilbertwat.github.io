require "jekyll"
require "tmpdir"

# Github pages publishing.
namespace :blog do
# Because we are using 3rd party plugins for jekyll to manage the asset pipeline
# and suchlike we are unable to just branch the code, we have to process the site
# localy before pushing it to the branch to publish.
# We built this little rake task to help make that a little bit eaiser.
# Usage:
# bundle exec rake blog:publish
  desc "Publish blog to gh-pages"
  task :publish do
    # Compile the Jekyll site using the config.
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site",
      "config" => "_config.yml",
      "future" => "true"
    })).process

    # Get the origin to which we are going to push the site.
    origin = `GIT_DIR=./.git git config --get remote.origin.url`

    # Make a temporary directory for the build before production release.
    # This will be torn down once the task is complete.
    Dir.mktmpdir do |tmp|
      # Copy accross our compiled _site directory.
      cp_r ".nojekyll", tmp
      cp_r "_site/.", tmp

      cp_r 'node_modules/jquery/dist/jquery.js', tmp
      cp_r 'node_modules/jquery.panzoom/dist/jquery.panzoom.js', tmp
      cp_r 'node_modules/jquery/dist/jquery.js', tmp
      cp_r 'node_modules/mathjax/unpacked/MathJax.js', tmp

      # Switch in to the tmp dir.
      Dir.chdir tmp

      # Prepare all the content in the repo for deployment.
      system "echo 'init repo'"
      ENV.delete('GIT_WORK_TREE')
      system "git init" # Init the repo.
      system "echo 'Add and commit'"
      system "git add . && git commit -m 'Site updated at #{Time.now.utc}'" # Add and commit all the files.

      # Add the origin remote for the parent repo to the tmp folder.
      system "echo 'Add origin #{origin}'"
      system "git remote add origin #{origin}"

      # Push the files to the master branch, forcing an overwrite.
      system "git push origin master:refs/heads/master --force"
    end

  # Done.
  end
end
