import { useRef } from "react";

export const useAddMember = () => {
        const searchRef = useRef<HTMLInputElement>(null);
        const searchSubmit = () => {
          console.log('검색어 post');
        };

    return{
        searchRef,
        searchSubmit,
    }
}
