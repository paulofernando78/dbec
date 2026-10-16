// Essas funções convertem o hash e o salt entre bytes e texto para podermos armazená-los no D1.

const encoder = new TextEncoder();

const toHex = (buffer) =>
  [...new Uint8Array(buffer)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

const fromHex = (value) =>
  new Uint8Array(value.match(/.{2}/g).map((byte) => Number.parseInt(byte, 16)));

// Gera um salt aleatório.
// Cria um hash seguro da senha.
// Retorna apenas hash e salt para salvar no D1.
// Nunca salva a senha original.

export const createPassword = async (password) => {
  const salt = crypto.getRandomValues(new Uint8Array(16));

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );

  const hash = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt,
      iterations: 210_000,
    },
    key,
    256,
  );

  return {
    hash: toHex(hash),
    salt: toHex(salt),
  };
};

export const verifyPassword = async (password, expectedHash, salt) => {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );

  const hash = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: fromHex(salt),
      iterations: 210_000,
    },
    key,
    256,
  );

  return toHex(hash) === expectedHash;
};
