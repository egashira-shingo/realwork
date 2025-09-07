# パーソナルジム Real Workout 公式サイト

## 1. システム概要

このリポジトリは、パーソナルジム「Real Workout」の公式サイトのソースコードを管理するものです。
このサイトは、静的なHTML、CSS、JavaScriptで構築されており、サーバーサイドのプログラムは含まれていません。

### 1.1. ページ構成

サイトは以下の3つの主要ページで構成されています。

- **トップページ (`/index.html`):** サイト全体の入り口となるページ。
- **不動前店ページ (`/fudomae/`):** 不動前店の詳細情報を掲載するページ。
- **白金高輪店ページ (`/shirokanetakanawa/`):** 白金高輪店の詳細情報を掲載するページ。

### 1.2. 画面構成

各ページの主な画面構成（セクション）は以下の通りです。

- **トップページ:**
  - `hero`: メインビジュアルとキャッチコピー
  - `empathy`: 顧客への共感メッセージ
  - `stores`: 各店舗への導線

- **店舗ページ (不動前・白金高輪):**
  - `hero`: メインビジュアルとキャッチコピー
  - `empathy`: 顧客への共感メッセージ
  - `reasons`: 当ジムが選ばれる理由
  - `trainers`: 所属トレーナーの紹介
  - `flow`: 無料体験の流れ
  - `pricing`: 料金プラン
  - `access`: 店舗アクセス情報
  - `faq`: よくあるご質問
  - `stores`: 他店舗への導線

---

## 2. プロジェクト規約

このプロジェクトのファイル構成とコーディングに関する規約を定めます。

### 2.1. ファイル構成

ディレクトリ構造は以下の通りです。

```
/
├── common/
│   ├── css/
│   │   ├── common.css      # 共通レイアウト
│   │   └── responsive.css  # 共通レスポンシブ
│   ├── js/
│   │   └── common.js       # 共通スクリプト
│   └── img/              # 共通画像
│
├── fudomae/              # 不動前ページ
│   ├── index.html
│   ├── css/
│   │   └── style.css     # ページ固有の変数定義
│   └── img/
│       └── ...           # ページ固有の画像
│
├── shirokanetakanawa/    # 白金高輪ページ
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── img/
│       └── ...
│
├── index.html            # トップページ
├── css/
│   └── style.css         # トップページ固有の変数定義
├── img/
│   └── ...               # トップページ固有の画像
└── readme.md             # このファイル
```

- **共通ファイル:**
  - 全ページで共通して使用するCSS、JavaScript、画像は `/common` ディレクトリ配下に配置します。

- **個別ファイル:**
  - 各ページ（ルート `/`、`/fudomae`、`/shirokanetakanawa`）に固有のファイルは、それぞれのディレクトリ配下に配置します。


### 2.2. CSS設計方針

CSSは以下の3つのファイルに役割を分割し、保守性と再利用性を高めます。

#### a. `common.css`

- **役割:** 全ページ共通のレイアウト、構造、基本的な装飾を定義します。
- **配置場所:** `/common/css/common.css`
- **ルール:**
  - ページ固有の色や背景色は直接指定せず、CSS変数を介して参照します。
  - モバイルファースト（767px以下のスクリーンサイズ）を基準に記述します。

#### b. `responsive.css`

- **役割:** PC表示（768px以上）のレスポンシブスタイルを定義します。
- **配置場所:** `/common/css/responsive.css`
- **ルール:**
  - `@media (min-width: 768px)` のメディアクエリ内に記述します。

#### c. `style.css` (各ページ)

- **役割:** ページ固有の「テーマ」や「スキン」を定義します。具体的には、CSS変数の値を設定する役割を担います。
- **配置場所:** 各ページディレクトリの `css/style.css`
- **ルール:**
  - `:root` セレクタ内で、そのページで使用する色やフォントなどの変数を定義します。

#### d. CSS変数一覧

各ページの `style.css` で定義する主な変数は以下の通りです。これにより、サイト全体のデザインや各店舗のテーマカラーの管理を容易にします。

| 変数名                       | 説明                                         | 設定例 (不動前) | 設定例 (白金高輪) |
| ---------------------------- | -------------------------------------------- | --------------- | ----------------- |
| `--font-family-base`         | 基本フォントファミリー                       | `Noto Sans JP`  | `Noto Sans JP`    |
| `--color-text`               | 基本テキストカラー                           | `#333333`       | `#333333`         |
| `--color-background`         | 基本背景色                                   | `#FFFFFF`       | `#FFFFFF`         |
| `--color-primary`            | プライマリカラー（ボタン、リンクなど）       | `#0077b6`       | `#008080`         |
| `--color-primary-dark`       | プライマリカラー（ホバー時など）             | `#005a8d`       | `#006060`         |
| `--color-light-gray`         | 明るいグレー（区切り線など）                 | `#f4f4f4`       | `#f4f4f4`         |
| `--color-accent-green`       | アクセントカラー（緑）                       | `#32CD32`       | `#32CD32`         |
| `--color-bg-subtle`          | 各セクションの薄い背景色                     | `#e0fbfc`       | `#F0FFF4`         |
| `--color-reason-number`      | 「選ばれる理由」セクションの数字の色         | `#00b4d8`       | `#5bf08f`         |
| `--shadow-reason-number`     | 「選ばれる理由」セクションの数字のテキスト影 | `0 0 8px #00b4d8` | `0 0 8px #5bf08f` |
| `--bg-pricing-group-title`   | 料金表のプラン種別ヘッダーの背景色           | `var(--color-primary)` | `#2E8B57`         |


#### e. HTMLでの読み込み順

HTMLファイルでは、必ず以下の順番でCSSファイルを読み込みます。これにより、変数定義が先に読み込まれ、共通スタイルで正しく参照されることを保証します。

1.  **`style.css`** (個別・変数定義)
2.  **`common.css`** (共通・レイアウト)
3.  **`responsive.css`** (共通・レスポンシブ)

```html
<!-- 例: 不動前ページの場合 -->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="../common/css/responsive.css">
```

### 2.3. JavaScript規約

- **ファイル:** すべてのページで共通のJavaScriptを使用し、ファイルは1つに統合します。
- **配置場所:** `/common/js/common.js`
- **HTMLでの読み込み:** `</body>` タグの直前で読み込みます。

```html
<script src="/common/js/common.js"></script>
```

### 2.4. 画像運用規約（共通化）

複数ページで使用する画像は共通ディレクトリに集約し、ページ固有の画像は各ページ配下に配置します。これにより重複を排除し、差し替え・最適化の運用を容易にします。

#### a. ディレクトリ方針

- 共通画像: `/common/img/`
  - 例: 外観/内観、フロー・理由セクションの共通素材、汎用イラストなど
- トップページ固有: `/img/`
- 店舗ページ固有: `/<page>/img/`（例: `/fudomae/img/`, `/shirokanetakanawa/img/`）

#### b. 参照パスの例

- トップページ（`/index.html`）
  - 共通画像: `<img src="common/img/gym-exterior.png" alt="白金高輪店 外観">`
  - 固有画像: `<img src="img/hero-visual.png" alt="メインビジュアル">`
- 店舗ページ（例: `/fudomae/index.html`）
  - 共通画像: `<img src="../common/img/scene-counseling.png" alt="カウンセリング">`
  - 固有画像: `<img src="img/hero-visual2.png" alt="メインビジュアル">`
- CSSから参照する場合は、CSSファイルの位置を基準とした相対パスを用います。
  - 例（共通CSS内から共通画像）: `url('../img/scene-training.png')`
  - 例（店舗CSS内から店舗画像）: `url('../img/hero-visual.png')`

#### c. 命名規則（kebab-case）

- 英小文字・数字・ハイフンのみ（拡張子は `.png`/`.jpg`/`.jpeg`/`.webp`）
- セクションや用途の接頭辞を推奨: `hero-`, `reason-`, `scene-`, `gym-`, `trainer-`
  - 例: `hero-visual.png`, `reason-pricing.png`, `scene-counseling.png`, `gym-exterior.png`, `trainer-fukuda.png`

#### d. 取り扱いルール

- 再利用基準: 2ページ以上で利用する画像は `/common/img/` に移動・集約します。
- 代替テキスト: `<img>` には内容を適切に表す `alt` を付与。装飾目的のみの場合は空文字（`alt=""`）。
- 背景用途: 装飾のみの背景はCSSの `background-image` で扱い、意味コンテンツは `<img>` を使用。
- 画質と形式: 写真は原則JPEG、ロゴ/透過やUIはPNG、可能ならWebPを検討（互換性確認の上）。
- サイズ最適化: 表示サイズに見合う解像度に調整し、不要なメタデータを削除（ビルド無し運用のため手動最適化）。

#### e. 運用チェックリスト（移行/追加時）

1. 画像の利用箇所を確認し、共通 or 固有の配置先を決定する。
2. 共通化する場合は `/common/img/` へ移動し、全ページの参照パスを更新する。
3. 重複ファイルがページ配下に残っていないか確認し削除する。
4. モバイル/PCの両表示で崩れ・画質劣化・遅延がないかを確認する。
5. `alt` とアクセシビリティ（コントラストや可読性）を確認する。
