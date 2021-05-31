import logo from './logo.svg';
import './App.css';
import {useForm} from "react-hook-form";

function App() {

const {
  register,
  handleSubmit,
  formState: {errors, submitCount},
  watch

} = useForm({mode:'onChange'});

const onSubmit = data => console.log ('отправлено :', data);

const name = watch ('name');
const age = watch ('age');
// console.log ('Имя' + name);
// console.log ('Возраст' + age);

//console.log (errors);

  return (
    <form className="form" onSubmit={handleSubmit (onSubmit)}>
      <h1 className="title">Форма</h1>

      <input 
        defaultValue="John"
        {...register ('name', {required: true, maxLength: 15})}
      />
      {errors.name && <i>Обязательное поле - не более 15 символов</i>} 
      <hr />
      
      <input      
          {...register ('age', {required: true, pattern: /\d?\d/, min: 18, max: 99})}
      /> 
      {errors.age && <i>Обязательное числовое поле - от 18 до 99</i>}
      <hr />

      <select id="sel" {...register ('abbabalamaga')}>
        <option value='yes'>Да</option>
        <option value='no'>Нет</option>
      </select>
      <hr />

      <input type="submit" />
      Сколько раз отправлена ?  {submitCount}
    </form>
  );
}

export default App;
