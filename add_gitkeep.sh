#!/bin/bash

# المجلد الأساسي لمشروعك (غيره حسب مسار مشروعك)
BASE_DIR="./"

# قائمة المجلدات اللي تريد تضيف فيها .gitkeep
FOLDERS=(
  "artifacts"
  "cache"
  "deployments/mainnet"
  "interfaces"
  "utils"
  "types"
  "docs"
)

for folder in "${FOLDERS[@]}"
do
  DIR_PATH="$BASE_DIR$folder"
  if [ -d "$DIR_PATH" ]; then
    echo "Adding .gitkeep to $DIR_PATH"
    touch "$DIR_PATH/.gitkeep"
  else
    echo "Folder $DIR_PATH does not exist, creating it."
    mkdir -p "$DIR_PATH"
    touch "$DIR_PATH/.gitkeep"
  fi
done

echo "Done adding .gitkeep files."
