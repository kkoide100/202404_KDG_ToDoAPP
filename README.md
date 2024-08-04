# 概要
タスク管理アプリをSupabaseとNext.jsを使用して開発してみましょう。
既に、簡単なDBの設計と、UIは作成しています。

# 環境構築手順
1. インストールしたいディレクトリ内で`git clone https://github.com/DevRyuki/todo-app-with-supabase.git`を実行してローカルにCloneを実行
2. cloneしたファイルをVS Code等で開いて、`npm install`でパッケージのインストール
3. Dockerが起動していること、既にDockerでSupabaseが起動されていないことを確認して、`npx supabase start`をしてDockerでSupabaseを起動
4. `npx supabase db reset`を実行してDBを初期化
5. 環境変数`.env.local`をプロジェクトルートに置いて、API_URLを`SUPABASE_URL`、annon keyを`SUPABASE_ANNON_KEY`に登録
6. `npm run dev`でNext.jsのプロジェクトを立上げる。
7. `http://localhost:3000`にアクセス


# Supabaseを操作してDBにタスクを入れよう

1. `http://localhost:54323/project/default/editor`にアクセス
2. task > Insert

# ToDo
  - ToDoを発行するAPIを開発しよう。