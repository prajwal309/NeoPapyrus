#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 || ! $1 =~ [^[:space:]] ]]; then
  echo 'Usage: ./commit2Github.sh "Commit message"' >&2
  exit 2
fi

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
if ! branch=$(git symbolic-ref --quiet --short HEAD); then
  echo 'Switch to a branch before running this script.' >&2
  exit 1
fi
repository="https://github.com/prajwal309/NeoPapyrus"
push_url=$(git remote get-url --push --all origin 2>/dev/null || true)
case "$push_url" in
  "$repository"|"$repository.git"|git@github.com:prajwal309/NeoPapyrus.git|ssh://git@github.com/prajwal309/NeoPapyrus.git)
    ;;
  *)
    echo "Expected origin to have a single push URL for $repository." >&2
    exit 1
    ;;
esac

git add --all
if git diff --cached --quiet; then
  echo 'No changes to commit.'
  exit 0
fi

git commit -m "$1"
git push --set-upstream origin "refs/heads/$branch:refs/heads/$branch"
