import React, { forwardRef, useImperativeHandle, useRef, KeyboardEventHandler } from "react";
import * as S from "./style";
import { Magnifyingglass } from "@b1nd/dds-web";

export interface SearchBarProps {
  searchFn: ()=> void;
  placeholder?:string;
}

const NoticeSearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({searchFn,placeholder} , ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <S.SearchBarContainer>
        
        <S.SearchBarInput
          ref={inputRef}
          placeholder={placeholder ? placeholder : "검색할 공지를 입력하세요" }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchFn();
            }
          }}
        />
        <S.IconImg>
          <Magnifyingglass size={20} color="labelAlternative" />
        </S.IconImg>
        <span onClick={()=>searchFn()}>검색</span>
      </S.SearchBarContainer>
    );
  }
);

export default NoticeSearchBar;
