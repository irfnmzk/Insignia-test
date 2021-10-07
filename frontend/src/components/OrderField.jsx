import { useState } from "react";

import { Button, useModal, TextInput, Select } from "@apideck/components";
import { useForm } from "react-hook-form";
import useOrders from "../hooks/useOrders";

export default function OrderField() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { removeModal } = useModal();
  const { createOrder } = useOrders();

  const onSubmit = async (data) => {
    setIsLoading(true);

    const params = {
      customerEmail: data.customerEmail,
      paymentStatus: Boolean(data.paymentStatus),
      fulfillmentStatus: Boolean(data.fulfillmentStatus),
      total: Number(data.total),
    };

    try {
      const response = await createOrder(params);

      if (response) {
        removeModal();
      }
    } catch (err) {
      console.log(err);
      removeModal();
    } finally {
      removeModal();
    }
  };

  return (
    <>
      <h2 className="mb-4 text-xl font-semibold text-gray-700">Create Order</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="customerEmail"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Customer Email
        </label>
        <TextInput
          className="mt-1"
          name="customerEmail"
          {...register("customerEmail")}
        />

        <div className="flex flex-row w-full justify-between mt-4">
          <div>
            <label
              htmlFor="paymentStatus"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Payment Status
            </label>
            <Select
              name="paymentStatus"
              {...register("paymentStatus")}
              options={[
                { label: "Paid", value: true },
                { label: "Not Paid", value: false },
              ]}
            />
          </div>
          <div>
            <label
              htmlFor="fulfillmentStatus"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Fulfillment Status
            </label>
            <Select
              name="fulfillmentStatus"
              {...register("fulfillmentStatus")}
              options={[
                { label: "Fulfilled", value: true },
                { label: "Not Fulfilled", value: false },
              ]}
            />
          </div>
        </div>

        <label
          htmlFor="total"
          className="block text-sm font-medium leading-5 text-gray-700 mt-4"
        >
          Total
        </label>
        <TextInput
          className="mt-1"
          name="total"
          type="number"
          {...register("total")}
          required
        />

        <div className="p-4 mt-5 -m-5 sm:px-5 sm:mt-6 sm:-m-6 bg-gray-50">
          <div>
            <div className="flex flex-row-reverse">
              <Button
                text="Create"
                type="submit"
                isLoading={isLoading}
                className="ml-3 mr-1"
              />
              <Button
                text="Cancel"
                onClick={() => removeModal()}
                className="inline-flex"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
