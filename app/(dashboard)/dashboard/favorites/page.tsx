import FavoriteItem from '@/components/dashboard/favorites/FavoriteItem';
import FavoritesList from '@/components/dashboard/favorites/FavoritesList';
import React from 'react';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getFavoriteListings from '@/app/actions/getFavoriteListings';

const Favorites = async () => {
    const currentUser = getCurrentUser();
    if(!currentUser){
        <>
        <h3 className="text-gray-800 text-xl bold m-4">رزرو شده</h3>
        <div className="bg-white flex flex-col items-center justify-center gap-5 flex-wrap rounded-md shadow-md p-5">
          <h2 className="text-gray-800 text-lg bold">اجاره دسترسی ندارید!</h2>
          <h3 className="text-sm text-gray-600">لطفا وارد شوید!</h3>
        </div>
      </>
    }

    const favorites = await getFavoriteListings();
    if(favorites.length === 0){
        return (
            <>
              <h3 className="text-gray-800 text-xl bold m-4">مورد علاقه ها</h3>
              <div className="bg-white flex flex-col items-center justify-center gap-5 flex-wrap rounded-md shadow-md p-5 h-[86%]">
                <h2 className="text-gray-800 text-lg bold">یافت نشد!</h2>
                <h3 className="text-sm text-gray-600">ظاهرا موردی در لیست مورد علاقه ها ندارید!</h3>
              </div>
            </>
          );
    }
    
    return <FavoritesList currentUser={currentUser} favorites={favorites} />;
};

export default Favorites;