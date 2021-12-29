<!--- CARD BEGIN --->

![DNB-Hugo/HEAD](.github/github-card-dark.png#gh-dark-mode-only)
![DNB-Hugo/HEAD](.github/github-card-light.png#gh-light-mode-only)

<!--- CARD END --->

# DNB GoHugo Component / Robots

This component for [GoHugo](https://gohugo.io/) adds a customizable robots.txt to your website.

## Installing

Enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]
[[module.imports]]
path = "github.com/dnb-org/dnb-hugo-robots"
```

The next time you run `hugo` it will download the latest version of the module.

## Updating

```shell
hugo mod get -u github.com/dnb-org/dnb-hugo-robots
hugo mod get -u # update all modules
```

## Usage

This component can be used as drop-in without much configuration. However, robots.txt generation needs to be enabled in your configuration, eg. config.toml:

```toml
enableRobotsTXT = true
```

You can add configuration parameters per page in the frontmatter:

```yaml
robotsdisallow: true
```

This will add a `Disallow` line for the current URL. Please note that with clean URLs this will disallow bot-access for all sub-folders and sub-urls of the current item.

<!--- COMPONENTS BEGIN --->

## Other [GoHugo](https://gohugo.io/) components by [@dnb-org](https://github.com/dnb-org/)

| Component                                                                     | Description                                                |
| :---------------------------------------------------------------------------- | :--------------------------------------------------------- |
| [dnb-hugo-auditor](https://github.com/dnb-org/dnb-hugo-auditor)               |                                                            |
| [dnb-hugo-debug](https://github.com/dnb-org/dnb-hugo-debug) :mage_man:        |                                                            |
| [dnb-hugo-errors](https://github.com/dnb-org/dnb-hugo-errors)                 |                                                            |
| [dnb-hugo-functions](https://github.com/dnb-org/dnb-hugo-functions)           |                                                            |
| [dnb-hugo-giscus](https://github.com/dnb-org/dnb-hugo-giscus)                 | The Giscus comment system layout for GoHugo.               |
| [dnb-hugo-head](https://github.com/dnb-org/dnb-hugo-head)                     |                                                            |
| [dnb-hugo-internals](https://github.com/dnb-org/dnb-hugo-internals)           | Better internal templates for GoHugo                       |
| [dnb-hugo-netlification](https://github.com/dnb-org/dnb-hugo-netlification)   | a collection of tools that optimize your site on Netlify   |
| [dnb-hugo-opensearch](https://github.com/dnb-org/dnb-hugo-opensearch)         | configuration for Open Search                              |
| [dnb-hugo-pictures](https://github.com/dnb-org/dnb-hugo-pictures)             |                                                            |
| [dnb-hugo-pwa](https://github.com/dnb-org/dnb-hugo-pwa)                       | Automatically turns your site into a PWA                   |
| [dnb-hugo-renderhooks](https://github.com/dnb-org/dnb-hugo-renderhooks)       | render hooks for Markdown markup                           |
| [dnb-hugo-robots](https://github.com/dnb-org/dnb-hugo-robots)                 | configure the content of your robots.txt with front matter |
| [dnb-hugo-schema](https://github.com/dnb-org/dnb-hugo-schema)                 |                                                            |
| [dnb-hugo-search-algolia](https://github.com/dnb-org/dnb-hugo-search-algolia) |                                                            |
| [dnb-hugo-security](https://github.com/dnb-org/dnb-hugo-security)             |                                                            |
| [dnb-hugo-sitemap](https://github.com/dnb-org/dnb-hugo-sitemap)               |                                                            |
| [dnb-hugo-social](https://github.com/dnb-org/dnb-hugo-social)                 |                                                            |

<!--lint disable no-missing-blank-lines -->
<!--- COMPONENTS END --->
