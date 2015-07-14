


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>kripken/sql.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="kripken/sql.js" name="twitter:title" /><meta content="sql.js - SQLite compiled to JavaScript through Emscripten" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/173661?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/173661?v=3&amp;s=400" property="og:image" /><meta content="kripken/sql.js" property="og:title" /><meta content="https://github.com/kripken/sql.js" property="og:url" /><meta content="sql.js - SQLite compiled to JavaScript through Emscripten" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/Nzg1MzU0MTpmYzMzODhmODFhMDViNWMwNWM1NDcwODRhZmMxNzhlZDo2Y2UyOGI1ZDVhNGJjM2Y1NGU1MmZhOGRlNzIwNmMyNTYxODZkODRjZTFhNzRhZjM1M2Q3NTE2N2YzODFkMjM4--0d8087542974ad9dfc91ac415bbe7c8eff759c7d">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4270E3D5:0FA1:60B5EE5:55A4C870" name="octolytics-dimension-request_id" /><meta content="7853541" name="octolytics-actor-id" /><meta content="vnguy" name="octolytics-actor-login" /><meta content="5d93bcbd2020419a7cdaf555728f749e9a7a1c7d17bd8ea63cade809ac496e18" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, files#disambiguate" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta name="is-dotcom" content="true">
      <meta name="hostname" content="github.com">
    <meta name="user-login" content="vnguy">

      <link rel="icon" sizes="any" mask href="https://assets-cdn.github.com/pinned-octocat.svg">
      <meta name="theme-color" content="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="s4etyr7jm2s88mwCS/Uhj0Vzn81xPqGWOK0h57tZBYEg/TPEeGhWRdpJ2m+LgI5lhbiOHfACMmKp5nJcL3n0TQ==" name="csrf-token" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github/index-8824a5ef57ac4ae0b5ca429778b9660b1c66d09deea2ff11681de18d86a4bbb1.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2/index-f0d033a37796c27f6b5b24aa8dc21af9c206a51ed2fe782d660dc20267c17d2b.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="3f58d2288e653bc3998db56bf3ad89c7">

      
  <meta name="description" content="sql.js - SQLite compiled to JavaScript through Emscripten">
  <meta name="go-import" content="github.com/kripken/sql.js git https://github.com/kripken/sql.js.git">

  <meta content="173661" name="octolytics-dimension-user_id" /><meta content="kripken" name="octolytics-dimension-user_login" /><meta content="3556910" name="octolytics-dimension-repository_id" /><meta content="kripken/sql.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3556910" name="octolytics-dimension-repository_network_root_id" /><meta content="kripken/sql.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/kripken/sql.js/commits/master.atom" rel="alternate" title="Recent Commits to sql.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/kripken/sql.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/kripken/sql.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:vnguy"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new..."
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="kripken/sql.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/kripken/sql.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/vnguy"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@vnguy" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/7853541?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">vnguy</strong>
        </div>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/vnguy" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="938hiz2IlW9IBKd+dBEQgitI130fbFmjfRaFJYgb9T3Zcf90Z2eZaklzczy1s6YcovBJvCTkb1YwpHmeX8BGbQ==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">

        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5EIVgdt5KiSG5NjJoDuxqySuW/0R4TvRdOvLQOVG85kEbZDZnl2HgVYDAsaq7yrm31Fk1/LV0eeSrvgkMRganw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="3556910" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/kripken/sql.js/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:files#disambiguate">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/kripken/sql.js/watchers">
          132
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/kripken/sql.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="7c2BtFpEDIeXuWn2XXdSkrvGSAQa40iPSm2RdHWabKghOnt2n+W9XBy9W+YcFVySyuv5IXno28r13euNuHBy4Q==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar kripken/sql.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/kripken/sql.js/stargazers">
          1,757
        </a>
</form>
    <form accept-charset="UTF-8" action="/kripken/sql.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3iN3vSpd6M6O4HrzGIKZ0ODALMiJZUg24X3hNdvPoyonhz6+2OT8x315Zd/BxWrgVFbJtyoz3t9yVLobmrmcHw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star kripken/sql.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/kripken/sql.js/stargazers">
          1,757
        </a>
</form>  </div>

  </li>

        <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of kripken/sql.js to your account"
              aria-label="Fork your own copy of kripken/sql.js to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/kripken/sql.js/network" class="social-count">205</a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/kripken/sql.js/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/kripken" class="url fn" itemprop="url" rel="author"><span itemprop="title">kripken</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/kripken/sql.js" data-pjax="#js-repo-pjax-container">sql.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/kripken/sql.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/kripken/sql.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /kripken/sql.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/kripken/sql.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /kripken/sql.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/kripken/sql.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /kripken/sql.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/kripken/sql.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /kripken/sql.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/kripken/sql.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /kripken/sql.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/kripken/sql.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /kripken/sql.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/kripken/sql.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:kripken/sql.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/kripken/sql.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options">You can clone with
  <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="AjRp2s9KAj2vbOubHac2w4cRxkr/4YLsdAwwbKKXfX3XTID49rllY+OyJtK3OVsWT8jMs/sVng9qzrZPz3f4xg==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HwmKn160ZeamS4Gh/xoYmTIlcMPSrygH52pIa6rwzPCwkRj+ntP03IGIAhf9uqoAn6TcOt/drGXgYAno1Fko8Q==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="iu23UFSkXI8UbuyxQc9AMMptE05u7vVscIZkiW/vsG5fX6d3XNb0k9tpg0dN260GQ6Gj0htVCTYlua4/o/exOg==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>


  <a href="github-windows://openRepo/https://github.com/kripken/sql.js" class="btn btn-sm sidebar-button" title="Save kripken/sql.js to your computer and use it in GitHub Desktop." aria-label="Save kripken/sql.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/kripken/sql.js/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of kripken/sql.js as a zip file"
                   title="Download the contents of kripken/sql.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          
<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description">
      SQLite compiled to JavaScript through Emscripten
    </div>



</div>

<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/kripken/sql.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              193
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/kripken/sql.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            5
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/kripken/sql.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            0
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/kripken/sql.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      6
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/kripken/sql.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">53.0%</span>
              </a>
          </li>
          <li>
              <a href="/kripken/sql.js/search?l=c">
                <span class="color-block language-color" style="background-color:#555555;"></span>
                <span class="lang">C</span>
                <span class="percent">43.8%</span>
              </a>
          </li>
          <li>
              <a href="/kripken/sql.js/search?l=cpp">
                <span class="color-block language-color" style="background-color:#f34b7d;"></span>
                <span class="lang">C++</span>
                <span class="percent">3.0%</span>
              </a>
          </li>
          <li>
              <span class="other">
                <span class="color-block language-color" style="background-color:#ededed;"></span>
                <span class="lang">Other</span>
                <span class="percent">0.2%</span>
              </span>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="JavaScript 53.0%" style="width:53.0%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="C 43.8%" style="width:43.8%; background-color:#555555;" itemprop="keywords">C</span>
    <span class="language-color" aria-label="C++ 3.0%" style="width:3.0%; background-color:#f34b7d;" itemprop="keywords">C++</span>
    <span class="language-color" aria-label="Other 0.2%" style="width:0.2%; background-color:#ededed;" itemprop="keywords">Other</span>
  </div>

<include-fragment src="/kripken/sql.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">
  <a href="/kripken/sql.js/find/master"
        class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/kripken/sql.js/compare" aria-label="Compare, review, create a pull request" class="btn btn-sm btn-primary tooltipped tooltipped-se left compare-button" aria-label="Compare &amp; review" data-pjax data-ga-click="Repository, go to compare view, location:repo overview; icon:git-compare">
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kripken/sql.js/tree/gh-pages"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/kripken/sql.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kripken/sql.js/tree/memory-init-file"
               data-name="memory-init-file"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="memory-init-file">
                memory-init-file
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kripken/sql.js/tree/rtree"
               data-name="rtree"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="rtree">
                rtree
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kripken/sql.js/tree/sizeopts"
               data-name="sizeopts"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="sizeopts">
                sizeopts
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>



  <div class="breadcrumb"><span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/kripken/sql.js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">sql.js</span></a></span></span><span class="separator">/</span>
    <form accept-charset="UTF-8" action="/kripken/sql.js/new/master" class="js-new-blob-form inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="h6sHu6u3R5d3iU2DXEOAm7qCkUs+JKGrD1EdJgTINoE9qnmxSX9Zm+rU9kcw/jRiKx/8uKeU8Dl/koOjaqhcvg==" /></div>
      <button class="btn-link tooltipped tooltipped-e" type="submit" data-disable-with="working…" aria-label="Fork this project and create a new file">
        <span class="js-new-blob-submit octicon octicon-plus"></span>
      </button>
</form></div>
</div>



  
  <div class="commit commit-tease js-details-container" >
      <a href="/kripken/sql.js/commit/3fdb218af896f27f84ef0523677a317ed19fef46" class="comment-count" anchor="comments" data-pjax>
        2 comments <span class='octicon octicon-comment'></span>
      </a>
    <p class="commit-title ">
        <a href="/kripken/sql.js/commit/3fdb218af896f27f84ef0523677a317ed19fef46" class="message" data-pjax="true" title="Example of how to load a database from a server

Fixes #82">Example of how to load a database from a server</a>
        <span class="hidden-text-expander inline"><a href="#" class="js-details-target">…</a></span>
    </p>
      <div class="commit-desc"><pre>Fixes <a href="https://github.com/kripken/sql.js/issues/82" class="issue-link" title="Reading SQLite database from file in browser">#82</a></pre></div>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link tooltipped tooltipped-s" data-clipboard-text="3fdb218af896f27f84ef0523677a317ed19fef46" data-copied-hint="Copied!" data-copy-hint="Copy SHA" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/kripken/sql.js/commit/3fdb218af896f27f84ef0523677a317ed19fef46" class="sha-block" data-pjax>latest commit <span class="sha">3fdb218af8</span></a>

      <div class="authorship">
        <img alt="@lovasoa" class="avatar" data-user="552629" height="20" src="https://avatars2.githubusercontent.com/u/552629?v=3&amp;s=40" width="20" />
        <span class="author-name"><a href="/lovasoa" rel="contributor">lovasoa</a></span>
        authored <time class="updated" datetime="2015-01-22T08:23:32Z" is="relative-time">Jan 22, 2015</time>

      </div>
    </div>
  </div>

  
<div class="file-wrap">
  <a href="/kripken/sql.js/tree/3fdb218af896f27f84ef0523677a317ed19fef46" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/tree/master/c" class="js-directory-link" id="4a8a08f09d37b73795649038408b5f33-7e22f54c808f4a493848569390e4ef794c0b58a2" title="c">c</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/a2fae6835b6117ee69df3a148fa497447ed74056" class="message" data-pjax="true" title="Update SQLite to 3.8.7.4">Update SQLite to 3.8.7.4</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-12-11T17:11:45Z" is="time-ago">Dec 11, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/tree/master/coffee" class="js-directory-link" id="24eb05d18318ac2db8b2b959315d10f2-37554f5424d72cb2dec5cdcf12359a7cf7f78420" title="coffee">coffee</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/ec75a375705b6b5e3d392bb1b1da99fa5ed5e1de" class="message" data-pjax="true" title="Compile with latest emscripten (1.27.2)">Compile with latest emscripten (1.27.2)</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-12-11T16:53:52Z" is="time-ago">Dec 11, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/tree/master/js" class="js-directory-link" id="32981a13284db7a021131df49e6cd203-52b6724302ea87d1a06ac76fe71d6665bd4d84a8" title="js">js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/a2fae6835b6117ee69df3a148fa497447ed74056" class="message" data-pjax="true" title="Update SQLite to 3.8.7.4">Update SQLite to 3.8.7.4</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-12-11T17:11:45Z" is="time-ago">Dec 11, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/tree/master/test" class="js-directory-link" id="098f6bcd4621d373cade4e832627b4f6-e262f19120d761f8c7021db63362dc80188a2c3a" title="test">test</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/19b40cb80de83fd1f8fab183471cf719ebb19ca2" class="message" data-pjax="true" title="Fix error in test 76: incorrect use of stmt.get">Fix error in test 76: incorrect use of stmt.get</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-11-26T16:47:20Z" is="time-ago">Nov 26, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/blob/master/.gitignore" class="js-directory-link" id="a084b794bc0759e7a6b77810e01874f2-c34f7f90af2c8459a837f45cc06c056cf4c8d65d" title=".gitignore">.gitignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/a6f050aeefbaeb6ad086e9bb1207ad83a95d4b61" class="message" data-pjax="true" title="Add some compiled files to .gitignore">Add some compiled files to .gitignore</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-12-11T17:06:24Z" is="time-ago">Dec 11, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/blob/master/.npmignore" class="js-directory-link" id="0fd4ef892d9d4990033701887c2f9bcc-fac5e16eddd89b99330bd94799ec8832b0f3a807" title=".npmignore">.npmignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/7ecf0c824fb796b936b5e21b5b71bb6982ebbbdf" class="message" data-pjax="true" title="add .npmignore">add .npmignore</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-01-10T02:53:50Z" is="time-ago">Jan 9, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/blob/master/.travis.yml" class="js-directory-link" id="354f30a63fb0907d4ad57269548329e3-6e5919de39a312330fd1abf64237c4b6ad10c56b" title=".travis.yml">.travis.yml</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/ada2f3848d4d8c6ad9e2501af82b3d3b5bc1dad2" class="message" data-pjax="true" title="Only test against node O.10">Only test against node O.10</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-05-24T13:35:20Z" is="time-ago">May 24, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/blob/master/AUTHORS" class="js-directory-link" id="3d350169560e75d0cf9fc8e3574a3639-45e6992cda29a9b1062f3a6eec00b4f17b9f8fb0" title="AUTHORS">AUTHORS</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/627d20d45f0592f7d60fa69d6627a662a1addae0" class="message" data-pjax="true" title="Add @firien to the authors for PR #76">Add</a> <a href="https://github.com/firien" class="user-mention">@firien</a> <a href="/kripken/sql.js/commit/627d20d45f0592f7d60fa69d6627a662a1addae0" class="message" data-pjax="true" title="Add @firien to the authors for PR #76">to the authors for PR</a> <a href="https://github.com/kripken/sql.js/pull/76" class="issue-link" title="return after bindNull">#76</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-11-26T17:00:58Z" is="time-ago">Nov 26, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/blob/master/Makefile" class="js-directory-link" id="b67911656ef5d18c4ae36cb6741b7965-0da57c7914c1f1f590c569325db01f291ea026ab" title="Makefile">Makefile</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/abdc8986d90d66ec719385ad09766c0976cec1bb" class="message" data-pjax="true" title="Adapt Makefile to work with latest emscripten

In the latest emscripten, memory initialization files are enabled by
default.

See #65">Adapt Makefile to work with latest emscripten</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-10-19T20:55:19Z" is="time-ago">Oct 19, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-1c742306f11f1821030657cf55084768e5b8bb0f" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/3fdb218af896f27f84ef0523677a317ed19fef46" class="message" data-pjax="true" title="Example of how to load a database from a server

Fixes #82">Example of how to load a database from a server</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-01-22T08:23:32Z" is="time-ago">Jan 22, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/blob/master/exported_functions" class="js-directory-link" id="3af09d0db37bddedc4c5cb4bf03289e1-7492fe5fad95073e04ab44aa4062c6158120d47f" title="exported_functions">exported_functions</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/de92cea2297f3a0af85965d175081dc0732beadb" class="message" data-pjax="true" title="Improve error handling.

Factorize code and produce more descriptive errors">Improve error handling.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-06-08T22:58:36Z" is="time-ago">Jun 9, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/kripken/sql.js/blob/master/package.json" class="js-directory-link" id="b9cfc7f2cdf78a7f4b91a753d10865a2-fbb231fb0a2e3110891832a4d9e800d92cd7ee9f" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/kripken/sql.js/commit/ede21d1ccc83bf44b4ede6f20a5fbebffa2a08ef" class="message" data-pjax="true" title="Update repository information">Update repository information</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-12-11T17:37:09Z" is="time-ago">Dec 11, 2014</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-sqlite-compiled-to-javascript" class="anchor" href="#sqlite-compiled-to-javascript" aria-hidden="true"><span class="octicon octicon-link"></span></a>SQLite compiled to javascript</h1>

<p><a href="http://travis-ci.org/kripken/sql.js"><img src="https://camo.githubusercontent.com/3302ff02441b6c4fca8bd71307e67a2033b03d64/68747470733a2f2f7472617669732d63692e6f72672f6b7269706b656e2f73716c2e6a732e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/kripken/sql.js.svg?branch=master" style="max-width:100%;"></a></p>

<p>For the impatients, try the demo here: <a href="http://kripken.github.io/sql.js/GUI/">http://kripken.github.io/sql.js/GUI/</a></p>

<p>sql.js is a port of SQLite to JavaScript, by compiling the SQLite C code with Emscripten.
no C bindings or node-gyp compilation here.</p>

<p>SQLite is public domain, sql.js is MIT licensed.</p>

<h2><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span class="octicon octicon-link"></span></a>Usage</h2>

<div class="highlight highlight-javascript"><pre><span class="pl-k">var</span> sql <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>sql.js<span class="pl-pds">'</span></span>);
<span class="pl-c">// or sql = window.SQL if you are in a browser</span>

<span class="pl-c">// Create a database</span>
<span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">sql.Database</span>();
<span class="pl-c">// NOTE: You can also use new sql.Database(data) where</span>
<span class="pl-c">// data is an Uint8Array representing an SQLite database file</span>

<span class="pl-c">// Execute some sql</span>
sqlstr <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>CREATE TABLE hello (a int, b char);<span class="pl-pds">"</span></span>;
sqlstr <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">"</span>INSERT INTO hello VALUES (0, 'hello');<span class="pl-pds">"</span></span>
sqlstr <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">"</span>INSERT INTO hello VALUES (1, 'world');<span class="pl-pds">"</span></span>
db.run(sqlstr); <span class="pl-c">// Run the query without returning anything</span>

<span class="pl-k">var</span> res <span class="pl-k">=</span> db.<span class="pl-c1">exec</span>(<span class="pl-s"><span class="pl-pds">"</span>SELECT * FROM hello<span class="pl-pds">"</span></span>);
<span class="pl-c">/*</span>
<span class="pl-c">[</span>
<span class="pl-c">    {columns:['a','b'], values:[[0,'hello'],[1,'world']]}</span>
<span class="pl-c">]</span>
<span class="pl-c">*/</span>

<span class="pl-c">// Prepare an sql statement</span>
<span class="pl-k">var</span> stmt <span class="pl-k">=</span> db.prepare(<span class="pl-s"><span class="pl-pds">"</span>SELECT * FROM hello WHERE a=:aval AND b=:bval<span class="pl-pds">"</span></span>);

<span class="pl-c">// Bind values to the parameters and fetch the results of the query</span>
<span class="pl-k">var</span> result <span class="pl-k">=</span> stmt.getAsObject({<span class="pl-s"><span class="pl-pds">'</span>:aval<span class="pl-pds">'</span></span> <span class="pl-k">:</span> <span class="pl-c1">1</span>, <span class="pl-s"><span class="pl-pds">'</span>:bval<span class="pl-pds">'</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>world<span class="pl-pds">'</span></span>});
<span class="pl-en">console</span><span class="pl-c1">.log</span>(result); <span class="pl-c">// Will print {a:1, b:'world'}</span>

<span class="pl-c">// Bind other values</span>
stmt.bind([<span class="pl-c1">0</span>, <span class="pl-s"><span class="pl-pds">'</span>hello<span class="pl-pds">'</span></span>]);
<span class="pl-k">while</span> (stmt.step()) <span class="pl-en">console</span><span class="pl-c1">.log</span>(stmt.get()); <span class="pl-c">// Will print [0, 'hello']</span>

<span class="pl-c">// free the memory used by the statement</span>
stmt.free();
<span class="pl-c">// You can not use your statement anymore once it has been freed.</span>
<span class="pl-c">// But not freeing your statements causes memory leaks. You don't want that.</span>

<span class="pl-c">// Export the database to an Uint8Array containing the SQLite database file</span>
<span class="pl-k">var</span> binaryArray <span class="pl-k">=</span> db.export();</pre></div>

<h2><a id="user-content-demo" class="anchor" href="#demo" aria-hidden="true"><span class="octicon octicon-link"></span></a>Demo</h2>

<p>There is an online demo available here : <a href="http://kripken.github.io/sql.js/GUI">http://kripken.github.io/sql.js/GUI</a></p>

<h2><a id="user-content-examples" class="anchor" href="#examples" aria-hidden="true"><span class="octicon octicon-link"></span></a>Examples</h2>

<p>The test files provide up to date example of the use of the api.</p>

<h3><a id="user-content-inside-the-browser" class="anchor" href="#inside-the-browser" aria-hidden="true"><span class="octicon octicon-link"></span></a>Inside the browser</h3>

<h4><a id="user-content-example-html-file" class="anchor" href="#example-html-file" aria-hidden="true"><span class="octicon octicon-link"></span></a>Example <strong>HTML</strong> file:</h4>

<div class="highlight highlight-html"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">'</span>js/sql.js<span class="pl-pds">'</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
<span class="pl-s1">&lt;<span class="pl-ent">script</span>&gt;</span>
<span class="pl-s1">    <span class="pl-c">//Create the database</span></span>
<span class="pl-s1">    <span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>();</span>
<span class="pl-s1">    <span class="pl-c">// Run a query without reading the results</span></span>
<span class="pl-s1">    db.run(<span class="pl-s"><span class="pl-pds">"</span>CREATE TABLE test (col1, col2);<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1">    <span class="pl-c">// Insert two rows: (1,111) and (2,222)</span></span>
<span class="pl-s1">    db.run(<span class="pl-s"><span class="pl-pds">"</span>INSERT INTO test VALUES (?,?), (?,?)<span class="pl-pds">"</span></span>, [<span class="pl-c1">1</span>,<span class="pl-c1">111</span>,<span class="pl-c1">2</span>,<span class="pl-c1">222</span>]);</span>
<span class="pl-s1"></span>
<span class="pl-s1">    <span class="pl-c">// Prepare a statement</span></span>
<span class="pl-s1">    <span class="pl-k">var</span> stmt <span class="pl-k">=</span> db.prepare(<span class="pl-s"><span class="pl-pds">"</span>SELECT * FROM test WHERE col1 BETWEEN $start AND $end<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1">    stmt.getAsObject({$start<span class="pl-k">:</span><span class="pl-c1">1</span>, $end<span class="pl-k">:</span><span class="pl-c1">1</span>}); <span class="pl-c">// {col1:1, col2:111}</span></span>
<span class="pl-s1"></span>
<span class="pl-s1">    <span class="pl-c">// Bind new values</span></span>
<span class="pl-s1">    stmt.bind({$start<span class="pl-k">:</span><span class="pl-c1">1</span>, $end<span class="pl-k">:</span><span class="pl-c1">2</span>});</span>
<span class="pl-s1">    <span class="pl-k">while</span>(stmt.step()) { <span class="pl-c">//</span></span>
<span class="pl-s1">        <span class="pl-k">var</span> row <span class="pl-k">=</span> stmt.getAsObject();</span>
<span class="pl-s1">        <span class="pl-c">// [...] do something with the row of result</span></span>
<span class="pl-s1">    }</span>
<span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></pre></div>

<h4><a id="user-content-creating-a-database-from-a-file-choosen-by-the-user" class="anchor" href="#creating-a-database-from-a-file-choosen-by-the-user" aria-hidden="true"><span class="octicon octicon-link"></span></a>Creating a database from a file choosen by the user</h4>

<p><code>SQL.Database</code> constructor takes an array of integer representing a database file as an optional parameter.
The following code uses an HTML input as the source for loading a database:</p>

<div class="highlight highlight-javascript"><pre><span class="pl-c1">dbFileElm</span>.<span class="pl-en">onchange</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {
    <span class="pl-k">var</span> f <span class="pl-k">=</span> dbFileElm.files[<span class="pl-c1">0</span>];
    <span class="pl-k">var</span> r <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">FileReader</span>();
    <span class="pl-c1">r</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {
        <span class="pl-k">var</span> Uints <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(r.result);
        db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>(Uints);
    }
    r.readAsArrayBuffer(f);
}</pre></div>

<p>See : <a href="http://kripken.github.io/sql.js/GUI/gui.js">http://kripken.github.io/sql.js/GUI/gui.js</a></p>

<h4><a id="user-content-loading-a-database-from-a-server" class="anchor" href="#loading-a-database-from-a-server" aria-hidden="true"><span class="octicon octicon-link"></span></a>Loading a database from a server</h4>

<div class="highlight highlight-javascript"><pre><span class="pl-k">var</span> xhr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();
xhr.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">'</span>GET<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>/path/to/database.sqlite<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>);
xhr.responseType <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>arraybuffer<span class="pl-pds">'</span></span>;

<span class="pl-c1">xhr</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>) {
  <span class="pl-k">var</span> uInt8Array <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-v">this</span>.response);
  <span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>(uInt8Array);
  <span class="pl-k">var</span> contents <span class="pl-k">=</span> db.<span class="pl-c1">exec</span>(<span class="pl-s"><span class="pl-pds">"</span>SELECT * FROM my_table<span class="pl-pds">"</span></span>);
  <span class="pl-c">// contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}]</span>
};
xhr.<span class="pl-c1">send</span>();</pre></div>

<p>See: <a href="https://github.com/kripken/sql.js/wiki/Load-a-database-from-the-server">https://github.com/kripken/sql.js/wiki/Load-a-database-from-the-server</a></p>

<h3><a id="user-content-use-from-nodejs" class="anchor" href="#use-from-nodejs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Use from node.js</h3>

<p><code>sql.js</code> is <a href="https://www.npmjs.org/package/sql.js">hosted on npm</a>. To install it, you can simply run <code>npm install sql.js</code>.
Alternatively, you can simply download the file <code>sql.js</code>, from the download link below.</p>

<h4><a id="user-content-read-a-database-from-the-disk" class="anchor" href="#read-a-database-from-the-disk" aria-hidden="true"><span class="octicon octicon-link"></span></a>read a database from the disk:</h4>

<div class="highlight highlight-javascript"><pre><span class="pl-k">var</span> fs <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>fs<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> <span class="pl-c1">SQL</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>sql.js<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> filebuffer <span class="pl-k">=</span> fs.readFileSync(<span class="pl-s"><span class="pl-pds">'</span>test.sqlite<span class="pl-pds">'</span></span>);

<span class="pl-c">// Load the db</span>
<span class="pl-k">var</span> db <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SQL.Database</span>(filebuffer);</pre></div>

<h4><a id="user-content-write-a-database-to-the-disk" class="anchor" href="#write-a-database-to-the-disk" aria-hidden="true"><span class="octicon octicon-link"></span></a>write a database to the disk</h4>

<p>You need to convert the result of <code>db.export</code> to a buffer</p>

<div class="highlight highlight-javascript"><pre><span class="pl-k">var</span> fs <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>fs<span class="pl-pds">"</span></span>);
<span class="pl-c">// [...] (create the database)</span>
<span class="pl-k">var</span> data <span class="pl-k">=</span> db.export();
<span class="pl-k">var</span> buffer <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Buffer</span>(data);
fs.writeFileSync(<span class="pl-s"><span class="pl-pds">"</span>filename.sqlite<span class="pl-pds">"</span></span>, buffer);</pre></div>

<p>See : <a href="https://github.com/kripken/sql.js/blob/master/test/test_node_file.js">https://github.com/kripken/sql.js/blob/master/test/test_node_file.js</a></p>

<h3><a id="user-content-use-as-web-worker" class="anchor" href="#use-as-web-worker" aria-hidden="true"><span class="octicon octicon-link"></span></a>Use as web worker</h3>

<p>If you don't want to run CPU-intensive SQL queries in your main application thread,
you can use the <em>more limited</em> WebWorker API.</p>

<p>You will need to download <code>worker.sql.js</code></p>

<p>Example:</p>

<div class="highlight highlight-html"><pre><span class="pl-s1">&lt;<span class="pl-ent">script</span>&gt;</span>
<span class="pl-s1"><span class="pl-k">var</span> worker <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Worker</span>(<span class="pl-s"><span class="pl-pds">"</span>js/worker.sql.js<span class="pl-pds">"</span></span>); <span class="pl-c">// You can find worker.sql.js in this repo</span></span>
<span class="pl-s1"><span class="pl-c1">worker</span>.<span class="pl-en">onmessage</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</span>
<span class="pl-s1">    <span class="pl-en">console</span><span class="pl-c1">.log</span>(<span class="pl-s"><span class="pl-pds">"</span>Database opened<span class="pl-pds">"</span></span>);</span>
<span class="pl-s1">    <span class="pl-c1">worker</span>.<span class="pl-en">onmessage</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>){</span>
<span class="pl-s1">        <span class="pl-en">console</span><span class="pl-c1">.log</span>(<span class="pl-c1">event</span>.<span class="pl-c1">data</span>); <span class="pl-c">// The result of the query</span></span>
<span class="pl-s1">    };</span>
<span class="pl-s1">    worker.postMessage({</span>
<span class="pl-s1">        id<span class="pl-k">:</span> <span class="pl-c1">2</span>,</span>
<span class="pl-s1">        action<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>exec<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">        sql<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>SELECT * FROM test<span class="pl-pds">'</span></span></span>
<span class="pl-s1">    });</span>
<span class="pl-s1">};</span>
<span class="pl-s1"></span>
<span class="pl-s1"><span class="pl-c1">worker</span>.<span class="pl-en">onerror</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>) {<span class="pl-en">console</span><span class="pl-c1">.log</span>(<span class="pl-s"><span class="pl-pds">"</span>Worker error: <span class="pl-pds">"</span></span>, e)};</span>
<span class="pl-s1">worker.postMessage({</span>
<span class="pl-s1">    id<span class="pl-k">:</span><span class="pl-c1">1</span>,</span>
<span class="pl-s1">    action<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">'</span>open<span class="pl-pds">'</span></span>,</span>
<span class="pl-s1">    buffer<span class="pl-k">:</span>buf, <span class="pl-c">/*Optional. An ArrayBuffer representing an SQLite Database file*/</span></span>
<span class="pl-s1">});</span>
<span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></pre></div>

<p>See : <a href="https://github.com/kripken/sql.js/blob/master/test/test_worker.js">https://github.com/kripken/sql.js/blob/master/test/test_worker.js</a></p>

<h2><a id="user-content-documentation" class="anchor" href="#documentation" aria-hidden="true"><span class="octicon octicon-link"></span></a>Documentation</h2>

<p>The API is fully documented here : <a href="http://kripken.github.io/sql.js/documentation/">http://kripken.github.io/sql.js/documentation/</a></p>

<h2><a id="user-content-downloads" class="anchor" href="#downloads" aria-hidden="true"><span class="octicon octicon-link"></span></a>Downloads</h2>

<ul>
<li>You can download <code>sql.js</code> here : <a href="https://raw.githubusercontent.com/kripken/sql.js/master/js/sql.js">https://raw.githubusercontent.com/kripken/sql.js/master/js/sql.js</a></li>
<li>And the Web Worker version: <a href="https://raw.githubusercontent.com/kripken/sql.js/master/js/worker.sql.js">https://raw.githubusercontent.com/kripken/sql.js/master/js/worker.sql.js</a></li>
</ul>

<h2><a id="user-content-differences-from-the-original-sqljs" class="anchor" href="#differences-from-the-original-sqljs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Differences from the original sql.js</h2>

<ul>
<li>Support for BLOBs</li>
<li>Support for prepared statements</li>
<li>Cleaner API</li>
<li>More recent version of SQLite (3.8.4)</li>
<li>Compiled to asm.js (should be faster, at least on firefox)</li>
<li>Changed API. Results now have the form <code>[{'columns':[], values:[]}]</code></li>
<li>Improved GUI of the demo. It now has :

<ul>
<li>syntax highlighting</li>
<li>nice HTML tables to display results</li>
<li>ability to load and save sqlite database files</li>
</ul></li>
</ul>

<h2><a id="user-content-related" class="anchor" href="#related" aria-hidden="true"><span class="octicon octicon-link"></span></a>Related</h2>

<ul>
<li><a href="http://kripken.github.io/sql.js/GUI/">In-Browser/Client-Side Demo</a></li>
</ul>
</article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.08369s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-3241a40a58a82e21daef3dd3cdca01bde189158793c1b6f9193fff2b5293cd1d.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-d3ef45e52a74e2511c31a0051d5dfd10b60b12a8b8a738ead962c35e11dbcc1f.js"></script>
      
      
  </body>
</html>

