# Descrição do Pull Request

**Resumo das mudanças:**
Neste pull request, foram realizadas diversas melhorias e correções tanto no back-end quanto no front-end do projeto de gerenciamento de notas. As principais alterações incluem a criação e aprimoramento das funcionalidades de criação, edição e exclusão de notas, bem como a implementação de uma interface de usuário mais moderna e funcional.

**Mudanças realizadas:**

- **Back-end:**
  - **Endpoints API**: Criados e/ou ajustados endpoints para gerenciar notas, incluindo operações de CRUD (Create, Read, Update, Delete).
  - **Lógica de Negócios**: Implementada a lógica para marcar notas como favoritas e para atualizar a cor das notas.
  - **Estrutura de Banco de Dados**: Ajustes na estrutura do banco de dados para suportar as novas funcionalidades, incluindo campos para cor e status de favorito.
  - **Ferramentas e Tecnologias**: Utilizamos Laravel 10 com Laravel Sail para o back-end, e MySQL integrado para gerenciamento de dados.

- **Front-end:**
  - **Interface de Usuário**: Melhorias na interface com React para uma experiência mais moderna e responsiva. Implementação de um layout aprimorado para criar, editar e visualizar notas.
  - **Barra de Busca**: Adicionada funcionalidade de busca para filtrar notas pelo título.
  - **Modais e Pop-ups**: Ajustados os modais para edição e escolha de cor das notas, com design mais limpo e responsivo.
  - **Correção de Bugs**: Resolução de problemas relacionados à exibição de notas e à interação com a barra de busca.
  - **Ferramentas e Tecnologias**: Utilizamos uma imagem Docker `node:18-alpine` para o front-end, com Docker Compose para facilitar a configuração e execução.

**Instruções para Testar:**

1. **Configuração do Ambiente:**

   - **Back-end (Laravel + Docker):**
     1. Certifique-se de que o Docker e Docker Compose estão instalados.
     2. Navegue até a pasta `backend` e execute o seguinte comando para iniciar o ambiente:
        ```bash
        cd backend
        docker-compose up -d
        ```
     3. O Laravel Sail irá iniciar o back-end e o MySQL em containers Docker. Os serviços estarão acessíveis conforme configurado no arquivo `docker-compose.yml`.

   - **Front-end (React + Docker):**
     1. Navegue até a pasta `frontend` e execute o seguinte comando para iniciar o ambiente:
        ```bash
        cd frontend
        docker-compose up -d
        ```
     2. A imagem Docker `node:18-alpine` será utilizada para rodar o front-end. O serviço estará acessível na porta configurada no arquivo `docker-compose.yml`.

2. **Testar Funcionalidades:**
   - **Criação de Nota**: Verifique se é possível criar novas notas e se elas aparecem na lista.
   - **Edição de Nota**: Teste a edição de notas existentes e verifique se as alterações são salvas corretamente.
   - **Exclusão de Nota**: Confirme que a exclusão de notas funciona e que as notas são removidas da lista.
   - **Busca de Nota**: Utilize a barra de busca para filtrar notas pelo título e verifique se o filtro funciona corretamente.
   - **Favoritar e Colorir Notas**: Teste a funcionalidade de marcar notas como favoritas e alterar suas cores.

**Imagens:**
- Captura de tela da interface:
  ![Tela Inicial](imagens/tela-inicial-completa-notas.png)

  - Captura de tela da interface:
  ![Tela de Criação](imagens/tela-inicial-criacao-notas.png)

  - Captura de tela da interface:
  ![Tela de Edição Cor Nota](imagens/tela-inicial-edicao-cor-notas.png)

**Notas Adicionais:**
- Certifique-se de que as variáveis de ambiente estejam corretamente configuradas, especialmente para as credenciais do banco de dados e URLs da API.
- Verifique se Docker e Docker Compose estão atualizados e funcionando corretamente.
- Em caso de problemas, consulte a documentação do Laravel Sail, Docker e React, bem como qualquer documentação adicional fornecida para o projeto.

