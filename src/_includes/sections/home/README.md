# Blocos da página inicial (Home)

Ordem no layout de referência (igual em `src/index.html`):

1. **Header** (em `_includes/sections/header.html`, carregado pelo layout)
2. **Quem Somos** → 3 cards (Missão, Visão, Valores) → **Áreas de Atuação** → **Contrate nossos serviços** → **Conheça nossa estrutura**
3. **Footer** (em `_includes/sections/footer.html`)

| Arquivo | ID da `<section>` | Âncora (nav) | Descrição |
|---------|-------------------|--------------|-----------|
| `quem-somos.html` | `quem-somos` | `/#quem-somos` | Apresentação do escritório + logo |
| `missao-visao-valores.html` | `missao-visao-valores` | — | Três cards lado a lado: Missão, Visão, Valores |
| `areas-atuacao.html` | `areas-atuacao` | `/#areas-atuacao` | Lista: Civil, Trabalhista, Previdenciário, Bancário |
| `cta-servicos.html` | `contrate` | `/#contrate` | Seção "Contrate nossos serviços" |
| `estrutura.html` | `estrutura` | — | Conheça nossa estrutura (fotos + atendimento) |
| `hero.html` | `hero-143` | — | Opcional: imagem de fundo (não na ordem padrão) |

**Padrão de cada bloco:** comentário no topo com nome do bloco, `id` da section e âncora (se houver); uma `<section>` com `id` e classes estáveis para o CSS.

**Estilos:** `critical.scss` (hero, se usado); demais seções em `local.scss` com classes `.section-rm`, `.section-quem-somos`, `.section-mvv`, etc.
