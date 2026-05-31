# GastoCerto 💰
> **Seu dinheiro, do jeito certo.**

App de controle financeiro pessoal com inteligência de análise e sugestões de investimentos. Funciona como **PWA** (Progressive Web App) — instale diretamente no celular sem precisar de App Store ou Google Play.

---

## 🚀 Ver ao vivo

**[gastocerto.github.io](https://seu-usuario.github.io/gastocerto/)** ← troque pelo seu link

---

## 📱 Instalar como App

### Android (Chrome)
1. Acesse o link acima no Chrome
2. Um banner **"Instalar"** aparecerá automaticamente
3. Toque em **Instalar** → o app aparece na tela inicial

### iPhone / iPad (Safari)
1. Acesse o link no **Safari**
2. Toque em **Compartilhar** ⎙
3. Role e toque em **"Adicionar à Tela de Início"**
4. Toque em **Adicionar**

---

## 🗂️ Telas do App

| # | Tela | Descrição |
|---|------|-----------|
| 1 | **Dashboard** | Saldo total, KPIs, gráficos de gastos |
| 2 | **Transações** | Lançamentos filtrados por tipo |
| 3 | **Orçamento** | Limites por categoria com alertas |
| 4 | **Análise** | Comparativos mensais e insights de IA |
| 5 | **Histórico** | Busca e exportação de lançamentos |
| 6 | **Metas** | Objetivos financeiros com progresso |
| 7 | **Investimentos** | Carteira e rentabilidade |
| 8 | **Sugestões** | Recomendações por perfil (Conservador/Moderado/Arrojado) |
| 9 | **Simulador** | Simule rentabilidade de diferentes investimentos |
| 10 | **Contas** | Gestão de contas bancárias e cartões |

---

## 🏗️ Como hospedar no GitHub Pages

```bash
# 1. Crie um repositório no GitHub
# 2. Clone e adicione os arquivos
git clone https://github.com/seu-usuario/gastocerto
cd gastocerto
# copie todos os arquivos aqui
git add .
git commit -m "🚀 GastoCerto PWA"
git push

# 3. Ative GitHub Pages
# Settings → Pages → Source: Deploy from branch → main → / (root) → Save
```

O app estará disponível em `https://seu-usuario.github.io/gastocerto/` em 1-2 minutos.

---

## 🎨 Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `--primary` | `#0A2540` | Azul escuro principal |
| `--secondary` | `#1DB954` | Verde — sucesso, receitas |
| `--accent` | `#3A86FF` | Azul — destaques |
| `--alert` | `#E63946` | Vermelho — alertas, despesas |
| Fonte | Inter | Todos os textos |

---

## 📁 Estrutura de arquivos

```
gastocerto/
├── index.html          ← App completo (single file)
├── manifest.json       ← Configuração PWA
├── sw.js               ← Service Worker (offline)
├── README.md
└── icons/
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    ├── icon-512x512.png
    └── apple-touch-icon.png
```

---

## ⚡ Funcionalidades PWA

- ✅ Instalável como app nativo (Android e iOS)
- ✅ Funciona offline (Service Worker)
- ✅ Ícone personalizado na tela inicial
- ✅ Tela de splash customizada
- ✅ Sem barra de navegador (display: standalone)
- ✅ Tema da status bar (#0A2540)
- ✅ Banner de instalação automático (Android)
- ✅ Guia de instalação para iOS

---

*GastoCerto — Seu dinheiro, do jeito certo.* 💚
