#!/usr/bin/env bash

echo "Publishing to gh-pages"
repo_uri="https://x-access-token:${DEPLOY_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
remote_name="origin"
target_branch="gh-pages"
build_dir="build"

cd "$GITHUB_WORKSPACE"

ls -l
