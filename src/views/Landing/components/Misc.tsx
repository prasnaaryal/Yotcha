import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const Misc = () => {
  return (
    <div className="bg-gray-200">
    <div>
          <img className="w-full" src="/assets/Frame.png" alt="" />
        </div>

        {/* why choose us */}

        <div className="flex justify-center items-center mt-20 flex-col">
          <h1 className="font-bold mb-6">Why Choose Us</h1>

          <div className="m-16 flex gap-12">
            <Card className="w-[262px] h-[340px]">
              <CardContent className="flex  flex-col gap-12 p-12 items-center justify-center">
                <img
                  src="/assets/image8.png"
                  alt="Sunset in the mountains"
                  className=" w-[112px] h-[112px]"
                />

                <div className="text-center">
                  <h1 className="font-semibold text-base">
                    Trusted By Thousands
                  </h1>
                  <p className="font-light text-base	">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[262px] h-[340px] gap-10">
              <CardContent className="flex  flex-col gap-12 p-12 items-center justify-center">
                <img
                  src="/assets/image8.png"
                  alt="Sunset in the mountains"
                  className=" w-[112px] h-[112px]"
                />

                <div className="text-center">
                  <h1 className="font-semibold text-base">
                    Trusted By Thousands
                  </h1>
                  <p className="font-light text-base	">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[262px] h-[340px] gap-10">
              <CardContent className="flex  flex-col gap-12 p-12 items-center justify-center">
                <img
                  src="/assets/image8.png"
                  alt="Sunset in the mountains"
                  className=" w-[112px] h-[112px]"
                />

                <div className="text-center">
                  <h1 className="font-semibold text-base">
                    Trusted By Thousands
                  </h1>
                  <p className="font-light text-base	">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[262px] h-[340px] gap-10">
              <CardContent className="flex  flex-col gap-12 p-12 items-center justify-center">
                <img
                  src="/assets/image8.png"
                  alt="Sunset in the mountains"
                  className=" w-[112px] h-[112px]"
                />

                <div className="text-center">
                  <h1 className="font-semibold text-base">
                    Trusted By Thousands
                  </h1>
                  <p className="font-light text-base	">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque{" "}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              src="/assets/image9.jpg"
              alt="smt"
              className="w-full h-[621px]"
            />

            <div className="absolute inset-x-0 top-0 flex items-center justify-center flex-col text-center mt-12">
              <h1 className="text-3xl font-semibold	text-black">
                Find Your Dream Home Today
              </h1>
              <Button
                className="mt-6 rounded w-[133px] h-[44px]"
                variant={"default"}
                size={"lg"}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Misc