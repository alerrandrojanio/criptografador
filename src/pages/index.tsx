import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

const cipherAlphabet = "qwertyuiopasdfghjklzxcvbnm"

export default function Home() {
  const [originalText, setOriginalText] = useState("")
  const [encryptedText, setEncryptedText] = useState("")

  const [encryptText, setEncryptText] = useState("")
  const [decryptedText, setDecryptedText] = useState("")

  function handleEncrypt() {
    setEncryptedText(
      monoalphabeticSubstitutionEncrypt(originalText, cipherAlphabet)
    )
  }

  function handleDecrypt() {
    setDecryptedText(
      monoalphabeticSubstitutionDecrypt(encryptText, cipherAlphabet)
    )
  }

  return (
    <main className={`h-screen ${inter.className}`}>
      <div className="h-screen w-full flex flex-col gap-16 justify-center items-center px-16">
        <div className="w-full flex justify-center items-center">
          <span className="text-xl">Substituição Monoalfabética</span>
        </div>
        <div className="w-full flex flex-row gap-16 justify-center items-center px-16">
          <section className="w-1/2 border border-black rounded-lg p-4">
            <div className="">
              <div className="flex items-center justify-center flex-col gap-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="text">Texto a ser criptografado</label>
                  <textarea
                    id="text"
                    rows={7}
                    value={originalText}
                    onChange={(e) => setOriginalText(e.target.value)}
                    className="bg-zinc-200 rounded p-2"
                  />
                </div>

                <button
                  onClick={handleEncrypt}
                  className="bg-zinc-200 rounded p-2 hover:bg-zinc-400"
                >
                  Encrypt
                </button>

                <div className="flex flex-col w-full">
                  <label htmlFor="text">Saída</label>
                  <textarea
                    id="result"
                    rows={7}
                    value={encryptedText}
                    className="bg-zinc-200 rounded p-2"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="w-1/2 border border-black rounded-lg p-4">
            <div className="">
              <div className="flex items-center justify-center flex-col gap-4 ">
                <div className="flex flex-col w-full">
                  <label htmlFor="text">Texto a ser descriptografado</label>
                  <textarea
                    id="text"
                    rows={7}
                    value={encryptText}
                    onChange={(e) => setEncryptText(e.target.value)}
                    className="bg-zinc-200 rounded p-2"
                  />
                </div>

                <button
                  onClick={handleDecrypt}
                  className="bg-zinc-200 rounded p-2 hover:bg-zinc-400"
                >
                  Decrypt
                </button>

                <div className="flex flex-col w-full">
                  <label htmlFor="text">Saída</label>
                  <textarea
                    id="result"
                    rows={7}
                    value={decryptedText}
                    className="bg-zinc-200 rounded p-2"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full flex justify-center items-center">
          <Link href={"/answer"} className="hover:text-zinc-600">
            Answer page
          </Link>
        </div>
      </div>
    </main>
  )
}

function monoalphabeticSubstitutionEncrypt(
  text: string,
  cipherAlphabet: string
): string {
  const plainAlphabet = "abcdefghijklmnopqrstuvwxyz"

  let encryptedText = ""

  text = text.replace(/\s/g, "")
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase()
    const index = plainAlphabet.indexOf(char)
    if (index === -1) {
      encryptedText += char
    } else {
      encryptedText += cipherAlphabet[index]
    }
  }

  return encryptedText.toLocaleUpperCase()
}

function monoalphabeticSubstitutionDecrypt(
  encryptedText: string,
  cipherAlphabet: string
): string {
  const plainAlphabet = "abcdefghijklmnopqrstuvwxyz"
  let decryptedText = ""

  for (let i = 0; i < encryptedText.length; i++) {
    const char = encryptedText[i].toLowerCase()
    const index = cipherAlphabet.indexOf(char)
    if (index === -1) {
      decryptedText += char
    } else {
      decryptedText += plainAlphabet[index]
    }
  }

  return decryptedText.toLowerCase()
}
