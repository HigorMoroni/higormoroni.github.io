# Configuração do Decap CMS para GitHub Pages

## ⚡ SOLUÇÃO RÁPIDA (Opção 2 - Mais Simples)

Se quiser a solução mais rápida, siga estes passos:

### 1. Atualizar GitHub OAuth App

Vá em: **GitHub Settings > Developer settings > OAuth Apps > Portfolio Admin**

Mude a **Authorization callback URL** para:
```
https://decap-cms-oauth-provider.vercel.app/callback
```

### 2. Configuração já Atualizada

Sua configuração no `public/admin/config.yml` já está correta:
```yaml
backend:
  name: github
  repo: HigorMoroni/higormoroni.github.io
  branch: master
  base_url: https://decap-cms-oauth-provider.vercel.app
  auth_endpoint: api/auth
```

### 3. Variáveis de Ambiente (Importante!)

Você precisa configurar as variáveis de ambiente no serviço. Como está usando GitHub Pages, faça isso:

1. Vá em **Settings** do seu repositório no GitHub
2. Vá em **Secrets and variables > Actions**
3. Adicione estas variáveis:
   - `GITHUB_CLIENT_ID`: `Ov23lizEMcXKZTgY3wA3`
   - `GITHUB_CLIENT_SECRET`: (seu client secret do GitHub OAuth App)

### 4. Teste

1. Commit e push das alterações
2. Aguarde o deploy do GitHub Pages
3. Acesse `https://higor.dev/admin`
4. Clique em "Login with GitHub"
5. Autorize a aplicação
6. Sucesso! 🎉

---

## 🛠️ SOLUÇÃO PERSONALIZADA (Opção 1)

Se preferir ter controle total, use o proxy OAuth que criei na pasta `oauth-proxy/`:

### Vantagens:
- ✅ Controle total sobre a autenticação
- ✅ Personalização completa
- ✅ Não depende de serviços terceiros
- ✅ Gratuito no Vercel

### Passos:
1. Deploy da pasta `oauth-proxy/` no Vercel
2. Configure variáveis de ambiente no Vercel
3. Atualize a URL no `config.yml` para sua URL do Vercel
4. Atualize o callback URL no GitHub OAuth App

---

## 🔧 Solução de Problemas

### Erro 404 no Login
- ✅ Verifique se o callback URL está correto
- ✅ Confirme que a URL do `base_url` está correta
- ✅ Aguarde alguns minutos para propagação

### Erro CORS
- ✅ Verifique se o domínio está correto na configuração
- ✅ Limpe o cache do navegador

### Erro de Autorização
- ✅ Confirme que o Client ID e Secret estão corretos
- ✅ Verifique se a aplicação OAuth está ativa

### Ainda não funciona?
- ✅ Tente usar uma aba anônima/privada
- ✅ Verifique o console do navegador para erros
- ✅ Confirme que o GitHub Pages fez o deploy da alteração

---

## 📝 O que Foi Alterado

**Antes (não funcionava):**
```yaml
backend:
  name: github
  repo: HigorMoroni/higormoroni.github.io
  branch: master
  site_domain: https://higor.dev
  auth_type: implicit  # ❌ Tentava usar API da Netlify
  app_id: Ov23lizEMcXKZTgY3wA3
```

**Depois (funciona):**
```yaml
backend:
  name: github
  repo: HigorMoroni/higormoroni.github.io
  branch: master
  base_url: https://decap-cms-oauth-provider.vercel.app  # ✅ Proxy OAuth
  auth_endpoint: api/auth
```

A diferença é que agora usamos um **proxy OAuth externo** ao invés de tentar usar a API da Netlify (que só funciona em sites hospedados na Netlify).