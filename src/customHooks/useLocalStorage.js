import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        try {
            setTimeout(() => {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
        
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
        
                setItem(parsedItem);
                setLoading(false);
            }, 1000);
        } catch (error) {
            setError(error);
        }
    })
    
    const saveItem = (updatedItem) => {
        setItem(updatedItem);
        localStorage.setItem(itemName, JSON.stringify(updatedItem));
    };

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };
