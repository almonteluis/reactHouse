import { useMemo } from 'react';

const useFeaturedHouse = (allHouses) => {
    const featuredHouse = useMemo(() => {
        if (allHouses && allHouses.length > 0) {
            const randomIndex = Math.floor(Math.random() * allHouses.length);
            return allHouses[randomIndex];
        }
        return null; // Return null if no houses are available
    }, [allHouses]);

    return featuredHouse;
};

export default useFeaturedHouse;
