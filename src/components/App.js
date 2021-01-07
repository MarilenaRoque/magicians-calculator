import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

console.log(calculate({
  total: '',
  next: '10',
  operation: '',
}, '%'));

function App() {
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default App;
