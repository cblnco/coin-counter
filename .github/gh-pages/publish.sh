#!/usr/bin/env bash

echo "Publishing to gh-pages"
repo_uri="https://x-access-token:${DEPLOY_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
remote_name="origin"
target_branch="gh-pages"
build_dir="build"

cd "$GITHUB_WORKSPACE"

git config user.name "$GITHUB_ACTOR"
git config user.email "${GITHUB_ACTOR}@bots.github.com"

git fetch
git checkout "$target_branch"
git rm -r *
cp -a "${build_dir}/." .
git add *
git commit -m "[Workflow]: Updated GitHub Pages."

if [ $? -ne 0 ]; then
    echo "No changes to commit"
    exit 0
fi

git remote set-url "$remote_name" "$repo_uri"
git push --force-with-lease "$remote_name" "$target_branch"
