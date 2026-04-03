import { useState } from 'react';

export default function List( {list, addNodeToList, deleteNode} ) {

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

                {node?.id && (
                    <span onClick={() => deleteNode(node.id)}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInOzZAX3_KiSl0piFlcVaHcmG5sAXw2cnCQ&s"
                            alt="icon"
                            className="icon"
                        />
                </span>
                )}
                {isExpanded?.[node.name] && node?.children && (
                    <List list={node.children} addNodeToList={addNodeToList} deleteNode={deleteNode}/>)}
            </div>
            ))}
        </div>
    )
}