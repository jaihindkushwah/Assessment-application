"use client";
import PaginationComponent from "@/components/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

function Pagination() {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const handlePageChange = (value: number) => {
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set("page", value + "");
    router.push(path + "?" + updatedSearchParams.toString());
  };
  const defValue = useMemo(() => {
    return searchParams.get("page")
      ? parseInt(searchParams.get("page") + "")
      : 1;
  }, [searchParams]);
  return (
    <div>
      <PaginationComponent
        totalPages={10}
        defaultPage={defValue}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default Pagination;
