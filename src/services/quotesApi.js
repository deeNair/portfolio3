export const getQoute=async()=>{


    try {

        const response= await fetch(`https://dummyjson.com/quotes`);
        const data=await response.json();

        console.log(response);
        return data;
    
        
    } catch (error) {
        console.error(error);
    }

}