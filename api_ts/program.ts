import StartUp from './startUp';

const port = process.env.PORT || '3050';

StartUp.app.listen(port, () => {
  console.log(`servidor executando na porta ${port}`);
});
