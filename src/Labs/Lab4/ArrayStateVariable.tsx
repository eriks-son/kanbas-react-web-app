import { useState } from "react";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables" className="">
            <h2>Array State Variable</h2>
            <button className="btn btn-success m-2" onClick={addElement}>
                Add Element
            </button>
            <ul className="col-2">
                {array.map((item, index) => (
                    <li className="row border border-secondary rounded p-1" key={index}>
                        <div className="col">
                            {item}
                        </div>
                        <button onClick={() => deleteElement(index)}
                        id="wd-delete-element-click" className="col btn btn-danger">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}