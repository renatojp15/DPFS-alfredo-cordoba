let userService = {
    async getTotalUsers(){
        try{
            let response = await fetch('http://localhost:3000/api/users');
            if(!response.ok){
                throw new Error('Error Al Obtener El Total De Usuarios');
        }
            let data = await response.json();
            return data.count;
        }
        catch(error){
            console.error('Error al obtener el total de productos:', error);
            throw error;
        }
    }
};

export default userService;