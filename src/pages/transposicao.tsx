import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Transposicao() {
  const [text, setText] = useState("")
  const [key, setKey] = useState(0)
  const [encryptedText, setEncryptedText] = useState("")

  const [text2, setText2] = useState("")
  const [key2, setKey2] = useState(0)
  const [decryptedText, setDecryptedText] = useState("")

  function handleEncrypt() {
    let novoTextoCriptografado = encrypt(text, key)
    setEncryptedText(novoTextoCriptografado)
  }

  function handleDecrypt() {
    let decryptedText = decrypt(text2, key2)
    setDecryptedText(decryptedText)
  }

  return (
    <main className={`h-screen ${inter.className}`}>
      {/* <Link href={"/transposicao"}>Transposição</Link> */}

      <div className="h-screen w-full flex flex-row gap-16 justify-center items-center">
        <section className="w-96 border border-black rounded-lg p-4">
          <div className="">
            <div className="flex items-center justify-center flex-col gap-2">
              <div className="flex flex-col w-full">
                <label htmlFor="text">Texto para ser criptografado</label>
                <input
                  id="text"
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="bg-zinc-200 rounded"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="key">Chave</label>
                <input
                  id="key"
                  type="text"
                  value={key}
                  onChange={(e) => setKey(parseInt(e.target.value))}
                  className="bg-zinc-200 rounded"
                />
              </div>

              <button
                onClick={handleEncrypt}
                className="bg-zinc-200 rounded p-1"
              >
                Encrypt
              </button>

              <div className="flex flex-col w-full">
                <input
                  id="result"
                  type="text"
                  value={encryptedText}
                  className="bg-zinc-200 rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-96 border border-black rounded-lg p-4">
          <div className="">
            <div className="flex items-center justify-center flex-col gap-2">
              <div className="flex flex-col w-full">
                <label htmlFor="text">Texto para ser descriptografado</label>
                <input
                  id="text"
                  type="text"
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
                  className="bg-zinc-200 rounded"
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="key">Chave</label>
                <input
                  id="key"
                  type="text"
                  value={key2}
                  onChange={(e) => setKey2(parseInt(e.target.value))}
                  className="bg-zinc-200 rounded"
                />
              </div>

              <button
                onClick={handleDecrypt}
                className="bg-zinc-200 rounded p-1"
              >
                Decrypt
              </button>

              <div className="flex flex-col w-full">
                <input
                  id="result"
                  type="text"
                  value={decryptedText}
                  className="bg-zinc-200 rounded"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function encrypt(text: string, key: number) {
  let numLinhas = Math.ceil(text.length / key)

  let matriz = Array(numLinhas)
    .fill(0)
    .map(() => Array(key).fill(""))

  text = text.replace(/\s/g, "")
  let index = 0
  for (let i = 0; i < numLinhas; i++) {
    for (let j = 0; j < key; j++) {
      if (index < text.length) {
        matriz[i][j] = text.charAt(index++)
      } else {
        break
      }
    }
    console.log(matriz[i].join(""))
  }

  let encryptedText = ""
  for (let j = 0; j < key; j++) {
    for (let i = 0; i < numLinhas; i++) {
      if (matriz[i][j] !== undefined) {
        encryptedText += matriz[i][j]
      }
    }
  }

  return encryptedText.toLocaleUpperCase()
}

function decrypt(text: string, key: number) {
  let numLinhas = Math.ceil(text.length / key)

  let matriz = Array(numLinhas)
    .fill("")
    .map(() => Array(key).fill(""))

  let index = 0
  for (let j = 0; j < key; j++) {
    for (let i = 0; i < numLinhas; i++) {
      if (index < text.length) {
        matriz[i][j] = text.charAt(index++)
      } else {
        break
      }
      console.log(matriz[i].join(""))
    }
  }

  let decryptedText = ""
  for (let i = 0; i < numLinhas; i++) {
    for (let j = 0; j < key; j++) {
      if (matriz[i][j] !== undefined) {
        decryptedText += matriz[i][j]
      }
    }
  }

  return decryptedText.toLocaleLowerCase()
}
