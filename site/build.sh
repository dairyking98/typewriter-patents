#!/bin/sh
# Build the static site into _site/ (needs: pip install mkdocs-material). Run from the repo root.
set -e
rm -rf _docs && mkdir _docs
for d in README.md guides views patents machines features people companies families tags.md site/extra.css; do
  [ -e "$d" ] && cp -r "$d" _docs/
done
rm -f _docs/views/*.base
sed -i -E 's#\(([./]*views/)?machines\.base\)#(https://github.com/dairyking98/typewriter-patents/blob/main/views/machines.base)#' _docs/views/index-machines.md
# keep the search index small: leave the bulky sections (OCR excerpts, similarity and patent tables) out of search
find _docs/patents -name '*.md' -exec sed -i -E \
  's/^(## (Description|Shares features with|Similar patents|CPC classes|Drawings).*)$/\1 { data-search-exclude }/' {} +
find _docs/people _docs/companies _docs/families _docs/features -name '*.md' -exec sed -i -E \
  's/^(## (Patents|Members|Machines|Inventors).*)$/\1 { data-search-exclude }/' {} +
for d in patents machines features people companies families; do  # the long folder lists: browse, don't search
  printf -- '---\nsearch:\n  exclude: true\n---\n\n' | cat - "_docs/$d/README.md" > _docs/tmp && mv _docs/tmp "_docs/$d/README.md"
done
mkdocs build -f site/mkdocs.yml "$@"
