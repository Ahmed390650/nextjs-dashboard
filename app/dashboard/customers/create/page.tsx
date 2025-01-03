import Form from "@/app/ui/customers/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "create Customers",
};
export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Create Customers",
            href: "/dashboard/customers/create",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
