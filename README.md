![repoimage](https://repository-images.githubusercontent.com/433661756/f396d7bc-8809-4c2a-96b8-2f7d15df5ef0)

# DNB Hugo Components / Robots

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
<!--- COMPONENTS END --->
