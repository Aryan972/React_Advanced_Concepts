import { useState } from 'react';

export default function List( {list} ) {

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
                {isExpanded?.[node.name] && node?.children && <List list={node.children} />}
            </div>
            ))}
        </div>
    )
}