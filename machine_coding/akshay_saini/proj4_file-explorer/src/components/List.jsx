import { useState } from 'react';

export default function List( {list, addNodeToList} ) {

    const [isExpanded, setIsExpanded] = useState({});


    return (
        <div className='container'>
            {list && list.map((node) => (
            <div className="file" key={node.id}>
                {node.isFolder && (
                    <span 
                        className="folder" 
                        onClick={() => setIsExpanded((prev) => ({
                            ...prev,
                            [node.name] : !prev[node.name],
                        }))}
                    >
                    {isExpanded?.[node.name] ? "-" : "+"}
                    </span>
                )}
                <span>{node.name}</span>
                {node?.isFolder && (
                    <span onClick={() => addNodeToList(node.id)}>
                        <img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/add-folder-icon.png"
                            alt="icon"
                            className="icon"
                        />
                    </span>
                )}
                {isExpanded?.[node.name] && node?.children && (
                    <List list={node.children} addNodeToList={addNodeToList}/>)}
            </div>
            ))}
        </div>
    )
}