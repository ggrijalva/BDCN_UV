



<!DOCTYPE html>
<html lang="en" class=" is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-298818692f75de57d67115ca5a0c1f983d1d5ad302774216c297495f46f0a3da.css" integrity="sha256-KYgYaS913lfWcRXKWgwfmD0dWtMCd0IWwpdJX0bwo9o=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-5cdfa79e1c4beb2f5bf44e460eab049867751ad7d5bc0c37f2faab8233768bf0.css" integrity="sha256-XN+nnhxL6y9b9E5GDqsEmGd1GtfVvAw38vqrgjN2i/A=" media="all" rel="stylesheet" />
    
    
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-73b3dae8eb441c98982c7306f0e59decca409e87188e07bc1a961b8cea511aab.css" integrity="sha256-c7Pa6OtEHJiYLHMG8OWd7MpAnocYjge8GpYbjOpRGqs=" media="all" rel="stylesheet" />
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>GitHub - mde/timezone-js: Timezone-enabled JavaScript Date object. Uses Olson zoneinfo files for timezone data.</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars1.githubusercontent.com/u/757?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mde/timezone-js" name="twitter:title" /><meta content="timezone-js - Timezone-enabled JavaScript Date object. Uses Olson zoneinfo files for timezone data." name="twitter:description" />
      <meta content="https://avatars1.githubusercontent.com/u/757?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="mde/timezone-js" property="og:title" /><meta content="https://github.com/mde/timezone-js" property="og:url" /><meta content="timezone-js - Timezone-enabled JavaScript Date object. Uses Olson zoneinfo files for timezone data." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    
    <meta name="request-id" content="5E77:A1F4:3093EB0:4E40422:588FBC3A" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="5E77:A1F4:3093EB0:4E40422:588FBC3A" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="YjliYjcyYTUzNGFjM2JiNTQ1ZjRkNDNiN2RmZTQzYzQxYmExOTY1ZjNkNTYzZGE0OTY3YmRjN2FkMmQ1NzY5Y3x7InJlbW90ZV9hZGRyZXNzIjoiMjAwLjc3LjI0OS4xNTYiLCJyZXF1ZXN0X2lkIjoiNUU3NzpBMUY0OjMwOTNFQjA6NEU0MDQyMjo1ODhGQkMzQSIsInRpbWVzdGFtcCI6MTQ4NTgxNDg0MywiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="d4aaba950dfd23e6f9b0e4878f607776ca480e2d">

    <meta http-equiv="x-pjax-version" content="171691120cc202d9d7a038c068dc9712">
    

      
  <meta name="description" content="timezone-js - Timezone-enabled JavaScript Date object. Uses Olson zoneinfo files for timezone data.">
  <meta name="go-import" content="github.com/mde/timezone-js git https://github.com/mde/timezone-js.git">

  <meta content="757" name="octolytics-dimension-user_id" /><meta content="mde" name="octolytics-dimension-user_login" /><meta content="583762" name="octolytics-dimension-repository_id" /><meta content="mde/timezone-js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="583762" name="octolytics-dimension-repository_network_root_id" /><meta content="mde/timezone-js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mde/timezone-js/commits/master.atom" rel="alternate" title="Recent Commits to timezone-js:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/mde/timezone-js" data-pjax-transient>
  </head>


  <body class="logged-out  env-production linux vis-public">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



          <header class="site-header js-details-container Details alt-body-font" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav site-header-nav-main">
        <a href="/personal" class="js-selected-navigation-item nav-item nav-item-personal" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item nav-item-opensource" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item nav-item-business" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/partners /business/features /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item nav-item-explore" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>      </nav>

      <div class="site-header-actions">
            <a class="btn btn-primary site-header-actions-btn" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
          <a class="btn site-header-actions-btn mr-1" href="/login?return_to=%2Fmde%2Ftimezone-js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
      </div>

        <nav class="site-header-nav site-header-nav-secondary mr-md-3">
          <a class="nav-item" href="/pricing">Pricing</a>
          <a class="nav-item" href="/blog">Blog</a>
          <a class="nav-item" href="https://help.github.com">Support</a>
          <a class="nav-item header-search-link" href="https://github.com/search">Search GitHub</a>
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/mde/timezone-js/search" class="js-site-search-form" data-scoped-search-url="/mde/timezone-js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>

        </nav>
    </div>
  </div>
</header>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fmde%2Ftimezone-js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/mde/timezone-js/watchers"
     aria-label="34 users are watching this repository">
    34
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmde%2Ftimezone-js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/mde/timezone-js/stargazers"
      aria-label="766 users starred this repository">
      766
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmde%2Ftimezone-js"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/mde/timezone-js/network" class="social-count"
       aria-label="173 users forked this repository">
      173
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/mde" class="url fn" rel="author">mde</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/mde/timezone-js" data-pjax="#js-repo-pjax-container">timezone-js</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/mde/timezone-js" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mde/timezone-js" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/mde/timezone-js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /mde/timezone-js/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">40</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/mde/timezone-js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /mde/timezone-js/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">4</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/mde/timezone-js/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /mde/timezone-js/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/mde/timezone-js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /mde/timezone-js/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/mde/timezone-js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /mde/timezone-js/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
<div class="js-repo-meta-container">
  <div class="repository-meta  mb-3 js-repo-meta-edit js-details-container">
    <div class="repository-meta-content col-11 mb-1">
          <span class="col-11 text-gray-dark mr-2" itemprop="about">
            Timezone-enabled JavaScript Date object. Uses Olson zoneinfo files for timezone data.
          </span>
    </div>

  </div>

</div>


<div class="overall-summary overall-summary-bottomless">
  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/mde/timezone-js/commits/master">
            <svg aria-hidden="true" class="octicon octicon-history" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"/></svg>
            <span class="num text-emphasized">
              273
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/mde/timezone-js/branches">
          <svg aria-hidden="true" class="octicon octicon-git-branch" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
          <span class="num text-emphasized">
            2
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/mde/timezone-js/releases">
          <svg aria-hidden="true" class="octicon octicon-tag" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"/></svg>
          <span class="num text-emphasized">
            11
          </span>
          releases
        </a>
      </li>

      <li>
          <include-fragment src="/mde/timezone-js/contributors_size">
            <a href="/mde/timezone-js/graphs/contributors">
              <svg aria-hidden="true" class="octicon octicon-organization" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"/></svg>
              <span class="num text-emphasized"></span>
              Fetching contributors
            </a>
</include-fragment>      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/mde/timezone-js/search?l=javascript"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">98.2%</span>
              </a>
          </li>
          <li>
              <a href="/mde/timezone-js/search?l=ruby"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#701516;"></span>
                <span class="lang">Ruby</span>
                <span class="percent">1.8%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details" data-ga-click="Repository, language bar stats toggle, location:repo overview">
    <span class="language-color" aria-label="JavaScript 98.2%" style="width:98.2%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="Ruby 1.8%" style="width:1.8%; background-color:#701516;" itemprop="keywords">Ruby</span>
  </div>


<div class="file-navigation in-mid-page">

    <div class="select-menu get-repo-select-menu js-menu-container float-right select-menu-modal-right">
  <button class="btn btn-sm btn-primary select-menu-button js-menu-target"
    title="Clone or download this repository"
    type="button" aria-label="Clone or download this repository" tabindex="0" aria-haspopup="true">
    <span>Clone or download</span>
  </button>

  <div class="select-menu-modal-holder dropdown-menu-content js-menu-content" aria-hidden="true">
    <div class="get-repo-modal dropdown-menu dropdown-menu-sw pb-0 js-toggler-container ">
      <div class="clone-options https-clone-options">

        <h4 class="mb-1">
          Clone with HTTPS
          <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
            <svg aria-hidden="true" class="octicon octicon-question" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"/></svg>
          </a>
        </h4>
        <p class="mb-2 get-repo-decription-text">
          Use Git or checkout with SVN using the web URL.
        </p>

        <div class="input-group js-zeroclipboard-container">
  <input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="https://github.com/mde/timezone-js.git" aria-label="Clone this repository at https://github.com/mde/timezone-js.git" readonly>
  <div class="input-group-button">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg></button>
  </div>
</div>

      </div>


      <div class="mt-2">
        
<a href="/mde/timezone-js/archive/master.zip"
   class="btn btn-outline get-repo-btn
"
   rel="nofollow"
   data-ga-click="Repository, download zip, location:repo overview">
  Download ZIP
</a>

      </div>
    </div>
  </div>
</div>


  <div class="BtnGroup float-right">

    <a href="/mde/timezone-js/find/master"
      class="btn btn-sm empty-icon float-right BtnGroup-item"
      data-pjax
      data-hotkey="t"
      data-ga-click="Repository, find file, location:repo overview">
      Find file
    </a>
  </div>

  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/mde/timezone-js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/mde/timezone-js/tree/v0.4"
               data-name="v0.4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v0.4
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.13"
              data-name="v0.4.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.13">
                v0.4.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.12"
              data-name="v0.4.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.12">
                v0.4.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.11"
              data-name="v0.4.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.11">
                v0.4.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.10"
              data-name="v0.4.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.10">
                v0.4.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.9"
              data-name="v0.4.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.9">
                v0.4.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.7"
              data-name="v0.4.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.7">
                v0.4.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.6"
              data-name="v0.4.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.6">
                v0.4.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.5"
              data-name="v0.4.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.5">
                v0.4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.4"
              data-name="v0.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.4">
                v0.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.3"
              data-name="v0.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.3">
                v0.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/mde/timezone-js/tree/v0.4.1"
              data-name="v0.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.1">
                v0.4.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


      <button type="button" class="btn btn-sm disabled tooltipped tooltipped-n new-pull-request-btn" aria-label="You must be signed in to create a pull request">
        New pull request
      </button>

  <div class="breadcrumb">
    
  </div>
</div>





  <div class="commit-tease js-details-container">
    <span class="float-right">
      Latest commit
      <a class="commit-tease-sha" href="/mde/timezone-js/commit/10b802d87db693950b24ff1bb2faa94de92ed8e8" data-pjax>
        10b802d
      </a>
      <span itemprop="dateModified"><relative-time datetime="2016-11-03T18:55:58Z">Nov 3, 2016</relative-time></span>
    </span>


    <span class="commit-author-section">
      <img alt="@mde" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/757?v=3&amp;s=40" width="20" />
      <a href="/mde" class="user-mention" rel="author">mde</a>
        committed on <strong>GitHub</strong>
    </span>

        <a href="/mde/timezone-js/commit/10b802d87db693950b24ff1bb2faa94de92ed8e8" class="message" data-pjax="true" title="Merge pull request #180 from rogierschouten/master

Fix for issue #179">Merge pull request</a> <a href="https://github.com/mde/timezone-js/pull/180" class="issue-link js-issue-link" data-url="https://github.com/mde/timezone-js/issues/180" data-id="187142925" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#180</a> <a href="/mde/timezone-js/commit/10b802d87db693950b24ff1bb2faa94de92ed8e8" class="message" data-pjax="true" title="Merge pull request #180 from rogierschouten/master

Fix for issue #179">from rogierschouten/master</a>
          <span class="hidden-text-expander inline">
            <button type="button" class="ellipsis-expander js-details-target">&hellip;</button>
          </span>
    </span>

      <div class="commit-desc"><pre class="text-small">Fix for issue <a href="https://github.com/mde/timezone-js/issues/179" class="issue-link js-issue-link" data-url="https://github.com/mde/timezone-js/issues/179" data-id="186538431" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#179</a></pre></div>
  </div>


<div class="file-wrap">

  <a href="/mde/timezone-js/tree/10b802d87db693950b24ff1bb2faa94de92ed8e8" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mde/timezone-js/tree/master/benchmarks" class="js-navigation-open" id="224b0b28ab56096577ca5b135279d8e4-b641b31c02ad97d13f8a1c95dc8abe64574a78ab" title="benchmarks">benchmarks</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mde/timezone-js/commit/60055b12682c423b87acdd7b482bffdf87db1e9c" class="message" data-pjax="true" title="resolve a bunch of issues

#136 separate out benchmarks
#134 invoke jasmine-node locally">resolve a bunch of issues</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-04-02T01:45:45Z">Apr 1, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mde/timezone-js/tree/master/spec" class="js-navigation-open" id="b979c2934ac0b4ba3f08dabfdd1b2299-9a3cf854a1d49e2813643737c67c94f38c8c0143" title="spec">spec</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mde/timezone-js/commit/d9784035a37117e63259678ef586ad941c499ab1" class="message" data-pjax="true" title="Added spec for loading linked zones from the backward file">Added spec for loading linked zones from the backward file</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-12-17T16:53:30Z">Dec 17, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mde/timezone-js/tree/master/src" class="js-navigation-open" id="25d902c24283ab8cfbac54dfa101ad31-6b1f65e4a0186038c7efa17212d43eef401cbebf" title="src">src</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mde/timezone-js/commit/cf0a8e0b838312a0fe83b64bb8832afe78bca5da" class="message" data-pjax="true" title="Load an unload zone file linked from the backward file">Load an unload zone file linked from the backward file</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-12-16T23:49:41Z">Dec 16, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mde/timezone-js/blob/master/.gitignore" class="js-navigation-open" id="a084b794bc0759e7a6b77810e01874f2-c020e48f80958bbff4af805c8c1070dfdc69b7d2" title=".gitignore">.gitignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mde/timezone-js/commit/efb87d8e7a5e544f6aecd76eb852586e53f75a6e" class="message" data-pjax="true" title="some tweaks">some tweaks</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2013-03-01T03:21:18Z">Feb 28, 2013</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mde/timezone-js/blob/master/.jshintrc" class="js-navigation-open" id="4d5aa81bf4f18104bb6ea53a8b5d1f43-8a0ad4947856a776e906f3d9f55117159900026c" title=".jshintrc">.jshintrc</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mde/timezone-js/commit/ede474315b32ba453011aea997cfecd67a5974ef" class="message" data-pjax="true" title="cleanup some jshint stuff">cleanup some jshint stuff</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-04-02T01:58:09Z">Apr 1, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mde/timezone-js/blob/master/.travis.yml" class="js-navigation-open" id="354f30a63fb0907d4ad57269548329e3-f8eaedd41ec589ba3a9d9ae2284fd058107cff6c" title=".travis.yml">.travis.yml</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mde/timezone-js/commit/90d4396477962c50f8af6f33f99f430a31c62503" class="message" data-pjax="true" title="Quote NodeJS version strings">Quote NodeJS version strings</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-01-01T06:06:02Z">Jan 1, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mde/timezone-js/blob/master/Jakefile" class="js-navigation-open" id="b1cc3465b61577db8f93a00a469e9413-083cd5a18d7522e6ded8df09022d01bafded1116" title="Jakefile">Jakefile</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mde/timezone-js/commit/af4bac34ac4a8de8d111acc552a8859d80f19d05" class="message" data-pjax="true" title="Update outdated Jake syntax">Update outdated Jake syntax</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-09-07T17:51:45Z">Sep 7, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mde/timezone-js/blob/master/README.md" class="js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-60fcd0074524a5061a3078f3c32b44ef9598c306" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mde/timezone-js/commit/620b1821b8a5e18a0a1bb974258c0d74945152f8" class="message" data-pjax="true" title="Undo unintentional changes to readme.md">Undo unintentional changes to readme.md</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-11-03T17:49:33Z">Nov 3, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mde/timezone-js/blob/master/bower.json" class="js-navigation-open" id="0a08a7565aba4405282251491979bb6b-83d31168c387c49f063b102a09305ab6c1a1a51a" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mde/timezone-js/commit/16f22398cfa7ef8b1ccbf80a3ebe9aa5c7e64453" class="message" data-pjax="true" title="Version 0.4.11">Version 0.4.11</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-05-21T22:20:44Z">May 21, 2014</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/mde/timezone-js/blob/master/package.json" class="js-navigation-open" id="b9cfc7f2cdf78a7f4b91a753d10865a2-4090871bc4a262a9e4ef2c36dd97def75549b66b" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/mde/timezone-js/commit/16f22398cfa7ef8b1ccbf80a3ebe9aa5c7e64453" class="message" data-pjax="true" title="Version 0.4.11">Version 0.4.11</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2014-05-21T22:20:44Z">May 21, 2014</time-ago></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>



  <div id="readme" class="readme boxed-group clearfix announce instapaper_body md">
    <h3>
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      README.md
    </h3>

      <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-timezonejsdate" class="anchor" href="#timezonejsdate" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TimezoneJS.Date</h1>

<p><a href="https://secure.travis-ci.org/mde/timezone-js"><img src="https://camo.githubusercontent.com/d3b6cd14998aa807e2a011bb93cb8300c9aa5868/68747470733a2f2f7365637572652e7472617669732d63692e6f72672f6d64652f74696d657a6f6e652d6a732e706e67" alt="Build Status" data-canonical-src="https://secure.travis-ci.org/mde/timezone-js.png" style="max-width:100%;"></a></p>

<p>A timezone-enabled, drop-in replacement for the stock JavaScript Date. The <code>timezoneJS.Date</code> object is API-compatible with JS Date, with the same getter and setter methods -- it should work fine in any code that works with normal JavaScript Dates.</p>

<p><a href="http://groups.google.com/group/timezone-js">Mailing list</a></p>

<h2><a id="user-content-overview" class="anchor" href="#overview" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>

<p>The <code>timezoneJS.Date</code> object gives you full-blown timezone support, independent from the timezone set on the end-user's machine running the browser. It uses the Olson zoneinfo files for its timezone data.</p>

<p>The constructor function and setter methods use proxy JavaScript Date objects behind the scenes, so you can use strings like '10/22/2006' with the constructor. You also get the same sensible wraparound behavior with numeric parameters (like setting a value of 14 for the month wraps around to the next March).</p>

<p>The other significant difference from the built-in JavaScript Date is that <code>timezoneJS.Date</code> also has named properties that store the values of year, month, date, etc., so it can be directly serialized to JSON and used for data transfer.</p>

<h2><a id="user-content-setup" class="anchor" href="#setup" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h2>

<p>This section shows the most common way of setting up timezone-js. In the 'Customizing' section below you can find alternative approaches.</p>

<p>First you'll need to include the code on your page. Both <code>timezoneJS.Date</code>, and the supporting code it needs in <code>timezoneJS.timezone</code> are bundled in the <code>date.js</code> file in <code>src</code> directory. Include the code on your page with a normal JavaScript script include, like so:</p>

<pre><code>&lt;script type="text/javascript" src="/js/timezone-js/src/date.js"&gt;
</code></pre>

<p>Next you'll need the Olson time zone files -- <code>timezoneJS.Date</code> uses the raw Olson data to calculate timezone offsets. The Olson region files are simple, structured text data, which download quickly and parse easily. (They also compress to a very small size.)</p>

<p>Here is an example of how to get the Olson time zone files:</p>

<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span>#!/bin/bash</span>

<span class="pl-c"><span class="pl-c">#</span> NOTE: Run from your webroot</span>

<span class="pl-c"><span class="pl-c">#</span> Create the /tz directory</span>
mkdir tz

<span class="pl-c"><span class="pl-c">#</span> Download the latest Olson files</span>
curl ftp://ftp.iana.org/tz/tzdata-latest.tar.gz -o tz/tzdata-latest.tar.gz

<span class="pl-c"><span class="pl-c">#</span> Expand the files</span>
tar -xvzf tz/tzdata-latest.tar.gz -C tz

<span class="pl-c"><span class="pl-c">#</span> Optionally, you can remove the downloaded archives.</span>
rm tz/tzdata-latest.tar.gz</pre></div>

<p>Then you'll need to make the files available to the <code>timezoneJS.timezone</code> code, and initialize the code to parse your default region. (This will be North America if you don't change it). No sense in downloading and parsing timezone data for the entire world if you're not going to be using it.</p>

<p>Put your directory of Olson files somewhere under your Web server root, and point <code>timezoneJS.timezone.zoneFileBasePath</code> to it. Then call the init function. Your code will look something like this:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">timezoneJS</span>.<span class="pl-smi">timezone</span>.<span class="pl-smi">zoneFileBasePath</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>/tz<span class="pl-pds">'</span></span>;
<span class="pl-smi">timezoneJS</span>.<span class="pl-smi">timezone</span>.<span class="pl-en">init</span>({ callback<span class="pl-k">:</span> cb });</pre></div>

<p>If you use <code>timezoneJS.Date</code> with <code>Fleegix.js</code>, <code>jQuery</code> or <code>jQuery</code>-compatible libraries (like <code>Zepto.js</code>), there's nothing else you need to do -- timezones for North America will be loaded and parsed on initial page load, and others will be downloaded and parsed on-the-fly, as needed. If you want to use this code with some other JavaScript toolkit, you'll need to overwrite your own transport method by setting <code>timezoneJS.timezone.transport = someFunction</code> method. Take a look at <code>test-utils.js</code> in <code>spec</code> for an example.</p>

<p><strong>NOTE</strong>: By default <code>init()</code> is async so you'll need to specify a callback function such as <code>init({ callback: cb })</code>. Otherwise set <code>init({ async: false })</code> to turn off async.</p>

<h2><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>

<p>The <code>timezoneJS.Date</code> constructor is compatible to the normal JavaScript Date constructor, but additional allows to pass an optional <code>tz</code> (timezone). In the following cases the passed date/time is unambiguous:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">timezoneJS</span>.<span class="pl-en">Date</span>(millis, [tz])
<span class="pl-smi">timezoneJS</span>.<span class="pl-en">Date</span>(<span class="pl-c1">Date</span>, [tz])
<span class="pl-smi">timezoneJS</span>.<span class="pl-en">Date</span>(dt_str_tz, [tz])</pre></div>

<p><code>dt_str_tz</code> is a date string containing timezone information, i.e. containing <code>Z</code>, <code>T</code> or a timezone offset matching the regular expression <code>/[+-][0-9]{4}/</code> (e.g. <code>+0200</code>). The <a href="http://dygraphs.com/date-formats.html">one-stop shop for cross-browser JavaScript Date parsing behavior</a> provides detailed information about JavaScript date formats.</p>

<p>In the following cases the date is assumed to be a date in timezone <code>tz</code> or a locale date if <code>tz</code> is not provided:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">timezoneJS</span>.<span class="pl-en">Date</span>(year, mon, day, [hour], [min], [second], [tz])
<span class="pl-smi">timezoneJS</span>.<span class="pl-en">Date</span>(dt_str, [tz])</pre></div>

<p><code>dt_str</code> is a date string containing no timezone information.</p>

<h3><a id="user-content-examples" class="anchor" href="#examples" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h3>

<p>Create a <code>timezoneJS.Date</code> the same way as a normal JavaScript Date, but append a timezone parameter on the end:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> dt <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">timezoneJS.Date</span>(<span class="pl-s"><span class="pl-pds">'</span>10/31/2008<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>America/New_York<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> dt <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">timezoneJS.Date</span>(<span class="pl-c1">2008</span>, <span class="pl-c1">9</span>, <span class="pl-c1">31</span>, <span class="pl-c1">11</span>, <span class="pl-c1">45</span>, <span class="pl-s"><span class="pl-pds">'</span>America/Los_Angeles<span class="pl-pds">'</span></span>);</pre></div>

<p>Naturally enough, the <code>getTimezoneOffset</code> method returns the timezone offset in minutes based on the timezone you set for the date.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Pre-DST-leap</span>
<span class="pl-k">var</span> dt <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">timezoneJS.Date</span>(<span class="pl-c1">2006</span>, <span class="pl-c1">9</span>, <span class="pl-c1">29</span>, <span class="pl-c1">1</span>, <span class="pl-c1">59</span>, <span class="pl-s"><span class="pl-pds">'</span>America/Los_Angeles<span class="pl-pds">'</span></span>);
<span class="pl-smi">dt</span>.<span class="pl-c1">getTimezoneOffset</span>(); <span class="pl-k">=&gt;</span> <span class="pl-c1">420</span>
<span class="pl-c"><span class="pl-c">//</span> Post-DST-leap</span>
<span class="pl-k">var</span> dt <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">timezoneJS.Date</span>(<span class="pl-c1">2006</span>, <span class="pl-c1">9</span>, <span class="pl-c1">29</span>, <span class="pl-c1">2</span>, <span class="pl-c1">0</span>, <span class="pl-s"><span class="pl-pds">'</span>America/Los_Angeles<span class="pl-pds">'</span></span>);
<span class="pl-smi">dt</span>.<span class="pl-c1">getTimezoneOffset</span>(); <span class="pl-k">=&gt;</span> <span class="pl-c1">480</span></pre></div>

<p>Just as you'd expect, the <code>getTime</code> method gives you the UTC timestamp for the given date:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> dtA <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">timezoneJS.Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">9</span>, <span class="pl-c1">31</span>, <span class="pl-c1">10</span>, <span class="pl-c1">30</span>, <span class="pl-s"><span class="pl-pds">'</span>America/Los_Angeles<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> dtB <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">timezoneJS.Date</span>(<span class="pl-c1">2007</span>, <span class="pl-c1">9</span>, <span class="pl-c1">31</span>, <span class="pl-c1">12</span>, <span class="pl-c1">30</span>, <span class="pl-s"><span class="pl-pds">'</span>America/Chicago<span class="pl-pds">'</span></span>);
<span class="pl-c"><span class="pl-c">//</span> Same timestamp</span>
<span class="pl-smi">dtA</span>.<span class="pl-c1">getTime</span>(); <span class="pl-k">=&gt;</span> <span class="pl-c1">1193855400000</span>
<span class="pl-smi">dtB</span>.<span class="pl-c1">getTime</span>(); <span class="pl-k">=&gt;</span> <span class="pl-c1">1193855400000</span></pre></div>

<p>You can set (or reset) the timezone using the <code>setTimezone</code> method:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> dt <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">timezoneJS.Date</span>(<span class="pl-s"><span class="pl-pds">'</span>10/31/2006<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>America/Juneau<span class="pl-pds">'</span></span>);
<span class="pl-smi">dt</span>.<span class="pl-c1">getTimezoneOffset</span>(); <span class="pl-k">=&gt;</span> <span class="pl-c1">540</span>
<span class="pl-smi">dt</span>.<span class="pl-en">setTimezone</span>(<span class="pl-s"><span class="pl-pds">'</span>America/Chicago<span class="pl-pds">'</span></span>);
<span class="pl-smi">dt</span>.<span class="pl-c1">getTimezoneOffset</span>(); <span class="pl-k">=&gt;</span> <span class="pl-c1">300</span>
<span class="pl-smi">dt</span>.<span class="pl-en">setTimezone</span>(<span class="pl-s"><span class="pl-pds">'</span>Pacific/Honolulu<span class="pl-pds">'</span></span>);
<span class="pl-smi">dt</span>.<span class="pl-c1">getTimezoneOffset</span>(); <span class="pl-k">=&gt;</span> <span class="pl-c1">600</span></pre></div>

<p>The <code>getTimezone</code> method tells you what timezone a <code>timezoneJS.Date</code> is set to:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> dt <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">timezoneJS.Date</span>(<span class="pl-s"><span class="pl-pds">'</span>12/27/2010<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>Asia/Tokyo<span class="pl-pds">'</span></span>);
<span class="pl-smi">dt</span>.<span class="pl-en">getTimezone</span>(); <span class="pl-k">=&gt;</span> <span class="pl-s"><span class="pl-pds">'</span>Asia/Tokyo<span class="pl-pds">'</span></span></pre></div>

<p>You can use <code>getTimezoneAbbreviation</code> method to get timezone abbreviation:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> dt <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">timezoneJS.Date</span>(<span class="pl-s"><span class="pl-pds">'</span>10/31/2008<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>America/New_York<span class="pl-pds">'</span></span>);
<span class="pl-smi">dt</span>.<span class="pl-en">getTimezoneAbbreviation</span>(); <span class="pl-k">=&gt;</span> <span class="pl-s"><span class="pl-pds">'</span>EDT<span class="pl-pds">'</span></span></pre></div>

<h2><a id="user-content-customizing" class="anchor" href="#customizing" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Customizing</h2>

<p>If you don't change it, the timezone region that loads on
 initialization is North America (the Olson 'northamerica' file). To change that to another reqion, set <code>timezoneJS.timezone.defaultZoneFile</code> to your desired region, like so:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">timezoneJS</span>.<span class="pl-smi">timezone</span>.<span class="pl-smi">zoneFileBasePath</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>/tz<span class="pl-pds">'</span></span>;
<span class="pl-smi">timezoneJS</span>.<span class="pl-smi">timezone</span>.<span class="pl-smi">defaultZoneFile</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>asia<span class="pl-pds">'</span></span>;
<span class="pl-smi">timezoneJS</span>.<span class="pl-smi">timezone</span>.<span class="pl-en">init</span>();</pre></div>

<p>If you want to preload multiple regions, set it to an array, like this:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">timezoneJS</span>.<span class="pl-smi">timezone</span>.<span class="pl-smi">zoneFileBasePath</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>/tz<span class="pl-pds">'</span></span>;
<span class="pl-smi">timezoneJS</span>.<span class="pl-smi">timezone</span>.<span class="pl-smi">defaultZoneFile</span> <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">'</span>asia<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>backward<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>northamerica<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>southamerica<span class="pl-pds">'</span></span>];
<span class="pl-smi">timezoneJS</span>.<span class="pl-smi">timezone</span>.<span class="pl-en">init</span>();</pre></div>

<p>By default the <code>timezoneJS.Date</code> timezone code lazy-loads the timezone data files, pulling them down and parsing them only as needed.</p>

<p>For example, if you go with the out-of-the-box setup, you'll have all the North American timezones pre-loaded -- but if you were to add a date with a timezone of 'Asia/Seoul,' it would grab the 'asia' Olson file and parse it before calculating the timezone offset for that date.</p>

<p>You can change this behavior by changing the value of <code>timezoneJS.timezone.loadingScheme</code>. The three possible values are:</p>

<ol>
<li><code>timezoneJS.timezone.loadingSchemes.PRELOAD_ALL</code> -- this will preload all the timezone data files for all reqions up front. This setting would only make sense if you know your users will be using timezones from all around the world, and you prefer taking the up-front load time to the small on-the-fly lag from lazy loading.</li>
<li><code>timezoneJS.timezone.loadingSchemes.LAZY_LOAD</code> -- the default. Loads some amount of data up front, then lazy-loads any other needed timezone data as needed.</li>
<li><code>timezoneJS.timezone.loadingSchemes.MANUAL_LOAD</code> -- Preloads no data, and does no lazy loading. Use this setting if you're loading pre-parsed JSON timezone data.</li>
</ol>

<h2><a id="user-content-ready-made-tzdata-npm-modules" class="anchor" href="#ready-made-tzdata-npm-modules" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ready-made tzdata NPM modules</h2>

<p>If you use NPM, and you want to load the time zone data synchronously, you can use one or more of the tzdata* NPM modules. That way, you do not have to download the IANA zone files manually, you can just run <code>npm update</code> to get the latest data.</p>

<p>The <a href="https://www.npmjs.com/package/tzdata">tzdata</a> module contains all time zones. There are other modules, e.g. <a href="https://www.npmjs.com/package/tzdata-northamerica">tzdata-northamerica</a> that contain subsets of the zones.</p>

<p>First, install timezone-js and one or more of the tzdata modules.</p>

<div class="highlight highlight-source-shell"><pre>npm install timezone-js tzdata</pre></div>

<p>Then, initialize timezone-js with the data:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> timezoneJS <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>timezone-js<span class="pl-pds">"</span></span>);
<span class="pl-k">var</span> tzdata <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>tzdata<span class="pl-pds">"</span></span>);

<span class="pl-k">var</span> _tz <span class="pl-k">=</span> <span class="pl-smi">timezoneJS</span>.<span class="pl-smi">timezone</span>;
<span class="pl-smi">_tz</span>.<span class="pl-smi">loadingScheme</span> <span class="pl-k">=</span> <span class="pl-smi">_tz</span>.<span class="pl-smi">loadingSchemes</span>.<span class="pl-c1">MANUAL_LOAD</span>;
<span class="pl-smi">_tz</span>.<span class="pl-en">loadZoneDataFromObject</span>(tzdata);

<span class="pl-k">var</span> dt <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">timezoneJS.Date</span>(<span class="pl-c1">2006</span>, <span class="pl-c1">9</span>, <span class="pl-c1">29</span>, <span class="pl-c1">1</span>, <span class="pl-c1">59</span>, <span class="pl-s"><span class="pl-pds">'</span>America/Los_Angeles<span class="pl-pds">'</span></span>);</pre></div>

<h2><a id="user-content-pre-parsed-json-data" class="anchor" href="#pre-parsed-json-data" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pre-Parsed JSON Data</h2>

<p>If you know beforehand what specific cities your users are going to be using, you can reduce load times specifically by creating a pre-parsed JSON data file containing only the timezone info for those specific cities.</p>

<p>The src directory contains 2 command-line JavaScript scripts that can generate this kind of JSON data:</p>

<ul>
<li><code>node-preparse.js</code>: Uses Node to preparse and populate data.</li>
<li><code>preparse.js</code>: This script requires the Rhino (Java) JavaScript engine to run, since the stock SpiderMonkey (C) engine doesn't come with file I/O capabilities.</li>
</ul>

<p>Use the script like this:</p>

<div class="highlight highlight-source-shell"><pre>rhino preparse.js zoneFileDirectory [exemplarCities] <span class="pl-k">&gt;</span> outputfile.json</pre></div>

<p>Or:</p>

<div class="highlight highlight-source-shell"><pre>node node-preparse.js zoneFileDirectory [exemplarCities] <span class="pl-k">&gt;</span> outputfile.json</pre></div>

<p>The first parameter is the directory where the script can find the Olson zoneinfo files. The second (optional) param should be a comma-delimited list of timzeone cities to create the JSON data for. If that parameter isn't passed, the script will generate the JSON data for all the files.</p>

<div class="highlight highlight-source-shell"><pre>rhino preparse.js olson_files \
<span class="pl-s"><span class="pl-pds">"</span>Asia/Tokyo, America/New_York, Europe/London<span class="pl-pds">"</span></span> \
<span class="pl-k">&gt;</span> major_cities.json

rhino preparse.js olson_files <span class="pl-k">&gt;</span> all_cities.json</pre></div>

<p>Or:</p>

<div class="highlight highlight-source-shell"><pre>node node-preparse.js olson_files \
<span class="pl-s"><span class="pl-pds">"</span>Asia/Tokyo, America/New_York, Europe/London<span class="pl-pds">"</span></span> \
<span class="pl-k">&gt;</span> major_cities.json

node node-preparse.js olson_files <span class="pl-k">&gt;</span> all_cities.json</pre></div>

<p>Once you have your file of JSON data, set your loading scheme to <code>timezoneJS.timezone.loadingSchemes.MANUAL_LOAD</code>, and load the JSON data with <code>loadZoneJSONData</code>, like this:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> _tz <span class="pl-k">=</span> <span class="pl-smi">timezoneJS</span>.<span class="pl-smi">timezone</span>;
<span class="pl-smi">_tz</span>.<span class="pl-smi">loadingScheme</span> <span class="pl-k">=</span> <span class="pl-smi">_tz</span>.<span class="pl-smi">loadingSchemes</span>.<span class="pl-c1">MANUAL_LOAD</span>;
<span class="pl-smi">_tz</span>.<span class="pl-en">loadZoneJSONData</span>(<span class="pl-s"><span class="pl-pds">'</span>/major_cities.json<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>);</pre></div>

<p>Since the limited set of data will be much smaller than any of the zoneinfo files, and the JSON data is deserialized with <code>eval</code> or <code>JSON.parse</code>, this method is significantly faster than the default setup. However, it only works if you know beforehand exactly what timezones you want to use.</p>

<h2><a id="user-content-compressing" class="anchor" href="#compressing" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Compressing</h2>

<p>The Olson timezone data files are simple, space- and linefeed-delimited data. The abundance of whitespace means they compress very, very well.</p>

<p>If you plan to use <code>timezoneJS.Date</code> in a production Web app, it's highly recommended that you first strip the copious comments found in every Olson file, and serve compressed versions of the files to all browsers that can handle it. <strong>(Note that IE6 reports itself as able to work with gzipped data, but has numerous problems with it.)</strong></p>

<p>Just to give you an idea of the difference -- merely stripping out the comments from the 'northamerica' file reduces its size by two-thirds -- from 103K to 32K. Gzipping the stripped file reduces it down to 6.5K -- probably smaller than most of the graphics in your app.</p>

<p>The <code>src</code> directory has a sample Ruby script that you can use to strip comments from Olson data files.</p>

<h2><a id="user-content-development" class="anchor" href="#development" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>

<p>This project use <a href="https://github.com/mde/jake">Jake</a> to build. In order to see available tasks, do <code>jake -T</code>. The build sequence is:</p>

<ul>
<li><code>jake test:init</code>: Download and extract tz files to <code>lib/tz</code>.</li>
<li><code>jake test</code>: Run <code>jasmine-node</code>.</li>
</ul>

<p>Feel free to fork and modify at your own will.
The source code is annotated and doc can be generated with <code>jake doc</code>.</p>

<h2><a id="user-content-license" class="anchor" href="#license" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>

<p>Copyright 2010 Matthew Eernisse (<a href="mailto:mde@fleegix.org">mde@fleegix.org</a>) and Open Source Applications Foundation.</p>

<p>Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at <a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a></p>

<p>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</p>

<p>Credits: Ideas included from incomplete JS implementation of Olson parser, "XMLDAte" by Philippe Goetz (<a href="mailto:philippe.goetz@wanadoo.fr">philippe.goetz@wanadoo.fr</a>)</p>

<p>Contributions:</p>

<ul>
<li>Jan Niehusmann</li>
<li>Ricky Romero</li>
<li>Preston Hunt (<a href="mailto:prestonhunt@gmail.com">prestonhunt@gmail.com</a>)</li>
<li>Dov. B Katz (<a href="mailto:dov.katz@morganstanley.com">dov.katz@morganstanley.com</a>)</li>
<li>Peter Bergström (<a href="mailto:pbergstr@mac.com">pbergstr@mac.com</a>)</li>
<li>Long Ho (@longlho)</li>
<li>Eugeny Loy (<a href="mailto:eugeny.loy@gmail.com">eugeny.loy@gmail.com</a>)</li>
</ul>
</article>
  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.11048s from github-fe-1e914f7.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-0j4y5IIRK6Xj6pvY3H5VVoARanTgAnRqyR9BpOWHWps=" src="https://assets-cdn.github.com/assets/frameworks-d23e32e482112ba5e3ea9bd8dc7e555680116a74e002746ac91f41a4e5875a9b.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-h/2E6sW/Ldyuzs25de6nplLfQ24krsp2zrBVuoKrpo8=" src="https://assets-cdn.github.com/assets/github-87fd84eac5bf2ddcaececdb975eea7a652df436e24aeca76ceb055ba82aba68f.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  </body>
</html>

