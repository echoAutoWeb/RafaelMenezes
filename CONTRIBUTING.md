## Contribuindo

Para padronizar mensagens de commit e facilitar automações, este repositório inclui um hook Git que preenche automaticamente uma mensagem padrão quando o commit for criado sem mensagem.

Ativar os hooks locais (uma vez por clone):

```bash
git config core.hooksPath .githooks
```

Depois de executar o comando acima, o hook `prepare-commit-msg` presente em `.githooks/` irá inserir uma mensagem padrão quando o arquivo de mensagem de commit estiver vazio.

Se preferir desfazer esta configuração:

```bash
git config --unset core.hooksPath
```

Observação: o hook é um script simples e pode ser modificado conforme necessário. Em Windows, recomendo usar Git Bash ou WSL para obter compatibilidade com scripts shell.
