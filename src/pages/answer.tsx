import Link from "next/link"

export default function Answer() {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center">
      <div className="w-1/2 flex flex-col justify-center gap-2">
        <span>Texto:</span>
        <span className="bg-zinc-200 p-4 rounded">
          tres aneis para os reis elficos sob este ceu sete para os senhores
          anaos em seus rochosos corredores nove para homens mortais fadados ao
          eterno sono um para o senhor do escuro em seu escuro trono na terra de
          mordor onde as sombras se deitam um anel para a todos governar um anel
          para encontra los um anel para a todos trazer e na escuridao aprisiona
          los na terra de mordor onde as sombras se deitam
        </span>
      </div>

      <div className="w-1/2 flex flex-col justify-center gap-2">
        <span>Alfabeto chave:</span>
        <span className="bg-zinc-200 p-2 rounded">
          QWERTYUIOPASDFGHJKLZXCVBNM
        </span>
      </div>

      <div className="w-full flex justify-center items-center">
        <Link href={"/"} className="hover:text-zinc-600">
          Back
        </Link>
      </div>
    </div>
  )
}
