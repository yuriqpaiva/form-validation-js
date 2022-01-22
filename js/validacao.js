export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
}

const validadores = {
  dataNascimento: (input) => validaDataNascimento(input),
};

const validaDataNascimento = (input) => {
  const dataRecebida = new Date(input.value);
  let mensagem = '';

  if (!maiorQue18(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar';
  }

  // Se a mensagem for uma string vazia, a mensagem de
  // erro nao irá

  input.setCustomValidity(mensagem);
};

const maiorQue18 = (data) => {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );
  return dataMais18 <= dataAtual;
};
