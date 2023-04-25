import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../types/tarefa';



function Lista({tarefas} : {tarefas: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2><strong> Estudos do Dia </strong> 
             </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo} selecionado={false} completado={false} id={''}                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;