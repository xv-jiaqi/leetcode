#！/usr/bash

cp ./scripts/pre-commit .git/hooks/pre-commit

chmod +x .git/hooks/pre-commit

echo "\nGit-commit hook copy to .git/hooks success! \n\nThis script only executed once !!! \n"