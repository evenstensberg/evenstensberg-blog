# evenstensberg-blog

My blog.

## Generate new post

```console
npx hexo new post <name>
```

## API

### Healthcheck

```sh
$ curl https://even.dev/api/healthcheck
```

### Get all resturants at Flisa

```sh
$ curl https://even.dev/api/resturant
```

#### Get names/ids for each resturant

```sh
$ curl https://even.dev/api/list-name
```

#### Query a specific resturant given its id

```sh
$ curl https://even.dev/api/resturants/:name
```
