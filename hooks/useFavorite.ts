import { useCallback, useMemo } from "react";

import { SafeUser } from "@/app/types";
import axios from "axios";
import { toast } from "react-hot-toast";
import useLoginModal from "./useLoginModal";
import { useRouter } from "next/navigation";

interface IUseFavorite {
  boatId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ boatId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(boatId);
  }, [currentUser, boatId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${boatId}`);
        } else {
          request = () => axios.post(`/api/favorites/${boatId}`);
        }

        await request();
        router.refresh();
        toast.success("موفقیت آمیز بود!");
      } catch (error) {
        toast.error("مشکلی رخ داده است!");
      }
    },
    [currentUser, hasFavorited, boatId, loginModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
