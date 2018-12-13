#！/usr/bash

cp ./scripts/git-commit .git/hooks/git-commit

chmod +x .git/hooks/git-commit

echo "\nGit-commit hook copy to .git/hooks success! \n\nThis script only executed once !!! \n"