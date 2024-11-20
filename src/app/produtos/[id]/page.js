'use client'
import Image from "next/image";
import styles from "../../page.module.css";
import { useParams, useRouter } from "next/navigation";

export default function Produtos() {
  const params = useParams();
  const id = params.id; // `id` é string, então não precisa parsear diretamente
  const router = useRouter();

  // Defina um objeto para mapear IDs para imagens
  const imagens = {
    1: "/teste.png",
    2: "/teste2.png",
    3: "/teste3.png",
  };

  const preco = {
    1: 10.99,
    2: 9.99,
    3: 12.99,
  }

  // Obtenha a URL da imagem com base no ID, ou use uma padrão
  const imagemExibida = imagens[id];
  const precoExibido = preco[id];

  // Função para ir para o próximo produto
  const irParaProximoProduto = () => {
    let proximoId = parseInt(id) + 1; // Obtém o próximo ID
    if (proximoId > 3) { // Limita o ID até 3, voltando para 1 quando exceder
      proximoId = 1;
    }
    router.push(`/produtos/${proximoId}`); // Navega para o próximo produto
  };

  return (
    <div 
      className={styles.page} 
      onClick={irParaProximoProduto} // Ao clicar, vai para o próximo produto
    >
      <h1>Produto {id}</h1>
      <Image
        src={imagemExibida}
        alt={`Produto ${id}`}
        width={500} 
        height={300} 
        className={styles.imagens}
      />
      <h3>Preço: {precoExibido}</h3>
    </div>
  );
}
