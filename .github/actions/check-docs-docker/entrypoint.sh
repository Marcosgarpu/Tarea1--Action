#!/bin/sh

# GitHub monta el repo en $GITHUB_WORKSPACE
cd "$GITHUB_WORKSPACE" || exit 1

missing=0

for f in $(echo "$1" | tr ',' ' '); do
  if [ -f "$f" ]; then
    echo "✅ $f existe"
  else
    echo "::error::❌ $f NO existe"
    missing=1
  fi
done

exit $missing