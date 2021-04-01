# https://gist.github.com/hone/24b06869b4c1eca701f9

$ heroku apps:create andrey1de-facade
$  heroku apps:create andrey1de-facade
Creating ⬢ andrey1de-facade... done
https://andrey1de-facade.herokuapp.com/ | https://git.heroku.com/andrey1de-facade.git
$ heroku buildpacks:set https://github.com/hone/heroku-buildpack-static



$ heroku static:init
{
  "root": "C",
  "clean_urls": true,
  "error_page": "C:/_nadia/andrey1de-facade/dist/andrey1de-facade"
}

$ heroku git:remote -a andrey1de-facade
$ heroku static:deploy