import CheckoutForm from "@/Components/CheckoutForm";

export default function CheckoutPage() {
    return(
        <>
        <div className="text-center py-8 border">
            <h3 className="text-center text-3xl font-medium">Zainab Zara Offical</h3>
        </div>
        <div className="w-full">
                <div className="flex">

                    {/* Form Section */}
                    <div className="w-full border">
                        <div className="max-w-1/2 flex justify-end">
                        <CheckoutForm />
                        </div>
                    </div>

                    {/* Products Summary */}
                    <div className="w-full border bg-gray-400">
                        <div className="max-w-1/2 flex justify-start">
                            <div className="p-5">
                                Product Summary
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}