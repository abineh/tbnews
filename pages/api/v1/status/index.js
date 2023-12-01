function status(request, response) {
  response.status(200).json({ chave: "valor é foda são doido" });
}

export default status;
