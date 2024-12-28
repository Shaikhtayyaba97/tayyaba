// app/api/cart/route.ts
let cart: Array<any> = [];  // Store the cart items

// Handling POST request to add items to the cart
export async function POST(req: Request) {
  const { productId, productName, productPrice, quantity } = await req.json();
  
  const product = { productId, productName, productPrice, quantity };
  cart.push(product);

  return new Response(JSON.stringify({ message: 'Product added to cart!', cart }), {
    status: 200,
  });
}

// Handling GET request to retrieve cart items
export async function GET() {
  return new Response(JSON.stringify({ cart }), { status: 200 });
}