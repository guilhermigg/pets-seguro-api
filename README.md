# Pets Seguro API

<div align="center">

Uma API desenvolvida para o teste técnico da MeuPetClub

![Logotipo do MeuPetClub](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEh74naIH8AqdrrGzJrvereEDsxE3zyDCYz2GYcqkoxg&s) 

</div>

## Tecnologias
- Backend
  - NestJS
- Banco de dados
  - MongoDB
  - Prisma
- Testes
  - Jest
- Infraestrutura
  - Docker

## Roadmap

### Essenciais 
- [ ] CRUD de usuários
  - [ ] Administrador
  - [ ] Cliente

- [ ] CRUD de Planos
- [ ] CRUD de pet

- [ ] Sistema de Autenticação/Autorização

### Bônus
- [ ] Cache com Redis
- [ ] Método de pagamento
- [ ] Entregar credenciais de acesso via Email
 

## Rodando o projeto

Antes de iniciar, deve-se editar e configurar o arquivo .env.example. Faça uma cópia e dele e renomeie para `.env`, e então edite as variáveis de ambiente.
O projeto foi feito utilizando Docker Compose. Então com o simples comando `docker compose up` já irá iniciar o projeto.
São dois contêineres, um para o MongoDB e outro para a aplicação NestJS. 
