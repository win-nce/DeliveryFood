export const toMoney =(value: number) => {
    return new Intl.NumberFormat("ru-RU", { style: "currency", currency: "Rub"}).format(value)
}