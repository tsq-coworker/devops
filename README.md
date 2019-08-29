# セットアップ

[![Build Status](https://travis-ci.org/ShogoNakano/devops.svg?branch=master)](https://travis-ci.org/ShogoNakano/devops)

## 全体を通しての手順

1. githubにログインし、自分自身のリポジトリを作成(空でOK)
2. travis-ci.org にアクセス
3. githubアカウントでログイン
4. プロジェクトのSettings画面に遷移し、Environment Variablesで環境変数を登録
　　環境変数名：GITHUB_TOKEN
　　バリュー：個人githubで生成した Personal access token (scopeは"repo"のみ)
　　(https://github.com/settings/tokens)
5. githubのリポジトリに対してファイルのアップロードを実施
　　今回のワークショップでは、全部で3ファイルアップロードする
　　・index.html
　　・lib.js
　　・package.json
6. github上で「Create new file」ボタンをクリックし、travis CI用の
　　設定ファイルを作成する。
　　ファイル名：.travis.yml
　　 -> このファイルが無いと travis CI側からアクティブなgithubリポジトリとして
　　　　　認識されないので注意
7. travis CIの画面に切り替えて「Sync account」でgithubと同期をとり、
　　githubと連携させたリポジトリを有効化する
8. 手動での実行、もしくはファイルをプッシュすることで CIが発火する
9. CI側でのビルド結果がgithubの登録済みメールアドレス宛に届く
10. ビルドが成功した場合は、githubの対象リポジトリの Settings タブをクリックして
　　 GitHub Pages欄までスクロールするとデプロイした内容を確認できるURLが生成されている
