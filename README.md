# 🧠 MM - Money Mind

> Um app de controle financeiro pessoal com foco em clareza mental e simplicidade. Ideal para quem quer saber **quanto ganha, quanto gasta e onde o dinheiro tá indo** — sem complicações, anúncios ou integrações bancárias.

---

## 📌 Visão Geral

**MM - Money Mind** é um app de controle financeiro minimalista. A proposta é oferecer uma experiência rápida e leve para registrar entradas e saídas, visualizar saldo e acompanhar o histórico financeiro do mês.

---

## 🎯 Público-Alvo

- Profissionais autônomos/PJs
- Pessoas que buscam um controle financeiro simples
- Usuários que não querem vincular apps ao banco
- Quem valoriza design limpo e agilidade

---

## ❗ Problema

A maioria dos apps financeiros são complexos, cheios de anúncios e exigem integração bancária. Muitos usuários só querem **anotar gastos e ver o saldo**, sem perder tempo com configurações avançadas.

---

## ✅ Solução

Um app com:

- Cadastro manual de ganhos e gastos
- Resumo do mês com saldo
- Histórico claro e acessível
- Sem autenticação ou conexão com bancos
- Salvo no localStorage do navegador

---

## 🚀 Funcionalidades (MVP)

### ✅ Essenciais

- [] Cadastro de **ganhos e gastos**
- [] Visualização de **saldo total**
- [] Histórico de transações com ordenação
- [] Interface **limpa** e responsiva (MUI)

### 🔒 Fora do escopo (por enquanto)

- Autenticação
- Persistência com postgre
- Gráficos e relatórios avançados
- Classificação por categorias

---

## 🧱 Estrutura de Dados

Cada transação terá o seguinte formato:

```ts
type Transaction = {
  id: string;
  type: "entrada" | "saida";
  description: string;
  amount: number;
  date: string; // ISO format (ex: "2025-05-04")
};
```

---

## 🛠 Tecnologias Utilizadas

- **React** — biblioteca para UI
- **Material UI (MUI)** — componentes visuais
- **Material React Table** — exibição do histórico
- **localStorage** — persistência local

---

## 🧪 MVP — Primeiro Objetivo

Entregar uma versão funcional com:

- Registro de transações
- Visualização do saldo
- Histórico com tabela
- Dados persistidos via localStorage

---

## 📌 Licença

MIT — livre para uso e modificação.
