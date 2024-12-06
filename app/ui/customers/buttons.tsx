import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const buttons = () => {
  return <div></div>;
};

const CreateCustomer = () => {
  return (
    <Link
      href="/dashboard/customers/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
      <span className="hidden md:block">Create Customer</span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
};
const UpdateCustomer = ({ id }: { id: string }) => {
  return <>update</>;
};
const DeleteCustomer = ({ id }: { id: string }) => {
  return <>update</>;
};
export { CreateCustomer, DeleteCustomer, UpdateCustomer };
