##Requisições

- App tem que ser em android.
  [ x ] O app deve ter um tocador de musica

[ ] O aplicativo deve ter um ordenador de playlist

[ x ] O aplicativo deve mostrar uma lista de reprodução atual, nome da música, duração, nome do artista e foto do álbum, juntamente com o nome (Get a List of Current User's Playlists : GET https://api.spotify.com/v1/me/playlists)

[ x ] a API para fornecer dados será SPOTIFY API

- ** EXTRA ** O usuário com o qual você pode fazer login é a conta spotify através do acesso ao OAuth Token

[ ] ** MAIN FUNCION ** A principal função do aplicativo é listar as 10 músicas menos tocadas de um artista específico que o usuário procura

- a atribuição regular não exige que você obtenha autenticação OAuth, mas isso é um extra e conta alguns pontos, como ter um bom design

get a playlist

https://developer.spotify.com/console/get-playlist/?playlist_id=37i9dQZF1DX7F6B5noG69s&market=&fields=

## HOW TO GET LESS PLAYED MUSIC

Atualmente, parece que primeiro precisamos obter os álbuns do artista com a API e depois enviar outra solicitação à API para obter as faixas de cada um dos álbuns do artista

Variant: debugAndroidTest
Config: debug
Store: /Users/xoblinha/.android/debug.keystore
Alias: AndroidDebugKey
MD5: 26:49:E3:FC:13:F7:AB:7B:41:07:4E:CC:E9:A9:BF:6B
SHA1: DC:DF:87:B1:AC:CC:CC:12:73:69:E9:21:E9:77:B4:86:1F:D2:E2:BF
DC:DF:87:B1:AC:CC:CC:12:73:69:E9:21:E9:77:B4:86:1F:D2:E2:BF
SHA-256: 4E:04:05:D3:AF:9C:49:36:59:E5:24:A7:7D:BD:02:7A:15:E6:B2:4D:6A:C2:D1:E1:6B:5D:5C:2D:D9:05:02:3E
Valid until: Quinta-feira, 2 de Setembro de 2049
