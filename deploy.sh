#!/bin/bash

set -e

echo "🚀 Iniciando o Deploy!"

git worktree add ../deploy deploy

echo "📤 Preparando arquivos..."

rm -rf ../deploy/pages ../deploy/public
cp -r ./projeto/pages ../deploy/pages
cp -r ./projeto/public ../deploy/public
cp -r ./projeto/index.html ../deploy/index.html
cp -r ./projeto/style.css ../deploy/style.css
cp -r ./projeto/index.js ../deploy/index.js

cd ../deploy

echo "💾 Commitando alterações..."

git add .
git commit -m "Deploy ($(date))"
git push origin deploy

cd ../Avaliação\ Desenvolvimento\ Frontend
git worktree remove deploy

rm -rf ../deploy
git worktree prune

echo "✅ Deploy finalizado com sucesso!"