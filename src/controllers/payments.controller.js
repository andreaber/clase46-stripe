import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY)

export const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Laptop',
                        description: 'Gamming laptop'
                    },
                    currency: 'usd',
                    unit_amount: 199099 //1990.99
                },
                quantity: 1,
            },
            {
                price_data: {
                    product_data: {
                        name: 'SmarTV',
                        description: 'Super SmarTV'
                    },
                    currency: 'usd',
                    unit_amount: 1000090 //10000.90
                },
                quantity: 2
            }
        ],
        mode: 'payment',     // 
        success_url: 'http://localhost:8080/payments/success',
        cancel_url: 'http://localhost:8080/payments/cancel'
    })
    return res.json(session)
}
