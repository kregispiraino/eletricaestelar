# Elétrica Estelar

Site estático em HTML, CSS e JavaScript, com a identidade oficial da Elétrica Estelar aplicada a um tema branco e dourado. Versão aprovada para produção em https://estelareletrica.com/. O Railway publica a branch `main` de `kregispiraino/eletricaestelar`, no projeto `focused-tenderness`, serviço `eletricaestelar`, ambiente `production`.

## Revisão local

Abra `index.html` no navegador. Não precisa instalar dependências nem compilar. Para revisar por HTTP, execute na pasta do projeto:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Acesse http://127.0.0.1:8765. A fonte Arial usa o sistema; fotos e logo são locais. O mapa incorporado e os links de contato precisam de internet.

## Conteúdo

As três abas usam exclusivamente os 14 serviços do catálogo atual, sem duplicação:

- **Residencial:** câmeras de segurança, portão eletrônico e reparos elétricos em destaque. Chuveiro elétrico, torneira elétrica, pressurizador de água e tomadas e pontos elétricos aparecem em “Também podemos ajudar com”.
- **Geral:** projeto elétrico completo, circuitos em geral e instalação de painéis e máquinas.
- **Industrial:** manutenção em painéis, troca de disjuntores e reparo em circuito de máquinas em destaque. Troca de componentes aparece como serviço complementar.

Os nove destaques usam exatamente as fotografias correspondentes no site anterior. Os títulos e descrições foram preservados. A logo original `assets/logo.png` tem texto escuro; o CSS enquadra suas margens transparentes sem modificar a arte.

## Arquivos

- `index.html`: conteúdo, abas, mapa e dados estruturados.
- `css/styles.css`: layout responsivo e paleta dourada oficial (`#D2AC6A`, `#E5C785`), com branco e cinzas claros neutros.
- `js/config.js`: telefone e mensagem padrão de contato.
- `js/main.js`: menu, navegação das abas por teclado e contato direto pelo WhatsApp.
- `js/analytics.js`: conta Google Ads já presente no site atual. Carrega somente em `estelareletrica.com` e `www.estelareletrica.com`, evitando eventos na revisão local.
- `assets/`: logo, favicon e fotografias originais.
- `robots.txt` e `sitemap.xml`: indexação no domínio atual.

## Contato e orçamento

WhatsApp e telefone: **(47) 99611-5841** (`5547996115841`). Os botões abrem diretamente o WhatsApp, sem modal nem formulário intermediário. Nos cartões de serviço, a mensagem já inclui o serviço selecionado. O visitante revisa e envia a mensagem no WhatsApp. Os serviços complementares são apenas texto.

O mapa incorporado aponta para Rua Antônio Inácio Kons, 257, Testo Salto, Blumenau/SC. O endereço também tem um link externo para o Google Maps. O atendimento é móvel, em Blumenau e região, de segunda a sábado.

## Publicação

Envie `index.html`, `robots.txt`, `sitemap.xml` e as pastas `css`, `js` e `assets` para a raiz pública da hospedagem, mantendo os caminhos. Não há etapa de build. As versões anteriores permanecem no histórico Git. Os assets antigos foram mantidos para preservar URLs já compartilhadas.

Canonical, imagem de compartilhamento, sitemap e dados estruturados estão preparados para **https://estelareletrica.com/**. Se o domínio mudar, atualize essas referências e os hosts autorizados em `js/analytics.js`. A conta Google Ads existente foi preservada; não foram inventados eventos ou identificadores de conversão.

A origem dos materiais está em `FONTES-E-CREDITOS.txt`.

## Verificação desta revisão

Layout inspecionado em 1440, 768, 390 e 320 px, sem rolagem horizontal. Validados no navegador: três abas, navegação por teclado, nove fotografias, menu móvel, links diretos com mensagem do serviço para o WhatsApp correto. Mapa do Google carregado no endereço informado. Conferidos arquivos locais, âncoras, IDs únicos, sintaxe JavaScript e os 14 serviços do catálogo original. Nenhuma mensagem foi enviada durante os testes.

Ajustes da revisão visual: fonte Arial, logo menor no cabeçalho, título em preto, menu que permanece no início da página, faixa de informações fixa no topo, telefone proporcional no rodapé, botões de orçamento e consulta em dourado e botão de contato do menu em dourado e WhatsApp flutuante em verde. A legenda da foto usa apenas texto branco com sombra e um degradê sobre a imagem para manter a leitura. A abertura tem fundo branco, fotografia ampliada e uma transição curta para dar mais destaque à imagem; as seções de conteúdo usam cinza muito claro. Na versão em revisão, o menu usa bege claro e a seção final “Vamos resolver?” usa um card centralizado em grafite, com cantos arredondados, espaço branco ao redor, texto claro e botão dourado. O título “E a gente cuida como deve ser.” ocupa uma única linha com tamanho responsivo.
