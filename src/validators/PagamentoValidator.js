const yup = require('yup')

const schema = yup.object().shape({
    valor: yup
        .number('valor inválido')
        .required('valor obrigatório'),
    dataVencimento: yup
        .date('Data inválida')
        .required('data obrigatória'),
    dataPagamento: yup
        .date('Data inválida')
        .required('data obrigatória'),
    formaPagamento: yup
        .string('Forma inválida')
        .required('forma obrigatória'),
})

function pagamentoValidador(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}

module.exports = {
    pagamentoValidador
}