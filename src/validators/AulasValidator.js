const yup = require('yup')

const schema = yup.object().shape({
    aula: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    horario: yup
        .number('horário inválido')
        .required('horário obrigatório'),
    data: yup
        .date('Data inválida')
        .required('Data obrigatória'),
    local: yup
        .string('Local inválido')
        .required('Local obrigatório'),
    professor: yup
        .string('professor inválido')
        .required('professor obrigatório'),
})

function aulaValidador(req, res, next) {
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
    aulaValidador
}