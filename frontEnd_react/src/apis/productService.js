const productService = {
    async getTotalProducts() {
        try {
            const response = await fetch('http://localhost:3000/api/products');
            if (!response.ok) {
                throw new Error('Error al obtener el total de productos');
            }
            const data = await response.json();
            return data.count; // Aquí accedes a la propiedad 'count' del resultado
        } catch (error) {
            console.error('Error al obtener el total de productos:', error);
            throw error;
        }
    }
};

export default productService;