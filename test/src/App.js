import Table from './table'
function App() {
  return (
    <>
    <header className='mx-4 my-2 text-danger'> Ход торгов Тестовые торги на аппарат ЛОТОС №2033564 </header>
      <hr/>
      <div className="m-5">
        <h6 className='text-danger'>Уважаемые участники, во время хода вы можете изменить параметры торгов, указанных в таблице</h6>
         <Table/>
      </div>
  </>
);
}

export default App;
