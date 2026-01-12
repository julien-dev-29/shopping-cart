export default function cartReducer(cartItems, action) {
    switch (action.type) {
        case "added":
            return [
                ...cartItems,
                {
                    id: action.id,
                    quantity: parseInt(action.quantity, 10)
                },
            ]
        case "updated":
            return cartItems.map((p) =>
                p.id === action.id ? {
                    ...p,
                    quantity: action.quantity
                } : p
            )
        case "deleted":
            return cartItems.filter((p) => p.id !== action.id)

        default:
            throw Error('Unknown action: ' + action.type);
    }
}