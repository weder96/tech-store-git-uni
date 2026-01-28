### Arquivo 2

```markdown
# Git Rebase: A Arte da Linha Reta

O `rebase` é o processo de mover uma sequência de commits para uma nova base. Em vez de unir as pontas (como no merge), você "descola" seus commits e os "cola" novamente no topo da versão mais recente da branch principal.

## Por que usar?
O principal objetivo é manter um **histórico linear**. Sem commits de merge (como "Merge branch 'main' into feature"), o log do Git fica muito mais fácil de ler, parecendo que todo o desenvolvimento aconteceu em uma única linha perfeita.

### A Regra de Ouro do Rebase
> **"Nunca faça rebase em branches que já foram enviadas para o servidor (Push) e que outras pessoas estão usando."**
> 
> Como o rebase reescreve o histórico (muda o ID dos commits), se você fizer isso em uma branch compartilhada, vai quebrar o repositório dos seus colegas.

### Vantagens
* **Limpeza:** Histórico sem ruídos de commits de integração.
* **Contexto:** Sua funcionalidade sempre parece baseada na versão mais atual do projeto.

### Comandos Comuns
```bash
git checkout feature-xyz
git rebase main
```