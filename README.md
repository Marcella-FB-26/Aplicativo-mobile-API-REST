## APP LISTA DE USUÁRIO COM API REST
Esse aplicativo exibe uma lista de usuário ficticias e ao clicar em cada um susario é permitdo visualizar os detalhes. É um aplicativo React Nativo, desenvolvido pelo Expo. A lista de usário é carregada a partir da API pública JSONPlaceholder.


Estrutura do Código
O código está dividido em três componentes principais:

1. `UsersList`: Exibe uma lista de usuários com nome, e-mail e uma imagem de avatar.
2. `UserDetails`: Exibe detalhes do usuário selecionado, como telefone, site e endereço.
3. `App`: Controla a navegação entre os componentes de lista e detalhes.

### Estrutura de Arquivos

├── App.js                # Componente principal que gerencia a navegação
├── README.md             # Este arquivo
└── package.json           # Configuração do projeto e dependências
## Depêndencias 

O projeto usa as seguintes depêndencias:

react: Biblioteca principal do React.
react-native: Framework para desenvolvimento de aplicativos móveis nativos

 **Carregamento de Dados:**
   - O componente `UsersList` faz uma requisição HTTP para `https://jsonplaceholder.typicode.com/users`.
   - Os dados retornados são armazenados no estado e exibidos na tela.
   - Se ocorrer um erro na requisição, uma mensagem de erro é mostrada.

**Seleção de Usuário:**
   - O usuário pode tocar em um item da lista para visualizar seus detalhes.
   - Isso aciona a função `onSelectUser`, que altera o estado `selectedUserId` no componente `App`.

 **Exibição de Detalhes:**
   - O componente `UserDetails` faz uma nova requisição para obter os detalhes do usuário selecionado.
   - Os detalhes incluem nome, e-mail, telefone, site e endereço.
   - Um botão "Voltar" permite retornar à tela inicial.

## Estilos
Os estilos são definidos usando `StyleSheet` do React Native. O aplicativo possui um layout responsivo, com:
- Cores em tons de azul para fundo e elementos visuais.
- Cartões (`card`) para exibição de informações.
- Avatares obtidos da API `https://i.pravatar.cc/150?img=<id>`.

## Como Executar

# Certifique-se de ter o Node.js e o Expo CLI instalados.

# Clone este repositório e acesse o diretório do projeto:
git clone <URL_DO_REPOSITORIO>
cd nome-do-projeto

# Instale as dependências:
npm install

# Inicie o aplicativo:
npx expo start
