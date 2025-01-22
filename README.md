# Xpop Website Codebase

> [!NOTE]
> This website is built on the [Taxonomy](https://github.com/shadcn-ui/taxonomy) template, and I appreciate [@shadcn](https://twitter.com/shadcn) for their great work.

## Running Locally

### With pnpm
1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm dev
```


### With Docker and docker compose

```sh
pnpm docker-dev
```


## License

Licensed under the [MIT license](https://github.com/shadcn/taxonomy/blob/main/LICENSE.md).
