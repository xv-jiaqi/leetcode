#！/usr/bash

cp ./scripts/pre-commit .git/hooks/pre-commit

chmod +x .git/hooks/pre-commit

echo "\033[32m >>> Git-hook init successfully! The script only needs to be run once!\033[0m"