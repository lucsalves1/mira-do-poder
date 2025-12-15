# 📁 Guia para Adicionar Arquivos de Mídia (Áudio e Vídeo)

## Estrutura de Pastas

Para adicionar seus arquivos de áudio e vídeo ao projeto, siga esta estrutura:

```
seu-projeto/
├── public/
│   └── media/
│       ├── roberto-casa-palavras.mp3
│       ├── roberto-audio.mp3
│       ├── beto-audio.mp3
│       ├── marcilio-depoimento.mp4
│       ├── marcilio-video.mp4
│       └── pesquisador-video.mp4
├── src/
│   └── app/
│       └── App.tsx
└── ...
```

## Passo a Passo

### 1. Criar a Pasta Public (se não existir)

Na raiz do seu projeto, crie uma pasta chamada `public`:

```
/public
```

### 2. Criar a Subpasta Media

Dentro de `public`, crie uma pasta chamada `media`:

```
/public/media
```

### 3. Adicionar Seus Arquivos

Coloque seus arquivos MP3 e MP4 dentro da pasta `/public/media/`. Os arquivos que o código está esperando são:

**Arquivos de Áudio (MP3):**
- `roberto-casa-palavras.mp3`
- `roberto-audio.mp3`
- `beto-audio.mp3`

**Arquivos de Vídeo (MP4):**
- `marcilio-depoimento.mp4`
- `marcilio-video.mp4`
- `pesquisador-video.mp4`

### 4. Renomear Seus Arquivos (Opcional)

Você pode renomear seus arquivos para corresponder aos nomes acima, **OU** pode editar o arquivo `/src/app/App.tsx` para usar os nomes dos seus arquivos.

## Como Editar os Nomes dos Arquivos no Código

Se você quiser usar nomes diferentes para seus arquivos, edite o arquivo `/src/app/App.tsx` e procure por linhas como estas:

```tsx
<MediaPlayer
  type="audio"
  label="ROBERTO SOBRE CASA DE PALAVRAS"
  src="/media/roberto-casa-palavras.mp3"  // ← Altere aqui
/>
```

Substitua `/media/roberto-casa-palavras.mp3` pelo caminho do seu arquivo, por exemplo:

```tsx
src="/media/meu-audio-personalizado.mp3"
```

## Formatos Suportados

- **Áudio**: `.mp3`, `.wav`, `.ogg`, `.m4a`
- **Vídeo**: `.mp4`, `.webm`, `.ogv`

**Recomendação**: Use `.mp3` para áudio e `.mp4` para vídeo, pois têm melhor compatibilidade entre navegadores.

## Testando

Após adicionar os arquivos:

1. Certifique-se de que os arquivos estão na pasta `/public/media/`
2. Recarregue a página no navegador
3. Clique no botão de play nos media players
4. O áudio/vídeo deve começar a reproduzir

## Solução de Problemas

### "O áudio/vídeo não toca"

- Verifique se o arquivo está na pasta correta (`/public/media/`)
- Verifique se o nome do arquivo no código corresponde ao nome real do arquivo
- Certifique-se de que o formato do arquivo é suportado
- Abra o console do navegador (F12) para ver se há erros

### "O vídeo não aparece"

- Verifique se o arquivo é realmente um vídeo (`.mp4`, `.webm`, etc.)
- Verifique o caminho no atributo `src` do componente MediaPlayer
- Teste o arquivo em um player de vídeo local para garantir que não está corrompido

## Exemplo Completo

Se você tem um arquivo chamado `entrevista-jose.mp3`, faça o seguinte:

1. Coloque o arquivo em `/public/media/entrevista-jose.mp3`
2. Edite `/src/app/App.tsx`
3. Encontre o MediaPlayer que você quer alterar
4. Altere o `src`:

```tsx
<MediaPlayer
  type="audio"
  label="ENTREVISTA COM JOSÉ SEABRA"
  src="/media/entrevista-jose.mp3"
/>
```

## Notas Importantes

- O caminho sempre começa com `/media/` (não use `./` ou `../`)
- Os nomes dos arquivos são case-sensitive (maiúsculas e minúsculas importam)
- Evite espaços e caracteres especiais nos nomes dos arquivos
- Use hífens (`-`) ou underscores (`_`) ao invés de espaços

---

**Pronto!** Seus arquivos de mídia agora estão integrados ao projeto e funcionando perfeitamente. 🎵🎬
