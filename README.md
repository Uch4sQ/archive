# archive

Soma Saito の数学・型理論・形式化メタ理論に関する GitHub Pages サイトです。

公開サイト: <https://uch4sq.github.io/archive/>

## 開発

このサイトは Jekyll で生成します。Ruby と Bundler を用意したうえで、次を実行してください。

```powershell
bundle install
bundle exec jekyll serve --livereload
```

ブラウザで <http://127.0.0.1:4000/archive/> を開きます。

ビルドだけ確認する場合:

```powershell
bundle exec jekyll build --strict-front-matter
```

## 公開

`main` への push、または Actions の手動実行で `.github/workflows/pages.yml` がサイトをビルドして GitHub Pages にデプロイします。Pull Request ではビルドのみ実行し、公開は行いません。

GitHub 側では、リポジトリの Settings → Pages → Build and deployment → Source を **GitHub Actions** に設定してください。初回だけ必要な設定です。

## 構成

- `_config.yml`: Jekyll の設定
- `_layouts/default.html`: 共通レイアウト
- `assets/css/style.css`: スタイル
- `assets/js/site.js`: サイト共通 JavaScript
- `math/`: 数学ノート
- `research/`: 研究ページ・論文 PDF
