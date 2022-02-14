## KompreJuntoChallenge - Part 2
Desafio de Programação - KompreJunto 2022 - Etapa FRONTEND


Olá!! 

Se você está aqui, provavelmente está participando do processo seletivo da Komprejunto! Seja muito bem-vindo, e esperamos que goste do desafio que vamos propor. Esta etapa foi pensada como uma maneira de apresentar a estrutura na qual a WEB atual (2022) funciona e aproveitamos para testar a capacidade dos candidatos com a principal tecnologia Frontend utilizada na empresa, o Ember.js (https://emberjs.com/). Este repositório é aberto a todo mundo, e qualquer um que quiser se testar ou aprender algo novo é extremamente bem-vindo!

Se você está lendo este texto, muito provavelmente já realizou a primeira etapa do processo, onde testamos principalmente as capacidades analíticas, de raciocínio lógico e programação dos candidatos. Se você ainda não realizou esta etapa, eu sugiro fortemente que o faça (disponível em https://github.com/Brunoporto2702/KompreJuntoChallenge), pois alguns dos conceitos trabalhados lá serão requisitados aqui. 

### Estrutura do desafio
O desafio é dividido basicamente em 3 etapas: 

1) Pesquisa e aclimação com a WEB e seu fluxo de informação. 
2) Pesquisa e aclimação com o principal framework de desenvolvimento frontend utilzado pela Komprejunto, o Ember.js.
3) Desenvolvimento de uma interface em Ember.js para a aplicação desenvolvida na primeira etapa do desafio. 

## Forma de entrega

Faça um fork deste repositório, desenvolva sua aplicação e envie o link para bruno.porto@komprejunto.com.br.

# 1) Pesquisa e aclimação com a WEB e seu fluxo de informação. 

Esta etapa do processo foi pensada para introduzir os principais conceitos e ferramentas que viabilizam a WEB como conhecemos no ano de 2022. Se você já tem experiência em desenvolvimento WEB e se sente confiante com assuntos como: servidores/clientes, HTML/CSS/Javascript, HTTP/HTTPS, SSR, SPA, SSG, FRONTEND/BACKEND e etc. Sinta-se a vontade para pular direto para a segunda parte do desafio. 

Vale salientar que tudo o que será apresentado nesta etapa é um "juntadão" de alguns conhecimentos e opiniões adiquiridos durante a prática efetiva de desenvolvimento de software totalmente voltados para fins mercadológicos e portanto não tem a ambição de servir como referência acadêmica ou algo do tipo, muito menos impor o que é certo ou errado. Por sinal, caso encontrem alguma gafe ou erro e queiram colaborar para tornar o material cada vez melhor, ficaríamos felizes em escutar suas sugestões de possíveis melhorias e/ou correções que possam surgir ao longo do processo! ;)

Ao longo do texto, serão colocadas referências, majoritariamente em formato de vídeos disponibilizados no youtube, que podem ajudar muito no entendimento dos conceitos que buscamos passar aqui. Além disso, é claro, sempre haverá uma infinidade de materiais disponíveis na internet onde é possível aprofundar cada vez mais seus conhecimentos nos assuntos tratados. E é claro, sempre haverá os livros, uma das principais fontes de informação profunda e confiável. 

## Servidores/clientes

Na opinão de quem escreve este texto, a internet é basicamente tráfego de informação, esteja ela em texto, imagem, vídeo ou qualquer outro formato que possamos encontrar. É uma consequência natural do surgimento de tecnologias de rede e comunicação desenvolvidas ao redor do mundo todo durante o século XX. 

Durante a década de 90 e início dos anos 2000, quando esta tecnologia chegava nas mãos de cidadãos comuns, a informação trafegava majoritariamente em formato de texto e era apresentada ao internauta através de um software conhecido como navegador. O navegador é responsável por de receber texto em formato HTML e formatar/renderizar o material para que um ser humano pudesse ler e entender. Na grande maioria dos casos, os textos ficavam armazenados *estaticamente* em servidores conectados através de uma rede TCP/IP de escala global conhecida como World Wide Web (WWW), e estes conteútos podiam ser econtrados por meio de endereços nomeados de URL (Uniform Resource Locator). Uma URL pode ser qualquer cadeia de caracteres que siga um determinado padrão estipulado, algo como www.komprejunto.com.br, que normalmente servia de "codinome" para determinado endereço IP, que então concatenado com sub-endereços como por exemplo www.komprejunto.com.br/contato poderiam chegar a determinados conteúdos. 

## HTTP/HTTPS

O protocolo que viabiliza o tráfego de informação entre os computadores conectados na internet é o TCP/IP. Em cima dele, foi adicionada uma camada extra de padrões e funcionalidades com o objetivo de otimizar a comunicação nesta rede específica. Este protocolo se chama *HTTP*. 

Não possuímos conhecimento suficiente para explicar as características que compõem este protocolo na sua raiz, em mais baixo nível. Porém, podemos afirmar que durante o seu cotidiano como desenovldor, ter conhecimentos do que é um cabeçalho e os possíveis códigos de retorno do HTTP. 

Conforme é possível observar neste link https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status, há uma vasta possbilidade de códigos de retorno. O mais importante é conhecer o que cada faixa de códigos signifca, e ficar preparado para procurar algum código em específico quando se deparar com ele no seu dia a dia. De maneira bem simplificada, as respostas dadas pelos servidores WEB variam entre estas faixas:

- 200-299 - Requisição processada com sucesso
- 300-399 - redirecinoamentos
- 400-499 - erro previsto causado, provavelmente, por algum equívoco do cliente que realizou a requisição
- 500-599 - erros inesperados/não tratados ocorreram durante o processamento da requisição.

Além dos códigos, comentamos também sobre o cabeçalho de uma requisição HTTP. Esta funcionalidade é basicamente um conjunto de informações comumente utilizadas na comunicação entre clientes que normalmente são pré-processadas antes de realizar a requisição de fato solicitada. Alguns exemplos de utilização dessa funcionalidade são: envio do tipo de informação ou template de comunicação que será usado na comunicação (JSON/XML/arquivo e etc.); envio de informação autenticação como tokens e credenciais, cookies e muito mais.

<p align="center">
  <img src="https://user-images.githubusercontent.com/53821307/153260273-455c06da-022d-45dd-80f5-646e10718074.png" alt="WWW basic structure and functioning"/>
</p>

## HTML/CSS/Javascript

No início da internet (anos 90/2000), basicamente os conteúdos que trafegavam pela rede eram arquivos de texto em formato HTML que "linkavam" a outros textos por meio dos Hiperlinks. No ínicio dos anos 2000, com o surgimento do javascript, pode-se dizer que houve uma revolução. Agora não era apenas texto que trafegava pela internet, mas aplicações inteiras. O javascript possibilitou que lógica fosse implementada por trás dos panos enquanto o usuário intergia com a interace dentro do navegador. Foi neste momento que aplicações como e-mail, e-commerces e qualquer outra aplicação WEB como conhecemos hoje surgiu. 

Há um vídeo do Fábio Akita que explica em maiores detalhes a maioria dos conceitos citados acima. Vale conferir o conteúdo! (https://www.youtube.com/watch?v=VKmPGmFY7H4&t=770s) 

## SSR, SPA, SSG

Ao longo do tempo, pode-se dizer que foram surgindo e evoluindo formas de organizar as aplicações WEB. Há um vídeo disponível no canal do Felipe Deschamps que explica muito bem as principais formas que existem atualmente e como elas se diferenciam entre sí! (https://www.youtube.com/watch?v=EW7m2WIvFgQ)

# 2) Pesquisa e aclimação com o principal framework de desenvolvimento frontend utilzado pela Komprejunto, o Ember.js.

A intenção desta parte do desafio é guiá-lo para que conheça as características do Ember.js de um ponto de vista técnico e prático, colocando a mão na massa e escrevendo um pouco de código!

Antes de começar a desenvolver, atente-se que você deve ser capaz de responder algumas perguntas: 

1) Ember.js é um framework que permite desenvolver aplicações de qual tipo: SSR, SPA ou SSG?
2) Quais são os pontos positivos de utilizar esta tecnologia? 
3) Quais os pontos negativos?
4) Cite 1 ou mais frameworks "concorrentes" que permitem desevolver aplicações do mesmo tipo que o Ember.js.

## Realização do tutorial tutorial 

Não há maneira melhor de conehcer uma tecnologia do que colocando a mão na massa e desenvolvendo uma aplicação, por mais simples que seja, com ela. Felizmente, há disponível no site do Ember.js, um totrial muito completo e didático sobre a biblioteca e suas características! Está disponível em https://guides.emberjs.com/release/tutorial/part-1/. 

Ao longo do tutorial, você desenvolverá uma aplicação de aluguel de residências, focando principalmente na apresentação das opções disponíveis para os visitantes da plataforma. Ao longo do processo, sugiro que preste atenção em alguns pontos: 

- O ember.js propõem uma estrutura de organização para seu código? Como é esta estrutura? Quais são os principais componentes dela?
- O ember.js é um framework que prioriza conveção ou invenção? 
- O ember.js propõem que centrelize-mos a busca de dados em um único local. Como ele é chamado? É o único local que podemos buscar informações externas? No tutorial você busca dados de um arquivo JSON, como você acha que isto é feito em uma aplicação real e dinâmica? 

# 3) Desenvolvimento de uma interface em Ember.js para a aplicação desenvolvida na primeira etapa do desafio. 

Agora que você já tem um conhecimento básico sobre o funcionamento da WEB, realizou o tutorial e leu boa parte da documentação disponível para o Ember.js, a sua missão será realizar uma interface que implemente o algorítmo de cáculo de preço de frete e logística desenvolvido no primeiro desafio (disponível em https://github.com/Brunoporto2702/KompreJuntoChallenge). 

Sua aplicação deve atender aos seguintes requisitos: 

- A aplicação deve conter pelo menos um local onde é possível vizualizar pedidos existentes e um local onde é possível criar novos pedidos informando os dados de entrada. 
- Os dados que antes eram consultados em arquivos CSV agora devem ser carregados no ember data e disponibilizados para acesso nos controllers. Carregue os dados em um arquivo de rota.

Importante! Se você está realizando o processo seletivo, leve em consideração os pontos que estamos avaliando: 

- Autonomia: você deve ser capaz de ler, compreender e implementar conhecimentos adiquiridos de forma independente. 
- Comunicação: fazer as perguntas certas nas horas certas. O seu tempo é valioso, e o de seus pares e superiores também! É sua responsabilidade identificar os pontos e questões que valem a pena serem compartilhados e discutidos com a equipe, de maneira a otimizar o tempo de todos. Portanto entre em contato quando julgar necessário por meio do e-mail: bruno.porto@komprejunto.com.br. 
- Capacidades técnicas em desenvolvimento de software: qualidade e robustez das soluções desenvolvidas. 

# Boa sorte!!
