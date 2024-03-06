export const priceFormat = (amount: any) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD", 
    }).format(amount);
}

