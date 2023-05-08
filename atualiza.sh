#!/bin/bash
branch=`git branch --show-current`
if [[ $branch == "develop" ]]; then
    echo "Entre na branch de desenvolvimento"

else
    noCommit=`git status -s`
      if [[ -z $noCommit ]]; then
        git checkout develop
        echo "Mudamos para o develop"
        git pull
        echo "Atualizamos"
        git checkout $branch
        echo "Voltamos para a branch"
        git merge develop
        echo "Atualizando a branch com develop, verifique se tem necessidade de resolver conflitos"
      else
        echo "Faça o commit dos arquivos antes de atualizar."
        echo $noCommit
      fi
fi
