#!/usr/bin/env bash

set -eu
echo "Publishing to gh-pages"
repo_uri="https://x-access-token:${DEPLOY_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
remote_name="origin"
main_branch="master"
target_branch="gh-pages"
build_dir="build"

cd "$GITHUB_WORKSPACE"

git config user.name "cblnco"
git config user.email "$MAINTANER_EMAIL"

git checkout "$target_branch"
git rebase "${remote_name}/${main_branch}"

git add "$build_dir"

git commit -m "[Workflow]: Updated GitHub Pages."
if [ $? -ne 0 ]; then
    echo "No changes to commit"
    exit 0
fi

git remote set-url "$remote_name" "$repo_uri"
git push --force-with-lease "$remote_name" "$target_branch"
