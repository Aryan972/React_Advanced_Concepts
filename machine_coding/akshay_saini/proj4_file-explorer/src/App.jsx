import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import json from "./data.json";
import List from "./components/List";

export default function App() {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter name: ");
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...(node.children || []),
              { id: Date.now().toString(), name: name, isFolder: true, children: [] },
            ],
          };
        }

        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };

    setData((prev) => updateTree(prev));
  };

  const deleteNode = (itemId) => {
    const updateTree = (list) => {
      return list
      .filter((node) => node.id !== itemId) 
      .map((node) => {
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };

    setData((prev) => updateTree(prev));
  };

  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List list={data} addNodeToList={addNodeToList} deleteNode={deleteNode} />
    </div>
  );
}
