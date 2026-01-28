# Git Merge: A História Como Ela É

O `git merge` é a forma mais comum de unir o trabalho de duas branches. Ele pega o histórico de uma branch e o funde com outra, criando um ponto de intersecção.

## Como funciona
Quando você faz um merge, o Git procura um ancestral comum entre as duas branches e cria um novo **"Merge Commit"**. Esse commit tem "dois pais", unindo as duas linhas de tempo.

### Vantagens
* **Rastreabilidade:** Você vê exatamente quando uma funcionalidade foi integrada.
* **Segurança:** Não altera commits que já existem, apenas adiciona um novo.
* **Histórico Real:** Preserva a ordem cronológica exata dos eventos.

### Comandos Comuns
```bash
git checkout main
git merge feature-xyz
```