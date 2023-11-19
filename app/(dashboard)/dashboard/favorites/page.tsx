import FavoriteItem from '@/components/dashboard/favorites/FavoriteItem';
import React from 'react';

const Favorites = () => {
    return (
        <div>
            <h3 className='text-gray-800 text-xl bold m-4'>مورد علاقه ها</h3>
            <div className='bg-white rounded-md space-y-3 shadow-md p-5'>
                <FavoriteItem />
                <FavoriteItem />
                <FavoriteItem />
            </div>
        </div>
    );
};

export default Favorites;