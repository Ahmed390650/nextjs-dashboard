import { fetchCustomers, fetchCustomersPage } from "@/app/lib/data";
import { CreateCustomer } from "@/app/ui/customers/buttons";
import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "customers",
};
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string; page: string }>;
}) => {
  const { query = "", page } = await searchParams;
  const currentPage = Number(page) || 1;
  const totalPages = await fetchCustomersPage();
  return (
    <main className="w-full ">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="flex items-center justify-between gap-2 md:mt-8 mt-4">
        <Search placeholder="Search Customer ...." />
        <CreateCustomer />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
};

export default page;
