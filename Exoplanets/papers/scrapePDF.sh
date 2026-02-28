#!/usr/bin/env bash

# Usage: ./pdf2md.sh input.pdf output.md

set -e

INPUT="$1"
OUTPUT="$2"

if [ -z "$INPUT" ] || [ -z "$OUTPUT" ]; then
    echo "Usage: $0 input.pdf output.md"
    exit 1
fi

TMP_TXT=$(mktemp)

echo "Extracting text from PDF..."
pdftotext -layout "$INPUT" "$TMP_TXT"

echo "Converting to Markdown..."
pandoc "$TMP_TXT" -f plain -t markdown -o "$OUTPUT"