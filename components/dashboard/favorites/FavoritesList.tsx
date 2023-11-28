"use client";

import React, { useCallback, useState } from "react";
import { SafeListing, SafeUser } from "@/app/types";

import ListingItem from "../ListingItem";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface FavoritesProps {
  favorites: SafeListing[];
  currentUser?: SafeUser | null;
}
const FavoritesList: React.FC<FavoritesProps> = ({
  currentUser,
  favorites,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/favorites/${id}`)
        .then(() => {
          toast.success("حذف از لیست موردعلاقه ها موفق بود!");
          router.refresh();
        })
        .catch(() => {
          toast.error("مشکلی رخ داده است!");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <div>
      <h3 className="text-gray-800 text-xl bold m-4">مورد علاقه ها</h3>
      <div className="bg-white flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 flex-wrap rounded-md shadow-md p-5">
        {favorites.map((favorite): any => (
          <ListingItem
            key={favorite.id}
            data={favorite}
            currentUser={currentUser}
            actionId={favorite.id}
            onAction={onCancel}
            disabled={deletingId === favorite.id}
            actionLabel="حذف از موردعلاقه ها"
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
