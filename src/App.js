import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [nameProduct, setNameProduct] = useState("");
  const [desc, setDesc] = useState("");
  const [qtd, setQtd] = useState("");

  let registerDB = [];

  if (localStorage.getItem("registerSuccess") === null) {
    registerDB = [];
  } else {
    registerDB = localStorage.getItem("registerSuccess");
    registerDB = JSON.parse(registerDB);
  }

  function addClient() {
    const saveName = name;
    const saveEmail = email;

    registerDB.push({ saveName, saveEmail });
    localStorage.setItem("/ClientRegister", JSON.stringify(registerDB));
    //setRegister(true);
  }

  function addProduct() {
    const saveNameProduct = nameProduct;
    const saveDesc = desc;
    const saveQtd = qtd;

    registerDB.push({ saveNameProduct, saveDesc, saveQtd });
    localStorage.setItem("/ProductRegister", JSON.stringify(registerDB));
    //setRegister(true);
  }

  function readAll() {
    var client = localStorage.getItem("/ClientRegister");
    //var product = localStorage.getItem("/ProductRegister");

    client.name = document.getElementById("clientName").value;
  }

  return (
    <div className="App">
      <div>
        <input name="Nome" id="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input name="Email" id="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="button" onClick={(e) => addClient({ name, email })}>
          Cadastrar Cliente
        </button>
      </div>
      <div>
        <input name="Nome" id="name" placeholder="Nome" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} />
        <input name="Descrição" id="description" placeholder="Descrição" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <input name="Quantidade" id="quantity" placeholder="Quantidade" value={qtd} onChange={(e) => setQtd(e.target.value)} />
        <button type="button" onClick={(e) => addProduct({ nameProduct, desc, qtd })}>
          Cadastrar Produto
        </button>
      </div>
    </div>
  );
}

export default App;
