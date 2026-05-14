#!/bin/bash
# פריסה מהירה ל-Netlify דרך GitHub
cd "/Users/macbook/Documents/Claude/Projects/podcast.finance-site"
git add -A
git commit -m "${1:-update}"
git push
echo "✅ פרוס! בדוק ב: https://podcast-finance.netlify.app"
