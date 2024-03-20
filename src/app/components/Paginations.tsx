"use client";

import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FC } from "react";

interface PaginationInterface {
  pages: number;
  page: number;
}

const Paginations: FC<PaginationInterface> = ({ page, pages }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleOnChange = (_page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", _page.toString());
    router.replace(`?${params}`);
  };
  return (
    <Pagination
      isCompact
      showControls
      total={pages}
      page={page}
      initialPage={1}
      onChange={handleOnChange}
    />
  );
};

export default Paginations;
