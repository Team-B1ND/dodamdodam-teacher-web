import React, { forwardRef, useImperativeHandle, useRef, KeyboardEventHandler } from "react";
import * as S from "./style";
import { Magnifyingglass } from "@b1nd/dds-web";

export interface SearchBarProps {
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  searchFn: ()=> void;
}

const NoticeSearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({onKeyDown,searchFn} , ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <S.SearchBarContainer>
        
        <S.SearchBarInput
          ref={inputRef}
          placeholder="검색할 공지를 입력하세요"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onKeyDown(e);
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
