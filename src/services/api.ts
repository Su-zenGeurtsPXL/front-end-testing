export const fetchMenu = async (): Promise<any> => {
    try {
        const response = await fetch('http://localhost:3000/menu');
        const menuData = await response.json();
        return menuData;
    } catch (error) {
        throw new Error('Failed to fetch menu items');
    }
};