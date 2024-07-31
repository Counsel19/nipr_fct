import HaveAQuestion from "@/components/shared/molecules/HaveAQuestion";
import LabledInput from "@/components/shared/molecules/LabledInput";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { Button } from "@/components/ui/button";
import { FC, useState } from "react";

interface PaymentPageProps {}
const PaymentPage: FC<PaymentPageProps> = () => {
  const [inputValue, setInputValue] = useState<{
    name: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }>({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className=" relative">
      <div className="space-y-20">
        <PageTitle title="Payement Details" />

        <div className=" p-12 lg:p-20 shadow-lg rounded-lg w-[60%] mx-auto space-y-20">
          <h5 className="text-2xl leading-[3rem] text-slate-500 font-medium">
            Please provide us your card Details to be charge for the
            registration{" "}
          </h5>

          <div className="space-y-12">
            <LabledInput
              name="name"
              value={inputValue.name}
              placeholder="Your Name"
              setInputValue={handleOnchange}
              label="Card Holder Name *"
            />
            <LabledInput
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              value={inputValue.cardNumber}
              setInputValue={handleOnchange}
              label="Card Number *"
            />
            <div className="grid gap-8 lg:grid-cols-2">
              <LabledInput
                name="expiryDate"
                placeholder="MM/YY"
                value={inputValue.expiryDate}
                setInputValue={handleOnchange}
                label="Expiry Date *"
              />
              <LabledInput
                name="expiryDate"
                placeholder="..."
                value={inputValue.expiryDate}
                setInputValue={handleOnchange}
                label="CVV *"
              />
            </div>
            <Button className="w-full">Make Payements</Button>
          </div>
        </div>
      </div>

      <div className="mt-[30rem]">
        <HaveAQuestion />
      </div>
    </div>
  );
};

export default PaymentPage;
