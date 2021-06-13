import React from 'react';
import Item from './Item'


const StudentsList = (props) => {

    
    const StudentsList = props.StudentsList.map(it => (
        <Item key={it} text={it}/>
    ))


    return (
        <div className="list-box">  
            <ul>
                <h2 className="student-header">Students</h2> 
               {StudentsList}
            </ul>
        
        </div>
    );
    
}

export default StudentsList;