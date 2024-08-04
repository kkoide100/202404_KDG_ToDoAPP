# 環境構築手順

1. インストールしたいディレクトリ内で`git clone https://github.com/DevRyuki/todo-app-with-supabase.git`を実行してローカルにCloneを実行
2. cloneしたファイルをVS Code等で開いて、`npm install`でパッケージのインストール
3. Dockerが起動していること、既にDockerでSupabaseが起動されていないことを確認して、`npx supabase start`をしてDockerでSupabaseを起動
4. 環境変数`.env.local`をプロジェクトルートに置いて、API_URLを`SUPABASE_URL`、annon keyを`SUPABASE_ANNON_KEY`に登録
5. `npm run dev`でNext.jsのプロジェクトを立上げる。
6. `http://localhost:3000`にアクセス
7. コードを書こう👍