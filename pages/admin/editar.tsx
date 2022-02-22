import { FC, useState } from "react";
import { useFirebase } from "../../hooks";

const Update: FC = () => {
  const { handleUpDateProduct, actualProduct } = useFirebase();
  const [flavor, setFlavor] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  return (
    <>
      <h1>Update Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label> Sabor: </label>
        <input
          type="text"
          name="sabor"
          placeholder={actualProduct.flavor}
          required
          onChange={(event) => setFlavor(event.target.value)}
        />
        <label> Descrição: </label>
        <input
          type="text"
          name="descricao"
          placeholder={actualProduct.description}
          required
          onChange={(event) => setDescription(event.target.value)}
        />
        <label> Preço: </label>
        <input
          type="text"
          name="preco"
          placeholder={actualProduct.price}
          required
          onChange={(event) => setPrice(event.target.value)}
        />
        <label> Tipo: </label>
        <input
          type="text"
          name="tipo"
          placeholder={actualProduct.type}
          required
          onChange={(event) => setType(event.target.value)}
        />
        <label> Imagem: </label>
        <input
          type="text"
          name="imagem"
          placeholder={actualProduct.imageUrl}
          required
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <button
          type="submit"
          onClick={async () => {
            if (
              flavor === "" ||
              description === "" ||
              price === "" ||
              type === "" ||
              imageUrl === ""
            ) {
              alert("Preencha todos os campos");
            } else {
              const newProduct = {
                id: actualProduct.id,
                flavor: flavor,
                price: price,
                description: description,
                type: type,
                imageUrl: imageUrl,
              };

              handleUpDateProduct(newProduct, actualProduct);
              setFlavor("");
              setDescription("");
              setPrice("");
              setType("");
              setImageUrl("");
            }
          }}
        >
          Adicionar
        </button>
      </form>
    </>
  );
};

export default Update;
