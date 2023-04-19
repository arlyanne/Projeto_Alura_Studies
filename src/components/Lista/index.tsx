import React from 'react';

function Lista() {

    const tarefa = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }]


    return (
        <div>
            {tarefa.map((item, index) => (
                <div>
                    <h3> {item.tarefa} </h3>
                    <p> {item.tempo}</p>
                </div>
            ))}
        </div>
    )
}

export default Lista;