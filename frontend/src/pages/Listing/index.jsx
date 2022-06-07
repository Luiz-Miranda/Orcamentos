import { useState } from "react";



export default function Listing() {


    const initialWidth = {
        width: ""

    }
    const initialHeight = {
        heigth: ""
    }

    const [largura, setLargura] = useState(initialWidth);
    const [altura, setAltura] = useState(initialHeight);

    const handleWidthInput = event => {
        setLargura({
            width: event.target.value
        })
    }
    const handleSubmit = event =>{
        event.preventDefault()

    }

    return (
        <body>
            
            <div className="text-center m-5 ">
            <h1 className="fw-bold fst-italic">Persiana Mega 25</h1>
            </div>
            
            <form className=" fw-bold container" onSubmit={handleSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-4">
                        <label className="largura mt-3" htmlFor="inlineFormInput">Largura</label>
                        <input onChange={handleWidthInput} type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Digite a Largura" />
                    </div>
                    <div className="col-4">
                        <label className="sr-only" htmlFor="inlineFormInputGroup">Altura</label>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Digite a Altura" />
                        </div>
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-primary mb-2">Calcular</button>
                    </div>
                </div>
            </form>
            <table className="table table-bordered  border-dark container mt-5">
                <thead>
                    <tr>
                        <th scope="col">Materiais</th>
                        <th scope="col">Largura</th>
                        <th scope="col">Altura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Resultado</td>
                        <td>{largura.width}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </body>
    );
}