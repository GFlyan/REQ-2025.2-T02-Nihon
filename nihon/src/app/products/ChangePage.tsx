"use client";

import PreviousPage from "./PreviousPage";
import PagePosition from "./PagePosition";
import NextPage from "./NextPage";

type ChangePageProps = {
    previousPage: () => void;
    actualPage: number;
    lastPage: number;
    nextPage: () => void;
}

export default function ChangePage({previousPage, actualPage, lastPage, nextPage}: ChangePageProps) {
    const range = new Array(lastPage);
    for(let i = 0 ; i < lastPage ; i++) {
        range[i] = i+1;
    }  

      let visibleCount = 3; // padrão (>=360)
    if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width >= 1024) visibleCount = 5;
        else if (width >= 640) visibleCount = 4;
    }

    // Calcula o intervalo de páginas visíveis ao redor da atual
    const half = Math.floor(visibleCount / 2);
    let start = Math.max(1, actualPage - half);
    let end = Math.min(lastPage, start + visibleCount - 1);
    if (end - start + 1 < visibleCount) start = Math.max(1, end - visibleCount + 1);

    const visiblePages = range.slice(start - 1, end);

    return(
        <div className="flex gap-4">
            <PreviousPage onClickCallback={previousPage} actualPosition={actualPage}/>

            <div
        className="
          flex justify-center gap-[8px]
          w-[120px] min-[360px]:w-[120px]
          min-[640px]:w-[160px]
          min-[1024px]:w-[200px]
          overflow-visible
        "
      >
        {visiblePages.map((index) => (
          <PagePosition
            key={index}
            actualPosition={actualPage}
            pagePosition={index}
          />
        ))}
      </div>

            <NextPage actualPosition={actualPage} lastPosition={lastPage} onClickCallback={nextPage}/>
        </div>
    );
}