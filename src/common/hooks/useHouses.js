import {useState, useEffect, useCallback} from 'react'

export const useHouses = () => {
    const [allHouses, setAllHouses] = useState([]);

    const fetchHouses = useCallback(async () => {
        try {
            const response = await fetch("./houses.json");
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            const house = await response.json();
            setAllHouses(house);
        } catch (error) {
            console.error('Failed to fetch houses:', error);
        }
    }, []);

    useEffect(() => {
        fetchHouses();
    }, [fetchHouses]);

    return allHouses;
}

export default useHouses;