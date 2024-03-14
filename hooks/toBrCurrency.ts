const toBRCurrency = (value: any, toFixed: number = 2, withOperator: boolean = true) => {
    if (Number(value) === 0) return "R$ 0,00";
    if (!withOperator) {
        return `R$ ${parseFloat(value).toLocaleString('pt-BR', {
            maximumFractionDigits: toFixed,
            minimumFractionDigits: toFixed
        })}`
    }
    return `R$ ${parseFloat(value).toLocaleString('pt-BR', {
        maximumFractionDigits: toFixed,
        minimumFractionDigits: toFixed
    })}`
}

export {
    toBRCurrency as toBRCurrencyHook
}
