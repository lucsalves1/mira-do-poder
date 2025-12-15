# 📁 Pasta de Mídia

Esta pasta deve conter todos os seus arquivos de áudio (MP3) e vídeo (MP4).

## Arquivos Esperados

Coloque seus arquivos aqui com os seguintes nomes (ou edite o App.tsx para usar nomes diferentes):

### Áudios (MP3):
- `roberto-casa-palavras.mp3`
- `roberto-audio.mp3`
- `beto-audio.mp3`

### Vídeos (MP4):
- `marcilio-depoimento.mp4`
- `marcilio-video.mp4`
- `pesquisador-video.mp4`

## Como Usar

1. Arraste seus arquivos MP3 e MP4 para esta pasta (`/public/media/`)
2. Certifique-se de que os nomes correspondem aos listados acima, ou
3. Edite `/src/app/App.tsx` para usar os nomes dos seus arquivos

## Exemplo de Caminho

Quando você adiciona um arquivo chamado `meu-audio.mp3` nesta pasta, use no código:

```tsx
<MediaPlayer
  type="audio"
  label="Meu Áudio"
  src="/media/meu-audio.mp3"
/>
```

**Importante:** O caminho sempre começa com `/media/` (a pasta `public` é implícita).
