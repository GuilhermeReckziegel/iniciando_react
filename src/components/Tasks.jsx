import React from 'react';

import Item_task from './itemTask';

const Tasks = ({ tasks }) => {

    return (
        <>

        {tasks.map((item_task) => (
            <Item_task  item_task={item_task} />

        ))}

        </>
    );
};

export default Tasks;