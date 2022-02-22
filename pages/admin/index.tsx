import { FC, useState } from "react";
import { useFirebase } from "../../hooks/useDatabase";
import { v4 as uuid } from "uuid";

const Admin: FC = () => {
  const { handleAddNewProduct } = useFirebase();
  const [flavour, setFlavour] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  return (
    <div>
      <h1>Admin</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label> Sabor: </label>
        <input
          type="text"
          name="sabor"
          value={flavour}
          required
          onChange={(event) => setFlavour(event.target.value)}
        />
        <label> Descrição: </label>
        <input
          type="text"
          name="descricao"
          value={description}
          required
          onChange={(event) => setDescription(event.target.value)}
        />
        <label> Preço: </label>
        <input
          type="text"
          name="preco"
          value={price}
          required
          onChange={(event) => setPrice(event.target.value)}
        />
        <label> Tipo: </label>
        <input
          type="text"
          name="tipo"
          value={type}
          required
          onChange={(event) => setType(event.target.value)}
        />
        <label> Imagem: </label>
        <input
          type="text"
          name="imagem"
          value={imageUrl}
          required
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <button
          type="submit"
          onClick={async () => {
            if (
              flavour === "" ||
              description === "" ||
              price === "" ||
              type === "" ||
              imageUrl === ""
            ) {
              alert("Preencha todos os campos");
            } else {
              try{
              await handleAddNewProduct({
                flavor: flavour,
                description: description,
                price: price,
                type: type,
                id: uuid(),
                imageUrl: imageUrl,
              });
                alert("Produto adicionado com sucesso");
                setFlavour("");
                setDescription("");
                setPrice("");
                setType("");
                setImageUrl("");
            } catch(e) {
                alert(e);
            }


            }
          }}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default Admin;
