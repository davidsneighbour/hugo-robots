<!--- CARD BEGIN --->

![DNB-Hugo/HEAD](.github/github-card-dark.png#gh-dark-mode-only)
![DNB-Hugo/HEAD](.github/github-card-light.png#gh-light-mode-only)

<!--- CARD END --->

# David's Neighbour GoHugo Component / Robots

This component for [GoHugo](https://gohugo.io/) adds a customizable robots.txt to your website.

See this component in action at [kollitsch.de/robots.txt](https://kollitsch.de/robots.txt)

<!--- THINGSTOKNOW BEGIN --->
## Some things you need to know

These are notes about conventions in this README.md. You might want to make yourself acquainted with them if this is your first visit.

<details>

<summary>:heavy_exclamation_mark: A note about proper configuration formatting. Click to expand!</summary>

The following documentation will refer to all configuration parameters in TOML format and with the assumption of a configuration file for your project at `/config.toml`. There are various formats of configurations (TOML/YAML/JSON) and multiple locations your configuration can reside (config file or config directory). Note that in the case of a config directory the section headers of all samples need to have the respective section title removed. So `[params.dnb.something]` will become `[dnb.something]` if the configuration is done in the file `/config/$CONFIGNAME/params.toml`.

</details>
<!--- THINGSTOKNOW END --->

<!--- INSTALLUPDATE BEGIN --->
## Installing

First enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]

[[module.imports]]
path = "github.com/davidsneighbour/hugo-robots"

```

The next time you run `hugo` it will download the latest version of the module.

## Updating

```shell
# update this module
hugo mod get -u github.com/davidsneighbour/hugo-robots
# update all modules
hugo mod get -u ./...
```
<!--- INSTALLUPDATE END --->

## Usage

This component can be used as drop-in without much configuration. However, robots.txt generation needs to be enabled in your configuration, eg. config.toml:

```toml
enableRobotsTXT = true
```

You can add configuration parameters per page in your frontmatter:

```yaml
robotsdisallow: true
```

This will add a `Disallow` line for the current URL. Note, that with clean URLs this will disallow bot-access for all sub-folders and sub-urls of the current item.

## Adding global (Dis/allows)

You can add global additions to your robots.txt via `data/dnb/robots/config.toml` configuration:

```toml
[[useragents]]
name = "Googlebot"
disallow = ["/nogooglebot/", "/anotherdirectory/"]

[[useragents]]
name = "Googlebot2"
allow = ["/nogooglebot/", "/anotherdirectory/"]
```

## Are you into ASCII-art?

If you like to do your robots.txt proud --- you know what I mean --- then you can use the following data configuration parameters in `data/dnb/robots/config.toml` to add some flourish to your robots.txt:

```toml
initialComment = '''
# comment at the beginning of robots.txt
'''
concludingComment = '''
# comment at the end of robots.txt
'''
```

## remove dnb-org notices

The plugin adds some notes about dnb-org to your robots.txt. All for the awareness, you know? It's a free plugin. If you wish to remove these mentions feel free to set the branding option in your `data/dnb/robots/config.toml` to true:

```toml
disableBranding = true
```

<!--- COMPONENTS BEGIN --->

## Other [GoHugo](https://gohugo.io/) components by [@davidsneighbour](https://github.com/davidsneighbour/)

<!-- prettier-ignore -->
| Component | Description |
| :--- | :--- |
| [hugo-auditor](https://github.com/davidsneighbour/hugo-auditor) | |
| [hugo-debug](https://github.com/davidsneighbour/hugo-debug) :mage_man: | |
| [hugo-errors](https://github.com/davidsneighbour/hugo-errors) | |
| [hugo-feeds](https://github.com/davidsneighbour/hugo-feeds) | Implements various configurable feed formats. |
| [hugo-functions](https://github.com/davidsneighbour/hugo-functions) | |
| [hugo-giscus](https://github.com/davidsneighbour/hugo-giscus) | The Giscus comment system layout for GoHugo. |
| [hugo-head](https://github.com/davidsneighbour/hugo-head) | A GoHugo theme component that solves the old question of "What tags belong into the `<head>` tag of my website?" |
| [hugo-hooks](https://github.com/davidsneighbour/hugo-hooks) | GoHugo's missing hook system for template extensions. |
| [hugo-humans](https://github.com/davidsneighbour/hugo-humans) | Your site is made by humans. Humans.txt is naming them. |
| [hugo-icons](https://github.com/davidsneighbour/hugo-icons) | Icons for your Hugo website. |
| [hugo-internals](https://github.com/davidsneighbour/hugo-internals) | Better internal templates for GoHugo |
| [hugo-netlification](https://github.com/davidsneighbour/hugo-netlification) | a collection of tools that optimize your site on Netlify |
| [hugo-opensearch](https://github.com/davidsneighbour/hugo-opensearch) | configuration for Open Search |
| [hugo-pictures](https://github.com/davidsneighbour/hugo-pictures) | |
| [hugo-pwa](https://github.com/davidsneighbour/hugo-pwa) | Automatically turns your site into a PWA |
| [hugo-renderhooks](https://github.com/davidsneighbour/hugo-renderhooks) | render hooks for Markdown markup |
| [hugo-robots](https://github.com/davidsneighbour/hugo-robots) | Add a customizable robots.txt to your website. |
| [hugo-schema](https://github.com/davidsneighbour/hugo-schema) | |
| [hugo-search-algolia](https://github.com/davidsneighbour/hugo-search-algolia) | |
| [hugo-security](https://github.com/davidsneighbour/hugo-security) | |
| [hugo-sitemap](https://github.com/davidsneighbour/hugo-sitemap) | |
| [hugo-social](https://github.com/davidsneighbour/hugo-social) | |
| [hugo-workflows](https://github.com/davidsneighbour/hugo-workflows) | A collection of Github Actions/Workflows to optimise your work with GoHugo. |
| [hugo-youtube](https://github.com/davidsneighbour/hugo-youtube) | A shortcode and partial for lite youtube embeds. |





<!--lint disable no-missing-blank-lines -->
<!--- COMPONENTS END --->
